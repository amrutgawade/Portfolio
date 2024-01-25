import React from "react";
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-indigo-600 flex flex-col items-center justify-center relative z-10"
    >
      <h1 className="text-2xl font-medium mt-10 mb-14 leading-relaxed">
        AMRUT GAWADE
      </h1>
      <ul className="flex flex-col md:flex-row items-center justify-center gap-5 mb-14">
        <li>
          <a
            href="#home"
            className="hover:text-white duration-500"
            aria-label="Visit the Home Section"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-white duration-500"
            aria-label="Visit the About Section"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-white duration-500"
            aria-label="Visit the Portfolio Section"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="hover:text-white duration-500"
            aria-label="Visit the Testimonials Section"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-white duration-500"
            aria-label="Visit the Contact Section"
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex items-center justify-center gap-5 mb-16 text-3xl">
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918237941681&text&type=phone_number&app_absent=0"
            className="hover:text-white duration-500"
            target="_blank"
            aria-label="Send a Whatspp Message to Amrut Gawade"
          >
            <FaSquareWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/amrutgawade"
            className="hover:text-white duration-500"
            target="_blank"
            aria-label="Visit the Github Profile of Amrut Gawade"
          >
            <FaSquareGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/com.amrut.ig/"
            className="hover:text-white duration-500"
            target="_blank"
            aria-label="Visit the Instagram Profile of Amrut Gawade"
          >
            <FaSquareInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amrut-gawade/"
            className="hover:text-white duration-500"
            target="_blank"
            aria-label="Visit the Linkedin Profile of Amrut Gawade"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <div className="flex items-center px-2 py-1 text-xs bg-indigo-500/50 text-slate-300 mb-6 outline outline-1 outline-indigo-50/30 rounded">
        <span class="animate-ping absolute h-1 w-1 rounded-full bg-sky-400 opacity-75"></span>
        <span className="ml-4">11 visitors in last 7 days</span>
      </div>
      <p className="mb-8 text-sm font-medium">
        &copy; Amrut Gawade all rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
