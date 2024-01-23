import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-16 text-white text-center">
      <p className="text-gray-400 text-sm mb-1 font-medium">Got Work for me</p>
      <p className="text-indigo-500 text-3xl">Contact Me</p>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 py-16">
        <div className="flex flex-col gap-y-5 mb-8 lg:mb-0">
          <div className="flex flex-col h-48 text-sm rounded-lg w-60 items-center justify-center p-4 bg-[rgb(137,43,226,0.12)]">
            <FaEnvelope className="text-2xl mb-4" />
            <p className="text-2xl mb-1">Email</p>
            <p className="mb-6">amrutgawade.08@gmail.com</p>
            <a
              href="mailto:amrutgawade.08@gmail.com"
              className="text-indigo-500 hover:text-white duration-500"
            >
              Send a Message
            </a>
          </div>
          <div className="flex flex-col h-48 text-sm rounded-lg w-60 items-center justify-center p-4 bg-[rgb(137,43,226,0.12)]">
            <FaWhatsapp className="text-3xl mb-4" />
            <p className="text-2xl mb-1">Whatsapp</p>
            <p className="mb-6">+91 8237941681</p>
            <a className="text-indigo-500 hover:text-white duration-500" href="https://api.whatsapp.com/send/?phone=%2B918237941681&text&type=phone_number&app_absent=0">
              Send a Message
            </a>
          </div>
        </div>
        <form className="flex flex-col gap-5">
          <input className="px-3 py-4 lg:w-[35vw] w-full rounded bg-transparent outline outline-1 outline-indigo-500" type="text" placeholder="Your Name" />
          <input className="px-3 py-4 lg:w-[35vw] w-full rounded bg-transparent outline outline-1 outline-indigo-500" type="email" placeholder="Your Email" />
          <textarea className="px-3 py-4 lg:w-[35vw] w-full resize-none rounded bg-transparent outline outline-1 outline-indigo-500" placeholder="Message" rows="5"></textarea>
          <button type="submit" className="inline-block text-center px-6 py-4 bg-indigo-600 text-white rounded border-none hover:bg-indigo-700 hover:text-gray-300 duration-500">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
