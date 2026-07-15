import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Webinar.css";   // global styles
import "./styles/variables.css"; // CSS variables

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement("div", { style: { fontFamily: "Arial", textAlign: "center", marginTop: "50px" } },
    React.createElement("h1", null, "Welcome to Webinar App"),
    React.createElement("p", null, "Register and join your session instantly!")
  )
);
