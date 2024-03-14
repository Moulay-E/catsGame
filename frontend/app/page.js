import Side from './components/Side';
import Navbar from './components/Navbar';
import Character from './components/Character';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between ">
      <Navbar />
      <div className=" w-full flex flex-col md:flex-row justify-between">
        <Side />
        <Character />
      </div>
    </main>
  );
}
