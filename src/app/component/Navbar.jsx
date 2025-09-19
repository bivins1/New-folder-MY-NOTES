"use client"

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";


function Navbar() {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Notes", url: "/notes" },
    { label: "Create Note", url: "/create" },
    { label: "Categories", url: "/categories" },
    { label: "About", url: "/About" },
    { label: "FAQ's", url: "/FAQ's" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between shadow-md bg-amber-50 px-6 py-3 border-b border-gray-300 md:px-18">
        <Link href="/" className="flex items-center">
          <p className="md:text-3xl text-2xl text-amber-400 font-bold">MY NOTES</p>
        </Link>

        <div className="flex gap-6 max-lg:hidden justify-items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="relative text-2xl text-gray-800 hover:text-amber-500 transition-colors duration-200 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] after:bg-gray-800 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          className={`absolute md:top-17 top-14 left-0 w-full h-screen bg-amber-50 flex flex-col justify-center items-center shadow-2xl gap-6 text-2xl transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {navItems.map((item, index) => (
            <Link key={index} href={item.url} className="relative text-gray-800 hover:text-amber-500 transition-colors duration-200">
              {item.label}
            </Link>
          ))}

          <div className="flex items-center mx-auto gap-4 max-md:p-2 max-md:rounded-lg">
            <Link href="/auth/signin">
              <button className="flex items-center gap-2 text-gray-800 px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 min-md:hidden">
                <FiLogIn size={18} /> Log In
              </button>
            </Link>
            <Link href="/auth/signin">
              <button className="flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200">
                <FaRocket size={18} /> Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/auth/signin">
            <button className="flex items-center text-gray-800 px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 max-md:hidden">
              <FiLogIn size={18} /> Log In
            </button>
          </Link>
          <Link href="/auth/signin">
            <button className="flex items-center  bg-amber-500 text-white px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 max-lg:hidden">
              <FaRocket size={18} /> Get Started
            </button>
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl text-gray-800">
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
