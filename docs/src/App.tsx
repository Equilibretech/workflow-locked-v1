import { useState, useEffect } from 'react'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppLayout } from './components/AppLayout'
import { Sidebar } from './components/Sidebar'
import { NavigationButtons } from './components/NavigationButtons'
import { ProgressBar } from './components/ProgressBar'
import { CommandCard } from './components/CommandCard'
import { cn } from './lib/utils'
import { gates } from './data/gates'

function App() {
  const [gatesCompleted, setGatesCompleted] = useState<boolean[]>(() => {
    const saved = localStorage.getItem('df-guide-progress')
    if (saved) {
      return JSON.parse(saved)
    }
    return new Array(8).fill(false)
  })

  const [selectedGate, setSelectedGate] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem('df-guide-progress', JSON.stringify(gatesCompleted))
  }, [gatesCompleted])

  const handleCompleteGate = (gateId: number) => {
    const newCompleted = [...gatesCompleted]
    newCompleted[gateId] = true
    setGatesCompleted(newCompleted)
  }

  const handleResetProgress = () => {
    setGatesCompleted(new Array(8).fill(false))
    setSelectedGate(0)
  }

  const handlePrevious = () => {
    if (selectedGate > 0) {
      setSelectedGate(selectedGate - 1)
    }
  }

  const handleNext = () => {
    if (selectedGate < gates.length - 1) {
      setSelectedGate(selectedGate + 1)
    }
  }

  const canGoPrevious = selectedGate > 0
  const canGoNext = selectedGate < gates.length - 1

  const currentGate = gates[selectedGate]
  const completedCount = gatesCompleted.filter(Boolean).length

  return (
    <AppLayout 
      sidebar={
        <Sidebar
          completedGates={gatesCompleted.map((completed, idx) => completed ? idx : -1).filter(idx => idx >= 0)}
          onGateClick={(gate) => setSelectedGate(gate.id)}
          selectedGate={gates[selectedGate]}
        />
      }
      currentGate={selectedGate}
      totalGates={gates.length}
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-6 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              DevFoundation Workflow Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-4">
              Professional solo development with quality gates
            </p>
            <ProgressBar completed={completedCount} total={8} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGate}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300"
          >
            {/* Gate Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {currentGate.title}
                </h3>
                {gatesCompleted[selectedGate] && (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{currentGate.description}</p>
            </div>

            {/* Command */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Command
              </h4>
              <CommandCard command={currentGate.command} />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Duration
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{currentGate.duration}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Deliverables
                </h4>
                <ul className="space-y-1">
                  {currentGate.deliverables.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <ChevronRight className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Checklist */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Checklist
              </h4>
              <div className="space-y-2">
                {currentGate.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 
                      className={cn(
                        "h-5 w-5 mr-2 mt-0.5 flex-shrink-0 transition-colors duration-200",
                        gatesCompleted[selectedGate] 
                          ? "text-green-500" 
                          : "text-gray-300 dark:text-gray-600"
                      )} 
                    />
                    <span className={cn(
                      "text-sm transition-colors duration-200",
                      gatesCompleted[selectedGate]
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-500 dark:text-gray-500"
                    )}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            {currentGate.examples && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Examples
                </h4>
                <div className="space-y-2">
                  {currentGate.examples.map((example, idx) => (
                    <CommandCard key={idx} command={example} />
                  ))}
                </div>
              </div>
            )}

            {/* Complete Gate Section */}
            <div className="mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center">
                {!gatesCompleted[selectedGate] ? (
                  <button
                    onClick={() => handleCompleteGate(selectedGate)}
                    disabled={selectedGate > 0 && !gatesCompleted[selectedGate - 1]}
                    className={cn(
                      "px-6 py-2 rounded-lg font-medium transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500",
                      selectedGate > 0 && !gatesCompleted[selectedGate - 1]
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
                        : "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                    )}
                  >
                    {selectedGate > 0 && !gatesCompleted[selectedGate - 1]
                      ? `Complete Gate ${selectedGate - 1} first`
                      : `Mark Gate ${selectedGate} as Completed`}
                  </button>
                ) : (
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">Gate Completed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <NavigationButtons
              currentGate={currentGate}
              totalGates={gates.length}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <button
                onClick={handleResetProgress}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
              >
                Reset Progress
              </button>
              <a 
                href="https://github.com/Equilibretech/workflow-locked-v1" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </AppLayout>
  )
}

export default App