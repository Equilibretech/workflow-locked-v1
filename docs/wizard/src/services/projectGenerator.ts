export interface ProjectConfig {
  projectName: string;
  description: string;
  projectType: 'ecommerce' | 'blog' | 'portfolio' | 'saas' | 'custom';
  stack: 'react-node' | 'vue-firebase' | 'nextjs';
  features: string[];
}

export interface FileStructure {
  [path: string]: string | FileStructure;
}

export class ProjectGenerator {
  private config: ProjectConfig;

  constructor(config: ProjectConfig) {
    this.config = config;
  }

  generateProjectStructure(): FileStructure {
    const baseStructure = this.getBaseStructure();
    const stackSpecific = this.getStackSpecificStructure();
    const typeSpecific = this.getTypeSpecificStructure();
    const featureSpecific = this.getFeatureSpecificStructure();

    return this.mergeStructures(baseStructure, stackSpecific, typeSpecific, featureSpecific);
  }

  private getBaseStructure(): FileStructure {
    return {
      'package.json': this.generatePackageJson(),
      'README.md': this.generateReadme(),
      '.gitignore': this.generateGitignore(),
      '.env.example': this.generateEnvExample(),
      'CLAUDE.md': this.generateClaudeConfig(),
      '.vibe.json': this.generateVibeConfig(),
      'src/': {
        'index.ts': '// Project entry point\nconsole.log("Hello from " + process.env.PROJECT_NAME || "' + this.config.projectName + '");'
      },
      'docs/': {
        'PROJECT_SETUP.md': this.generateSetupGuide()
      },
      'tests/': {
        'setup.test.ts': this.generateTestSetup()
      }
    };
  }

  private getStackSpecificStructure(): FileStructure {
    switch (this.config.stack) {
      case 'react-node':
        return {
          'src/': {
            'components/': {
              'App.tsx': this.generateReactApp(),
              'Layout.tsx': this.generateReactLayout()
            },
            'server/': {
              'index.js': this.generateNodeServer(),
              'routes/': {
                'api.js': this.generateApiRoutes()
              }
            },
            'styles/': {
              'globals.css': this.generateGlobalStyles()
            }
          },
          'public/': {
            'index.html': this.generateIndexHtml()
          },
          'tsconfig.json': this.generateTsConfig(),
          'vite.config.ts': this.generateViteConfig()
        };

      case 'nextjs':
        return {
          'pages/': {
            'index.tsx': this.generateNextjsHome(),
            'api/': {
              'hello.ts': this.generateNextjsApi()
            },
            '_app.tsx': this.generateNextjsApp()
          },
          'components/': {
            'Layout.tsx': this.generateReactLayout()
          },
          'styles/': {
            'globals.css': this.generateGlobalStyles()
          },
          'next.config.js': this.generateNextConfig(),
          'tsconfig.json': this.generateTsConfig()
        };

      case 'vue-firebase':
        return {
          'src/': {
            'components/': {
              'App.vue': this.generateVueApp(),
              'HelloWorld.vue': this.generateVueComponent()
            },
            'firebase/': {
              'config.ts': this.generateFirebaseConfig()
            }
          },
          'vue.config.js': this.generateVueConfig()
        };

      default:
        return {};
    }
  }

