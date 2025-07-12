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
        <div id="home" className="lg:mt-0 md:mt-0 mt-4">
          <div className="text-white-400">
            <span className="mr-5 lg:text-4xl md:text-4xl text-xl">I'M</span><span className=" lg:text-7xl md:text-7xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500">Anushka Priya</span>
            <p className=" lg:text-4xl md:text-4xl text-xl mt-4">Frontend Developer</p>
            <a target="blank" href="https://drive.google.com/file/d/1zu_v64LAOr6q39LKwED1XaXUip1rTo4V/view?usp=sharing"><button className="border-4 border-pink-500 rounded-xl mt-5 py-4 px-10 font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white-500">
              Resume
            </button></a>

          </div>
          <div></div>
        </div>
        <div className="lg:mt-0 md:mt-0 mt-10">
          <img
            className="image-bar"
            alt="hero"
            width={'450px'}
            height={'100%'}
            src="/pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}

