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
    CheckCircle
} from "lucide-react";

// Integration logos for Digital Thread
const integrationLogos = [
    { name: "Ansys", text: "Ansys", color: "text-slate-800" },
    { name: "Azure DevOps", text: "Azure DevOps", color: "text-blue-500" },
    { name: "Teamcenter", text: "TEAMCENTER", color: "text-green-600" },
    { name: "TestRail", text: "TestRail", color: "text-teal-600" },
    { name: "Xray", text: "XRAY", color: "text-green-500" },
    { name: "Jira", text: "Jira", color: "text-blue-600" },
    { name: "Windchill", text: "windchill", color: "text-green-700" },
    { name: "LDRA", text: "LDRA", color: "text-blue-800" },
    { name: "Aras", text: "aras", color: "text-orange-600" },
    { name: "Tricentis qTest", text: "TRICENTIS qTest", color: "text-blue-700" },
    { name: "Git", text: "git", color: "text-orange-500" },
    { name: "CATIA No Magic", text: "CATIA No Magic", color: "text-blue-900" },
    { name: "MathWorks", text: "MathWorks", color: "text-orange-600" },
    { name: "Vector", text: "VECTOR", color: "text-red-600" },
    { name: "Zephyr", text: "ZEPHYR", color: "text-blue-500" },
    { name: "Enterprise Architect", text: "ENTERPRISE ARCHITECT", color: "text-blue-800" },
    { name: "Cameo", text: "CAMEO", color: "text-teal-700" },
];

