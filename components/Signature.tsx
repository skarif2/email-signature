import { clsx } from 'clsx';
import useStore from 'store';
import Tempate1 from 'templates/tempate1';

const Circle = ({ className }: { className?: string }) => (
  <div className={clsx('h-2 w-2 rounded-full', className)} />
);

export default function Signature() {
  const template = useStore((state) => state.template);

  return (
    <div className="flex h-full w-full flex-col bg-teal-100">
      <div className="mx-4 mt-24 flex justify-center">
        <div className="flex w-full min-w-[500px] max-w-[1000px] flex-col overflow-hidden rounded-xl shadow-md">
          <div className="flex h-9 w-full items-center gap-2 bg-gray-700 px-4">
            <Circle className="bg-red-400" />
            <Circle className="bg-yellow-400" />
            <Circle className="bg-green-400" />
          </div>
          <div className="flex h-20 w-full flex-col justify-center gap-1 border-t border-gray-500 bg-gray-700 px-10 text-sm font-semibold text-teal-50">
            <p>To: Your Recipient</p>
            <p>Subject: Check out my new Email Signature</p>
          </div>
          <div className="flex h-[500px] w-full items-center justify-center bg-gray-50">
            <Tempate1 />
          </div>
        </div>
      </div>
    </div>
  );
}
