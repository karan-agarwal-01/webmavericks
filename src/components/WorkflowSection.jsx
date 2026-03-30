import { useEffect, useRef } from "react";
import gsap from "gsap";

const workflowData = [
    {
        id: "01",
        title: "Requirement Analysis",
        description: "We start by understanding your business needs, goals, and challenges to define clear project requirements and expectations.",
    },
    {
        id: "02",
        title: "Planning & Strategy",
        description: "We create a structured roadmap, choose the right technologies, and design a scalable architecture tailored to your project.",
    },
    {
        id: "03",
        title: "Design & Development",
        description: "Our team designs intuitive user experiences and develops robust, high-performance solutions using modern technologies.",
    },
    {
        id: "04",
        title: "Testing & Deployment",
        description: "We thoroughly test the product for quality, performance, and security before deploying it smoothly to production.",
    },
];

const WorkflowSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const lineDesktopRef = useRef(null);
    const lineMobileRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.from(headerRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.to(lineDesktopRef.current, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });

            gsap.to(lineMobileRef.current, {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: 1,
                }
            });

            gsap.from(cardsRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            data-cursor="dark"
            className="pt-4 pb-6 px-6 md:px-12 bg-[#f8fafc] text-slate-900 overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto">
                
                <div ref={headerRef} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl ubuntu-bold text-slate-950">
                        How we work
                    </h2>
                </div>

                <div className="relative">          
                    <div className="hidden lg:block absolute top-18 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
                    <div className="block lg:hidden absolute top-0 bottom-0 left-6.75 w-0.5 bg-slate-200 z-0"></div>
                    <div 
                        ref={lineDesktopRef} 
                        className="hidden lg:block absolute top-18 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400 to-emerald-400 z-0 origin-left scale-x-0"
                    ></div>
                    <div 
                        ref={lineMobileRef} 
                        className="block lg:hidden absolute top-0 bottom-0 left-6.75 w-0.5 bg-linear-to-b from-cyan-400 to-emerald-400 z-0 origin-top scale-y-0"
                    ></div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 pb-4">
                        {workflowData.map((step, index) => (
                            <div 
                                key={step.id} 
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="flex flex-col relative group"
                            >
                                <div className="flex flex-row lg:flex-col items-start lg:items-center">
                                    <div className="flex flex-col items-center mr-4 lg:mr-0 lg:mb-12 relative z-20">
                                        <p className="hidden lg:block ubuntu-medium text-zinc-900 mb-6">
                                            Step {step.id}
                                        </p>
                                        <div className="w-14 h-14 lg:w-8 lg:h-8 rounded-full bg-slate-50 border-4 border-slate-200 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-500 shadow-sm relative mt-2">
                                            <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-cyan-400 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-2xl lg:p-9 md:p-8 p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex-1 relative overflow-hidden">
                                        <div className="absolute -top-6 -right-4 text-9xl font-bold text-slate-50/80 z-0 select-none group-hover:text-cyan-100 transition-colors duration-500">
                                            {step.id}
                                        </div>
                                        <div className="relative z-10">
                                            <p className="block lg:hidden ubuntu-medium text-cyan-500 mb-2 text-sm uppercase tracking-wider">
                                                Step {step.id}
                                            </p>
                                            <h3 className="text-md md:text-lg font-semibold text-slate-800 mb-4 group-hover:text-slate-950 transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed ubuntu-regular">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;