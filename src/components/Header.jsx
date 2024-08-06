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
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function Header() {
  const [mode, setMode] = useState(true);
  const element = document.documentElement;
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const getIsActiveClass = (itemName) => {
    return activeItem === itemName ? "bg-indigo-500/30" : "";
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
      <nav className="fixed lg:top-16 bottom-[5%] lg:left-12 left-[50%] lg:translate-x-0 lg:translate-y-0 translate-x-[-50%] translate-y-[-50%]">
        <ul
          id="navbar"
          className="flex lg:flex-col gap-x-4 items-center lg:gap-y-1 px-4 lg:px-1 py-2 lg:py-1.5 rounded-3xl text-black dark:text-white text-xl dark:bg-black/20 bg-indigo-500/20"
        >
          <li className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("home")}`}>
            <a
              href="#home"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("home")}
              aria-label="Visit the Home Section"
            >
              <IoMdHome size={16} />
            </a>
          </li>
          <li className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("about")}`}>
            <a
              href="#about"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("about")}
              aria-label="Visit the About Section"
            >
              <IoMdPerson size={16} />
            </a>
          </li>
          <li className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("skills")}`}>
            <a
              href="#skills"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("skills")}
              aria-label="Visit the Skills Section"
            >
              <IoMdSchool size={16} />
            </a>
          </li>
          <li className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("portfolio")}`}>
            <a
              href="#portfolio"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("portfolio")}
              aria-label="Visit the Portfolio Section"
            >
              <IoMdDesktop size={16} />
            </a>
          </li>
          <li
            className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("testimonials")}`}
          >
            <a
              href="#testimonials"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("testimonials")}
              aria-label="Visit the Testimonials Section"
            >
              <IoMdChatboxes size={16} />
            </a>
          </li>
          <li className={`rounded-full p-2 hover:bg-indigo-500/30 ${getIsActiveClass("contact")}`}>
            <a
              href="#contact"
              className="dark:text-indigo-500"
              onClick={() => handleItemClick("contact")}
              aria-label="Visit the Contact Section"
            >
              <IoMdCall size={16} />
            </a>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setMode(!mode)}
        className="absolute lg:fixed top-6 right-6 p-2 rounded-full bg-slate-900/10 dark:bg-white/10 border border-slate-300 dark:border-slate-700 text-black dark:text-white duration-700 dark:rotate-[30deg] -rotate-[30deg]"
      >
        {mode ? <FaSun /> : <FaMoon />}
      </div>

      <div className="hidden lg:block fixed bottom-[15%] left-[3.7rem] text-sm">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <a
            href="https://github.com/amrutgawade"
            target="_blank"
            className="dark:text-indigo-50"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/amrut-gawade/"
            target="_blank"
            className="dark:text-indigo-50"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/com.amrut.ig/"
            target="_blank"
            className="dark:text-indigo-50"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B917741941681&text&type=phone_number&app_absent=0"
            target="_blank"
            className="dark:text-indigo-50"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>
      <a
        href="#footer"
        className="hidden lg:block fixed bottom-[15%] right-0 rotate-90 text-sm text-indigo-600 hover:text-black dark:hover:text-white duration-700"
        aria-label="Scroll to Bottom at Footer Section"
      >
        Scroll Down &nbsp; →
      </a>

      <div className="flex flex-col items-center justify-center tracking-wide">
        <img
          src={Profile1}
          alt="Profile-1"
          className="lg:mt-4 mt-0 h-w-64 w-64 rounded-full p-2 border-indigo-500/75 border-2"
        />
        <p className="lg:mt-8 mt-10 text-slate-500 text-base font-semibold">
          Hello I'm
        </p>
        <p className="mt-4 dark:text-slate-50 text-4xl font-semibold">
          AMRUT GAWADE
        </p>
        <p className="mt-2 text-slate-500">
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
