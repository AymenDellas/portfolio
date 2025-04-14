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
        <h1 className="font-bold text-5xl max-lg:text-3xl text-highlight">
          RECENT{" "}
          <span className="text-brighterHighlight/50 block">PROJECTS</span>
        </h1>
        <div className="flex flex-col justify-center my-8 space-y-4">
          {projects.slice(0, 3).map((project: any) => (
            <div
              key={project.id}
              className="flex max-lg:flex-col  space-x-4 transition-colors hover:bg-brighterHighlight/10 rounded-lg p-4 items-start relative group cursor-pointer"
            >
              <div
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="flex-shrink-0 w-full lg:w-1/3 h-56 bg-cover rounded-lg"
              ></div>
              <div className="mt-4 space-y-2">
                <h1 className="text-highlight font-bold text-xl flex flex-col">
                  {project.title}
                </h1>
                <p className="text-brighterHighlight/70 text-sm">
                  {project.description}
                </p>
                <a
                  href={`${project.link}`}
                  target="_blank"
                  className="mt-auto text-blue-500 hover:underline"
                >
                  Go Live <ArrowUpRight className="inline w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
