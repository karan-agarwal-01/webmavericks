import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import CircleButton from "./CircleButton";

const teamData = [
  {
    name: "Alex B.",
    role: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Diana F.",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Xavier Y.",
    role: "Backend Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kendal D.",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
  },
];

const TeamMembers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const titleSplit = new SplitType(".team-title", { types: "chars" });
    const nameSplits = new SplitType(".member-name", { types: "chars" });
    const roleSplits = new SplitType(".member-role", { types: "lines" });

    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      tl.from(titleSplit.chars, {
        y: 80,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "back.out(1.5)",
        transformOrigin: "50% 50% -50px"
      })
      .fromTo(".team-card", 
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.1, ease: "expo.inOut" },
        "-=0.6"
      )
      .fromTo(".team-img",
        { scale: 1.5 },
        { scale: 1, duration: 1.2, stagger: 0.1, ease: "expo.out" },
        "-=1.2"
      );

      const cards = gsap.utils.toArray(".team-card");
      cards.forEach((card) => {
        const img = card.querySelector(".team-img");
        const infoBox = card.querySelector(".team-info");
        const chars = card.querySelectorAll(".member-name .char");
        const lines = card.querySelectorAll(".member-role .line");
        const icon = card.querySelector(".hover-icon");

        gsap.set(infoBox, { yPercent: 101 });
        gsap.set(chars, { y: 20, opacity: 0 });
        gsap.set(lines, { y: 20, opacity: 0 });
        gsap.set(icon, { scale: 0, rotationZ: -45 });

        const hoverTl = gsap.timeline({ paused: true })
          .to(img, { scale: 1.08, filter: "grayscale(0%)", duration: 0.6, ease: "power3.out" })
          .to(infoBox, { yPercent: 0, duration: 0.5, ease: "expo.out" }, "<")
          .to(chars, { y: 0, opacity: 1, stagger: 0.02, duration: 0.4, ease: "back.out(2)" }, "-=0.3")
          .to(lines, { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" }, "-=0.3")
          .to(icon, { scale: 1, rotationZ: 0, duration: 0.4, ease: "back.out(2)" }, "-=0.4");

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });

    }, sectionRef);

    return () => {
      titleSplit.revert();
      nameSplits.revert();
      roleSplits.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto bg-linear-to-t from-[#050e36] via-[#11192d] to-[#02061a] text-white px-6 md:px-12 lg:px-24 py-8 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-cyan-600/10 blur-[120px] z-10"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-indigo-600/10 blur-[120px] z-10"></div>
        <div className="absolute inset-0 z-20 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      </div>

      <div className="mb-16 relative z-10 flex flex-col items-center">
        <div className="overflow-hidden perspective-[1000px]">
            <h2 className="team-title text-5xl md:text-6xl ubuntu-bold tracking-tighter text-center inline-block text-cyan-400">
              The Minds Behind Webmavericks
            </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10 pb-4 max-w-7xl mx-auto">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="team-card group relative rounded-2xl overflow-hidden cursor-pointer aspect-3/4 bg-slate-900 shadow-2xl"
          >
            <img 
                src={member.img} 
                alt={member.name}  
                className="team-img w-full h-full object-cover filter grayscale opacity-80" 
                data-cursor='light' 
                />
            
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none"></div>       
            <div className="team-info absolute bottom-0 left-0 w-full p-6 bg-slate-950/60 backdrop-blur-md border-t border-white/10 flex flex-col justify-between items-start">
                <div className="overflow-hidden pb-1">
                    <h3 className="member-name text-2xl lg:text-3xl ubuntu-bold text-white tracking-tight leading-none">
                        {member.name}
                    </h3>
                </div>
                <div className="overflow-hidden mt-1">
                    <p className="member-role text-cyan-400 ubuntu-medium text-sm tracking-wide uppercase">
                        {member.role}
                    </p>
                </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;