import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Conatct";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Services from "./pages/Services";
import HotelAmenities from "./pages/HotelAmenities";
import TravelCareKit from "./pages/TravelCareKit";
import PrivateLabel from "./pages/PrivateLabel";
import Product from "./pages/Product";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsApp />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hotel-amenities" element={<HotelAmenities />} />
        <Route path="/travel-care-kits" element={<TravelCareKit />} />
        <Route path="/private-label" element={<PrivateLabel />} />
        <Route path="/products" element={<Product />} />
      </Routes>

      <Footer />
    </Router>
  );
}
