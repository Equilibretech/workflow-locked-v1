export interface Gate {
  id: number;
  stage: number;
  title: string;
  description: string;
  command: string;
  duration: string;
  deliverables: string[];
  checklist: string[];
  examples?: string[];
}

export const gates: Gate[] = [
  {
    id: 0,
    stage: 0,
    title: "Gate 0 - Bootstrap",
    description: "Setup CLAUDE.md + .vibe.json",
    command: 'claude-code "/project-setup [project-name] [type] [stack]"',
    duration: "~30 minutes",
    deliverables: ["CLAUDE.md file", ".vibe.json configuration", "Git repository initialized"],
    checklist: [
      "Repository cloned and initialized",
      "CLAUDE.md created with project context",
      ".vibe.json filled with project details",
      "Dependencies installed",
      "Git hooks configured"
    ],
    examples: [
      'claude-code "/project-setup ShopifyClone e-commerce React+Node"',
      'claude-code "/project-setup TaskManager productivity Vue+Firebase"'
    ]
  },
  {
    id: 1,
    stage: 1,
    title: "Gate 1 - Discovery",
    description: "Stack analysis and decision",
    command: 'claude-code "/stack-analysis"',
    duration: "~45 minutes",
    deliverables: ["Technology decision document", "Architecture diagram", "Updated .vibe.json"],
    checklist: [
      "Requirements analyzed",
      "Technology stack chosen",
      "Architecture documented",
      "Dependencies researched",
      "Performance considerations noted"
    ]
  },
  {
    id: 2,
    stage: 2,
    title: "Gate 2 - Sprint 0",
    description: "Sprint planning with prioritized backlog",
    command: 'claude-code "/sprint-recipe"',
    duration: "~1 hour",
    deliverables: ["Sprint backlog", "User stories", "Acceptance criteria"],
    checklist: [
      "User stories created",
      "Tasks prioritized",
      "Acceptance criteria defined",
      "Sprint goals set",
      "Timeline estimated"
    ]
  },
  {
    id: 3,
    stage: 3,
    title: "Gate 3 - Dev Loop",
    description: "TDD development (red-green-refactor)",
    command: 'claude-code "/tdd-feature [feature-name]"',
    duration: "2-4 hours per feature",
    deliverables: ["Test files", "Implementation code", "80%+ coverage"],
    checklist: [
      "Tests written first",
      "Implementation passes tests",
      "Code refactored",
      "Coverage >= 80%",
      "Linting passes"
    ],
    examples: [
      'claude-code "/tdd-feature user-authentication"',
      'claude-code "/tdd-feature shopping-cart"'
    ]
  },
  {
    id: 4,
    stage: 4,
    title: "Gate 4 - Code Review",
    description: "Multi-level review (tech, quality, security)",
    command: 'claude-code "/multi-review"',
    duration: "~1 hour",
    deliverables: ["Review report", "Fixed issues", "Security assessment"],
    checklist: [
      "Code quality reviewed",
      "Security vulnerabilities checked",
      "Performance optimized",
      "Best practices followed",
      "Documentation updated"
    ]
  },
  {
    id: 5,
    stage: 5,
    title: "Gate 5 - DevOps",
    description: "Build, deploy, and tag releases",
    command: 'claude-code "/deploy [environment]"',
    duration: "~1 hour",
    deliverables: ["CI/CD pipeline", "Deployed application", "Release notes"],
    checklist: [
      "Build process configured",
      "Tests run in CI",
      "Application deployed",
      "Environment variables set",
      "Release tagged"
    ],
    examples: [
      'claude-code "/deploy staging"',
      'claude-code "/deploy production"'
    ]
  },
  {
    id: 6,
    stage: 6,
    title: "Gate 6 - Observability",
    description: "Monitoring setup (Sentry, health checks)",
    command: 'claude-code "/monitor"',
    duration: "~45 minutes",
    deliverables: ["Error tracking", "Health endpoints", "Metrics dashboard"],
    checklist: [
      "Sentry integrated",
      "Health checks implemented",
      "Logging configured",
      "Alerts set up",
      "Dashboard created"
    ]
  },
  {
    id: 7,
    stage: 7,
    title: "Gate 7 - Retrospective",
    description: "Sprint review and context update",
    command: 'claude-code "/context-refresh"',
    duration: "~30 minutes",
    deliverables: ["Updated CLAUDE.md", "Lessons learned", "Next sprint plan"],
    checklist: [
      "Sprint reviewed",
      "Metrics analyzed",
      "Context updated",
      "Technical debt logged",
      "Next sprint planned"
    ]
  }
];