import React from "react";
import Navbar from "./component/Navbar";
import Image from "next/image";
import { LuLaptopMinimal } from "react-icons/lu";
import { GrNavigate } from "react-icons/gr";

export default function Home() {
  return (
    <main className=" h-dvh">
      {/* <div className=" px-4 py-10 col-span-1 md:col-span-2 text-center border-t border-b border-gray-300">
        <h1 className="text-xl font-bold italic text-gray-800">
          “Your mind deserves to rest too, so write.”
        </h1>
        <p className="mt-2 text-sm text-gray-600">— CEO, My Notes</p>
      </div> */}
      <Navbar />
      <div className="mx-auto max-w-4xl p-3 mb-10  text-center leading-tight text-gray-800  mt-10 ">
        <h1 className="text-center md:text-4xl text-3xl font-bold mb-4">
          Welcome to <span className="text-amber-500 font-bold">My Notes</span>
        </h1>

        <p> MY NOTES  is your personal space to capture thoughts, ideas, and inspirations. it's a note-taking app designed to give you a clean, minimalist experience.</p>

        <div className="mx-auto text-center">
          <button
            component="a" href="/auth/signin"
            className="px-7 py-4 text-lg md:text-xl text-white text-center bg-gray-800 rounded-lg hover:bg-amber-500 transition-colors duration-200 shadow-md mt-5 ">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-800 h-64 md:h-96 border border-gray-300 md:mb-30 mb-10 ">
        <Image
          src={"/Screenshot (52).png"}
          alt="notes"
          width={1000}
          height={1000}
          className="mx-auto pt-10 absolute left-0 right-0 "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-15 md:mt-55 mt-30">
        <div className="text-gray-800 font-bold text-3xl md:text-4xl text-center mb-10 md:mb-6">
          <h2>Why Choose My Notes?</h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 ">
          <div><LuLaptopMinimal size={50} className="text-amber-500" /></div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">Minimalist Design</h3>
            <p className="text-gray-600 mt-1 text-2xl">A clean, distraction-free interface to help you focus on what matters most—your notes.</p>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <div><GrNavigate  size={50} className="text-amber-500" /></div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">Intuitive Navigation</h3>
            <p className="text-gray-600 mt-1 text-2xl">Easily find and organize your notes with a user-friendly interface designed for efficiency.</p>
          </div>

        </div>
      </div>
    </main>
  );
}
