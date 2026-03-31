import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import CircleButton from "./CircleButton";
import webPic from "../assets/images/Custom Website Development Services.jpg";
import appPic from "../assets/images/What Are the Benefits of React Native App Development in Egypt_.jpg";
import uiPic from "../assets/images/UI_UX Difference.jpg";
import backPic from "../assets/images/Custom Education & Training Systems with Python Development.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const servicesData = [
    {
        id: "01",
        title: "Web Development",
        description: "We craft modern, high-performance websites and web applications built for speed, scalability, and seamless user experience.",
        image: webPic,
    },
    {
        id: "02",
        title: "App Development",
        description: "We build intuitive and scalable applications that bring your ideas to life and deliver real value to your users.",
        image: appPic,
    },
    {
        id: "03",
        title: "UI/UX Design",
        description: "We design experiences that are simple, engaging, and user-focused—ensuring every interaction feels natural and impactful.",
        image: uiPic,
    },
    {
        id: "04",
        title: "Backend Development",
        description: "We develop secure and scalable backend systems that power your applications with stability and performance.",
        image: backPic,
    }
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);
    const imgRef = useRef(null);

    const [activeService, setActiveService] = useState(servicesData[0]);
    const navigate = useNavigate();

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

            gsap.from(".gsap-service-row", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
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
        if (!imgRef.current) return; 

        let ctx = gsap.context(() => {
            gsap.killTweensOf(imgRef.current);
            gsap.fromTo(imgRef.current,
                {
                    rotationY: 35,
                    rotationX: 10,
                    duration: 1.8,
                    scale: 0.9,
                    opacity: 0,
                    x: 40
                },
                {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    transformOrigin: "center center"
                }
            );
        }, sectionRef);
        
        return () => ctx.revert();
    }, [activeService]);

    return (
        <section ref={sectionRef} className="py-6 md:py-8 lg:py-2 px-4 md:px-6 lg:px-8 bg-linear-to-b to-slate-700 via-slate-800 from-blue-950 text-slate-50 overflow-hidden relative z-40">
            <div className="max-w-7xl mx-auto">
                
                <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10 mb-4 lg:mb-2">
                    <div className="w-full md:max-w-md">
                        <h4 className="text-cyan-400 ubuntu-medium mb-3 md:mb-4 tracking-wider text-sm lg:text-md uppercase">What we do</h4>
                        <h2 className="text-3xl md:text-3xl lg:text-5xl ubuntu-bold leading-[1.1]">
                        Solutions designed to grow your business
                        </h2>
                    </div>
                    <div className="w-full lg:w-auto text-slate-400 text-sm md:text-md lg:text-lg leading-relaxed ml-0 lg:ml-8 mt-0 md:mt-4 lg:mt-6">
                        <p className="ubuntu-regular mb-2 md:mb-8 lg:mb-0 max-w-sm">
                            At Webmavericks Softcoders, we offer a focused range of IT services designed to help businesses build, grow, and scale in the modern digital world.
                        </p>
                    </div>
                    <div className="hidden w-full lg:w-auto md:flex justify-center md:justify-end">
                        <CircleButton text="View all services" theme="dark" onClick={() => navigate('/services')} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-12 relative items-center">
                    <div className="lg:block lg:w-5/12 md:w-9/12 perspective-[1000px]">
                        <div className="w-full aspect-4/5 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                            <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                ref={imgRef}
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover rounded-2xl opacity-90"
                                data-cursor="light"
                            />
                        </div>
                    </div>

                    <div ref={listRef} className="w-full lg:w-10/12 flex flex-col md:mb-2 mb-0">
                        <hr className="border-slate-700" />
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service)}
                                className="gsap-service-row group cursor-pointer border-b border-slate-700/80 last:border-none"
                            >
                                <div className="flex flex-col lg:flex-row gap-4 md:gap-4 items-start py-4 md:py-5 lg:py-6 px-2 md:px-3 lg:px-4 transition-all duration-300 rounded-2xl hover:bg-slate-900/30">
                                    <div className="flex items-center gap-4 md:gap-6 w-full lg:w-5/12">
                                        <span className="text-xl ubuntu-medium text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                                            {service.id}
                                        </span>
                                        <h3 className="text-xl md:text-2xl ubuntu-medium text-slate-300 group-hover:text-slate-50 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-slate-400 text-sm md:text-md w-full lg:w-5/12 ubuntu-regular ml-0 md:ml-1 mt-2 md:mt-0">
                                        {service.description}
                                    </p>
                                    
                                    <div className="hidden md:w-2/12 lg:flex w-full justify-start md:justify-end mt-4 md:mt-0">
                                        <div className="relative w-12 h-12 overflow-hidden rounded-full border border-slate-700 bg-slate-900/50 group-hover:border-cyan-400/50 group-hover:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-all duration-300">
                                            <div className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">
                                                <GoArrowUpRight size={24} />
                                            </div>
                                            <div className="absolute -translate-x-full translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0">
                                                <GoArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden w-full lg:w-auto flex justify-center md:justify-end">
                        <CircleButton text="View all services" theme="dark" onClick={() => navigate('/services')} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;