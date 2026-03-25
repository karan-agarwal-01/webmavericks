import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AboutHeroSection = () => {
    const compRef = useRef(null);
    const headingRef = useRef(null);
    const headingSplitRef = useRef(null); 

    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const orb3Ref = useRef(null);

    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);
    const shape3Ref = useRef(null);
    const shape4Ref = useRef(null);

    useEffect(() => {
        headingSplitRef.current = new SplitType(headingRef.current, { types: "words, chars" });

        let ctx = gsap.context(() => {
            gsap.from(headingSplitRef.current.chars, {
                y: 60,
                opacity: 0,
                rotateX: -30,
                duration: 1.2,
                stagger: 0.02,
                ease: "expo.out",
                delay: 0.2
            });

            gsap.to(orb1Ref.current, { x: "15vw", y: "15vh", scale: 1.2, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to(orb2Ref.current, { x: "-10vw", y: "-20vh", scale: 1.5, duration: 12, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
            gsap.to(orb3Ref.current, { scale: 1.4, opacity: 0.4, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });

            gsap.to(shape1Ref.current, { y: -25, rotation: 15, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to(shape2Ref.current, { y: 20, rotation: -10, duration: 4.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
            gsap.to(shape3Ref.current, { y: -30, x: -15, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
            gsap.to(shape4Ref.current, { y: 35, rotation: 45, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 });

        }, compRef);

        return () => {
            ctx.revert();
            if (headingSplitRef.current) headingSplitRef.current.revert();
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
            stagger: { each: 0.04, repeat: -1, yoyo: true }
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

    return (
        <section 
            data-cursor="yellow" 
            ref={compRef} 
            className="w-full min-h-[60vh] flex flex-col items-center justify-center relative overflow-hidden bg-slate-950"
        >            
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-transparent z-0"></div>
                <div ref={orb1Ref} className="absolute -top-20 -left-20 w-31.25 h-31.25 rounded-full bg-fuchsia-500 blur-[120px] z-10 opacity-80"></div>
                <div ref={orb2Ref} className="absolute -bottom-40 -right-20 w-37.5 h-37.5 rounded-full bg-sky-400 blur-[120px] z-10 opacity-60"></div>
                <div ref={orb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25 h-25 rounded-full bg-indigo-500 blur-[100px] z-10 opacity-40"></div>
                <div className="absolute inset-0 z-20 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            </div>

            <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-7xl mx-auto w-full">
                <div ref={shape1Ref} className="absolute top-[25%] left-[10%] w-16 h-16 border-2 border-fuchsia-500/30 rounded-full backdrop-blur-md"></div>
                <div ref={shape1Ref} className="absolute bottom-[30%] left-[5%] w-12 h-12 bg-sky-500/20 border-none blur-[2px] rounded-full backdrop-blur-md"></div>
                <div ref={shape2Ref} className="absolute bottom-[20%] left-[18%] w-24 h-24 bg-linear-to-br from-indigo-500/10 to-transparent border border-white/5 backdrop-blur-sm rounded-xl rotate-12"></div>
                <div ref={shape3Ref} className="absolute top-[20%] right-[15%] w-12 h-12 bg-sky-500/20 rounded-full blur-[2px]"></div>
                <div ref={shape4Ref} className="absolute bottom-[25%] right-[10%] w-20 h-20 border border-white/10 rounded-lg rotate-45 backdrop-blur-md bg-white/5"></div>
                <div ref={shape1Ref} className="absolute top-[35%] right-[20%] w-16 h-16 border-2 border-fuchsia-500/30 rounded-full backdrop-blur-md"></div>
            </div>

            <div className="z-20 cursor-default flex flex-col items-center px-6 text-center">
                <h1 
                    ref={headingRef} 
                    onMouseEnter={handleHeadingHover} 
                    onMouseLeave={handleHeadingLeave} 
                    className="ubuntu-bold md:text-8xl text-6xl leading-none tracking-tighter text-white inline-block relative"
                >
                    About Us
                </h1>
            </div>
            
        </section>
    );
};

export default AboutHeroSection;