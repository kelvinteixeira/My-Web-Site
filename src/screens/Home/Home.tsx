import React from "react";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

export function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
}
