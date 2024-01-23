import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  IoMdCall,
  IoMdChatboxes,
  IoMdDesktop,
  IoMdHome,
  IoMdMail,
  IoMdPerson,
  IoMdSchool,
} from "react-icons/io";

function Header() {
  const [mode, setMode] = useState(true);
  return (
    <header id="home" className="min-h-screen py-16 relative">
      <nav className="fixed lg:top-16 bottom-[5%] lg:left-14 left-[50%] lg:translate-x-0 lg:translate-y-0 translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex lg:flex-col gap-10 items-center lg:gap-y-5 px-4 lg:px-3 py-3 lg:py-4 rounded-3xl text-white text-xl bg-[rgb(0,0,0,0.2)]">
          <li>
            <a href="#home" className="hover:text-indigo-500">
              <IoMdHome />
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-500">
              <IoMdPerson />
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-500">
              <IoMdSchool />
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-indigo-500">
              <IoMdDesktop />
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-indigo-500">
              <IoMdChatboxes />
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-500">
              <IoMdCall />
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setMode(!mode)}
        className="absolute top-6 right-6 p-3 rounded-full ring-1 ring-slate-800 text-white duration-700 hover:bg-white hover:text-black"
      >
        {mode ? <FaMoon /> : <FaSun />}
      </button>

      <a
        href="#footer"
        className="hidden md:block fixed bottom-[15%] right-8 rotate-90 text-sm text-indigo-600 hover:text-white duration-700"
      >
        Scroll Down &nbsp; →
      </a>

      <div className="flex flex-col items-center">
        <p className="text-center lg:mt-24 mt-8 text-gray-500 text-base font-bold">
          Hello I'm
        </p>
        <p className="text-center uppercase mt-4 text-gray-50 text-4xl font-semibold">
          Amrut Gawade
        </p>
        <p className="text-center mt-2 text-gray-500 text-base font-bold">
          Fullstack Developer | Software Developer
        </p>
        <div className="flex gap-5 mt-16">
          <a
            className="inline-block text-center px-6 py-4 bg-transparent text-indigo-500 rounded border-none outline outline-1 outline-indigo-500 hover:outline-white hover:text-white duration-500"
            href="src\assets\docs\cv.pdf"
            target="_blank"
          >
            Download CV
          </a>
          <a
            className="inline-block text-center px-6 py-4 bg-indigo-600 text-white rounded border-none hover:bg-indigo-700 hover:text-gray-300 duration-500"
            href="#contact"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
