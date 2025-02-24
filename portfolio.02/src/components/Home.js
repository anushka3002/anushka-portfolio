import React, { useEffect } from "react";
import "./Home.css";
import Type from "./Type";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })

  return (
    <section id="home" className="mx-5">
      <div className="container mx-auto flex py-20 md:flex-row flex-col items-center justify-between">
        <div id="home">
          <div className="text-white-400">
            <span className="mr-5 text-4xl">I'M</span><span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500">Anushka Priya</span>
            <p className="text-4xl mt-4">Frontend Developer</p>
            <a target="blank" href="https://drive.google.com/file/d/1JZV94oVX9GUCmZ0mGU7_RirCjal6Ung-/view?usp=sharing"><button className="border-4 border-pink-500 rounded-xl mt-5 py-4 px-10 font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white-500">
              Resume
            </button></a>

          </div>
          <div></div>
        </div>
        <div>
          <img
            className="image-bar"
            alt="hero"
            width={'100%'}
            height={'100%'}
            src="/Anushka-removebg-preview.jpg"
          />
        </div>
      </div>
    </section>
  );
}

