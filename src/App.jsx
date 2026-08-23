import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import {
  HeroSection,
  SkillSection,
  ProjectSection,
  AboutMe,
  Contact,
} from "./components";
import AdminMessages from "./components/AdminMessages"; 

function HomePage() {
  const [isExtend, setIsExtend] = useState(false);
  const scrollRefs = useRef({});

  return (
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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/messages" element={<AdminMessages />} />
    </Routes>
  );
}

export default App;