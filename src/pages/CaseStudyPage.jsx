import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from "split-type";
import LetstakSection from '../components/LetstakSection';
import { FiBookOpen } from 'react-icons/fi';

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
    title: "LEGACY ORB", 
    desc: "Legacy Orb is an innovative mobile application built using modern technologies like React Native, designed to help individuals preserve, document, and share their life stories in a meaningful and lasting way. The app acts as a digital storytelling platform where users can transform their personal experiences, memories, and life journeys into biographies, books, and interactive legacy formats", 
    img: legacyOrb,
    stack: ["React Native", "Redux Toolkit"],
    accent: "#f59e0b",
    link: "https://play.google.com/store/apps/details?id=com.legacyorb&pcampaignid=web_share&pli=1",
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const headingSplitRef = useRef(null); 
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

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

        const cards = gsap.utils.toArray('.case-card');
        
        cards.forEach((card, index) => {
        if (index !== cards.length - 1) {
            gsap.to(card, {
            scale: 0.85,
            opacity: 0,
            filter: "blur(5px)",
            scrollTrigger: {
                trigger: card,
                start: "top top", 
                endTrigger: cards[index + 1],
                end: "top top",
                scrub: true,
                pin: false,
            }
            });
        }
        
        const content = card.querySelector('.card-content');
        gsap.from(content, {
            y: 100,
            opacity: 0,
            scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            }
        });
        });

    return () => {
      if (headingSplitRef.current) headingSplitRef.current.revert();
    };
  }, { scope: containerRef });

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
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <section data-cursor="yellow" className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 px-4">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div ref={orb1Ref} className="absolute -top-20 -left-20 w-40 h-40 md:w-80 md:h-80 rounded-full bg-emerald-500 blur-[120px] opacity-40"></div>
          <div ref={orb2Ref} className="absolute -bottom-40 -right-20 w-60 h-60 md:w-96 md:h-96 rounded-full bg-blue-400 blur-[120px] opacity-30"></div>
          <div ref={orb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-purple-500 blur-[100px] opacity-20"></div>
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        </div>

        <div className="z-20 text-center">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.5em] mb-4 md:mb-6 text-emerald-400 ubuntu-medium">DEEP DIVES</p>
          <h1 
            ref={headingRef} 
            onMouseEnter={handleHeadingHover} 
            onMouseLeave={handleHeadingLeave} 
            className="ubuntu-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white cursor-default"
          >
            Case Studies
          </h1>
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-zinc-500 italic ubuntu-light tracking-widest animate-pulse uppercase">Scroll to read</p>
        </div>
      </section>

      <div className="relative w-full pb-32">
        {projects.map((proj) => (
          <section 
            key={proj.id} 
            className="case-card sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24 origin-top"
          >
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${proj.accent} 0%, transparent 70%)` }} />
            
            <div className="card-content relative w-full max-w-7xl h-[85vh] md:h-[80vh] bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row">
              
              <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full group overflow-hidden bg-zinc-900">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent lg:bg-linear-to-r" />
              </div>

              <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <span className="absolute right-8 top-8 text-6xl md:text-8xl ubuntu-bold opacity-5 pointer-events-none select-none">
                  {proj.id}
                </span>

                <div className="space-y-6 md:space-y-8 z-10">
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl ubuntu-bold tracking-tighter leading-tight" style={{ color: proj.accent }}>
                    {proj.title}
                  </h2>
                  
                  <p className="text-sm md:text-base lg:text-lg text-zinc-300 ubuntu-light leading-relaxed line-clamp-4">
                    {proj.desc}
                  </p>
                  
                  <div className="pt-4">
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      <button className="group flex items-center cursor-pointer hover:text-white hover:border-gray-800 border hover:bg-black gap-3 px-8 py-4 bg-white text-black rounded-full ubuntu-bold shadow-xl hover:scale-105 transition-all duration-300">
                        <FiBookOpen size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
                        Read Case Study
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      <LetstakSection />
    </div>
  );
}