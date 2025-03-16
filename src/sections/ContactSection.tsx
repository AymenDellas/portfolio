import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import Form from "../comps/Form";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          document.dispatchEvent(
            new CustomEvent("sectionChange", {
              detail: { section: "contact" },
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
      id="contactt"
      className={`min-h-screen scroll-mt-20 ${isVisible ? "active" : ""}`}
    >
      <div>
        <h1 className="text-7xl font-bold text-highlight">
          LET'S <span className="block text-brighterHighlight/50">CONNECT</span>
        </h1>

        <Form />
      </div>
    </motion.section>
  );
};

export default ContactSection;
