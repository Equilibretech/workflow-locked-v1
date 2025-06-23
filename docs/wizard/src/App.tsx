import { useState, useEffect } from 'react';
import { WizardLayout } from './components/WizardLayout';
import { StepForm, type StepData } from './components/StepForm';
import { IAWorkbench } from './components/IAWorkbench';
import stepsData from './data/steps.json';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [mode, setMode] = useState<'guided' | 'expert'>('guided');
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Load saved progress from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('wizard-progress');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed.formData || {});
      setCurrentStep(parsed.currentStep || 1);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('wizard-progress', JSON.stringify({
      formData,
      currentStep
    }));
  }, [formData, currentStep]);

  const steps = stepsData.steps as StepData[];
  const currentStepData = steps.find(s => s.id === currentStep)!;

  const canGoNext = () => {
    if (!currentStepData.fields) return true; // Auto steps
    
    // Check required fields
    for (const field of currentStepData.fields) {
      if (field.required && !formData[field.name]) {
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (canGoNext() && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleModeToggle = () => {
    setMode(mode === 'guided' ? 'expert' : 'guided');
  };

  const handleFormChange = (data: Record<string, any>) => {
    setFormData(data);
  };

  if (mode === 'expert') {
    return (
      <WizardLayout
        currentStep={1}
        totalSteps={1}
        onPrevious={() => {}}
        onNext={() => {}}
        canGoPrevious={false}
        canGoNext={false}
        mode={mode}
        onModeToggle={handleModeToggle}
      >
        <IAWorkbench />
      </WizardLayout>
    );
  }

  return (
    <WizardLayout
      currentStep={currentStep}
      totalSteps={steps.length}
      onPrevious={handlePrevious}
      onNext={handleNext}
      canGoPrevious={currentStep > 1}
      canGoNext={canGoNext()}
      mode={mode}
      onModeToggle={handleModeToggle}
    >
      <StepForm
        step={currentStepData}
        formData={formData}
        onFormChange={handleFormChange}
      />
    </WizardLayout>
  );
}

export default App;