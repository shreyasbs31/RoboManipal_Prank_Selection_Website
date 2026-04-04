'use client';

import { ButtonHTMLAttributes } from 'react';

interface BrutalistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function BrutalistButton({
  children,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: BrutalistButtonProps) {
  const baseStyles = `
    font-family: 'Courier Prime', monospace
  `;

  const variantStyles = variant === 'primary'
    ? 'bg-ink text-white'
    : 'bg-white text-ink border-2 border-ink';

  return (
    <button
      className={`
        px-6 py-4 uppercase font-bold tracking-wider
        transition-all duration-100 ease-linear
        ${variantStyles}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        fontFamily: "'Courier Prime', monospace",
        border: '2px solid #1A1815',
      }}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translate(-4px, -4px)';
          e.currentTarget.style.boxShadow = '6px 6px 0 #C5A059';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translate(-4px, -4px)';
          e.currentTarget.style.boxShadow = '6px 6px 0 #C5A059';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
