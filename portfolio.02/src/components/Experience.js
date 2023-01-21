import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { experience_projects } from "../experienceData";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Experience() {
  useEffect(()=>{
    Aos.init({duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })
  return (
    <section id="workexperience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4" data-aos="zoom-out-up">
          Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto text-white leading-relaxed text-4xl" data-aos="zoom-out-down">
          Chace Technologies Private Limited 
          </p>
          <p className="lg:w-2/3 mx-auto text-white leading-relaxed" data-aos="zoom-out-down">
          Frontend Engineer at Chace since 7+ months
          </p>
          <p className="lg:w-2/3 mx-auto text-white leading-relaxed" data-aos="zoom-out-down">
          Here are some of the products which I have worked on at Chace.
          </p>
        </div>
        <div className="flex flex-wrap -m-1 max-w-7xl justify-center" data-aos="zoom-out-down">
          {experience_projects.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-5">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-80 object-center overflow-hidden"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="p-5 text-3xl">
<a href={project.link}>
  <i class="fas fa-link"></i>
</a>
</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
<br></br><br></br><br></br><br></br>      
    </section>
    
  );
}
