"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dot, Layers } from "lucide-react";
import ContactSection from "./ContactSection";

const SkillsSection = () => {
  const icons = [
    { src: "/CSS3.svg", alt: "CSS3" },
    { src: "/Firebase.svg", alt: "Firebase" },
    { src: "/Git.svg", alt: "Git" },
    { src: "/Github.svg", alt: "Github" },
    { src: "/HTML5.svg", alt: "HTML5" },
    { src: "/React.svg", alt: "React" },
    { src: "/Next.js.svg", alt: "Next.js" },
    { src: "/Javascript.svg", alt: "Javascript" },
    { src: "/Supabase.svg", alt: "Supabase" },
    { src: "/TailwindCSS.svg", alt: "TailwindCSS" },
    { src: "/TypeScript.svg", alt: "TypeScript" },
  ];

  const getRandomPosition = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const softSkills = [
    "Responsive Design",
    "Performance Optimization",
    "Accessibility",
    "Cross-browser Compatibility",
    "Problem Solving",
    "Team Collaboration",
  ];
  return (
    <section
      id="skills"
      className="relative py-16 flex flex-col space-y-18 -screen"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <h1
        data-text
        className="text-7xl font-bold text-center bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-transparent bg-clip-text w-fit mx-auto"
      >
        Skills & Stack
      </h1>
      <section className="flex flex-col justify-center lg:flex-row max-lg:space-y-4 mx-4 lg:space-x-8">
        <article className="min-h-[400px] border border-black/20 rounded-lg  relative overflow-hidden flex flex-col bg-white">
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]  pointer-events-none z-20"></div>
          {icons.map((icon, index) => {
            const xPositions = [
              getRandomPosition(320),
              getRandomPosition(320),
              getRandomPosition(320),
              getRandomPosition(320),
            ];

            const yPositions = [
              getRandomPosition(450),
              getRandomPosition(450),
              getRandomPosition(450),
              getRandomPosition(450),
            ];

            return (
              <motion.div
                key={index}
                initial={{ x: xPositions[0], y: yPositions[0] }}
                animate={{
                  x: xPositions,
                  y: yPositions,
                }}
                transition={{
                  duration: 20 + (index % 5),
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1],
                }}
                className="absolute"
              >
                <Image alt={icon.alt} width={45} height={45} src={icon.src} />
              </motion.div>
            );
          })}
          <div className="mt-auto backdrop-blur-lg bg-gradient-to-t from-transparent to-white p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Tech Stack</h2>{" "}
              <span className="p-2 bg-black/20 rounded-full w-fit">
                <Layers size={30} />
              </span>
            </div>

            <p className="text-lg text-gray-900">
              Modern web development tools and frameworks I specialize in
            </p>
          </div>
        </article>
        <article className=" border border-black/20 rounded-lg  relative overflow-hidden flex flex-col justify-between p-4 space-y-8 bg-white">
          <span className="w-1/2 h-1/2 absolute top-0 left-0 -translate-4 bg-blue-600/20 blur-3xl z-0"></span>
          <span className="w-1/2 h-1/2 absolute bottom-0 right-0 translate-4 bg-pink-600/20 blur-3xl z-0"></span>
          <h1 className="text-2xl font-bold p-2 z-10">Soft Skills</h1>
          <ul className="space-y-2 grid grid-cols-2 z-10">
            {softSkills.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center space-x-2 backdrop-blur-lg bg-white/40 border border-gray-700/30 shadow-lg rounded-xl p-2 w-fit"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <li className="">{skill}</li>
                </div>
              );
            })}
          </ul>
          <p className="text-lg text-gray-900 backdrop-blur-2xl z-10">
            Beyond code, I bring these essential skills to every project
          </p>
        </article>
      </section>
    </section>
  );
};

export default SkillsSection;