  private getTypeSpecificStructure(): FileStructure {
    switch (this.config.projectType) {
      case 'ecommerce':
        return {
          'src/': {
            'components/': {
              'ProductCard.tsx': this.generateProductCard(),
              'Cart.tsx': this.generateCart(),
              'Checkout.tsx': this.generateCheckout()
            },
            'types/': {
              'product.ts': this.generateProductTypes()
            }
          }
        };

      case 'blog':
        return {
          'src/': {
            'components/': {
              'BlogPost.tsx': this.generateBlogPost(),
              'BlogList.tsx': this.generateBlogList()
            },
            'types/': {
              'blog.ts': this.generateBlogTypes()
            },
            'content/': {
              'sample-post.md': this.generateSamplePost()
            }
          }
        };

      case 'portfolio':
        return {
          'src/': {
            'components/': {
              'Portfolio.tsx': this.generatePortfolio(),
              'ProjectCard.tsx': this.generateProjectCard()
            },
            'data/': {
              'projects.json': this.generateProjectsData()
            }
          }
        };

      case 'saas':
        return {
          'src/': {
            'components/': {
              'Dashboard.tsx': this.generateDashboard(),
              'Pricing.tsx': this.generatePricing(),
              'Auth/': {
                'Login.tsx': this.generateLogin(),
                'Register.tsx': this.generateRegister()
              }
            }
          }
        };

      default:
        return {};
    }
  }

  private getFeatureSpecificStructure(): FileStructure {
    const structure: FileStructure = {};

    if (this.config.features.includes('auth')) {
      structure['src/auth/'] = {
        'auth.ts': this.generateAuthService(),
        'middleware.ts': this.generateAuthMiddleware()
      };
    }

    if (this.config.features.includes('payment')) {
      structure['src/payment/'] = {
        'stripe.ts': this.generateStripeIntegration(),
        'types.ts': this.generatePaymentTypes()
      };
    }

    if (this.config.features.includes('api')) {
      structure['src/api/'] = {
        'client.ts': this.generateApiClient(),
        'types.ts': this.generateApiTypes()
      };
    }

    if (this.config.features.includes('email')) {
      structure['src/email/'] = {
        'service.ts': this.generateEmailService(),
        'templates/': {
          'welcome.html': this.generateEmailTemplate()
        }
      };
    }

    return structure;
  }

  private mergeStructures(...structures: FileStructure[]): FileStructure {
    const result: FileStructure = {};

    for (const structure of structures) {
      this.deepMerge(result, structure);
    }

    return result;
  }

