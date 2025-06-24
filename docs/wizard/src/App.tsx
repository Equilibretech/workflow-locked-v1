import { useState } from 'react';
import { WizardLayout } from './components/WizardLayout';
import { StepForm, type StepData } from './components/StepForm';
import { IAWorkbench } from './components/IAWorkbench';
import { useWizardProgress } from './hooks/useWizardProgress';
import stepsData from './data/steps.json';

function App() {
  const [mode, setMode] = useState<'guided' | 'expert'>('guided');
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    previousStep
  } = useWizardProgress();

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
      nextStep();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      previousStep();
    }
  };

  const handleModeToggle = () => {
    setMode(mode === 'guided' ? 'expert' : 'guided');
  };

  const handleFormChange = (data: Record<string, any>) => {
    Object.entries(data).forEach(([key, value]) => {
      updateFormData(key, value);
    });
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