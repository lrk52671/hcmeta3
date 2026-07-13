import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Technology from "@/pages/Technology";
import About from "@/pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
