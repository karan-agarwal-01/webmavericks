import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FiPlus } from "react-icons/fi";

const faqData = [
    {
        id: "01",
        question: "How long does it take to complete a project?",
        answer: "Project timelines depend on the scope and complexity of the work. A simple website may take a few weeks, while larger applications can take several months. We always provide a clear timeline after understanding your requirements.",
    },
    {
        id: "02",
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes, we provide ongoing support and maintenance to ensure your product runs smoothly after launch. This includes updates, performance optimization, and resolving any issues that may arise.",
    },
    {
        id: "03",
        question: "What is your pricing structure?",
        answer: "Our pricing is based on the specific requirements of your project. We offer flexible models including fixed pricing and milestone-based payments, ensuring transparency and value for your investment.",
    },
    {
        id: "04",
        question: "Can you integrate with our existing tools or systems?",
        answer: "Absolutely. We can integrate your existing tools, APIs, and CRM systems to ensure a seamless workflow and better efficiency across your business operations.",
    },
    {
        id: "05",
        question: "What does your onboarding process look like?",
        answer: "We start with a discovery call to understand your goals and requirements. After that, we define the project scope, timeline, and roadmap before moving into design and development.",
    },
];

const FaqSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);

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

    return (
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
                                            <h3 className={`text-md md:text-2xl ubuntu-semibold transition-colors duration-300 ${isOpen ? 'text-slate-50' : 'text-slate-300 group-hover:text-cyan-50'}`}>
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
                                            <p className="text-slate-400 text-sm md:text-lg leading-relaxed ubuntu-regular pl-14 md:pl-16 pr-4 md:pr-16">
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
    );
};

export default FaqSection;