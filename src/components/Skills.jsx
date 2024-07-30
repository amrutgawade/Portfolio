import React from "react";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-16 px-8 dark:text-white text-center"
    >
      <p className="text-slate-500 text-sm mb-1 font-medium">
        What skills do I have
      </p>
      <p className="text-indigo-500 text-3xl">Experience</p>
      <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-y-4 lg:gap-y-8 gap-x-4 lg:gap-x-8 mt-8 lg:mt-16 lg:mx-24">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center mx-auto py-4 lg:py-6 bg-indigo-500/30 h-auto w-full rounded-sm hover:bg-indigo-500/50 group"
          >
            <item.skill className="text-3xl lg:text-4xl group-hover:scale-125 duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
