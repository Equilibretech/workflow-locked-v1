---
name: sprint-recipe
description: Sprint planning with prioritized backlog and clear goals (Stage 2)
args:
  - name: sprint_name
    description: Sprint identifier (e.g., Sprint 0, Sprint 1, Feature Sprint)
    required: true
  - name: sprint_goal
    description: Main objective for this sprint
    required: true
  - name: duration
    description: Sprint duration (e.g., 1 week, 2 weeks, 3 days)
    required: false
---

# Sprint Planning: {sprint_name}

## 🎯 Sprint Configuration

**Sprint**: {sprint_name}
**Goal**: {sprint_goal}
**Duration**: {duration}
**Start Date**: {current_date}
**End Date**: {end_date}

## 📋 Context Analysis

### Project Context (.vibe.json)
- **Overall Goal**: [Extract from .vibe.json]
- **Deadline**: [Extract from .vibe.json]
- **Current Status**: [Analyze current progress]
- **Priorities**: [Extract from .vibe.json]

### Sprint Objectives
- **Primary**: {sprint_goal}
- **Secondary**: [Related objectives]
- **Success Criteria**: [Measurable outcomes]

## 📊 Capacity Planning

### Team Capacity
- **Available Hours**: [Calculate based on duration]
- **Story Points Capacity**: [Based on velocity]
- **Risk Buffer**: 20% (recommended)
- **Actual Capacity**: [80% of available]

### Velocity Metrics
- **Previous Sprint**: X points (if applicable)
- **Average Velocity**: Y points
- **Target This Sprint**: Z points

## 📝 Backlog Items

### 🔴 P0 - Must Have (Critical)

1. **[User Story Title]**
   - **As a** [user type]
   - **I want** [functionality]
   - **So that** [business value]
   - **Acceptance Criteria**:
     - [ ] Criterion 1
     - [ ] Criterion 2
     - [ ] Criterion 3
   - **Estimate**: X story points
   - **Assigned**: TBD
   - **Dependencies**: None/[List]

2. **[Technical Task Title]**
   - **Description**: [What needs to be done]
   - **Why**: [Business/Technical justification]
   - **Definition of Done**:
     - [ ] Implementation complete
     - [ ] Tests written and passing
     - [ ] Code reviewed
     - [ ] Deployed to staging
   - **Estimate**: Y story points

### 🟡 P1 - Should Have (Important)

1. **[User Story Title]**
   - **As a** [user type]
   - **I want** [functionality]
   - **So that** [business value]
   - **Acceptance Criteria**: [List]
   - **Estimate**: X story points

### 🟢 P2 - Nice to Have (If Time Permits)

1. **[Enhancement Title]**
   - **Description**: [Enhancement details]
   - **Value**: [Why it's beneficial]
   - **Estimate**: X story points

## 🏗️ Technical Tasks

### Infrastructure & Setup
- [ ] [Task description] (X points)
- [ ] [Task description] (Y points)

### Development Tasks
- [ ] [Feature implementation] (X points)
- [ ] [API endpoint creation] (Y points)
- [ ] [Frontend component] (Z points)

### Testing & Quality
- [ ] [Test suite creation] (X points)
- [ ] [Performance testing] (Y points)
- [ ] [Security audit] (Z points)

## 📅 Sprint Timeline

### Day 1-2: Setup & Planning
- Finalize sprint backlog
- Set up development environment
- Create GitHub issues with labels

### Day 3-X: Development
- Daily progress on P0 items
- TDD approach for all features
- Continuous integration

### Day X-1: Testing & Review
- Complete code reviews
- Final testing pass
- Documentation updates

### Final Day: Sprint Close
- Deploy to staging
- Sprint retrospective
- Prepare next sprint

## ✅ Definition of Done

### For User Stories
- [ ] All acceptance criteria met
- [ ] Unit tests written and passing (>80% coverage)
- [ ] Integration tests completed
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Deployed to staging environment
- [ ] Product owner acceptance

### For Technical Tasks
- [ ] Implementation complete
- [ ] Tests written and passing
- [ ] Code follows project standards
- [ ] Peer reviewed
- [ ] No critical security issues
- [ ] Performance benchmarks met

## 📊 Success Metrics

### Sprint Goals
- **Primary Goal Achievement**: Yes/No
- **Story Points Completed**: X/Y (target)
- **Quality Metrics**:
  - Test Coverage: >80%
  - Code Review Approval: 100%
  - Bug Count: <3 minor, 0 critical

### Team Health
- **Velocity Trend**: Improving/Stable/Declining
- **Technical Debt**: Managed/Growing
- **Team Morale**: High/Medium/Low

## 🚀 Sprint Execution

### Daily Routine
```bash
# Morning
- Check sprint board
- Update task status
- Identify blockers

# During Development
- Follow TDD cycle
- Commit frequently
- Update documentation

# End of Day
- Push code
- Update sprint board
- Note progress/issues
```

### Communication
- **Daily Updates**: Via sprint board
- **Blockers**: Immediate notification
- **Progress**: Visible in GitHub Projects

## 📝 Next Actions

1. **Immediate** (Today):
   - Create all GitHub issues
   - Apply P0/P1/P2 labels
   - Set up sprint board
   - Assign first tasks

2. **Tomorrow**:
   - Begin P0 implementation
   - Set up CI/CD if needed
   - Start TDD cycle

3. **This Week**:
   - Complete all P0 items
   - Begin P1 items
   - Maintain quality gates

## 🎯 Risk Management

### Identified Risks
1. **[Risk Description]**
   - Probability: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [Strategy]

### Contingency Plans
- If behind schedule: Focus on P0 only
- If blocked: Work on P1 items
- If ahead: Pull in P2 items

## 💡 Sprint Tips

- **Focus on P0 first**: Don't start P1 until P0 is done
- **Daily commits**: Small, frequent commits
- **Test continuously**: Don't leave testing for the end
- **Communicate blockers**: Don't wait, ask for help
- **Document as you go**: Don't leave it for later

## 📋 Sprint Checklist

- [ ] Sprint goal clearly defined
- [ ] All items estimated
- [ ] Priorities assigned (P0/P1/P2)
- [ ] GitHub issues created
- [ ] Sprint board configured
- [ ] Team capacity calculated
- [ ] Definition of Done agreed
- [ ] Risk mitigation planned