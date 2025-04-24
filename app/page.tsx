import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import AboutMe from "./components/AboutMe";
const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default page;
