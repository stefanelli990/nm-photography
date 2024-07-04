import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import InstagramSection from "./components/InstagramSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollToTop/>
      <Navbar open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <InstagramSection/>
      <Footer/>
    </>
  );
}

export default App;
