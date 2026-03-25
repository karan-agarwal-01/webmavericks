import { useEffect, useRef } from "react";
import gsap from "gsap";

const CrossBlocks = ({ x = 0, _x = 0, y = 120, _y = -120 }) => {
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
                    scrub: 1, 
                },
            });

            tl.to(leftBlockRef.current, { y: y, x: x, rotate: 90, ease: "none" }, 0);
            tl.to(rightBlockRef.current, { y: _y, x: _x, rotate: -90, ease: "none" }, 0);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative hidden md:block w-32 h-64 pointer-events-none opacity-70">
            <div ref={leftBlockRef} className="absolute top-10 left-0 w-14 h-14 bg-slate-400 rounded-xl z-10 shadow-xl" />
            <div ref={rightBlockRef} className="absolute bottom-10 right-2 w-12 h-12 bg-linear-to-br from-cyan-500 to-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-lg z-20" />
        </div>
    );
};

export default CrossBlocks;