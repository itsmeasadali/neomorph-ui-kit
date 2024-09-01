import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width = '100%', height = '20px' }) => {
  return (
    <div
      className="bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse"
      style={{ width, height }}
    >
      <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"></div>
    </div>
  );
};

export default SkeletonLoader;