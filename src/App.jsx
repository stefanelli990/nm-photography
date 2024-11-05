import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageAnimation from "./components/PageAnimation";

function App() {

  const location = useLocation(); 

  return (
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageAnimation><Home /></PageAnimation>} />
        <Route path="/portfolio" element={<PageAnimation><Portfolio /></PageAnimation>} />
        <Route path="/about" element={<PageAnimation><About /></PageAnimation>} />
        <Route path="/contact" element={<PageAnimation><Contact /></PageAnimation>} />
      </Routes>
      </AnimatePresence>
  );
}

export default App;
