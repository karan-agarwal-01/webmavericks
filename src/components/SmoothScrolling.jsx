import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import "lenis/dist/lenis.css"; 

gsap.registerPlugin(ScrollTrigger);

const SmoothScrolling = ({ children }) => {
    const lenisRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,      
            duration: 1.5,   
            smoothWheel: true, 
            syncTouch: false, 
        });

        lenisRef.current = lenis;
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

    useEffect(() => {
        if (!lenisRef.current) return;
        
        setTimeout(() => {
            lenisRef.current.scrollTo(0, { immediate: true });
        }, 10);
    }, [pathname]);

    return <>{children}</>;
};

export default SmoothScrolling;