  private deepMerge(target: FileStructure, source: FileStructure): void {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {};
        }
        this.deepMerge(target[key] as FileStructure, source[key] as FileStructure);
      } else {
        target[key] = source[key];
      }
    }
  }

  // File content generators
  private generatePackageJson(): string {
    const dependencies = this.getStackDependencies();
    
    return JSON.stringify({
      name: this.config.projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      version: '1.0.0',
      description: this.config.description,
      main: 'src/index.ts',
      scripts: this.getStackScripts(),
      dependencies,
      devDependencies: this.getDevDependencies(),
      keywords: [this.config.projectType, this.config.stack],
      author: '',
      license: 'MIT'
    }, null, 2);
  }

  private getStackDependencies(): Record<string, string> {
    const base = {
      'react-node': {
        'react': '^18.2.0',
        'react-dom': '^18.2.0',
        'express': '^4.18.2',
        'cors': '^2.8.5'
      },
      'nextjs': {
        'next': '^14.0.0',
        'react': '^18.2.0',
        'react-dom': '^18.2.0'
      },
      'vue-firebase': {
        'vue': '^3.3.0',
        'firebase': '^10.0.0',
        'vue-router': '^4.2.0'
      }
    };

    return base[this.config.stack] || {};
  }

  private getStackScripts(): Record<string, string> {
    const scripts = {
      'react-node': {
        'dev': 'concurrently "npm run server" "npm run client"',
        'client': 'vite',
        'server': 'node src/server/index.js',
        'build': 'vite build',
        'test': 'vitest'
      },
      'nextjs': {
        'dev': 'next dev',
        'build': 'next build',
        'start': 'next start',
        'test': 'jest'
      },
      'vue-firebase': {
        'dev': 'vue-cli-service serve',
        'build': 'vue-cli-service build',
        'test': 'vue-cli-service test:unit'
      }
    };

    return scripts[this.config.stack] || {};
  }

  private getDevDependencies(): Record<string, string> {
    return {
      'typescript': '^5.0.0',
      '@types/node': '^20.0.0',
      'eslint': '^8.0.0',
      'prettier': '^3.0.0',
      'vitest': '^1.0.0'
    };
  }

  private generateReadme(): string {
    return `# ${this.config.projectName}

${this.config.description}

## Tech Stack

- **Type**: ${this.config.projectType}
- **Framework**: ${this.config.stack}
- **Features**: ${this.config.features.join(', ')}

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Set up environment variables:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Project Structure

This project follows the DevFoundation Workflow Locked methodology with 7 gated stages for professional development.

## Development

Built with DevFoundation Wizard - Configuration Guidée
Generated on ${new Date().toISOString().split('T')[0]}
`;
  }

  private generateGitignore(): string {
    return `node_modules/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
dist/
build/
coverage/
.nyc_output/
.cache/
.parcel-cache/
.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.vscode/
.idea/
*.swp
*.swo
`;
  }

  private generateEnvExample(): string {
    const vars = ['NODE_ENV=development'];
    
    if (this.config.features.includes('auth')) {
      vars.push('JWT_SECRET=your-secret-key');
    }
    
    if (this.config.features.includes('payment')) {
      vars.push('STRIPE_SECRET_KEY=sk_test_...');
      vars.push('STRIPE_PUBLISHABLE_KEY=pk_test_...');
    }
    
    if (this.config.stack === 'vue-firebase') {
      vars.push('FIREBASE_API_KEY=your-api-key');
      vars.push('FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com');
    }

    vars.push(`PROJECT_NAME=${this.config.projectName}`);
    
    return vars.join('\n') + '\n';
  }

  private generateClaudeConfig(): string {
    return `# ${this.config.projectName} - Claude Configuration

This project was generated using DevFoundation Wizard.

## Project Context

- **Name**: ${this.config.projectName}
- **Type**: ${this.config.projectType}
- **Stack**: ${this.config.stack}
- **Features**: ${this.config.features.join(', ')}

## Development Commands

\`\`\`bash
# Start development
npm run dev

# Run tests
npm test

# Build for production
npm run build
\`\`\`

## Architecture Notes

${this.getArchitectureNotes()}

Generated on ${new Date().toISOString().split('T')[0]}
`;
  }

  private generateVibeConfig(): string {
    return JSON.stringify({
      goal: `Build a ${this.config.projectType} application: ${this.config.description}`,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      client: 'Personal Project',
      stack: this.config.stack,
      features: this.config.features,
      metrics: {
        performance: 'Fast loading times',
        quality: 'High code quality with tests',
        user_experience: 'Intuitive and responsive design'
      },
      priorities: [
        'User experience',
        'Code quality',
        'Performance',
        'Security'
      ],
      generated_by: 'DevFoundation Wizard',
      generated_at: new Date().toISOString()
    }, null, 2);
  }

  // Component generators (simplified versions)
  private generateReactApp(): string {
    return `import React from 'react';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to ${this.config.projectName}
        </h1>
        <p className="text-lg text-gray-600 text-center">
          ${this.config.description}
        </p>
      </div>
    </Layout>
  );
}

export default App;
`;
  }

  private generateReactLayout(): string {
    return `import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">${this.config.projectName}</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ${this.config.projectName}. Built with DevFoundation.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
`;
  }

  private generateNodeServer(): string {
    return `const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    project: '${this.config.projectName}',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;
  }

  private generateApiRoutes(): string {
    return `const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

module.exports = router;
`;
  }

  // Additional generators would be implemented here...
  private generateGlobalStyles(): string {
    return `/* Global styles for ${this.config.projectName} */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
`;
  }

  private generateIndexHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.config.projectName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/index.ts"></script>
</body>
</html>
`;
  }

  private generateTsConfig(): string {
    return JSON.stringify({
      compilerOptions: {
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        allowJs: false,
        skipLibCheck: true,
        esModuleInterop: false,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        module: 'ESNext',
        moduleResolution: 'Node',
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: 'react-jsx'
      },
      include: ['src'],
      references: [{ path: './tsconfig.node.json' }]
    }, null, 2);
  }

  private generateViteConfig(): string {
    return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});
