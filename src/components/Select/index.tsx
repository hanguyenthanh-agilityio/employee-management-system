type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  icon?: React.ReactNode;
};

const Select = ({ label, name, options, icon }: SelectFieldProps) => (
  <div>
    <label className="text-[25px] text-[#1D1D1D] flex items-center gap-2">
      {icon}
      {label}
    </label>
    <select
      name={name}
      className="bg-[#E3EDF9] mt-1 block w-full rounded-[9px] border px-4 py-4 text-sm"
      required
      defaultValue=""
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
