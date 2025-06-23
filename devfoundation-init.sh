#!/usr/bin/env bash
set -e

# --- variables ---
PROJECT_NAME=$(basename "$(pwd)")
YEAR=$(date +"%Y")

echo "🛠  Initialisation DevFoundation skeleton dans $PROJECT_NAME"

# ---- dossiers ----
mkdir -p \
  src tests docs .claude/commands .github/workflows

# ---- fichiers racine ----
cat > README.md <<EOF
# $PROJECT_NAME

Squelette **DevFoundation – Workflow Locked V1**.  
Premier import, à compléter avec \`claude-code\`.

EOF

cat > .vibe.json <<'EOF'
{
  "goal": "<à remplir>",
  "deadline": "",
  "client": "",
  "stack": [],
  "metrics": {},
  "priorities": []
}
EOF

cat > CLAUDE.md <<'EOF'
# <Project> – Configuration Claude
> Rempli automatiquement par \`/project-setup\`.

<!-- CONTEXT AUTO -->
EOF

cat > .mcp.json <<'EOF'
{
  "servers": {}
}
EOF

cat > .env.example <<'EOF'
# Exemple de variables d'environnement
NODE_ENV=development
EOF

cat > .gitignore <<'EOF'
node_modules/
dist/
.env*
.husky/_/
EOF

cat > LICENSE <<EOF
MIT License

Copyright (c) $YEAR $PROJECT_NAME
EOF

cat > CODE_OF_CONDUCT.md <<'EOF'
# Code of Conduct (placeholder)
EOF

# ---- Husky + pre-commit gate hook ----
npm pkg set scripts.prepare="husky install"
npm install --save-dev husky >/dev/null 2>&1
npx husky install
npx husky add .husky/pre-commit '#!/bin/sh
gate_file="docs/gate-main.md"
[ -f "$gate_file" ] || { echo "❌ Gate précédent non validé."; exit 1; }'

# ---- GitHub CI stub ----
cat > .github/workflows/ci.yml <<'EOF'
name: CI Stub
on: [push]
jobs:
  echo:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🏗 Scaffolding OK"
EOF

# ---- templates .claude/commands ----
for tpl in project-setup tdd-feature multi-review sprint-recipe gate-complete; do
  cat > ".claude/commands/$tpl.md" <<EOF
# $tpl (stub)
<!-- Claude complétera ce template -->
EOF
done

# ---- Gate-0 doc ----
mkdir -p docs
echo "✅ Gate 0 completed on $(date)" > docs/gate-main.md

# ---- premier commit ----
git add .
git commit -m "chore: bootstrap DevFoundation skeleton (Gate 0)"

echo -e "\n🎉  Squelette créé. Prochaine étape :"
echo "1. git push origin main"
echo "2. claude-code \"/project-setup <Nom> <Type> <Stack>\""
