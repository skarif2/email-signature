import Sidebar from 'components/Sidebar';
import Signature from 'components/Signature';
import useBearStore from 'store';

export default function Home() {
  const bares = useBearStore((bares) => bares.bears);
  return (
    <div className="flex h-[100vh] flex-row">
      <aside className="h-full w-1/4 min-w-[300px] max-w-[400px]">
        <Sidebar />
      </aside>
      <main className="flex-1">
        <Signature />
      </main>
    </div>
  );
}
