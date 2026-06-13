import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
// import ExperienceSection from "../components/ExperienceSection";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.section === "projects") {
      const el = document.getElementById("projects");

      if (el) {
        window.scrollTo(0, el.offsetTop);
      }

      // Clear state after scrolling
      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col">
      <section id="about">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="education" className="scroll-mt-24">
        <EducationSection />
      </section>

      {/* <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section> */}

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;
