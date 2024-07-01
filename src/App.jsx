import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AnimatedCursor from "react-animated-cursor";
import Menu from "./components/Menu";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'white',
          mixBlendMode: 'exclusion'
        }}
        outerStyle={{
          border: '1px solid white',
          mixBlendMode: 'exclusion'
        }}
      />
      <Navbar open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
