import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });
  return (
    <section id="about">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 style={{ fontSize: "2em" }} data-aos="fade-down">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <div>
              <div
                md={8}
                className="home-about-description"
                data-aos="fade-right"
              >
                <p className="home-about-body" style={{ fontSize: "1.4em" }}>
                A passionate Frontend Developer, with an
                innovative mind and a drive to find
                solutions for complex problems. A
                dedicated solution seeker, with a
                keen interest in designing websites.
                Looking forward to enhancing skills
                and expanding knowledge in a
                challenging work environment.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="flex justify-center mt-14" data-aos="fade-up">
            <a
              href="https://drive.google.com/file/d/1oLUJryRbx2Y_B4AXMqi0Uhn_Lf33xdbH/view?usp=sharing"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
            <a
              href="/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-3 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 m-auto"
          data-aos="fade-left"
        >
          <img
            className="m-auto w-full rounded-full"
            alt="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/blogger-woman-use-laptop-5066144-4225286.png"/>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
