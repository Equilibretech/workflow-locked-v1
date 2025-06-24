---
name: context-refresh
description: Sprint retrospective and context update (Stage 7)
args:
  - name: sprint_identifier
    description: Sprint name or number (e.g., sprint-01, feature-auth)
    required: true
  - name: retrospective_type
    description: Type of retrospective (sprint-end, milestone, quarterly)
    required: false
  - name: team_size
    description: Team size for retrospective format
    required: false
---

# Context Refresh: {sprint_identifier}

## 🔄 Sprint Retrospective Overview

**Sprint**: {sprint_identifier}
**Type**: {retrospective_type}
**Date**: {current_date}
**Team**: {team_size} developer(s)
**Duration**: {sprint_duration}

> **Objective**: Conduct comprehensive retrospective, capture lessons learned, and refresh Claude context for optimal future development.

## 📊 Sprint Summary

### Sprint Goals vs. Achievements

#### Original Objectives
- **Primary Goal**: {sprint_primary_goal}
- **Secondary Goals**: {sprint_secondary_goals}
- **Success Criteria**: {sprint_success_criteria}

#### Actual Outcomes
- **Completed Features**: {completed_features}
- **Story Points Delivered**: {story_points_delivered}/{story_points_planned}
- **Velocity**: {calculated_velocity}
- **Quality Metrics**: {quality_metrics}

### Sprint Metrics Dashboard
```
┌─────────────────┬──────────┬──────────┬──────────┐
│ Metric          │ Target   │ Actual   │ Status   │
├─────────────────┼──────────┼──────────┼──────────┤
│ Story Points    │ {target} │ {actual} │ {status} │
│ Test Coverage   │ >80%     │ {cover}% │ {c_stat} │
│ Bug Count       │ <5       │ {bugs}   │ {b_stat} │
│ Deploy Success  │ 100%     │ {deploy} │ {d_stat} │
│ Response Time   │ <200ms   │ {resp}ms │ {r_stat} │
└─────────────────┴──────────┴──────────┴──────────┘
```

## 🎯 Retrospective Analysis

### What Went Well ✅

#### Development Process
- **TDD Workflow**: {tdd_effectiveness}
- **Code Quality**: {code_quality_assessment}
- **Testing Strategy**: {testing_effectiveness}
- **CI/CD Pipeline**: {pipeline_performance}
- **Documentation**: {documentation_quality}

#### Technical Achievements
- **Architecture Decisions**: {architecture_success}
- **Performance Optimizations**: {performance_improvements}
- **Security Implementation**: {security_measures}
- **Monitoring Setup**: {monitoring_effectiveness}

#### Team Collaboration
- **Multi-Claude Sessions**: {multi_claude_effectiveness}
- **Code Reviews**: {review_quality}
- **Knowledge Sharing**: {knowledge_transfer}
- **Problem Solving**: {problem_resolution}

### What Went Wrong ❌

#### Process Issues
- **Planning Accuracy**: {planning_issues}
- **Estimation Challenges**: {estimation_problems}
- **Workflow Bottlenecks**: {workflow_problems}
- **Communication Gaps**: {communication_issues}

#### Technical Challenges
- **Technical Debt**: {technical_debt_accumulated}
- **Performance Issues**: {performance_problems}
- **Integration Problems**: {integration_challenges}
- **Testing Gaps**: {testing_shortcomings}

#### External Factors
- **Dependency Issues**: {dependency_problems}
- **Infrastructure Challenges**: {infrastructure_issues}
- **Tool Limitations**: {tool_limitations}

### What Could Be Improved ⚠️

#### Short-term Improvements (Next Sprint)
1. **{improvement_1}**
   - **Issue**: {issue_description_1}
   - **Solution**: {proposed_solution_1}
   - **Implementation**: {implementation_plan_1}

2. **{improvement_2}**
   - **Issue**: {issue_description_2}
   - **Solution**: {proposed_solution_2}
   - **Implementation**: {implementation_plan_2}

#### Medium-term Improvements (Next Month)
1. **{medium_improvement_1}**
   - **Rationale**: {medium_rationale_1}
   - **Timeline**: {medium_timeline_1}

2. **{medium_improvement_2}**
   - **Rationale**: {medium_rationale_2}
   - **Timeline**: {medium_timeline_2}

#### Long-term Strategic Changes
1. **{strategic_change_1}**
   - **Vision**: {strategic_vision_1}
   - **Impact**: {strategic_impact_1}

## 📈 Performance Metrics Analysis

### Development Velocity
```json
{
  "sprint_velocity": {
    "current": {story_points_delivered},
    "previous": {previous_velocity},
    "trend": "{velocity_trend}",
    "target": {target_velocity}
  },
  "cycle_time": {
    "feature_development": "{dev_cycle_time}",
    "code_review": "{review_cycle_time}",
    "deployment": "{deploy_cycle_time}"
  }
}
```

