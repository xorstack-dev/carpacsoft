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
    ShieldCheck,
    Shield,
    Server,
    Lock,
    Rocket,
    Users,
    MessageSquare,
    Trophy,
    Layers,
    CheckCircle2
} from "lucide-react";

// G2 Graph Component (Reused/Adapted)
const G2Graph = () => {
    return (
        <div className="relative w-full max-w-md aspect-square bg-white p-4 grid grid-cols-2 grid-rows-2 gap-1 border border-slate-200">
            {/* Quadrant Labels */}
            <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-bold">Contenders</div>
            <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-bold">Leaders</div>
            <div className="absolute bottom-2 left-2 text-[10px] text-slate-400 font-bold">Niche</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 font-bold">High Performers</div>

            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-400"></div> {/* Center Horizontal */}
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-r border-b border-slate-100"></div>
                <div className="border-b border-slate-100"></div>
                <div className="border-r border-slate-100"></div>
                <div className="border-r border-slate-100"></div>
                <div className="border-r border-slate-100"></div>
            </div>

            {/* Center Crosshair override */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-slate-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-full w-px bg-slate-300"></div>
            </div>

            {/* CarpacSoft Data Point */}
            <div className="absolute top-[15%] right-[15%] flex flex-col items-center z-10 animate-bounce-slow">
                <img src="/jama-connect-logo-symbol.svg" alt="Jama" className="w-12 h-12 drop-shadow-lg" />
            </div>

            {/* Competitor Data Points (Abstract) */}
            <div className="absolute bottom-[40%] left-[40%] w-6 h-6 bg-gray-200 border border-gray-400 rounded-sm flex items-center justify-center text-[8px] text-gray-500 font-bold p-1">IBM</div>
            <div className="absolute top-[30%] left-[45%] w-6 h-6 bg-gray-200 border border-gray-400 rounded-sm"></div>
            <div className="absolute top-[40%] right-[40%] w-8 h-8 bg-green-100 border border-green-500 rounded-sm flex items-center justify-center text-[6px]">Siemens</div>
        </div>
    );
};

// Video Thumbnail Component
const VideoThumbnail = ({ title, sub, icon }: { title: string, sub: string, icon: React.ReactNode }) => (
    <div className="relative aspect-video bg-[#001e4d] rounded-lg overflow-hidden group cursor-pointer border border-slate-700 shadow-xl flex flex-col items-center justify-center text-center p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <p className="text-blue-200 text-sm mb-4">{sub}</p>
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <Play className="w-6 h-6 text-white ml-1 fill-white" />
        </div>
    </div>
);

// Custom Icons for Key Reasons
const KeyReasonIcon = ({ type }: { type: string }) => {
    return (
        <div className="h-20 mb-4 flex items-center justify-center">
            {type === 'market' && <Rocket size={48} className="text-purple-600" />}
            {type === 'adoptability' && <Users size={48} className="text-orange-500" />}
            {type === 'collaboration' && <MessageSquare size={48} className="text-blue-500" />}
            {type === 'tco' && <Trophy size={48} className="text-teal-500" />}
            {type === 'modern' && <Layers size={48} className="text-yellow-500" />}
        </div>
    );
};

const PolarionCompare = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#0055b8] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#0055b8] opacity-95"></div>
                    <div className="absolute right-0 top-0 h-full w-2/3 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

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
                                Discover Why Polarion Users Are Switching to CarpacSoft
                            </h1>

                            <p className="text-base text-blue-100 mb-10 max-w-2xl leading-relaxed text-white">
                                CarpacSoft offers a solution with superior integrations, faster deployment, and unmatched customer satisfaction, making it the top choice for requirements management and traceability.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/trial">
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none text-sm">
                                        GET STARTED
                                    </Button>
                                </Link>
                                <Link to="/company/contact">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wide border-none text-sm">
                                        BOOK A DEMO
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FRUSTRATIONS BANNER - Image 2 */}
                <section className="bg-gradient-to-r from-sky-100 to-blue-200 py-16 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <p className="text-slate-800 font-medium max-w-4xl mx-auto mb-8 text-lg">
                                Polarion's customers' most common frustrations are lack of adoption, inability to manage traceability, failure to bring reviews online, system complexity and failed integrations with Jira and Cameo.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-[#2e3b5e] hover:bg-[#1e2b4e] text-white rounded-full px-6 py-2 uppercase text-xs font-bold tracking-wider">
                                    FORD PRESENTATION
                                </Button>
                                <Button className="bg-[#2e3b5e] hover:bg-[#1e2b4e] text-white rounded-full px-6 py-2 uppercase text-xs font-bold tracking-wider">
                                    MONOGRAM STORY
                                </Button>
                                <Button className="bg-[#2e3b5e] hover:bg-[#1e2b4e] text-white rounded-full px-6 py-2 uppercase text-xs font-bold tracking-wider">
                                    PARRY LABS STORY
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* G2 SATISFACTION - Image 3 */}
                <section className="bg-[#001e4d] py-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <AnimatedSection className="w-full lg:w-1/2">
                                <h2 className="text-3xl font-bold mb-4 text-white">
                                    CarpacSoft is at the Top in Customer Satisfaction, Polarion is Near the Bottom
                                </h2>
                                <p className="text-blue-200 text-xs mb-12">
                                    Before you decide, learn from the experience of CarpacSoft and Polarion customers.
                                </p>

                                <h3 className="text-xl font-bold mb-6 text-white">G2 Customer Satisfaction</h3>

                                {/* Bars */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-2 font-bold">
                                        <span>CarpacSoft®</span>
                                        <span>99%</span>
                                    </div>
                                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#00a3cc] w-[99%]"></div>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <div className="flex justify-between text-sm mb-2 font-bold">
                                        <span>Polarion</span>
                                        <span>87%</span>
                                    </div>
                                    <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#5d8aa8] w-[87%]"></div>
                                    </div>
                                </div>

                                <Button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/10 uppercase text-xs font-bold px-6 py-3 rounded-sm">
                                    ➜ SEE WHY CarpacSoft IS THE INDUSTRY LEADER
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
                <section className="bg-sky-50 py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-12 max-w-4xl mx-auto">
                                CarpacSoft Solves Polarion Customer Frustration with Market Leading Integrations to Jira, Cameo, and other Top Tools
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                                <VideoThumbnail
                                    title="CATIA"
                                    sub="System Modeling Apps"
                                    icon={<span className="text-4xl">📐</span>}
                                />
                                <VideoThumbnail
                                    title="Jira"
                                    sub="Integration Demo"
                                    icon={<span className="text-blue-500 font-bold text-4xl">Jira</span>}
                                />
                            </div>

                            <p className="text-slate-600 text-sm mb-8 font-medium">
                                In addition to Jira and Cameo, CarpacSoft enables Live Traceability across more best-of-breed tools than anyone else.
                            </p>

                            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Logos represented by text for now as placeholders are safer without specific assets */}
                                <div className="font-bold text-slate-400 text-xl">Ansys</div>
                                <div className="font-bold text-slate-400 text-xl">Azure DevOps</div>
                                <div className="font-bold text-slate-400 text-xl">Teamcenter</div>
                                <div className="font-bold text-slate-400 text-xl">TestRail</div>
                                <div className="font-bold text-slate-400 text-xl">XRAY</div>
                                <div className="font-bold text-slate-400 text-xl">Windchill</div>
                                <div className="font-bold text-slate-400 text-xl">LDRA</div>
                                <div className="font-bold text-slate-400 text-xl">Aras</div>
                                <div className="font-bold text-slate-400 text-xl">Tricentis qTest</div>
                                <div className="font-bold text-slate-400 text-xl">git</div>
                                <div className="font-bold text-slate-400 text-xl">No Magic</div>
                                <div className="font-bold text-slate-400 text-xl">MathWorks</div>
                                <div className="font-bold text-slate-400 text-xl">Vector</div>
                                <div className="font-bold text-slate-400 text-xl">Enterprise Architect</div>
                            </div>

                            <div className="mt-12">
                                <Button className="bg-[#000033] hover:bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                                    LEARN MORE
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* KEY REASONS - Image 5 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-[#0052CC] mb-16">Key Reasons to Choose CarpacSoft Over Polarion:</h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto mb-16">
                            {[
                                {
                                    type: 'market',
                                    title: "Fastest Time to Market/ ROI",
                                    points: [
                                        "Deploy in weeks, not months, with easy updates and high performance",
                                        "Pre-configured frameworks to satisfy industry regulations",
                                        "Intuitive user interface and workflows that drive efficiency",
                                        "CarpacSoft® in-house industry-focused subject matter experts"
                                    ]
                                },
                                {
                                    type: 'adoptability',
                                    title: "Highest Adoptability",
                                    points: [
                                        "Intuitive design with a better user experience and ease of use that enables adoptability across teams and disciplines",
                                        "Lowest learning curve, minimal training required",
                                        "Actionable visibility into status, progress, and risks",
                                        "Role-based permissions-controlled access for your entire organization",
                                        "Ranked #1 in customer satisfaction"
                                    ]
                                },
                                {
                                    type: 'collaboration',
                                    title: "Maximum Collaboration",
                                    points: [
                                        "Designed for connecting remote / distributed development teams and disciplines",
                                        "Real-time communication captured in context",
                                        "Secure access for internal and external stakeholders",
                                        "Delivers end-to-end Live Traceability",
                                        "Improves productivity"
                                    ]
                                },
                                {
                                    type: 'tco',
                                    title: "Lowest Total Cost of Ownership",
                                    points: [
                                        "Simple and straightforward administration",
                                        "No need for custom scripting or continuous updating",
                                        "Scales easily without big infrastructure investment",
                                        "Unlimited no-cost access for extended internal/external stakeholders"
                                    ]
                                },
                                {
                                    type: 'modern',
                                    title: "Built for the Modern Engineering Stack",
                                    points: [
                                        "CarpacSoft scores above Polarion for core activities of requirements management and traceability",
                                        "Integrate with market-leading tools through CarpacSoft's open REST API",
                                        "Teams can work in preferred tools with complete traceability"
                                    ]
                                },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="px-2">
                                    <KeyReasonIcon type={item.type} />
                                    <h3 className="font-bold text-slate-700 text-lg mb-4 h-12 flex items-center justify-center">{item.title}</h3>
                                    <ul className="text-[10px] text-slate-600 space-y-4 text-center leading-tight">
                                        {item.points.map((pt, j) => (
                                            <li key={j} className="flex justify-center flex-col items-center">
                                                <div className="w-1 h-1 bg-slate-400 rounded-full mb-1"></div>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            ))}
                        </div>

                        <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md">
                            GET STARTED
                        </Button>
                    </div>
                </section>

                {/* DECIDING CHECKLIST - Image 6 */}
                <section className="bg-sky-50 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <AnimatedSection className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-[#000033] mb-6">Deciding Between CarpacSoft and Polarion?</h2>
                            <p className="text-xs text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                                CarpacSoft is continuously investing in product enhancements and improvements to meet our customer's needs. Requirements traceability across the entire systems development lifecycle is a core tenant of the systems engineering discipline and underpins industry standards to ensure higher quality, faster cycle times, and less costly rework. In the platform, teams can:
                            </p>

                            <div className="space-y-6 text-left max-w-4xl mx-auto mb-12">
                                {[
                                    "Manage the V-Model through data in real time with our proprietary Live Traceability™ Model",
                                    "Optimize reviews with CarpacSoft's Review Center which enables efficient real-time management of review cycles, deadlines, version control, and actionable comments",
                                    "Experience superior native integrations for Live Traceability with tools like No Magic/Cameo, Jira, Excel and many other best-of-breed tools",
                                    "Effectively manage product variants with CarpacSoft's easy-to-use variant management UX which includes categories, baselines, and version history"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="text-[#00C16E] shrink-0 mt-1" fill="currentColor" size={24} color="white" />
                                        <span className="text-slate-800 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] hover:bg-sky-50 font-bold py-3 px-8 rounded-full uppercase text-xs shadow-sm">
                                GET THE DATASHEET
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* TESTIMONIAL - Image 6 */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-8">What CarpacSoft Customers Are Saying</h2>
                            <div className="max-w-4xl mx-auto mb-8">
                                <p className="text-[#0052CC] font-medium text-lg italic leading-relaxed mb-6">
                                    "Jama suited our need for collaboration and communication. Jama provides a very easy-to-use interface and communication system that brought the buy-in from all stakeholders. Visure, IBM DOORS, TTA didn't perform as well in the communication/collaboration department where we really needed a boost."
                                </p>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="font-bold text-slate-800 text-sm">Össur Logo</div> {/* Placeholder for Ossur Logo */}
                                    <div className="text-xs text-slate-500 font-bold mt-2">Guillaume Julien</div>
                                    <div className="text-xs text-slate-400">Program Manager, Össur</div>
                                </div>
                            </div>
                            <a href="/resources/library" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white font-bold py-3 px-8 rounded-full uppercase text-xs shadow-md">
                                    MORE CUSTOMER STORIES
                                </Button>
                            </a>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 6 Bottom */}
                <section className="py-24 bg-white text-center border-t border-slate-100">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-sm max-w-5xl mx-auto mb-16 font-medium">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-[#003399]" },
                                { icon: Shield, title: "CarpacSoft® codes with OWASP best practices", color: "text-[#0077c8]" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-[#be123c]" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#334155]" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-24 h-24 mb-6 flex items-center justify-center relative border-slate-100 border-2 rounded-xl">
                                        <item.icon size={56} className={item.color} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-700 max-w-[200px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-12 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-[#0ea5e9] text-white font-bold px-3 py-1 text-2xl tracking-widest mb-4">TLS</div>
                                <p className="text-xs font-bold text-slate-700 max-w-[250px]">
                                    Transport Layer Security (TLS) ensures data transferred is secured and encrypted
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BOOK A DEMO - Image 6 */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />

                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default PolarionCompare;



