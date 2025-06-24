export interface ProjectFile {
  path: string;
  content: string;
}

export class FileSystemService {
  private projectRoot: string;

  constructor(projectRoot: string = '../../../projects') {
    this.projectRoot = projectRoot;
  }

  async createProject(projectName: string, files: ProjectFile[]): Promise<void> {
    // Sanitize project name
    const sanitizedName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const projectPath = `${this.projectRoot}/${sanitizedName}`;

    try {
      // In a real environment, this would create actual files
      // For now, we'll simulate the process and provide instructions
      
      const instructions = this.generateInstructions(projectPath, files);
      
      // Show instructions to user
      this.showCreationInstructions(instructions);
      
      // In a browser environment, we could use the File System Access API
      // or provide downloadable files
      if ('showDirectoryPicker' in window) {
        await this.createWithFileSystemAPI(sanitizedName, files);
      } else {
        this.downloadProjectAsZip(sanitizedName, files);
      }
      
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error(`Failed to create project: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private generateInstructions(projectPath: string, files: ProjectFile[]): string {
    const commands = [
      `# Create project directory`,
      `mkdir -p ${projectPath}`,
      `cd ${projectPath}`,
      ``,
      `# Create project files`,
    ];

    // Group files by directory
    const directories = new Set<string>();
    files.forEach(file => {
      const dir = file.path.includes('/') ? file.path.substring(0, file.path.lastIndexOf('/')) : '';
      if (dir) directories.add(dir);
    });

    // Create directories first
    directories.forEach(dir => {
      commands.push(`mkdir -p "${dir}"`);
    });

    commands.push('');

    // Create files
    files.forEach(file => {
      if (file.content.includes('\n') || file.content.length > 100) {
        commands.push(`cat > "${file.path}" << 'EOF'`);
        commands.push(file.content);
        commands.push('EOF');
        commands.push('');
      } else {
        commands.push(`echo "${file.content.replace(/"/g, '\\"')}" > "${file.path}"`);
      }
    });

    commands.push('# Install dependencies');
    commands.push('npm install');
    commands.push('');
    commands.push('# Initialize git repository');
    commands.push('git init');
    commands.push('git add .');
    commands.push('git commit -m "Initial commit: Project generated with DevFoundation Wizard"');

    return commands.join('\n');
  }

  private showCreationInstructions(instructions: string): void {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            🎉 Project Generated Successfully!
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            Your project has been generated. Choose how to proceed:
          </p>
        </div>
        
        <div class="flex-1 overflow-y-auto p-6">
          <div class="space-y-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Option 1: Terminal Commands
              </h3>
              <p class="text-sm text-blue-800 dark:text-blue-400 mb-3">
                Copy and paste these commands in your terminal:
              </p>
              <div class="bg-gray-900 rounded p-3 overflow-x-auto">
                <pre class="text-green-400 text-sm font-mono whitespace-pre-wrap" id="terminal-commands">${instructions}</pre>
              </div>
              <button 
                onclick="navigator.clipboard.writeText(document.getElementById('terminal-commands').textContent)"
                class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Copy Commands
              </button>
            </div>
            
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-green-900 dark:text-green-300 mb-2">
                Option 2: Download Project
              </h3>
              <p class="text-sm text-green-800 dark:text-green-400 mb-3">
                Download the project as a ZIP file and extract it:
              </p>
              <button 
                id="download-btn"
                class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                Download ZIP
              </button>
            </div>
            
            ${('showDirectoryPicker' in window) ? `
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Option 3: Save to Local Folder
              </h3>
              <p class="text-sm text-purple-800 dark:text-purple-400 mb-3">
                Select a folder on your computer to save the project:
              </p>
              <button 
                id="folder-btn"
                class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
              >
                Choose Folder
              </button>
            </div>
            ` : ''}
          </div>
        </div>
        
        <div class="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button 
            onclick="this.closest('.fixed').remove()"
            class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Add event listeners
    const downloadBtn = modal.querySelector('#download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        // This would be implemented by the calling code
        modal.dispatchEvent(new CustomEvent('download-project'));
      });
    }

