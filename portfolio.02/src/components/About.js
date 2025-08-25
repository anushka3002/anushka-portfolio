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
          <h1 style={{ fontSize: "2em" }}>
            ABOUT
          </h1>
          <br></br>
          <br></br>
          <div>
            <div
              md={8}
              className="w-full border border-blue-500 p-7 rounded-xl home-about-description"
            >
              <p className="home-about-body text-xl leading-relaxed">
                With 3.6 years of hands-on experience in frontend development within dynamic startup environments, I have honed my skills in building user-centric solutions. Currently at NxtGen, I contribute to developing scalable and responsive web applications that enhance user experience and performance.
                Previously at Flocco, I collaborated with cross-functional teams to deliver impactful products. I was responsible for managing the internal tool, Hubble, which is used to streamline operations for managing products and kirana stores.
                <br/><br/>
                My expertise spans a variety of frontend technologies, including HTML, CSS, JavaScript, Redux, React Context, and React.js, enabling me to effectively solve complex challenges. Prior to Flocco, I contributed to Chace Technology, where I gained valuable experience working under pressure and meeting tight deadlines in a fast-paced startup atmosphere.
                Thank you for visiting my portfolio. I look forward to discussing how my skills and experiences can contribute to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
