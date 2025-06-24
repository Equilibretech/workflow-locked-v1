import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { IAWorkbench } from './IAWorkbench';

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe('IAWorkbench', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all Claude roles', () => {
    render(<IAWorkbench />);
    
    expect(screen.getByText('Développeur')).toBeInTheDocument();
    expect(screen.getByText('Code Reviewer')).toBeInTheDocument();
    expect(screen.getByText('DevOps')).toBeInTheDocument();
    expect(screen.getByText('Coach')).toBeInTheDocument();
  });

  it('generates command based on selected role', () => {
    render(<IAWorkbench />);
    
    // Default is dev role
    expect(screen.getByText('claude-code "/tdd-feature"')).toBeInTheDocument();
    
    // Switch to DevOps
    fireEvent.click(screen.getByText('DevOps'));
    expect(screen.getByText('claude-code "/deploy staging"')).toBeInTheDocument();
  });

  it('updates command when task is entered', async () => {
    render(<IAWorkbench />);
    
    const textarea = screen.getByPlaceholderText(/Créer un système d'authentification/);
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'créer système auth JWT' } });
    });
    
    expect(screen.getByText('claude-code "/tdd-feature créer-système-auth"')).toBeInTheDocument();
  });

  it('copies command to clipboard', async () => {
    render(<IAWorkbench />);
    
    const copyButton = screen.getAllByTitle('Copier')[0];
    await act(async () => {
      fireEvent.click(copyButton);
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('claude-code "/tdd-feature"');
  });

  it('shows expert mode details', () => {
    render(<IAWorkbench />);
    
    const expertButton = screen.getByText('Mode expert');
    fireEvent.click(expertButton);
    
    expect(screen.getByText(/Détails du prompt engineering/)).toBeInTheDocument();
  });

  it('maintains command history', async () => {
    render(<IAWorkbench />);
    
    // Initially no history should be visible
    expect(screen.queryByText(/Historique récent/)).not.toBeInTheDocument();
    
    // Enter task and execute
    const textarea = screen.getByPlaceholderText(/Créer un système d'authentification/);
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'unique test task for history' } });
    });
    
    const executeButton = screen.getByTitle('Exécuter');
    
    // Click execute and wait for state update
    await act(async () => {
      fireEvent.click(executeButton);
    });
    
    // Check that history section becomes visible (indicates history is working)
    expect(screen.getByText(/Historique récent/)).toBeInTheDocument();
  });

  it('switches between roles correctly', () => {
    render(<IAWorkbench />);
    
    // Click each role and verify selection
    const roles = ['Code Reviewer', 'DevOps', 'Coach', 'Développeur'];
    
    roles.forEach(role => {
      fireEvent.click(screen.getByText(role));
      
      // Check that the role is visually selected (has blue background)
      const roleButton = screen.getByText(role).closest('button');
      expect(roleButton).toHaveClass('border-blue-500');
    });
  });
});