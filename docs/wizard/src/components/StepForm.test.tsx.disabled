import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { StepForm } from './StepForm';
import type { StepData } from './StepForm';

const mockStepData: StepData = {
  id: 1,
  title: 'Test Step',
  subtitle: 'Test step description',
  icon: 'Rocket',
  fields: [
    {
      name: 'testText',
      label: 'Test Text Field',
      type: 'text',
      placeholder: 'Enter text',
      required: true,
      help: 'This is help text'
    },
    {
      name: 'testTextarea',
      label: 'Test Textarea',
      type: 'textarea',
      placeholder: 'Enter description',
      required: false
    },
    {
      name: 'testRadio',
      label: 'Test Radio',
      type: 'radio',
      required: true,
      options: [
        { value: 'option1', label: 'Option 1', description: 'First option' },
        { value: 'option2', label: 'Option 2', description: 'Second option', recommended: true }
      ]
    },
    {
      name: 'testCheckbox',
      label: 'Test Checkbox',
      type: 'checkbox',
      options: [
        { value: 'check1', label: 'Check 1' },
        { value: 'check2', label: 'Check 2' }
      ]
    }
  ]
};

const mockAutoStepData: StepData = {
  id: 2,
  title: 'Auto Step',
  subtitle: 'Automated step',
  icon: 'Settings',
  auto: true,
  tasks: ['Task 1', 'Task 2', 'Task 3']
};

describe('StepForm', () => {
  const mockOnFormChange = vi.fn();
  const defaultFormData = {};

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders step with text field', () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    expect(screen.getByText('Test Step')).toBeInTheDocument();
    expect(screen.getByText('Test step description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    expect(screen.getByText('This is help text')).toBeInTheDocument();
  });

  it('handles text input changes', async () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    const textInput = screen.getByPlaceholderText('Enter text');
    await act(async () => {
      fireEvent.change(textInput, { target: { value: 'test value' } });
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testText: 'test value' });
  });

  it('handles textarea changes', async () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    const textarea = screen.getByPlaceholderText('Enter description');
    await act(async () => {
      fireEvent.change(textarea, { target: { value: 'test description' } });
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testTextarea: 'test description' });
  });

  it('handles radio button selection', async () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    const radioOption = screen.getByDisplayValue('option1');
    await act(async () => {
      fireEvent.click(radioOption);
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testRadio: 'option1' });
  });

  it('handles checkbox selection', async () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    const checkbox = screen.getByDisplayValue('check1');
    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testCheckbox: ['check1'] });
  });

  it('handles checkbox unchecking', async () => {
    const formData = { testCheckbox: ['check1', 'check2'] };
    
    render(
      <StepForm
        step={mockStepData}
        formData={formData}
        onFormChange={mockOnFormChange}
      />
    );

    const checkbox = screen.getByDisplayValue('check1');
    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testCheckbox: ['check2'] });
  });

  it('renders auto step with tasks', () => {
    render(
      <StepForm
        step={mockAutoStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    expect(screen.getByText('Auto Step')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('shows required field indicator', () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    // Required fields should have asterisk
    const requiredLabels = screen.getAllByText('*');
    expect(requiredLabels.length).toBeGreaterThan(0);
  });

  it('handles pre-filled form data', () => {
    const formData = {
      testText: 'pre-filled value',
      testRadio: 'option2',
      testCheckbox: ['check1', 'check2']
    };

    render(
      <StepForm
        step={mockStepData}
        formData={formData}
        onFormChange={mockOnFormChange}
      />
    );

    expect(screen.getByDisplayValue('pre-filled value')).toBeInTheDocument();
    expect(screen.getByDisplayValue('option2')).toBeChecked();
    expect(screen.getByDisplayValue('check1')).toBeChecked();
    expect(screen.getByDisplayValue('check2')).toBeChecked();
  });

  it('handles empty checkbox array correctly', async () => {
    const formData = { testCheckbox: ['check1'] };
    
    render(
      <StepForm
        step={mockStepData}
        formData={formData}
        onFormChange={mockOnFormChange}
      />
    );

    // Uncheck the only selected checkbox
    const checkbox = screen.getByDisplayValue('check1');
    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(mockOnFormChange).toHaveBeenCalledWith({ testCheckbox: [] });
  });

  it('shows recommended option badge', () => {
    render(
      <StepForm
        step={mockStepData}
        formData={defaultFormData}
        onFormChange={mockOnFormChange}
      />
    );

    expect(screen.getByText('Recommandé')).toBeInTheDocument();
  });
});