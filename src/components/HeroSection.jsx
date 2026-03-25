import { GoArrowUpRight } from "react-icons/go";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const HeroSection = () => {
    const compRef = useRef(null);
    const arrow1Ref = useRef(null);
    const arrow2Ref = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const text2Ref = useRef(null);
    const hoverTl = useRef(null);
    
    const headingSplitRef = useRef(null); 

    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const orb3Ref = useRef(null);

    useEffect(() => {
        headingSplitRef.current = new SplitType(headingRef.current, { types: "words, chars" });
        const textSplit = new SplitType(textRef.current, { types: "lines, words" });
        const text2Split = new SplitType(text2Ref.current, { types: "lines" });

        let ctx = gsap.context(() => {
            
            hoverTl.current = gsap.timeline({ paused: true })
                .to(arrow1Ref.current, {
                    x: 15,
                    y: -15,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                })
                .fromTo(arrow2Ref.current, 
                    { x: -15, y: 15, opacity: 0 },
                    { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                    "-=0.2"
                );

            gsap.from(headingSplitRef.current.chars, {
                y: 60,
                opacity: 0,
                rotateX: -30,
                duration: 1.2,
                stagger: 0.02,
                ease: "expo.out",
                delay: 0.2
            });

            gsap.from(textSplit.words, {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.02,
                delay: 0.6,
                ease: "power3.out",
            });

            gsap.from(text2Split.lines, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                delay: 0.8,
                ease: "expo.out",
            });

            gsap.to(orb1Ref.current, {
                x: "15vw", 
                y: "15vh", 
                scale: 1.2, 
                duration: 8, 
                ease: "sine.inOut", 
                yoyo: true, 
                repeat: -1 
            });
            
            gsap.to(orb2Ref.current, {
                x: "-10vw", 
                y: "-20vh", 
                scale: 1.5, 
                duration: 12, 
                ease: "sine.inOut", 
                yoyo: true, 
                repeat: -1,
                delay: 1 
            });

            gsap.to(orb3Ref.current, {
                scale: 1.4, 
                opacity: 0.4,
                duration: 6, 
                ease: "sine.inOut", 
                yoyo: true, 
                repeat: -1 
            });

        }, compRef);

        return () => {
            ctx.revert();
            if (headingSplitRef.current) headingSplitRef.current.revert();
            SplitType.revert(textRef.current);
            SplitType.revert(text2Ref.current);
        };
    }, []);

    const handleHeadingHover = () => {
        if (!headingSplitRef.current) return;
        
        gsap.killTweensOf(headingSplitRef.current.chars);
        
        gsap.to(headingSplitRef.current.chars, {
            y: -5,               
            scale: 1.02,        
            duration: 0.3, 
            ease: "sine.inOut",
            stagger: {
                each: 0.04,       
                repeat: -1,       
                yoyo: true     
            }
        });
    };

    const handleHeadingLeave = () => {
        if (!headingSplitRef.current) return;
        
        gsap.killTweensOf(headingSplitRef.current.chars);
        
        gsap.to(headingSplitRef.current.chars, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
        });
    };

    const handleMouseEnter = () => hoverTl.current?.play();
    const handleMouseLeave = () => hoverTl.current?.reverse();

    return (
        <section data-cursor="yellow" ref={compRef} className="h-auto w-full flex flex-col relative overflow-hidden bg-slate-950">             
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-sky-950 z-0"></div>
                <div ref={orb1Ref} className="absolute -top-20 -left-20 w-125 h-125 rounded-full bg-blue-400 blur-[120px] z-10"></div>
                <div ref={orb2Ref} className="absolute -bottom-40 -right-20 w-150 h-150 rounded-full bg-fuchsia-700 blur-[150px] z-10"></div>
                <div ref={orb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-violet-500 blur-[100px] z-10"></div>
                <div className="absolute inset-0 z-20 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            </div>
        
            <div className="px-6 md:px-12 lg:px-12 pt-8  lg:max-w-xl md:max-w-lg mb-5 z-10">
                <button 
                    className="group text-left focus:outline-none"
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    aria-label="Learn more about our technology solutions"
                >
                    <div className="flex items-center gap-4">
                        <p className="ubuntu-regular lg:text-xl md:text-xl text-md tracking-wider text-slate-200 leading-relaxed">
                            We craft powerful digital <br className="hidden sm:block" />  experiences that drive growth.
                        </p>
                        <div className="relative w-10 h-10 overflow-hidden rounded-full bg-slate-800/50 border border-slate-700 group-hover:bg-slate-700/80 group-hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center text-cyan-400">
                            <div ref={arrow1Ref} className="absolute flex items-center justify-center">
                                <GoArrowUpRight size={22} />
                            </div>
                            <div ref={arrow2Ref} className="absolute flex items-center justify-center opacity-0">
                                <GoArrowUpRight size={22} />
                            </div>
                        </div>
                    </div>
                </button>
            </div>

            <div className="px-6 md:px-12 lg:px-12 relative w-full lg:mb-6 md:mb-20 mb-16 z-10 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">
                
                <div className="overflow-hidden pt-4 cursor-default">
                    <h1 
                        ref={headingRef} 
                        onMouseEnter={handleHeadingHover}
                        onMouseLeave={handleHeadingLeave}
                        className="ubuntu-bold lg:text-[5.5rem] md:text-7xl text-4xl leading-[1.05] tracking-tight text-white inline-block"
                    >
                        Webmavericks <br /> Softcoders Pvt Ltd.
                    </h1>
                </div>
                
            </div>

            <div className="px-6 md:px-12 lg:px-12 flex items-center justify-between z-10 pb-8">
                <div ref={textRef} className="text-lg leading-relaxed max-w-sm">
                    <p className="text-slate-200 ubuntu-medium tracking-wide mb-2">Transform your ideas into powerful digital products.</p>
                    <div className="flex flex-wrap gap-1.5 items-center">
                        <p className="text-slate-200 ubuntu-medium">We build smart,</p>
                        <p className="ubuntu-bold text-blue-300 ml-1">
                            Scalable IT Solutions.
                        </p>
                    </div>
                </div>
                <div ref={text2Ref} className="ubuntu-medium text-right">
                    <div className="overflow-hidden mb-1 pb-2">
                        <h2 className="lg:text-7xl md:text-6xl text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-slate-300 to-blue-400">
                            500+
                        </h2>
                    </div>
                    <div className="overflow-hidden">
                        <p className="lg:text-xl md:text-lg text-md text-blue-400">
                            Projects delivered <br /> with excellence
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;