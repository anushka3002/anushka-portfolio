import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md fixed w-full top-0 left-0 z-50 border-b-4 border-transparent hover:border-indigo-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-white text-3xl font-bold relative group">
          Anushka
          <div className="absolute inset-x-0 bottom-0 h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">About</a>
          <a href="#skills" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Skills</a>
          <a href="#experience" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Experience</a>
          <a href="#projects" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Contact</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0f19] rounded-md text-white space-y-4 p-4">
          <a href="#about" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">About</a>
          <a href="#skills" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Skills</a>
          <a href="#experience" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Experience</a>
          <a href="#projects" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Projects</a>
          <a href="#contact" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
