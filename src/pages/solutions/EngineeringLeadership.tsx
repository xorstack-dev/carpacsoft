import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import { Play, FileText, ArrowRight } from "lucide-react";

// Integration Logos
const integrations = [
    { name: "Ansys", logo: "Ansys", type: "text", color: "text-amber-500", font: "font-sans italic font-bold" },
    { name: "Azure DevOps", logo: "Azure DevOps", type: "icon-text", icon: "azure" },
    { name: "Teamcenter", logo: "Teamcenter", type: "text", color: "text-green-700", font: "font-bold uppercase tracking-tight" },
    { name: "TestRail", logo: "TestRail", type: "text", color: "text-slate-700", font: "font-bold" },
    { name: "Xray", logo: "XRAY", type: "icon-text", icon: "xray" },
    { name: "Jira", logo: "Jira", type: "icon-text", icon: "jira" },
    { name: "Windchill", logo: "windchill", type: "icon-text", icon: "windchill" },
    { name: "LDRA", logo: "LDRA", type: "text", color: "text-blue-900", font: "font-serif font-bold italic" },
    { name: "Aras", logo: "aras", type: "icon-text", icon: "aras" },
    { name: "Tricentis qTest", logo: "TRICENTIS qTest", type: "icon-text", icon: "qtest" },
    { name: "Git", logo: "git", type: "icon-text", icon: "git" },
    { name: "No Magic", logo: "CATIA No Magic", type: "icon-text", icon: "nomagic" },
    { name: "MathWorks", logo: "MathWorks", type: "icon-text", icon: "mathworks" },
    { name: "Vector", logo: "VECTOR", type: "text", color: "text-black", font: "font-bold uppercase tracking-widest" },
    { name: "Zephyr", logo: "Zephyr", type: "text", color: "text-slate-800", font: "font-bold" },
    { name: "Enterprise Architect", logo: "ENTERPRISE ARCHITECT", type: "icon-text", icon: "ea" },
    { name: "Cameo", logo: "CAMEO", type: "text", color: "text-amber-700", font: "font-serif font-bold" },
];

const IntegrationIcon = ({ name, type, color, font, icon }: any) => {
    if (type === "text") {
        return <span className={`text-xl md:text-2xl ${color} ${font}`}>{name}</span>;
    }
    // Simplistic placeholder icons for demo purposes
    return (
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded-sm"></div>
            <span className="text-lg font-bold text-slate-700">{name}</span>
        </div>
    );
};

