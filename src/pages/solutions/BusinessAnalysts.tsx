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
    ChevronRight,
    Play,
    RotateCw,
    Search,
    Wrench,
    Cpu,
    Zap,
    Train,
    Factory,
    CheckCircle2,
    GitBranch,
    Users,
    FileCheck,
    ClipboardList,
    RefreshCw,
    FileText,
    CircuitBoard,
    Layers,
    Component,
    Share2,
    Mail,
    FileSpreadsheet,
    HelpCircle,
    ArrowRight,
    BookOpen
} from "lucide-react";

// Custom Icon for Azure DevOps (simple representation)
const AzureDevOpsIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.73 1.353L.004 5.923l1.926 15.688 1.956.816 3.65-2.26.17-.113L6.96 24l9.16-5.877 7.876-4.524L4.73 1.353zm.185 20.306l-2.071-.861-1.169-9.522 7.838 12.036-4.598-1.653zm11.758-7.536l-8.086 5.188L2.52 7.02l2.365-2.288 11.788 9.391zm-.792-6.52l-9.53-7.587 17.58 11.534-8.05-3.947z" />
    </svg>
);

// Custom Jira Icon
const JiraIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M11.565 12.565h-5.04v-5.04a5.04 5.04 0 0 1 5.04 5.04zm-.008 5.76h-5.04v-5.04h5.04a5.04 5.04 0 0 1 0 5.04zm5.752-5.76h-5.04v-5.04h5.04a5.04 5.04 0 0 1 0 5.04z" />
    </svg>
);

// Custom Icons for Security Section
const TuvIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z" fill="#0052cc" />
        <path d="M50 15 L80 30 V70 L50 85 L20 70 V30 Z" fill="white" />
        <text x="50" y="55" textAnchor="middle" fill="#0052cc" fontSize="16" fontWeight="bold">TÜV</text>
        <text x="50" y="72" textAnchor="middle" fill="#0052cc" fontSize="12" fontWeight="bold">SÜD</text>
    </svg>
);

const SocIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L90 20 V60 C90 80 50 95 50 95 C50 95 10 80 10 60 V20 L50 5 Z" fill="#1e293b" />
        <circle cx="50" cy="50" r="30" fill="#dc2626" stroke="white" strokeWidth="2" />
        <text x="50" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SOC 2 Type II</text>
        <rect x="35" y="55" width="30" height="10" rx="2" fill="white" />
        <text x="50" y="63" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">AUDITED</text>
    </svg>
);

const TlsIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="30" width="90" height="40" rx="2" fill="#0ea5e9" />
        <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">TLS</text>
    </svg>
);

