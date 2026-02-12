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
    ChevronRight,
    Plane,
    Rocket,
    Ship,
    ShieldAlert,
    BarChart,
    FileCheck,
    Globe,
    Users,
    Database,
    RefreshCw,
    Play
} from "lucide-react";

// Sidebar Navigation Component - Image 5 Style
const SidebarNav = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Requirements Management",
        "Traceability",
        "Reports",
        "CarpacSoft Interchange for ReqIF",
        "Reviews & Approvals",
        "Verification & Validation"
    ];

    return (
        <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`p-4 cursor-pointer flex justify-between items-center text-xs font-bold border-b border-slate-100 last:border-none transition-colors duration-300
                            ${active === item ? 'bg-[#00a3cc] text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                        onClick={() => setActive(item)}
                    >
                        <span>{item}</span>
                        <ChevronRight size={16} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Content Area for Features - Image 5 Style
const FeatureDisplay = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{active}</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
                Requirements Management in CarpacSoft provides a data-driven requirements architecture for your digital engineering environment, speeding the systems development process, strengthening alignment, and ensuring quality and compliance. Create, derive, review, validate, and verify aerospace requirements with a single source of truth. Configuration management is automated with immutable audit trails and change management is built in and designed for a streamlined workflow.
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                {/* Mockup for Software UI - Detailed replication */}
                <div className="absolute inset-0 p-2 font-xs">
                    <div className="flex h-full">
                        <div className="w-1/5 border-r border-slate-200 p-2 bg-slate-100/50">
                            <div className="h-2 bg-slate-300 w-3/4 mb-2 rounded"></div>
                            <div className="space-y-2">
                                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-2 bg-slate-200 w-full rounded"></div>)}
                            </div>
                        </div>
                        <div className="w-4/5 p-4 relative">
                            {/* Header Row */}
                            <div className="flex gap-2 mb-4">
                                <div className="h-6 bg-slate-200 w-1/4 rounded"></div>
                                <div className="h-6 bg-slate-200 w-1/4 rounded"></div>
                                <div className="h-6 bg-slate-200 w-1/4 rounded"></div>
                                <div className="h-6 bg-slate-200 w-1/4 rounded"></div>
                            </div>
                            {/* Data Rows */}
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex gap-2 items-center border-b border-slate-100 pb-2">
                                        <div className="w-4 h-4 rounded bg-green-100 border border-green-300"></div>
                                        <div className="h-3 bg-slate-100 w-full rounded"></div>
                                    </div>
                                ))}
                            </div>
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-[#001e4d]/80 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                    <Play className="text-white fill-white ml-1" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                <li>Support complex requirements hierarchies and flowdowns</li>
                <li>Import data from static documents or legacy tools</li>
                <li>Have a single source of truth for clear visibility throughout the development process</li>
                <li>Iterate in real time for informed decision making and consensus</li>
                <li>Support agile and industry specified development methodologies</li>
                <li>Reuse validated requirements to quickly replicate features across systems</li>
            </ul>
        </div>
    );
};


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

const DevSecOpsLoop = () => (
    <svg viewBox="0 0 300 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00a3cc" />
                <stop offset="100%" stopColor="#001e4d" />
            </linearGradient>
        </defs>
        <path d="M75 75 C 75 35, 130 35, 150 75 C 170 115, 225 115, 225 75 C 225 35, 170 35, 150 75 C 130 115, 75 115, 75 75 Z" stroke="url(#loopGrad)" strokeWidth="8" strokeLinecap="round" />

        <circle cx="75" cy="75" r="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="225" cy="75" r="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />

        <text x="75" y="81" textAnchor="middle" fontSize="16" fill="#001e4d" fontWeight="bold">DEV</text>
        <text x="225" y="81" textAnchor="middle" fontSize="16" fill="#001e4d" fontWeight="bold">OPS</text>

        <circle cx="150" cy="75" r="20" fill="#e11d48" />
        <text x="150" y="79" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">SEC</text>

        {/* Orbiting particles */}
        <circle r="4" fill="#00a3cc">
            <animateMotion dur="4s" repeatCount="indefinite" path="M75 75 C 75 35, 130 35, 150 75 C 170 115, 225 115, 225 75 C 225 35, 170 35, 150 75 C 130 115, 75 115, 75 75 Z" />
        </circle>
    </svg>
);

const AerospaceDefense = () => {
    const [activeFeature, setActiveFeature] = useState("Requirements Management");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Image Overlay - Space/Satellite theme */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00102a] via-[#001e4d] to-[#003366] opacity-90"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                We Enable Digital Engineering for Innovative Organizations in Aerospace and Defense
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                The future of aerospace and defense relies on agile and transformative digital engineering techniques. We help our customers solve their toughest challenges and simplify complex mission-critical system development across complex partner and supplier ecosystems.
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

                {/* DIGITAL THREAD - Image 2 Top */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/2 text-right pr-8">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                CIMdata Survey Shows the #1 Digital Thread Objective is Live Requirements Traceability Across Engineering Disciplines
                            </h2>
                            <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                                After-the-fact reporting is failing to deliver Digital Thread results. Only CarpacSoft delivers a live and measurable Digital Thread across best-of-breed tools with proven improvement to the product development process.
                            </p>
                            <Button className="bg-white border border-[#0ea5e9] text-[#0ea5e9] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-xs font-bold tracking-wide">
                                GET THE EBOOK
                            </Button>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="CIMdata Report" className="rounded-lg shadow-xl" />
                        </AnimatedSection>
                    </div>
                </section>

                {/* DEVSECOPS - Image 2 Bottom */}
                <section className="bg-sky-50 py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-5xl mx-auto mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                CarpacSoft is the Only Requirements Management Software with a Robust REST API and Live Traceability™ to Enable DevSecOps
                            </h2>
                        </AnimatedSection>

                        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                            <AnimatedSection className="w-full lg:w-3/5">
                                {/* Infinity Loop Diagram Placeholder - Simplified representation */}
                                <div className="relative aspect-video bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden p-8 flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>
                                    <DevSecOpsLoop />
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={200} className="w-full lg:w-2/5 text-left">
                                <p className="text-xs text-slate-700 mb-6 font-bold">
                                    Leading DoD contractors are relying on CarpacSoft as the cornerstone of their DevSecOps strategy for two main reasons:
                                </p>
                                <ul className="text-xs text-slate-600 space-y-4 mb-8">
                                    <li className="flex gap-2">
                                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                        <span><strong className="text-orange-600">Only CarpacSoft</strong> provides a robust, REST API to align with an integrated CI/CD pipeline of Jira, Azure DevOps, Git, GitLab, Subversion, Jenkins, Splunk, Kubernetes, Visual Studio, Coverity, etc.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                        <span><strong className="text-orange-600">Only CarpacSoft</strong> provides a Live Traceability model to connect all DevSecOps activity to the singular common element that defines value across all steps in the process — the requirement.</span>
                                    </li>
                                </ul>
                                <p className="text-[10px] text-slate-500 italic">
                                    "CarpacSoft's API enables us to connect every single piece of the puzzle across the DevSecOps pipeline." — Top 10 Aerospace & Defense Company
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 3 Top */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="flex flex-col md:flex-row items-center gap-8 mb-16">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-video bg-[#001e4d] rounded-lg flex items-center justify-center relative group cursor-pointer shadow-xl">
                                    <Play size={48} className="text-white fill-white relative z-10 group-hover:scale-110 transition-transform" />
                                    <div className="absolute bottom-4 left-4 text-white font-bold text-sm">CATIA System Modeling Apps</div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-xl font-bold text-[#001e4d] mb-4">Dassault Catia Magic (Cameo) Syncs SysML Diagrams and Data ONLY to CarpacSoft</h3>
                                <p className="text-xs text-slate-600 mb-6 font-medium leading-relaxed">
                                    SysML diagrams and MBSE data can be synched into CarpacSoft, to view trace, baseline, version, audit and review across all engineering disciplines. MBSE efforts are no longer isolated, but fully integrated into the development process, ensuring alignment across engineering disciplines.
                                </p>
                                <div className="space-y-2 mb-6 text-xs text-slate-600">
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>Visualization of the sliced system model and the status of its artifacts in the development lifecycle</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>System and behavioral diagrams</div>
                                    <div className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>Faster requirements development, decomposition, and live tracing</div>
                                </div>
                                <div className="flex gap-4">
                                    <Button className="bg-[#0077c8] hover:bg-blue-700 text-white rounded-full px-6 py-2 text-[10px] font-bold uppercase">SOLUTION OVERVIEW</Button>
                                    <Button className="bg-white border border-[#0077c8] text-[#0077c8] hover:bg-sky-50 rounded-full px-6 py-2 text-[10px] font-bold uppercase">WHITEPAPER</Button>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200} className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-2/3 md:order-2">
                                {/* DNG Flavor ReqlF */}
                                <h3 className="text-xl font-bold text-[#001e4d] mb-4">For DoD Programs that Mandate DOORS or DNG, You Can Now Use CarpacSoft to Export the DOORS or DNG Flavor of ReqIF</h3>
                                <p className="text-xs text-slate-600 mb-6 font-medium leading-relaxed">
                                    Digital Engineering progress has been blocked by DoD programs mandating DOORS/DNG. Only CarpacSoft can import and export all top vendor flavors of ReqIF, freeing you to achieve Digital Engineering.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 md:order-1">
                                <img src="https://cdn.dribbble.com/users/1615584/screenshots/15710523/media/4c034907722830366033481085002497.jpg?resize=400x300&vertical=center" alt="Interface" className="rounded-lg shadow-lg" />
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* DOMAIN ICONS - Image 3 Middle */}
                <section className="bg-[#00102a] py-16 text-center text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center gap-12 mb-8">
                            <Plane size={48} strokeWidth={1} className="text-white" />
                            <Rocket size={48} strokeWidth={1} className="text-white" />
                            <Ship size={48} strokeWidth={1} className="text-white" />
                            <ShieldAlert size={48} strokeWidth={1} className="text-white" />
                        </div>
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-4 text-white">CarpacSoft for Air, Space, Sea, and Defense Programs</h2>
                            <p className="text-xs text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                                Innovative organizations building the A&D systems of the future use CarpacSoft aerospace and defense software to modernize their digital engineering practice to enhance stakeholder collaboration and ensure a shared vision across the development lifecycle. CarpacSoft's requirements management creates a digital thread for systems engineering, ensuring mission success.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button className="bg-[#001e4d] border border-white hover:bg-blue-900 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-widest">
                                    GET DATASHEET
                                </Button>
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-widest border-none">
                                    WATCH DEMO →
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* AVIATION STANDARDS - Image 4 Bottom Section */}
                <section className="bg-sky-50 py-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3 flex justify-center">
                            {/* Rocket Animation Graphic */}
                            <div className="relative">
                                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center relative z-10 shadow-2xl">
                                    <Rocket size={100} className="text-orange-500 fill-orange-500 transform -rotate-45" />
                                </div>
                                <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 -z-0 animate-pulse"></div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-2xl font-bold text-slate-700 mb-6">
                                Transform Your Aviation Development to Stay Aligned with Standards and Regulations
                            </h2>
                            <p className="text-xs text-slate-600 mb-6 leading-relaxed font-bold">
                                Our out-of-the-box aviation requirements management solution supports key design, safety, and security regulations for airborne systems hardware and software development and is designed for rapid deployment.
                            </p>
                            <ul className="text-[10px] text-slate-600 space-y-2 mb-8 columns-1">
                                <li>• NEW ARP4754B - the primary standard for airborne systems and equipment safety development</li>
                                <li>• NEW DO-326A - the primary standard for airworthiness security development</li>
                                <li>• ARP4754A/DO-29 - certification considerations for highly-integrated or complex aircraft systems</li>
                                <li>• DO-178C/ED-12C - the primary standard for commercial avionics software development</li>
                                <li>• DO-254/ED-80 - the primary standard for commercial avionics hardware development</li>
                                <li className="italic mt-2">Download the full solution overview to see how CarpacSoft for Airborne Systems helps teams increase confidence, decrease time to value, reduce deployment time, accelerate adoption, and reduce the impact of change.</li>
                            </ul>
                            <div className="flex gap-4">
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    SOLUTION OVERVIEW
                                </Button>
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    WEBINAR
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* QUOTES - Image 5 Top */}
                <section className="bg-white py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl font-bold text-[#001e4d] mb-12">
                            CarpacSoft supports <span className="text-blue-500">5 of the top 10</span> aerospace companies world-wide and <span className="text-blue-500">8 of the top 10</span> space launch companies.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
                            <div className="p-6">
                                <p className="text-orange-500 text-xs italic font-semibold mb-4">
                                    "The Jet Propulsion Laboratory recently made the decision to migrate from DNG to Jama [Connect] as the institutionally supported requirements management database."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] font-bold text-slate-800">JPL Paper</div>
                                    <div className="text-[9px] text-slate-500">45th IEEE Aerospace Conference</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-orange-500 text-xs italic font-semibold mb-4">
                                    "A document-centric approach often requires a gatekeeper and usually limits collaboration — that creates a bottleneck. With CarpacSoft, all our development teams can work together from anywhere with a shared collaboration hub."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] font-bold text-slate-800">David Cabbage</div>
                                    <div className="text-[9px] text-slate-500">Director, LEO Satellite Engineering and Production</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-orange-500 text-xs italic font-semibold mb-4">
                                    "Review Center is facilitating communication. It has ensured a shared view of the world and agreement from all stakeholders. There are no surprises anymore. CarpacSoft enables us to review documents and make decisions easily with everyone coming to a shared conclusion."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] font-bold text-slate-800">Craig Gentry</div>
                                    <div className="text-[9px] text-slate-500">Head of Systems Engineering, Teledyne e2v</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-orange-500 text-xs italic font-semibold mb-4">
                                    "We completed an entire design review in three weeks. Without CarpacSoft, it would have taken us two months. If we had done this using Word and Excel, or purely in meetings, this would have taken significantly longer. This was a major early win for us."
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] font-bold text-slate-800">Jackie Banning</div>
                                    <div className="text-[9px] text-slate-500">Systems Engineer at REGENT</div>
                                </div>
                            </div>
                        </div>

                        {/* Logos Strip */}
                        <div className="flex flex-wrap justify-center items-center gap-12 mt-12 grayscale opacity-70">
                            <span className="font-bold text-xl text-slate-400">BOEING</span>
                            <span className="font-bold text-xl text-slate-400">BAE SYSTEMS</span>
                            <span className="font-bold text-xl text-slate-400">leidos</span>
                            <span className="font-bold text-xl text-slate-400">SES</span>
                            <span className="font-bold text-xl text-slate-400">EUTELSAT GROUP</span>
                            <span className="font-bold text-xl text-slate-400">AEROSPACE</span>
                            <span className="font-bold text-xl text-slate-400">GENERAL DYNAMICS</span>
                        </div>

                        <Button className="mt-12 bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            MEET OUR CUSTOMERS
                        </Button>
                    </div>
                </section>

                {/* INTERACTIVE FEATURES - Image 5 Bottom */}
                <section className="bg-sky-100/50 py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-slate-700">Features to Ensure Product Quality and Meet Safety-Critical Standards</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-xs font-bold text-slate-700 mb-4">We can facilitate your purchase through our partnership with Carahsoft</p>
                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </section>

                {/* KEY BENEFITS - Image 6 */}
                <section className="bg-[#00102a] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Benefits</h2>
                            <p className="text-xs text-slate-300 max-w-3xl mx-auto mb-16">
                                In the increasingly complex, competitive, and rapidly evolving aerospace and defense industries, market forces are creating new challenges for systems engineering teams. CarpacSoft is designed to help teams:
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Reduce risk and barriers to compliance with simplified audit or certification preparation",
                                    icon: <BarChart size={48} className="text-yellow-400 mb-4" />
                                },
                                {
                                    title: "Inform decision making with increased system design understanding and visibility across the engineering process",
                                    icon: <Database size={48} className="text-blue-400 mb-4" />
                                },
                                {
                                    title: "Facilitate effective communication, collaboration, and alignment",
                                    icon: <Users size={48} className="text-teal-400 mb-4" />
                                },
                                {
                                    title: "Simplify documentation and reports preparation",
                                    icon: <FileCheck size={48} className="text-green-400 mb-4" />
                                },
                                {
                                    title: "Satisfy the goal of building mission- and safety-critical products with accelerated speed to market",
                                    icon: <Rocket size={48} className="text-orange-400 mb-4" />
                                },
                                {
                                    title: "Improve alignment between government and contractor",
                                    icon: <Globe size={48} className="text-purple-400 mb-4" />
                                },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    {item.icon}
                                    <p className="text-[11px] font-bold leading-relaxed max-w-[220px]">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 6 Bottom */}
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

                        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 max-w-7xl mx-auto mb-16">
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
                                    <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* ITAR & GovCloud Badges */}
                        <div className="bg-[#00102a] text-white py-12 rounded-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-8">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-4">
                                    <span className="font-bold text-xl">ITAR</span>
                                </div>
                                <span className="font-bold text-xs uppercase max-w-[150px]">International Traffic in Arms Regulations (ITAR)</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-4">
                                    {/* Emblem placeholder */}
                                    <div className="text-center leading-none text-[8px]">Export<br />Admin<br />Reqs</div>
                                </div>
                                <span className="font-bold text-xs uppercase max-w-[150px]">Export Administration Requirements (EAR)</span>
                            </div>
                            <div className="md:w-1/2 text-left">
                                <h3 className="font-bold text-lg mb-4 text-white">Amazon Web Services (AWS) (US) GovCloud Availability</h3>
                                <p className="text-[10px] leading-relaxed text-slate-300">
                                    We run CarpacSoft on Amazon's GovCloud, designed to host sensitive data, regulated workloads, and address the most stringent U.S. government security and compliance requirements.
                                </p>
                            </div>
                        </div>

                        {/* Realize Benefits - Image 6 Bottom Left */}
                        <div className="mt-16 bg-sky-50 rounded-xl p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 text-left">
                            <div className="w-full md:w-1/3">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" alt="MBSE Guide" className="rounded shadow-xl w-full" />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-lg font-bold text-slate-700 mb-4">Realize the Benefits of MBSE without a Complex SysML Tool</h3>
                                <p className="text-xs text-slate-600 mb-4">
                                    Learn how CarpacSoft Traceable MBSE™ solution provides a path to companies embracing MBSE where the application of collaboration, modeling, and methods reduces time and effort across the product development lifecycle.
                                </p>
                                <ul className="text-[10px] text-slate-600 space-y-2 mb-6 list-dash pl-2">
                                    <li>- Designing system architecture models enables early visualization and simulation, improving stakeholder buy-in and customer satisfaction.</li>
                                    <li>- Enables collaborative, iterative design and maintenance of complex systems.</li>
                                    <li>- Build MBSE organizational maturity with ready-to-use framework and options to connect to additional model tools.</li>
                                    <li>- Creates a trusted and relational model across your requirements, architecture, and Verification & Validation data...</li>
                                </ul>
                                <div className="flex gap-4">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                        SOLUTION OVERVIEW
                                    </Button>
                                    <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                        WHITE PAPER
                                    </Button>
                                </div>
                            </div>
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

export default AerospaceDefense;



