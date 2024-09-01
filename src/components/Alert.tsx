import React from 'react';

interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClasses = {
    success: 'bg-emerald-100 text-emerald-800 border-emerald-800',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-800',
    error: 'bg-red-100 text-red-800 border-red-800',
    info: 'bg-blue-100 text-blue-800 border-blue-800'
  };

  return (
    <div 
      className={`border-2 p-4 rounded-md ${alertClasses[type]} shadow-[5px_5px_0px_0px_#0B2447] transition-all duration-300 hover:shadow-none`} 
      role="alert"
    >
      <div className="flex items-center">
        <span className="font-bold mr-2">{type.charAt(0).toUpperCase() + type.slice(1)}:</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;