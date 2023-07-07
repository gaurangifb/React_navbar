import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Services } from "./components/pages";

//given paths here  

const App = () => {
  return (
    <div className="App">

      <Navbar />

      <Routes>
      {/* which eleme	nt needs to be rendered on each path */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;
