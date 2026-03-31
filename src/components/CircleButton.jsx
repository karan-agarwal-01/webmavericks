import { useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const CircleButton = ({ text, theme, onClick }) => {
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
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative lg:w-40 lg:h-40 md:w-40 md:h-40 w-36 h-36 rounded-full border  ${theme === "dark" ? "border-cyan-500" : "border-slate-900"} hover:border-transparent overflow-hidden flex items-center justify-center lg:my-10 md:my-4 my-0 transition-colors cursor-pointer`}>
      <span ref={fillRef} className="absolute w-full h-full bg-cyan-500 rounded-full scale-0" />  
      <div className={`relative z-10 flex items-center gap-1 ${theme === "dark" ? "text-white" : "text-slate-900"} group-hover:text-black transition-colors duration-300`}>
        <span className="ubuntu-medium w-28 text-md">{text}</span>
        <GoArrowUpRight size={18} className="mt-0.5" />
      </div>
    </button>
  );
};

export default CircleButton;