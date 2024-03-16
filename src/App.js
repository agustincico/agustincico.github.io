//@ts-nocheck
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ClassroomExperiences from "./ClassroomExperiences";
import NewsBlog from "./NewsBlog";
import Tutorials from "./Tutorials";
import ContactUs from "./ContactUs";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/classroom-experiences"
            element={<ClassroomExperiences />}
          />
          <Route path="news-blog" element={<NewsBlog />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}
