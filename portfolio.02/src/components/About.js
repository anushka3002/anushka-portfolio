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
        <div className="">
          <h1 style={{ fontSize: "2em" }} data-aos="fade-down">
            ABOUT
          </h1>
          <br></br>
          <br></br>
          <div>
            <div
              md={8}
              className="w-full border border-blue-500 p-7 rounded-xl home-about-description 
              shadow-[inset_10px_10px_20px_rgba(0,0,255,0.5),_inset_-10px_-10px_20px_rgba(0,0,255,0.3)]"
              data-aos="fade-right"
            >
              <p className="home-about-body text-xl leading-relaxed">
                With 2.7 years of hands-on experience in frontend development within dynamic startup environments, I have honed my skills in building user-centric solutions. At Flocco, I collaborated with cross-functional teams to deliver impactful products. I was responsible for managing the internal tool, Hubble, which is used to streamline operations for managing products and kirana stores.
                My expertise spans across a variety of frontend technologies, including HTML, CSS, JavaScript, Redux, React Context, and React.js, enabling me to effectively solve complex challenges. Prior to Flocco, I contributed to Chace Technology, where I gained valuable experience working under pressure and meeting tight deadlines in a fast-paced startup atmosphere.
                Thank you for visiting my portfolio. I look forward to discussing how my skills and experiences can contribute to your team.
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center mt-14" data-aos="fade-up">
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
          </div> */}
        </div>
        {/* <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 m-auto"
          data-aos="fade-left"
        >
          <img
            className="m-auto w-full rounded-full"
            alt="img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/blogger-woman-use-laptop-5066144-4225286.png"/>
        </div> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
