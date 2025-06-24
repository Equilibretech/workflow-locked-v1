---
name: tdd-feature
description: TDD development cycle with red-green-refactor pattern (Stage 3)
args:
  - name: feature_description
    description: Description of the feature to implement
    required: true
  - name: acceptance_criteria
    description: Specific acceptance criteria for the feature
    required: false
---

# TDD Feature: {feature_description}

## 🎯 Feature Implementation

**Feature**: {feature_description}
**Acceptance Criteria**: {acceptance_criteria}
**Date**: {current_date}
**Sprint**: Current

## 📋 Analysis Section

### Feature Breakdown
- **User Story**: As a user, I want to {feature_description}
- **Technical Requirements**: [Analyze based on feature]
- **Dependencies**: [List required modules/services]
- **Impact**: [Frontend/Backend/Database changes]

### Test Strategy
- **Unit Tests**: Core business logic
- **Integration Tests**: API endpoints and data flow
- **Edge Cases**: Error handling, validation, limits
- **Performance**: Response time requirements

## 🔴 RED Phase - Write Failing Tests

### Step 1: Define Test Structure
```javascript
describe('{feature_description}', () => {
  // Setup and teardown
  beforeEach(() => {
    // Initialize test environment
  });

  afterEach(() => {
    // Clean up
  });

  // Core functionality tests
  describe('Core Features', () => {
    it('should [primary behavior]', () => {
      // Arrange
      // Act
      // Assert
      expect(result).toBe(expected);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('should handle [edge case]', () => {
      // Test edge case
    });
  });

  // Error handling
  describe('Error Handling', () => {
    it('should throw error when [condition]', () => {
      // Test error scenarios
    });
  });
});
```

### Step 2: Run Tests - Verify RED
```bash
npm test -- --watch
# All tests should FAIL at this point
```

## 🟢 GREEN Phase - Minimal Implementation

### Step 3: Write Minimal Code
```javascript
// Write ONLY enough code to make tests pass
// No extra features, no optimization
// Focus on making it work

class FeatureImplementation {
  // Minimal working code here
}
```

### Step 4: Run Tests - Achieve GREEN
```bash
npm test
# All tests should PASS now
```

## ♻️ REFACTOR Phase - Improve Code Quality

### Step 5: Refactor Without Breaking Tests
- **Extract Methods**: Break down complex functions
- **Remove Duplication**: Apply DRY principle
- **Improve Naming**: Make code self-documenting
- **Add Types**: TypeScript interfaces if applicable
- **Optimize Performance**: Only if needed

### Step 6: Verify Tests Still Pass
```bash
npm test
# All tests should still be GREEN
```

## ✅ Validation Checklist

### TDD Process
- [ ] Tests written BEFORE implementation code
- [ ] Tests failed initially (RED phase confirmed)
- [ ] Minimal code written to pass tests
- [ ] All tests passing (GREEN phase achieved)
- [ ] Code refactored without breaking tests
- [ ] No untested code added

### Code Quality
- [ ] Test coverage > 80% for this feature
- [ ] All edge cases covered
- [ ] Error scenarios handled
- [ ] Code follows project standards
- [ ] ESLint passes with 0 errors
- [ ] Types/interfaces defined (if TypeScript)

### Documentation
- [ ] JSDoc/comments for public methods
- [ ] README updated if needed
- [ ] API documentation updated
- [ ] Changelog entry added

## 📊 Test Coverage Report

```bash
npm run test:coverage
```

Expected coverage for this feature:
- Statements: > 80%
- Branches: > 75%
- Functions: > 80%
- Lines: > 80%

## 🚀 Integration Steps

1. **Create feature branch**
   ```bash
   git checkout -b feature/{feature_description}
   ```

2. **Commit with conventional message**
   ```bash
   git add .
   git commit -m "feat: {feature_description}

   - Implemented using TDD approach
   - All tests passing with X% coverage
   - Follows project coding standards"
   ```

3. **Push and create PR**
   ```bash
   git push origin feature/{feature_description}
   gh pr create --title "feat: {feature_description}" --body "TDD implementation complete"
   ```

## 📝 Next Actions

1. **Immediate**:
   - Complete all checklist items
   - Run full test suite
   - Create pull request

2. **Code Review** (Gate 4):
   - Request review with `/multi-review`
   - Address feedback
   - Ensure approval before merge

3. **Post-Merge**:
   - Update sprint board
   - Document any learnings
   - Plan next feature

## 💡 TDD Best Practices

- **One test at a time**: Write one test, make it pass, refactor
- **Keep tests fast**: Mock external dependencies
- **Test behavior, not implementation**: Focus on what, not how
- **Descriptive test names**: Should explain what and why
- **AAA Pattern**: Arrange, Act, Assert
- **No logic in tests**: Keep tests simple and readable

## ⚠️ Common Pitfalls to Avoid

- Writing implementation before tests
- Testing implementation details
- Skipping the refactor phase
- Writing too many tests at once
- Not running tests in watch mode
- Ignoring failing tests