const BusinessAnalysts = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-[#1e40af] opacity-40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Business Analysts and Stakeholders are Frustrated
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                The lack of an end-to-end tool connecting stakeholders, business analysts, and software development teams is a major gap. Traceable Agile™ in CarpacSoft is the answer.
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

                {/* FRUSTRATION SECTION - Image 2 */}
                <section className="bg-white py-24 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8 relative">

                            {/* Left: Stakeholders */}
                            <AnimatedSection delay={100} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Stakeholders</span>
                                </div>
                                <div className="flex items-center gap-2 mb-4 text-[#0078d4]">
                                    <Mail size={32} />
                                    <span className="text-2xl font-bold">Outlook</span>
                                </div>
                                <ul className="text-[11px] font-bold text-[#001e4d] space-y-3 text-center">
                                    <li className="text-[#005a9e]">• Frustrated by lack of requirements review and <br />approval process</li>
                                    <li className="text-[#005a9e]">• No visibility into progress against requirements</li>
                                    <li className="text-[#005a9e]">• Surprised on release by unmet requirements</li>
                                </ul>
                            </AnimatedSection>

                            {/* Arrow 1 - Broken */}
                            <div className="hidden md:flex flex-col items-center justify-center w-24 relative z-10">
                                <div className="bg-orange-400 rounded-full p-2 animate-bounce">
                                    <HelpCircle size={32} className="text-white" />
                                </div>
                            </div>

                            {/* Middle: Business Analysts */}
                            <AnimatedSection delay={300} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Business<br />Analysts</span>
                                </div>
                                <div className="flex items-center gap-2 mb-4 text-[#107c41]">
                                    <FileSpreadsheet size={32} />
                                    <span className="text-2xl font-bold">Excel</span>
                                </div>
                                <ul className="text-[11px] font-bold text-[#001e4d] space-y-3 text-center">
                                    <li className="text-[#005a9e]">• Stuck in the middle with no tool to fix issues</li>
                                    <li className="text-[#005a9e]">• Highly manual effort to manage communication</li>
                                    <li className="text-[#005a9e]">• Challenging to track and report on progress</li>
                                    <li className="text-[#005a9e]">• No approved requirements to refer back</li>
                                    <li className="text-[#005a9e]">• No ability to perform real-time change / impact analysis</li>
                                </ul>
                            </AnimatedSection>

                            {/* Arrow 2 - Broken */}
                            <div className="hidden md:flex flex-col items-center justify-center w-24 relative z-10">
                                <div className="bg-orange-400 rounded-full p-2 animate-bounce delay-100">
                                    <HelpCircle size={32} className="text-white" />
                                </div>
                            </div>

                            {/* Right: Software */}
                            <AnimatedSection delay={500} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Software</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 mb-4 text-[#0052cc]">
                                    <div className="flex items-center gap-2">
                                        <JiraIcon className="w-8 h-8 text-[#0052cc]" />
                                        <span className="text-xl font-bold">Jira</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#0078d4]">
                                        <AzureDevOpsIcon className="w-6 h-6" />
                                        <span className="text-lg font-bold">Azure DevOps</span>
                                    </div>
                                </div>
                                <ul className="text-[11px] font-bold text-[#001e4d] space-y-3 text-center">
                                    <li className="text-[#005a9e]">• Software developers are happy with Agile</li>
                                    <li className="text-[#005a9e]">• Jira/ADO meets their needs</li>
                                    <li className="text-[#005a9e]">• Stakeholder interface is BA problem</li>
                                    <li className="text-[#005a9e]">• No way for engineering / engineering management to ensure delivery against business needs / requirements</li>
                                </ul>
                            </AnimatedSection>
                        </div>

                        <div className="flex justify-center mt-16">
                            <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide transition-colors duration-300">
                                ONLINE REVIEWS DEMO
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION - Image 3 */}
                <section className="bg-sky-50 py-24 overflow-hidden relative">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Traceable Agile™ is the Answer</h2>
                            <p className="text-xs font-bold text-slate-600 max-w-4xl mx-auto">
                                With Traceable Agile, there is no change for software teams and the development process supported for both business analysts and stakeholders.
                            </p>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8 relative mb-16">
                            {/* Connection Line Background */}
                            <div className="hidden md:block absolute top-[6rem] left-[15%] right-[15%] h-12 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 opacity-20 -z-0 rounded-full blur-xl"></div>

                            {/* Left: Stakeholders */}
                            <AnimatedSection delay={100} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center mb-6 shadow-xl ring-4 ring-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Stakeholders</span>
                                </div>
                                <ul className="text-[11px] font-bold text-[#005a9e] space-y-2 text-center">
                                    <li>• Online Reviews</li>
                                    <li>• Approvals</li>
                                    <li>• Audit Trail</li>
                                    <li>• Progress Tracking</li>
                                </ul>
                            </AnimatedSection>

                            {/* Arrow 1 - Connected */}
                            <div className="hidden md:flex flex-col items-center justify-center w-24 relative z-10">
                                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#00a3cc] relative animate-pulse">
                                    <img src="/jama-connect-logo-color.svg" alt="Jama" className="w-8 h-8" />
                                </div>
                            </div>

                            {/* Middle: Business Analysts */}
                            <AnimatedSection delay={300} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center mb-6 shadow-xl ring-4 ring-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Business<br />Analysts</span>
                                </div>
                                <ul className="text-[11px] font-bold text-[#005a9e] space-y-2 text-center">
                                    <li>• Requirements linked to <br />Epics/ User Stories</li>
                                    <li>• Status tied to <br />Requirements</li>
                                </ul>
                            </AnimatedSection>

                            {/* Arrow 2 - Connected */}
                            <div className="hidden md:flex flex-col items-center justify-center w-24 relative z-10">
                                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-[#00a3cc] relative animate-pulse delay-75">
                                    <img src="/jama-connect-logo-color.svg" alt="Jama" className="w-8 h-8" />
                                </div>
                            </div>

                            {/* Right: Software */}
                            <AnimatedSection delay={500} className="flex flex-col items-center w-full md:w-1/3 text-center relative z-10">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center mb-6 shadow-xl ring-4 ring-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300')] opacity-30 bg-cover bg-center"></div>
                                    <span className="text-white font-bold text-xl relative z-10 uppercase tracking-widest bg-black/30 px-4 py-1 rounded">Software</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 mb-4 text-[#0052cc]">
                                    <div className="flex items-center gap-2">
                                        <JiraIcon className="w-8 h-8 text-[#0052cc]" />
                                        <span className="text-xl font-bold">Jira</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#0078d4]">
                                        <AzureDevOpsIcon className="w-6 h-6" />
                                        <span className="text-lg font-bold">Azure DevOps</span>
                                    </div>
                                </div>
                                <p className="text-[10px] font-bold text-[#005a9e] max-w-[200px] text-center">
                                    No change required to software development team's tools, methodology or even field values
                                </p>
                            </AnimatedSection>
                        </div>

                        <div className="flex justify-center mb-20">
                            <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide transition-colors duration-300">
                                TRACEABLE AGILE DEMO
                            </Button>
                        </div>

                        {/* Essential Guide Banner */}
                        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/3 bg-sky-50 p-8 flex justify-center relative overflow-hidden">
                                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl"></div>
                                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
                                    <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl border-4 border-[#001e4d] flex flex-col items-center justify-center w-40 h-32">
                                        <BookOpen size={40} className="text-[#001e4d] mb-2" strokeWidth={1.5} />
                                        <div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
                                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="absolute bottom-4 left-0 right-0 h-4 bg-slate-800 rounded-b-lg transform scale-x-75 mx-auto w-48 shadow-2xl"></div>
                                </div>
                                <div className="w-full md:w-2/3 p-8 md:p-12 text-left">
                                    <h3 className="text-xl font-bold text-[#001e4d] mb-4">Essential Guide to Requirements Management and Traceability</h3>
                                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                        Hardware and software complexity is rapidly increasing across all highly regulated industries. Smart organizations are mitigating risk by using modern requirements management tools to manage product, systems, and software development. Check out our Essential Guide to Requirements Management to up your requirements management game and stay ahead of the competition.
                                    </p>
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] rounded-full px-8 text-[10px] uppercase font-bold">
                                        LEARN MORE
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CUSTOMER STORY - Image 4 Top */}
                <section className="bg-[#001e4d] py-24 text-center text-white">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold mb-8 text-white">Transform Requirements Management for Clients</h2>
                            <p className="text-lg text-blue-100 italic font-serif leading-relaxed mb-10">
                                "We love the fact that it's very easy to compare prior versions of requirements. It's easy to track, review, sign off and know how and why we did certain things."
                            </p>

                            <div className="flex flex-col items-center gap-4 mb-12">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold tracking-tight">alight</span>
                                    <div className="text-left border-l border-blue-400 pl-4">
                                        <div className="font-bold text-sm">Elizabeth Rosenberg</div>
                                        <div className="text-xs text-blue-200">Practice Leader Alight Solutions</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORY
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY SECTION - Image 4 Bottom */}
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

                        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 max-w-7xl mx-auto mb-8">
                            {[
                                { Component: TuvIcon, title: "Suitably validated by TÜV SÜD for safety-related development", width: "w-20" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices", color: "text-[#0077c8]", width: "w-16" },
                                { Component: SocIcon, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", width: "w-20" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#334155]", width: "w-16" },
                                { Component: TlsIcon, title: "Transport Layer Security (TLS) ensures data transferred is secured and encrypted", width: "w-24" }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center max-w-[180px]">
                                    <div className="h-24 flex items-center justify-center mb-6">
                                        {item.Component ? (
                                            <div className={`${item.width} h-auto`}>
                                                <item.Component />
                                            </div>
                                        ) : (
                                            <item.icon size={64} className={item.color} strokeWidth={1.5} />
                                        )}
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-700 leading-relaxed">
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

export default BusinessAnalysts;



