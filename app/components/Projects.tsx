import React from "react";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative  min-h-screen ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <h1
        data-text
        className="max-lg:text-6xl text-7xl font-bold text-center bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-transparent bg-clip-text py-2 w-fit mx-auto"
      >
        Projects
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center  lg:space-x-20 w-[95%] lg:w-[85%] xl:w-[70%] mx-auto">
        <article data-cursor-hover className=" mt-64 max-lg:m-4 ">
          {" "}
          {projects.slice(2, 4).map((project) => {
            return (
              <div
                key={project.id}
                className="projectCard sm:w-[380px] w-[350px] lg:w-[450px] 2xl:w-[550px] p-8 bg-white rounded-lg shadow-lg my-8 space-y-4 max-lg:mx-auto 
"
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`${project.color} rounded-full px-2 py-1 text-sm`}
                  >
                    {project.category}
                  </p>
                  <code>{project.id}</code>
                </div>

                <h2 className="text-2xl font-bold">{project.title}</h2>

                <p>{project.description}</p>

                <h4 className="text-sm">FEATURES</h4>
                <div>
                  {project.features.map((feature, i) => {
                    return (
                      <ul key={i} className="flex flex-col">
                        <li className="list-disc ml-8">{feature}</li>
                      </ul>
                    );
                  })}
                </div>
                <h4 className="text-sm">TECH</h4>
                <div className="flex items-center justify-between">
                  <ul className="flex items-center space-x-4">
                    {project.technologies.split(",").map((tech, i) => {
                      return <li>{tech}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </article>
        <article data-cursor-hover className=" max-lg:m-4">
          {projects.slice(0, 2).map((project) => {
            return (
              <div
                key={project.id}
                className="projectCard sm:w-[380px] w-[350px] lg:w-[450px] 2xl:w-[550px] p-8 bg-white rounded-lg shadow-lg my-8 space-y-4 max-lg:mx-auto"
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`${project.color} rounded-full px-2 py-1 text-sm`}
                  >
                    {project.category}
                  </p>
                  <code>{project.id}</code>
                </div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p>{project.description}</p>

                <h4 className="text-sm">FEATURES</h4>
                <div>
                  {project.features.map((feature, i) => {
                    return (
                      <ul key={i} className="flex flex-col">
                        <li className="list-disc ml-8">{feature}</li>
                      </ul>
                    );
                  })}
                </div>
                <h4 className="text-sm">TECH</h4>
                <div className="flex items-center justify-between">
                  <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 space-x-4">
                    {project.technologies.split(",").map((tech, i) => {
                      return <li key={i}>{tech}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default Projects;
