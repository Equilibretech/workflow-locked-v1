import { useState } from 'react';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'radio' | 'checkbox' | 'select';
  placeholder?: string;
  required?: boolean;
  help?: string;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
    recommended?: boolean;
  }>;
}

export interface StepData {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  fields?: FormField[];
  auto?: boolean;
  tasks?: string[];
}

interface StepFormProps {
  step: StepData;
  formData: Record<string, any>;
  onFormChange: (data: Record<string, any>) => void;
}

export function StepForm({ step, formData, onFormChange }: StepFormProps) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  
  // Get the icon component dynamically
  const IconComponent = Icons[step.icon as keyof typeof Icons] as React.FC<{ className?: string }>;

  const handleFieldChange = (fieldName: string, value: any) => {
    onFormChange({
      ...formData,
      [fieldName]: value
    });
  };

  const handleCheckboxChange = (fieldName: string, option: string, checked: boolean) => {
    const currentValues = formData[fieldName] || [];
    const newValues = checked
      ? [...currentValues, option]
      : currentValues.filter((v: string) => v !== option);
    
    handleFieldChange(fieldName, newValues);
  };

  // Auto-progress for automated steps
  if (step.auto && step.tasks) {
    setTimeout(() => {
      if (currentTaskIndex < step.tasks!.length - 1) {
        setCurrentTaskIndex(currentTaskIndex + 1);
      }
    }, 1500);
  }

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="flex items-center space-x-4">
        {IconComponent && (
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {step.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {step.subtitle}
          </p>
        </div>
      </div>

      {/* Form Fields */}
      {step.fields && (
        <div className="space-y-4">
          {step.fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {/* Text Input */}
              {field.type === 'text' && (
                <input
                  type="text"
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required={field.required}
                />
              )}

              {/* Textarea */}
              {field.type === 'textarea' && (
                <textarea
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required={field.required}
                />
              )}

              {/* Radio Options */}
              {field.type === 'radio' && field.options && (
                <div className="space-y-3">
                  {field.options.map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        "relative flex items-start p-4 border rounded-lg cursor-pointer transition-all",
                        "hover:bg-gray-50 dark:hover:bg-gray-700",
                        formData[field.name] === option.value
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-300 dark:border-gray-600"
                      )}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={option.value}
                        checked={formData[field.name] === option.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {option.label}
                          </span>
                          {option.recommended && (
                            <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded">
                              Recommandé
                            </span>
                          )}
                        </div>
                        {option.description && (
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {option.description}
                          </p>
                        )}
                      </div>
                      <div className={cn(
                        "ml-3 w-5 h-5 border-2 rounded-full flex items-center justify-center",
                        formData[field.name] === option.value
                          ? "border-blue-500"
                          : "border-gray-300 dark:border-gray-600"
                      )}>
                        {formData[field.name] === option.value && (
                          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              )}

              {/* Checkbox Options */}
              {field.type === 'checkbox' && field.options && (
                <div className="space-y-3">
                  {field.options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={(formData[field.name] || []).includes(option.value)}
                        onChange={(e) => handleCheckboxChange(field.name, option.value, e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900 dark:text-white">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {field.help && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {field.help}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Automated Tasks */}
      {step.auto && step.tasks && (
        <div className="space-y-3">
          {step.tasks.map((task, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center p-4 border rounded-lg transition-all",
                index <= currentTaskIndex
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-300 dark:border-gray-600"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center mr-3",
                index < currentTaskIndex
                  ? "bg-green-500"
                  : index === currentTaskIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600"
              )}>
                {index < currentTaskIndex ? (
                  <Icons.Check className="w-4 h-4 text-white" />
                ) : index === currentTaskIndex ? (
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                ) : null}
              </div>
              <span className={cn(
                "font-medium",
                index <= currentTaskIndex
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              )}>
                {task}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}