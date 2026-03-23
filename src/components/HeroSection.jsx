import { GoArrowUpRight } from "react-icons/go";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import arrowImg from "../assets/images/arrow-down-big.png";
import bgImg from "../assets/images/1-1.jpg";

const HeroSection = () => {
    const arrow1Ref = useRef(null);
    const arrow2Ref = useRef(null);
    const tl = useRef(null);

    const headingRef = useRef(null);
    const textRef = useRef(null);
    const text2Ref = useRef(null);

    const bgRef = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(arrow1Ref.current, {
                x: 15,
                y: -15,
                opacity: 0,
                duration: 0.3,
                ease: "power3.out",
            })
            .fromTo(
                arrow2Ref.current,
                { x: -15, y: 15, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out",
                },
                "-=0.2"
            );
    }, []);

    const handleMouseEnter = () => {
        tl.current.play();
    };

    const handleMouseLeave = () => {
        tl.current.reverse();
    };

    useEffect(() => {
        const headingSplit = new SplitType(headingRef.current, {
            types: "lines, words, chars",
        });

        const textSplit = new SplitType(textRef.current, {
            types: "lines, words, chars",
        });

        const text2Split = new SplitType(text2Ref.current, {
            types: "lines, words, chars",
        });

        gsap.from(headingSplit.chars, {
            x: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.03,
            ease: "power3.out",
        });

        gsap.from(textSplit.words, {
            x: 80,
            opacity: 0,
            duration: 2,
            stagger: 0.03,
            delay: 1.2,
            ease: "power3.out",
        });

        gsap.from(text2Split.lines, {
            y: 100,
            opacity: -2,
            duration: 2,
            stagger: 0.03,
            delay: 1.5,
            ease: "power4.out",
        });
    }, []);

    useEffect(() => {
        gsap.to(bgRef.current, {
            scale: 1.15,
            y: 20,         
            duration: 8,         
            ease: "power1.inOut",
            repeat: -1,          
            yoyo: true,          
        });
    }, []);

    return (
        <div className="min-h-screen w-full text-white flex flex-col relative">
            <div className="lg:px-22 md:px-22 px-6 lg:pt-20 md:pt-20 pt-20 lg:pb-16 md:pb-12 pb-4 cursor-pointer lg:w-lg md:w-lg w-xs mb-5">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="flex gap-2">
                        <p className="ubuntu-regular lg:text-[20px] md:text-[20px] text-md tracking-wider">
                            We are leading technology <br />solutions providing company.
                        </p>
                        <div className="relative w-6 h-6 overflow-hidden">
                            <div ref={arrow1Ref} className="absolute top-0 left-0">
                                <GoArrowUpRight size={26} />
                            </div>
                            <div ref={arrow2Ref} className="absolute top-0 left-0 opacity-0">
                                <GoArrowUpRight size={26} />
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                </div>
            </div>
            <div className="lg:px-22 md:px-22 px-6 relative lg:max-w-4xl md:max-w-3xl max-w-5xl lg:mb-22 md:mb-20 mb-20 lg:mt-0 md:mt-0 mt-10">
                <h1 ref={headingRef} className="ubuntu-bold lg:text-7xl md:text-6xl text-4xl lg:leading-20 md:leading-20">Webmavericks <br /> Softcoders Pvt Ltd.</h1>
                <div ref={textRef} className="text-md lg:absolute top-0 right-0 leading-6 my-4 md:my-0">
                    <p className="text-[#a8a8a8] ubuntu-medium tracking-wide">Unlock the potential of your brand <br /> with our expertise.</p>
                    <div className="flex">
                        <p className="text-[#a8a8a8] ubuntu-medium">We make the</p>
                        <p className="ubuntu-medium ml-1">BEST IT Solutions.</p>
                    </div>
                </div>
            </div>
            <div className="lg:px-22 md:px-22 px-6 lg:pb-5 md:pb-5 pb-1 flex items-center justify-between">
                <div>
                    <img src={arrowImg} className="lg:w-40 lg:h-40 md:w-32 md:h-32 h-20 w-20  object-contain bg-transparent" />
                </div>
                <div ref={text2Ref} className="ubuntu-medium">
                    <div className="overflow-hidden">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl lg:my-2 md:my-2 my-3">500+</h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="lg:text-xl md:text-lg text-md">
                            Projects completed <br /> successfully
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden lg:mt-0 md:mt-0 mt-60">
                <img ref={bgRef} src={bgImg}  className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default HeroSection;
