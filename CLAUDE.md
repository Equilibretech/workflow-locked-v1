# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a **DevFoundation Workflow Locked V1** repository - a framework for professional solo development with a strict 7-stage workflow with quality gates. Each stage must be completed and committed before moving to the next.

## Key Commands

### Setup and Initialization
```bash
# Initial project setup (after cloning)
npm install
npx husky install

# Bootstrap a new project
claude-code "/project-setup [project-name] [type] [stack]"
# Example: claude-code "/project-setup ShopifyClone e-commerce React+Node"
```

### Development Commands
```bash
# Install dependencies
npm install

# Run quality gates locally
npm run quality-gates

# Run tests with coverage
npm run test:coverage

# Run all linting checks
npm run lint:check

# Build all applications
npm run build:all

# Check bundle sizes
npm run check-bundle-size

# Prepare git hooks
npm run prepare
```

### Workflow Stage Commands
These commands guide through the locked workflow stages:
- `/project-setup` - Bootstrap repository (Stage 0)
- `/stack-analysis` - Analyze and decide on tech stack (Stage 1)
- `/sprint-recipe` - Plan sprint with prioritized backlog (Stage 2)
- `/tdd-feature` - Implement features using TDD (Stage 3)
- `/multi-review` - Perform multi-level code review (Stage 4)
- `/deploy` - Deploy to staging/production (Stage 5)
- `/monitor` - Set up observability (Stage 6)
- `/context-refresh` - Sprint retrospective and context update (Stage 7)
- `/gate-complete <N>` - Mark stage N as complete

## Architecture and Workflow

### 7 Locked Stages (Gate System)
1. **Stage 0 - Bootstrap**: Setup CLAUDE.md + .vibe.json
2. **Stage 1 - Discovery**: Stack analysis and decision
3. **Stage 2 - Sprint 0**: Sprint planning with prioritized backlog
4. **Stage 3 - Dev Loop**: TDD development (red-green-refactor)
5. **Stage 4 - Code Review**: Multi-level review (tech, quality, security)
6. **Stage 5 - DevOps**: Build, deploy, and tag releases
7. **Stage 6 - Observability**: Monitoring setup (Sentry, health checks)
8. **Stage 7 - Retrospective**: Sprint review and context update

### Gate Enforcement
- **Pre-commit hook** prevents commits unless previous gate is validated
- Use `claude-code "/gate-complete <N>"` to mark stage N as complete
- Gate validation files stored in `docs/gate-{branch}.md`

### Project Structure
```
/root/projects/workflow-locked-v1/
├── .vibe.json              # Project goals and context (machine-readable)
├── CLAUDE.md               # This file - Claude context
├── .mcp.json               # MCP server configuration
├── .env.example            # Environment variables template
├── .husky/                 # Git hooks for gate enforcement
├── scripts/                # Build and utility scripts
│   └── check-bundle-size.js # Bundle size analysis
├── docs/                   # Main documentation site
│   ├── src/                # React documentation app
│   ├── wizard/             # Project generation wizard
│   ├── DEVFOUNDATION-GUIDE.md  # Complete workflow guide
│   ├── quality-gates-report.md # Quality gates status
│   └── gate-*.md           # Gate validation files
├── .github/                # CI/CD and quality gates
│   ├── workflows/ci.yml    # Comprehensive CI pipeline
│   └── quality-gates.json  # Quality gates configuration
└── .claude/commands/       # Command templates (5 available)
```

### Key Configuration Files

#### .vibe.json
Machine-readable project context that should be filled with:
- `goal`: Project objective
- `deadline`: Target completion date
- `client`: Client/purpose
- `stack`: Technology choices
- `metrics`: Success metrics
- `priorities`: Development priorities

#### Environment Setup
Copy `.env.example` to `.env` and configure:
- Database credentials
- API keys (Stripe, Sentry, etc.)
- JWT secrets
- Service endpoints

### Development Principles
1. **TDD First**: Always write tests before implementation
2. **Gate Compliance**: Cannot proceed without completing current stage
3. **Multi-Claude Review**: Different Claude sessions for dev/review/devops
4. **80% Coverage Minimum**: Enforced by CI pipeline
5. **Conventional Commits**: Use feat:, fix:, docs:, test: prefixes

### Next Steps
1. Fill out `.vibe.json` with project details
2. Run `claude-code "/project-setup [name] [type] [stack]"` to bootstrap
3. Follow the 7-stage workflow strictly
4. Use gate validation to track progress

## Context History

### Gate 0 – Bootstrap validé v0.2.0 (2025-06-23)
- ✅ **Quality Gates v2** activées avec 5 gates (code, tests, build, security, performance)
- ✅ **Documentation React + Wizard** opérationnelles (93.92% test coverage)
- ✅ **CI/CD Pipeline** avec 4 jobs parallèles et déploiement automatique
- ✅ **Sécurité renforcée** (JSON.parse, clipboard, CodeQL)
- ✅ **Performance optimisée** (React.memo, useCallback, bundle analysis)
- ✅ **Architecture modulaire** (hooks customs, composants réutilisables)
- ✅ **Système de génération** de projets intégré
- ✅ **GitHub Pages** auto-déployées avec artifacts
- 📊 **Couverture tests** : 93.92% (objectif 80% dépassé)
- 🎯 **Qualité** : Zéro-dette technique + optimisations performance

## Technical Debt
<!-- Track items to address in future sprints -->
