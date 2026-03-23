import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import parralaxImg from "../assets/images/Business.jpg";
import rightImg from "../assets/images/abd.jpg";
import CircleButton from "./CircleButton";
import CrossBlocks from "./Crossblocks";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitType(headingRef.current, {
        types: "lines", 
      });

      gsap.set(headingRef.current, {
        perspective: 1000, 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        split.lines,
        {
          y: 80,             
          rotationX: -90,     
          opacity: -1,
        },
        {
          y: 0,              
          rotationX: 0,      
          opacity: 1,
          stagger: 0.5,      
          duration: 2,
          ease: "back.out(1.5)", 
          transformOrigin: "50% 50% -50px",
        }
      );

      gsap.to(leftImgRef.current, {
        y: -360,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(rightImgRef.current, {
        y: 400,
        ease: "none",
        delay: 1,
        scrollTrigger: {
          trigger: rightImgRef.current,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
        },
      });

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl lg:text-5xl ubuntu-bold leading-tight lg:mb-20 md:mb-20 mb-10 md:w-3/4 perspective-[1000px]"
          >
            Accelerate your success with <br className="hidden md:block" /> our
            digital strategies
          </h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col items-start lg:gap-10 md:gap-10 gap-0">
            <div className="overflow-hidden lg:w-[30%] md:w-[30%] lg:h-150 md:h-150 mx-auto">
            <img ref={leftImgRef} src={parralaxImg} className="w-full h-full object-cover rounded-lg" alt="Business Parallax" />
            </div>
            <div className="max-w-sm lg:ml-12 md:ml-12 ml-0 lg:mt-20 md:mt-20 -mt-20">
                <div className="flex flex-col gap-5">
                  <p className="ubuntu-medium text-[#555555] text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel ducimus nobis eveniet, culpa necessitatibus ut laborum facilis quam laboriosam labore earum? Quibusdam voluptatem, dignissimos neque iure enim adipisci aliquam.
                  </p>
                  <p className="ubuntu-medium text-[#555555] text-md">
                  With a team of experienced professionals, the
                  company strives to help businesses achieve their
                  online objectives by providing tailored solutions that
                  cater to their unique needs.
                  </p>

                </div>
                <div className="flex justify-center md:justify-normal">
                  <CircleButton text={"Explore us"} />
                </div>
                <CrossBlocks />
            </div>
            <div ref={rightImgRef} className="overflow-hidden lg:w-[25%] lg:h-[25%] md:w-[25%] md:h-[25%] h-[75%] w-[75%] mx-auto lg:-mt-80 md:-mt-80 mt-2">
              <img src={rightImg} className="w-full h-full object-cover rounded-lg" alt="Business Parallax" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;