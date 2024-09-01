import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <img
      className={`${sizeClasses[size]} rounded-full object-cover border-2 border-emerald-500 dark:border-emerald-400 shadow-lg`}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;