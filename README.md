# workflow-locked-v1

![CI](https://github.com/Equilibretech/workflow-locked-v1/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)
![Quality Gate](https://img.shields.io/badge/quality%20gate-passing-brightgreen)
![Security](https://img.shields.io/badge/security%20audit-passing-brightgreen)
[![📖 Docs](https://img.shields.io/badge/📖-docs-blue)](https://equilibretech.github.io/workflow-locked-v1)

> 🎨 **[Guide Interactif Disponible !](https://equilibretech.github.io/workflow-locked-v1/)**  
> Visualisez et suivez le workflow DevFoundation avec notre interface React moderne.

Squelette **DevFoundation – Workflow Locked V1**.  
Framework professionnel pour développement solo avec workflow verrouillé en 7 étapes.

## 🚀 Quick Start

```bash
# Setup environnement
cp .env.example .env
# Éditez .env avec vos valeurs

# Installation
npm install

# Développement (après configuration du projet)
npm run dev
```

## 📊 Project Status

- **Sprint**: Not started (Bootstrap phase)
- **Coverage**: N/A (tests à configurer)
- **Quality Gate**: ✅ Structure prête
- **Last Deploy**: N/A

## 🛠️ Environment Setup

### Secrets Management:

```bash
# Option A: Manual
cp .env.example .env && code .env

# Option B: Doppler (recommended)
doppler setup

# Option C: GitHub CLI  
gh secret set SENTRY_DSN --body "your-dsn"
```

### Development:

```bash
npm install         # Installation des dépendances
npm run prepare     # Configuration des hooks Git
npm test            # Tests (à configurer selon la stack)
```

## 📋 Workflow

Ce projet suit le **DevFoundation Workflow Locked V1** :

1. ✅ **Gate 0**: Bootstrap (structure + configuration)
2. ⏳ **Gate 1**: Discovery (analyse et choix de stack)
3. ⏳ **Gate 2**: Sprint Planning (backlog priorisé)
4. ⏳ **Gate 3**: Dev Loop (TDD strict)
5. ⏳ **Gate 4**: Code Review (multi-niveau)
6. ⏳ **Gate 5**: DevOps (build + deploy)
7. ⏳ **Gate 6**: Observabilité (monitoring)
8. ⏳ **Gate 7**: Rétrospective (amélioration continue)

### Prochaine étape

```bash
claude-code "/project-setup [nom-projet] [type] [stack]"
# Exemple: claude-code "/project-setup ShopApp e-commerce React+Node"
```

## 📚 Documentation

- [Guide DevFoundation complet](docs/DEVFOUNDATION-GUIDE.md)
- [Configuration Claude](CLAUDE.md)
- Templates de commandes dans `.claude/commands/`

## 🔒 Gate Rules

- **Règle universelle** : Impossible de passer à l'étape N+1 sans que l'étape N soit commitée
- Validation par `claude-code "/gate-complete <N>"`
- Hooks Git automatiques pour enforcement

## 📄 License

MIT License - voir [LICENSE](LICENSE) pour plus de détails