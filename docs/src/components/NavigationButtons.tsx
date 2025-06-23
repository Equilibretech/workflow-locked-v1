import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Gate } from '../data/gates';

interface NavigationButtonsProps {
  currentGate: Gate;
  totalGates: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationButtons({
  currentGate,
  totalGates,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          canGoPrevious
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>

      {/* Gate Progress */}
      <div className="text-center">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Progress
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalGates }, (_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors duration-200",
                i === currentGate.id
                  ? "bg-blue-500"
                  : i < currentGate.id
                  ? "bg-green-500"
                  : "bg-gray-300 dark:bg-gray-600"
              )}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          canGoNext
            ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
        )}
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}