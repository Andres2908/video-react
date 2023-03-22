import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const myScript = document.querySelector("script");

myScript.addEventListener("load", function () {
  const scriptWidth = myScript.getAttribute("width");
  // console.log(scriptWidth);
  console.log("hola");
});

root.render(
  <React.StrictMode>
    <App width="450" />
  </React.StrictMode>
);
