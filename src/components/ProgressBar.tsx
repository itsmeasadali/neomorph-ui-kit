import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-[#0B2447] dark:bg-blue-500',
    green: 'bg-emerald-600 dark:bg-emerald-400',
    red: 'bg-red-600 dark:bg-red-400',
    yellow: 'bg-yellow-600 dark:bg-yellow-400'
  };

  return (
    <div className="w-full bg-white dark:bg-gray-700 rounded-md h-6 border-2 border-[#0B2447] dark:border-white overflow-hidden shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff]">
      <div
        className={`h-full rounded-md transition-all duration-500 ease-out ${colorClasses[color]}`}
        style={{ width: `${progress}%` }}
      >
        <span className="flex items-center justify-center h-full text-xs font-semibold text-white dark:text-gray-900">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;