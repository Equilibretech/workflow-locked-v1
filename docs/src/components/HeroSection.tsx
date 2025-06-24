import React from 'react'
import { ProgressBar } from './ProgressBar'

interface HeroSectionProps {
  completedCount: number
}

export const HeroSection = React.memo(function HeroSection({ completedCount }: HeroSectionProps) {
  return (
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
  )
})