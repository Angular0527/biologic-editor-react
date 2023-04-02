import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./assets/styles/tailwind.css";

import Index from "./views/Index.js";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Index />} />

      <Route path="*" element={<Navigate to="not-found"/>} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

