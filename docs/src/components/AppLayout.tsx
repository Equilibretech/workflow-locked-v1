import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import * as Collapsible from '@radix-ui/react-collapsible';
import { cn } from '../lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  currentGate: number;
  totalGates: number;
}

export function AppLayout({ children, sidebar, currentGate, totalGates }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('df-guide-theme') === 'dark' ||
        (!localStorage.getItem('df-guide-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('df-guide-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('df-guide-theme', 'light');
    }
  }, [darkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-950/60">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left section */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                Gate {currentGate}
              </span>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <span className="text-gray-600 dark:text-gray-400">
                {totalGates - 1}
              </span>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Collapsible.Root open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <Collapsible.Content
            className={cn(
              "transition-all duration-300 ease-in-out",
              "border-r border-gray-200 dark:border-gray-800",
              "bg-white dark:bg-gray-950",
              sidebarOpen ? "w-80" : "w-0"
            )}
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: sidebarOpen ? 1 : 0 }}
                transition={{ duration: 0.2, delay: sidebarOpen ? 0.1 : 0 }}
                className="p-4 min-h-[calc(100vh-73px)]"
              >
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Workflow Gates
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Follow the 7-stage development process
                  </p>
                </div>
                {sidebar}
              </motion.div>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          {children}
        </main>
      </div>
    </div>
  );
}