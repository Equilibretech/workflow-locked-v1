import { Check, Lock, Circle, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { gates } from '../data/gates';
import type { Gate } from '../data/gates';

interface SidebarProps {
  completedGates: number[];
  onGateClick: (gate: Gate) => void;
  selectedGate: Gate | null;
}

export function Sidebar({ completedGates, onGateClick, selectedGate }: SidebarProps) {
  const getGateStatus = (gateId: number) => {
    if (completedGates.includes(gateId)) return 'completed';
    if (gateId === 0 || completedGates.includes(gateId - 1)) return 'available';
    return 'locked';
  };

  return (
    <div className="space-y-2">
      {gates.map((gate) => {
        const status = getGateStatus(gate.id);
        const isSelected = selectedGate?.id === gate.id;
        
        return (
          <button
            key={gate.id}
            onClick={() => onGateClick(gate)}
            disabled={status === 'locked'}
            className={cn(
              "w-full text-left p-3 rounded-lg transition-all duration-200",
              "border focus:outline-none focus:ring-2 focus:ring-blue-500",
              status === 'locked' && "opacity-50 cursor-not-allowed",
              isSelected && "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
              !isSelected && status !== 'locked' && "hover:bg-gray-50 dark:hover:bg-gray-800/50 border-transparent",
              !isSelected && status === 'locked' && "border-transparent"
            )}
          >
            <div className="flex items-center space-x-3">
              {/* Status Icon */}
              <div className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0",
                status === 'completed' && "bg-green-500 text-white",
                status === 'available' && !isSelected && "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
                status === 'available' && isSelected && "bg-blue-500 text-white",
                status === 'locked' && "bg-gray-100 dark:bg-gray-800 text-gray-400"
              )}>
                {status === 'completed' && <Check className="w-4 h-4" />}
                {status === 'available' && (isSelected ? <ChevronRight className="w-4 h-4" /> : <Circle className="w-4 h-4" />)}
                {status === 'locked' && <Lock className="w-3 h-3" />}
              </div>

              {/* Gate Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {gate.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                    {gate.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {gate.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}