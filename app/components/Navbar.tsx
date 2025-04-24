"use client";
import React, { useState } from "react";
import { Mail, Layers, User, Folder, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className="fixed z-50">
      {/* Desktop Navigation */}
      <article className="h-screen lg:flex justify-center hidden z-50">
        <ul className="flex flex-col justify-center h-fit my-auto ml-24 space-y-3 py-2 rounded-full  p-1 bg-zinc-800 border border-white/10 text-white">
          <Link
            href="#hero"
            className={`p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out ${
              pathname === "/#hero" ? "bg-white/20" : ""
            }`}
          >
            <Home />
          </Link>
          <Link
            href="#projects"
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out"
          >
            <Folder />
          </Link>
          <Link
            href="#skills"
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out"
          >
            <Layers />
          </Link>
          <Link
            href="#contact"
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out"
          >
            <Mail />
          </Link>
        </ul>
      </article>
      {/* Mobile Navigation */}
      <article className="lg:hidden top-6 right-6 fixed">
        <div
          onClick={() => setIsOpened(!isOpened)}
          className="relative flex flex-col justify-between space-y-1 p-2 bg-gray-800/5 rounded-full border border-gray-800/20"
        >
          <span
            className={` w-6 h-0.5 bg-black rounded-full transition-all duration-500 ease-in-out  ${
              isOpened ? "rotate-45 translate-y-[6px]" : "rotate-0"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black rounded-full transition-opacity duration-500 ease-in-out ${
              isOpened ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={` w-6 h-0.5 bg-black rounded-full transition-all duration-500 ease-in-out ${
              isOpened ? "-rotate-45 -translate-y-[6px]" : "rotate-0"
            }`}
          ></span>
        </div>
        <div
          className={`${
            isOpened ? "w-38 h-43 p-2" : "w-0 h-0 border-none"
          } bg-black/80 backdrop-blur-lg absolute right-9 rounded-lg border border-gray-700/80 transition-all duration-500 ease-in-out `}
        >
          <ul
            className={`flex flex-col text-white transition-all duration-700 ease-in-out ${
              isOpened
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <Link
              href="#hero"
              className={`p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out flex items-center space-x-2 ${
                pathname === "/#hero" ? "bg-white/20" : ""
              }`}
            >
              <Home />
              <p>Home</p>
            </Link>
            <Link
              href="#projects"
              className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out flex items-center space-x-2"
            >
              <Folder />
              <p>Projects</p>
            </Link>
            <Link
              href="#skills"
              className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out flex items-center space-x-2"
            >
              <Layers />
              <p>Skills</p>
            </Link>
            <Link
              href="#contact"
              className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 ease-out flex items-center space-x-2"
            >
              <Mail />
              <p>Contact</p>
            </Link>
          </ul>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
