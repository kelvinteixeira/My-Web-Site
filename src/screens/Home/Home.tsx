import React from "react";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

export function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
