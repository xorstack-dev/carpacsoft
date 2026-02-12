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
    Play,
    Search
} from "lucide-react";

const DigitalEngineering = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Siloed Tools are the Biggest Bottleneck to Achieve Digital Engineering
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed">
                                A recent RAND survey finds that most Digital Engineering initiatives have hit a roadblock of disconnected tools. Only CarpacSoft delivers Digital Engineering across best-of-breed tools through its unique Traceability Information Model and market-leading integrations.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide bg-transparent">
                                    LEARN MORE
                                </Button>
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

                {/* LEGACY TOOL MANDATES SECTION - Image 2 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Illustration Side */}
                            <div className="md:w-1/3">
                                <AnimatedSection className="relative">
                                    {/* Custom Illustration - Speed Dial with Magnifier */}
                                    <div className="relative w-48 h-48 mx-auto">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border-4 border-[#e0f2fe] bg-white shadow-lg"></div>

                                        {/* Speed Dial Segments */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="25 100" strokeDashoffset="25" className="opacity-60" />
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="8" strokeDasharray="25 100" strokeDashoffset="50" className="opacity-60" />
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="25 100" strokeDashoffset="75" className="opacity-60" />
                                        </svg>

                                        {/* Needle */}
                                        <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-[#0ea5e9] origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>

                                        {/* Center Circle */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0ea5e9] rounded-full shadow-lg"></div>

                                        {/* Magnifying Glass */}
                                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#e0f2fe] rounded-full border-4 border-[#0ea5e9] flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                                            <Search size={24} className="text-[#0ea5e9]" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Legacy Tool Mandates are the Second Biggest Bottleneck to Achieve Digital Engineering</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        Mandates for IBM DOORS/DNG usage have prevented companies from achieving Digital Engineering. Only CarpacSoft enables companies to migrate away from DOORS/DNG and still deliver the requested IBM DOORS/DNG flavor of ReqIF. Only CarpacSoft's Universal ReqIF® enables you to import and export ReqIF files as if you were using IBM DOORS or IBM DNG.
                                    </p>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATIA MAGIC SECTION - Image 2 Bottom */}
                <section className="bg-[#001e4d] py-16 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Text Side */}
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-xl font-bold mb-4 text-white">Dassault Catia Magic (Cameo) Syncs SysML Diagrams and Data Only with CarpacSoft</h2>
                                    <p className="text-xs text-blue-100 leading-relaxed text-white">
                                        Only CarpacSoft is natively supported by Catia Magic to enable Digital Engineering by syncing SysML diagrams and MBSE data to align the System Architecture team with all engineering disciplines.
                                    </p>
                                </AnimatedSection>
                            </div>

                            {/* CATIA Card */}
                            <div className="md:w-1/3">
                                <AnimatedSection>
                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700 relative group hover:scale-105 transition-transform duration-500">
                                        <h3 className="text-3xl font-bold text-white mb-2">CATIA</h3>
                                        <p className="text-slate-400 text-xs mb-4">
                                            <span className="text-[#0ea5e9]">▶</span> Modeling Apps
                                        </p>
                                        <div className="border-t border-slate-700 pt-4">
                                            <p className="text-sm font-bold text-[#0ea5e9]">CarpacSoft® integration</p>
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-[10px] text-slate-500">3D<span className="text-red-500">S</span>EXPERIENCE</div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* REQIF SECTION - Image 3 */}
                <section className="bg-[#0d3a6e] py-24 text-white">
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

                {/* BOOK A DEMO - End of Page */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default DigitalEngineering;



