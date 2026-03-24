import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
    { id: 1, target: 500, suffix: "+", label: "Project completed" },
    { id: 2, target: 100, suffix: "+", label: "Happy customers" },
    { id: 3, target: 6, suffix: "", label: "Years experiences" },
    { id: 4, target: 50, suffix: "+", label: "Team Members" },
];

const StatsSection = () => {
    const sectionRef = useRef(null);
    const numRefs = useRef([]); 

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none" 
                }
            });

            tl.fromTo(".stat-circle", 
                { scale: 0.5, opacity: 0 }, 
                { 
                    scale: 1, 
                    opacity: 1, 
                    duration: 1, 
                    stagger: 0.15, 
                    ease: "back.out(1.2)" 
                }
            );

            numRefs.current.forEach((el, index) => {
                const targetValue = statsData[index].target;
                let counter = { val: 0 };

                tl.fromTo(counter, 
                    { val: 0 },
                    {
                        val: targetValue,
                        duration: 2, 
                        ease: "power2.out",
                        onUpdate: () => {
                            if (el) {
                                el.innerText = Math.ceil(counter.val);
                            }
                        },
                    }, 
                    index * 0.15 + 0.3 
                );
            });

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            data-cursor="dark" 
            className="py-8 w-full bg-[#f8fafc] text-slate-900 relative overflow-hidden flex justify-center"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {statsData.map((stat, index) => (
                        <div 
                            key={stat.id}
                            className={`
                                stat-circle group relative bg-transparent flex flex-col justify-center items-center text-center
                                shrink-0 w-65 h-65 lg:w-64 lg:h-64
                                rounded-full border border-slate-200 shadow-sm
                                transition-all duration-500 ease-out
                                hover:border-cyan-400 hover:shadow-xl hover:z-50 hover:-translate-y-2
                            `}
                        >
                            <h3 className="text-6xl font-semibold text-slate-800 tracking-tighter flex items-center justify-center mb-2 transition-colors duration-300 group-hover:text-slate-950">
                                <span ref={(el) => (numRefs.current[index] = el)}>
                                    0
                                </span>
                                <span>{stat.suffix}</span>
                            </h3>
                            
                            <p className="text-slate-600 font-medium text-lg w-3/4 leading-snug group-hover:text-cyan-700 transition-colors duration-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;