import React from "react";
import Testimonial1 from "../assets/imgs/team-1.jpg";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen py-16 text-white text-center relative"
    >
      <p className="text-slate-500 text-sm mb-1 font-medium">
        Reiview from my clients
      </p>
      <p className="text-indigo-500 text-3xl">Testimonials</p>
      <div className="flex flex-col items-center justify-center mx-auto mt-24 bg-indigo-500/20 outline outline-1 outline-indigo-500/30 rounded-3xl lg:p-8 p-4 lg:w-1/2 w-4/5">
        <img src={Testimonial1} alt="testimonial-1" className="h-14 w-14 rounded-full" />
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-semibold leading-relaxed">Unknown</p>
        <p className="mt-2 text-sm tracking-wider text-slate-900 dark:text-white leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          et tempore sint sunt quibusdam accusamus!
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
