"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        setIsProjectHovered(true);
      } else if (target.closest("[data-link]")) {
        setIsLinkHovered(true);
      } else if (target.closest("[data-text]")) {
        setIsTextHovered(true);
      } else {
        setIsTextHovered(false);
        setIsLinkHovered(false);
        setIsProjectHovered(false);
      }
    };
    window.addEventListener("mousemove", handleHover);
    return () => window.removeEventListener("mousemove", handleHover);
  }, []);
  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "all 0.15s ease-out",
        willChange: "transform",
      }}
      className={`fixed bg-white pointer-events-none rounded-full  transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-[99999] max-lg:hidden ${
        isProjectHovered ? "w-36 h-12" : " w-5 h-5 "
      } ${isLinkHovered && "w-24 h-24"} ${isTextHovered && "w-14 h-14"}`}
    >
      {isProjectHovered && (
        <span className="flex justify-center items-center font-bold h-full">
          View Project
        </span>
      )}
    </div>
  );
};

export default CustomCursor;
