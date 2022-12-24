import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./components/App";
import Home from "./components/Home";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <Home />
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);
