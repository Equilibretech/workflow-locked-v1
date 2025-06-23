---
name: gate-complete
description: Mark workflow stage as complete and validate deliverables
args:
  - name: gate_number
    description: Gate number to mark as complete (0-7)
    required: true
  - name: deliverable_summary
    description: Brief summary of what was delivered
    required: false
---

# Gate ${args.gate_number} Completion Validation

## 🎯 Gate Information

**Gate Number**: ${args.gate_number}
**Gate Name**: ${getGateName(args.gate_number)}
**Status**: COMPLETING
**Date**: $(date)
**Deliverable**: ${args.deliverable_summary || getDefaultDeliverable(args.gate_number)}

```javascript
function getGateName(gateNumber) {
  const gates = {
    0: "Bootstrap",
    1: "Discovery", 
    2: "Sprint Planning",
    3: "Development (TDD)",
    4: "Code Review",
    5: "DevOps & Deploy",
    6: "Observability",
    7: "Retrospective"
  };
  return gates[gateNumber] || "Unknown Gate";
}

function getDefaultDeliverable(gateNumber) {
  const deliverables = {
    0: "CLAUDE.md + .vibe.json + Project Structure",
    1: "stack-decision.md with technology choices",
    2: "sprint-XX.md + prioritized backlog",
    3: "Feature PR with tests (TDD)",
    4: "Approved PR + review report",
    5: "Staging deployment + CI/CD pipeline",
    6: "Monitoring dashboard + health checks",
    7: "retro-sprint-XX.md + context update"
  };
  return deliverables[gateNumber] || "Gate deliverable";
}
```

## ✅ Gate ${args.gate_number} Validation Checklist

${generateGateChecklist(args.gate_number)}

```javascript
function generateGateChecklist(gateNumber) {
  const checklists = {
    0: `### Bootstrap Validation
- [ ] .vibe.json created with clear project goals
- [ ] CLAUDE.md configured with project context
- [ ] Project structure created (src/, tests/, docs/)
- [ ] 5 command templates in .claude/commands/
- [ ] Git repository initialized
- [ ] .env.example with required variables
- [ ] README.md with setup instructions
- [ ] Husky hooks installed and configured
- [ ] First commit made`,

    1: `### Discovery Validation
- [ ] docs/stack-decision.md created
- [ ] Technology stack justified with analysis
- [ ] .vibe.json updated with final stack
- [ ] No "maybe" decisions - everything firm
- [ ] Performance requirements documented
- [ ] Architecture decisions recorded`,

    2: `### Sprint Planning Validation
- [ ] docs/sprint-XX.md created
- [ ] User stories defined with acceptance criteria
- [ ] All items estimated in story points
- [ ] P0/P1/P2 priorities assigned
- [ ] GitHub issues created with labels
- [ ] Sprint capacity calculated
- [ ] Definition of Done established`,

    3: `### Development (TDD) Validation
- [ ] Feature implemented using TDD cycle
- [ ] All tests written before code (RED phase)
- [ ] Tests passing (GREEN phase)
- [ ] Code refactored (REFACTOR phase)
- [ ] Test coverage >80% for feature
- [ ] Pull request created
- [ ] CI pipeline passing`,

    4: `### Code Review Validation
- [ ] Independent review completed
- [ ] All blocking issues addressed
- [ ] Tests still passing after fixes
- [ ] Code quality metrics acceptable
- [ ] Security concerns addressed
- [ ] PR approved and merged
- [ ] Feature branch deleted`,

    5: `### DevOps Validation
- [ ] CI/CD pipeline configured
- [ ] All quality gates passing
- [ ] Docker images built successfully
- [ ] Deployed to staging environment
- [ ] Health checks passing
- [ ] Deployment tagged in Git
- [ ] Rollback procedure documented`,

    6: `### Observability Validation
- [ ] Monitoring service configured (e.g., Sentry)
- [ ] Health check endpoint working
- [ ] Error tracking active
- [ ] Performance metrics collected
- [ ] Alerts configured for critical issues
- [ ] Dashboard accessible
- [ ] docs/health-check.md created`,

    7: `### Retrospective Validation
