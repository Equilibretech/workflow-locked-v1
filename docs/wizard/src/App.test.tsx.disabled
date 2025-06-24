import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders the wizard in guided mode by default', () => {
    render(<App />);
    expect(screen.getByText('DevFoundation Wizard')).toBeInTheDocument();
    expect(screen.getByText('🚀 Guidé')).toBeInTheDocument();
  });

  it('switches between guided and expert mode', () => {
    render(<App />);
    
    const modeToggle = screen.getByText('🚀 Guidé');
    fireEvent.click(modeToggle);
    
    expect(screen.getByText('👨‍💻 Expert')).toBeInTheDocument();
    expect(screen.getByText('IA Workbench')).toBeInTheDocument();
  });

  it('validates required fields before allowing next step', () => {
    render(<App />);
    
    const nextButton = screen.getByText('Continuer').closest('button');
    expect(nextButton).toBeDisabled();
    
    // Fill required fields
    const projectNameInput = screen.getByPlaceholderText('MonSuperProjet');
    fireEvent.change(projectNameInput, { target: { value: 'TestProject' } });
    
    const descriptionInput = screen.getByPlaceholderText(/Ex: Un site e-commerce/);
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });
    
    expect(nextButton).not.toBeDisabled();
  });

  it('saves progress to localStorage', () => {
    render(<App />);
    
    const projectNameInput = screen.getByPlaceholderText('MonSuperProjet');
    fireEvent.change(projectNameInput, { target: { value: 'TestProject' } });
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'wizard-progress',
      expect.stringContaining('TestProject')
    );
  });

  it('loads saved progress from localStorage', () => {
    const savedData = {
      formData: { projectName: 'SavedProject' },
      currentStep: 1
    };
    
    localStorage.getItem.mockReturnValue(JSON.stringify(savedData));
    
    render(<App />);
    
    expect(screen.getByDisplayValue('SavedProject')).toBeInTheDocument();
  });

  it('navigates between steps', async () => {
    render(<App />);
    
    // Fill first step
    const projectNameInput = screen.getByPlaceholderText('MonSuperProjet');
    await act(async () => {
      fireEvent.change(projectNameInput, { target: { value: 'TestProject' } });
    });
    
    const descriptionInput = screen.getByPlaceholderText(/Ex: Un site e-commerce/);
    await act(async () => {
      fireEvent.change(descriptionInput, { target: { value: 'Test description' } });
    });
    
    // Go to next step
    const nextButton = screen.getByText('Continuer');
    await act(async () => {
      fireEvent.click(nextButton);
    });
    
    // Wait for step 2 to load and check the header
    expect(screen.getByText('Étape 2 sur 7')).toBeInTheDocument();
    
    // Go back
    const prevButton = screen.getByText('Précédent');
    await act(async () => {
      fireEvent.click(prevButton);
    });
    
    expect(screen.getByDisplayValue('TestProject')).toBeInTheDocument();
  });
});