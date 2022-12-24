import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Second from "./Second";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  );
}
