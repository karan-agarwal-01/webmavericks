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
import Preloader from './components/Loader';
import { useState } from 'react';
import AnimatedPortfolio from './pages/PortfolioPage';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
    <BrowserRouter>
      <SmoothScrolling isLoading={isLoading}>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<AnimatedPortfolio />} />
        </Routes>
        <FooterSection />
      </SmoothScrolling>
    </BrowserRouter>
    </>
  );
}