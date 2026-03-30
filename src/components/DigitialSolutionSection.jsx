import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { GoArrowUpRight } from "react-icons/go";
import pic1 from "../assets/images/protect your investment, and grow your business with confidence_.jpg"
import pic2 from "../assets/images/Gradient ui ux elements background _ Free Vector.jpg"
import pic3 from "../assets/images/Programming coding background.jpg"


const showcaseData = [
    {
        title: "Product Strategy",
        subtitle: "Planning scalable and future-ready digital solutions.",
        img: pic1,
    },
    {
        title: "UI/UX Engineering",
        subtitle: "Designing clean, intuitive, and user-focused interfaces.",
        img: pic2,
    },
    {
        title: "Full Stack Development",
        subtitle: "Building secure, scalable, and high-performance applications.",
        img: pic3,
    }
];

const DigitalSolutionEditorial = () => {
    const sectionRef = useRef(null);
    const leftColumnRef = useRef(null);

    useEffect(() => {
        let splits = [];

        let ctx = gsap.context(() => {
            const heading = document.querySelector(".editorial-heading");
            const text = document.querySelector(".editorial-text");
            
            const splitHeading = new SplitType(heading, { types: "words, chars" });
            const splitText = new SplitType(text, { types: "lines" });
            splits.push(splitHeading, splitText);

            splitText.lines.forEach(line => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('overflow-hidden');
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });

            gsap.fromTo(splitHeading.words,
                { y: 100, skewY: 10, opacity: 0 },
                {
                    y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.02, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
                }
            );

            gsap.fromTo(splitText.lines,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }
                }
            );

            const cards = gsap.utils.toArray(".showcase-card");
            
            cards.forEach((card, i) => {
                const img = card.querySelector("img");
                const content = card.querySelector(".card-content");

                gsap.fromTo(card,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );

                gsap.to(img, {
                    yPercent: -10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });

        }, sectionRef);

        return () => {
            splits.forEach(split => split.revert());
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-[#f8fafc] text-slate-900">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 md:px-8 relative pb-4 lg:pb-0">
                <div ref={leftColumnRef}className="w-full lg:w-1/2 h-auto lg:h-screen lg:sticky top-0 flex flex-col justify-center pb-12 lg:-mt-10 py-4 lg:py-0 pr-0 lg:pr-12 z-20"
                >
                    <div className="lg:max-w-lg w-full">
                        <h2 className="editorial-heading text-4xl md:text-7xl lg:text-6xl leading-[0.95] ubuntu-bold text-slate-950 tracking-tighter lg:mb-10 md:mb-6 mb-4">
                            Building Scalable Digital Products
                        </h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div className="flex items-center shrink-0 mt-2 sm:mt-0">
                                <div className="w-16 md:w-20 h-[1.5px] bg-slate-900"></div>
                                <div className="w-8 h-8 rounded-full border border-cyan-400 flex items-center justify-center -ml-1 bg-[#f8fafc]">
                                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                                </div>
                            </div>

                            <p className="editorial-text text-lg text-slate-600 ubuntu-medium leading-relaxed">
                            We design and develop reliable digital solutions by combining modern technologies, clean architecture, and user-focused design—helping businesses build, scale, and succeed in the digital world.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center gap-4 mt-20 opacity-50">
                            <span className="text-sm ubuntu-bold tracking-widest uppercase">Scroll</span>
                            <div className="w-px h-12 bg-slate-400 overflow-hidden relative">
                                <div className="w-full h-full bg-slate-900 animate-[scrollDown_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-8 pb-4 lg:py-[10vh] relative z-10">
                    {showcaseData.map((item, index) => (
                        <div 
                            key={index} 
                            className="showcase-card group relative w-full flex flex-col cursor-pointer"
                        >
                            <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl mb-6 bg-slate-200">
                                <img 
                                    data-cursor="light"
                                    src={item.img} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-[120%] object-cover -top-[10%] transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="card-content flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl ubuntu-bold text-slate-950 tracking-tight transition-colors duration-300 group-hover:text-cyan-400">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 ubuntu-medium text-md md:text-lg mt-2">
                                        {item.subtitle}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0">
                                    <GoArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <style jsx>{`
                @keyframes scrollDown {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}</style>
        </section>
    );
};

export default DigitalSolutionEditorial;