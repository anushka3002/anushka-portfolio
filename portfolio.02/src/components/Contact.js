
import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import './Contact.css';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Contact() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_flhtcte', 'template_04b51x4', form.current, 'user_jEpZ0vTu03Aje92I2PJoH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <section id="contact" className="relative my-6">
      <h1 className="title mt-5">GET IN TOUCH</h1>
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="border lg:w-1/3 md:w-1/2 ml-5 rounded-xl py-3 lg:px-5 md:px-5 px-2 flex flex-col w-full md:py-12 mt-8 md:mt-0 mr-5">
              <div className="contact-info">
                <ul className="">
                  <li><a className="circle2"><i class="fas fa-phone-square-alt"></i>+91 7870353593</a></li>
                  <li className="mx-auto flex sm:flex-nowrap"><a href="mailto:anushka2457@gmail.com" className="circle"><i class="fas fa-envelope-square"></i></a>anushka2457@gmail.com</li>
                  <li><a href="https://github.com/anushka3002" target="_blank" className="circle"><i class="fab fa-github"></i>Github</a></li>
                  <li><a href="https://linkedin.com/in/anushka-priya-927697222" target="_blank" className="circle"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
                  <li><a href="https://medium.com/@anushkasakshi2003" target="_blank" className="circle"><i class="fab fa-medium"></i>Medium</a></li>
                  <li><a href="https://twitter.com/anushkalyf" target="_blank" className="circle"><i class="fab fa-twitter"></i>Twitter</a></li>
                </ul>
              </div>
        </div>
        <form ref={form} onSubmit={sendEmail}

          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-12 mt-8 md:mt-0 mr-5 ml-5">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border bg-transparent border-white-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border bg-transparent border-white-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border bg-transparent border-white-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}