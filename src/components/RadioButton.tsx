import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked = false, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="form-radio h-5 w-5 text-[#0B2447] dark:text-white border-2 border-[#0B2447] dark:border-white focus:ring-[#0B2447] dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-2 bg-white dark:bg-gray-700 transition-all duration-300"
      />
      <span className="ml-2 text-sm font-medium text-[#0B2447] dark:text-white">{label}</span>
    </label>
  );
};

export default RadioButton;