const EngineeringLeadership = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#003366] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-[#001e4d]/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Detect Risks Early Across Engineering Disciplines, Avoid Late Surprises.
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                With CarpacSoft, engineering leaders gain proactive insights across disciplines, reducing defects, rework, and delays without disrupting established workflows.
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

                {/* SCREENSHOT SECTION - Image 2 */}
                <section className="bg-[#1e40af] py-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-3xl font-bold mb-6 text-white">How Do You Know Where the Risks are in Your Development Effort?</h2>
                                    <p className="text-sm text-blue-100 leading-relaxed mb-8">
                                        Engineering leadership dreads the late surprises that lead to defects, rework and delays or even worse – recalls. Traditionally, leaders have relied on their teams to identify risks, but the areas of most concern are the gaps between engineering disciplines. Only CarpacSoft auto-detects risk across engineering disciplines to reduce the risk of late surprises.
                                    </p>
                                    <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-blue-500">
                                        AUTO DETECT RISK
                                    </Button>
                                </AnimatedSection>
                            </div>
                            <div className="md:w-1/2 relative">
                                {/* Laptop Frame Mockup */}
                                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                        <img
                                            src="https://www.jamasoftware.com/wp-content/uploads/2022/10/Live-Traceability-View-1024x638.png"
                                            className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl object-cover"
                                            alt="CarpacSoft Interface"
                                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"; }}
                                        />
                                    </div>
                                </div>
                                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUALITY SECTION - Image 3 Top Left */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/3">
                                <div className="relative rounded-lg overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/04/Research-Note-Traceability-Score-Cover-TN.png"
                                        alt="Research Note Traceability Score"
                                        className="w-full"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"; }}
                                    />
                                    <div className="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Article</div>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Achieve Higher Quality Without Slowing Down</h2>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                                        The pressure is on to become more agile and release faster. But when the inevitable drops in quality happen (defects, rework, delays, recalls) leadership demands speed AND quality. Only CarpacSoft delivers speed and quality by allowing engineering teams to stay in their tools of choice with current practices while automatically scoring progress and auto-detecting risk as early as possible.
                                    </p>
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        LEARN MORE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ONLINE REVIEWS SECTION - Image 3 Top Right */}
                <section className="bg-sky-50 py-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent skew-x-12"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Win Over Engineering Teams with Asynchronous, Online Reviews</h2>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                                        Engineers dread the unproductive, multi-disciplinary review meetings that can drag on for hours. With CarpacSoft, reviews happen online in a collaborative manner engineers prefer – asynchronous, comments, @ mentions and a single source of truth with version control.
                                    </p>
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        WATCH DEMO
                                    </Button>
                                </AnimatedSection>
                            </div>
                            <div className="md:w-1/2">
                                <div className="rounded-lg shadow-xl overflow-hidden border border-slate-200 bg-white">
                                    <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://www.jamasoftware.com/wp-content/uploads/2022/05/Review-Center-1024x609.png"
                                            alt="Review Center Interface"
                                            className="w-full h-auto"
                                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"; }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer">
                                            <div className="w-12 h-12 bg-[#0052cc] rounded-full flex items-center justify-center shadow-lg">
                                                <Play size={20} className="text-white ml-1" fill="white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENCHMARK REPORT SECTION - Image 3 Bottom */}
                <section className="bg-[#001e4d] py-24 relative overflow-hidden text-white">
                    {/* Abstract Geometric Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/3 flex justify-center">
                                <div className="relative w-64">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2023/10/Requirements-Traceability-Benchmark-Report-Cover-TN.png"
                                        alt="Benchmark Report"
                                        className="w-full shadow-2xl transform rotate-6 border-4 border-white/10 rounded-sm"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=500"; }}
                                    />
                                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#001e4d] border-2 border-cyan-400 p-4 rounded-lg shadow-xl flex flex-col gap-2 w-16">
                                        <div className="w-full h-2 bg-slate-600 rounded"></div>
                                        <div className="w-3/4 h-2 bg-slate-600 rounded"></div>
                                        <div className="w-full h-2 bg-cyan-400 rounded mt-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold mb-6 text-white">Measure and Benchmark Performance Across Teams to Drive Behavior Change</h2>
                                    <p className="text-xs text-blue-100 leading-relaxed mb-8">
                                        We are the first to enable companies to measure requirements traceability and benchmark their own projects. Our Requirements Traceability Benchmark determined that top quartile projects in traceability scores outperformed bottom quartile projects by 2.5X in defect detection and nearly 2X in requirements tested and verified.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button className="bg-[#000033] hover:bg-black text-white border border-white/20 rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            DOWNLOAD THE REPORT
                                        </Button>
                                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            WATCH THE WEBINAR
                                        </Button>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS SECTION - Image 4 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-xl font-bold text-slate-600 mb-12 uppercase tracking-wide">Establish Live Traceability Across Your Teams' Favorite Tools</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                                {/* Video Card 1 */}
                                <div className="bg-[#003366] rounded-lg overflow-hidden group cursor-pointer relative aspect-video">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#004d99] to-[#001e4d]">
                                        <h3 className="text-white text-lg font-bold mb-2">CATIA</h3>
                                        <p className="text-blue-200 text-sm mb-4">System Modeling Apps</p>
                                        <div className="text-2xl text-white font-bold mb-2">CarpacSoft® integration</div>
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                                            <Play size={24} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-0 right-0 text-center text-xs font-bold text-blue-300">CATIA Magic (Cameo) — CarpacSoft Integration Demo</div>
                                </div>

                                {/* Video Card 2 */}
                                <div className="bg-[#001e4d] rounded-lg overflow-hidden group cursor-pointer relative aspect-video">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 bg-blue-500 rounded"></div>
                                            <span className="text-3xl font-bold text-white">Jira</span>
                                        </div>
                                        <div className="text-white text-xl font-bold mb-2">+</div>
                                        <div className="w-32 h-8 bg-white/10 rounded mb-4"></div>
                                        <div className="w-16 h-16 rounded-full bg-[#00a3cc] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play size={24} fill="white" className="text-white ml-1" />
                                        </div>
                                        <p className="text-white font-bold mt-4">Integration Demo</p>
                                    </div>
                                    <div className="absolute top-4 left-0 right-0 text-center text-xs font-bold text-blue-300">Jira — CarpacSoft Integration Demo</div>
                                </div>
                            </div>

                            <p className="text-xs text-slate-500 mb-12">
                                In addition to Jira and Cameo, CarpacSoft enables Live Traceability across more best-of-breed tools than anyone else.
                            </p>

                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500 px-8">
                                {integrations.map((item, idx) => (
                                    <IntegrationIcon key={idx} {...item} />
                                ))}
                            </div>

                            <div className="mt-16">
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-slate-800">
                                    LEARN MORE
                                </Button>
                            </div>
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

export default EngineeringLeadership;



