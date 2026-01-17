import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded bg-accent ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};