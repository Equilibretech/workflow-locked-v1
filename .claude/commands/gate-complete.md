---
name: gate-complete
description: Mark a gate as complete and validate all requirements
args:
  - name: gate_number
    description: The gate number to mark as complete (0-7)
    required: true
  - name: deliverable_summary
    description: Brief summary of the deliverable completed
    required: false
---

# Gate {gate_number} Completion Validation

## 🎯 Gate Validation Overview

**Gate Number**: {gate_number}
**Gate Name**: Stage {gate_number}
**Date**: {current_date}
**Status**: Validating completion...
**Deliverable**: {deliverable_summary}

## 📋 Pre-Validation Checklist

Before marking this gate as complete, verify:

- [ ] **Primary deliverable completed**
- [ ] **Tests passing** (if applicable)
- [ ] **Documentation updated**
- [ ] **Code committed to Git**
- [ ] **Quality standards met**
- [ ] **Ready for next stage**

## ✅ Gate {gate_number} Validation Checklist

### Gate 0 - Bootstrap
- [ ] CLAUDE.md configured with project details
- [ ] .vibe.json created with goals and constraints
- [ ] Project structure initialized
- [ ] Git repository setup complete
- [ ] Core dependencies installed

### Gate 1 - Discovery
- [ ] Stack analysis completed
- [ ] Technology decisions documented
- [ ] Architecture plan defined
- [ ] .vibe.json updated with final stack

### Gate 2 - Sprint Planning
- [ ] Sprint backlog created
- [ ] User stories prioritized (P0/P1/P2)
- [ ] GitHub issues created
- [ ] Sprint goals defined
- [ ] Definition of Done established

### Gate 3 - Development
- [ ] Feature implemented using TDD
- [ ] All tests passing (red-green-refactor cycle)
- [ ] Code coverage >80%
- [ ] Pull request created
- [ ] Feature branch ready for review

### Gate 4 - Code Review
- [ ] Code review completed
- [ ] All feedback addressed
- [ ] Pull request approved
- [ ] Code merged to main branch
- [ ] Feature branch cleaned up

### Gate 5 - DevOps
- [ ] Application built successfully
- [ ] Deployed to staging environment
- [ ] Health checks passing
- [ ] Release tagged
- [ ] Rollback plan documented

### Gate 6 - Observability
- [ ] Monitoring setup complete
- [ ] Sentry configured for error tracking
- [ ] Health endpoint implemented
- [ ] Dashboard metrics accessible
- [ ] Alerting configured

### Gate 7 - Retrospective
- [ ] Sprint retrospective completed
- [ ] Lessons learned documented
- [ ] CLAUDE.md context updated
- [ ] Action items for next sprint
- [ ] Metrics baseline established

## 📝 Deliverable Summary

**What was accomplished:**
{deliverable_summary}

**Key files modified/created:**
- [List key files here]

**Tests added/updated:**
- [List test files here]

**Documentation updated:**
- [List documentation changes]

## 🔧 Automated Gate Validation

```bash
# Create gate completion marker
echo "✅ Gate {gate_number} completed on {current_date}" > docs/gate-$(git branch --show-current).md
echo "📋 Deliverable: {deliverable_summary}" >> docs/gate-$(git branch --show-current).md
echo "🎯 Next: Gate {next_gate_number}" >> docs/gate-$(git branch --show-current).md

# Commit the gate marker
git add docs/gate-$(git branch --show-current).md
git commit -m "chore: complete Gate {gate_number}

✅ Deliverable: {deliverable_summary}
📋 Quality: All checks passed
🎯 Ready for next gate"
```

## 📊 Quality Metrics

### Current Status
- **Gate {gate_number}**: ✅ COMPLETE
- **Timeline**: On track
- **Quality**: All checks passed
- **Blockers**: None

### Next Steps
- **Next Gate**: Gate {next_gate_number}
- **Expected Deliverable**: [Next stage deliverable]
- **Estimated Duration**: [Time estimate]

## 🚨 Important Notes

### Gate Enforcement
- The pre-commit hook will check for the existence of `docs/gate-[branch].md`
- Cannot proceed to next gate without this marker file
- All quality gates must pass before marking complete

### Rollback Procedure
If issues are discovered after marking complete:
1. Create hotfix branch
2. Address the issues
3. Update the gate marker with fixes
4. Re-validate all requirements

### Communication
- Update team/stakeholders about gate completion
- Document any lessons learned
- Share metrics and progress updates

## ✅ Final Validation

### Pre-Commit Actions
1. **Verify all checklist items completed**
2. **Run final quality checks**
3. **Create gate marker file**
4. **Commit changes with descriptive message**

### Post-Commit Actions
1. **Update project dashboard**
2. **Begin next gate planning**
3. **Share progress with stakeholders**

⚠️ **Important**: Once this gate is marked complete, the pre-commit hook will allow progression to the next gate. Ensure all requirements are truly met.

---

## 🎯 Gate Completion Confirmed

**Gate {gate_number} is now COMPLETE** ✅

You may proceed to the next gate after committing the marker file.

**Next Command**: `claude-code "/[next-gate-command]"`