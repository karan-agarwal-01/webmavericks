import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import parralaxImg from "../assets/images/Business.jpg";
import rightImg from "../assets/images/abd.jpg";
import CircleButton from "./CircleButton";
import CrossBlocks from "./Crossblocks";

const AboutSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const leftImgRef = useRef(null);
    const rightImgWrapperRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const split = new SplitType(headingRef.current, { types: "lines" });
            
            gsap.fromTo(split.lines,
                { y: 80, rotationX: -90, opacity: 0 },
                {
                    y: 0,
                    rotationX: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1.5,
                    ease: "back.out(1.2)",
                    transformOrigin: "50% 50% -50px",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.to(leftImgRef.current, {
                yPercent: 40, 
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.fromTo(rightImgWrapperRef.current, 
                { y: -80 },
                {
                    y: 80,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                }
            );

            return () => split.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            data-cursor="dark"
            ref={sectionRef}
            className="py-8 px-6 md:px-12 lg:px-12 bg-[#f8fafc] text-slate-900 overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-center lg:justify-start mb-16 lg:mb-12 relative z-20">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl lg:text-6xl ubuntu-bold leading-[1.15] perspective-[1000px] text-center lg:text-left text-slate-950"
                    >
                        Accelerate your success with <br className="hidden lg:block" /> 
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-600">
                            our digital strategies
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    <div className="lg:col-span-4 rounded-2xl overflow-hidden relative shadow-lg">
                        <img 
                            ref={leftImgRef} 
                            src={parralaxImg} 
                            className="w-full h-full object-cover scale-125 origin-bottom" 
                            alt="Business Parallax" 
                            data-cursor="light"
                        />
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-8 lg:px-8 relative z-20 lg:pt-12">
                        <div className="flex flex-col gap-6">
                            <p className="ubuntu-regular text-slate-600 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel ducimus nobis eveniet, culpa necessitatibus ut laborum facilis quam laboriosam labore earum.
                            </p>
                            <p className="ubuntu-regular text-slate-600 text-lg leading-relaxed">
                                With a team of experienced professionals, the company strives to help businesses achieve their online objectives by providing tailored solutions that cater to their unique needs.
                            </p>
                        </div>
                        
                        <div className="flex justify-between">
                            <CircleButton text={"Explore us"} />
                            <div className="pointer-events-none">
                               <CrossBlocks />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 relative mt-8 lg:mt-32">
                        <div ref={rightImgWrapperRef} className="rounded-xl overflow-hidden aspect-square shadow-2xl relative">
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
                            <img 
                                src={rightImg} 
                                className="w-full h-[120%] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" 
                                alt="Digital strategy presentation" 
                                data-cursor="light"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;