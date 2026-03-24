import HeroSection from './components/HeroSection';
import CustomCursor from './components/CustomCursor';
import './App.css'
import AboutSection from './components/AboutSection';
import ServicesSection from './components/Services';
import StatsSection from './components/StatsSection';
import WorkflowSection from './components/WorkflowSection';
import WhyChooseUsSection from './components/WhyChooseusSection';
import FaqSection from './components/FaqSection';
import SmoothScrolling from './components/SmoothScrolling';
import FooterSection from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <SmoothScrolling>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <WorkflowSection />
      <WhyChooseUsSection />
      <FaqSection />
      <FooterSection />
    </SmoothScrolling>
  );
}