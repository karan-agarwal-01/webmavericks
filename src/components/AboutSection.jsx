import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import CircleButton from "./CircleButton";
import CrossBlocks from "./Crossblocks";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ text1, text2, para1, para2, img1, img2 }) => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const leftImgRef = useRef(null);
    const rightImgWrapperRef = useRef(null);

    const navigate = useNavigate();

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
        <section data-cursor="dark" ref={sectionRef} className="py-8 px-6 md:px-12 lg:px-12 bg-[#f8fafc] text-slate-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-8 lg:mb-12 relative z-20">
                    <h2
                        ref={headingRef}
                        className="text-3xl md:text-4xl lg:text-5xl ubuntu-bold leading-[1.2] lg:leading-[1.15] perspective-[1000px] text-center lg:text-left text-slate-950"
                    >
                        {text1} <br className="hidden lg:block" /> 
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-600 ml-1">
                           {text2}
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-8 items-start">

                    <div className="lg:col-span-4 rounded-2xl overflow-hidden relative shadow-lg min-h-87.5 md:min-h-112.5 lg:min-h-130">
                        <img 
                            ref={leftImgRef} 
                            src={img1} 
                            className="absolute inset-0 w-full h-full object-cover scale-125 origin-bottom" 
                            alt="Business Parallax" 
                            data-cursor="light"
                        />
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10 lg:gap-8 lg:px-8 relative z-20 lg:pt-12">
                        <div className="flex flex-col gap-6 text-center lg:text-left">
                            <p className="ubuntu-regular text-slate-600 text-base md:text-lg leading-relaxed text-left">
                                {para1}
                            </p>
                            <p className="ubuntu-regular text-slate-600 text-base md:text-lg leading-relaxed text-left">
                                {para2}
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:justify-between md:justify-center gap-10 lg:gap-0">
                            <CircleButton text={"Explore us"} onClick={() => navigate('/about')} />
                            <div className="pointer-events-none scale-90 sm:scale-100">
                               <CrossBlocks />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 relative lg:mt-32 md:-mt-12 -mt-12">
                        <div ref={rightImgWrapperRef} className="rounded-xl overflow-hidden aspect-square shadow-2xl relative w-3/4 sm:w-1/2 lg:w-full mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
                            <img 
                                src={img2} 
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