### Quality Metrics
```json
{
  "quality_score": {
    "test_coverage": {test_coverage_percent},
    "code_complexity": {code_complexity_score},
    "security_score": {security_assessment_score},
    "performance_score": {performance_score}
  },
  "defect_metrics": {
    "bugs_found": {bugs_discovered},
    "bugs_fixed": {bugs_resolved},
    "critical_issues": {critical_issues_count},
    "escaped_defects": {production_bugs}
  }
}
```

### Technical Health Score
```
Overall Health: {technical_health_percentage}%

📊 Breakdown:
├── Code Quality      {code_quality_score}/10
├── Test Coverage     {coverage_score}/10  
├── Documentation     {docs_score}/10
├── Security          {security_score}/10
├── Performance       {performance_score}/10
└── Maintainability   {maintainability_score}/10
```

## 🧠 Knowledge Extraction

### Technical Learnings

#### Architecture Insights
- **Design Patterns**: {design_patterns_learned}
- **Performance Lessons**: {performance_insights}
- **Security Discoveries**: {security_learnings}
- **Integration Patterns**: {integration_lessons}

#### Tool Effectiveness
- **Development Tools**: {dev_tools_assessment}
- **Testing Frameworks**: {testing_tools_effectiveness}
- **CI/CD Pipeline**: {pipeline_lessons}
- **Monitoring Tools**: {monitoring_insights}

### Process Learnings

#### DevFoundation Workflow
- **Gate Effectiveness**: {gate_system_assessment}
- **Multi-Claude Sessions**: {multi_claude_learnings}
- **TDD Application**: {tdd_process_insights}
- **Review Process**: {review_process_effectiveness}

#### Team Dynamics
- **Communication Patterns**: {communication_insights}
- **Decision Making**: {decision_process_assessment}
- **Knowledge Sharing**: {knowledge_transfer_effectiveness}

## 🔄 Context Update for CLAUDE.md

### Updated Context Summary
```markdown
## ⏪ Context History (Auto-updated {current_date})

### {sprint_identifier} Summary
- **Delivered**: {completed_features_summary}
- **Velocity**: {story_points_delivered}/{story_points_planned} points
- **Quality**: {quality_summary}
- **Key Learnings**: {key_learnings_summary}
- **Technical Debt**: {technical_debt_summary}

### Active Technical Decisions
- **Architecture**: {current_architecture_status}
- **Tech Stack**: {current_tech_stack}
- **Testing Strategy**: {current_testing_approach}
- **Deployment Process**: {current_deployment_status}

### Current Sprint Focus
- **Primary Goal**: {next_sprint_primary_goal}
- **Key Features**: {next_sprint_features}
- **Success Metrics**: {next_sprint_metrics}
- **Risk Areas**: {identified_risks}
```

### Updated Development Standards
```markdown
## 📋 Standards Code (Updated {current_date})

### Proven Patterns
- **{proven_pattern_1}**: {pattern_description_1}
- **{proven_pattern_2}**: {pattern_description_2}

### Avoid These Approaches
- **{antipattern_1}**: {why_avoid_1}
- **{antipattern_2}**: {why_avoid_2}

### New Guidelines
- **{new_guideline_1}**: {guideline_description_1}
- **{new_guideline_2}**: {guideline_description_2}
```

## 📋 Action Items for Next Sprint

### Immediate Actions (This Week)
- [ ] **{action_1}**
  - **Owner**: {action_owner_1}
  - **Deadline**: {action_deadline_1}
  - **Priority**: {action_priority_1}

- [ ] **{action_2}**
  - **Owner**: {action_owner_2}
  - **Deadline**: {action_deadline_2}
  - **Priority**: {action_priority_2}

### Process Improvements
- [ ] **Update Templates**: {template_updates_needed}
- [ ] **Refine Workflow**: {workflow_refinements}
- [ ] **Tool Configuration**: {tool_config_changes}
- [ ] **Documentation Updates**: {documentation_updates}

### Technical Debt Items
- [ ] **{tech_debt_1}**
  - **Impact**: {debt_impact_1}
  - **Effort**: {debt_effort_1}
  - **Priority**: {debt_priority_1}

- [ ] **{tech_debt_2}**
  - **Impact**: {debt_impact_2}
  - **Effort**: {debt_effort_2}
  - **Priority**: {debt_priority_2}

## 🎲 Risk Assessment

### Identified Risks for Next Sprint
1. **{risk_1}**
   - **Probability**: {risk_1_probability}
   - **Impact**: {risk_1_impact}
   - **Mitigation**: {risk_1_mitigation}

2. **{risk_2}**
   - **Probability**: {risk_2_probability}
   - **Impact**: {risk_2_impact}
   - **Mitigation**: {risk_2_mitigation}

