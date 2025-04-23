import { InputHTMLAttributes } from 'react';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelColor?: string;
}

const Input = ({ label, labelColor, ...props }: InputPros) => {
  return (
    <div>
      <label className={`block text-xl font-bold mb-3 ${labelColor}`}>
        {label}
      </label>
      <input
        {...props}
        className="w-full border-[2px] border-[#CBB4B4] rounded-md px-4 py-2 text-[#253D90]
            shadow-[5px_2px_10px_3px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#0A50C2]/30"
      />
    </div>
  );
};

export default Input;
