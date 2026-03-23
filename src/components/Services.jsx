import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import CircleButton from "./CircleButton";
import webPic from "../assets/images/photo-1461749280684-dccba630e2f6.avif";
import socialPic from "../assets/images/photo-1724862936518-ae7fcfc052c1.avif";
import searchPic from "../assets/images/1981-digital-bMWHu8wU1Vk-unsplash.jpg";
import graphicPic from "../assets/images/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg";

gsap.registerPlugin(ScrollTrigger);

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
        description: "Our graphic design services focus on creating visually compelling and impactful designs that effectively communicate your brand message. We use the latest design tools and trends to produce custom graphics, logos, and marketing materials tailored to your needs. Our team ensures each design element is cohesive and enhances your overall brand identity. By prioritizing creativity and attention to detail, we help elevate your visual presence across all platforms. Trust us to deliver high-quality graphic designs that captivate your audience and drive engagement",
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
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(listRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
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

        gsap.killTweensOf(imgRef.current);
        gsap.fromTo(
            imgRef.current,
            {
                rotationY: 90,
                rotationZ: 15,
                scale: 0.8,
                opacity: 0,
                x: 50
            },
            {
                rotationY: 0,
                rotationZ: -6,
                scale: 1,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "back.out(1.5)",
                transformOrigin: "center center"
            }
        );
    }, [activeService]);

    const newLocal = "shadow-2xl rounded-xl w-full h-125";

    return (
        <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-[#111111] text-white overflow-hidden font-sans relative z-40">
            <div className="max-w-7xl mx-auto">

                <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20 mb-16">
                    <div>
                        <h4 className="text-white ubuntu-medium mb-4 tracking-wide text-lg">Service</h4>
                        <h2 className="text-4xl md:text-5xl ubuntu-bold">
                            Solution we <br /> provide
                        </h2>
                    </div>
                    <div className="text-[#999999] text-lg lg:w-1/3">
                        <p className="w-full ubuntu-regular">
                            These are just a few of the many digital marketing services available to businesses. Each service is unique and serves a specific purpose in the digital marketing landscape.
                        </p>
                    </div>
                    <div>
                        <CircleButton text="View all services" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center">
                    
                    <div className="relative hidden lg:block h-150 perspective-[1000px] w-100">
                        <div className="w-full">
                            <div ref={imgRef} className={newLocal}>
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div ref={listRef} className="w-full lg:max-w-3xl flex flex-col ml-0 lg:ml-10 mt-10 lg:mt-0">
                        <div className="bg-gray-800 h-[0.1px] w-full" />
                        
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => setActiveService(service)}
                                className="group border-b text-[#999999] border-gray-800 last:border-none py-8 lg:py-10 flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-30 items-start lg:items-center cursor-pointer"
                            >
                                <div className="flex items-center gap-4 lg:contents">
                                    <span className="text-2xl font-medium text-[#999999] group-hover:text-white transition-colors duration-300">
                                        {service.id}
                                    </span>
                                    <h3 className="text-2xl font-semibold group-hover:text-white transition-colors duration-300 lg:-ml-20 lg:w-60">
                                        {service.title}
                                    </h3>
                                </div>
                                
                                <p className="text-[#999999] text-md line-clamp-4 w-full lg:w-xs">
                                    {service.description}
                                </p>
                                
                                <div className="relative w-10 h-10 overflow-hidden text-[#999999] group-hover:text-white self-end lg:self-auto lg:mt-10 lg:ml-44 mt-4">
                                    <div className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full">
                                        <GoArrowUpRight size={40} />
                                    </div>
                                    <div className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                                        <GoArrowUpRight size={40} />
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