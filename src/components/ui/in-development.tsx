import React from 'react';

interface InDevelopmentTagProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  text?: string;
  showIcon?: boolean;
  className?: string;
}

const positionClasses: Record<NonNullable<InDevelopmentTagProps['position']>, string> = {
  'top-left': 'top-5 left-5',
  'top-right': 'top-5 right-5',
  'bottom-left': 'bottom-5 left-5',
  'bottom-right': 'bottom-5 right-5',
};

const InDevelopmentTag: React.FC<InDevelopmentTagProps> = ({
  position = 'top-right',
  text = 'In Development',
  showIcon = true,
  className = '',
}) => {
  return (
    <div
      role="status"
      aria-label={`Status: ${text}`}
      className={[
        'fixed z-9999',
        positionClasses[position],
        'flex items-center gap-2',
        'bg-foreground/50 text-background',
        'px-4 py-2 rounded-full',
        'text-xs max-sm:scale-80 sm:text-sm font-semibold uppercase tracking-wider',
        'shadow-lg shadow-slate-900/25',
        'border border-white/10 backdrop-blur-sm',
        'pointer-events-none select-none',
        className,
      ].join(' ')}
    >
      {showIcon && (
        <span
          className="inline-block text-base animate-[spin_6s_linear_infinite]"
          aria-hidden="true"
        >
          ⚙️
        </span>
      )}
      <span>{text}</span>
    </div>
  );
};

export default InDevelopmentTag;