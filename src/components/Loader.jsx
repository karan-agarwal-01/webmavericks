import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const orbRef = useRef(null);
  const textRef = useRef(null);

  const meshOrb1Ref = useRef(null);
  const meshOrb2Ref = useRef(null);
  const meshOrb3Ref = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      const split = new SplitType(textRef.current, { types: "chars" });

      gsap.set(split.chars, { 
        opacity: 0, 
        y: 20, 
        display: "inline-block" 
      });

      gsap.to(meshOrb1Ref.current, { x: "10vw", y: "15vh", duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(meshOrb2Ref.current, { x: "-15vw", y: "-10vh", duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(meshOrb3Ref.current, { scale: 1.4, opacity: 0.4, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      
      gsap.to(ring1Ref.current, { rotation: 360, duration: 10, repeat: -1, ease: "none" });
      gsap.to(ring2Ref.current, { rotation: -360, duration: 15, repeat: -1, ease: "none" });

      const tl = gsap.timeline({
        onComplete: () => onComplete && onComplete(),
      });

      tl.to(split.chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
      })
      .to(orbRef.current, {
        scale: 1.2,
        filter: "brightness(1.5) blur(2px)",
        duration: 1.5,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
      }, "<")
      .to(split.chars, {
        y: -30,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: "power4.in",
      }, "+=1.2") 
      .to([ring1Ref.current, ring2Ref.current, orbRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "back.in(1.2)",
        stagger: 0.05,
      }, "-=0.4")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
      }, "-=0.2");
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-[#02040a] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div ref={meshOrb1Ref} className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/20 blur-[60px]" />
        <div ref={meshOrb2Ref} className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/20 blur-[70px]" />
        <div ref={meshOrb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[50px]" />
      </div>

      <div className="relative z-10 flex items-center justify-center scale-90 md:scale-100">
        <div ref={ring1Ref} className="absolute w-64 h-64 border-t-2 border-l border-blue-500/30 rounded-full" />
        <div ref={ring2Ref} className="absolute w-48 h-48 border-b border-r border-dashed border-indigo-400/20 rounded-full" />
        <div ref={orbRef} className="absolute w-20 h-20 bg-blue-600 rounded-full shadow-[0_0_80px_rgba(37,99,235,0.4)] blur-[1px]" />

        <div className="relative z-10">
          <h2
            ref={textRef}
            className="text-white text-3xl md:text-5xl ubuntu-bold tracking-[0.2em] uppercase mix-blend-difference text-center visible!"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            Loading...
          </h2>
        </div>
      </div>

      <div className="absolute bottom-12 overflow-hidden">
        <p className="text-blue-400/40 text-[10px] tracking-[0.5em] uppercase ubuntu-medium animate-pulse">
          System Initializing
        </p>
      </div>
    </div>
  );
};

export default Preloader;