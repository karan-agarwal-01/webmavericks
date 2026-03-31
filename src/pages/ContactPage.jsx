import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import ContactHeroSection from "../components/ContactHeroSection";


const ContactPage = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const title = new SplitType(".contact-title", { types: "lines, words" });
            title.lines.forEach(line => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('overflow-hidden', 'pb-2');
                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });

            gsap.fromTo(title.words, 
                { y: 80, skewY: 5, opacity: 0 },
                { 
                    y: 0, skewY: 0, opacity: 1, 
                    duration: 1.2, stagger: 0.05, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );

            gsap.fromTo(".info-item",
                { x: -30, opacity: 0 },
                { 
                    x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
                    scrollTrigger: { trigger: ".info-container", start: "top 80%" }
                }
            );

            gsap.fromTo(formRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { 
                    y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "expo.out",
                    scrollTrigger: { trigger: formRef.current, start: "top 85%" }
                }
            );

            gsap.fromTo(".form-field",
                { y: 20, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.4,
                    scrollTrigger: { trigger: formRef.current, start: "top 85%" }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 2000);
    };

    return (
        <>
        <ContactHeroSection />
        <section ref={sectionRef} data-cursor="dark" className="relative w-full min-h-screen bg-[#e9e9e9] pt-4 px-6 md:px-12 lg:px-12 overflow-hidden pb-24">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[15%] w-200 h-200 rounded-full bg-sky-500 blur-[120px] z-10"></div>
                <div className="absolute bottom-[10%] left-[5%] w-175 h-175 rounded-full bg-yellow-200 blur-[120px] z-10"></div>
                <div className="absolute inset-0 z-20 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-4 relative z-10 items-center">
                <div className="w-full lg:w-7/12 flex flex-col pt-8">
                    <div>
                        <h4 className="text-slate-700 ubuntu-medium tracking-widest text-lg uppercase mb-4">Get In Touch</h4>
                        <h2 className="contact-title text-[3rem] sm:text-6xl lg:text-[5rem] ubuntu-bold leading-[1.05] tracking-tighter text-[#020618]">
                            Let's build something <br className="hidden lg:block" /> extraordinary.
                        </h2>
                        <p className="mt-8 text-slate-700 text-lg leading-relaxed ubuntu-regular max-w-lg">
                            Have a project in mind or just want to say hi? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="info-container flex flex-col gap-8 mt-12">
                        <div className="info-item flex items-start gap-6 group cursor-pointer w-max">
                            <div className="w-14 h-14 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm flex items-center justify-center text-cyan-400 shadow-sm group-hover:bg-cyan-400 group-hover:text-white group-hover:border-cyan-400 transition-all duration-500">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 ubuntu-medium text-sm mb-1 uppercase tracking-wider">Email Us</p>
                                <p className="text-xl ubuntu-bold text-slate-900 group-hover:text-cyan-400 transition-colors duration-300">Pramod@Webmavericks.org</p>
                            </div>
                        </div>

                        <div className="info-item flex items-start gap-6 group cursor-pointer w-max">
                            <div className="w-14 h-14 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm flex items-center justify-center text-cyan-400 shadow-sm group-hover:bg-cyan-400 group-hover:text-white group-hover:border-cyan-400 transition-all duration-500">
                                <FiPhone size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 ubuntu-medium text-sm mb-1 uppercase tracking-wider">Call Us</p>
                                <p className="text-xl ubuntu-bold text-slate-900 group-hover:text-cyan-400 transition-colors duration-300">8209838237</p>
                            </div>
                        </div>

                        <div className="info-item flex items-start gap-6 group cursor-pointer w-max">
                            <div className="w-14 h-14 rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm flex items-center justify-center text-cyan-400 shadow-sm group-hover:bg-cyan-400 group-hover:text-white group-hover:border-cyan-400 transition-all duration-500">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 ubuntu-medium text-sm mb-1 uppercase tracking-wider">Visit Us</p>
                                <p className="text-lg ubuntu-bold text-slate-900 group-hover:text-cyan-400 transition-colors duration-300 max-w-62.5 leading-tight">
                                    94, Friends Col, Panchawala, Jaipur, 302034
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-5/12 perspective-[1000px] mt-12 lg:mt-0">
                    <form 
                        ref={formRef} 
                        onSubmit={handleSubmit} 
                        className="w-full bg-white/30 backdrop-blur-2xl border border-white/60 p-4 md:p-10 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/20 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                        <div className="flex flex-col gap-6">
                            <div className="form-field relative w-full">
                                <input
                                    type="text"
                                    id="name"
                                    className="peer w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-6 py-4 pt-6 text-slate-900 outline-none focus:bg-white/70 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                                    placeholder="Name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-6 top-5 text-slate-500 text-sm ubuntu-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:-translate-y-3 peer-valid:text-xs pointer-events-none"
                                >
                                    Your Name
                                </label>
                            </div>
                            <div className="form-field relative w-full">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-6 py-4 pt-6 text-slate-900 outline-none focus:bg-white/70 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                                    placeholder="Email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-6 top-5 text-slate-500 text-sm ubuntu-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:-translate-y-3 peer-valid:text-xs pointer-events-none"
                                >
                                    Email Address
                                </label>
                            </div>
                            <div className="form-field relative w-full">
                                <input
                                    type="text"
                                    id="subject"
                                    className="peer w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-6 py-4 pt-6 text-slate-900 outline-none focus:bg-white/70 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                                    placeholder="Subject"
                                    required
                                />
                                <label
                                    htmlFor="subject"
                                    className="absolute left-6 top-5 text-slate-500 text-sm ubuntu-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:-translate-y-3 peer-valid:text-xs pointer-events-none"
                                >
                                    Subject
                                </label>
                            </div>
                            <div className="form-field relative w-full">
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="peer w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-6 py-4 pt-8 text-slate-900 outline-none focus:bg-white/70 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 placeholder-transparent resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-6 top-5 text-slate-500 text-sm ubuntu-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:-translate-y-2 peer-valid:text-xs pointer-events-none"
                                >
                                    Tell us about your project...
                                </label>
                            </div>

                        </div>
                        <div className="form-field mt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full flex justify-center items-center gap-4 bg-slate-900 text-white ubuntu-bold text-lg px-8 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer hover:bg-sky-600"
                            >
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default ContactPage;