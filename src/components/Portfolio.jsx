import React from "react";
import Project1 from "../assets/projects/project-1.png";
import Project2 from "../assets/projects/project-2.png";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 dark:text-white text-center"
    >
      <p className="text-slate-500 text-sm mb-1 font-medium">My Recent work</p>
      <p className="text-indigo-500 text-3xl">Portfolio</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-24 mt-16 gap-y-16 text-slate-900 dark:text-white">
        <div className="flex flex-col items-start justify-center h-60 w-64 mx-auto bg-indigo-500/30 p-4 rounded-md">
          <img src={Project1} alt="Portfolio" className="rounded-lg" />
          <p className="mt-2 font-medium">Portfolio</p>
          <div className="flex gap-x-2 mt-4">
            <a
              href="https://amrutgawade.github.io/Portfolio/"
              target="_blank"
              className="inline-block px-3 py-2 text-[12px] rounded border-none text-indigo-500 hover:text-white outline outline-1 hover:outline-white outline-indigo-500 duration-500"
              aria-label="Visit the Live Demo of Portfolio"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/amrutgawade/Portfolio"
              target="_blank"
              className="inline-block px-3 py-2 text-[12px] text-white bg-indigo-600 rounded hover:bg-indigo-500 duration-500"
              aria-label="Visit the Github Repository of Portfolio"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center h-60 w-64 mx-auto bg-indigo-500/30 p-4 rounded-md">
          <img
            src={Project2}
            alt="Dattakrupa-Jewellers"
            className="rounded-lg"
          />
          <p className="mt-2 font-medium">Dattakrupa Jewellers</p>
          <div className="flex gap-x-2 mt-4">
            <a
              href="https://dattakrupajewellers.in/"
              target="_blank"
              className="inline-block px-3 py-2 text-[12px] rounded border-none text-indigo-500 hover:text-white outline outline-1 hover:outline-white outline-indigo-500 duration-500"
              aria-label="Visit the Live Demo of Dattakrupa Jewellers"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/FreakDevelopers/dattakrupajewellers"
              target="_blank"
              className="inline-block px-3 py-2 text-[12px] text-white bg-indigo-600 rounded hover:bg-indigo-500 duration-500"
              aria-label="Visit the Github Repository of Dattakrupa Jewellers"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
