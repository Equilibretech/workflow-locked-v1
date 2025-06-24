---
name: stack-analysis
description: Analyze and recommend technology stack for project (Stage 1)
args:
  - name: project_type
    description: Type of project (e.g., e-commerce, SaaS, API, mobile app)
    required: true
  - name: requirements
    description: Specific requirements or constraints
    required: false
  - name: timeline
    description: Project timeline or deadline
    required: false
---

# Stack Analysis: {project_type}

## 🔍 Analysis Context

**Project Type**: {project_type}
**Requirements**: {requirements}
**Timeline**: {timeline}
**Date**: {current_date}

> **Objective**: Analyze technical requirements and recommend optimal technology stack based on project goals, constraints, and timeline.

## 📊 Requirements Analysis

### Business Requirements
- **Primary Goal**: {project_goal}
- **Target Users**: {target_users}
- **Scale Expected**: {expected_scale}
- **Performance Needs**: {performance_requirements}
- **Budget Constraints**: {budget_constraints}

### Technical Constraints
- **Team Skills**: {team_skills}
- **Infrastructure**: {infrastructure_constraints}
- **Integration Needs**: {integration_requirements}
- **Compliance**: {compliance_requirements}

## ⚖️ Technology Stack Comparison

### Frontend Options

| Criteria | React | Vue.js | Angular | Next.js | Svelte |
|----------|-------|--------|---------|---------|--------|
| **Learning Curve** | 7/10 | 9/10 | 5/10 | 6/10 | 8/10 |
| **Performance** | 8/10 | 8/10 | 7/10 | 9/10 | 9/10 |
| **Ecosystem** | 10/10 | 7/10 | 8/10 | 9/10 | 6/10 |
| **Development Speed** | 8/10 | 9/10 | 6/10 | 9/10 | 8/10 |
| **Scalability** | 9/10 | 8/10 | 9/10 | 9/10 | 7/10 |
| **Community** | 10/10 | 8/10 | 8/10 | 9/10 | 7/10 |
| **Job Market** | 10/10 | 7/10 | 8/10 | 9/10 | 5/10 |

### Backend Options

| Criteria | Node.js | Python | Go | Java | .NET |
|----------|---------|--------|----|----- |------|
| **Development Speed** | 9/10 | 9/10 | 7/10 | 6/10 | 7/10 |
| **Performance** | 7/10 | 6/10 | 9/10 | 8/10 | 8/10 |
| **Scalability** | 8/10 | 7/10 | 9/10 | 9/10 | 8/10 |
| **Ecosystem** | 10/10 | 9/10 | 7/10 | 9/10 | 8/10 |
| **Learning Curve** | 8/10 | 9/10 | 6/10 | 5/10 | 6/10 |
| **Hosting Costs** | 8/10 | 7/10 | 9/10 | 6/10 | 6/10 |

### Database Options

| Criteria | PostgreSQL | MongoDB | MySQL | Redis | SQLite |
|----------|------------|---------|-------|-------|--------|
| **Reliability** | 10/10 | 8/10 | 9/10 | 9/10 | 8/10 |
| **Scalability** | 9/10 | 9/10 | 8/10 | 8/10 | 5/10 |
| **Performance** | 9/10 | 8/10 | 8/10 | 10/10 | 7/10 |
| **Flexibility** | 8/10 | 10/10 | 7/10 | 6/10 | 6/10 |
| **Learning Curve** | 7/10 | 8/10 | 8/10 | 8/10 | 9/10 |
| **Ecosystem** | 9/10 | 8/10 | 9/10 | 7/10 | 7/10 |

## 🎯 Recommended Stack

### Primary Recommendation

**Frontend**: {recommended_frontend}
**Backend**: {recommended_backend}  
**Database**: {recommended_database}
**Deployment**: {recommended_deployment}

### Justification

