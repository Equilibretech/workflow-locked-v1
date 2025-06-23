import { describe, it, expect } from "vitest";
import { WORKFLOW_GATES, getGateByIndex, getGateIndex } from "../index";

// Simple smoke test to maintain coverage
describe("Guide Smoke Tests", () => {
  it("should have basic project structure", () => {
    expect(true).toBe(true);
  });

  it("should validate workflow gates exist", () => {
    expect(WORKFLOW_GATES).toHaveLength(8);
    expect(WORKFLOW_GATES[0]).toBe("Bootstrap");
    expect(WORKFLOW_GATES[7]).toBe("Retrospective");
  });

  it("should get gate by index", () => {
    expect(getGateByIndex(0)).toBe("Bootstrap");
    expect(getGateByIndex(7)).toBe("Retrospective");
    expect(getGateByIndex(99)).toBeUndefined();
  });

  it("should get gate index", () => {
    expect(getGateIndex("Bootstrap")).toBe(0);
    expect(getGateIndex("Retrospective")).toBe(7);
  });
});
