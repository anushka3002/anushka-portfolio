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

  const skills = [
    {icon:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',name:'React.js'},
    {icon:'https://cdn.svgporn.com/logos/javascript.svg',name:'Javascript'},
    {icon:'https://cdn-icons-png.flaticon.com/512/732/732212.png',name:'HTML'},
    {icon:'https://logospng.org/download/css-3/logo-css-3-2048.png',name:'CSS'},
    {icon:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',name:'Git'},
    {icon:'https://cdn.svgporn.com/logos/redux.svg',name:'Redux'},
    {icon:'https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj',name:'TailwindCSS'},
    {icon:'https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png',name:'Next.js'},
    {icon:'https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab24847b1f88ee2_cc137f7e.png',name:'Flutter'},
    {icon:'https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png',name:'Typescript'},
  ]
  return (
    <section id="Skills" class="skills-section">
      <div class="container">
        
      </div>
      <h1 data-aos="fade-down">Tools And Skills</h1>
      <br></br>
        <h2 data-aos="fade-down">Tech Stacks</h2>
      <div class="skills-div">
        <div className="grid grid-cols-5">
          {skills.map((e)=>{
            return <>
            <div class="border rounded-xl border border-blue-500 shadow-[inset_10px_10px_20px_rgba(0,0,255,0.5),_inset_-10px_-10px_20px_rgba(0,0,255,0.3)]
            mx-4 my-4 p-8" data-aos="flip-up">
            <img
            width={'100px'}
            src={e.icon}
            alt=""
          />
          <h3 className="text-white text-center">{e.name}</h3>
            </div>
            </>
          })}
        </div>
        </div>
      <br></br>
      <br></br>
    </section>
  );
}
