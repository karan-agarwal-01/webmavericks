import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CrossBlocks = () => {
    const sectionRef = useRef(null);
    const leftBlockRef = useRef(null);
    const rightBlockRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            });

            tl.to(leftBlockRef.current, {
                y: 200,
                ease: "none",
            }, 0);

            tl.to(rightBlockRef.current, {
                y: -200,
                ease: "none",
            }, 0);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (

        <div ref={sectionRef} className="relative hidden md:block w-full h-20 ml-60 lg:-mt-20 md:-mt-20 -mt-20">
            <div ref={leftBlockRef} className="absolute top-0 left-1/4 w-12 h-12 bg-gray-800 z-10" />
            <div ref={rightBlockRef} className="absolute bottom-0 left-15 w-12 h-12 bg-lime-400 z-20" />
        </div>

    );
};

export default CrossBlocks;
