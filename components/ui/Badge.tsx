'use client';

import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'neutral' | 'accent' | 'success';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  className = '',
}) => {
  let styleClass = 'bg-[#D7CDFC] text-black border border-[#C4B5FD]';

  if (variant === 'neutral') {
    styleClass = 'bg-gray-100 text-gray-800 border border-gray-200';
  } else if (variant === 'accent') {
    styleClass = 'bg-[#4D4AE8]/10 text-[#4D4AE8] border border-[#4D4AE8]/20';
  } else if (variant === 'success') {
    styleClass = 'bg-emerald-50 text-emerald-800 border border-emerald-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${styleClass} ${className}`}
    >
      {children}
    </span>
  );
};
