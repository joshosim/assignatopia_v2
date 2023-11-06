import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CourseInformation from "./pages/CourseInformation";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <div className="max-w-5xl m-auto bg-gray-100 shadow-2xl">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/courseinformation/:id"
            exact
            element={<CourseInformation />}
          />
          <Route path="/payment-page" exact element={<PaymentPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
