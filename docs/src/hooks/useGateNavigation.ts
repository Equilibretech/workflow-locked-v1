import { useState, useCallback, useMemo } from 'react'

export function useGateNavigation(totalGates: number) {
  const [selectedGate, setSelectedGate] = useState<number>(0)

  const handlePrevious = useCallback(() => {
    if (selectedGate > 0) {
      setSelectedGate(selectedGate - 1)
    }
  }, [selectedGate])

  const handleNext = useCallback(() => {
    if (selectedGate < totalGates - 1) {
      setSelectedGate(selectedGate + 1)
    }
  }, [selectedGate, totalGates])

  const navigation = useMemo(() => ({
    canGoPrevious: selectedGate > 0,
    canGoNext: selectedGate < totalGates - 1
  }), [selectedGate, totalGates])

  return {
    selectedGate,
    setSelectedGate,
    handlePrevious,
    handleNext,
    ...navigation
  }
}