const DigitalThread = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>
                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,0 50,0 25,50" fill="white" />
                            <polygon points="50,0 100,0 75,50" fill="white" />
                            <polygon points="25,50 75,50 50,100" fill="white" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Only CarpacSoft Delivers a Digital Thread that is Measurable and Live Traceable Across Best-of-Breed Tools
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed text-white">
                                A Digital Thread is only useful if it connects best-of-breed tools like Jira and Cameo and enables you to auto detect risk early across all engineering disciplines.
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

                {/* CIMDATA SURVEY SECTION - Image 2 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Book Cover */}
                            <div className="md:w-1/3">
                                <AnimatedSection className="relative">
                                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                                        {/* Header */}
                                        <div className="p-4 border-b border-slate-600">
                                            <span className="text-white font-bold text-sm">CIMdata</span>
                                        </div>
                                        {/* Cover Image */}
                                        <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center">
                                            <div className="absolute inset-0 bg-slate-900/60"></div>
                                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                                <h4 className="text-white text-lg font-bold">Digital Thread in Aerospace and Defense</h4>
                                                <p className="text-slate-300 text-xs mt-2">Poised for Rapid Growth</p>
                                            </div>
                                        </div>
                                        {/* Binary Pattern */}
                                        <div className="p-4 bg-slate-800 text-green-400 font-mono text-[8px] opacity-60">
                                            101010111001010101<br />010101010110101010
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">CIMdata Survey Shows the #1 Digital Thread Objective is Live Requirements Traceability Across Engineering Disciplines</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        After-the-fact <span className="text-orange-500 font-bold">reporting</span> is failing to deliver Digital Thread results. Only CarpacSoft delivers a live and measurable Digital Thread across best-of-breed <span className="text-orange-500 font-bold">tools</span> with proven improvement to the product development process.
                                    </p>
                                    <Button variant="outline" className="border-[#001e4d] text-[#001e4d] hover:bg-[#001e4d] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        GET THE EBOOK
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MEASUREMENT SECTION - Image 2 Bottom */}
                <section className="bg-[#e0f7fa] py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Text Side */}
                            <div className="md:w-2/3 text-center md:text-left">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">To Improve Requires Measurement. Only CarpacSoft's Digital Thread Measurably Improves Product Development</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        We are the first to enable companies to measure requirements traceability and benchmark their own projects. Our Requirements Traceability Benchmark determined that top quartile projects in traceability scores outperformed bottom quartile projects by 2.5X in defect detection and nearly 2X in requirements tested and verified.
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            DOWNLOAD THE REPORT
                                        </Button>
                                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            WATCH THE WEBINAR
                                        </Button>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Report Cards */}
                            <div className="md:w-1/3">
                                <AnimatedSection>
                                    <div className="relative">
                                        {/* Stacked Report Cards */}
                                        <div className="absolute top-4 left-4 w-40 h-56 bg-white rounded-lg shadow-lg transform rotate-6 border"></div>
                                        <div className="relative w-40 h-56 bg-white rounded-lg shadow-2xl border overflow-hidden">
                                            <div className="p-4 h-full flex flex-col">
                                                <div className="w-10 h-10 bg-[#00a3cc] rounded-full flex items-center justify-center mb-4">
                                                    <CheckCircle className="text-white" size={20} />
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                                                    <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                                                    <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                                                </div>
                                                <div className="mt-auto pt-4 border-t">
                                                    <p className="text-[10px] font-bold text-[#001e4d]">Requirements Traceability Benchmark</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* JIRA INTEGRATION SECTION - Image 3 */}
                <section className="bg-[#003366] py-16 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Video Card */}
                            <div className="md:w-2/5">
                                <AnimatedSection>
                                    <div className="bg-gradient-to-br from-[#001e4d] to-[#003366] rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative group cursor-pointer p-8">
                                        {/* Jira Logo */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">J</span>
                                            </div>
                                            <span className="text-2xl font-bold text-white">Jira</span>
                                        </div>

                                        {/* CarpacSoft Logo */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-8 h-8 bg-[#00a3cc] rounded-full flex items-center justify-center">
                                                <Play size={16} className="text-white ml-0.5" />
                                            </div>
                                            <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-6" />
                                        </div>

                                        <p className="text-orange-400 font-bold text-lg">Integration Demo</p>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                <Play size={28} fill="white" className="text-white ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-3/5">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold mb-6 text-white">Only CarpacSoft's Digital Thread can Auto Detect Risk in Jira</h2>
                                    <p className="text-xs text-blue-100 leading-relaxed text-white">
                                        We are the first to enable companies to measure requirements traceability and benchmark their own projects. Our Requirements Traceability Benchmark determined that top quartile projects in traceability scores outperformed bottom quartile projects by 2.5X in defect detection and nearly 2X in requirements tested and verified.
                                    </p>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATIA MAGIC SECTION - Image 3 Bottom */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Text Side */}
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-xl font-bold text-[#0d47a1] mb-4">Dassault Catia Magic (Cameo) Syncs SysML Diagrams and Data Only with CarpacSoft</h2>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        Only CarpacSoft is natively supported by Catia Magic to enable a Digital Thread by syncing SysML diagrams and data to align the System Architecture team with all engineering disciplines.
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

                {/* LIVE TRACE EXPLORER SECTION - Image 4 */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-6 max-w-4xl mx-auto text-white">Digital Threads Unravel in After-the-Fact Reporting. Only CarpacSoft Delivers Live & Measurable Traceability Across Tools</h2>
                            <p className="text-xs text-blue-100 max-w-5xl mx-auto mb-12 text-white">
                                CarpacSoft is the ONLY requirements management solution that delivers Live Traceability across integrations with best-of-breed tooling. No changes are required to engineering teams' process, tools or field values for CarpacSoft to track the life of a requirement through all stages of your development lifecycle, in real time.
                            </p>
                        </AnimatedSection>

                        {/* Live Trace Explorer Mockup */}
                        <AnimatedSection delay={200}>
                            <div className="bg-white rounded-lg shadow-2xl max-w-5xl mx-auto overflow-hidden">
                                {/* Header Bar */}
                                <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-slate-600 ml-4">Live Trace Explorer | Semiconductor Product</div>
                                    <div className="ml-auto text-xs text-green-500 font-bold">Trace score: 40.87%</div>
                                </div>

                                {/* Content */}
                                <div className="p-8 bg-slate-50">
                                    {/* Traceability Flow Diagram */}
                                    <div className="flex items-center justify-between gap-4 mb-8">
                                        {/* Box 1 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-green-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Stakeholder Requirements</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Container details</span></div>
                                                <div className="flex justify-between"><span>Stakeholder Requirement</span><span className="font-bold">2,096</span></div>
                                                <div className="flex justify-between"><span>Open conversations</span><span>1</span></div>
                                            </div>
                                            <div className="mt-2 pt-2 border-t">
                                                <div className="text-[8px] text-green-600 font-bold">Coverage: 65.31%</div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">→</div>

                                        {/* Box 2 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-blue-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Product Requirements</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Product Requirement</span><span className="font-bold">4,911</span></div>
                                                <div className="flex justify-between"><span>Open conversations</span><span>0</span></div>
                                            </div>
                                            <div className="mt-2 pt-2 border-t">
                                                <div className="text-[8px] text-blue-600 font-bold">Coverage: 56.7%</div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse" style={{ animationDelay: '0.5s' }}>→</div>

                                        {/* Box 3 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-orange-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Related test cases</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Test count (multiple types)</span><span className="font-bold">289</span></div>
                                                <div className="flex justify-between"><span>Validation</span><span>10</span></div>
                                                <div className="flex justify-between"><span>Verification</span><span>279</span></div>
                                            </div>
                                            <div className="mt-2 pt-2 border-t">
                                                <div className="text-[8px] text-orange-600 font-bold">Test plan coverage: 99.66%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Relationship Diagram */}
                                    <div className="bg-white rounded-lg p-4 shadow">
                                        <h4 className="text-xs font-bold text-slate-700 mb-4">Relationship Diagram</h4>
                                        <div className="flex items-center justify-center gap-2 flex-wrap text-[8px]">
                                            <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">Stakeholder Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-blue-100 rounded text-blue-700">System Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-green-100 rounded text-green-700">System Architecture</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-yellow-100 rounded text-yellow-700">Subsystem Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-orange-100 rounded text-orange-700">User Story</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-red-100 rounded text-red-700">Test Case</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={400} className="mt-12">
                            <Button className="bg-[#001e4d] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-white">
                                LEARN MORE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* INTEGRATIONS SECTION - Image 5 */}
                <section className="bg-[#f0f9ff] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-slate-700 mb-12 max-w-3xl mx-auto">In addition to Jira and Cameo, CarpacSoft traces the Digital Thread across more best-of-breed tools than anyone else.</h2>
                        </AnimatedSection>

                        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto mb-12">
                            {integrationLogos.map((logo, idx) => (
                                <AnimatedSection key={idx} delay={idx * 50}>
                                    <div className={`font-bold text-lg ${logo.color} hover:scale-110 transition-transform cursor-pointer`}>
                                        {logo.text}
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection delay={500}>
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                LEARN MORE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY SECTION - Image 5 Bottom */}
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

export default DigitalThread;



