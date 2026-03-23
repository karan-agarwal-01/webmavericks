import HeroSection from './components/HeroSection';
import CustomCursor from './components/CustomCursor';
import Lenis from "lenis";
import gsap from "gsap";
import { useEffect } from 'react';
import RainbowMarquee from './components/RainbowMarquee';
import './App.css'
import AboutSection from './components/AboutSection';
import ServicesSection from './components/Services';

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });

  }, []);

  return (
    <>
    <CustomCursor />
    <HeroSection />
    <RainbowMarquee />
    <AboutSection />
    <ServicesSection />
    </>
  );
}