import { ReactElement } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

export type TTab = {
  label: string;
  icon: string;
  component: ReactElement;
};
type TTabsProps = {
  tabs: TTab[];
  selected: number;
  update: (index: number) => void;
};

export default function Tabs({ tabs, selected, update }: TTabsProps) {
  return (
    <div className="flex h-20 justify-around">
      {tabs.map(({ label, icon }, index) => (
        <div
          key={label}
          className={clsx(
            selected === index ? 'bg-teal-900' : 'bg-teal-700',
            'flex flex-1 items-center justify-center'
          )}
          onClick={() => update(index)}
        >
          <Image src={icon} alt={label} width={30} height={30} />
        </div>
      ))}
    </div>
  );
}
