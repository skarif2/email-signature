import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { HashtagIcon } from '@heroicons/react/24/outline';

type TColorPickerProps = {
  label: string;
  placeholder?: string;
  value: string;
  update: (value: string) => void;
};

export default function ColorPicker({
  label,
  placeholder,
  value,
  update,
}: TColorPickerProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-teal-100">{label}</label>
      <div className="flex items-center gap-2">
        <HashtagIcon className="h-5 w-5 text-teal-300" />
        <input
          className="appearence-none w-28 border-b border-teal-500 bg-transparent px-1 pt-3 pb-2 uppercase leading-tight text-teal-300 placeholder-teal-600 focus:outline-none"
          id={label}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => update(e.target.value.replace('#', ''))}
        />
        <div
          className="h-8 w-8 rounded-2xl border-2 border-white"
          style={{ backgroundColor: `#${value}` }}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <HexColorPicker
          className="pt-4"
          color={value}
          onChange={(newValue) => update(newValue.replace('#', ''))}
        />
      )}
    </div>
  );
}
