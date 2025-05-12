import { InputHTMLAttributes, ReactNode } from 'react';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  labelClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
}

const Input = ({
  label,
  name,
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
        name={name}
      />
    </div>
  );
};

export default Input;
