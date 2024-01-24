import React from "react";
import Profile from "../assets/imgs/team-1.jpg"

function About() {
  return (
    <section id="about" className="min-h-screen py-16 text-center">
      <p className="text-slate-500 text-sm mb-1 font-medium">Want to know</p>
      <p className="text-indigo-500 text-3xl">About Me</p>
      <div className="flex flex-col lg:flex-row justify-center p-8 md:mx-24">
        <img
          src={Profile}
          className="lg:h-[30rem] h-fit rounded-tr-3xl rounded-bl-3xl"
          alt="Profile"
        />
        <div className="lg:mx-8 mt-8 lg:mt-0 text-justify flex flex-col gap-5 text-slate-900 dark:text-slate-300 lg:leading-loose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure,
            officiis quia{" "}
            <span className="text-indigo-500">
              fugiat sapiente ipsam rem quos aspernatur quod fugit, vero ipsa
              inventore. Consequatur,
            </span>{" "}
            officiis totam non incidunt sequi
          </p>
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-indigo-500">
              consectetur adipisicing elit. Esse iure, officiis quia fugiat
              sapiente
            </span>{" "}
            ipsam rem quos aspernatur quod fugit, aliquid expedita consequuntur
            animi maxime aut recusandae est. Fuga dicta eum impedit repellat!
          </p>
          <p>
            <span className="text-indigo-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>{" "}
            Esse iure, officiis quia fugiat sapiente ipsam rem quos aspernatur
            quod fugit, aliquid expedita consequuntur animi maxime aut
            recusandae est.{" "}
            <span className="text-indigo-500">
              Fuga dicta eum impedit repellat!
            </span>
          </p>
          <p className="text-2xl text-indigo-400">
            LET'S TURN YOUR IDEA INTO A PRODUCT
          </p>
          <div>
            <a
              className="inline-block text-center px-6 py-4 bg-indigo-600 text-white rounded border-none hover:bg-indigo-700 hover:text-gray-300 duration-500"
              href="#contact"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
