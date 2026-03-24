import { useEffect, useRef } from "react";
import gsap from "gsap";
import CircleButton from "./CircleButton";

const img1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const counterRefs = useRef([]);

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
                    end: "+=4000",
                }
            });

            gsap.from(".panel-2-text", {
                x: 150,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".panel-2",
                    containerAnimation: scrollTween,
                    start: "left 80%",
                    end: "center center",
                    scrub: true,
                }
            });

            const targets = [500, 100, 6, 50];
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
                        toggleActions: "play none none none"
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
                    <div className="panel-2 w-screen h-screen flex items-center px-6 md:px-12 shrink-0 overflow-y-auto lg:overflow-hidden pt-20 lg:pt-0 bg-linear-to-r to-slate-700 via-slate-800 from-blue-950">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl mx-auto items-center panel-2-text">

                            <div className="max-w-xl">
                                <h4 className="ubuntu-bold text-xs md:text-lg tracking-widest uppercase mb-6 md:mb-8 text-cyan-400">
                                    Why Choose Us
                                </h4>
                                <h2 className="text-4xl md:text-5xl lg:text-5xl ubuntu-bold leading-[1.05] mb-6 md:mb-8 tracking-tight text-white">
                                    THE COMPANY <br /> UNDERSTANDS THAT <br /> EVERY BUSINESS IS <br /> UNIQUE.
                                </h2>
                                <p className="text-base md:text-lg text-[#90a1b9] ubuntu-medium leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed magnam sapiente repellendus itaque omnis quae odio ad ipsam quis cupiditate vel iusto cumque, eligendi illum perspiciatis laborum quasi dolorem.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8 md:gap-8 relative lg:pl-10">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10 group">
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500">
                                        <span className="text-4xl ubuntu-bold">60%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl ubuntu-bold mb-2 text-cyan-500">STRATEGY</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">Adopting a customer-centric approach, understanding their needs, and providing tailored solutions will enhance customer satisfaction.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-20 sm:-ml-16 group">
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500 transition-all">
                                        <span className="text-4xl ubuntu-bold">95%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl ubuntu-bold mb-2 text-cyan-500">AUDIENCE</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">The ideal audience for our organization encompasses a broad range of individuals seeking technological expertise.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-30 group">
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[1.5px] border-slate-900 flex items-center justify-center shrink-0 bg-[#fbfbf9] transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-500 group-hover:text-white group-hover:border-cyan-500">
                                        <span className="text-4xl ubuntu-bold">70%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl ubuntu-bold mb-2 text-cyan-500">VALUES</h3>
                                        <p className="text-[#90a1b9] ubuntu-medium max-w-sm text-sm md:text-md">We value innovation, constantly seeking new and creative solutions to drive technological advancement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-3 w-screen h-screen flex items-center px-6 md:px-12 lg:px-16 shrink-0 overflow-y-auto lg:overflow-hidden pt-20 lg:pt-0 bg-linear-to-r from-slate-700 via-slate-800 to-blue-950">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto h-[80vh] items-center">

                            <div className="flex flex-col justify-center gap-12 md:gap-16 relative">
                                <h4 className="hidden lg:block ubuntu-bold text-sm tracking-widest uppercase absolute -top-12 text-cyan-400 ubuntu-bold mb-4">
                                    Why Choose Us
                                </h4>

                                <div className="grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8">
                                    <div>
                                        <h3 className="text-6xl md:text-7xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[0] = el}>0</span>+
                                        </h3>
                                        <p className="text-lg ubuntu-medium text-[#90a1b9] leading-tight">Project<br />completed</p>
                                    </div>
                                    <div>
                                        <h3 className="text-6xl md:text-7xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[1] = el}>0</span>+
                                        </h3>
                                        <p className="text-lg ubuntu-medium text-[#90a1b9] leading-tight">Happy<br />customers</p>
                                    </div>
                                    <div>
                                        <h3 className="text-6xl md:text-7xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[2] = el}>0</span>
                                        </h3>
                                        <p className="text-lg ubuntu-medium text-[#90a1b9] leading-tight">Years<br />experiences</p>
                                    </div>
                                    <div>
                                        <h3 className="text-6xl md:text-7xl lg:text-7xl ubuntu-bold tracking-tighter mb-1 md:mb-2 text-white">
                                            <span ref={el => counterRefs.current[3] = el}>0</span>+
                                        </h3>
                                        <p className="text-lg ubuntu-medium text-[#90a1b9] leading-tight">Team<br />Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[50vh] lg:h-full w-full flex items-center justify-center lg:pl-10">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-linear-to-tr from-cyan-300/40 to-emerald-300/40 rounded-full blur-[80px] z-0 pointer-events-none"></div>
                                <div className="relative z-10 w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] border border-slate-200/50">
                                    <img src={img1} alt="Team" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent"></div>
                                </div>
                                <div className="absolute bottom-[5%] -left-[5%] lg:-left-[10%] z-20 w-[55%] h-[45%] rounded-[2rem] border-[6px] border-[#fbfbf9] overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 hover:-rotate-2 origin-bottom-left">
                                    <img src={img2} alt="Teamwork" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[15%] -left-[2%] lg:-left-[8%] z-30 bg-white backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-lg flex items-center gap-3 transition-transform duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
                                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                    <span className="text-[10px] md:text-xs ubuntu-bold tracking-widest text-slate-800">TEAM WORK</span>
                                </div>
                                <div className="absolute top-[40%] -right-[5%] lg:-right-[8%] z-30 bg-white backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-lg flex items-center gap-3 transition-transform duration-500 hover:-translate-y-1 hover:shadow-emerald-500/20">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[10px] md:text-xs ubuntu-bold tracking-widest text-slate-800">SKILL & EXP.</span>
                                </div>
                                <div className="absolute bottom-[25%] -right-[2%] lg:right-[5%] z-30 bg-black rounded-full px-5 py-3 shadow-2xl flex items-center gap-3 transition-transform duration-500 hover:scale-105">
                                    <span className="text-[10px] md:text-xs ubuntu-bold tracking-widest text-slate-50">FUN & HAPPINESS ✌️</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="panel-4 w-screen h-screen flex items-center justify-center px-6 md:px-12 shrink-0 overflow-y-auto lg:overflow-hidden pt-20 lg:pt-0 bg-linear-to-r to-slate-700 via-slate-800 from-blue-950">
                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-lg md:text-2xl ubuntu-medium mb-4 md:mb-6 tracking-wide text-cyan-500 uppercase mt-10">Have you project in mind?</p>
                            <h2 className="text-4xl md:text-7xl lg:text-8xl ubuntu-semibold tracking-tight mb-12 text-center max-w-5xl leading-[1.05] text-[#90a1b9]">
                                Let's make something <br className="hidden md:block" /> great together!
                            </h2>
                            <CircleButton text={"Contact us"} theme="dark" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyChooseUs;