import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  }, []);

  const skills = [
    { icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", name: "React.js" },
    { icon: "https://cdn.svgporn.com/logos/javascript.svg", name: "Javascript" },
    { icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png", name: "HTML" },
    { icon: "https://logospng.org/download/css-3/logo-css-3-2048.png", name: "CSS" },
    { icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", name: "Git" },
    { icon: "https://cdn.svgporn.com/logos/redux.svg", name: "Redux" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s", name: "TailwindCSS" },
    { icon: "https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png", name: "Next.js" },
    { icon: "https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab24847b1f88ee2_cc137f7e.png", name: "Flutter" },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png", name: "Typescript" },
  ];

  return (
    <section id="skills" className="skills-section text-white py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center">Tools And Skills</h1>
        <br />
        <h2 className="text-xl text-center text-gray-300">Tech Stacks</h2>

        {/* Responsive Grid */}
        <div className="skills-div mt-6">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
            {skills.map((e, index) => (
              <div
                key={index}
                className="border rounded-xl border-blue-500 p-6 flex flex-col items-center bg-gray-800 shadow-lg hover:scale-105 transition-transform"
              >
                <img width="80px" src={e.icon} alt={e.name} className="mb-3" />
                <h3 className="text-white text-center text-sm font-medium">{e.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
