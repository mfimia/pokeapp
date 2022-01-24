import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DarkState from "./context/darkMode/DarkState";

ReactDOM.render(
  <DarkState>
    <App />
  </DarkState>,
  document.getElementById("root")
);
