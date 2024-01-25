import React from "react";
import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa6";

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 px-8 dark:text-white text-center">
      <p className="text-slate-500 text-sm mb-1 font-medium">
        What skills do I have
      </p>
      <p className="text-indigo-500 text-3xl">Experience</p>
      <div className="grid lg:grid-cols-7 grid-cols-3 gap-y-4 lg:gap-y-8 gap-x-4 mt-16 lg:mx-24">
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaJava className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <SiSpringboot className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaReact className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <SiTailwindcss className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaGithub className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaFigma className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaBootstrap className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaHtml5 className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaCss3 className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaJs className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaNodeJs className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <SiMongodb className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <SiMysql className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaPhp className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <FaGitAlt className="text-8xl group-hover:scale-125 duration-500" />
        </div>
        <div className="flex items-center justify-center mx-auto p-10 bg-indigo-500/30 h-20 w-28 rounded-sm hover:bg-indigo-500/50 group">
          <SiPostman className="text-8xl group-hover:scale-125 duration-500" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
