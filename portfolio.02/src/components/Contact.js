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
      animatedClassName: 'animated',
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_flhtcte', 'template_04b51x4', form.current, 'user_jEpZ0vTu03Aje92I2PJoH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="my-12 px-4 sm:px-8 lg:px-16 xl:px-32 relative">
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12 animate__animated animate__fadeInDown">Get In Touch</h1>
      <div className="flex flex-col lg:flex-row justify-center">

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}
          className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full lg:w-1/2 shadow-md hover:shadow-xl transition-shadow duration-300">

          <h2 className="text-white text-3xl font-semibold mb-6">Hire Me</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-gray-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-gray-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-gray-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
