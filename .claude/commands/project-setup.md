---
name: project-setup
description: Bootstrap repository with DevFoundation structure (Stage 0)
args:
  - name: project_name
    description: Name of the project
    required: true
  - name: project_type
    description: Type of project (e.g., e-commerce, SaaS, API, dashboard)
    required: true
  - name: stack
    description: Technology stack (e.g., React+Node, Vue+Django, Next.js+Supabase)
    required: true
---

# Project Setup: {project_name}

## 🎯 Bootstrap Configuration

**Project**: {project_name}
**Type**: {project_type}
**Stack**: {stack}
**Date**: {current_date}

## 📋 Analysis Section

### Project Context
- **Goal**: Creating {project_type} application with {stack} stack
- **Timeline**: To be defined in .vibe.json
- **Priorities**: MVP first, maintainable code, security best practices

### Stack Breakdown
- **Frontend**: [Extract from {stack}]
- **Backend**: [Extract from {stack}]
- **Database**: [Extract from {stack}]
- **Additional Tools**: Testing framework, CI/CD, monitoring

## ✅ Validation Checklist

### Pre-Bootstrap
- [ ] Node.js >= 18 installed
- [ ] Git installed and configured
- [ ] Claude Code CLI installed globally
- [ ] Project directory created

### Structure Creation
- [ ] Create .vibe.json with project goals and metrics
- [ ] Generate CLAUDE.md with project context and standards
- [ ] Create .env.example with required environment variables
- [ ] Initialize Git repository
- [ ] Create directory structure (src/, tests/, docs/)
- [ ] Add .gitignore with comprehensive patterns
- [ ] Add LICENSE (MIT)
- [ ] Add CODE_OF_CONDUCT.md
- [ ] Create README.md with badges and setup instructions

### Configuration Files
- [ ] package.json with scripts and dependencies
- [ ] ESLint/Prettier configuration for code quality
- [ ] Testing framework setup (Jest/Vitest)
- [ ] Docker files (Dockerfile + docker-compose.dev.yml)
- [ ] CI/CD pipeline (.github/workflows/ci.yml)
- [ ] Husky pre-commit hooks for gate validation

### Claude Integration
- [ ] .claude/commands/ directory created
- [ ] All 5 core templates installed
- [ ] .mcp.json configured with essential servers
- [ ] docs/CLAUDE_SESSIONS.md for multi-agent workflow

## 🚀 Execution Steps

1. **Initialize project structure**
   ```bash
   mkdir -p src tests docs .claude/commands
   npm init -y
   git init
   ```

2. **Create .vibe.json**
   ```json
   {
     "goal": "{project_type} application",
     "deadline": "TBD",
     "client": "TBD",
     "stack": ["{stack}"],
     "metrics": {
       "performance": "< 2s page load",
       "coverage": "> 80%",
       "quality": "0 critical bugs"
     },
     "priorities": ["MVP rapide", "Code maintenable", "Security"]
   }
   ```

3. **Generate CLAUDE.md from template**
4. **Install dependencies and configure tools**
5. **Setup Git hooks with Husky**
6. **Create initial commit**

## 📝 Next Actions

1. **Immediate** (Now):
   - Complete all checklist items
   - Commit with message: "chore: bootstrap DevFoundation Workflow Locked V1"
   - Create docs/gate-main.md to mark Gate 0 complete

2. **Next Step** (Gate 1):
   - Run `/stack-analysis` to finalize technology decisions
   - Update .vibe.json with final stack choices
   - Document decisions in docs/stack-decision.md

3. **Follow-up** (Gate 2):
   - Plan Sprint 0 with `/sprint-recipe`
   - Create GitHub Issues with priorities
   - Define MVP scope

## 🎯 Success Criteria

- All files created and properly configured
- Git repository initialized with first commit
- Development environment ready to use
- Gate 0 marked as complete
- Ready to proceed to Discovery phase

## 💡 Tips

- Use `npm run dev` to start development servers
- Run `npm test` frequently to maintain quality
- Check `.env.example` for required environment variables
- Follow Conventional Commits for all changes