import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'wizard-progress';

export function useWizardProgress() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Load saved progress from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Validate parsed data structure
        if (parsed && typeof parsed === 'object') {
          setFormData(parsed.formData || {});
          const stepNumber = parseInt(parsed.currentStep);
          if (stepNumber >= 1 && stepNumber <= 7) {
            setCurrentStep(stepNumber);
          }
        }
      } catch (error) {
        console.warn('Failed to parse wizard progress, starting fresh:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      formData,
      currentStep
    }));
  }, [formData, currentStep]);

  const updateFormData = useCallback((field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step);
    }
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, 7));
  }, []);

  const previousStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const resetProgress = useCallback(() => {
    setCurrentStep(1);
    setFormData({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    currentStep,
    formData,
    updateFormData,
    goToStep,
    nextStep,
    previousStep,
    resetProgress
  };
}