import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiX } from "react-icons/fi";
import SplitType from "split-type";
import { 
    FiHome, 
    FiUsers, 
    FiLayers, 
    FiPhoneCall, 
    FiFacebook,
    FiLinkedin,
    FiInstagram 
} from "react-icons/fi";

const navLinks = [
    { name: "Home", icon: FiHome, href: "/" },
    { name: "About Us", icon: FiUsers, href: "/about" },
    { name: "Services", icon: FiLayers, href: "/services" },
    { name: "Contact us", icon: FiPhoneCall, href: "/contact" },
];

const socialLinks = [
    { name: "Facebook", icon: FiFacebook, href: "#" },
    { name: "LinkedIn", icon: FiLinkedin, href: "#" },
    { name: "Instagram", icon: FiInstagram, href: "#" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const headerRef = useRef(null);
    const menuIconRef = useRef(null);
    const dotsRef = useRef([]);
    const overlayRef = useRef(null);
    const menuTl = useRef(null); 
    
    const ctaRef = useRef(null);


    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(headerRef.current.children, {
                y: -40,
                opacity: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });
        }, headerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const linkSplit = new SplitType(".nav-link-text", { types: "chars" });
        const textSplit = new SplitType(".split-text", { types: "lines" });
        const ctaSplit = new SplitType(ctaRef.current, { types: "chars" });

        let ctx = gsap.context(() => {
            menuTl.current = gsap.timeline({ paused: true, reversed: true });

            menuTl.current
                .fromTo(overlayRef.current, 
                    { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
                    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.2, ease: "expo.inOut" }
                )
                .fromTo(linkSplit.chars, {
                    y: 100, 
                    skewY: 10,
                    opacity: 0 
                }, { 
                    y: 0, 
                    skewY: 0,
                    opacity: 1, 
                    duration: 1.2, 
                    stagger: 0.02, 
                    ease: "expo.out" 
                }, "-=0.6")
                .fromTo(".nav-link-icon", {
                    x: -20,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out"
                }, "-=1")
                .fromTo(textSplit.lines, {
                    y: 40, 
                    opacity: 0 
                }, { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    stagger: 0.04, 
                    ease: "expo.out" 
                }, "-=0.8")
                .fromTo(ctaSplit.chars, {
                    y: -40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.03,
                    ease: "power4.out"
                }, "-=0.8")
                .fromTo(".menu-shape", {
                    scale: 0.8, 
                    opacity: 0,
                    filter: "blur(10px)"
                }, { 
                    scale: 1, 
                    opacity: 1, 
                    filter: "blur(0px)",
                    duration: 1.5, 
                    stagger: 0.2, 
                    ease: "power3.out" 
                }, "-=1");

        }, overlayRef);

        return () => {
            linkSplit.revert();
            textSplit.revert();
            ctaSplit.revert();
            ctx.revert(); 
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            menuTl.current.play();
            document.body.style.overflow = "hidden"; 
        } else {
            menuTl.current.timeScale(2.5).reverse();
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const handleMenuEnter = () => {
        if (isOpen) return; 
        gsap.to(menuIconRef.current, { rotate: 90, scale: 0.9, duration: 0.6, ease: "expo.out" });
        gsap.to(dotsRef.current, {
            scale: 1, borderRadius: "2px", opacity: 0.8, duration: 0.4, ease: "power2.out",
            stagger: { amount: 0.2, grid: [3, 3], from: "edges" }
        });
    };
    const handleMenuLeave = () => {
        if (isOpen) return;
        gsap.to(menuIconRef.current, { rotate: 0, scale: 1, duration: 0.6, ease: "expo.out" });
        gsap.to(dotsRef.current, { scale: 1.5, borderRadius: "50%", opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.02 });
    };

    const handleLinkEnter = (e) => {
        const text = e.currentTarget.querySelector('.nav-link-text');
        const icon = e.currentTarget.querySelector('.nav-link-icon');
        
        gsap.to(text, { x: 15, letterSpacing: "4px", color: "#22d3ee", duration: 0.5, ease: "expo.out" });
        gsap.to(icon, { x: 10, color: "#22d3ee", scale: 1.1, duration: 0.5, ease: "expo.out" });
    };
    const handleLinkLeave = (e) => {
        const text = e.currentTarget.querySelector('.nav-link-text');
        const icon = e.currentTarget.querySelector('.nav-link-icon');
        
        gsap.to(text, { x: 0, letterSpacing: "normal", color: "#e2e8f0", duration: 0.5, ease: "expo.out" });
        gsap.to(icon, { x: 0, color: "#ffffff", scale: 1, duration: 0.5, ease: "expo.out" });
    };

    return (
        <>
            <header ref={headerRef} className="fixed top-0 left-0 w-full z-100 px-6 md:px-12 lg:px-12 pt-8 pb-4 flex justify-between items-center pointer-events-none mix-blend-difference text-white">
                <div className="pointer-events-auto cursor-pointer group" data-cursor-interactive>
                    <h1 className="text-xl md:text-2xl block md:hidden ubuntu-bold tracking-tighter transition-transform duration-500 group-hover:scale-105 origin-left">
                        Webmavericks
                    </h1>
                </div>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto flex items-center gap-4 group focus:outline-none cursor-pointer" 
                    onMouseEnter={handleMenuEnter} 
                    onMouseLeave={handleMenuLeave} 
                    data-cursor-interactive 
                    aria-label="Open Menu"
                >
                    <span className="hidden sm:block text-sm md:text-xl ubuntu-medium tracking-widest uppercase transition-transform duration-300 group-hover:-translate-x-1">Menu</span>
                    <div ref={menuIconRef} className="grid grid-cols-3 gap-1 w-6 h-6 items-center justify-center origin-center p-0.5 rounded-sm transition-colors duration-300">
                        {[...Array(9)].map((_, index) => (
                            <div 
                                key={index}
                                ref={(el) => (dotsRef.current[index] = el)}
                                className="w-1 h-1 bg-white rounded-full mx-auto"
                            ></div>
                        ))}
                    </div>
                </button>
            </header>

            <div ref={overlayRef} className={`fixed inset-0 z-200 bg-linear-to-b from-slate-600 via-sky-900 to-blue-950 text-white flex ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }} >
                
                <button 
                    onClick={() => setIsOpen(false)}
                    data-cursor-interactive
                    className="menu-shape absolute top-8 right-6 md:right-12 z-50 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:rotate-90 transition-all duration-500"
                >
                    <FiX size={32} className="text-white" />
                </button>

                <div className="flex w-full h-full flex-col lg:flex-row">                    
                    <div className="hidden lg:flex flex-col justify-between w-1/4 p-12 border-r border-gray-500/50 relative z-10">
                        <div className="overflow-hidden pb-2">
                            <h2 className="split-text text-2xl ubuntu-bold tracking-tighter">Webmavericks Softcoders Pvt Ltd.</h2>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className="overflow-hidden pb-1">
                                <h4 className="split-text text-lg ubuntu-bold mb-2">Follow Us</h4>
                            </div>
                            {
                            socialLinks.map((social, index) => (
                                <div key={index} className="overflow-hidden pb-1">
                                    <a 
                                        href={social.href} 
                                        className="text-slate-400 hover:text-cyan-400 ubuntu-medium transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-500 after:bg-cyan-400 w-max flex gap-3 items-center"
                                    >
                                        <div className="shrink-0 flex items-center justify-center split-text">
                                            <social.icon className="w-4.5 h-4.5" />
                                        </div>
                                        
                                        <div className="split-text">
                                            {social.name}
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                        </div>

                        <div className="overflow-hidden pt-4 pb-4 cursor-pointer" data-cursor-interactive>
                            <h3 ref={ctaRef} className="text-5xl ubuntu-bold text-cyan-400 inline-block hover:text-cyan-300 transition-colors duration-500">
                                Let's talk
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full max-w-xl h-full z-20">
                        <nav className="flex flex-col gap-8 w-full justify-center items-start ml-50">
                            {navLinks.map((link, idx) => (
                                <div key={idx} className="overflow-hidden py-3">
                                    <a 
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        onMouseEnter={handleLinkEnter}
                                        onMouseLeave={handleLinkLeave}
                                        data-cursor-interactive
                                        className="group flex gap-5 items-center w-max pr-16 text-white"
                                    >
                                        <div className="nav-link-icon shrink-0 text-white">
                                            <link.icon className="w-10 h-10" />
                                        </div>
                                        <span className="nav-link-text block text-4xl  ubuntu-bold text-slate-200 tracking-tighter">
                                            {link.name}
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex flex-col justify-center w-1/4 p-12 border-l border-gray-500/50 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="overflow-hidden pb-2 mb-4">
                                <h3 className="split-text text-3xl ubuntu-bold">Get in touch</h3>
                            </div>
                            
                            <div className="flex flex-col gap-6 text-slate-300 ubuntu-regular">
                                <div className="overflow-hidden">
                                    <a href="tel:+918810383605" className="split-text block text-xl hover:text-cyan-400 transition-colors w-max relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-500 after:bg-cyan-400">+91 987654321</a>
                                </div>
                                <div className="overflow-hidden">
                                    <a href="mailto:info@nilanktechnologies.com" className="split-text block text-lg hover:text-cyan-400 transition-colors wrap-break-word w-max relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-out after:duration-500 after:bg-cyan-400">abc@gmail.com</a>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="split-text leading-relaxed text-slate-400 max-w-62.5 mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, qui nulla pariatur earum dolorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;