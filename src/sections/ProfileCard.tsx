import React, { useEffect, useRef } from "react";

import { motion } from "motion/react";
import { Github, Instagram, Linkedin } from "lucide-react";
import VanillaTilt from "vanilla-tilt";
import { tags } from "../comps/main";
const ProfileCard = () => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        "max-glare": 0.5,
        reverse: true,
      });
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col max-lg:items-center max-lg:ml-0  min-h-full"
    >
      <div
        ref={tiltRef}
        className="w-80 max-lg:w-[600px] max-md:w-[350px] h-fit max-lg:h-fit bg-brighterHighlight rounded-xl flex items-start flex-shrink-0 overflow-hidden px-4 py-8 top-16 mb-8 sticky"
      >
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-3xl font-poppins font-[750] text-center rounded-sm border-primary px-1 border-l-4 w-fit mx-auto">
            Aymen Dellas
          </h1>

          <div className="flex bg-[rgba(60,255,0,0.08)] drop-shadow-2xl px-2 rounded-xl my-4 ring-2 ring-[#3BFF00] z-50 w-fit mx-auto">
            <img
              src="/status.svg"
              alt=""
              className="w-4 opacity-70 animate-ping"
              draggable={false}
            />

            <span className="text-primary/70 ">Open for work</span>
          </div>

          <img
            src="/public/pngs/circle.png"
            alt=""
            className="circle absolute top-[80%] -left-56 max-lg:-left-80 max-md:-left-56 bottom-0 scale-[1.2] z-0"
          />
          <div className="flex flex-wrap justify-center my-2 ">
            {tags.map((tag) => (
              <div
                className={`flex bg-highlight/50 drop-shadow-2xl px-2 rounded-xl m-2 ring-2 ring-secondary `}
              >
                <span className="text-primary/70">{tag.title}</span>
                <img
                  src="/dot.svg"
                  alt=""
                  className="w-4 opacity-70"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <p className="my-2 text-secondary/80 z-50 w-fit mx-auto text-center">
            A creative developer passionate about building innovative and
            impactful web experiences.
          </p>
          <div className="flex space-x-1 items-center">
            <Github className=" text-secondary" size={25} />
            <Instagram className=" text-secondary" size={25} />*
            <Linkedin className=" text-secondary" size={25} />
          </div>
          <a
            href="#contactt"
            className=" bg-[length:200%_200%] flex items-center duration-500 space-x-2 cursor-pointer bg-right hover:bg-left  z-50 bg-primary bg-gradient-to-r from-secondary via-amber-800 to-secondary rounded-lg text-brighterHighlight shadow-2xl drop-shadow-2xl transition-all px-4 py-2"
          >
            <p className="">Get in Touch</p>
            <img src="/arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
