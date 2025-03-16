import React, { useEffect, useState } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleSectionChange = (e: any) => {
      setActiveSection(e.detail.section);
    };

    document.addEventListener("sectionChange", handleSectionChange);

    return () => {
      document.removeEventListener("sectionChange", handleSectionChange);
    };
  }, []);

  // Tippy tooltips
  useEffect(() => {
    tippy("#home", {
      content: "Home",
      animation: "shift-away",
      arrow: false,
    });
    tippy("#projects", {
      content: "Projects",
      animation: "shift-away",
      arrow: false,
    });
    tippy("#stack", {
      content: "Tech Stack",
      animation: "shift-away",
      arrow: false,
    });
    tippy("#contact", {
      content: "Contact",
      animation: "shift-away",
      arrow: false,
    });
  }, []); // Run once on mount

  return (
    <div className="flex p-4 mt-4 rounded-xl bg-secondary shadow-2xl w-fit mx-auto sticky top-4 z-50 flex-shrink-0">
      <ul className="flex space-x-8 mx-2">
        <li id="home" className={activeSection === "home" ? "active" : ""}>
          <a href="#homee">
            <img
              src="/home.svg"
              alt="Home"
              className={`transition-all duration-300 ${
                activeSection === "home"
                  ? "scale-125 opacity-100"
                  : "opacity-60"
              }`}
            />
          </a>
        </li>
        <li
          id="projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          <a href="#projectss">
            <img
              src="/projects.svg"
              alt="Projects"
              className={`transition-all duration-300 ${
                activeSection === "projects"
                  ? "scale-125 opacity-100"
                  : "opacity-60"
              }`}
            />
          </a>
        </li>
        <li id="stack" className={activeSection === "tools" ? "active" : ""}>
          <a href="#stacks">
            <img
              src="/techStack.svg"
              alt="Tech Stack"
              className={`transition-all duration-300 ${
                activeSection === "tools"
                  ? "scale-125 opacity-100"
                  : "opacity-60"
              }`}
            />
          </a>
        </li>
        <li
          id="contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          <a href="#contactt">
            <img
              src="/Contact.svg"
              alt="Contact"
              className={`transition-all duration-300 ${
                activeSection === "contact"
                  ? "scale-125 opacity-100"
                  : "opacity-60"
              }`}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
