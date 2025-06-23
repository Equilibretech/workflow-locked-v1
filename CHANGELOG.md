# Changelog

Toutes les évolutions notables du template sont listées ici.

## [Unreleased]

## [0.2.0] – 2025-06-23

### Added
- 🎨 **Interactive guide** - React-based workflow visualization
- 📖 **Documentation site** with GitHub Pages deployment
- ✨ **Progress tracking** with localStorage persistence  
- 🎯 **Gate completion system** with visual feedback
- 🌓 **Dark/Light mode** support with responsive design
- 📱 **Mobile-friendly** timeline and interface
- 📊 **8 workflow gates** with detailed descriptions and checklists

### Changed
- 📦 **npm scripts** pour docs development (`docs:dev`, `docs:build`, `docs:preview`)
- 🔄 **README enhanced** with documentation badge
- 🚀 **GitHub Actions workflow** for automatic docs deployment
- 🛠️ **Quality gates alignment** - docs excluded from lint/coverage
- 📁 **Project structure** - docs isolés avec configuration Vite dédiée

### Fixed
- 🔧 **GitHub Pages deployment** avec .nojekyll pour React assets
- ✅ **ESLint configuration** - exclusion docs/** via ignores
- 📊 **Vitest coverage** - focus sur src/** uniquement
- 🎯 **Asset paths** - base /workflow-locked-v1/ configuré correctement

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