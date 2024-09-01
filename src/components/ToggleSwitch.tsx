'use client';

import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  onChange?: (checked: boolean) => void;
  initialChecked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onChange, initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
      />
      <div className={`w-14 h-7 bg-white dark:bg-gray-700 border-2 border-[#0B2447] dark:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0B2447]/50 dark:peer-focus:ring-white/50 rounded-full peer transition-all duration-300 ${checked ? 'shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff]' : ''}`}>
        <div className={`absolute top-1 left-1 bg-[#0B2447] dark:bg-white rounded-full h-5 w-5 transition-all duration-300 ${checked ? 'translate-x-7' : ''}`}></div>
      </div>
      <span className="ml-3 text-sm font-medium text-[#0B2447] dark:text-white">{label}</span>
    </label>
  );
};

export default ToggleSwitch;