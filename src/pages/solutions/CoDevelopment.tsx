import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    ShieldCheck,
    Shield,
    Server,
    Lock,
    Play
} from "lucide-react";

const CoDevelopment = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Co-develop with Partners in CarpacSoft with Full Control
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed">
                                Collaborative product development with partners is critical to speed time to market and reduce defects. Only CarpacSoft enables partner co-development with full control over collaborative access.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide border-none text-xs">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide border-none text-xs">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* INCLUDE PARTNERS SECTION - Image 2 Bottom */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Illustration Side */}
                            <div className="md:w-1/3">
                                <AnimatedSection className="relative">
                                    {/* Custom Illustration - Collaboration Graphic */}
                                    <div className="relative w-64 h-64 mx-auto">
                                        {/* Speech Bubble 1 */}
                                        <div className="absolute top-0 left-0 w-16 h-16 bg-[#fef08a] rounded-xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                                                <circle cx="12" cy="10" r="3" />
                                                <path d="M12 15v4" />
                                                <path d="M5 21a7 7 0 0 1 14 0" />
                                            </svg>
                                        </div>

                                        {/* Lightbulb */}
                                        <div className="absolute top-8 right-8 w-12 h-12 text-[#fbbf24] animate-pulse">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                                            </svg>
                                        </div>

                                        {/* Central Monitor */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-[#e0f2fe] rounded-lg border-2 border-[#0ea5e9] flex flex-col items-center justify-center shadow-lg">
                                            <div className="w-20 h-3 bg-[#a5d8ff] rounded mb-2"></div>
                                            <div className="w-16 h-2 bg-[#a5d8ff] rounded mb-1"></div>
                                            <div className="w-12 h-2 bg-[#a5d8ff] rounded"></div>
                                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#e0f2fe] border-2 border-[#0ea5e9]"></div>
                                        </div>

                                        {/* Connected Nodes */}
                                        <div className="absolute bottom-8 left-4 w-10 h-10 bg-[#a5d8ff] rounded-full border-2 border-[#0ea5e9] flex items-center justify-center animate-ping" style={{ animationDuration: '3s' }}>
                                            <div className="w-4 h-4 bg-[#0ea5e9] rounded-full"></div>
                                        </div>
                                        <div className="absolute bottom-4 right-12 w-8 h-8 bg-[#c4b5fd] rounded-full border-2 border-[#8b5cf6]"></div>

                                        {/* Connecting Lines */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
                                            <line x1="128" y1="128" x2="40" y2="200" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                                            <line x1="128" y1="128" x2="200" y2="210" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                        </svg>

                                        {/* Plus Signs */}
                                        <div className="absolute top-20 left-0 text-[#0ea5e9] text-2xl font-bold">+</div>
                                        <div className="absolute bottom-20 right-0 text-[#8b5cf6] text-xl font-bold">+</div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Include Partners in Reviews or Co-Develop in the Same Project</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        Arm's length <span className="text-orange-500 font-bold">relationships</span> are moving to co-development to speed <span className="text-orange-500 font-bold">time</span> to market. Only CarpacSoft enables you to include partners in your development process and control their <span className="text-orange-500 underline">access</span>.
                                    </p>
                                    <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        WATCH DEMO <Play size={12} className="inline ml-2" />
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* REQIF SECTION - Image 3 */}
                <section className="bg-[#001e4d] py-24 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Video Card */}
                            <div className="md:w-2/5">
                                <AnimatedSection>
                                    <div className="bg-gradient-to-br from-[#003366] to-[#001e4d] rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative group cursor-pointer">
                                        {/* Header */}
                                        <div className="p-6 pb-0">
                                            <div className="flex items-center gap-2 mb-4">
                                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-5" />
                                            </div>

                                            {/* Icon Grid */}
                                            <div className="flex gap-4 mb-4">
                                                <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center">
                                                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" /></svg>
                                                </div>
                                                <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                                                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>
                                                </div>
                                                <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                                                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features in Five Banner */}
                                        <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] p-6 relative">
                                            <h3 className="text-2xl font-bold mb-1">Features</h3>
                                            <p className="text-3xl font-serif italic text-orange-100">in Five</p>
                                            <p className="text-xs mt-4 text-orange-100">CarpacSoft Interchange™ –<br />Universal ReqIF Import</p>

                                            {/* Play Button */}
                                            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300">
                                                <Play size={20} fill="white" className="text-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-3/5">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold mb-6 text-white">Only CarpacSoft Provides Interoperability with Universal ReqIF®</h2>
                                    <p className="text-xs text-blue-100 leading-relaxed mb-8">
                                        Each requirements management tool implemented their own flavor of ReqIF making Interoperability is a challenge. Only CarpacSoft enables you to import and export ReqIF files as if you were using IBM DOORS, IBM DNG, PTC Codebeamer / Integrity / RV&S, or Siemens Polarion. With our Universal ReqIF, file-based exchanges are now even easier, no matter what requirements management tool is used by a partner.
                                    </p>
                                    <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-slate-700">
                                        WATCH VIDEO <Play size={12} className="inline ml-2" />
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECURITY SECTION - Image 3 Bottom */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto leading-tight">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-[10px] max-w-5xl mx-auto mb-16 font-medium">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-8">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices", color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-red-600", bg: "bg-red-50" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#001e4d]", bg: "bg-slate-50" },
                                { type: "tls", title: "Transport Layer Security (TLS) ensures data transferred is secured and encrypted" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    {item.type === "tls" ? (
                                        <div className="bg-[#0ea5e9] text-white font-bold px-4 py-2 text-xl tracking-widest mb-4 rounded">TLS</div>
                                    ) : (
                                        <div className={`w-16 h-16 mb-4 flex items-center justify-center relative border-2 border-slate-200 rounded-xl ${item.bg}`}>
                                            {item.icon && <item.icon size={40} className={item.color} strokeWidth={1.5} />}
                                        </div>
                                    )}
                                    <p className="text-[10px] font-bold text-slate-700 max-w-[160px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BOOK A DEMO - End of Page - Image 4 */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default CoDevelopment;



