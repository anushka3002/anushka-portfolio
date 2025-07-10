import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { experience_projects } from "../experienceData";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Experience() {
  const [nxtgen, setNxtgen] = useState(false)
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
        <div className="w-full flex flex-col md:flex-row lg:flex-row">
        <div className="w-[100%] lg:w-[50%] md:w-[50%] lg:h-[950px] md:h-[650px] lg:border-r md:border-r">
          <div className="h-[50%] lg:mr-5 md:mr-5">
        {nxtgen ? <div className="border w-full p-5 rounded-xl">
          <p className="text-left leading-relaxed">
            I have worked in NxtGen on multiple projects, Speedcloud-website, Speedcloud-portal, Nxtgen-website. I have contributed in building the book NVDIA form, Financial Cloud Service screen, 
            and many custom components as well as integrated APIs to show real data on the application.
          </p>
          <p className="mt-3">Tech stack: React.js, Javascript, HTML, CSS, ShadCN, Zustand, TailwindCSS</p>
          <button style={{width:'150px'}} onClick={() => setNxtgen(false)} className="bg-gradient-to-r from-[#a697d5] to-[#511bff] to-70% text-white px-4 py-3 rounded-lg mt-4">Back</button>
        </div> : <div className="border w-full p-5 rounded-xl">
          <div className="flex justify-center"><img width={'50px'} src='/nxtgen.jpeg' /><p className="text-xl my-auto ml-2 font-medium">NxtGen</p></div>
          <div><p className="mt-4">(March 2025 - Present)</p></div>
          <p className="mt-4">NxtGen operates several high‑density datacenters across major Indian cities and provides managed services like disaster recovery, backup, CDN, and sovereign cloud solutions . </p>
          <button style={{width:'150px'}} onClick={() => setNxtgen(true)} className="bg-gradient-to-r from-[#a697d5] to-[#511bff] to-70% text-white px-4 py-3 rounded-lg mt-4">View details</button>
        </div>}
        <div className="h-[50%] hidden sm:mt-[90%] sm:flex flex-cols items-end">
          {chace ? <div className="border w-full p-5 rounded-xl">
            <p className="text-left leading-relaxed">
              I worked at Chace Technologies Pvt Ltd for 1.2 years, I was responsible for working on multiple projects, such as LEADOFF, LOCKR FINANCE, LOCKR PAY APP. I built application forms, modals, custom components and also integrated APIs. I also learned flutter and contributed to mobile
              applications in the company. 
            </p>
            <p className="mt-3">Tech stack: Next.js, React.js, Javascript, Typescript, HTML, CSS, Context API, TailwindCSS, Flutter</p>
            <button style={{width:'150px'}} onClick={() => setChace(false)} className="bg-gradient-to-r from-[#f4c086] to-black text-white to-30% px-4 py-3 rounded-lg mt-4">Back</button>
          </div> : <div className="border w-full p-5 rounded-xl">
            <div className="flex justify-center"><img width={'50px'} src='/chace2.jpg' /><p className="text-xl my-auto ml-2 font-medium">Chace</p></div>
            <div><p className="mt-4">(Jan 2022 - Feb 2023)</p></div>
            <p className="mt-4">Chace Technologies is the company where different products were handled like Leadoff, Lockr Finance and Pazago.</p>
            <button style={{width:'150px'}} onClick={() => setChace(true)} className="bg-gradient-to-r from-[#f4c086] to-black text-white to-30% px-4 py-3 rounded-lg mt-4">View details</button>
          </div>}
          </div>
          <div className="h-[50%] mt-4 flex sm:hidden lg:mr-5 md:mr-5">
        {flocco ? <div className="border w-full p-5 rounded-xl">
          <p className="text-left leading-relaxed">
            I worked at Flocco for 1.5 years where I majorly worked on HUBBLE which is internal tool
            of the company, aprt from that I have worked on ONLYGROCER and KYPER from scratch,
            ONLYGROCER is where kirana owner can uplod inventory data sheet and via KYPER the data
            sheet can be approved or rejected by the admin. I also contributed to mobile application using flutter.
          </p>
          <p className="mt-3">Tech stack: React.js, Javascript, HTML, CSS, Redux, TailwindCSS, Flutter</p>
          <button style={{width:'150px'}} onClick={() => setFlocco(false)} className="bg-gradient-to-r from-[#b0f2b6] to-[#033a35] to-70% text-white px-4 py-3 rounded-lg mt-4">Back</button>
        </div> : <div className="border w-full p-5 rounded-xl">
          <div className="flex justify-center"><img width={'50px'} src='/flocco.jpg' /><p className="text-xl my-auto ml-2 font-medium">Flocco</p></div>
          <div><p className="mt-4">(Apr 2023 - Sept 2024)</p></div>
          <p className="mt-4">The only grocery app you need. Connecting Customers, Retailers and Wholesalers on one platform.
            For household customers Shop hassle-free from your local shops.</p>
          <button style={{width:'150px'}} onClick={() => setFlocco(true)} className="bg-gradient-to-r from-[#b0f2b6] to-[#033a35] to-70% text-white px-4 py-3 rounded-lg mt-4">View details</button>
        </div>}
        </div>
        </div>
        </div>
        <div className="w-[100%] lg:w-[50%] md:w-[50%] lg:h-[650px] md:h-[650px] lg:mt-0 md:mt-0 mt-4 lg:ml-5 md:ml-5 flex flex-cols items-end">
          <div className="hidden sm:flex h-[50%] lg:mr-5 md:mr-5">
        {flocco ? <div className="border w-full p-5 rounded-xl">
          <p className="text-left leading-relaxed">
            I worked at Flocco for 1.5 years where I majorly worked on HUBBLE which is internal tool
            of the company, aprt from that I have worked on ONLYGROCER and KYPER from scratch,
            ONLYGROCER is where kirana owner can uplod inventory data sheet and via KYPER the data
            sheet can be approved or rejected by the admin. I also contributed to mobile application using flutter.
          </p>
          <p className="mt-3">Tech stack: React.js, Javascript, HTML, CSS, Redux, TailwindCSS, Flutter</p>
          <button style={{width:'150px'}} onClick={() => setFlocco(false)} className="bg-gradient-to-r from-[#b0f2b6] to-[#033a35] to-70% text-white px-4 py-3 rounded-lg mt-4">Back</button>
        </div> : <div className="border w-full p-5 rounded-xl">
          <div className="flex justify-center"><img width={'50px'} src='/flocco.jpg' /><p className="text-xl my-auto ml-2 font-medium">Flocco</p></div>
          <div><p className="mt-4">(Apr 2023 - Sept 2024)</p></div>
          <p className="mt-4">The only grocery app you need. Connecting Customers, Retailers and Wholesalers on one platform.
            For household customers Shop hassle-free from your local shops.</p>
          <button style={{width:'150px'}} onClick={() => setFlocco(true)} className="bg-gradient-to-r from-[#b0f2b6] to-[#033a35] to-70% text-white px-4 py-3 rounded-lg mt-4">View details</button>
        </div>}
        </div>
          <div className="h-[50%] sm:hidden sm:mt-[90%] flex flex-cols items-end">
          {chace ? <div className="border w-full p-5 rounded-xl">
            <p className="text-left leading-relaxed">
              I worked at Chace Technologies Pvt Ltd for 1.2 years, I was responsible for working on multiple projects, such as LEADOFF, LOCKR FINANCE, LOCKR PAY APP. I built application forms, modals, custom components and also integrated APIs. I also learned flutter and contributed to mobile
              applications in the company. 
            </p>
            <p className="mt-3">Tech stack: Next.js, React.js, Javascript, Typescript, HTML, CSS, Context API, TailwindCSS, Flutter</p>
            <button style={{width:'150px'}} onClick={() => setChace(false)} className="bg-gradient-to-r from-[#f4c086] to-black text-white to-30% px-4 py-3 rounded-lg mt-4">Back</button>
          </div> : <div className="border w-full p-5 rounded-xl">
            <div className="flex justify-center"><img width={'50px'} src='/chace2.jpg' /><p className="text-xl my-auto ml-2 font-medium">Chace</p></div>
            <div><p className="mt-4">(Jan 2022 - Feb 2023)</p></div>
            <p className="mt-4">Chace Technologies is the company where different products were handled like Leadoff, Lockr Finance and Pazago.</p>
            <button style={{width:'150px'}} onClick={() => setChace(true)} className="bg-gradient-to-r from-[#f4c086] to-black text-white to-30% px-4 py-3 rounded-lg mt-4">View details</button>
          </div>}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
