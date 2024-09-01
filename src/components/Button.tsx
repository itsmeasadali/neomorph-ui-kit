import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'cyan' | 'blue' | 'yellow' | 'orange';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'default', icon }) => {
  const baseClasses = "cursor-pointer relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-500 focus:outline-none h-10 px-4 bg-transparent border-2 hover:shadow-none";
  
  const variantClasses = {
    default: "text-[#0B2447] dark:text-white border-[#0B2447] dark:border-white shadow-[7px_7px_0px_0px_#0B2447] dark:shadow-[7px_7px_0px_0px_#ffffff] hover:shadow-none",
    cyan: "text-[#06B6D4] dark:text-[#22D3EE] border-[#06B6D4] dark:border-[#22D3EE] shadow-[7px_7px_0px_0px_#06B6D4] dark:shadow-[7px_7px_0px_0px_#22D3EE] hover:shadow-none",
    blue: "text-[#60A5FA] dark:text-[#93C5FD] border-[#60A5FA] dark:border-[#93C5FD] shadow-[7px_7px_0px_0px_#60A5FA] dark:shadow-[7px_7px_0px_0px_#93C5FD] hover:shadow-none",
    yellow: "text-[#FACC14] dark:text-[#FDE047] border-[#FACC14] dark:border-[#FDE047] shadow-[7px_7px_0px_0px_#FACC14] dark:shadow-[7px_7px_0px_0px_#FDE047] hover:shadow-none",
    orange: "text-[#FB923C] dark:text-[#FDBA74] border-[#FB923C] dark:border-[#FDBA74] shadow-[7px_7px_0px_0px_#FB923C] dark:shadow-[7px_7px_0px_0px_#FDBA74] hover:shadow-none"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;