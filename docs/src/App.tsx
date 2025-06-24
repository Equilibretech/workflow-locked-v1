import { AppLayout } from './components/AppLayout'
import { Sidebar } from './components/Sidebar'
import { HeroSection } from './components/HeroSection'
import { GateContent } from './components/GateContent'
import { useGateProgress } from './hooks/useGateProgress'
import { useGateNavigation } from './hooks/useGateNavigation'
import { gates } from './data/gates'

function App() {
  const {
    gatesCompleted,
    handleCompleteGate,
    handleResetProgress,
    completedCount
  } = useGateProgress()

  const {
    selectedGate,
    setSelectedGate,
    handlePrevious,
    handleNext,
    canGoPrevious,
    canGoNext
  } = useGateNavigation(gates.length)

  const currentGate = gates[selectedGate]

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
      <HeroSection completedCount={completedCount} />
      
      <GateContent
        currentGate={currentGate}
        selectedGate={selectedGate}
        gatesCompleted={gatesCompleted}
        onCompleteGate={handleCompleteGate}
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />

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