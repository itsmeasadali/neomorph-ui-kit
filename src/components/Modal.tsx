'use client';
import React from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-lg bg-white dark:bg-gray-700">
        <div className="mt-3">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
          <div className="mt-2 px-7 py-3">
            {children}
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-white dark:bg-gray-800 text-[#0B2447] dark:text-white border-2 border-[#0B2447] dark:border-white rounded-md shadow-[5px_5px_0px_0px_#0B2447] dark:shadow-[5px_5px_0px_0px_#ffffff] transition-all duration-300 hover:shadow-none"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;