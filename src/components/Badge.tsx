import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  const colorClasses = {
    gray: 'bg-gray-100 text-gray-800 border-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-200',
    red: 'bg-red-100 text-red-800 border-red-800 dark:bg-red-900 dark:text-red-200 dark:border-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-200',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-800 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-800 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-200',
    pink: 'bg-pink-100 text-pink-800 border-pink-800 dark:bg-pink-900 dark:text-pink-200 dark:border-pink-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses[color]} transition-all duration-300 hover:shadow-[3px_3px_0px_0px] hover:shadow-current`}>
      {text}
    </span>
  );
};

export default Badge;