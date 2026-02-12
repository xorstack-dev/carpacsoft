import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    Play,
    Check,
    ArrowRight,
    Database,
    Users,
    Timer,
    Shield,
    Monitor,
    Lightbulb,
    Award,
    Zap,
    BarChart,
    Target,
    FileCheck,
    Layout,
    Globe,
    Share2,
    ShieldCheck,
    Server,
    Lock,
    Star
} from "lucide-react";

const G2Graph = () => (
    <div className="relative w-full h-[300px] bg-white border border-slate-200 rounded-lg p-4">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-slate-100" />
            ))}
        </div>

        {/* Axis Labels */}
        <div className="absolute top-2 left-2 text-[10px] font-bold text-slate-500">Contenders</div>
        <div className="absolute top-2 right-2 text-[10px] font-bold text-slate-500">Leaders</div>
        <div className="absolute bottom-2 left-2 text-[10px] font-bold text-slate-500">Niche</div>
        <div className="absolute bottom-2 right-2 text-[10px] font-bold text-slate-500">High Performers</div>

        {/* Competitor Dots */}
        <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-slate-400 rounded-sm opacity-50"></div>
        <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-slate-400 rounded-sm opacity-50"></div>

        {/* Jama Dot */}
        <div className="absolute top-[10%] right-[10%] z-10 flex flex-col items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-md shadow-lg flex items-center justify-center animate-pulse-slow">
                <img src="/jama-connect-logo-white.svg" alt="" className="w-6 h-6" />
            </div>
        </div>

        {/* IBM Dot */}
        <div className="absolute top-[30%] left-[35%] z-10 flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-100 border border-blue-300 rounded-md flex items-center justify-center">
                <span className="text-[8px] font-bold text-blue-800">IBM</span>
            </div>
        </div>
    </div>
);

const ComparisonTable = () => {
    const rows = [
        { label: "Total Cost of Ownership", jama: 4, ibm: 2, desc: "Minimal up front investment. Accelerated adoption." },
        { label: "Open Integrations", jama: 4, ibm: 2, desc: "Live requirements traceability enabled through modern solutions." },
        { label: "Simplifies Compliance", jama: 4, ibm: 3, desc: "A solution that is scalable, reliable, easy to manage." },
        { label: "Migration Expertise", jama: 4, ibm: 1, desc: "Professional Services to develop and support a comprehensive adoption." },
        { label: "User Expertise", jama: 4, ibm: 1, desc: "Easy to adopt, friendly, intuitive interface." },
        { label: "Reviews", jama: 4, ibm: 1, desc: "Ability to have one single and consistent review." },
        { label: "Collaboration", jama: 4, ibm: 1, desc: "Ease of collaboration between disciplines built into the foundation." },
        { label: "Administration", jama: 4, ibm: 1, desc: "Designed for Cloud from the outset supporting on-prem." },
        { label: "In-House Expertise", jama: 4, ibm: 1, desc: "Vendor has in-house Professional Services to support." },
        { label: "Product Updates", jama: 4, ibm: 1, desc: "Regular product updates of CarpacSoft for Cloud customers." },
        { label: "Technical Updates", jama: 4, ibm: 3, desc: "Supporting projects for all complexities." },
    ];

    return (
        <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden text-sm">
            <div className="grid grid-cols-12 bg-[#000066] text-white py-4 px-6 font-bold uppercase tracking-wider">
                <div className="col-span-3 text-orange-400">Areas of Focus</div>
                <div className="col-span-5">Key Buying Factors to Consider</div>
                <div className="col-span-2 text-center text-blue-300">CarpacSoft</div>
                <div className="col-span-2 text-center text-white">DOORS Next</div>
            </div>
            {rows.map((row, index) => (
                <div key={index} className={`grid grid-cols-12 py-4 px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-slate-50/50' : ''}`}>
                    <div className="col-span-3 font-bold text-[#ea580c]">{row.label}</div>
                    <div className="col-span-5 text-slate-600 text-xs pr-4">{row.desc}</div>
                    <div className="col-span-2 flex justify-center gap-1">
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} size={14} fill={i < row.jama ? "#1e40af" : "#cbd5e1"} stroke="none" />
                        ))}
                    </div>
                    <div className="col-span-2 flex justify-center gap-1">
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} size={14} fill={i < row.ibm ? "#475569" : "#cbd5e1"} stroke="none" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const VideoThumbnail = ({ title, logo }: { title: string, logo: React.ReactNode }) => (
    <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden group cursor-pointer border border-slate-700 shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {logo}
            <h3 className="text-white font-bold mt-4 mb-2">{title}</h3>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mt-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
        </div>
    </div>
);

