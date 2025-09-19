// "use client"
// import { useState } from "react";
// import { FiLogIn } from "react-icons/fi";
// import { FaRocket } from "react-icons/fa";
// import { IoIosClose } from "react-icons/io";
// import { IoIosMenu } from "react-icons/io";

// function Navbar() {
//   const navItems = [
//     { label: "Home", url: "/" },
//     { label: "Notes", url: "/notes" },
//     { label: "Create Note", url: "/create" },
//     { label: "Categories", url: "/categories" },
//     { label: "About", url: "/About" },
//     { label: "FAQ's", url: "/FAQ's" },
//   ];

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       <div className="flex items-center justify-between shadow-md bg-amber-50 px-6 py-3 border-b border-gray-300 md:px-18">
//         <Link href="/" className="flex items-center">
//           <p className="md:text-3xl text-2xl text-amber-400 font-bold">MY NOTES</p>
//         </Link>

//         <div className="flex gap-6 max-lg:hidden justify-items-center">
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.url}
//               className="relative text-2xl text-gray-800 hover:text-amber-500 transition-colors duration-200 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] after:bg-gray-800 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>

//         <div
//           className={`absolute md:top-17 top-14 left-0 w-full h-screen bg-amber-50 flex flex-col justify-center items-center shadow-2xl gap-6 text-2xl transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
//         >
//           {navItems.map((item, index) => (
//             <Link key={index} href={item.url} className="relative text-gray-800 hover:text-amber-500 transition-colors duration-200">
//               {item.label}
//             </Link>
//           ))}

//           <div className="flex items-center mx-auto gap-4 max-md:p-2 max-md:rounded-lg">
//             <Link href="/auth/signin">
//               <button className="flex items-center gap-2 text-gray-800 px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 min-md:hidden">
//                 <FiLogIn size={18} /> Log In
//               </button>
//             </Link>
//             <Link href="/auth/signin">
//               <button className="flex items-center gap-2 bg-amber-500 text-white px-5 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200">
//                 <FaRocket size={18} /> Get Started
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <Link href="/auth/signin">
//             <button className="flex items-center text-gray-800 px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 max-md:hidden">
//               <FiLogIn size={18} /> Log In
//             </button>
//           </Link>
//           <Link href="/auth/signin">
//             <button className="flex items-center  bg-amber-500 text-white px-4 py-2 rounded-lg text-xl hover:bg-gray-800 hover:text-white transition-colors duration-200 max-lg:hidden">
//               <FaRocket size={18} /> Get Started
//             </button>
//           </Link>

//           <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl text-gray-800">
//             {menuOpen ? <IoIosClose /> : <IoIosMenu />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import React from "react";
import Link from "next/link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useSession } from "next-auth/react";
import { FaStickyNote, FaPlus, FaTrash, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

function Navbar() {


  const { data: session } = useSession();
  console.log(session);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white mt-3 px-5 py-3 md:px-15 ">
      <div className="flex items-center justify-between">

        <Link href="/" className="text-2xl md:text-3xl font-bold text-amber-500">
          MY NOTES
        </Link>

        {session ? (
          <div className="ml-auto lg:ml-0">
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name.slice(0, 2).toUpperCase()}
                className="w-10 h-10 rounded-full"
              />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: { "aria-labelledby": "basic-button" },
              }}
            >
              {/* Notes */}
              <MenuItem onClick={handleClose} className="flex items-center gap-2">
                <FaStickyNote className="text-amber-500" />
                <Link href="/notes" className="w-full">Notes</Link>
              </MenuItem>

              {/* Create Note */}
              <MenuItem onClick={handleClose} className="flex items-center gap-2">
                <FaPlus className="text-green-500" />
                <Link href="/create" className="w-full">Create Note</Link>
              </MenuItem>

              {/* Trash */}
              <MenuItem onClick={handleClose} className="flex items-center gap-2">
                <FaTrash className="text-red-500" />
                <Link href="/trash" className="w-full">Trash</Link>
              </MenuItem>

              {/* Sign Out */}
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOut();
                }}
                className="flex items-center gap-2"
              >
                <FaSignOutAlt className="text-gray-600" />
                Sign Out
              </MenuItem>
            </Menu>

          </div>
        ) : (
          <Link href="/auth/signin">
            <button className="px-4 py-2 text-lg md:text-xl text-white bg-gray-800 rounded-lg  hover:bg-amber-500 transition-colors duration-200 shadow-md" >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;


