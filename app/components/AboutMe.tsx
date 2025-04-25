import { Book, Coffee, Globe } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section className="min-h-screen relative mb-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <h1
        data-text
        className="max-lg:text-6xl text-7xl font-bold text-center bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-transparent bg-clip-text py-2 w-fit mx-auto"
      >
        About Me
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center  lg:space-x-20 w-[95%] lg:w-[85%] xl:w-[70%] mx-auto">
        <article className="sm:w-[380px] w-[350px] lg:w-[450px] 2xl:w-[550px] bg-white shadow-lg rounded-lg p-6 space-y-8">
          <div>
            <span className="bg-blue-500/20 rounded-full px-3 py-1">
              Who I Am
            </span>
          </div>
          <h2 className="text-2xl font-bold">The Guy Shipping This Stuff</h2>
          <div className="space-y-4">
            <p>I'm Aymen, a front-end developer from Algeria.</p>
            <p>
              I build clean, functional websites that just work. I'm
              self-taught, focused on real-world use, and always learning to
              level up.
            </p>
            <p>
              When I'm not coding, I’m probably watching something chill or
              recharging for the next build.
            </p>
          </div>
          <div className="text-gray-700">INTERESTS</div>
          <div className="flex flex-wrap gap-2">
            <p className="bg-gray-600/10 rounded-full px-3 py-1 text-sm border border-gray-950/30">
              Tech Startups
            </p>
            <p className="bg-gray-600/10 rounded-full px-3 py-1 text-sm border border-gray-950/30">
              UI/UX
            </p>
            <p className="bg-gray-600/10 rounded-full px-3 py-1 text-sm border border-gray-950/30">
              Web Animation
            </p>
            <p className="bg-gray-600/10 rounded-full px-3 py-1 text-sm border border-gray-950/30">
              Minimalism
            </p>
          </div>
        </article>
        <article className="sm:w-[380px] w-[350px] lg:w-[450px] 2xl:w-[550px] bg-white shadow-lg rounded-lg p-6 space-y-8 mt-36">
          <div>
            <span className="bg-pink-500/20 rounded-full px-3 py-1">
              What I Do
            </span>
          </div>
          <h2 className="text-2xl font-bold">Current Focus</h2>
          <div className="space-y-4">
            <p>
              Currently learning backend and working on Revline, my agency
              project. I'm on a journey to become a more well-rounded developer.
            </p>
            <p>
              Always trying to level up and build better stuff. I believe in
              continuous improvement and learning something new every day.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-gray-700">PHILOSOPHY</span>
            <span className="flex items-center space-x-2">
              <Coffee className="text-pink-400" />
              <p>Less is more - simplicity over complexity</p>
            </span>
            <span className="flex items-center space-x-2">
              <Globe className="text-pink-400" />
              <p>Building for users first, technology second</p>
            </span>
            <span className="flex items-center space-x-2">
              <Book className="text-pink-400" />
              <p>Never stop learning and experimenting</p>
            </span>
          </div>
        </article>
      </section>
    </section>
  );
};

export default AboutMe;
