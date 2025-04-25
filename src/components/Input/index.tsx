import { InputHTMLAttributes, ReactNode } from 'react';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  label: string;

  labelClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
}

const Input = ({
  label,
  labelClassName,
  inputClassName,
  icon,
  ...props
}: InputPros) => {
  return (
    <div>
      <label className={labelClassName}>
        {label}
        {icon}
      </label>
      <input
        {...props}
        className={`w-full border-[2px] border-[#CBB4B4] ${inputClassName}`}
      />
    </div>
  );
};

export default Input;
