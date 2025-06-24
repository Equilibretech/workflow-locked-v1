# Changelog

Toutes les évolutions notables du template sont listées ici.

## [Unreleased]

## [0.2.0] – 2025-06-23

### Added
- 🎨 **Interactive guide** - React-based workflow visualization with Wizard
- 📖 **Documentation site** with GitHub Pages auto-deployment
- ✨ **Progress tracking** with localStorage persistence
- 🎯 **Gate completion system** with visual feedback
- 🛠️ **Project generation wizard** - Support 3 stacks (React+Node, Next.js, Vue+Firebase)
- 📁 **File system integration** - Export projects (terminal, ZIP, File System API)
- 🔒 **Quality Gates v2** - 5 gates complets (code, test, build, security, performance)
- 📊 **CI/CD Pipeline enhanced** - 4 jobs parallèles avec déploiement automatique
- 🌓 **Dark/Light mode** support with responsive design
- 📱 **Mobile-friendly** timeline and interface
- 🧪 **Test coverage 93.92%** - Dépassement objectif 80%
- 🚀 **Bundle size analysis** - Script automatique avec seuils configurables

### Enhanced
- ⚡ **Performance optimizations** - React.memo, useCallback, useMemo
- 🔐 **Security hardening** - JSON.parse secured with try/catch + validation
- 🎯 **Code refactoring** - App.tsx reduced from 190 to 26 lines
- 🔧 **Error handling** - Clipboard API with execCommand fallback
- 📦 **Modular architecture** - Custom hooks (useGateProgress, useGateNavigation)
- 🔍 **Pre-commit hooks enhanced** - Local quality gates validation
- 📋 **Branch protection** - Required status checks for main/develop

### Fixed
- 🔧 **GitHub Pages deployment** avec .nojekyll pour React assets
- 🛡️ **JSON parsing vulnerabilities** - Data validation + error handling
- 📋 **Clipboard failures** - Textarea fallback pour compatibilité navigateurs
- 📊 **Test failures** - localStorage mocking + act() wrapping
- ✅ **ESLint errors** - Configuration v9 avec rules strictes
- 🔍 **TypeScript errors** - Props typing + imports cleanup
- 📦 **Bundle optimization** - Automated size analysis

### Technical Metrics
- **Test Coverage**: 93.92% (vs 38.2% previously)
- **Bundle Sizes**: Docs 325KB, Wizard 1.17MB (optimization needed)
- **CI Execution**: ~3-4 minutes with parallel jobs
- **Security**: 0 critical vulnerabilities
- **Quality Gates**: 100% success rate

## [0.1.2] – 2025-06-23

### Security
- ✅ Fix GitHub Actions workflow permissions (CodeQL alerts #1, #2)
- ✅ Add explicit permissions blocks to restrict GITHUB_TOKEN scope
- ✅ Follow principle of least privilege for CI/CD workflows

## [0.1.0] – 2025-06-23

### Added
- ✅ Squelette « DevFoundation Workflow Locked V1 » validé (Gate 0)
- ✅ Pipeline CI/CD avec quality gates (ESLint v9 + Vitest + Prettier)
- ✅ 5 templates Claude dans `.claude/commands/` (project-setup, tdd-feature, multi-review, sprint-recipe, gate-complete)
- ✅ Configuration Docker (dev + production)
- ✅ GitHub Actions workflow avec quality gates
- ✅ Templates GitHub (issues, PR)
- ✅ Pre-commit hooks avec gate enforcement
- ✅ Documentation complète (README.md, CLAUDE.md, .vibe.json)
- ✅ Release v0.1.0 publiée

### Technical Details
- **Stack**: Node.js 18, ESLint v9, Vitest, Prettier, Docker, GitHub Actions
- **Quality Gates**: >80% test coverage, 0 lint warnings, CI pipeline green
- **Architecture**: 7-stage locked workflow with gate enforcement
- **Documentation**: Zero placeholders, production-ready

### Validation
- 🎯 Gate 0 Bootstrap: 100% complete
- 📊 Audit passed: All criteria validated
- 🚀 Status: Production ready