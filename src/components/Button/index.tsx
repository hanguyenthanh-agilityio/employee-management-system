import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'button' | 'submit';
  variant?:
    | 'outline'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'danger';
  customClass?: string;
  name?: string;
  value?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  startIcon,
  endIcon,
  type = 'button',
  variant = 'primary',
  customClass,
  name,
  value,
  ariaLabel,
  disabled,
  onClick,
}: ButtonProps) => {
  const baseClass = 'flex items-center rounded p-2';
  let stateClass = '';

  switch (variant) {
    case 'primary':
      stateClass = 'bg-[#0A278F] text-white hover:bg-[#0c2f9e]';
      break;
    case 'secondary':
      stateClass = 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      break;
    case 'success':
      stateClass =
        'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400';
      break;
    case 'warning':
      stateClass =
        'bg-amber-400 text-black hover:bg-amber-500 disabled:bg-amber-300';
      break;
    case 'error':
      stateClass =
        'bg-rose-500 text-white hover:bg-rose-600 disabled:bg-rose-300';
      break;
    case 'outline':
      stateClass = 'border border-gray-300 text-gray-700 hover:bg-gray-50';
      break;
    case 'danger':
      'bg-red-500 text-white hover:bg-red-600';
      break;

    default:
      break;
  }

  return (
    <button
      type={type}
      name={name}
      value={value}
      aria-label={ariaLabel}
      className={[baseClass, stateClass, customClass].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-r">{endIcon}</span>}
    </button>
  );
};
