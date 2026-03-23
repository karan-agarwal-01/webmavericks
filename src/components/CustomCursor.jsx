import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

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

    window.addEventListener("mousemove", moveCursor);

    const loop = () => {
        posX += (mouseX - posX) * 0.04;
        posY += (mouseY - posY) * 0.06;

      gsap.set(follower, {
        x: posX,
        y: posY,
        xPercent: -50,
        yPercent: -50,
      });

      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-2 h-2 bg-lime-300 rounded-full pointer-events-none z-9999"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-lime-300 rounded-full pointer-events-none z-9998"
      />
    </>
  );
};

export default CustomCursor;
