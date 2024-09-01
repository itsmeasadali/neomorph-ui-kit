import React, { useState, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4 relative">
      {label && (
        <label className="block text-sm font-medium text-[#0B2447] dark:text-white mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`w-full px-4 py-2 ${icon ? 'pl-10' : ''} text-[#0B2447] dark:text-white bg-white dark:bg-gray-800 border-2 border-[#0B2447] dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2447] dark:focus:ring-white transition-all duration-300 ${
            error ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400' : ''
          } ${className || ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;