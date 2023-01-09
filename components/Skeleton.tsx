import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type TSkeletonProps = {
  label: string;
  src: string;
  selected: boolean;
  onClick: () => void;
};

export default function Skeleton({
  label,
  src,
  selected,
  onClick,
}: TSkeletonProps) {
  return (
    <div className="relative w-full" onClick={onClick}>
      <label className="mb-2 block text-sm font-medium text-teal-100">
        {label}
      </label>
      <Image
        src={src}
        alt={label}
        width={400}
        height={100}
        className={clsx(selected && 'opacity-50')}
      />
      {selected && (
        <div className="absolute bottom-3 right-3 h-6 w-6 rounded-full bg-green-400 p-1">
          <CheckIcon />
        </div>
      )}
    </div>
  );
}
