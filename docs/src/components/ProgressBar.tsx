import { cn } from '../lib/utils';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = (completed / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Workflow Progress
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {completed} of {total} stages completed
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out",
            "bg-gradient-to-r from-blue-500 to-blue-600"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {percentage === 0 && "Ready to start your DevFoundation journey!"}
        {percentage > 0 && percentage < 100 && "Keep going! You're making great progress."}
        {percentage === 100 && "Congratulations! You've completed the entire workflow! 🎉"}
      </p>
    </div>
  );
}