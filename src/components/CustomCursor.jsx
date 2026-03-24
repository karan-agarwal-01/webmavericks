import { useEffect, useRef } from "react";
import gsap from "gsap";

const cursorColors = {
  cyan: "#22d3ee",     
  emerald: "#34d399",  
  dark: "#0f172a",     
  light: "#f8fafc",
  yellow: "#fae234"    
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(cursor, { borderColor: cursorColors.cyan });
    gsap.set(follower, { backgroundColor: cursorColors.cyan });

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
        xPercent: -50,
        yPercent: -50,
      });
    };

    const loop = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      gsap.set(follower, {
        x: posX,
        y: posY,
        xPercent: -50,
        yPercent: -50,
      });

      requestRef.current = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e) => {
      const themeTarget = e.target.closest("[data-cursor]");
      const isClickable = e.target.closest("button, a, input, [data-cursor-interactive]");

      let targetColor = cursorColors.cyan;
      if (themeTarget) {
        const theme = themeTarget.getAttribute("data-cursor");
        targetColor = cursorColors[theme] || cursorColors.cyan;
      }

      gsap.to(cursor, {
        borderColor: targetColor,
        scale: isClickable ? 1.8 : 1,
        opacity: isClickable ? 0.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });

      
      gsap.to(follower, {
        borderColor: targetColor,
        backgroundColor: targetColor,
        scale: isClickable ? 1.8 : 1,
        opacity: isClickable ? 0.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    loop();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-9999"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] rounded-full pointer-events-none z-9998"
      />
    </>
  );
};

export default CustomCursor;