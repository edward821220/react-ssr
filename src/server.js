import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import App from "./components/App";
import Home from "./components/Home";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(
    <Home />
    // <StaticRouter location={req.url}>
    //   <App />
    // </StaticRouter>
  );
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SSR</title>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
  `;
  res.send(html);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
