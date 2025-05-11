import React from "react";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <div className="absolute z-10 text-black w-full">
      <nav className="container flex items-center justify-between mx-auto h-14 p-8">
        <Link href="/" className="font-bold text-gray-900 text-2xl shadow-green-700 ">Home</Link>
        <div className="flex gap-2 cursor-pointer">
          <Link className="shadow-green-700 hover:shadow-green-500 font-bold text-blue-800 text-xl transition-shadow duration-150 border border-red-950" href="/performance">Performance</Link>
          <Link className="shadow-green-700 hover:shadow-green-500 font-bold text-blue-800 text-xl transition-shadow duration-150 border border-red-950" href="/reliability">Reliability</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
