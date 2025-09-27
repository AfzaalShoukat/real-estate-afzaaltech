import React from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";
import Testimonails from "./Components/Testimonails";
import Contact from "./Components/Contact";

import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full overflow:hidden">
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonails />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