#### Why {recommended_frontend}?
- ✅ **Fits timeline**: {timeline_justification}
- ✅ **Team skills**: {skills_justification}
- ✅ **Performance**: {performance_justification}
- ✅ **Ecosystem**: {ecosystem_justification}

#### Why {recommended_backend}?
- ✅ **Development speed**: {backend_speed_justification}
- ✅ **Scalability**: {backend_scale_justification}
- ✅ **Integration**: {backend_integration_justification}

#### Why {recommended_database}?
- ✅ **Data model fit**: {data_model_justification}
- ✅ **Performance needs**: {db_performance_justification}
- ✅ **Operational simplicity**: {db_ops_justification}

## 🏗️ Architecture Proposal

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   {frontend}    │────│   {backend}     │────│   {database}    │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Development Stack
- **Package Manager**: {package_manager}
- **Build Tool**: {build_tool}
- **Testing**: {testing_framework}
- **Linting**: {linting_setup}
- **CI/CD**: {cicd_setup}

### Production Infrastructure
- **Hosting**: {hosting_recommendation}
- **CDN**: {cdn_recommendation}
- **Monitoring**: {monitoring_setup}
- **Backup**: {backup_strategy}

## 📋 Implementation Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Initialize {frontend} project
- [ ] Setup {backend} server
- [ ] Configure {database}
- [ ] Basic CI/CD pipeline
- [ ] Development environment

### Phase 2: Core Features (Weeks 2-3)
- [ ] Authentication system
- [ ] Core business logic
- [ ] API endpoints
- [ ] Database schema
- [ ] Basic frontend

### Phase 3: Enhancement (Week 4)
- [ ] Advanced features
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Production deployment
- [ ] Monitoring setup

## ⚠️ Risks and Mitigation

### Technical Risks
- **Risk**: {technical_risk_1}
  - **Mitigation**: {mitigation_1}
  
- **Risk**: {technical_risk_2}
  - **Mitigation**: {mitigation_2}

### Timeline Risks
- **Risk**: Learning curve for new technologies
  - **Mitigation**: Start with familiar stack, learn incrementally

### Scalability Risks  
- **Risk**: Initial architecture may not scale
  - **Mitigation**: Design with growth in mind, use proven patterns

## 📈 Success Metrics

### Development Metrics
- **Time to MVP**: {mvp_timeline}
- **Bug Rate**: < 5 critical bugs/sprint
- **Test Coverage**: > 80%
- **Build Time**: < 2 minutes

### Performance Metrics
- **Page Load**: < 2 seconds
- **API Response**: < 200ms
- **Database Queries**: < 50ms
- **Uptime**: > 99.9%

## ✅ Decision Summary

### Final Stack Decision
```json
{
  "frontend": "{recommended_frontend}",
  "backend": "{recommended_backend}",
  "database": "{recommended_database}",
  "deployment": "{recommended_deployment}",
  "confidence": "high",
  "reasoning": "Best fit for timeline, skills, and requirements"
}
```

### Next Actions
1. **Update .vibe.json** with chosen stack
2. **Initialize project** with selected technologies
3. **Setup development environment**
4. **Begin implementation** with TDD approach
5. **Document architecture decisions**

### Commands to Execute
```bash
# Update project configuration
claude-code "/project-setup {project_name} {project_type} {final_stack}"

# Begin development
claude-code "/tdd-feature authentication-system"
```

---

## 📝 Stack Analysis Complete

**Decision**: {final_stack_summary}
**Confidence Level**: High
**Next Gate**: Sprint Planning (Gate 2)

✅ **Gate 1 Validation Checklist**
- [ ] Stack analysis completed with justification
- [ ] Technology choices documented
- [ ] Architecture proposal created
- [ ] Implementation roadmap defined
- [ ] .vibe.json updated with final stack
- [ ] Risks identified and mitigated
- [ ] Success metrics defined

**Ready to proceed to**: `claude-code "/sprint-recipe Sprint-0 Foundation-Setup"`