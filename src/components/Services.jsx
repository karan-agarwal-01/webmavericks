import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import CircleButton from "./CircleButton";
import webPic from "../assets/images/photo-1461749280684-dccba630e2f6.avif";
import socialPic from "../assets/images/photo-1724862936518-ae7fcfc052c1.avif";
import searchPic from "../assets/images/1981-digital-bMWHu8wU1Vk-unsplash.jpg";
import graphicPic from "../assets/images/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg";

const servicesData = [
    {
        id: "01",
        title: "Website Development",
        description: "Our company offers comprehensive website development services, from initial planning and design to development and deployment. We leverage modern technologies to build scalable solutions.",
        image: webPic,
    },
    {
        id: "02",
        title: "Social Media Marketing",
        description: "Our Social Media Optimization (SMO) services are designed to enhance your brand's presence and engagement across social media platforms like Instagram, Facebook, and LinkedIn.",
        image: socialPic,
    },
    {
        id: "03",
        title: "Search Engine Optimization",
        description: "We help you rank higher on search engines. Our strategies include keyword research, on-page SEO, link building, and content optimization to drive organic traffic.",
        image: searchPic
    },
    {
        id: "04",
        title: "Graphic Designing",
        description: "Our graphic design services focus on creating visually compelling designs that effectively communicate your brand message. We use the latest design tools to produce custom graphics tailored to your needs.",
        image: graphicPic
    }
];

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);
    const imgRef = useRef(null);

    const [activeService, setActiveService] = useState(servicesData[0]);

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
        <section ref={sectionRef} className="py-2 px-6 md:px-12 lg:px-12 bg-linear-to-b to-slate-700 via-slate-800 from-blue-950 text-slate-50 overflow-hidden relative z-40">
            <div className="max-w-7xl mx-auto">
                
                <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-2">
                    <div className="w-full">
                        <h4 className="text-cyan-400 ubuntu-medium mb-4 tracking-wider text-md uppercase">Services</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl ubuntu-bold leading-[1.1]">
                            Solutions we <br className="hidden md:block" /> provide
                        </h2>
                    </div>
                    <div className="w-full text-slate-400 text-lg leading-relaxed ml-8 mt-6">
                        <p className="ubuntu-regular mb-8 lg:mb-0 max-w-sm">
                            These are just a few of the many digital marketing services available to businesses. Each service is unique and serves a specific purpose in the digital landscape.
                        </p>
                    </div>
                    <div className="w-full flex justify-end">
                        <CircleButton text="View all services" theme="dark" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 relative items-center">
                    <div className="hidden lg:block w-5/12 perspective-[1000px]">
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

                    <div ref={listRef} className="w-full lg:w-10/12 flex flex-col mb-2">
                        <hr className="border-slate-700" />
                        
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service)}
                                className="gsap-service-row group cursor-pointer border-b border-slate-700/80 last:border-none"
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-start md:items-center py-8 lg:py-6 px-4 transition-all duration-300 rounded-2xl hover:bg-slate-900/30">
                                    <div className="flex items-center gap-6 md:w-5/12">
                                        <span className="text-xl font-medium text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                                            {service.id}
                                        </span>
                                        <h3 className="text-2xl font-semibold text-slate-300 group-hover:text-slate-50 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 text-md line-clamp-3 md:w-5/12 ubuntu-regular ml-5">
                                        {service.description}
                                    </p>
                                    
                                    <div className="md:w-2/12 flex w-full md:justify-end mt-2 md:mt-0">
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

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;