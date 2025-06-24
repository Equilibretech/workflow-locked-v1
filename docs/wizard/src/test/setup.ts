import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

// Ensure localStorage is available globally
Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// Also define on window if it exists
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
}

// Mock navigator
Object.defineProperty(global, 'navigator', {
  value: {
    clipboard: {
      writeText: vi.fn().mockResolvedValue(undefined),
      readText: vi.fn().mockResolvedValue(''),
    },
    userAgent: 'test-user-agent',
  },
  writable: true,
});

// Mock document.execCommand for clipboard fallback
Object.defineProperty(document, 'execCommand', {
  value: vi.fn(() => true),
  writable: true,
});

// Mock window.alert
Object.defineProperty(window, 'alert', {
  value: vi.fn(),
  writable: true,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});