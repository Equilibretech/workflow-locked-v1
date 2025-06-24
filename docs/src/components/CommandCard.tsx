import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface CommandCardProps {
  command: string;
  title?: string;
  description?: string;
}

export const CommandCard = React.memo(function CommandCard({ command, title, description }: CommandCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for environments where clipboard API is not available
      try {
        const textArea = document.createElement('textarea');
        textArea.value = command;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.warn('Failed to copy to clipboard:', fallbackError);
        // Could show a toast notification here
      }
    }
  }, [command]);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
      {title && (
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {description}
        </p>
      )}
      <div className="relative group">
        <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          <code>{command}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-md transition-all duration-200",
            "bg-gray-700 hover:bg-gray-600 text-white",
            "opacity-0 group-hover:opacity-100 focus:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            copied && "opacity-100"
          )}
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
})