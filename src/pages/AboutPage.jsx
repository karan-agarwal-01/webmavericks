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
        <AboutSection text1={"Driven by passion, built on"} text2={"innovation & trust"} para1={"We are a team of creative thinkers and problem solvers dedicated to building meaningful digital experiences. Our journey is rooted in a passion for technology and a commitment to helping businesses grow."} para2={"By combining strategy, design, and development, we create solutions that are not only functional but truly impactful. Every project we take on reflects our focus on quality, trust, and long-term partnerships."} img1={parralaxImg} img2={rightImg} />
        <ApproachSection />
        <StatsSection />
        <WorkflowSection />
        <TeamMembers />
        <LetstakSection />
        </>
    );
}

export default AboutPage;