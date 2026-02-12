import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import { Play } from "lucide-react";

// Integration Logos (Reusing the same set from EngineeringLeadership as per image)
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

const IntegrationIcon = ({ name, type, color, font }: any) => {
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

const SystemsEngineering = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-gradient-to-r from-[#005fb8] to-[#003366] text-white py-32 overflow-hidden">
                    {/* Geometric Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform origin-top-right"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Achieving Systems Engineering Success has Never Been More Critical or Challenging
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                Only CarpacSoft delivers Live Traceability™ to increase the success rate of Systems Engineering with no changes required to processes or tools across engineering disciplines.
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

                {/* AUTOMATING TRACEABILITY - Image 2 */}
                <section className="bg-white py-24 relative overflow-hidden">
                    {/* Geometric Pattern Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50/50 -skew-x-12 transform origin-top-right"></div>
                        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-bottom-left"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
                            {/* Diagram Side */}
                            <div className="md:w-1/2">
                                <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-100 relative">
                                    {/* Mockup of Traceability Diagram */}
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/10/Live-Traceability-View-1024x638.png"
                                        className="w-full rounded-lg"
                                        alt="Traceability Diagram"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"; }}
                                    />
                                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#0052cc] rounded-full p-3 shadow-lg animate-pulse">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Overcome Engineering Resistance by Automating Traceability</h2>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                                        Systems Engineering success depends on all engineering disciplines following a formalized methodology (e.g. V Model). But if they have to do it manually, it won't happen. Only CarpacSoft automates the tracking and measurement of requirements decomposition, requirements coverage, test case coverage, defects, verification and validation.
                                    </p>
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        TRACEABLE AGILE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ONLINE REVIEWS - Image 3 Top */}
                <section className="bg-[#000033] py-24 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold mb-6 text-white">Win Over Engineering Teams with Asynchronous, Online Reviews</h2>
                                    <p className="text-xs text-blue-100 leading-relaxed mb-8">
                                        Engineers dread the unproductive, multi-disciplinary review meetings that can drag on for hours. With CarpacSoft, reviews happen online in a collaborative manner engineers prefer – asynchronous, comments, @ mentions and a single source of truth with version control.
                                    </p>
                                    <Button className="border-white text-white hover:bg-white hover:text-[#000033] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide transition-colors">
                                        WATCH DEMO
                                    </Button>
                                </AnimatedSection>
                            </div>
                            <div className="md:w-1/2">
                                <div className="rounded-lg shadow-2xl overflow-hidden border border-slate-700 bg-slate-800">
                                    <div className="bg-slate-900 p-2 border-b border-slate-700 flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://www.jamasoftware.com/wp-content/uploads/2022/05/Review-Center-1024x609.png"
                                            alt="Review Center Interface"
                                            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                                            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"; }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group">
                                            <div className="w-16 h-16 bg-[#0052cc] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={24} className="text-white ml-2" fill="white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RISK DETECTION - Image 3 Bottom */}
                <section className="bg-[#f0fdf4] py-24 relative overflow-hidden">
                    {/* Minty Green Background */}
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/3 flex justify-center">
                                <div className="relative transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/04/Research-Note-Traceability-Score-Cover-TN.png"
                                        alt="Traceability Score"
                                        className="w-full max-w-[300px] shadow-2xl rounded-sm"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"; }}
                                    />
                                    <div className="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm shadow-md">Article</div>
                                    <div className="absolute bottom-4 right-4 bg-[#001e4d] text-white p-2 rounded-full shadow-lg">
                                        <div className="w-6 h-6 flex items-center justify-center font-bold">$</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <AnimatedSection>
                                    <div className="inline-block bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-1 rounded mb-4">Research Note: Traceability Score</div>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Auto-detect Risk Early to Reduce Defects and Rework</h2>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                                        Only CarpacSoft provides a real time view of the entire project status across engineering disciplines. Scores are continually updated for requirement and test case coverage, verification and validation. Areas with the lowest scores are flagged in red. The scope of the measurement can be configured to pinpoint areas of most risk.
                                    </p>
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        LEARN MORE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENCHMARK REPORT - Image 4 Top */}
                <section className="bg-[#001e4d] py-24 relative overflow-hidden text-white border-t border-slate-700">
                    {/* Abstract Geometric Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-50"></div>
                        {/* Subtle Grid */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
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
                            <div className="md:w-1/3 flex justify-center">
                                <div className="relative w-64 group">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2023/10/Requirements-Traceability-Benchmark-Report-Cover-TN.png"
                                        alt="Benchmark Report"
                                        className="w-full relative z-10 shadow-2xl transform group-hover:rotate-2 transition-transform duration-500 rounded-sm"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"; }}
                                    />
                                    <div className="absolute bottom-6 -right-6 z-20 bg-white p-2 rounded-lg shadow-xl animate-bounce delay-700">
                                        <div className="w-12 h-12 bg-[#001e4d] rounded-lg flex items-center justify-center">
                                            <div className="text-white font-bold text-lg">2.5x</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 4 Bottom */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-xl font-bold text-slate-700 mb-12">Establish Live Traceability Across Your Teams' Favorite Tools</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                                {/* Video Card 1 */}
                                <div className="bg-[#003366] rounded-lg overflow-hidden group cursor-pointer relative aspect-video shadow-xl">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#004d99] to-[#001e4d]">
                                        <h3 className="text-white text-lg font-bold mb-2">CATIA</h3>
                                        <p className="text-blue-200 text-sm mb-4">System Modeling Apps</p>
                                        <div className="text-2xl text-white font-bold mb-2">CarpacSoft® integration</div>
                                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all scale-100 group-hover:scale-110">
                                            <Play size={24} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-0 right-0 text-center text-xs font-bold text-blue-300">CATIA Magic (Cameo) — CarpacSoft Integration Demo</div>
                                </div>

                                {/* Video Card 2 */}
                                <div className="bg-[#001e4d] rounded-lg overflow-hidden group cursor-pointer relative aspect-video shadow-xl">
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

                            <p className="text-xs text-slate-500 mb-12 font-medium">
                                In addition to Jira and Cameo, CarpacSoft enables Live Traceability across more best-of-breed tools than anyone else.
                            </p>

                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto opacity-80 hover:opacity-100 transition-all duration-500 px-8">
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

export default SystemsEngineering;



