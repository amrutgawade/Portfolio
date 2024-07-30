import React from "react";
import Profile from "../assets/imgs/team-1.jpg";

function About() {
  return (
    <section id="about" className="min-h-screen py-16 text-center">
      <p className="text-slate-500 text-sm mb-1 font-medium">Want to know</p>
      <p className="text-indigo-500 text-3xl">About Me</p>
      <div className="flex flex-col lg:flex-row justify-center px-8 mt-8 md:mx-24">
        <img
          src={Profile}
          className="lg:h-[24rem] h-fit rounded-tr-3xl rounded-bl-3xl outline outline-1 outline-indigo-500/30"
          alt="Profile"
        />
        <div className="lg:ml-16 mt-8 lg:mt-0 text-justify flex flex-col items-start justify-start gap-5 text-slate-600 dark:text-slate-300 lg:leading-loose font-medium">
          <p>
            Hello! I'm Amrut Gawade, a{" "}
            <span className="text-indigo-500">Full-stack Web Developer</span>{" "}
            with a{" "}
            <span className="text-indigo-500">
              Bachelor's Degree in Computer Engineering
            </span>{" "}
            at Gharda Institute of Technology,{" "}
            <span className="text-indigo-500">Mumbai University.</span> I'm
            passionate about crafting seamless digital experiences and solving
            real-world problems through innovative web solutions.
          </p>
          <p>
            Throughout my academic and professional journey, I've developed a
            robust skill set in{" "}
            <span className="text-indigo-500">
              HTML, CSS, and JavaScript, with specialized expertise in Java
              full-stack development and ReactJS.
            </span>{" "}
            My proficiency in both frontend and backend frameworks allows me to
            create dynamic, responsive, and user-centric applications.
          </p>
          <p>
            I'm always eager to{" "}
            <span className="text-indigo-500">learn and stay updated </span>
            with the{" "}
            <span className="text-indigo-500">latest technologies</span> in web
            development. If you're interested in collaboration or discussing
            exciting tech ideas, feel free to reach out. Let's{" "}
            <span className="text-indigo-500">connect and create</span>{" "}
            something extraordinary together!
          </p>
          <p className="text-[1.2rem] font-medium md:text-xl text-indigo-500">
            LET'S TURN YOUR IDEA INTO A PRODUCT
          </p>
          <a
            className="inline-block text-center px-6 py-4 bg-indigo-500 text-white rounded border-none hover:bg-indigo-600 hover:text-slate-200 duration-500 leading-normal"
            href="#contact"
            aria-label="Visit the Contact Section"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
