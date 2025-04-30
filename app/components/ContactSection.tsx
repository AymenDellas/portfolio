"use client";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  ExternalLink,
  Check,
  Instagram,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "dellasaymen@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {}
  };
  return (
    <section id="contact" className=" relative py-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <h1
        data-text
        className="max-lg:text-6xl text-7xl font-bold text-center bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-transparent bg-clip-text py-2 w-fit mx-auto"
      >
        Contact
      </h1>
      <article className="flex flex-col space-y-4 rounded-lg shadow-lg bg-white py-4 lg:px-8 max-lg:w-[90%] mx-auto w-[50%]">
        <h2 className="text-xl lg:text-2xl font-bold">👋 Let's Connect</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:space-x-2 gap-2  w-full">
          <div
            data-link
            onClick={handleCopy}
            className="bg-blue-500/20 rounded-lg shadow-lg border border-gray-700/20 p-4 flex flex-col justify-center  relative group hover-target"
          >
            <span className="flex flex-col items-center">
              <Mail />
              <p>Email</p>
            </span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              {copied ? (
                <Check size={15} className="text-gray-500" />
              ) : (
                <Copy size={15} className="text-gray-500" />
              )}
            </span>
            <div className="text-center">
              {" "}
              <p
                className={`text-sm text-gray-500 transition-all duration-300 ease-in-out ${
                  copied ? "opacity-0 scale-50" : "opacity-100 scale-100"
                }`}
              >
                Copy email!
              </p>
              <p
                className={`text-sm text-gray-500 transition-all duration-300 ease-in-out absolute bottom-2 left-0 right-0 ${
                  copied ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              >
                Copied!
              </p>
            </div>
          </div>
          <Link
            data-link
            href={"http://www.linkedin.com/in/dellasaymen"}
            target="_blank"
            className="bg-pink-500/20 rounded-lg shadow-lg border border-gray-700/20 p-4 flex flex-col justify-center relative group cursor-none"
          >
            <span className="flex flex-col  items-center">
              {" "}
              <Linkedin />
              <p>Linkedin</p>
            </span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              <ExternalLink size={15} className="text-gray-500" />
            </span>
          </Link>
          <Link
            data-link
            href={"https://github.com/AymenDellas"}
            target="_blank"
            className="bg-yellow-500/20 rounded-lg shadow-lg border border-gray-700/20 p-4 flex flex-col justify-center relative group cursor-none"
          >
            <span className="flex flex-col  items-center">
              {" "}
              <Github />
              <p>Github</p>
            </span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              <ExternalLink size={15} className="text-gray-500" />
            </span>
          </Link>
          <Link
            data-link
            href={"https://instagram.com/aymenx.dev"}
            target="_blank"
            className="bg-green-500/20 rounded-lg shadow-lg border border-gray-700/20 p-4 flex flex-col justify-center relative group cursor-none"
          >
            <span className="flex flex-col  items-center">
              {" "}
              <Instagram />
              <p>Instagram</p>
            </span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              <ExternalLink size={15} className="text-gray-500" />
            </span>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContactSection;
