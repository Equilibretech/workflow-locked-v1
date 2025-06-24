import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CommandCard } from './CommandCard'
import { NavigationButtons } from './NavigationButtons'
import { cn } from '../lib/utils'
import type { Gate } from '../data/gates'

interface GateContentProps {
  currentGate: Gate
  selectedGate: number
  gatesCompleted: boolean[]
  onCompleteGate: (gateId: number) => void
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

export function GateContent({
  currentGate,
  selectedGate,
  gatesCompleted,
  onCompleteGate,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext
}: GateContentProps) {
  const isCompleted = gatesCompleted[selectedGate]

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGate}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8"
        >
          {/* Gate Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",
                isCompleted 
                  ? "bg-green-500 text-white" 
                  : "bg-blue-500 text-white"
              )}>
                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : currentGate.stage}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {currentGate.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Stage {currentGate.stage} • {currentGate.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Gate Description */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {currentGate.description}
            </p>
          </div>

          {/* Deliverables */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              📋 Deliverables
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <ul className="space-y-2">
                {currentGate.deliverables.map((deliverable, index) => (
                  <li key={index} className="font-medium text-gray-800 dark:text-gray-200">
                    • {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Command */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              🚀 Command
            </h3>
            <CommandCard command={currentGate.command} />
          </div>

          {/* Checklist */}
          {currentGate.checklist && currentGate.checklist.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                ✅ Validation Checklist
              </h3>
              <div className="space-y-2">
                {currentGate.checklist.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      readOnly
                    />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Examples */}
          {currentGate.examples && currentGate.examples.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                💡 Examples
              </h3>
              <div className="space-y-3">
                {currentGate.examples.map((example, index) => (
                  <CommandCard key={index} command={example} />
                ))}
              </div>
            </div>
          )}

          {/* Complete Gate Button */}
          {!isCompleted && (
            <div className="mb-6">
              <button
                onClick={() => onCompleteGate(selectedGate)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Mark as Complete</span>
              </button>
            </div>
          )}

          {/* Navigation */}
          <NavigationButtons
            currentGate={currentGate}
            totalGates={8}
            onPrevious={onPrevious}
            onNext={onNext}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
          />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}