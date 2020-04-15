// Imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

// App Imports
import App from "./App";

// Render App
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
