import React, { useState } from "react";
import projects from "../data/projects";

function Portfolio() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "UIUX", "MERN", "Springboot"];
  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 dark:text-white text-center"
    >
      <p className="text-slate-500 text-sm mb-1 font-medium">My Recent work</p>
      <p className="text-indigo-500 text-3xl">Portfolio</p>
      <div className="flex justify-center items-center gap-4 lg:gap-x-8 mt-8 px-8 flex-wrap">
        {categories.map((item, id) => (
          <input
            key={id}
            type="button"
            className={`px-3 py-2 rounded-md outline outline-1 border-none ${
              category == item
                ? "bg-indigo-700 outline-indigo-700"
                : "outline-dashed"
            }`}
            onClick={(e) => setCategory(e.target.value)}
            value={item}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 lg:mx-32 mt-8 mx-8 gap-8 text-slate-900 dark:text-white">
        {projects
          .filter((item) =>
            category == "All" ? item : item.category.includes(category)
          )
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center mx-auto bg-indigo-500/30 p-4 rounded-md"
            >
              <img src={item.image} alt={item.title} className="rounded-lg" />
              <p className="mt-2 font-medium">{item.title}</p>
              <div className="flex gap-x-2 mt-4">
                <a
                  href={item.live}
                  target="_blank"
                  className="inline-block px-3 py-2 text-[12px] rounded border-none text-indigo-500 hover:text-white outline outline-1 hover:outline-white outline-indigo-500 duration-500"
                  aria-label="Visit the Live Demo of Portfolio"
                >
                  Live Demo
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  className="inline-block px-3 py-2 text-[12px] text-white bg-indigo-600 rounded hover:bg-indigo-500 duration-500"
                  aria-label="Visit the Github Repository of Portfolio"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Portfolio;
