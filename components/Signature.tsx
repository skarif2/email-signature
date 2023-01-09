import { clsx } from 'clsx';
import Template from 'components/Template';

const Circle = ({ className }: { className?: string }) => (
  <div className={clsx('h-2 w-2 rounded-full', className)} />
);

export default function Signature() {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-br from-teal-300 to-blue-300">
      <div className="mx-16 mt-24 flex justify-center">
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
          <div className="flex h-[500px] w-full items-center justify-center bg-white">
            <Template />
          </div>
        </div>
      </div>
    </div>
  );
}
