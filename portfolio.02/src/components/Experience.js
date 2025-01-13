import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { experience_projects } from "../experienceData";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Experience() {
  const [flocco, setFlocco] = useState(false)
  const [chace, setChace] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })

  return (
    <section id="workexperience" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <p className="text-4xl mb-10">Work Experience</p>
        <div className="w-[100%] flex">
        <div className="w-[50%] h-[650px] border-r">
        <div className="h-[50%] mr-5">
        {flocco ? <div className="border w-full p-5 rounded-xl shadow-[inset_10px_10px_20px_rgba(3,58,53,0.5),_inset_-10px_-10px_20px_rgba(3,58,53,0.3)]">
          <p className="text-left leading-relaxed">
            I worked at Flocco for 1.5 years where I majorly worked on HUBBLE which is internal tool
            of the company, aprt from that I have worked on ONLYGROCER and KYPER from scratch,
            ONLYGROCER is where kirana owner can uplod inventory data sheet and via KYPER the data
            sheet can be approved or rejected by the admin. I also contributed to mobile application using flutter.
          </p>
          <p className="mt-3">Tech stack: React.js, Javascript, HTML, CSS, Redux, TailwindCSS, Flutter</p>
          <button onClick={() => setFlocco(false)} className="border-2 border-[#033a35] hover:bg-[#033a35] shadow-[inset_10px_10px_20px_rgba(3,58,53,0.5),_inset_-10px_-10px_20px_rgba(3,58,53,0.3)] px-10 py-3 rounded-lg mt-4">Back</button>
        </div> : <div data-aos="fade-right" className="border w-full p-5 rounded-xl shadow-[inset_10px_10px_20px_rgba(3,58,53,0.5),_inset_-10px_-10px_20px_rgba(3,58,53,0.3)]">
          <div className="flex justify-center"><img width={'50px'} src='/flocco.jpg' /><p className="text-xl my-auto ml-2 font-medium">Flocco</p></div>
          <div><p className="mt-4">(Apr 2023 - Sept 2024)</p></div>
          <p className="mt-4">The only grocery app you need. Connecting Customers, Retailers and Wholesalers on one platform.
            For household customers Shop hassle-free from your local shops.</p>
          <button onClick={() => setFlocco(true)} className="border-2 border-[#033a35] hover:bg-[#033a35] shadow-[inset_10px_10px_20px_rgba(3,58,53,0.5),_inset_-10px_-10px_20px_rgba(3,58,53,0.3)] px-4 py-3 rounded-lg mt-4">View details</button>
        </div>}
        </div>
        </div>
        <div className="w-[50%] h-[650px] ml-5 flex flex-cols items-end">
          <div className="h-[50%]"></div>
          <div className="h-[50%] flex flex-cols items-end">
          {chace ? <div className="border w-full p-5 rounded-xl shadow-[inset_10px_10px_20px_rgba(255,243,131,0.5),_inset_-10px_-10px_20px_rgba(255,243,131,0.3)]">
            <p className="text-left leading-relaxed">
              I worked at Chace Technologies Pvt Ltd for 1.2 years, I was responsible for working on multiple projects, such as LEADOFF, LOCKR FINANCE, LOCKR PAY APP. I built application forms, modals, custom components and also integrated APIs. I also learned flutter and contributed to mobile
              applications in the company. 
            </p>
            <p className="mt-3">Tech stack: Next.js, React.js, Javascript, Typescript, HTML, CSS, Context API, TailwindCSS, Flutter</p>
            <button onClick={() => setChace(false)} className="border-2 border-[#FFF3834D] hover:bg-[#fff1a0] px-10 py-3 rounded-lg mt-4">Back</button>
          </div> : <div data-aos="fade-left" className="border w-full p-5 rounded-xl shadow-[inset_10px_10px_20px_rgba(255,243,131,0.5),_inset_-10px_-10px_20px_rgba(255,243,131,0.3)]">
            <div className="flex justify-center"><img width={'50px'} src='/chace2.jpg' /><p className="text-xl my-auto ml-2 font-medium">Chace</p></div>
            <div><p className="mt-4">(Jan 2022 - Feb 2023)</p></div>
            <p className="mt-4">Chace Technologies is the company where different products were handled like Leadoff, Lockr Finance and Pazago.</p>
            <button onClick={() => setChace(true)} className="border-2 border-[#FFF3834D] hover:bg-[#fff1a0] px-4 py-3 rounded-lg mt-4">View details</button>
          </div>}
          </div>
        </div>
        </div>
      </div>
    </section>

  );
}
