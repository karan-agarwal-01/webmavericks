import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import SplitType from "split-type";
import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";

const LetstakSection = () => {

    const section2Ref = useRef(null);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {

        if (!headingRef.current) return;

        const headingSplit = new SplitType(headingRef.current, { types: 'words, chars' });

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });

            tl.from(headingSplit.chars, {
                y: 100,
                opacity: 0,
                rotationX: -80,
                transformOrigin: "50% 50% -50px",
                stagger: 0.02,
                duration: 1,
                ease: "power3.out",
            }, "-=0.2");

            tl.from(btnRef.current, {
                y: 30,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "back.out(1.5)"
            }, "-=0.6");

        }, section2Ref);

        return () => {
            headingSplit.revert();
            ctx.revert();
        };
    }, []);

    return (
        <section data-cursor="dark" ref={section2Ref} className="h-auto flex items-center justify-center px-6 md:px-12 lg:px-12 shrink-0 overflow-hidden bg-[#f8fafc] py-4">
            <div className="relative z-10 flex flex-col items-center">
                <p ref={subtitleRef} className="text-lg md:text-2xl ubuntu-medium mb-4 md:mb-2 tracking-wide text-black uppercase mt-4">Work with us</p>
                <h2 ref={headingRef} className="text-3xl md:text-6xl lg:text-8xl ubuntu-semibold tracking-tight mb-4 text-center max-w-5xl leading-[1.05] text-slate-600">
                    We would love to hear <br className="hidden md:block" /> more about your project
                </h2>
                <div ref={btnRef}>
                    <CircleButton text={"Let's Talk Us"} onClick={() => navigate('/contact')} />
                </div>
            </div>
        </section>
    )
}

export default LetstakSection
