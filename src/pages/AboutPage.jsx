import AboutHeroSection from "../components/AboutHeroSection";
import AboutSection from "../components/AboutSection";
import ApproachSection from "../components/ApproachSection";
import StatsSection from "../components/StatsSection";
import WorkflowSection from "../components/WorkflowSection";
import TeamMembers from "../components/TeamMembers";
import LetstakSection from "../components/LetstakSection";
import parralaxImg from "../assets/images/Corporate Strategy Workshop with Colorful Ideas Wall.jpg";
import rightImg from "../assets/images/Unlocking E-commerce Success_ The Power of Digital Marketing.jpg";

const AboutPage = () => {
  return (
        <>
        <AboutHeroSection />
        <AboutSection text1={"Driven by innovation, built for your growth"} text2={"at Webmavericks Softcoders"} para1={"At Webmavericks Softcoders, we don’t just build software—we build digital solutions that solve real business problems. Every project we take on starts with understanding your vision, your challenges, and your goals, so we can create something that truly makes an impact."} para2={"With a team passionate about technology and innovation, we deliver solutions that are reliable, scalable, and future-ready. From startups to growing businesses, we help our clients move faster, work smarter, and achieve sustainable digital growth."} img1={parralaxImg} img2={rightImg} />
        <ApproachSection />
        <StatsSection />
        <WorkflowSection />
        <TeamMembers />
        <LetstakSection />
        </>
    );
}

export default AboutPage;