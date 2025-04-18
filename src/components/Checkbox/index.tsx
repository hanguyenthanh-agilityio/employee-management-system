interface CheckboxProps {
  label: string;
  id: string;
}

export function Checkbox({ label, id }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-center space-x-2">
      <input type="checkbox" id={id} className="form-checkbox" />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
