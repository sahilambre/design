"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { VelocityScroll } from "./components/ui/VelocityScroll";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <VelocityScroll className="bg-white text-black dark:text-white dark:bg-black">
        Featured Projects.
      </VelocityScroll>
      <ProjectSection />
    </>
  );
}
