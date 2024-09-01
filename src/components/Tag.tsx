import React from 'react';

interface TagProps {
  text: string;
  onRemove: () => void;
}

const Tag: React.FC<TagProps> = ({ text, onRemove }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-[#0B2447] text-white dark:bg-white dark:text-[#0B2447] border-2 border-[#0B2447] dark:border-white transition-all duration-300 hover:bg-white hover:text-[#0B2447] dark:hover:bg-[#0B2447] dark:hover:text-white">
      {text}
      <button
        type="button"
        className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-white dark:text-[#0B2447] hover:bg-[#0B2447]/20 dark:hover:bg-white/20 hover:text-[#0B2447] dark:hover:text-white focus:outline-none focus:bg-[#0B2447] dark:focus:bg-white focus:text-white dark:focus:text-[#0B2447] transition-all duration-300"
        onClick={onRemove}
      >
        <span className="sr-only">Remove {text}</span>
        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  );
};

export default Tag;