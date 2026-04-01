import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from "split-type";
import LetstakSection from '../components/LetstakSection';
import { FiEye } from 'react-icons/fi';
import weblinqo from "../assets/images/brave_screenshot_weblinqo.com.png";
import jetpage from "../assets/images/brave_screenshot_jetpage.co.png";
import srbets from '../assets/images/srbets.png';
import legacyOrb from '../assets/images/Screenshot 2026-03-31 204237.png';

const projects = [
  { 
    id: "01", 
    title: "WEBLINQO", 
    desc: "We built a platform that helps creators and businesses monetize their social media through personalized domain pages. It offers customizable templates and dynamic link management for easy branding and control. The frontend is developed using React.js and Tailwind CSS for a modern, responsive experience, with Redux Toolkit for efficient state management. Stripe integration ensures secure subscriptions and seamless payment processing.", 
    img: weblinqo,
    stack: ["React Js", "Redux Toolkit", "Tailwind CSS", "Stripe", "Django"],
    accent: "#6366f1",
    link: "https://weblinqo.com"
  },
  { 
    id: "02", 
    title: "JETPAGE", 
    desc: "Built a fast and intuitive website creation tool with professionally designed templates and customizable UI components. It enables users to create modern, professional websites quickly without any coding knowledge. Designed for both beginners and developers, the platform offers flexibility, ease of use, and rapid deployment.", 
    img: jetpage,
    stack: ["React Js", "Redux Toolkit", "Tailwind CSS"],
    accent: "#ec4899",
    link: "https://jetpage.co"
  },
  { 
    id: "03", 
    title: "SRBETS", 
    desc: "Developed a real-time sports and gaming platform with live updates and dynamic user interactions, powered by React.js and Redux Toolkit. Built high-performance, responsive interfaces using Tailwind CSS to handle frequent data updates smoothly. Integrated secure authentication and payment systems while ensuring reliability and compliance with industry standards.", 
    img: srbets,
    stack: ["React Js", "Redux Toolkit", "Tailwind CSS"],
    accent: "#10b981",
    link: '',
  },
  { 
    id: "04", 
    title: "LEGECY ORB", 
    desc: "Legacy Orb is an innovative mobile application built using modern technologies like React Native, designed to help individuals preserve, document, and share their life stories in a meaningful and lasting way. The app acts as a digital storytelling platform where users can transform their personal experiences, memories, and life journeys into biographies, books, and interactive legacy formats", 
    img: legacyOrb,
    stack: ["React Native", "Redux Toolkit"],
    accent: "#f59e0b",
    link: "https://play.google.com/store/apps/details?id=com.legacyorb&pcampaignid=web_share&pli=1",
  },
];

