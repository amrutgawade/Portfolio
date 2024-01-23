import React from "react";
import { SiMongodb, SiMysql, SiPostman, SiSpringboot, SiTailwindcss } from "react-icons/si";
import Skill1 from "../assets/icons/react.png";
import Skill2 from "../assets/icons/tailwind.png";
import Skill3 from "../assets/icons/figma.png";
import Skill4 from "../assets/icons/github.png";
import { FaBootstrap, FaCss3, FaDatabase, FaFigma, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNode, FaNodeJs, FaPhp, FaReact } from "react-icons/fa6";

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 text-white text-center">
      <p className="text-gray-400 text-sm mb-1 font-medium">
        What skills do I have
      </p>
      <p className="text-indigo-500 text-3xl">Experience</p>
      <div className="grid lg:grid-cols-7 grid-cols-3 gap-y-16 mt-16 lg:mx-24">
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaJava className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <SiSpringboot className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaReact className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <SiTailwindcss className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaGithub className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaFigma className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaBootstrap className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaHtml5 className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaCss3 className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaJs className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaNodeJs className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <SiMongodb className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <SiMysql className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaPhp className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <FaGitAlt className="text-8xl" />
        </div>
        <div className="flex items-center justify-center mx-auto p-8 bg-[rgb(99,102,241,0.3)] h-24 w-24 rounded-sm hover:bg-indigo-500/50">
          <SiPostman className="text-8xl" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
