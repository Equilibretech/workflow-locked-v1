import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
      currentStep: 2
    };
    
    localStorage.getItem.mockReturnValue(JSON.stringify(savedData));
    
    render(<App />);
    
    expect(screen.getByText('Quel type de projet souhaitez-vous créer ?')).toBeInTheDocument();
  });

  it('navigates between steps', () => {
    render(<App />);
    
    // Fill first step
    const projectNameInput = screen.getByPlaceholderText('MonSuperProjet');
    fireEvent.change(projectNameInput, { target: { value: 'TestProject' } });
    
    const descriptionInput = screen.getByPlaceholderText(/Ex: Un site e-commerce/);
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });
    
    // Go to next step
    const nextButton = screen.getByText('Continuer');
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Quel type de projet souhaitez-vous créer ?')).toBeInTheDocument();
    
    // Go back
    const prevButton = screen.getByText('Précédent');
    fireEvent.click(prevButton);
    
    expect(screen.getByDisplayValue('TestProject')).toBeInTheDocument();
  });
});