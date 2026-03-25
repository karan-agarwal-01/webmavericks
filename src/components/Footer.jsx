import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

const socialLinks = [
    { name: "Facebook", icon: FiFacebook, href: "#" },
    { name: "LinkedIn", icon: FiLinkedin, href: "#" },
    { name: "Instagram", icon: FiInstagram, href: "#" },
];

const policyLinks = [
    { name: "REFUND POLICY", href: "#" },
    { name: "PRIVACY POLICY", href: "#" },
    { name: "TERM AND CONDITION", href: "#" },
    { name: "PRICING POLICY", href: "#" },
];

const FooterSection = () => {
    const footerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);
    const ctaSplitRef = useRef(null);

    useEffect(() => {
        const titleSplit = new SplitType(titleRef.current, { types: "words" });
        const descSplit = new SplitType(descRef.current, { types: "lines" });
        ctaSplitRef.current = new SplitType(ctaRef.current, { types: "chars" });

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                }
            });

            tl.from(titleSplit.words, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power3.out",
            }, 0);

            tl.from(descSplit.lines, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            }, 0.2);

            tl.from(".social-link", {
                x: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
            }, 0.4);

            tl.from(ctaSplitRef.current.chars, {
                y: 100,
                rotationZ: 10,
                opacity: 0,
                duration: 1.2,
                stagger: 0.04,
                ease: "back.out(1.5)",
            }, 0.3);

        }, footerRef);

        return () => {
            titleSplit.revert();
            descSplit.revert();
            if (ctaSplitRef.current) ctaSplitRef.current.revert();
            ctx.revert();
        };
    }, []);

    const handleCtaHover = () => {
        if (!ctaSplitRef.current) return;

        gsap.killTweensOf(ctaSplitRef.current.chars);

        gsap.to(ctaSplitRef.current.chars, {
            y: -12,
            scale: 1.05,
            duration: 0.3,
            ease: "sine.inOut",
            stagger: {
                each: 0.06,
                repeat: -1,
                yoyo: true
            }
        });
    };

    const handleCtaLeave = () => {
        if (!ctaSplitRef.current) return;

        gsap.killTweensOf(ctaSplitRef.current.chars);

        gsap.to(ctaSplitRef.current.chars, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
        });
    };

    return (
        <footer ref={footerRef} data-cursor="cyan" className="py-16 md:py-8 px-6 md:px-8 lg:px-10 bg-slate-900 text-slate-100 relative overflow-hidden z-40 border-t border-slate-900 -mt-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    <div className="lg:col-span-5 flex flex-col gap-8 pr-12 lg:border-r border-slate-700 pb-12 lg:pb-0">
                        <div className="overflow-hidden pb-2">
                            <h3 ref={titleRef} className="text-2xl ubuntu-bold tracking-tight text-slate-100 transition-colors duration-300">
                                Webmavericks Softcoders Pvt. Ltd.
                            </h3>
                        </div>
                        <p ref={descRef} className="text-slate-400 text-md leading-relaxed ubuntu-regular max-w-sm">
                            Our team is always available to answer questions, offer guidance, and provide ongoing support. We believe in collaborative partnerships that drive sustainable digital growth.
                        </p>
                    </div>
                    <div className="lg:col-span-3 flex flex-col lg:items-center justify-center lg:border-r border-slate-700 lg:px-12 py-12 lg:py-0 border-y lg:border-y-0 relative">
                        <div className="lg:hidden absolute top-0 left-0 right-0 h-px bg-slate-800"></div>
                        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-px bg-slate-800"></div>
                        <div className="flex flex-col items-start gap-8 w-full">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} className="social-link group flex lg:justify-center items-center gap-4 text-slate-500 ubuntu-medium text-xl md:text-2xl tracking-tight transition-colors duration-300 hover:text-slate-200">
                                    <link.icon className="hidden md:block text-cyan-700 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
                                    <span className="ubuntu-medium text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-300 after:bg-cyan-400">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <a href="#" onMouseEnter={handleCtaHover} onMouseLeave={handleCtaLeave} data-cursor-interactive className="lg:col-span-4 flex items-center justify-center group relative h-48 lg:h-full lg:pl-20 mt-12 lg:mt-0 transition-colors duration-500 rounded-2xl lg:rounded-none">
                        <div className="overflow-hidden pb-4 pt-4 px-8">
                            <h2 ref={ctaRef} className="text-6xl md:text-7xl xl:text-5xl ubuntu-bold tracking-tighter text-cyan-400 inline-block transition-transform duration-700 group-hover:scale-105">
                                LET'S TALK
                            </h2>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-700 pt-8">
                    <p className="text-slate-500 ubuntu-regular text-md tracking-tight text-center md:text-left">
                        © 2026–2027 | All rights reserved by Webmavericks Softcoders Pvt. Ltd.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {policyLinks.map((link) => (
                            <a key={link.name} href={link.href} className="relative text-slate-500 hover:text-cyan-400 ubuntu-medium text-sm tracking-widest transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-300 after:bg-cyan-400">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;