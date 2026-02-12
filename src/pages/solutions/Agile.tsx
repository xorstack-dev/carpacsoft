import { useState, useEffect } from "react";
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
    Repeat
} from "lucide-react";

const Agile = () => {
    // Animation state for the Traceable Agile diagram
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev >= 3 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Overlay with grid pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')]"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <h1 className="text-2xl md:text-4xl font-light mb-4 text-white/80">
                                Traceable Agile<sup className="text-xs">™</sup>
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Companies Choose Agile for Speed, CarpacSoft® Delivers Speed AND Quality
                            </h2>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                CarpacSoft solves common challenges with Agile initiatives, such as maintaining standards compliance, coordinating hardware and software teams, managing defects, reducing rework, and ensuring customer quality.
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

                {/* TRACEABLE AGILE DIAGRAM - Image 2 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                            {/* Interactive Diagram */}
                            <div className="md:w-1/2 relative bg-slate-50 p-8 rounded-xl shadow-inner border border-slate-200">
                                <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Solution: Traceable Agile</h3>

                                {/* Step 1 */}
                                <div className={`transition-all duration-500 ${step === 1 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 mb-8 relative">
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">1</div>
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Auto Detect Risk</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs">Metadata from sprints in Jira are continually synched to associated requirements and test cases in CarpacSoft</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Central Hub */}
                                <div className="relative h-40 w-full mb-8 flex justify-center items-center">
                                    <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-lg animate-pulse"></div>
                                    {/* Mockup of CarpacSoft UI */}
                                    <div className="bg-white p-2 rounded shadow-md border border-slate-200 w-48 z-10">
                                        <div className="flex gap-1 mb-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
                                        <div className="h-1 bg-slate-100 w-full rounded mb-1"></div>
                                        <div className="h-1 bg-slate-100 w-3/4 rounded"></div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                        <Repeat className="text-white" size={20} />
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className={`transition-all duration-500 ${step === 2 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 mb-8 justify-end text-right">
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Inspect & Determine Action</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs ml-auto">CarpacSoft continually calculates traceability & coverage scores to identify high risk areas to drill into and determine corrective action</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className={`transition-all duration-500 ${step === 3 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Assign Tasks to Backlog</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs">Corrective action assigned in Jira to be addressed</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Integration Logos */}
                                <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
                                    <div className="flex items-center gap-1 text-blue-600"><div className="w-4 h-4 bg-blue-500 rounded-sm"></div><span className="text-xs font-bold">Jira</span></div>
                                    <div className="flex items-center gap-1 text-blue-400"><div className="w-4 h-4 bg-blue-400 rounded-sm"></div><span className="text-xs font-bold">Azure DevOps</span></div>
                                    <div className="flex items-center gap-1 text-green-600"><div className="w-4 h-4 bg-green-500 rounded-sm"></div><span className="text-xs font-bold">TEAMCENTER</span></div>
                                    <div className="flex items-center gap-1 text-purple-600"><div className="w-4 h-4 bg-purple-500 rounded-sm"></div><span className="text-xs font-bold">CATIA</span></div>
                                    <div className="flex items-center gap-1 text-orange-600"><div className="w-4 h-4 bg-orange-500 rounded-sm"></div><span className="text-xs font-bold">windchill</span></div>
                                </div>
                                <div className="text-center text-[10px] text-[#00a3cc] mt-2">(no change to current developer behavior)</div>
                            </div>

                            {/* Text Content */}
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-3xl font-bold text-[#001e4d] mb-6">Achieve Speed AND Quality with Traceable Agile</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        Traceable Agile <span className="text-orange-600 font-bold">speeds</span> the flow of software and hardware development and maintains the current and historical state of development <span className="text-orange-600 font-bold">quality</span> to auto-detect issues early
                                    </p>
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        LEARN MORE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* USER STORIES SECTION - Image 3 */}
                <section className="bg-white py-24 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Traceable Agile = No Change for Software Developers</h2>
                                    <ul className="space-y-4 text-sm text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0d47a1] font-bold">•</span>
                                            <span>Developers continue to work in Jira as usual</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0d47a1] font-bold">•</span>
                                            <span>Activity automatically syncs to Jama to track actual activity vs. expected</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#0d47a1] font-bold">•</span>
                                            <span>Jama auto-detects risk and highlights areas to inspect and take action</span>
                                        </li>
                                    </ul>
                                </AnimatedSection>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-[#001e4d] rounded-lg p-8 shadow-2xl relative overflow-hidden group">
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-20"></div>

                                    {/* Logo */}
                                    <div className="flex items-center gap-2 mb-6 relative z-10">
                                        <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-6" />
                                    </div>

                                    {/* Main Heading */}
                                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                                        Trac<span className="text-orange-400">e</span>able Agile<sup className="text-xs">™</sup>:
                                    </h3>
                                    <h4 className="text-3xl font-bold text-orange-400 mb-6 relative z-10">User Stories</h4>

                                    {/* Underline Animation */}
                                    <div className="w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                                </div>
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
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-blue-600" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices", color: "text-blue-600" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-red-600" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#001e4d]" },
                                { type: "tls", title: "Transport Layer Security (TLS) ensures data transferred is secured and encrypted" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    {item.type === "tls" ? (
                                        <div className="bg-[#0ea5e9] text-white font-bold px-4 py-2 text-xl tracking-widest mb-4">TLS</div>
                                    ) : (
                                        <div className="w-16 h-16 mb-4 flex items-center justify-center relative border-2 border-slate-200 rounded-xl bg-white">
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

export default Agile;



