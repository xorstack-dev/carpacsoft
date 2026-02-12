import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    CheckCircle,
    Play,
    Search,
    Settings,
    Users
} from "lucide-react";

const MBSE = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Achieve the Promise of MBSE by Extending its Traceability Across the Entire Development Process
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed">
                                For MBSE to improve system development outcomes, the diagrams and data must be fully integrated and traceable across engineering disciplines. Responding to demand, Dassault Systemes and Sparx Systems have both made CarpacSoft their leading integration, enabling CarpacSoft to uniquely align SysML diagrams and data across all engineering disciplines.
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

                {/* ENABLE DIGITAL TRANSFORMATION SECTION - Image 2 Bottom */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-start gap-16">
                            {/* Left Side */}
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Enable Digital Transformation with Traceable MBSE™</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        CarpacSoft helps organizations formalize the development, integration, and use of models to inform enterprise and program decision making. It allows non technical stakeholders to visualize a model of the system of interest and interact with its data in familiar views like documents and spreadsheets.
                                    </p>
                                </AnimatedSection>
                            </div>

                            {/* Right Side - Checklist */}
                            <div className="md:w-1/2">
                                <AnimatedSection delay={200}>
                                    <ul className="space-y-4">
                                        {[
                                            "Easy traceability analysis without the need to learn how to create custom views",
                                            "Mechanisms for broader, web-based audience communication and participation",
                                            "Requirements attribute management and workflow",
                                            "Native configuration management and baseline"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="text-[#00a3cc] shrink-0 mt-0.5" size={18} />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SYSML SECTION - Image 3 */}
                <section className="bg-[#f8fafc] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">How Traceable MBSE Enhances SysML-Based Approaches</h2>
                            <p className="text-sm text-slate-600 max-w-4xl mx-auto mb-16">
                                SysML diagrams and model data can be synced <span className="text-orange-500 font-bold">into</span> CarpacSoft, to view, trace, baseline, version, audit and review across all engineering disciplines. MBSE efforts are no longer <span className="text-orange-500 font-bold underline">isolated</span>, but fully integrated into the entire development process, ensuring alignment across engineering disciplines.
                            </p>
                        </AnimatedSection>

                        {/* Video Cards */}
                        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-16">
                            {/* CATIA Card */}
                            <AnimatedSection delay={100} className="md:w-1/2">
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer h-64">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-5" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">CATIA</h3>
                                        <p className="text-slate-400 text-sm mb-2">
                                            <span className="text-[#0ea5e9]">Sys</span> <Play size={12} className="inline" /> m Modeling Apps
                                        </p>
                                        <p className="text-[#0ea5e9] font-bold">CarpacSoft® integration</p>
                                        <div className="absolute bottom-4 right-4 text-[10px] text-slate-500">3D<span className="text-red-500">S</span>EXPERIENCE</div>
                                    </div>
                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <Play size={28} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Sparx Card */}
                            <AnimatedSection delay={200} className="md:w-1/2">
                                <div className="bg-gradient-to-br from-slate-100 to-white rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer h-64 border">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-5 invert" />
                                        </div>
                                        {/* Gear Icons */}
                                        <div className="flex gap-2 mb-4">
                                            <div className="w-12 h-12 bg-[#0ea5e9] rounded-lg flex items-center justify-center transform rotate-12 animate-spin" style={{ animationDuration: '8s' }}>
                                                <Settings size={24} className="text-white" />
                                            </div>
                                            <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center transform -rotate-12 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                                                <Settings size={20} className="text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-700">Sparx Enterprise Architect</h3>
                                        {/* Video Progress */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                                            <Play size={12} className="text-slate-400" />
                                            <span className="text-[10px] text-slate-400">10:54</span>
                                            <div className="flex-1 h-1 bg-slate-200 rounded">
                                                <div className="w-1/3 h-full bg-[#0ea5e9] rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                                            <Play size={28} fill="#0ea5e9" className="text-[#0ea5e9] ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Feature List */}
                        <AnimatedSection delay={300}>
                            <ul className="space-y-2 text-sm text-slate-600 max-w-2xl mx-auto mb-12">
                                <li>• Visualization of the <span className="text-orange-500 font-bold">shared system model</span> and the status of its <span className="text-orange-500 font-bold">artifacts</span> in the development lifecycle</li>
                                <li>• System and behavioral diagrams</li>
                                <li>• Faster <span className="text-orange-500 font-bold">requirements development</span>, decomposition, and <span className="text-orange-500 font-bold underline">live tracing</span></li>
                                <li>• Verification and validation of <span className="text-orange-500 font-bold">requirements</span> developed in the model</li>
                                <li>• Specialized doc<span className="text-orange-500 font-bold">ument</span> generation and data reporting</li>
                            </ul>
                        </AnimatedSection>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                SOLUTION OVERVIEW
                            </Button>
                            <Button variant="outline" className="border-[#001e4d] text-[#001e4d] hover:bg-[#001e4d] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                WHITEPAPER
                            </Button>
                        </div>
                    </div>
                </section>

                {/* MBSE IS MORE SECTION - Image 4 */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-6 text-white">MBSE is more than a SysML Model</h2>
                            <p className="text-sm text-blue-100 max-w-3xl mx-auto mb-16 text-white">
                                To achieve the desired Digital Transformation results, MBSE must connect the entire development effort...this is what is enabled by Traceable MBSE in CarpacSoft.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="mb-12">
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                QUICKSTART GUIDE
                            </Button>
                        </AnimatedSection>

                        {/* Feature Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-16">
                            {[
                                {
                                    icon: (
                                        <div className="w-20 h-20 relative">
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#10b981] flex items-center justify-center">
                                                <div className="w-8 h-8 bg-[#f97316] rounded transform rotate-45"></div>
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f97316] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">↗</span>
                                            </div>
                                        </div>
                                    ),
                                    title: "Software and mechanical teams can align their efforts to the system model"
                                },
                                {
                                    icon: (
                                        <div className="w-20 h-20 relative flex items-center justify-center">
                                            <div className="w-16 h-12 bg-[#10b981] rounded-lg relative">
                                                <div className="absolute top-1 left-1 right-1 h-2 bg-white/30 rounded"></div>
                                                <div className="absolute top-4 left-1 right-1 h-1 bg-white/30 rounded"></div>
                                            </div>
                                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                                <div className="w-4 h-4 bg-[#8b5cf6] rounded"></div>
                                                <div className="w-4 h-4 bg-[#0ea5e9] rounded"></div>
                                            </div>
                                        </div>
                                    ),
                                    title: "Systems engineers can manage the state of development across disciplines"
                                },
                                {
                                    icon: (
                                        <div className="w-20 h-20 relative flex items-center justify-center">
                                            <div className="w-16 h-16 border-4 border-[#f59e0b] rounded-full flex items-center justify-center">
                                                <Search size={24} className="text-[#0ea5e9]" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center">
                                                <Users size={12} className="text-white" />
                                            </div>
                                        </div>
                                    ),
                                    title: "Automatically identify risks through all phases of development"
                                }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={300 + i * 100} className="flex flex-col items-center">
                                    <div className="mb-6">{item.icon}</div>
                                    <p className="text-sm font-medium text-blue-100 max-w-[200px]">{item.title}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRACEABLE AGILE + MBSE SECTION - Image 5 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Traceable Agile and Traceable MBSE can be combined to deliver an end to end solution across all engineering teams</h2>
                            <h3 className="text-lg font-bold text-[#0d47a1] mb-2">System Modeling | Traceable MBSE</h3>
                            <p className="text-sm text-slate-600">No change to SYSENG team, management can now answer all questions</p>
                        </AnimatedSection>

                        {/* 3-Step Diagram */}
                        <div className="relative max-w-5xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                {/* Step 1 */}
                                <AnimatedSection delay={100} className="md:w-1/4 text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#0d47a1] text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">1</div>
                                    <h4 className="text-lg font-bold text-[#0d47a1] mb-2">Join Models</h4>
                                    <p className="text-xs text-slate-600">Metadata from system model in the modeling tool are synched between associated project's requirements and test cases in CarpacSoft</p>
                                </AnimatedSection>

                                {/* Arrow */}
                                <div className="hidden md:block text-4xl text-slate-300 transform rotate-0">→</div>

                                {/* Center - CarpacSoft UI */}
                                <AnimatedSection delay={200} className="md:w-2/5">
                                    <div className="bg-white rounded-lg shadow-xl border p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-4 invert" />
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                                            <span>Live Trace Explorer</span>
                                            <span className="ml-auto text-green-500 font-bold text-[10px]">Trace score: 40.87%</span>
                                        </div>
                                        {/* Simplified Flow */}
                                        <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                                            <div className="flex-1 p-2 bg-green-50 rounded border-l-2 border-green-500 text-[8px]">
                                                <div className="font-bold">Container details</div>
                                                <div>Open conversations: 1</div>
                                            </div>
                                            <span className="text-green-500">→</span>
                                            <div className="flex-1 p-2 bg-blue-50 rounded border-l-2 border-blue-500 text-[8px]">
                                                <div className="font-bold">Coverage</div>
                                                <div>56.7%</div>
                                            </div>
                                            <span className="text-blue-500">→</span>
                                            <div className="flex-1 p-2 bg-orange-50 rounded border-l-2 border-orange-500 text-[8px]">
                                                <div className="font-bold">Test cases</div>
                                                <div>289</div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>

                                {/* Arrow */}
                                <div className="hidden md:block text-4xl text-slate-300 transform rotate-0">→</div>

                                {/* Step 2 & 3 */}
                                <div className="md:w-1/4 space-y-8">
                                    <AnimatedSection delay={300} className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-[#0d47a1] text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">2</div>
                                        <h4 className="text-lg font-bold text-[#0d47a1] mb-2">Inspect & Determine Action</h4>
                                        <p className="text-xs text-slate-600">CarpacSoft continually calculates Trace Scores™ & Coverage scores to identify high risk areas to drill into and determine corrective action</p>
                                    </AnimatedSection>

                                    <AnimatedSection delay={400} className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-[#0d47a1] text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">3</div>
                                        <h4 className="text-lg font-bold text-[#0d47a1] mb-2">Detect Changes in the Models</h4>
                                        <p className="text-xs text-slate-600">Corrective action in the system model to be addressed and updates synced to CarpacSoft</p>
                                    </AnimatedSection>
                                </div>
                            </div>

                            {/* Integration Logos */}
                            <AnimatedSection delay={500} className="flex items-center justify-center gap-8 mt-12 flex-wrap">
                                <span className="font-bold text-blue-800">®</span>
                                <span className="font-bold text-blue-900">CATIA No Magic</span>
                                <span className="font-bold text-blue-700">ENTERPRISE ARCHITECT</span>
                                <span className="font-bold text-teal-600">GENESYS</span>
                            </AnimatedSection>
                            <p className="text-center text-xs text-[#00a3cc] mt-4">(no change to current developer behavior)</p>
                        </div>
                    </div>
                </section>

                {/* CUSTOMER QUOTE SECTION - Image 5 Bottom */}
                <section className="bg-[#f0f9ff] py-24 text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-slate-700 mb-8">Our customers rely on us to move faster, simplify compliance, and redefine the future</h2>
                            <blockquote className="text-lg text-orange-500 italic font-serif leading-relaxed mb-8">
                                "By having our master set of requirements in CarpacSoft, we can quickly react to regulatory changes and know that we're hitting key compliance areas with every client."
                            </blockquote>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <span className="font-bold text-slate-800">VANTAGE</span>
                                <div className="text-left">
                                    <div className="font-bold text-slate-700">Scott Britt</div>
                                    <div className="text-xs text-slate-500">Systems Engineering Manager</div>
                                </div>
                            </div>
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORIES
                            </Button>
                        </AnimatedSection>
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

export default MBSE;



