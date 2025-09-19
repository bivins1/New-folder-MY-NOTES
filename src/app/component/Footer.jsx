import React from "react";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {

  return (
    <footer className="bg-amber-50 text-gray-800 border-t border-gray-300" >
      <div className=" grid grid-cols-1 px-4 py-6 md:grid-cols-3 justify-items-center">
        <div className=" md:mr-7 max-md:mb-3.5">
          <Link href="/"><h2 className="text-3xl font-bold text-amber-500">MY NOTES</h2></Link>
        </div> 
        <div className=" max-md:mb-3.5 flex items-center justify-center gap-2 ">
          <ul className=" text-center text-2xl">
          <li><Link href="/" className=" text-gray-800 
           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] 
           after:bg-amber-500 after:scale-x-0 after:origin-center after:transition-transform 
           after:duration-300 hover:after:scale-x-100">Home</Link></li>

          <li><Link href="/notes" className=" text-gray-800 
           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] 
           after:bg-amber-500 after:scale-x-0 after:origin-center after:transition-transform 
           after:duration-300 hover:after:scale-x-100">Notes</Link></li>

          <li><Link href="/create" className=" text-gray-800 
           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] 
           after:bg-amber-500 after:scale-x-0 after:origin-center after:transition-transform 
           after:duration-300 hover:after:scale-x-100">Create Note</Link></li>

          <li><Link href="/categories" className=" text-gray-800 
           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] 
           after:bg-amber-500 after:scale-x-0 after:origin-center after:transition-transform 
           after:duration-300 hover:after:scale-x-100">Categories</Link></li>
           
          <li><Link href="/About" className=" text-gray-800 
           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] 
           after:bg-amber-500 after:scale-x-0 after:origin-center after:transition-transform 
           after:duration-300 hover:after:scale-x-100">About</Link></li>
        </ul>
        </div>
        <div >
          <h3 className="text-lg font-semibold mt-3 text-center max-md:mt-6.5 "></h3>
          <div className="flex gap-4 text-center">
            <Link href="https://github.com">
              <FaGithub size={22} />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter size={22} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-lg pb-2 flex justify-center items-center gap-2 ">
        <FaRegCopyright size={16} />
        <span>{new Date().getFullYear()}<span className="text-3xl text-amber-500 font-bold">MY NOTES</span>. All rights reserved.</span>
      </div>
    </footer>

  )
}

export default Footer