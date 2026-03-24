import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css"; 

gsap.registerPlugin(ScrollTrigger);

const SmoothScrolling = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,      
            duration: 1.5,   
            smoothWheel: true, 
            syncTouch: false, 
        });

        lenis.on("scroll", ScrollTrigger.update);

        const update = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(update);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrolling;