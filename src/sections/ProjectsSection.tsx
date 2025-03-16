import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

import { ArrowUpRight } from "lucide-react";

import { projects } from "../comps/main";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          document.dispatchEvent(
            new CustomEvent("sectionChange", {
              detail: { section: "projects" },
            })
          );
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      id="projectss"
      className={`min-h-screen scroll-mt-20 ${isVisible ? "active" : ""}`}
    >
      <div>
        <h1 className="font-bold text-7xl text-highlight">
          RECENT{" "}
          <span className="text-brighterHighlight/50 block">PROJETS</span>
        </h1>
        {projects.map((project: any) => (
          <div
            onClick={() => window.open(`${project.link}`, "_blank")}
            className="flex transition-colors hover:bg-brighterHighlight/10 rounded-lg my-8 p-4 items-center relative group cursor-pointer "
          >
            <ArrowUpRight className="absolute w-12 top-3 right-3 text-brighterHighlight group-hover:top-2 group-hover:-right-1 duration-300 transition-all" />
            <div
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex-shrink-0 w-24 aspect-square bg-cover bg-left rounded-lg"
            ></div>
            <div className="mx-8 max-lg:mx-4 space-y-4">
              <h1 className="text-highlight font-bold text-xl">
                {project.title}
              </h1>
              <p className="text-brighterHighlight/50">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
