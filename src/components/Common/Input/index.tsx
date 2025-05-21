import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, labelClassName, inputClassName, icon, ...props }, ref) => {
    return (
      <div>
        <label className={labelClassName}>
          {label}
          {icon}
        </label>
        <input
          {...props}
          ref={ref}
          className={`w-full border-[2px] border-mediumLightGray rounded-md ${inputClassName}`}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
