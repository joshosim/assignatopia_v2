import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CourseInformation from "./pages/CourseInformation";
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/courseinformation/:id"
            exact
            element={<CourseInformation />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