const IBMDoorsNext = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-gradient-to-r from-[#172554] to-[#1e3a8a] text-white py-24 overflow-hidden">
                    {/* Abstract Background Shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            {/* CarpacSoft Logo */}
                            <div className="mb-8 animate-fade-in">
                                <div className="flex items-center gap-2">
                                    <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                                    <span className="text-white text-lg font-light tracking-wide">
                                        <span className="font-bold">CarpacSoft</span> <sup className="text-[8px] ml-0.5">®</sup>
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                IBM Customers Choose CarpacSoft the Most
                            </h1>
                            <p className="text-lg text-blue-100 mb-8 max-w-3xl leading-relaxed">
                                Explore how CarpacSoft's advanced features, exceptional user experience, and effortless integrations are delivering impressive ROI and higher customer satisfaction compared to IBM DOORS Next.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CUSTOMER BANNER - Image 2 */}
                <section className="bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] py-16 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 max-w-5xl mx-auto">
                                Hundreds of companies in the last few years have chosen CarpacSoft over IBM DOORS Next (DNG) for new projects and migrations from IBM DOORS, including some of the largest and most complex, including dSpace, Rockwell Automation and Jet Propulsion Lab (JPL).
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    DSPACE CUSTOMER STORY
                                </Button>
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    JPL PAPER
                                </Button>
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#172554] rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                                    WATCH WEBINAR
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* NO UPGRADE POSSIBLE - Image 2 bottom */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                            <AnimatedSection className="w-full md:w-1/3">
                                <div className="rounded-lg p-1 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src="https://www.jamasoftware.com/media/2022/08/2022-08-04-migration-from-doors-1-1.jpg"
                                        alt="Why Migration Efforts Fail"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={200} className="w-full md:w-2/3">
                                <h2 className="text-3xl font-bold mb-4 text-[#1e3a8a]">No Upgrade Possible from IBM DOORS to DOORS Next</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    IBM DOORS customers are surprised to learn that DNG is a completely different product, database, architecture, and code base from DOORS and no upgrade is possible. In fact, most DOORS customers find that it is easier to migrate to CarpacSoft since DNG is based on a 16-year-old Jazz application server.
                                </p>
                                <Button className="bg-[#05003B] text-white hover:bg-black rounded-full px-8 py-3 uppercase text-sm font-bold tracking-wider">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* G2 COMPARISON - Image 3 */}
                <section className="bg-[#05003B] py-20 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <AnimatedSection>
                                <h2 className="text-4xl font-bold mb-6 text-white">
                                    CarpacSoft is at the Top in Customer Satisfaction, DOORS Next is Near the Bottom
                                </h2>
                                <p className="text-blue-200 mb-8 text-lg">
                                    Before you decide, learn from the user experiences of both CarpacSoft and DOORS Next customers.
                                </p>
                                <div className="space-y-6 mb-8">
                                    <div>
                                        <div className="flex justify-between mb-2 font-bold">
                                            <span>CarpacSoft®</span>
                                            <span>97%</span>
                                        </div>
                                        <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[97%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2 font-bold text-slate-400 text-white">
                                            <span>DOORS® NEXT®</span>
                                            <span>13%</span>
                                        </div>
                                        <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-[13%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <Button className="bg-transparent border border-white hover:bg-white/10 rounded-full px-8 uppercase font-bold text-sm">
                                    GET THE G2 REPORT
                                </Button>
                            </AnimatedSection>
                            <AnimatedSection delay={200}>
                                <img
                                    src="https://www.jamasoftware.com/media/2025/10/Row-6-Competitors-greyed-but-IBM.png"
                                    alt="G2 Graph Comparison"
                                    className="w-full h-auto rounded-lg shadow-lg border border-slate-700"
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 4 */}
                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-700 mb-12 max-w-4xl mx-auto text-slate-800">
                                CarpacSoft Solves IBM Customer Frustration with Market Leading Integrations to Jira, Cameo, and other Top Tools
                            </h2>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                            <AnimatedSection delay={100}>
                                <p className="text-blue-600 font-bold mb-2">CATIA Magic (Cameo) – CarpacSoft Integration Demo</p>
                                <VideoThumbnail
                                    title="CATIA System Modeling Apps"
                                    logo={<div className="text-4xl font-bold text-white mb-2">CATIA</div>}
                                />
                            </AnimatedSection>
                            <AnimatedSection delay={200}>
                                <p className="text-blue-600 font-bold mb-2">Jira – CarpacSoft Integration Demo</p>
                                <VideoThumbnail
                                    title="Integration Demo"
                                    logo={<div className="flex items-center justify-center gap-2 mb-2"><div className="bg-blue-500 w-8 h-8 rounded"></div><span className="text-2xl font-bold text-white">Jira</span></div>}
                                />
                            </AnimatedSection>
                        </div>
                        <AnimatedSection>
                            <p className="text-slate-500 text-sm">
                                In addition to Jira and Cameo, CarpacSoft enables Live Traceability across more best-of-breed tools than anyone else.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* KEY REASONS - Image 5 */}
                <section className="bg-sky-50 py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[#ea580c] mb-6">Key Reasons to Choose CarpacSoft Over DOORS Next:</h2>
                        </AnimatedSection>

                        <div className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto mb-12">
                            {[
                                { icon: Timer, color: "text-purple-600", title: "Fastest Time to Market/ ROI", points: ["Deploy in weeks, not months", "Pre-configured frameworks", "Intuitive user interface"] },
                                { icon: Users, color: "text-orange-500", title: "Highest Adoptability", points: ["Intuitive design with better UX", "Lowest learning curve", "Actionable visibility"] },
                                { icon: Lightbulb, color: "text-blue-500", title: "Maximum Collaboration", points: ["Designed for connecting remote teams", "Real-time communication", "Secure access"] },
                                { icon: Award, color: "text-green-500", title: "Lowest Total Cost of Ownership", points: ["Simple administration", "No need for custom scripting", "Scales easily with no cost for external"] },
                                { icon: Monitor, color: "text-yellow-500", title: "Built for the Modern Engineering Stack", points: ["CarpacSoft Traceable MBSE", "Integrates with market leading tools", "Open REST API"] },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="text-center px-2">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-sm mb-4 h-10 flex items-center justify-center">{item.title}</h3>
                                    <ul className="text-[10px] text-slate-600 space-y-2 text-left list-disc pl-4">
                                        {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                    </ul>
                                </AnimatedSection>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6 mb-20">
                            <Button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                DATASHEET
                            </Button>
                            <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                                GET STARTED
                            </Button>
                        </div>

                        {/* Dark Blue G2 Section */}
                        <AnimatedSection className="bg-[#05003B] rounded-xl p-12 text-center text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                            <h3 className="text-xl font-bold mb-8 text-white">Independent Software Reviews Rank CarpacSoft Above IBM® DOORS® Next</h3>
                            <div className="max-w-md mx-auto mb-8">
                                <div className="flex justify-center items-center gap-4 mb-2 text-xs">
                                    <span>CarpacSoft's</span>
                                    <div className="w-40 h-2 bg-blue-500 rounded-full"></div>
                                    <span>96%</span>
                                </div>
                                <div className="flex justify-center items-center gap-4 text-xs text-slate-400 text-white">
                                    <span>DOORS Next's</span>
                                    <div className="w-40 h-2 bg-slate-600 rounded-full overflow-hidden">
                                        <div className="bg-orange-500 w-1/4 h-full"></div>
                                    </div>
                                    <span>16%</span>
                                </div>
                            </div>
                            <Button className="bg-[#0f172a] text-blue-400 border border-slate-700 hover:bg-slate-800 rounded-full px-6 py-2 text-xs uppercase font-bold">
                                → READ THE FULL REPORT
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* TESTIMONIAL - Image 6 */}
                <section className="py-20 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-8">What CarpacSoft Customers Are Saying</h2>
                            <blockquote className="text-xl text-blue-600 italic font-medium max-w-4xl mx-auto mb-6">
                                "Before we used CarpacSoft, I rounded up people and collected everything in one place, it felt like everybody was pulling in their own direction, basically holding us in place. After we managed to collect everything in Jama, it felt like everyone was suddenly pulling in the same direction."
                            </blockquote>
                            <div className="mb-8">
                                <div className="font-bold text-slate-800">Marco Šustić</div>
                                <div className="text-slate-500 text-sm">Product Manager, Rimac</div>
                            </div>
                            <a
                                href="/resources/library"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#00c974] hover:bg-[#00a35c] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-lg">
                                    MORE CUSTOMER STORIES
                                </Button>
                            </a>

                        </AnimatedSection>
                    </div>
                </section>

                {/* COMPARISON TABLE - Image 7 */}
                <section className="bg-gradient-to-b from-[#001e4d] to-[#003366] py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">CarpacSoft is Consistently Ranked the Overall Leader for Requirements Management</h2>
                            <p className="text-blue-200 text-sm max-w-4xl mx-auto">
                                Considering choosing CarpacSoft over DOORS Next? CarpacSoft consistently stands above DOORS Next for requirements management tools in the G2 Grid® for overall satisfaction, performance, user experience, collaboration, review and approvals, implementation, usability, user adoption, and overall ROI. See how they compare below.
                            </p>
                        </AnimatedSection>

                        <div className="max-w-6xl mx-auto mb-20">
                            <ComparisonTable />
                        </div>

                        {/* Security Icons */}
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-bold mb-12 text-white">CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery</h2>
                            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                                <div className="flex flex-col items-center w-40">
                                    <ShieldCheck className="w-16 h-16 text-blue-400 mb-4" />
                                    <p className="text-xs">Suitably validated by TÜV SÜD for safety-related development</p>
                                </div>
                                <div className="flex flex-col items-center w-40">
                                    <Shield className="w-16 h-16 text-blue-600 mb-4" />
                                    <p className="text-xs">CarpacSoft® codes with OWASP best practices</p>
                                </div>
                                <div className="flex flex-col items-center w-40">
                                    <Server className="w-16 h-16 text-red-500 mb-4" />
                                    <p className="text-xs">CarpacSoft is SOC2 Type 2 certified</p>
                                </div>
                                <div className="flex flex-col items-center w-40">
                                    <Lock className="w-16 h-16 text-slate-400 mb-4" />
                                    <p className="text-xs">Ensures strong privacy management practices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOOK A DEMO - Image 8 */}
                <div className="bg-[#465584]">
                    <DemoForm />

                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default IBMDoorsNext;



