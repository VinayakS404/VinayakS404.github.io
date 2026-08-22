import { Routes, Route } from "react-router";
import { useState, useRef } from "react";
import "./App.css";

import {
  HeroSection,
  SkillSection,
  ProjectSection,
  AboutMe,
  Contact,
} from "./components";

function App() {
  const [isExtend, setIsExtend] = useState(false);
  const scrollRefs = useRef({});

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <section ref={(el) => (scrollRefs.current.home = el)}>
              <HeroSection
                isExtend={isExtend}
                setIsExtend={setIsExtend}
                scrollRefs={scrollRefs}
              />
            </section>

            <section ref={(el) => (scrollRefs.current.skill = el)}>
              <SkillSection />
            </section>

            <section ref={(el) => (scrollRefs.current.about = el)}>
              <AboutMe />
            </section>

            <section ref={(el) => (scrollRefs.current.project = el)}>
              <ProjectSection />
            </section>

            <section ref={(el) => (scrollRefs.current.contact = el)}>
              <Contact />
            </section>
          </>
        }
      />
    </Routes>
  );
}

export default App;