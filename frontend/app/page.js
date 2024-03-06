import Image from 'next/image';
import Side from './components/Side';
import Navbar from './components/Navbar';
import Principale from './components/Principale';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-around ">
      <Navbar />
      <div className=" w-full flex justify-between">
        <Side />
        <Principale />
      </div>
    </main>
  );
}
