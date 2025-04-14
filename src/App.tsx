import React, { useState } from "react";

import Navbar from "./comps/Navbar";
import ProfileCard from "./sections/ProfileCard";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ToolsSection from "./sections/ToolsSection";
import ContactSection from "./sections/ContactSection";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./comps/LoadingScreen";
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen setLoading={setLoading} />}
      </AnimatePresence>
      <main>
        <Navbar />
        <div className="lg:mx-20 xl:mx-32 2xl:mx-56 mt-16 mx-8 justify-center flex flex-row max-lg:flex-col">
          <div className="flex max-lg:flex-col max-lg:space-x-0 space-x-16">
            <div>
              <ProfileCard />
            </div>
            <main>
              <HeroSection />
              <ProjectsSection />
              <ToolsSection />
              <ContactSection />
            </main>
          </div>
        </div>
        <Analytics />
      </main>
    </>
  );
};

export default App;
