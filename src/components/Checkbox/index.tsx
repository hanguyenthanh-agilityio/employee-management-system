interface CheckboxProps {
  label: string;
  id: string;
  className?: string;
  subLabel?: string;
  subClassName?: string;
  name?: string;
}

const Checkbox = ({ label, id, subLabel, name }: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center space-x-2 pb-3 max-w-[400px]"
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        className="form-checkbox w-[20px] h-[20px] text-[#CBB4B4]"
      />
      <span className="text-xl text-[#8F8F8F]">
        {label}
        {subLabel && <span className="text-[#253D90]">{subLabel}</span>}
      </span>
    </label>
  );
};

export default Checkbox;
