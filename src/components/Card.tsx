import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 border-2 border-[#0B2447] dark:border-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[7px_7px_0px_0px_#0B2447] dark:hover:shadow-[7px_7px_0px_0px_#ffffff]">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0B2447] dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white dark:text-[#0B2447] bg-[#0B2447] dark:bg-white rounded-md hover:bg-[#0B2447]/80 dark:hover:bg-white/80 transition-colors duration-300">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;