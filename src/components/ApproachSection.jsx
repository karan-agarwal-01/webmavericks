import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import parallaxImg from "../assets/images/photo-1575089976121-8ed7b2a54265.avif";
import rightImg from "../assets/images/photo-1639485527538-979deb8edd2f.avif";
import leftImg from "../assets/images/premium_photo-1661573729122-6619f62ef0ea.avif";
import CrossBlocks from "./Crossblocks";

const ApproachSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let splits = [];

    let ctx = gsap.context(() => {

      const headings = gsap.utils.toArray(".split-heading");

      headings.forEach((heading) => {
        const split = new SplitType(heading, { types: "lines" });
        splits.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.classList.add("overflow-hidden");
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.fromTo(
          split.lines,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
            },
          }
        );
      });

      gsap.utils.toArray(".fade-text").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      gsap.to(".parallax-img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".float-img").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: i % 2 === 0 ? -60 : 60 },
          {
            y: i % 2 === 0 ? 60 : -60,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

    }, containerRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-8 px-6 md:px-12 overflow-hidden 
      bg-linear-to-b from-[#050e36] via-[#11192d] to-[#02061a]"
    >

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-100 h-100 bg-cyan-700 blur-[120px] top-20 left-10"></div>
        <div className="absolute w-75 h-75 bg-blue-500 blur-[100px] bottom-10 right-10"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mb-12 relative z-10">
        <div className="lg:w-1/2">
          <h2 className="split-heading text-5xl md:text-6xl lg:text-7xl ubuntu-bold text-cyan-400 tracking-tight">
            Our Approach
          </h2>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 text-[#90a1b9]">
          <p className="fade-text text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni commodi, modi eligendi provident iure ut explicabo officia placeat deleniti consectetur repellat, reprehenderit dignissimos quaerat blanditiis unde? Illo quod neque praesentium.
          </p>

          <p className="fade-text text-lg leading-relaxed">
            Our team focuses on innovation, performance, and scalability to help
            businesses grow in the modern digital landscape.
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="float-img">
          <div className="rounded-xl overflow-hidden shadow-2xl -rotate-6">
            <img
              src={leftImg}
              className="w-full h-75 object-cover transition duration-500"
              data-cursor='light'
            />
          </div>
        </div>
        <div className="parallax-container">
          <div className="overflow-hidden shadow-2xl h-120">
            <img
              src={parallaxImg}
              className="parallax-img w-120 h-[120%] object-cover"
              data-cursor='light'
            />
          </div>
        </div>
        <div className="float-img">
          <div className="rounded-xl overflow-hidden shadow-2xl rotate-6">
            <img
              src={rightImg}
              className="w-full h-75 object-cover transition duration-500"
              data-cursor='light'
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;