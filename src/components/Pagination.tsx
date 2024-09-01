import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              className={`px-3 py-2 rounded-md ${
                currentPage === page
                  ? 'text-white dark:text-[#0B2447] bg-[#0B2447] dark:bg-white border-2 border-[#0B2447] dark:border-white'
                  : 'text-[#0B2447] dark:text-white bg-white dark:bg-gray-800 border-2 border-[#0B2447] dark:border-white hover:bg-[#0B2447]/10 dark:hover:bg-white/10'
              } transition-all duration-300 shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;