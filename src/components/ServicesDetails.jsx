import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { FiMonitor, FiSmartphone, FiAperture, FiLayout } from "react-icons/fi";
import CrossBlocks from "./Crossblocks";

const servicesData = [
    {
        id: "01",
        title: "Web Application Development",
        description: "We build fast, scalable, and SEO-friendly web applications using modern frameworks like Next.js, ensuring high performance and seamless user experience.",
        icon: FiMonitor,
        color: "from-blue-600/20 to-cyan-500/5",
        borderColor: "border-blue-500/30",
        shadowGlow: "group-hover:shadow-[0_0_60px_0px_rgba(59,130,246,0.4)]" 
    },
    {
        id: "02",
        title: "Mobile App Development",
        description: "We develop cross-platform mobile applications that deliver smooth, reliable, and consistent performance across both Android and iOS devices.",
        icon: FiSmartphone,
        color: "from-purple-600/20 to-fuchsia-500/5",
        borderColor: "border-purple-500/30",
        shadowGlow: "group-hover:shadow-[0_0_60px_0px_rgba(168,85,247,0.4)]"
    },
    {
        id: "03",
        title: "Backend Development",
        description: "We build secure and scalable backend systems, APIs, and databases that ensure your applications run efficiently and handle growth with ease.",
        icon: FiAperture,
        color: "from-emerald-600/20 to-teal-500/5",
        borderColor: "border-emerald-500/30",
        shadowGlow: "group-hover:shadow-[0_0_60px_0px_rgba(16,185,129,0.4)]"
    },
    {
        id: "04",
        title: "UI/UX Design",
        description: "We design clean, user-friendly interfaces focused on usability, accessibility, and creating seamless digital experiences for your users.",
        icon: FiLayout,
        color: "from-orange-600/20 to-amber-500/5",
        borderColor: "border-orange-500/30",
        shadowGlow: "group-hover:shadow-[0_0_60px_0px_rgba(249,115,22,0.4)]"
    }
];


const ServicesSection = () => {
    const sectionRef = useRef(null);
    const leftColumnRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const title = new SplitType(".services-title", { types: "words, chars" });
            const desc = new SplitType(".services-desc", { types: "lines" });

            gsap.fromTo(title.chars, 
                { y: 50, opacity: 0, rotationX: -90 },
                { 
                    y: 0, opacity: 1, rotationX: 0, 
                    duration: 1, stagger: 0.02, ease: "back.out(1.5)",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
                }
            );

            gsap.fromTo(desc.lines,
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
                }
            );

            const wrappers = gsap.utils.toArray(".card-wrapper");
            const inners = gsap.utils.toArray(".card-inner");

            wrappers.forEach((wrapper, index) => {
                const inner = inners[index];

                gsap.fromTo(inner,
                    { y: 100, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        duration: 1, ease: "power3.out",
                        scrollTrigger: {
                            trigger: wrapper,
                            start: "top 85%",
                        }
                    }
                );

                if (index < wrappers.length - 1) {
                    gsap.to(inner, {
                        scale: 0.92,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrappers[index + 1], 
                            start: "top 80%",             
                            end: "top 20%",               
                            scrub: true,                  
                        }
                    });

                    const overlay = inner.querySelector('.dim-overlay');
                    gsap.to(overlay, {
                        opacity: 0.7,
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrappers[index + 1], 
                            start: "top 80%",             
                            end: "top 20%",               
                            scrub: true,                  
                        }
                    });
                }
            });

        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#0f1014] text-slate-50 py-10 px-6 md:px-12 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 relative items-start">
                
                <div ref={leftColumnRef} className="w-full lg:w-5/12 lg:sticky top-8 flex flex-col gap-6 z-10 h-fit pb-10">
                    <h4 className="text-cyan-400 ubuntu-medium tracking-widest text-lg uppercase">
                        Our Expertise
                    </h4>
                    <div className="perspective-[1000px]">
                        <h2 className="services-title text-3xl md:text-6xl lg:text-7xl ubuntu-bold leading-[1.05] tracking-tighter">
                            IT Services & Consulting
                        </h2>
                    </div>
                    <div className="flex lg:flex-col">
                        <div className="mt-4 max-w-md">
                            <p className="services-desc text-slate-400 text-md md:text-xl lg:text-lg leading-relaxed ubuntu-regular">
                                We don't just build software; we architect scalable ecosystems. Partner with us to transform complex challenges into elegant, high-performance digital realities.
                            </p>
                        </div>
                        <div className="hidden md:block ml-20 lg:mt-0 md:-mt-10">
                            <CrossBlocks />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-6/12 flex flex-col gap-6 lg:gap-4 pb-12 lg:pb-10 relative z-20 lg:mt-0 -mt-16">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="card-wrapper sticky w-full " style={{ top: `calc(10vh + ${index * 2}rem)` }}>
                            <div className={`card-inner w-full rounded-[2rem] border bg-slate-950 bg-linear-to-br ${service.color} p-4 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden group cursor-pointer transition-shadow duration-500 ease-out ${service.borderColor} ${service.shadowGlow}`}
                                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                            >
                                <div className="dim-overlay absolute inset-0 bg-[#0f1014] z-50 pointer-events-none opacity-0"></div>
                                
                                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-60 mix-blend-overlay transition-opacity duration-500 pointer-events-none`}></div>
                                
                                <div className="flex justify-between items-start relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl border ${service.borderColor} bg-[#0f1014]/50 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors duration-300 backdrop-blur-md`}>
                                        <service.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-5xl md:text-6xl lg:text-7xl ubuntu-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 tracking-tighter">
                                        {service.id}
                                    </span>
                                </div>

                                <div className="relative z-10 mt-auto pt-16 md:pt-8">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl ubuntu-bold text-white mb-4 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-300/80 md:text-lg text-md leading-relaxed max-w-lg ubuntu-regular group-hover:text-white transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;