### Dependencies and Blockers
- **External Dependencies**: {external_dependencies}
- **Internal Blockers**: {internal_blockers}
- **Resource Constraints**: {resource_limitations}

## 📊 Sprint Comparison

### Historical Velocity Trend
```
Sprint Velocity Trend:
{sprint_n-2}: {velocity_n2} points
{sprint_n-1}: {velocity_n1} points  
{sprint_n}:   {velocity_n} points
Trend: {velocity_trend_analysis}
```

### Quality Trend Analysis
```
Quality Metrics Trend:
Test Coverage:  {coverage_trend}
Bug Rate:       {bug_rate_trend}
Deploy Success: {deploy_success_trend}
Performance:    {performance_trend}
```

## 🏆 Achievements and Celebrations

### Sprint Highlights
- **🎯 Goals Achieved**: {goals_achieved}
- **🚀 Performance Wins**: {performance_achievements}
- **🛡️ Quality Improvements**: {quality_improvements}
- **📚 Learning Milestones**: {learning_achievements}

### Team Recognition
- **Innovation**: {innovation_highlights}
- **Problem Solving**: {problem_solving_wins}
- **Quality Focus**: {quality_focus_achievements}
- **Collaboration**: {collaboration_successes}

## 📝 Retrospective Summary Document

### Executive Summary
```markdown
# Sprint {sprint_identifier} Retrospective

## Key Outcomes
- ✅ Delivered: {major_deliverables}
- 📊 Velocity: {velocity_achieved}
- 🎯 Quality: {quality_achieved}
- 📈 Trend: {overall_trend}

## Major Learnings
1. {major_learning_1}
2. {major_learning_2}
3. {major_learning_3}

## Next Sprint Focus
- Primary: {next_sprint_focus}
- Improvements: {planned_improvements}
- Risks: {key_risks_to_monitor}
```

## 🔄 Automated Context Updates

### Update CLAUDE.md Context
```bash
# Automatically update CLAUDE.md with new context
echo "Updating CLAUDE.md context section..."

# Backup current CLAUDE.md
cp CLAUDE.md CLAUDE.md.backup

# Update context history section
sed -i '/## ⏪ Context History/,/## Technical Debt/{//!d;}' CLAUDE.md
cat >> CLAUDE.md << EOF

## ⏪ Context History (Auto-updated {current_date})

{updated_context_content}

## Technical Debt
{updated_technical_debt}

EOF

echo "✅ CLAUDE.md context updated successfully"
```

### Generate Next Sprint Template
```bash
# Create next sprint planning template
cat > docs/sprint-{next_sprint_number}-planning.md << EOF
# Sprint {next_sprint_number} Planning

Based on {sprint_identifier} retrospective:

## Goals
- Primary: {recommended_next_goal}
- Secondary: {recommended_secondary_goals}

## Lessons Applied
{lessons_to_apply}

## Improvements to Implement
{improvements_to_implement}

## Risk Mitigation
{risks_to_address}
EOF
```

## ✅ Retrospective Completion Checklist

### Documentation Updates
- [ ] **Sprint summary** documented with metrics
- [ ] **Lessons learned** captured and categorized
- [ ] **Action items** defined with owners and deadlines
- [ ] **CLAUDE.md context** updated with new insights
- [ ] **Next sprint template** generated
- [ ] **Risk assessment** completed for upcoming work

### Process Improvements
- [ ] **Workflow refinements** identified and planned
- [ ] **Tool optimizations** documented
- [ ] **Quality standards** updated based on learnings
- [ ] **Template improvements** noted for future sprints

### Knowledge Management
- [ ] **Technical insights** documented
- [ ] **Best practices** updated
- [ ] **Anti-patterns** identified and documented
- [ ] **Architecture decisions** recorded

---

## 🎯 Context Refresh Complete

**Status**: ✅ Sprint retrospective completed and context refreshed
**Next Sprint**: {next_sprint_identifier}
**Context Updated**: {current_date}

### Gate 7 Validation Checklist
- [ ] Comprehensive retrospective conducted
- [ ] Metrics analyzed and trends identified
- [ ] Lessons learned documented and categorized
- [ ] Action items defined with clear ownership
- [ ] CLAUDE.md context updated with new insights
- [ ] Next sprint planning template created
- [ ] Risk assessment completed
- [ ] Process improvements identified and planned

**Ready for**: `claude-code "/project-setup {next_project}" or "/sprint-recipe {next_sprint}"`

---

## 📈 Continuous Improvement Cycle

This retrospective marks the completion of one DevFoundation cycle. The insights captured here will:

1. **Inform future sprints** with improved processes
2. **Enhance Claude context** for better assistance
3. **Build institutional knowledge** for the project
4. **Optimize the DevFoundation workflow** based on real experience

The cycle continues with enhanced wisdom and improved practices. 🔄