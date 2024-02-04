import "bootstrap/dist/css/bootstrap.min.css";  // Import react-bootstrap here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import About from "./pages/About.js";
import './App.css';
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import { AnimatePresence } from "framer-motion";
import Starter from "./pages/Starter.js";



function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Starter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
