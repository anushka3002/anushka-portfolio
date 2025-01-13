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
    <section id="home" data-aos="fade-up">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-between">
        <div id="home">
          <div className="text-white-400">
            <span className="mr-5 text-4xl">I'M</span><span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500">Anushka Priya</span>
            <p className="text-4xl mt-4">Frontend Developer</p>
            <button className="border-4 border-pink-500 rounded-xl mt-5 py-4 px-10 font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white-500">
              Resume
            </button>

          </div>
          <div></div>
        </div>
        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-up">
          <h1 className="heading text-8xl mt-10">
            Hi There!{" "}
            <span className="wave" data-aos="fade-up">👋</span>
          </h1>
          <br></br>
          <br></br>
          <br></br>

          <h1 className="heading-name text-6xl mr-0.5">
            I'M 
            <strong className="main-name text-5xl"> Anushka Priya</strong></h1>
            <br></br>
    
            <h1 className="text-4xl" data-aos="fade-"> <Type /></h1>
           
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           

        </div> */}
        <div className="ml-10" data-aos="fade-right">
          <img
            className="image-bar"
            alt="hero"
            width={'600px'}
            src="./Anu2.jpg"
          />
        </div>
      </div>
    </section>
  );
}

