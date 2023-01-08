import useStore from 'store';

export default function Signature() {
  const template = useStore((state) => state.template);

  return <div className="h-full w-full bg-teal-100">Signature</div>;
}
