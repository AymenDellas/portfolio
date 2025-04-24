import React from "react";
import { Dot, MousePointer2, TextCursor } from "lucide-react";
const Hero = () => {
  return (
    <section id="hero" className="h-screen flex justify-center items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <div className="relative group flex flex-col items-center space-y-4 text-center max-lg:mx-2">
        <div className="absolute -top-10 -right-2 lg:-right-60 lg:-top-20 space-y-2 group-hover:-translate-x-28 group-hover:translate-y-36 transition-all duration-500 ease-in-out">
          <MousePointer2 fill="pink" color="black" />{" "}
          <span className=" w-28 bg-pink-500 h-8 px-6 py-1 rounded-2xl text-white">
            Welcome!
          </span>
        </div>
        <div className="absolute -bottom-18 lg:-left-64 lg:-bottom-36 space-y-2  group-hover:translate-x-60 group-hover:-translate-y-38 transition-all duration-500 ease-in-out">
          <TextCursor color="black" className="" />{" "}
          <span className=" w-28 bg-blue-500 h-8 px-6 py-1 rounded-2xl text-white">
            Let's Create
          </span>
        </div>

        <h1
          data-text
          className="max-lg:text-6xl text-7xl font-bold bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-transparent bg-clip-text py-2 w-fit"
        >
          Aymen Dellas
        </h1>
        <div className="text-lg ">
          I build websites that{" "}
          <div className="inline relative">
            <p className="inline">actually work</p>
            <span className="absolute bottom-0 left-0 right-0 -z-10 lg:w-0 h-1/2 max-lg:w-full bg-yellow-200 group-hover:w-full transition-all duration-500 ease-in-out " />
          </div>{" "}
          , not just look pretty
        </div>
        <ul className="flex items-center space-x-2">
          <li className="relative flex items-center -space-x-2 text-gray-600">
            <Dot size={40} />
            <p>Frontend Developer</p>
          </li>
          <li className="relative flex items-center -space-x-2 text-gray-600">
            <Dot size={40} />
            <p>Web Designer</p>
          </li>
          <li className="relative flex items-center -space-x-2 text-gray-600">
            <Dot size={40} />
            <p>UI Engineer</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
