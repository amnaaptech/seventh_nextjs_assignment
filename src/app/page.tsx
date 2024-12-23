// import Navbar from './component/navbar';


import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6"  style={{background: "linear-gradient( to right, #8e9eab,#eef2f3 )"}}>
      {/* <Navbar /> */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Assignment</h1>
        <p className="text-gray-600 mb-8">Click on the buttons below to view the data.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/pages/client" className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-200">
            Go to Client-Side Data
          </Link>
          <Link href="/pages/server" className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition duration-200">
            Go to Server-Side Data
          </Link>
        </div>
      </div>
    </div>
  );
}
