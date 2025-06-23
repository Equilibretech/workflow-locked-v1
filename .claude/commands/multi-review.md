---
name: multi-review
description: Multi-level code review with strict validation (Stage 4)
args:
  - name: pr_reference
    description: Pull request number or reference (e.g., PR #42, feature-branch)
    required: true
  - name: review_focus
    description: Specific areas to focus on (security, performance, architecture)
    required: false
---

# Multi-Level Code Review: ${args.pr_reference}

## ⚠️ CLAUDE REVIEWER MODE ACTIVATED ⚠️

**PR Reference**: ${args.pr_reference}
**Review Focus**: ${args.review_focus || "Comprehensive review"}
**Reviewer**: Claude Session #2 (Independent Review)
**Date**: $(date)

> **Note**: This is an independent review session. Previous development context is intentionally ignored to ensure unbiased assessment.

## 📋 Review Checklist

### 🔍 Technical Review

#### Logic & Correctness
- [ ] Business logic correctly implemented
- [ ] Algorithm efficiency appropriate
- [ ] Data structures well-chosen
- [ ] No obvious bugs or logic errors
- [ ] Edge cases properly handled

**Findings**:
```
✅ [What works well]
❌ [Issues found]
⚠️ [Potential concerns]
```

#### Architecture & Design
- [ ] Follows SOLID principles
- [ ] Proper separation of concerns
- [ ] No tight coupling
- [ ] Interfaces properly defined
- [ ] Design patterns appropriately used

**Findings**:
```
✅ [Good architectural decisions]
❌ [Design flaws]
⚠️ [Technical debt risks]
```

#### Performance
- [ ] No obvious performance bottlenecks
- [ ] Database queries optimized
- [ ] Caching strategy appropriate
- [ ] Resource usage efficient
- [ ] Async operations handled correctly

**Findings**:
```
✅ [Performance strengths]
❌ [Performance issues]
⚠️ [Scalability concerns]
```

#### Security
- [ ] Input validation present
- [ ] SQL injection prevented
- [ ] XSS protection implemented
- [ ] Authentication/authorization correct
- [ ] Sensitive data properly handled
- [ ] CSRF protection where needed

**Findings**:
```
✅ [Security measures in place]
❌ [Security vulnerabilities]
⚠️ [Security recommendations]
```

### 📋 Quality Review

#### Testing
- [ ] Test coverage adequate (>80%)
- [ ] Tests actually test functionality
- [ ] Edge cases covered
- [ ] Integration tests present
- [ ] Tests are maintainable

**Coverage Analysis**:
```
Statements: X%
Branches: X%
Functions: X%
Lines: X%
```

#### Code Quality
- [ ] Code is readable and self-documenting
- [ ] Naming conventions followed
- [ ] No code duplication (DRY)
- [ ] Complexity within limits
- [ ] ESLint/Prettier compliance

**Quality Metrics**:
```
Complexity: X/10
Maintainability: X/10
Readability: X/10
```

#### Documentation
- [ ] Code comments where necessary
- [ ] API documentation updated
- [ ] README reflects changes
- [ ] Changelog updated
- [ ] Complex logic explained

### 🎯 Review Decision

## ❌ CHANGES REQUESTED / ✅ APPROVED

### 📝 Required Actions (Blocking)

1. **[Critical Issue #1]**
   - Problem: [Description]
   - Solution: [Required fix]
   - Code example:
   ```javascript
   // Current (problematic)
   
   // Suggested fix
   ```

2. **[Critical Issue #2]**
   - Problem: [Description]
   - Solution: [Required fix]

### 💡 Suggestions (Non-blocking)

1. **[Improvement #1]**
   - Current approach works but could be better
   - Suggestion: [Enhancement]

2. **[Improvement #2]**
   - Consider for future refactoring
   - Benefits: [Why it would help]

## 📊 Review Summary

### Metrics
- **Code Complexity**: X/10 (target: <6)
- **Maintainability**: X/10 (target: >7)
- **Test Quality**: X/10 (target: >8)
- **Security Score**: X/10 (target: >8)
- **Overall Quality**: X/10

### Risk Assessment
- **Merge Risk**: Low/Medium/High
- **Production Impact**: Minimal/Moderate/Significant
- **Technical Debt**: None/Acceptable/Concerning

### Time Estimates
- **Required fixes**: X hours
- **Suggested improvements**: Y hours
- **Total effort**: Z hours

## 🔄 Review Process Validation

- [ ] Reviewed all changed files
- [ ] Checked test coverage
- [ ] Validated against acceptance criteria
- [ ] Verified no breaking changes
- [ ] Confirmed follows project standards
- [ ] Security implications assessed

## 📝 Next Actions

### For Developer (Claude Session #1)

1. **Address Required Actions**
   - Fix all blocking issues
   - Update tests accordingly
   - Respond to each point

2. **Consider Suggestions**
   - Evaluate non-blocking improvements
   - Implement if time permits
   - Document if postponed

3. **Request Re-review**
   - Push fixes to same PR
   - Comment on addressed items
   - Request new review

### For Reviewer (Claude Session #2)

1. **On Changes Requested**
   - Monitor PR for updates
   - Re-review when notified
   - Validate fixes implemented

2. **On Approval**
   - Merge PR
   - Tag release if needed
   - Update sprint board

## 💡 Review Best Practices Applied

- **Independent Perspective**: No prior context bias
- **Constructive Feedback**: Solutions provided, not just problems
- **Prioritized Issues**: Clear blocking vs non-blocking
- **Actionable Items**: Specific fixes suggested
- **Balanced Review**: Acknowledges good practices too

## 📋 Review Template Compliance

This review follows the DevFoundation multi-level review standard:
- ✅ Technical analysis (logic, architecture, performance, security)
- ✅ Quality assessment (tests, code quality, documentation)
- ✅ Clear decision with rationale
- ✅ Actionable feedback with examples
- ✅ Metrics and risk assessment
- ✅ Next steps clearly defined