`;
  }

  // Placeholder implementations for other generators
  private generateSetupGuide(): string { return '# Setup Guide\n\nDetailed setup instructions...'; }
  private generateTestSetup(): string { return '// Test setup configuration'; }
  private generateNextjsHome(): string { return 'export default function Home() { return <div>Next.js Home</div>; }'; }
  private generateNextjsApi(): string { return 'export default function handler(req, res) { res.json({ hello: "world" }); }'; }
  private generateNextjsApp(): string { return 'export default function App({ Component, pageProps }) { return <Component {...pageProps} />; }'; }
  private generateNextConfig(): string { return 'module.exports = {};'; }
  private generateVueApp(): string { return '<template><div>Vue App</div></template>'; }
  private generateVueComponent(): string { return '<template><div>Vue Component</div></template>'; }
  private generateFirebaseConfig(): string { return 'export const firebaseConfig = {};'; }
  private generateVueConfig(): string { return 'module.exports = {};'; }
  private generateProductCard(): string { return 'export default function ProductCard() {}'; }
  private generateCart(): string { return 'export default function Cart() {}'; }
  private generateCheckout(): string { return 'export default function Checkout() {}'; }
  private generateProductTypes(): string { return 'export interface Product {}'; }
  private generateBlogPost(): string { return 'export default function BlogPost() {}'; }
  private generateBlogList(): string { return 'export default function BlogList() {}'; }
  private generateBlogTypes(): string { return 'export interface BlogPost {}'; }
  private generateSamplePost(): string { return '# Sample Post\n\nContent...'; }
  private generatePortfolio(): string { return 'export default function Portfolio() {}'; }
  private generateProjectCard(): string { return 'export default function ProjectCard() {}'; }
  private generateProjectsData(): string { return JSON.stringify([{ name: 'Sample Project' }], null, 2); }
  private generateDashboard(): string { return 'export default function Dashboard() {}'; }
  private generatePricing(): string { return 'export default function Pricing() {}'; }
  private generateLogin(): string { return 'export default function Login() {}'; }
  private generateRegister(): string { return 'export default function Register() {}'; }
  private generateAuthService(): string { return 'export class AuthService {}'; }
  private generateAuthMiddleware(): string { return 'export function authMiddleware() {}'; }
  private generateStripeIntegration(): string { return 'export class StripeService {}'; }
  private generatePaymentTypes(): string { return 'export interface Payment {}'; }
  private generateApiClient(): string { return 'export class ApiClient {}'; }
  private generateApiTypes(): string { return 'export interface ApiResponse {}'; }
  private generateEmailService(): string { return 'export class EmailService {}'; }
  private generateEmailTemplate(): string { return '<html><body>Welcome!</body></html>'; }

  private getArchitectureNotes(): string {
    const notes = [`This ${this.config.projectType} application uses ${this.config.stack} architecture.`];
    
    if (this.config.features.includes('auth')) {
      notes.push('- Authentication system implemented');
    }
    if (this.config.features.includes('payment')) {
      notes.push('- Payment processing with Stripe');
    }
    if (this.config.features.includes('api')) {
      notes.push('- RESTful API endpoints');
    }

    return notes.join('\n');
  }
}

export async function generateProjectFiles(config: ProjectConfig): Promise<{ path: string; content: string }[]> {
  const generator = new ProjectGenerator(config);
  const structure = generator.generateProjectStructure();
  
  const files: { path: string; content: string }[] = [];
  
  function traverse(obj: FileStructure, currentPath: string = '') {
    for (const [key, value] of Object.entries(obj)) {
      const fullPath = currentPath ? `${currentPath}/${key}` : key;
      
      if (typeof value === 'string') {
        files.push({ path: fullPath, content: value });
      } else {
        traverse(value, fullPath);
      }
    }
  }
  
  traverse(structure);
  return files;
}