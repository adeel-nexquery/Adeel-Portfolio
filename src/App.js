import React, { useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Profile from "./components/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";

const App = () => {
  const aboutSectionRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800, // Set the animation duration
      once: true, // Only trigger the animation once
    });
  }, []);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResumeSection = () => {
    if (resumeSectionRef.current) {
      resumeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHomeSection = () => {
    if (homeSectionRef.current) {
      homeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjectSection = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <Header
          scrollToAboutSection={() => scrollToSection("aboutme")} // Scroll to about section
          scrollToResumeSection={() => scrollToSection("summary")} // Scroll to resume section
          scrollToHomeSection={() => scrollToSection("home")}
          scrollToProjectSection={() => scrollToSection("project")} // Scroll to home section
        />

        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                aboutSectionRef={aboutSectionRef}
                resumeSectionRef={resumeSectionRef}
                homeSectionRef={homeSectionRef}
                projectSectionRef={projectSectionRef}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/summary" element={<Profile />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
