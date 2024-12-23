"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Data Fetching</h1>
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}
        >
          ☰
        </button>
        <div id="mobile-menu" className="hidden sm:flex space-x-5">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/pages/client" className="hover:underline">
            Client data Fetch
          </Link>
          <Link href="/pages/server" className="hover:underline">
            Server data Fetch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Assignment</h1>
        <p className="text-gray-600 mb-8">Click on the buttons below to view the data.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/client" className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-200">
            Go to Client-Side Data
          </Link>
          <Link href="/server" className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition duration-200">
            Go to Server-Side Data
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Home };










