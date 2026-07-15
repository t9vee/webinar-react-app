import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Webinar.css";   // global styles
import "./styles/variables.css"; // CSS variables

// Create root and render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