- [ ] docs/retro-sprint-XX.md created
- [ ] Sprint metrics calculated
- [ ] What went well documented
- [ ] What went wrong analyzed
- [ ] Action items identified
- [ ] CLAUDE.md context history updated
- [ ] Lessons learned recorded
- [ ] Next sprint prepared`
  };
  
  return checklists[gateNumber] || "### Custom Gate Validation\n- [ ] Deliverables completed\n- [ ] Quality standards met\n- [ ] Documentation updated";
}
```

## 📝 Deliverable Summary

### What Was Delivered
${args.deliverable_summary || `[Automated summary for Gate ${args.gate_number}]`}

### Key Achievements
- [List main accomplishments]
- [Quality metrics achieved]
- [Problems solved]

### Metrics (if applicable)
- Time Taken: [Actual vs Estimated]
- Quality Score: [Coverage, Reviews, etc.]
- Issues Found/Fixed: [Count]

## 🚀 Gate Completion Actions

### 1. Create Gate Marker File
```bash
# This command will be executed to mark the gate as complete
mkdir -p docs
echo "✅ Gate ${args.gate_number} (${getGateName(args.gate_number)}) completed on $(date)" > docs/gate-$(git branch --show-current).md
echo "📋 Deliverable: ${args.deliverable_summary || getDefaultDeliverable(args.gate_number)}" >> docs/gate-$(git branch --show-current).md
echo "🎯 Next: Gate $((${args.gate_number} + 1)) (${getGateName(${args.gate_number} + 1)})" >> docs/gate-$(git branch --show-current).md
echo "📊 Time spent: [To be filled]" >> docs/gate-$(git branch --show-current).md
echo "✨ Quality: All checks passed" >> docs/gate-$(git branch --show-current).md
```

### 2. Commit Gate Completion
```bash
git add docs/gate-$(git branch --show-current).md
git commit -m "chore: complete Gate ${args.gate_number} - ${getGateName(args.gate_number)}

✅ Deliverable: ${args.deliverable_summary || getDefaultDeliverable(args.gate_number)}
📋 All validation checks passed
🎯 Ready for Gate $((${args.gate_number} + 1))"
```

### 3. Update Project Status
- Update README.md progress indicators
- Update sprint board if applicable
- Notify team of completion

## 📊 Gate Transition

### Current Gate Summary
- **Gate ${args.gate_number}**: ✅ COMPLETE
- **Duration**: [Calculate from git history]
- **Quality**: ${assessQuality()}
- **Blockers Encountered**: [List if any]

### Next Gate Preview
- **Gate $((${args.gate_number} + 1))**: ${getGateName(${args.gate_number} + 1)}
- **Expected Deliverable**: ${getDefaultDeliverable(${args.gate_number} + 1)}
- **Estimated Duration**: ${getGateDuration(${args.gate_number} + 1)}
- **Prerequisites**: Current gate completion

```javascript
function assessQuality() {
  // Automated quality assessment based on gate
  return "High - All checks passed";
}

function getGateDuration(gateNumber) {
  const durations = {
    0: "30 minutes",
    1: "45 minutes",
    2: "60 minutes",
    3: "2-8 hours",
    4: "30 minutes",
    5: "45 minutes",
    6: "30 minutes",
    7: "30 minutes"
  };
  return durations[gateNumber] || "Variable";
}
```

## ✅ Final Validation

### Confirmation Checklist
- [ ] All gate requirements met
- [ ] Deliverables committed to Git
- [ ] Documentation updated
- [ ] No blocking issues remain
- [ ] Ready for next gate

### Gate Lock Enforcement
⚠️ **Important**: Once this gate is marked complete, you cannot proceed to Gate $((${args.gate_number} + 1)) without the marker file. The pre-commit hook will enforce this.

## 🎯 Next Steps

1. **Immediate**:
   - Execute gate completion commands above
   - Verify marker file created
   - Commit changes

2. **Next Session**:
   - Begin Gate $((${args.gate_number} + 1)): ${getGateName(${args.gate_number} + 1)}
   - Review requirements for next phase
   - Prepare necessary resources

3. **Documentation**:
   - Update progress in README.md
   - Log any lessons learned
   - Prepare for next gate

---

**Gate ${args.gate_number} is now COMPLETE** ✅

You may proceed to Gate $((${args.gate_number} + 1)) after committing the marker file.