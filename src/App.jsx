import './App.css'
import Navbar from './components/Navbar';
import SmoothScrolling from "./components/SmoothScrolling";
import CustomCursor from './components/CustomCursor';
import FooterSection from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicePage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrolling>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterSection />
      </SmoothScrolling>
    </BrowserRouter>
  );
}