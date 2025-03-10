import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import PostPage from "./pages/Blog/PostPage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
