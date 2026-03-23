import { useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const CircleButton = ({ text }) => {
  const btnRef = useRef(null);
  const fillRef = useRef(null);

  const handleMove = (e) => {
    const bounds = btnRef.current.getBoundingClientRect();

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    gsap.to(btnRef.current, {
      x: (x - centerX) * 0.25,
      y: (y - centerY) * 0.25,
      duration: 0.3,
      ease: "power3.out",
    });

    const percentX = (x / bounds.width) * 100;
    const percentY = (y / bounds.height) * 100;

    gsap.set(fillRef.current, {
      transformOrigin: `${percentX}% ${percentY}%`,
    });
  };

  const handleEnter = (e) => {
    const bounds = btnRef.current.getBoundingClientRect();

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const percentX = (x / bounds.width) * 100;
    const percentY = (y / bounds.height) * 100;

    gsap.set(fillRef.current, {
      transformOrigin: `${percentX}% ${percentY}%`,
    });

    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.3,
    });

    gsap.fromTo(
      fillRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(fillRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative w-40 h-40 rounded-full border border-[#555555] hover:border-transparent overflow-hidden flex items-center justify-center lg:my-10 md:my-10 my-4 transition-colors">
      <span ref={fillRef} className="absolute w-full h-full bg-lime-500 rounded-full scale-0" />  
      <div className="relative z-10 flex items-center gap-1 text-[#555555] group-hover:text-black transition-colors duration-300">
        <span className="font-medium w-20">{text}</span>
        <GoArrowUpRight size={16} className="mt-0.5" />
      </div>
    </button>
  );
};

export default CircleButton;