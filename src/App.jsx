import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import {
  HeroSection,
  SkillSection,
  ProjectSection,
  AboutMe,
} from "./components";

function App() {
  const [isExtend, setIsExtend] = useState(false);
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <HeroSection isExtend = {isExtend} setIsExtend = {setIsExtend} />
            <SkillSection />
            <ProjectSection />
            <AboutMe />
          </>
        }
      />
    </Routes>
  );
}

export default App;
