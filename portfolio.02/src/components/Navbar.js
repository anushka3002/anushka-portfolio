
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css'
export default function Navbar() {
  return (
    <header className="headerTop bg-gray-800 top-0 bg-gray-800 mt-0 sticky top-0 overflow-hidden w-full z-10 top-0">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-3 md:mb-0">
          <a href="/#home" className="ml-3 text-xl">
          𝒜𝓃𝓊𝓈𝒽𝓀𝒶
          </a>
        </a>
        <nav className="cool-link md:mr-auto md:ml-6 md:py-4 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="/#about" className="mr-5 hover:text-white">
            About Me
          </a>
          <a href="/#Skills" className="mr-5 hover:text-white">
            Tools & Skills
          </a>
          <a href="/#workexperience" className="mr-6 hover:text-white">
            Work Experience
          </a>
          <a href="/#projects" className="mr-6 hover:text-white">
            Projects
          </a>
          <a href="/#contact" className="mr-5 hover:text-white">
            Contact Me
          </a>
        </nav>
        <div className="flex justify-center" data-aos="fade-up">
            <a
              href="https://drive.google.com/file/d/1oLUJryRbx2Y_B4AXMqi0Uhn_Lf33xdbH/view?usp=sharing"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
          </div>
      </div>
    </header>
  );
}
