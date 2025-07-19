import React from 'react';
import clsx from 'clsx';

interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active: boolean;
}

const Pill: React.FC<PillProps> = ({ label, active, className, ...rest }) => (
  <button
    type="button"
    aria-pressed={active}
    className={clsx(
      'px-4 py-1.5 text-sm rounded-full transition-colors font-medium',
      active
        ? 'bg-emerald-50 text-emerald-700 border border-emerald-600'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent',
      className
    )}
    {...rest}
  >
    {label}
  </button>
);

export default Pill;
