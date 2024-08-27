import React, { useState } from "react";
import dummyLogo from "./../assets/dummyLogo.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { item: "Home", path: "/home" },
    { item: "Video", path: "/video" },
    { item: "Group", path: "/group" },
    { item: "Marketplace", path: "/marketplace" },
    { item: "About", path: "/about" },
    { item: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full bg-custom-gradient6 fixed top-0 left-0 right-0">
      <nav className="py-4 lg:px-6 px-4 sticky top-0 left-0 right-0 border-b duration-300">
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="#"
            className="text-3xl font-semibold flex items-center space-x-0"
          >
            <img
              src={dummyLogo}
              alt="N/A"
              className="w-10 inline-block items-center"
            />
            <span className="text-gray-500">DBC</span>
          </a>

          <ul className="hidden lg:flex space-x-3">
            {navItems.map(({ item, path }) => (
              <a href={path} className="text-xl text-gray-500">
                {item}
              </a>
            ))}
          </ul>

          <div className="space-x-8 hidden lg:flex items-center">
            <a href="/login">
              <h6 className="text-xl text-purple-800 hover:text-purple-400">
                Login
              </h6>
            </a>
            <a href="/signup" className="flex justify-center items-center">
              <button className="px-4 py-2 text-white rounded text-xl bg-indigo-600 hover:bg-indigo-200 justify-center">
                Sign up
              </button>
            </a>
          </div>
          <div className="lg:hidden">
            <button
              className="text-gray-500 focus:outline-none transition-all duration-500"
              onClick={toggleMenu}
            >
              {showMenu ? (
                <RxCross2 className="w-8 h-8" />
              ) : (
                <IoMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-3 px-4 mt-16 py-7 bg-custom-gradient6 ${
            showMenu ? "flex flex-col fixed top-2 left-0 right-0" : "hidden"
          }`}
        >
            {navItems.map(({item, path})=> (
                <a href={path} className="text-gray-500 text-xl hover:text-black">{item}</a>
            ))}
            <div className="w-full border-b-2 border-gray-700"></div>
            <div className="flex items-center justify-around">
                <a href="/login" className="text-gray-500 text-2xl hover:text-gray-400">Login</a>
                <a href="/signup" className="text-gray-500 text-2xl hover:text-gray-400">Sign up</a>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
