import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { tools } from "../comps/main";

const ToolsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          document.dispatchEvent(
            new CustomEvent("sectionChange", {
              detail: { section: "tools" },
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
      id="stacks"
      className={`min-h-screen scroll-mt-20 ${isVisible ? "active" : ""}`}
    >
      <h1 className="text-7xl max-lg:text-5xl font-bold text-highlight">
        WHAT <span className="block text-brighterHighlight/50">I USE</span>
      </h1>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 my-8">
        {tools.map((tool: any) => (
          <motion.div
            className="flex bg-brighterHighlight/10 rounded-lg px-2 py-3 cursor-pointer items-center
                     hover:bg-brighterHighlight/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-brighterHighlight/20
                     transition-all duration-300 ease-out"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex-shrink-0">
              <img
                src={tool.imageUrl}
                alt=""
                className="w-24 max-lg:w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="ml-4 max-lg:ml-2 space-y-2">
              <h1 className="text-brighterHighlight font-bold">{tool.title}</h1>
              <p className="text-brighterHighlight/50">{tool.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ToolsSection;
