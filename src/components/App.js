import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Second from "./Second";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}
