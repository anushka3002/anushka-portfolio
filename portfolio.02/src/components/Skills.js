import React, {useEffect} from "react";
import "./Skills.css";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(()=>{
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
    });
  })
  return (
    <section id="Skills" class="skills-section">
      <div class="container">
        
      </div>
      <h1 data-aos="fade-down">Tools And Skills</h1>
      <br></br>
        <h2 data-aos="fade-down">Tech Stacks</h2>
      <div class="skills-div">
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
          <h3>React</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.svgporn.com/logos/javascript.svg"
            alt=""
          />
          <h3>JavaScript</h3>
        </div>

        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://logospng.org/download/css-3/logo-css-3-2048.png"
            alt=""
          />
          <h3>CSS</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt=""
          />
          <h3>HTML</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt=""
          />
          <h3>Git</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://cdn.svgporn.com/logos/redux.svg"
            alt=""
          />
          <h3>Redux</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <h3>TailwindCSS</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png"
            alt=""
          />
          <h3>NextJs</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab24847b1f88ee2_cc137f7e.png"
            alt=""
          />
          <h3>Flutter</h3>
        </div>
        <div class="skills-card" data-aos="flip-up">
          <img
            src="https://www.tutorialsteacher.com/Content/images/home/typescript.svg"
            alt=""
          />
          <h3>Typescript</h3>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
}
