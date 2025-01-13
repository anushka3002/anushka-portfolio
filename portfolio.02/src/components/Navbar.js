
// import { ArrowRightIcon } from "@heroicons/react/solid";
// import React from "react";
// import './Navbar.css'
// export default function Navbar() {
//   return (
//     <header className="headerTop top-0 bg-gray-800 mt-0 sticky top-0 overflow-hidden w-full z-10 top-0">
//       <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
//         <a className="title-font font-medium text-white mb-3 md:mb-0">
//           <a href="/#home" className="ml-3 text-xl">
//           𝒜𝓃𝓊𝓈𝒽𝓀𝒶
//           </a>
//         </a>
//         <nav className="cool-link md:mr-auto md:ml-6 md:py-4 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//         <a href="/#about" className="mr-5 hover:text-white">
//             About Me
//           </a>
//           <a href="/#Skills" className="mr-5 hover:text-white">
//             Tools & Skills
//           </a>
//           <a href="/#workexperience" className="mr-6 hover:text-white">
//             Work Experience
//           </a>
//           <a href="/#projects" className="mr-6 hover:text-white">
//             Projects
//           </a>
//           <a href="/#contact" className="mr-5 hover:text-white">
//             Contact Me
//           </a>
//         </nav>
//         <div className="flex justify-center" data-aos="fade-up">
//             <a
//               href="https://drive.google.com/file/d/1oLUJryRbx2Y_B4AXMqi0Uhn_Lf33xdbH/view?usp=sharing"
//               target="_blank"
//               className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
//             >
//               Resume
//             </a>
//           </div>
//       </div>
//     </header>
//   );
// }


import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-md fixed w-full top-0 left-0 z-50 border-b-4 border-transparent hover:border-indigo-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-white text-3xl font-bold relative group">
          Anushka
          <div className="absolute inset-x-0 bottom-0 h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">About</a>
          <a href="#projects" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Projects</a>
          <a href="#skills" className="text-white hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Skills</a>
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
        <div className="md:hidden bg-black text-white space-y-4 p-4">
          <a href="#about" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">About</a>
          <a href="#projects" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Projects</a>
          <a href="#skills" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Skills</a>
          <a href="#contact" className="block hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
