interface CheckboxProps {
  label: string;
  id: string;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  subLabel?: string;
  subClassName?: string;
}

const Checkbox = ({
  label,
  id,
  name,
  checked,
  onChange,
  className,
  subLabel,
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 pb-3 max-w-[400px] ${className ?? ''}`}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        className="form-checkbox w-[20px] h-[20px] text-mediumLightGray"
      />
      <span className="text-sm md:text-xl text-Gray56">
        {label}
        {subLabel && <span className="text-primary ml-1">{subLabel}</span>}
      </span>
    </label>
  );
};

export default Checkbox;