    const folderBtn = modal.querySelector('#folder-btn');
    if (folderBtn) {
      folderBtn.addEventListener('click', () => {
        // This would be implemented by the calling code  
        modal.dispatchEvent(new CustomEvent('save-to-folder'));
      });
    }

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  private async createWithFileSystemAPI(projectName: string, files: ProjectFile[]): Promise<void> {
    try {
      // @ts-ignore - File System Access API
      const dirHandle = await window.showDirectoryPicker();
      
      // Create project directory
      const projectHandle = await dirHandle.getDirectoryHandle(projectName, { create: true });
      
      // Create files
      for (const file of files) {
        await this.createFileInDirectory(projectHandle, file.path, file.content);
      }
      
      console.log('Project created successfully using File System Access API');
    } catch (error) {
      console.error('Error using File System Access API:', error);
      throw error;
    }
  }

  private async createFileInDirectory(dirHandle: any, filePath: string, content: string): Promise<void> {
    const pathParts = filePath.split('/');
    const fileName = pathParts.pop()!;
    
    // Navigate/create directory structure
    let currentDir = dirHandle;
    for (const part of pathParts) {
      currentDir = await currentDir.getDirectoryHandle(part, { create: true });
    }
    
    // Create file
    const fileHandle = await currentDir.getFileHandle(fileName, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
  }

  private downloadProjectAsZip(projectName: string, files: ProjectFile[]): void {
    // This would use a library like JSZip to create a downloadable ZIP
    // For now, we'll create individual file downloads or show instructions
    
    const message = `
Project "${projectName}" is ready!

To create this project manually:

1. Create a new directory: mkdir ${projectName}
2. Navigate to it: cd ${projectName}
3. Create the following files:

${files.map(f => `- ${f.path}`).join('\n')}

Or use the terminal commands provided in the previous step.
    `;

    alert(message);
  }

  async executeProjectTasks(tasks: string[], onProgress?: (task: string, index: number, total: number) => void): Promise<void> {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      
      if (onProgress) {
        onProgress(task, i, tasks.length);
      }

      // Simulate task execution
      await this.simulateTask(task);
    }
  }

  private async simulateTask(task: string): Promise<void> {
    // Simulate different task durations
    const duration = this.getTaskDuration(task);
    
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }

  private getTaskDuration(task: string): number {
    const durations: Record<string, number> = {
      'Installation des dépendances': 3000,
      'Configuration du projet': 1500,
      'Création de la structure': 2000,
      'Tests initiaux': 2500,
      'Tests unitaires': 2000,
      'Tests d\'intégration': 1800,
      'Couverture de code': 1200,
      'Linting': 800,
      'Build de production': 3500,
      'Configuration CI/CD': 2200,
      'Déploiement': 4000,
      'Monitoring': 1500
    };

    return durations[task] || 1000;
  }

  generateProjectCommands(projectName: string, formData: any): string[] {
    const commands = [];
    const sanitizedName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    
    // Base setup commands
    commands.push(`mkdir -p ../../../projects/${sanitizedName}`);
    commands.push(`cd ../../../projects/${sanitizedName}`);
    
    // Stack-specific commands
    switch (formData.stack) {
      case 'react-node':
        commands.push('npm create vite@latest . -- --template react-ts');
        commands.push('npm install express cors');
        break;
      case 'nextjs':
        commands.push('npx create-next-app@latest . --typescript --tailwind --app');
        break;
      case 'vue-firebase':
        commands.push('npm create vue@latest . -- --typescript');
        commands.push('npm install firebase');
        break;
    }

    // Feature-specific packages
    if (formData.features?.includes('auth')) {
      commands.push('npm install jsonwebtoken bcryptjs');
    }
    if (formData.features?.includes('payment')) {
      commands.push('npm install stripe');
    }
    if (formData.features?.includes('email')) {
      commands.push('npm install nodemailer');
    }

    // Development setup
    commands.push('npm install');
    commands.push('git init');
    commands.push('git add .');
    commands.push(`git commit -m "Initial commit: ${projectName} generated with DevFoundation Wizard"`);

    return commands;
  }
}