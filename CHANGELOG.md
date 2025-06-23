# Changelog

Toutes les évolutions notables du template sont listées ici.

## [Unreleased]

### Added
- 🎨 Interactive guide (alpha) - React-based workflow visualization
- 📖 Documentation site with GitHub Pages deployment
- ✨ Progress tracking with localStorage persistence
- 🎯 Gate completion system with visual feedback

### Changed
- 📦 Added npm scripts for docs development (`docs:dev`, `docs:build`, `docs:preview`)
- 🔄 Enhanced README with documentation badge
- 🚀 GitHub Actions workflow for automatic docs deployment

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