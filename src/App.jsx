import { Routes, Route } from "react-router";
//import { useState } from "react";
import "./App.css";
import {
  HeroSection,
  SkillSection,
  ProjectSection,
  AboutMe,
} from "./components";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <HeroSection />
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
