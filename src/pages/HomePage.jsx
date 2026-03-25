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
        <AboutSection text1={"Empowering brands to grow faster"} text2={"through smart digital strategies"} para1={"We help businesses transform ideas into impactful digital experiences. From strategy to execution, our focus is on creating solutions that not only look great but perform exceptionally"} para2={"Our team blends creativity with technology to deliver tailored solutions that align with your goals, ensuring long-term growth and measurable results."} img1={parralaxImg} img2={rightImg} />
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