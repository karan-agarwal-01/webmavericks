import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FiPlus } from "react-icons/fi";
import CircleButton from "./CircleButton";
import SplitType from "split-type";

const faqData = [
    {
        id: "01",
        question: "How long does it typically take to complete a project?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: "02",
        question: "Do you offer post-launch support and maintenance?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "03",
        question: "What is your pricing structure?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        id: "04",
        question: "Can we integrate our existing tools and CRM?",
        answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
        id: "05",
        question: "What is the typical onboarding process?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
];

const FaqSection = () => {
    const sectionRef = useRef(null);
    const section2Ref = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);

    const [openId, setOpenId] = useState(faqData[0].id);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.from(headerRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".faq-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 85%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {

        if (!headingRef.current) return;

        const headingSplit = new SplitType(headingRef.current, { types: 'words, chars' });

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });

            tl.from(headingSplit.chars, {
                y: 100,
                opacity: 0,
                rotationX: -80,
                transformOrigin: "50% 50% -50px",
                stagger: 0.02,
                duration: 1,
                ease: "power3.out",
            }, "-=0.2");

            tl.from(btnRef.current, {
                y: 30,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "back.out(1.5)"
            }, "-=0.6");

        }, section2Ref);

        return () => {
            headingSplit.revert();
            ctx.revert();
        };
    }, []);

    return (
        <>
        <section ref={sectionRef} data-cursor="cyan" className="py-4 px-6 md:px-16 bg-linear-to-r to-slate-700 via-slate-800 from-blue-950 text-slate-50 relative overflow-hidden z-40 pb-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
                    <div className="lg:w-4/12 lg:sticky top-32" ref={headerRef}>
                        <h4 className="text-cyan-400 ubuntu-medium mb-4 tracking-wider text-sm md:text-md uppercase">Support Center</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl ubuntu-bold leading-[1.1] mb-4">
                            Frequently <br className="hidden lg:block" />
                            Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed ubuntu-regular max-w-sm">
                            Can't find the answer you're looking for? Reach out to our customer support team.
                        </p>
                    </div>
                    <div className="lg:w-8/12 w-full flex flex-col" ref={listRef}>
                        <hr className="border-slate-700" />
                        {faqData.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div key={faq.id} className="faq-item group border-b border-slate-700/80 last:border-none">
                                    <button onClick={() => toggleFaq(faq.id)} className="w-full flex items-center justify-between py-8 text-left focus:outline-none">
                                        <div className="flex items-center gap-6 md:gap-8 pr-4">
                                            <span className={`text-lg md:text-xl mt-1 ubuntu-medium transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-slate-600 group-hover:text-cyan-400'}`}>
                                                {faq.id}
                                            </span>
                                            <h3 className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${isOpen ? 'text-slate-50' : 'text-slate-300 group-hover:text-cyan-50'}`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 rotate-135' : 'border-slate-500 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-200'}`}>
                                            <FiPlus size={20} />
                                        </div>
                                    </button>
                                    <div className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${
                                            isOpen 
                                            ? "grid-rows-[1fr] opacity-100 mb-8" 
                                            : "grid-rows-[0fr] opacity-0 mb-0 pointer-events-none"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-slate-400 text-base md:text-lg leading-relaxed ubuntu-regular pl-14 md:pl-16 pr-4 md:pr-16">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section> 
        <section data-cursor="dark" ref={section2Ref} className="h-screen flex items-center justify-center px-6 md:px-12 lg:px-12 shrink-0 overflow-hidden bg-[#f8fafc]">
            <div className="relative z-10 flex flex-col items-center">
                <p ref={subtitleRef} className="text-lg md:text-2xl ubuntu-medium mb-4 md:mb-2 tracking-wide text-black uppercase mt-4">Work with us</p>
                <h2 ref={headingRef} className="text-4xl md:text-7xl lg:text-8xl ubuntu-semibold tracking-tight mb-4 text-center max-w-5xl leading-[1.05] text-slate-600">
                    We would love to hear <br className="hidden md:block" /> more about your project
                </h2>
                <div ref={btnRef}>
                    <CircleButton text={"Let's Talk Us"} />
                </div>
            </div>
        </section>
        </>
    );
};

export default FaqSection;