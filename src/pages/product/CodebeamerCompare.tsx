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
    FileCheck
} from "lucide-react";

// Video Thumbnail Component
const VideoThumbnail = ({ title, sub, icon, align = "left" }: { title: string, sub: string, icon: React.ReactNode, align?: "left" | "right" }) => (
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

// Custom Icons for Key Reasons (Reused but defined locally for portability)
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

// Comparison Table Component
const DetailedComparisonTable = () => {
    const rows = [
        {
            focus: "Flexibility & Ease of Use",
            cap: "Author and manage requirements across teams and versions.",
            jama: "CarpacSoft has a more system-centric approach for requirements management than a software-centric one that creates gaps in genetic architecture needs. CarpacSoft allows flexibility in setting up the project structure to match the teams needs and to achieve better tool adoption.",
            code: "Because Codebeamer was originally designed for software teams to manage task work, the requirements management capability does not fit complex tools. Project structure in Codebeamer cannot be easily configured. Codebeamer sits centered mostly on Software teams and not for holistic system development."
        },
        {
            focus: "Measured Process Improvement",
            cap: "Measure and improve development success with Live Trace™ scores and benchmarking.",
            jama: "With Live Traceability and Live Trace Score™ in CarpacSoft, organizations can measure and optimize their development processes, improve product quality, and accelerate time to market. CarpacSoft® is the only vendor that provides engineering performance benchmarks - live and large scale, empirical research to ensure that higher levels of traceability correlate to cycle time and quality improvement.",
            code: "Does not exist."
        },
        {
            focus: "Requirements Reviews",
            cap: "Capture and manage user comments through a review sequence, in real time.",
            jama: "CarpacSoft provides far superior review capabilities with granular control for reviews within the tool, capturing feedback inline from all stakeholders.",
            code: "Codebeamer has a review setup wizard and stage review cycle, but a non-intuitive approach and limited capabilities for initiating, managing, delegating, and including/excluding items for reviews."
        },
        {
            focus: "Traceability Model",
            cap: "Allows the user to view a traceability matrix which shows the relationships between the various elements within the project.",
            jama: "CarpacSoft's traceability model with the relationship diagram is paramount to implementing Live Traceability and measuring the effectiveness of systems development. In CarpacSoft, it’s easy to configure traceability relationship rules can be defined in a true, dedicated, and controlled way that is whole and centrally managed.",
            code: "The configuration of the traceability in Codebeamer is a complex journey that requires a very good tool knowledge and a competent admin/user across the different levels to be included in the traceability. There is no dedicated approach to managing the traceability configuration in a central spot and applying it to the relevant projects."
        },
        // ... (truncated for brevity, representing the full table structure)
        {
            focus: "In-House Professional Services",
            cap: "Leverage in-house expertise and support to help align your people, processes, and data and maximize the success of your product development process.",
            jama: "The CarpacSoft Success Program — powered by in-house industry experts - helps our customers achieve faster implementation time and therefore, quicker time-to-value. Our success program focuses on customer's desired outcomes and process improvement.",
            code: "Outsourced professional services with the only focus on deploying the software and then moving on."
        },
    ];

    return (
        <div className="w-full bg-white text-xs border border-slate-200">
            <div className="grid grid-cols-12 bg-[#001e4d] text-white font-bold text-center border-b border-white">
                <div className="col-span-2 p-4 flex items-center justify-center uppercase">Areas of Focus</div>
                <div className="col-span-2 p-4 flex items-center justify-center uppercase">Key Capability Description to Compare</div>
                <div className="col-span-4 p-4 flex items-center justify-center bg-[#0055b8]">CarpacSoft</div>
                <div className="col-span-4 p-4 flex items-center justify-center bg-[#001e4d]">Codebeamer</div>
            </div>
            {rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-12 border-b border-slate-200 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <div className="col-span-2 p-4 font-bold text-[#001e4d] uppercase border-r border-slate-200">{row.focus}</div>
                    <div className="col-span-2 p-4 text-slate-600 border-r border-slate-200">{row.cap}</div>
                    <div className="col-span-4 p-4 text-slate-700 border-r border-slate-200 leading-relaxed font-medium">{row.jama}</div>
                    <div className="col-span-4 p-4 text-slate-600 leading-relaxed">{row.code}</div>
                </div>
            ))}
        </div>
    );
};

