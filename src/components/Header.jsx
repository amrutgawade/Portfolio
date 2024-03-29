import React, { useEffect, useState } from "react";
import CV from "../assets/docs/cv.pdf";
import Profile1 from "../assets/imgs/Profile-1.jpg";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  IoMdCall,
  IoMdChatboxes,
  IoMdDesktop,
  IoMdHome,
  IoMdPerson,
  IoMdSchool,
} from "react-icons/io";

function Header() {
  const [mode, setMode] = useState(false);
  const element = document.documentElement;
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const getIsActiveClass = (itemName) => {
    return activeItem === itemName ? "bg-indigo-500/30 text-indigo-500" : "";
  };

  useEffect(() => {
    if (mode == true) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [mode]);
  return (
    <header id="home" className="min-h-screen py-16 relative">
      <nav className="fixed lg:top-16 bottom-[5%] lg:left-14 left-[50%] lg:translate-x-0 lg:translate-y-0 translate-x-[-50%] translate-y-[-50%]">
        <ul
          id="navbar"
          className="flex lg:flex-col gap-x-4 items-center lg:gap-y-2 px-4 lg:px-2 py-2 lg:py-4 rounded-3xl text-black dark:text-white text-xl dark:bg-black/20 bg-indigo-500/20"
        >
          <li className={`rounded-full p-2 ${getIsActiveClass("home")}`}>
            <a
              href="#home"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("home")}
              aria-label="Visit the Home Section"
            >
              <IoMdHome />
            </a>
          </li>
          <li className={`rounded-full p-2 ${getIsActiveClass("about")}`}>
            <a
              href="#about"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("about")}
              aria-label="Visit the About Section"
            >
              <IoMdPerson />
            </a>
          </li>
          <li className={`rounded-full p-2 ${getIsActiveClass("skills")}`}>
            <a
              href="#skills"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("skills")}
              aria-label="Visit the Skills Section"
            >
              <IoMdSchool />
            </a>
          </li>
          <li className={`rounded-full p-2 ${getIsActiveClass("portfolio")}`}>
            <a
              href="#portfolio"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("portfolio")}
              aria-label="Visit the Portfolio Section"
            >
              <IoMdDesktop />
            </a>
          </li>
          <li
            className={`rounded-full p-2 ${getIsActiveClass("testimonials")}`}
          >
            <a
              href="#testimonials"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("testimonials")}
              aria-label="Visit the Testimonials Section"
            >
              <IoMdChatboxes />
            </a>
          </li>
          <li className={`rounded-full p-2 ${getIsActiveClass("contact")}`}>
            <a
              href="#contact"
              className="hover:text-indigo-500"
              onClick={() => handleItemClick("contact")}
              aria-label="Visit the Contact Section"
            >
              <IoMdCall />
            </a>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setMode(!mode)}
        className="absolute lg:fixed top-6 right-6 p-3 rounded-full text-black dark:text-white duration-700 dark:-rotate-[30deg] rotate-[30deg]"
      >
        {mode ? <FaMoon /> : <FaSun />}
      </div>

      <a
        href="#footer"
        className="hidden md:block fixed bottom-[15%] right-8 rotate-90 text-sm text-indigo-600 hover:text-black dark:hover:text-white duration-700"
        aria-label="Scroll to Bottom at Footer Section"
      >
        Scroll Down &nbsp; →
      </a>

      <div className="flex flex-col items-center justify-center tracking-wide">
        <img
          src={Profile1}
          alt="Profile-1"
          className="lg:mt-8 mt-8 h-w-64 w-64 rounded-full p-2 border-indigo-500/75 border-2"
        />
        <p className="lg:mt-8 mt-8 text-slate-500 text-base font-bold">
          Hello I'm
        </p>
        <p className="mt-4 dark:text-slate-50 text-4xl font-semibold">
          AMRUT GAWADE
        </p>
        <p className="mt-2 text-slate-500 text-base font-bold">
          Fullstack Developer | Software Developer
        </p>
        <div className="flex items-center justify-center gap-x-5 mt-10 tracking-normal">
          <a
            className="inline-block text-center px-6 py-4 bg-transparent text-indigo-500 rounded border-none outline outline-1 outline-indigo-500 hover:outline-black/50 dark:hover:outline-white hover:text-black/50 dark:hover:text-white duration-500"
            href={CV}
            target="_blank"
          >
            Download CV
          </a>
          <a
            className="inline-block text-center px-6 py-4 bg-indigo-500 text-white rounded border-none hover:bg-indigo-600 hover:text-slate-200 duration-500"
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
