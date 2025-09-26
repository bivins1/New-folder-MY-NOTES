"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSession, signOut } from "next-auth/react";
import { FaStickyNote, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";

function Navbar() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  



    return (
      <header className="bg-white mt-3 px-5 py-3 md:px-15 shadow-md">
        <div className="flex items-center justify-between">
          <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-amber-500"
        >
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
                className="w-10 h-10 rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{ list: { "aria-labelledby": "basic-button" } }}
            >
              {/* My Notes */}
              <MenuItem
                component={Link}
                href="/createnotes"
                onClick={handleClose}
                className="flex items-center gap-2"
              >
                <FaStickyNote className="text-amber-500" />
                My Notes
              </MenuItem>

              {/* Support */}
              <MenuItem
                component={Link}
                href="/contact-us"
                onClick={handleClose}
                className="flex items-center gap-2"
              >
                <FaQuestionCircle className="text-blue-500" />
                Support
              </MenuItem>

              {/* Sign Out */}
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOut({ callbackUrl: "/" });
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
            <button className="px-4 py-2 text-lg md:text-xl text-white bg-gray-800 rounded-lg hover:bg-amber-500 transition-colors duration-200 shadow-md">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
