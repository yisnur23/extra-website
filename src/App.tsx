import LayoutContainer from "@/layout/LayoutContainer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import About from "./pages/About";

export function App() {
  return (
    <Router>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
}

export default App;
