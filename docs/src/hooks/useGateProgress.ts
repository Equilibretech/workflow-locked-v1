import { useState, useEffect, useCallback, useMemo } from 'react'

const TOTAL_GATES = 8
const STORAGE_KEY = 'df-guide-progress'

export function useGateProgress() {
  const [gatesCompleted, setGatesCompleted] = useState<boolean[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Validate that parsed data is an array of booleans
        if (Array.isArray(parsed) && parsed.length === TOTAL_GATES && parsed.every(item => typeof item === 'boolean')) {
          return parsed
        }
        console.warn('Invalid saved progress data, resetting to default')
      } catch (error) {
        console.warn('Failed to parse saved progress, resetting to default:', error)
      }
    }
    return new Array(TOTAL_GATES).fill(false)
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gatesCompleted))
  }, [gatesCompleted])

  const handleCompleteGate = useCallback((gateId: number) => {
    setGatesCompleted(prev => {
      const newCompleted = [...prev]
      newCompleted[gateId] = true
      return newCompleted
    })
  }, [])

  const handleResetProgress = useCallback(() => {
    setGatesCompleted(new Array(TOTAL_GATES).fill(false))
  }, [])

  const completedCount = useMemo(() => 
    gatesCompleted.filter(Boolean).length, 
    [gatesCompleted]
  )

  return {
    gatesCompleted,
    handleCompleteGate,
    handleResetProgress,
    completedCount
  }
}