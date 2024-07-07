import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import InstagramSection from "./components/InstagramSection";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); 

  return (
    <>
      <ScrollToTop/>
      <Navbar open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <InstagramSection/>
      <Footer/>
    </>
  );
}

export default App;
