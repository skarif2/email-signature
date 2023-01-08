type TInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  update: (value: string) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  update,
}: TInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-teal-100">{label}</label>
      <input
        className="appearence-none w-full border-b border-teal-500 bg-transparent py-3 px-1 leading-tight text-teal-300 placeholder-teal-600 focus:outline-none"
        id={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => update(e.target.value)}
      />
    </div>
  );
}
