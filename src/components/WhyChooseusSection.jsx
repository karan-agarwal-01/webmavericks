import { useEffect, useRef } from "react";
import gsap from "gsap";
import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";

const img1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const counterRefs = useRef([]);

    const navigate = useNavigate();

    useEffect(() => {
        let ctx = gsap.context(() => {
            const trackWidth = trackRef.current.scrollWidth - window.innerWidth;

            const scrollTween = gsap.to(trackRef.current, {
                x: -trackWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + trackRef.current.scrollWidth,
                }
            });

            gsap.from(".panel-2-text", {
                x: 150,
                opacity: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".panel-2",
                    containerAnimation: scrollTween,
                    start: "left 70%",
                    toggleActions: "play none none reverse"
                }
            });

            const targets = [150, 40, 11, 25];
            counterRefs.current.forEach((el, index) => {
                let counter = { val: 0 };
                gsap.to(counter, {
                    val: targets[index],
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".panel-3",
                        containerAnimation: scrollTween,
                        start: "left 60%",
                    },
                    onUpdate: () => {
                        if (el) el.innerText = Math.ceil(counter.val);
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-x-hidden bg-[#fbfbf9] text-slate-900">
            <section ref={containerRef} className="h-screen w-full overflow-hidden relative">
                <div ref={trackRef} className="flex h-screen w-[400vw]">
                    
                    <div className="w-screen h-screen flex items-center justify-center shrink-0 bg-linear-to-r from-slate-700 via-slate-800 to-blue-950">
                        <h1 className="text-[18vw] md:text-[10vw] leading-[0.85] text-center select-none text-cyan-300 ubuntu-bold mb-4 tracking-wider uppercase">
                            Why <br /> CHoose Us
                        </h1>
                    </div>
                    
                    <div className="panel-2 w-screen h-screen flex items-center px-6 md:px-12 shrink-0 overflow-y-auto lg:overflow-hidden py-9 lg:py-0 bg-linear-to-r to-slate-700 via-slate-800 from-blue-950">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto items-center panel-2-text my-auto">

                            <div className="max-w-xl">
                                <h4 className="ubuntu-bold text-sm md:text-lg tracking-widest uppercase mb-4 md:mb-6 lg:mb-8 text-cyan-400">
                                    Why Webmavericks
                                </h4>
                                <h2 className="text-2xl md:text-4xl lg:text-5xl ubuntu-bold leading-[1.05] mb-4 md:mb-6 lg:mb-8 tracking-tight text-white">
                                    WE UNDERSTAND THAT <br /> EVERY BUSINESS HAS <br /> ITS OWN VISION.
                                </h2>
                                <p className="text-sm md:text-md lg:text-lg text-[#90a1b9] ubuntu-medium leading-relaxed">
                                    At Webmavericks Softcoders, we don’t believe in one-size-fits-all solutions. Every business is different, and so is our approach. We take the time to understand your goals and craft solutions that are aligned with your vision, scalable for growth, and built to deliver real results..
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 md:gap-8 relative lg:pl-10">
                                <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10 group">
                                    <div data-cursor="light" className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500">
                                        <span className="text-2xl md:text-3xl lg:text-4xl ubuntu-bold">60%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-2xl ubuntu-bold mb-1 sm:mb-2 text-cyan-500">SMART STRATEGY</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">We plan every project with a clear strategy, ensuring the right technology, structure, and approach for long-term success.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-20 ml-0 sm:-ml-8 md:-ml-12 lg:-ml-16 group">
                                    <div data-cursor="light" className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500 transition-all">
                                        <span className="text-2xl md:text-3xl lg:text-4xl ubuntu-bold">95%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-2xl ubuntu-bold mb-1 sm:mb-2 text-cyan-500">CLIENT FOCUS</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">We prioritize understanding your business needs and users, so every solution we build delivers real value and impact.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-30 group">
                                    <div data-cursor="light" className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500">
                                        <span className="text-2xl md:text-3xl lg:text-4xl ubuntu-bold">70%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-2xl ubuntu-bold mb-1 sm:mb-2 text-cyan-500">INNOVATION</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">We constantly explore new technologies and ideas to build modern, efficient, and future-ready digital solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-3 w-screen h-screen flex items-center px-6 md:px-12 lg:px-16 shrink-0 overflow-y-auto lg:overflow-hidden lg:py-0 bg-linear-to-r from-slate-700 via-slate-800 to-blue-950">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl mx-auto h-auto lg:h-[80vh] items-center my-auto">

                            <div className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 relative">
                                <h4 className="hidden lg:block ubuntu-bold text-sm tracking-widest uppercase absolute -top-12 text-cyan-400 mb-4">
                                    Why Choose Us
                                </h4>

                                <div className="grid grid-cols-2 gap-y-8 md:gap-y-12 lg:gap-y-16 gap-x-4 md:gap-x-8 items-center lg:mx-0 md:mx-20 mx-8">
                                    <div>
                                        <h3 className="text-4xl md:text-6xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[0] = el}>0</span>+
                                        </h3>
                                        <p className="text-sm md:text-lg ubuntu-medium text-[#90a1b9] leading-tight">Projects Delivered</p>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[1] = el}>0</span>+
                                        </h3>
                                        <p className="text-sm md:text-lg ubuntu-medium text-[#90a1b9] leading-tight">Happy Clients</p>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[2] = el}>0</span>+
                                        </h3>
                                        <p className="text-sm md:text-lg ubuntu-medium text-[#90a1b9] leading-tight">Years of Experience</p>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[3] = el}>0</span>
                                        </h3>
                                        <p className="text-sm md:text-lg ubuntu-medium text-[#90a1b9] leading-tight">Team Members</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative h-[35vh] md:h-[45vh] lg:h-full w-full flex items-center justify-center lg:pl-10 mt-8 lg:mt-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-linear-to-tr from-cyan-300/40 to-emerald-300/40 rounded-full blur-[80px] z-0 pointer-events-none"></div>
                                <div data-cursor="light" className="relative z-10 w-[85%] h-[80%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] border border-slate-200/50">
                                    <img src={img1} alt="Team" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent"></div>
                                </div>
                                <div className="absolute bottom-[5%] -left-[2%] md:-left-[5%] lg:-left-[10%] z-20 w-[55%] h-[45%] rounded-xl md:rounded-[2rem] border-4 md:border-[6px] border-[#fbfbf9] overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 hover:-rotate-2 origin-bottom-left">
                                    <img data-cursor="light" src={img2} alt="Teamwork" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[10%] md:top-[15%] -left-[2%] lg:-left-[8%] z-30 bg-white backdrop-blur-md border border-white/50 rounded-full px-3 md:px-5 py-2 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 transition-transform duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                    <span className="text-[8px] md:text-[10px] lg:text-xs ubuntu-bold tracking-widest text-slate-800">TEAM WORK</span>
                                </div>
                                <div className="absolute top-[35%] md:top-[40%] -right-[2%] md:-right-[5%] lg:-right-[8%] z-30 bg-white backdrop-blur-md border border-white/50 rounded-full px-3 md:px-5 py-2 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 transition-transform duration-500 hover:-translate-y-1 hover:shadow-emerald-500/20">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[8px] md:text-[10px] lg:text-xs ubuntu-bold tracking-widest text-slate-800">SKILL & EXP.</span>
                                </div>
                                <div className="absolute bottom-[20%] md:bottom-[25%] -right-[2%] lg:right-[5%] z-30 bg-black rounded-full px-3 md:px-5 py-2 md:py-3 shadow-2xl flex items-center gap-2 md:gap-3 transition-transform duration-500 hover:scale-105">
                                    <span className="text-[8px] md:text-[10px] lg:text-xs ubuntu-bold tracking-widest text-slate-50">FUN & HAPPINESS ✌️</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-4 w-screen h-screen flex items-center justify-center px-6 md:px-12 shrink-0 overflow-y-auto lg:overflow-hidden py-24 lg:py-0 bg-linear-to-r to-slate-700 via-slate-800 from-blue-950">
                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-base md:text-lg lg:text-2xl ubuntu-medium mb-4 md:mb-6 tracking-wide text-cyan-500 uppercase mt-10">Have a project in mind?</p>
                            <h2 className="text-4xl md:text-6xl lg:text-8xl ubuntu-semibold tracking-tight mb-8 md:mb-12 text-center max-w-5xl leading-[1.05] text-[#90a1b9]">
                                Let's build something <br className="hidden md:block" /> great together!
                            </h2>
                            <CircleButton text={"Start a Project"} theme="dark" onClick={() => navigate('/contact')} />
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;