export default function CombinedPortfolio() {
  const scrollRef = useRef();
  const triggerRef = useRef();
  const headingRef = useRef(null);
  const headingSplitRef = useRef(null); 
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const shapeRef = useRef([]);

  useGSAP(() => {

    document.fonts.ready.then(() => {
      if (!headingRef.current) return;

          headingSplitRef.current = new SplitType(headingRef.current, { types: "chars" });

          gsap.from(headingSplitRef.current.chars, {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1.5,
          stagger: 0.04,
          ease: "power4.out",
          delay: 0.2
          });
    });

    gsap.to(orb1Ref.current, { x: "15vw", y: "15vh", scale: 1.2, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(orb2Ref.current, { x: "-10vw", y: "-20vh", scale: 1.5, duration: 12, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
    gsap.to(orb3Ref.current, { scale: 1.4, opacity: 0.4, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });

    shapeRef.current.forEach((shape, i) => {
      if (!shape) return;
      gsap.to(shape, {
        y: i % 2 === 0 ? -30 : 30,
        rotation: i % 2 === 0 ? 15 : -15,
        duration: 4 + i,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.5
      });
    });

    const sections = gsap.utils.toArray(".project-section");
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + triggerRef.current.offsetWidth,
      }
    });

    sections.forEach((section) => {
      const title = section.querySelector(".project-title");
      gsap.from(title, {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
        }
      });
    });

    return () => {
      if (headingSplitRef.current) headingSplitRef.current.revert();
    };
  }, { scope: triggerRef });

  const handleHeadingHover = () => {
    if (!headingSplitRef.current) return;
    gsap.to(headingSplitRef.current.chars, {
      y: -5, scale: 1.05, duration: 0.3, ease: "sine.inOut",
      stagger: { each: 0.04, repeat: -1, yoyo: true }
    });
  };

  const handleHeadingLeave = () => {
    if (!headingSplitRef.current) return;
    gsap.killTweensOf(headingSplitRef.current.chars);
    gsap.to(headingSplitRef.current.chars, {
      y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)"
    });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-red-500 selection:text-white">
      <section data-cursor="yellow" className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 px-4">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div ref={orb1Ref} className="absolute -top-20 -left-20 w-40 h-40 md:w-80 md:h-80 rounded-full bg-red-500 blur-[120px] opacity-60"></div>
          <div ref={orb2Ref} className="absolute -bottom-40 -right-20 w-60 h-60 md:w-96 md:h-96 rounded-full bg-blue-400 blur-[120px] opacity-40"></div>
          <div ref={orb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-yellow-500 blur-[100px] opacity-20"></div>
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto w-full">
          <div ref={el => shapeRef.current[0] = el} className="absolute top-[20%] left-[10%] w-16 h-16 border border-red-500/30 rounded-full backdrop-blur-md"></div>
          <div ref={el => shapeRef.current[1] = el} className="absolute bottom-[25%] left-[15%] w-24 h-24 bg-yellow-500/10 border border-white/5 backdrop-blur-sm rounded-xl rotate-12"></div>
          <div ref={el => shapeRef.current[2] = el} className="absolute top-[15%] right-[15%] w-12 h-12 bg-blue-500/20 rounded-full blur-[2px]"></div>
          <div ref={el => shapeRef.current[3] = el} className="absolute bottom-[20%] right-[12%] w-20 h-20 border border-white/10 rounded-lg rotate-45 backdrop-blur-md bg-white/5"></div>
        </div>

        <div className="z-20 text-center">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.5em] mb-4 md:mb-6 text-red-400 ubuntu-medium">PORTFOLIO</p>
          <h1 
            ref={headingRef} 
            onMouseEnter={handleHeadingHover} 
            onMouseLeave={handleHeadingLeave} 
            className="ubuntu-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white cursor-default"
          >
            Selected Works
          </h1>
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-zinc-500 italic ubuntu-light tracking-widest animate-pulse uppercase">Scroll to explore</p>
        </div>
      </section>

      <div ref={triggerRef} className="overflow-hidden">
        <div ref={scrollRef} className="flex h-screen w-[400vw] flex-row relative">
          {projects.map((proj) => (
            <section 
              key={proj.id} 
              className="project-section w-screen h-screen flex items-center justify-center relative px-6 md:px-12 lg:px-24"
              style={{ backgroundColor: proj.accent + "1A" }}
            >
              <span className="absolute right-4 top-4 md:right-10 md:top-10 text-[20vw] md:text-[25vw] ubuntu-bold opacity-[0.03] pointer-events-none leading-none">
                {proj.id}
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl z-10">
                <div className="group relative aspect-video md:aspect-16/10 lg:aspect-video overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 border border-white/5">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-contain opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a href={proj.link}>
                        <button className="cursor-pointer flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full ubuntu-bold shadow-2xl hover:scale-105 transition-transform text-sm md:text-base">
                        <FiEye size={18} />
                        View Project
                        </button>
                    </a>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map(tag => (
                      <span key={tag} className="text-[8px] md:text-[10px] px-2 py-1 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="project-title text-4xl md:text-6xl lg:text-7xl ubuntu-bold tracking-tighter leading-tight italic">
                    {proj.title}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl text-zinc-400 ubuntu-light leading-relaxed max-w-lg">
                    {proj.desc}
                  </p>
                  <div className="h-px w-full bg-white/10 relative overflow-hidden">
                    <div className="absolute h-px w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700" 
                         style={{ backgroundColor: proj.accent }} />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <LetstakSection />
    </div>
  );
}