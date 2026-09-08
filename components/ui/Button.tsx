'use client';

import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'black' 
  | 'danger' 
  | 'icon';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      ...props
    },
    ref
  ) => {
    let variantClass = 'button-20';
    if (variant === 'secondary') variantClass = 'button-20-secondary';
    if (variant === 'outline') variantClass = 'button-20-outline';
    if (variant === 'black') variantClass = 'button-20-black';
    if (variant === 'danger') variantClass = 'button-20-danger';
    if (variant === 'icon') variantClass = 'button-20-icon';

    let sizeClass = '';
    if (variant !== 'icon') {
      if (size === 'sm') sizeClass = 'text-xs py-1.5 px-3 rounded-lg';
      if (size === 'lg') sizeClass = 'text-base py-3 px-6 rounded-2xl font-semibold';
    } else {
      if (size === 'sm') sizeClass = 'p-1.5 rounded-lg';
      if (size === 'lg') sizeClass = 'p-3 rounded-2xl';
    }

    return (
      <button
        ref={ref}
        type={type}
        role="button"
        disabled={disabled || isLoading}
        className={`${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
