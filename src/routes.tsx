import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
