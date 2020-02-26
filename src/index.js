// Imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// App Imports
import App from "./components/App";

// Render App
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
