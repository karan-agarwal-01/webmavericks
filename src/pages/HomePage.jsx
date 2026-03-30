import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/Services";
import StatsSection from "../components/StatsSection";
import WorkflowSection from "../components/WorkflowSection";
import WhyChooseUs from "../components/WhyChooseusSection";
import FaqSection from "../components/FaqSection";
import LetstakSection from "../components/LetstakSection";
import parralaxImg from "../assets/images/Business.jpg";
import rightImg from "../assets/images/abd.jpg";

const HomePage = () => {

    return (
        <>
        <HeroSection />
        <AboutSection text1={"Helping businesses grow with clarity"} text2={"through smart and scalable digital solutions"} para1={"We partner with businesses to turn ideas into meaningful digital products. From understanding your vision to building and launching it, we focus on creating solutions that are not just visually impressive, but built to perform in the real world."} para2={"Our team combines thoughtful design with modern technology to craft solutions tailored to your goals. Every project we build is designed for scalability, performance, and long-term impact—so your business keeps growing without limits."} img1={parralaxImg} img2={rightImg} />
        <ServicesSection />
        <StatsSection />
        <WorkflowSection />
        <WhyChooseUs />
        <FaqSection />
        <LetstakSection />
        </>
    );
}

export default HomePage;