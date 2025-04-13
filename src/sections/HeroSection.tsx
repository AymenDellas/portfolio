import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // You can also emit this state to parent component if needed
        if (entry.isIntersecting) {
          document.dispatchEvent(
            new CustomEvent("sectionChange", {
              detail: { section: "home" },
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
  gsap.to(".front", {
    duration: 1,
    y: "100%",
    opacity: 0,
    skewY: 10,
    stagger: {
      amount: 0.4,
    },
  });
  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className={`min-h-screen scroll-mt-36 ${isVisible ? "active" : ""}`}
      id="homee"
    >
      <div className="space-y-8">
        <div className="max-lg:text-center space-y-8">
          <div className="">
            <h1 className=".front text-5xl max-lg:text-3xl font-bold text-brighterHighlight">
              FRONT-END
            </h1>
            <span className="block text-5xl max-lg:text-3xl font-bold text-highlight/80">
              DEVELOPER
            </span>
          </div>
          <p
            className="text-xl mx-auto xl:mx-0 w-[80%] text-brighterHighlight/70"
            id="homee"
          >
            Driven to design seamless and captivating experiences,
            <br />
            dedicated to transforming concepts into <br /> polished, impactful
            solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-lg:items-center my-4 justify-between gap-3 relative max-lg:mx-4">
          <div className="card w-full flex-1 max-h-[200px] aspect-video rounded-xl bg-pattern bg-amber-800 flex flex-col px-2 space-y-6 shadow-lg py-4">
            <img src="/design.svg" alt="" className="w-12" />
            <h1 className="text-3xl font-bold text-brighterHighlight">
              INNOVATIVE DESIGN, INTERACTIVE UX
            </h1>
          </div>
          <div className="card w-full flex-1 max-h-[200px] aspect-video rounded-xl bg-pattern2 bg-[length:30%_30%] bg-[#86A788] flex flex-col px-2 py-4 space-y-6 shadow-lg">
            <img src="/concept.svg" alt="" className="w-12" />
            <h1 className="text-3xl font-bold text-secondary">
              CONCEPT TO PRODUCT, DONE RIGHT
            </h1>
            <div className="blob absolute aspect-[9/16] w-52 rounded-full bottom-0 left-0 -z-10 bg-brighterHighlight/40"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
