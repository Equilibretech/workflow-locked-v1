import { useState } from 'react';
import { Check, Lock, Circle, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { gates, type Gate } from '../data/gates';


interface TimelineProps {
  completedGates: number[];
  onGateClick: (gate: Gate) => void;
  selectedGate: Gate | null;
}

export function Timeline({ completedGates, onGateClick, selectedGate }: TimelineProps) {
  const [hoveredGate, setHoveredGate] = useState<number | null>(null);

  const getGateStatus = (gateId: number) => {
    if (completedGates.includes(gateId)) return 'completed';
    if (gateId === 0 || completedGates.includes(gateId - 1)) return 'available';
    return 'locked';
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      
      {gates.map((gate) => {
        const status = getGateStatus(gate.id);
        const isSelected = selectedGate?.id === gate.id;
        const isHovered = hoveredGate === gate.id;
        
        return (
          <div
            key={gate.id}
            className="relative flex items-start mb-8 last:mb-0"
            onMouseEnter={() => setHoveredGate(gate.id)}
            onMouseLeave={() => setHoveredGate(null)}
          >
            <button
              onClick={() => onGateClick(gate)}
              disabled={status === 'locked'}
              className={cn(
                "relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200",
                "border-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
                status === 'completed' && "bg-green-500 border-green-500 text-white",
                status === 'available' && "bg-white dark:bg-gray-800 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700",
                status === 'locked' && "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400 cursor-not-allowed",
                isSelected && status === 'available' && "bg-blue-500 text-white",
                "focus:ring-blue-500"
              )}
            >
              {status === 'completed' && <Check className="w-6 h-6" />}
              {status === 'available' && (isSelected ? <ChevronRight className="w-6 h-6" /> : <Circle className="w-6 h-6" />)}
              {status === 'locked' && <Lock className="w-5 h-5" />}
            </button>
            
            <div className={cn(
              "ml-6 flex-1 cursor-pointer",
              status === 'locked' && "opacity-50"
            )}>
              <div
                onClick={() => status !== 'locked' && onGateClick(gate)}
                className={cn(
                  "p-4 rounded-lg transition-all duration-200",
                  "border",
                  isSelected && "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                  !isSelected && isHovered && status !== 'locked' && "bg-gray-50 dark:bg-gray-800/50",
                  !isSelected && !isHovered && "border-transparent"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {gate.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {gate.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {gate.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Deliverables:</span> {gate.deliverables.join(', ')}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

