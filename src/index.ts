/**
 * DevFoundation Workflow Locked V1
 * Framework for professional solo development
 */

export const WORKFLOW_GATES = [
  "Bootstrap",
  "Discovery",
  "Sprint 0",
  "Dev Loop",
  "Code Review",
  "DevOps",
  "Observability",
  "Retrospective"
];

// export type WorkflowGate = typeof WORKFLOW_GATES[number];

export function getGateByIndex(index) {
  return WORKFLOW_GATES[index];
}

export function getGateIndex(gate) {
  return WORKFLOW_GATES.indexOf(gate);
}