const CodebeamerCompare = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#1e4b6e] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#123048] to-[#25608a] opacity-95"></div>
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
                                Companies Choose CarpacSoft Over Codebeamer
                            </h1>

                            <p className="text-base text-blue-100 mb-10 max-w-2xl leading-relaxed">
                                CarpacSoft was designed to complement Jira and Azure DevOps to make agile traceable. Codebeamer overlaps and conflicts with Jira and ADO.
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

                {/* MIGRATION WARNING - Image 2 */}
                <section className="bg-[#021021] py-16 text-center text-white">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-5xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6 text-white text-shadow">
                                There is No Direct Upgrade from Integrity/RV&S to Codebeamer. Migrate to the Right Solution, CarpacSoft.
                            </h2>
                            <p className="text-xs text-slate-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                                Faced with the end of support and considering options, PTC Integrity/RV&S users need to know that a migration process is always necessary regardless of which tools are involved. There is no special advantage in moving to Codebeamer from PTC Integrity/RV&S because these tools were designed with different technical approaches to systems engineering and data storage. Accepting the unavoidable need for data migration, it’s more important to focus on selecting the right tool. CarpacSoft® is a modern requirements management alternative to PTC Integrity/RV&S. Our expert in-house staff uses a proven repeatable migration methodology to work directly with customers to adapt CarpacSoft to fit their product, systems, and software development process, identify and migrate required data, and train teams to rapidly adopt CarpacSoft.
                            </p>
                            <Button className="bg-[#001e4d] border border-blue-400 hover:bg-blue-900 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-wider">
                                LEARN MORE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* VIDEOS - Image 3 */}
                <section className="bg-white py-0">
                    {/* Section 1: Jira Conflict */}
                    <div className="container mx-auto px-4 py-16">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <AnimatedSection className="w-full lg:w-5/12">
                                <VideoThumbnail
                                    title="Jira"
                                    sub="Integration Demo"
                                    icon={<span className="text-blue-500 font-bold text-4xl">Jira</span>}
                                />
                            </AnimatedSection>
                            <AnimatedSection delay={200} className="w-full lg:w-7/12">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                    Codebeamer Conflicts with Jira, CarpacSoft Complements it.
                                </h2>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    Codebeamer has overlapping and conflicting functionality to Jira and Azure DevOps with a wiki, kanban board, version control, IDE commits, pull requests, etc. These conflicts make an integrated solution a challenge for engineers. CarpacSoft was designed to work with Jira and Azure DevOps to deliver Traceable Agile™.
                                </p>
                                <Button className="bg-[#000033] hover:bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                                    WATCH VIDEO
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>

                    {/* Section 2: Dassault/EA Integration - Darker Background */}
                    <div className="bg-[#246c8c] py-16 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f66] to-[#2a7d9e] opacity-90"></div>
                        {/* Checkered pattern overlay */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <AnimatedSection className="w-full lg:w-5/12">
                                    <VideoThumbnail
                                        title="CATIA"
                                        sub="CarpacSoft® Integration"
                                        icon={<span className="text-white font-bold text-4xl">CATIA</span>}
                                    />
                                </AnimatedSection>
                                <AnimatedSection delay={200} className="w-full lg:w-7/12">
                                    <h2 className="text-2xl font-bold text-white mb-4">
                                        Dassault Systèmes' CATIA No Magic and Sparx Systems' EA Offer Direct Integrations to CarpacSoft, but not to Codebeamer.
                                    </h2>
                                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                        Integrations to model-based systems engineering (MBSE) tools are critical to establishing Live Traceability™ across the development process. Dassault CATIA No Magic through Cameo DataHub and Sparx Enterprise Architect have both developed the most advanced productized integrations to CarpacSoft and do not offer any direct integrations to Codebeamer.
                                    </p>
                                    <Button className="bg-[#000033] hover:bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-400">
                                        WATCH VIDEO
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KEY REASONS - Image 4 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-[#0052CC] mb-16">Key Reasons to Choose CarpacSoft Over Codebeamer</h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto mb-16">
                            {[
                                {
                                    type: 'market',
                                    title: "Fastest Time to Market/ROI",
                                    points: [
                                        "Deploy in weeks, not months, with easy updates and high performance",
                                        "Pre-configured frameworks to satisfy industry regulations",
                                        "Intuitive user interface and workflows that drive efficiency",
                                        "CarpacSoft® in-house industry-focused subject matter experts and exceptional customer support"
                                    ]
                                },
                                {
                                    type: 'adoptability',
                                    title: "Highest Adoptability",
                                    points: [
                                        "Intuitive design with a better user experience (UX) and ease of use that enables adoptability across teams and disciplines",
                                        "Lowest learning curve, with minimal training required",
                                        "Actionable visibility into status, progress, and risks",
                                        "Role-based permissions access for your entire organization"
                                    ]
                                },
                                {
                                    type: 'collaboration',
                                    title: "Maximum Communication & Collaboration",
                                    points: [
                                        "Designed for connecting remote / distributed development teams and disciplines",
                                        "Real-time communication captured in context to improve productivity",
                                        "Secure access for internal and external stakeholders",
                                        "Delivers end-to-end Live Traceability™",
                                        "Review Center streamlines review cycles across stakeholders"
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
                                    title: "Built for the Modern Engineering Development Tech Stack",
                                    points: [
                                        "CarpacSoft is the industry leader for requirements management and traceability activities",
                                        "Integrate with market-leading tools through CarpacSoft's open REST API",
                                        "Teams can work in preferred tools with complete traceability"
                                    ]
                                },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="px-2">
                                    <KeyReasonIcon type={item.type} />
                                    <h3 className="font-bold text-slate-700 text-sm mb-4 h-12 flex items-center justify-center">{item.title}</h3>
                                    <ul className="text-[9px] text-slate-600 space-y-3 text-center leading-tight">
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

                        <div className="flex justify-center gap-4">
                            <Button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] hover:bg-sky-50 font-bold py-2 px-6 rounded-full uppercase text-xs shadow-sm">
                                GET THE REPORT
                            </Button>
                            <Button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] hover:bg-sky-50 font-bold py-2 px-6 rounded-full uppercase text-xs shadow-sm">
                                DATASHEET
                            </Button>
                            <Button className="bg-white text-[#0ea5e9] border border-[#0ea5e9] hover:bg-sky-50 font-bold py-2 px-6 rounded-full uppercase text-xs shadow-sm">
                                CUSTOMER STORY
                            </Button>
                        </div>
                    </div>
                </section>

                {/* NET SCORE CHART - Image 5 */}
                <section className="bg-[#021021] py-20 text-white">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                Supercharge Development, Drive Live Traceability™, Enhance Collaboration, Manage Complexity, and Accelerate Speed to Market
                            </h2>
                            <p className="text-xs text-blue-200 max-w-5xl mx-auto leading-relaxed">
                                If you're comparing CarpacSoft vs. Codebeamer, one thing is clear — CarpacSoft is the only purpose-built requirements management platform that delivers Live Traceability and accelerates your product, systems, and software development by managing user needs and product information across the end-to-end systems development lifecycle.
                            </p>
                        </AnimatedSection>

                        <div className="max-w-5xl mx-auto text-xs font-bold mb-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Column 1 - Labels on Left */}
                                <div className="space-y-4">
                                    <div className="text-[#a3e635] mb-2 uppercase tracking-wider text-right pr-2">CarpacSoft® - NET SCORE 85%</div>
                                    {[
                                        { label: "Quality of Training", val: 86 },
                                        { label: "Ease of Implementation", val: 90 },
                                        { label: "Quality of Features", val: 83 },
                                        { label: "Vendor Support", val: 88 },
                                        { label: "Product Strategy and Rate of Improvement", val: 81 },
                                        { label: "Ease of Administration", val: 87 },
                                        { label: "Ease of Customization", val: 82 },
                                        { label: "Ease of Data Integration", val: 84 },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1/2 text-right text-slate-300">{item.label}</div>
                                            <div className="w-1/2 flex items-center gap-2">
                                                <div className="h-4 bg-[#65a30d] rounded-sm" style={{ width: `${item.val}%` }}></div>
                                                <span className="text-[#a3e635] text-[10px]">{item.val}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Column 2 - Right Side Comparison */}
                                <div className="space-y-4">
                                    <div className="text-slate-400 mb-2 uppercase tracking-wider text-left pl-2">PTC Codebeamer - NET SCORE 68%</div>
                                    {[
                                        { val: 61 }, { val: 72 }, { val: 70 }, { val: 64 }, { val: 65 }, { val: 72 }, { val: 71 }, { val: 64 }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1/2 flex items-center gap-2 justify-end">
                                                <div className="h-4 bg-slate-600 rounded-sm" style={{ width: `${item.val}%` }}></div>
                                            </div>
                                            <div className="w-1/2 text-left text-slate-400 text-[10px]">{item.val}%</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-center text-[10px] text-slate-400 mt-8">The above graph results are from <span className="text-blue-400">Software Reviews</span> powered by Info-Tech Research Group.</p>
                        </div>

                        <div className="text-center">
                            <Button className="bg-[#000033] border border-blue-500 hover:bg-blue-900 text-white rounded-full px-8 py-3 uppercase text-xs font-bold tracking-widest">
                                SEE INDEPENDENT REPORT
                            </Button>
                        </div>
                    </div>
                </section>

                {/* COMPARISON TABLE - Image 6 */}
                <section className="bg-gradient-to-br from-[#001e4d] to-[#003366] py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-8">CarpacSoft vs. Codebeamer Feature Comparison</h2>
                        </AnimatedSection>

                        <div className="max-w-7xl mx-auto">
                            <DetailedComparisonTable />
                        </div>
                    </div>
                </section>

                {/* CUSTOMER STORIES - Image 7 Top */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-8">Read Why Teams are Choosing CarpacSoft® Over Codebeamer</h2>

                            <div className="flex justify-center flex-wrap gap-8 items-center opacity-70 mb-8 max-w-4xl mx-auto">
                                <span className="font-bold text-xl text-slate-400">RIMAC</span>
                                <span className="font-bold text-xl text-slate-400">alight</span>
                                <span className="font-bold text-xl text-slate-400">GRIFOLS</span>
                                <span className="font-bold text-xl text-slate-400">3shape</span>
                                <span className="font-bold text-xl text-slate-400">TELESAT</span>
                            </div>

                            <div className="max-w-4xl mx-auto mb-8">
                                <p className="text-[#0052CC] font-medium text-sm italic leading-relaxed mb-6">
                                    "You can't beat [CarpacSoft]. It's too easy. Using the out-of-box configurations, I can just click and view the trace matrix. That was phenomenal. The fact that I can simply export a PDF for audit preparation saves me three weeks of time. Regulatory bodies don't need to know that CarpacSoft exists because it's exporting the same report that I had to do manually in the past, just instantly. So that was a major benefit."
                                </p>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="text-xs text-slate-800 font-bold mt-2">Craig Woodmansee</div>
                                    <div className="text-[10px] text-slate-500">Electrical Systems Engineer</div>
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

                {/* INTEGRATIONS - Image 7 Bottom */}
                <section className="bg-sky-50/50 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-4 max-w-4xl mx-auto">
                                Only CarpacSoft Integrates with the Best-of-Breed Ecosystem. Codebeamer Does Not.
                            </h2>
                            <p className="text-xs text-slate-600 mb-8 max-w-4xl mx-auto">
                                Systems engineers and product developers can take advantage of our integration solutions with market-leading tools for design and simulation, task management, lifecycle management, quality assurance, and testing to improve productivity. Teams can work in their preferred tools while ensuring all requirements are verified and validated to achieve complete traceability. <span className="text-blue-500 cursor-pointer">Learn More</span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-8 grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder Logos (Text for safety/speed) */}
                                <span className="font-bold text-lg text-slate-500">Ansys</span>
                                <span className="font-bold text-lg text-slate-500">Azure DevOps</span>
                                <span className="font-bold text-lg text-slate-500">TEAMCENTER</span>
                                <span className="font-bold text-lg text-slate-500">TestRail</span>
                                <span className="font-bold text-lg text-slate-500">XRAY</span>
                                <span className="font-bold text-lg text-slate-500">Jira</span>
                                <span className="font-bold text-lg text-slate-500">windchill</span>
                                <span className="font-bold text-lg text-slate-500">LDRA</span>
                                <span className="font-bold text-lg text-slate-500">aras</span>
                                <span className="font-bold text-lg text-slate-500">Tricentis qTest</span>
                                <span className="font-bold text-lg text-slate-500">git</span>
                                <span className="font-bold text-lg text-slate-500">CATIA No Magic</span>
                                <span className="font-bold text-lg text-slate-500">MathWorks</span>
                                <span className="font-bold text-lg text-slate-500">VECTOR</span>
                                <span className="font-bold text-lg text-slate-500">ZEPHYR</span>
                                <span className="font-bold text-lg text-slate-500">ENTERPRISE ARCHITECT</span>
                                <span className="font-bold text-lg text-slate-500">CAMEO</span>
                            </div>
                            <a href="/product/integrations" target="_blank" rel="noopener noreferrer">
                                <div className="font-bold text-[#00a3cc] text-xs uppercase cursor-pointer">
                                    → LEARN MORE ABOUT OUR INTEGRATIONS
                                </div>
                            </a>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BENCHMARK TRACEABILITY - Image 8 Top */}
                <section className="bg-gradient-to-r from-[#1c3856] to-[#2b547e] py-20 relative overflow-hidden text-white">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3">
                            <div className="relative shadow-2xl rounded-lg overflow-hidden transform -rotate-3 border-4 border-white/20">
                                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" alt="Benchmark Report" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 p-4 text-center">
                                    <span className="uppercase font-bold text-xs tracking-widest">Requirements Traceability Benchmark</span>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-2xl font-bold mb-4 text-white">Only CarpacSoft Delivers Live Traceability™. Codebeamer Does Not.</h2>
                            <p className="text-xs text-blue-200 mb-6 font-bold">
                                What is Live Traceability and Why is it Important?
                            </p>
                            <p className="text-xs text-blue-100 mb-8 leading-relaxed">
                                Live requirements traceability is the ability for any engineer at any time to see the most up to date and complete upstream and downstream information for any requirement—no matter the stage of systems development or how many siloed tools and teams it spans. CarpacSoft is uniquely positioned over Codebeamer to create live requirements traceability through siloed development, test, and risk activities to provide end-to-end compliance, risk mitigation, and process improvement.
                            </p>
                            <h3 className="text-xl font-bold mb-4 text-white">Requirements Traceability Benchmark</h3>
                            <p className="text-xs text-blue-100 mb-8 leading-relaxed">
                                In this groundbreaking Requirements Traceability Benchmark report, we examine how traceability is measured, the benefits of Live Traceability™, and the best practices that separate top quartile performers from the rest.
                            </p>
                            <div className="flex gap-4">
                                <a href="/resources/benchmark-report" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-transparent border border-white hover:bg-white/10 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-wide">
                                        GET THE REPORT
                                    </Button>
                                </a>

                                <a href="/resources/benchmark-report" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-transparent border border-white hover:bg-white/10 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-wide">
                                        LEARN MORE
                                    </Button>
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 8 Bottom */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-xs max-w-5xl mx-auto mb-16 font-medium">
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

export default CodebeamerCompare;



