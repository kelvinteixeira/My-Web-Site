import { Box, Typography } from "@mui/material";
import React from "react";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/Header";

export function Home() {
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
}
