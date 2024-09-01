import React from 'react';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className="form-checkbox h-5 w-5 text-[#0B2447] dark:text-white rounded border-2 border-[#0B2447] dark:border-white focus:ring-[#0B2447] dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-2 bg-white dark:bg-gray-700 transition-all duration-300"
      />
      <span className="ml-2 text-sm font-medium text-[#0B2447] dark:text-white">{label}</span>
    </label>
  );
};

export default Checkbox;