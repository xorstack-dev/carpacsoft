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
    RefreshCw
} from "lucide-react";

// Industry Tabs Component (Image 3)
const IndustryTabs = () => {
    const [activeTab, setActiveTab] = useState("Automation & Robotics");

    const tabs = [
        { name: "Automation & Robotics", icon: <Cpu size={16} /> },
        { name: "Consumer Electronics", icon: <RefreshCw size={16} /> }, // Using generic icons as placeholders if specific ones aren't obvious
        { name: "Energy", icon: <Zap size={16} /> },
        { name: "Machinery & Industrial Technology", icon: <Factory size={16} /> },
        { name: "Railway", icon: <Train size={16} /> }
    ];

    // Content for Automation & Robotics is detailed in reference. Others will have generic placeholders.
    const renderContent = () => {
        switch (activeTab) {
            case "Automation & Robotics":
                return (
                    <div className="animate-fade-in">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Automation & Robotics</h3>
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                            CarpacSoft enables automation and robotics firms to meet customer needs and comply with regional and industry safety, quality, and security standards by enabling efficient requirements management, traceability, and regulatory compliance. CarpacSoft for Robotics incorporates product development and functional safety best practices based on IEC 61508. Features include best-practice frameworks; templates; example projects; and procedural, export, and configuration documentation. CarpacSoft streamlines development, accelerates deployment, and enhances innovation success by ensuring adherence to industry standards and improving development outcomes.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="text-[#00a3cc] text-xs font-bold hover:underline">Get Datasheet</a>
                            <a href="#" className="text-[#00a3cc] text-xs font-bold hover:underline">Watch Webinar</a>
                        </div>

                        <h4 className="text-sm font-bold text-slate-700 mb-4">Leading Automation & Robotics Companies Choose CarpacSoft</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-80 mb-8">
                            {/* Customer Logo Placeholders */}
                            <div className="font-bold text-red-600 text-xs">Rockwell Automation</div>
                            <div className="font-bold text-green-600 text-xs">MURR ELEKTRONIK</div>
                            <div className="font-bold text-blue-900 text-lg">FORT</div>
                            <div className="font-bold text-slate-700 text-xs">AGILE ROBOTS</div>
                            <div className="font-bold text-blue-500 text-xs">CRESTRON</div>
                            <div className="font-bold text-blue-600 text-lg">OMRON</div>
                            <div className="font-bold text-green-500 text-lg font-serif">symbotic</div>
                            <div className="font-bold text-green-700 text-sm">AgriRobot</div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#00a3cc]">
                            <p className="text-xs text-slate-600 italic mb-4">
                                "With our previous process, a requirements document, which could include 30 to 50 individual requirements, could take two weeks to process, requiring the manual gathering of comments, exporting them, and then copying and pasting updates. With CarpacSoft, we reduced requirements approvals down to minutes and collaboration is much smoother. We can knock out easy requirements first and then focus on the more difficult ones, streamlining the entire approval process."
                            </p>
                            <div className="flex flex-col">
                                <span className="font-bold text-xs text-slate-800">Eric Zaremski</span>
                                <span className="text-[10px] text-slate-500">Lead Program Manager, FORT Robotics</span>
                                <a href="#" className="text-[#00a3cc] text-[10px] font-bold mt-2 hover:underline">Read Customer Story</a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="animate-fade-in">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">{activeTab}</h3>
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                            CarpacSoft empowers {activeTab.toLowerCase()} companies to manage complexity, ensure compliance, and accelerate innovation. By providing a single source of truth for requirements, risks, and tests, teams can collaborate effectively and deliver high-quality products to market faster.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="text-[#00a3cc] text-xs font-bold hover:underline">Get Datasheet</a>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
                <div className="flex flex-col space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`text-left px-4 py-3 text-xs font-bold flex justify-between items-center rounded transition-colors
                                ${activeTab === tab.name
                                    ? "bg-[#00a3cc] text-white"
                                    : "text-slate-600 hover:bg-slate-100"}`}
                        >
                            {tab.name}
                            {activeTab === tab.name && <ChevronRight size={14} />}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-3/4 bg-white rounded-lg shadow-sm border border-slate-200 p-8">
                {renderContent()}
            </div>
        </div>
    );
};

// Feature Sidebar Component (Image 5)
const FeatureSidebar = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability",
        "Real-time Collaboration",
        "Reviews & Approvals",
        "Test Management",
        "CarpacSoft Interchange for ReqIF"
    ];

    return (
        <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`p-4 cursor-pointer flex justify-between items-center text-sm font-bold border-b border-slate-100 last:border-none transition-colors duration-300
                            ${active === item ? 'bg-[#00a3cc] text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                        onClick={() => setActive(item)}
                    >
                        <span className="break-words pr-2">{item}</span>
                        <ChevronRight size={16} className="flex-shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FeatureContent = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{active}</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
                {active === "Live Traceability" && "Link high-level requirements to more detailed and sub-system requirements to ensure proper validation before release. Increase efficiency while following best practices for risk management in manufacturing, drive alignment, and mitigate organizational risk."}
                {active === "Real-time Collaboration" && "Enable real-time collaboration across distributed teams to speed up decision making and ensure everyone is working on the latest version."}
                {active === "Reviews & Approvals" && "Simplify compliance with formal review and approval workflows, including electronic signatures and audit trails."}
                {active === "Test Management" && "Integrated test management ensures that all requirements are verified and validated, reducing the risk of product failures."}
                {active === "CarpacSoft Interchange for ReqIF" && "Seamlessly exchange data with suppliers and customers using the industry-standard ReqIF format for improved supply chain collaboration."}
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0 p-4">
                    {/* Placeholder for the screenshot in active tab */}
                    <div className="w-full h-full bg-slate-100 rounded border border-slate-200 flex flex-col relative overflow-hidden group">
                        <div className="h-8 bg-white border-b border-slate-200 flex items-center px-4 space-x-2">
                            <div className="w-20 h-3 bg-slate-200 rounded"></div>
                            <div className="w-20 h-3 bg-slate-100 rounded"></div>
                        </div>
                        <div className="flex-1 p-4 bg-slate-50/50">
                            <div className="grid grid-cols-4 gap-2 mb-2">
                                <div className="h-4 bg-green-200 rounded w-full"></div>
                                <div className="h-4 bg-blue-100 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                            </div>
                            <div className="space-y-2 mt-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex gap-2">
                                        <div className="w-4 h-4 rounded bg-slate-200"></div>
                                        <div className="h-4 bg-white border border-slate-200 w-full rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-[#001e4d] rounded-full flex items-center justify-center shadow-lg cursor-pointer group-hover:scale-110 transition-transform">
                                <Play size={20} fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {active === "Live Traceability" && (
                <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                    <li>Increase efficiency while following best practices for risk management in manufacturing</li>
                    <li>Drive alignment</li>
                    <li>Mitigate organizational risk</li>
                </ul>
            )}
        </div>
    );
};

const IndustrialManufacturing = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-[#003366] opacity-90"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-40"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Join the Leaders Choosing CarpacSoft for Industrial Machinery & Technology, Consumer Electronics, and Energy
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                CarpacSoft enables customers in automation & robotics, consumer electronics, energy, industrial machinery & technology, and railway industries to bring products to market faster, reduce rework and recalls, and increase quality and process efficiency. It empowers systems engineering, product, and software teams to transition from siloed, document-centric management to collaborative and intelligent engineering management. This integrated single source of truth enhances traceability, reuse, and safety by providing real-time access to critical information across teams, significantly improving overall outcomes.
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

                {/* INDUSTRY TABS SECTION - Image 3 */}
                <section className="bg-sky-50 py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d]">CarpacSoft is the Leading Solution for Your Industry</h2>
                        </AnimatedSection>
                        <IndustryTabs />
                    </div>
                </section>

                {/* ADDRESS CHALLENGES SECTION - Image 4 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Address Product Development Challenges with CarpacSoft</h2>
                            <p className="text-sm text-slate-700 font-bold mb-8">With CarpacSoft, teams can:</p>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto mb-16">
                            {/* CYCLE DIAGRAM REPLICA */}
                            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                                {/* Circular layout using absolute positioning */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-48">
                                    <div className="w-12 h-12 bg-[#001e4d] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2 relative z-10">1</div>
                                    <h4 className="font-bold text-[#001e4d] text-sm">Auto Detect Risk</h4>
                                    <p className="text-[10px] text-slate-500">Metadata from development activity is continuously synched</p>
                                </div>

                                <div className="absolute bottom-1/2 right-0 translate-y-1/2 text-center w-48">
                                    <div className="w-12 h-12 bg-[#001e4d] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2 relative z-10">2</div>
                                    <h4 className="font-bold text-[#001e4d] text-sm">Inspect & Determine Action</h4>
                                    <p className="text-[10px] text-slate-500">CarpacSoft calculates traceability & coverage scores</p>
                                </div>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-48">
                                    <div className="w-12 h-12 bg-[#001e4d] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2 relative z-10">3</div>
                                    <h4 className="font-bold text-[#001e4d] text-sm md:w-64 -ml-8">Product Implementation & Development Tools</h4>
                                    <p className="text-[10px] text-slate-500">(no change to current implementation developer behavior)</p>
                                </div>

                                {/* Connecting Lines (svg) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-300" style={{ transform: "scale(0.8)" }}>
                                    <path d="M 200 50 A 150 150 0 0 1 350 200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
                                    <path d="M 350 200 A 150 150 0 0 1 200 350" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
                                    <path d="M 200 350 A 150 150 0 0 1 50 200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
                                    <defs>
                                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>

                            <div className="text-left max-w-md">
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div>
                                        <p className="text-xs text-slate-600">Auto detect risk and gaps based on CarpacSoft continuously synching development activity to associated requirements and tests</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div>
                                        <p className="text-xs text-slate-600">Inspect and determine action based on CarpacSoft continuously calculating traceability and coverage scores</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></div>
                                        <p className="text-xs text-slate-600">Continue to use their preferred product implementation and development tools without change</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* TOOL LOGOS */}
                        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="font-bold">Ansys</span>
                            <span className="font-bold flex items-center gap-1"><div className="w-4 h-4 bg-blue-500 rounded"></div> Azure DevOps</span>
                            <span className="font-bold text-green-700">Teamcenter</span>
                            <span className="font-bold">TestRail</span>
                            <span className="font-bold">XRAY</span>
                            <span className="font-bold text-blue-700">Jira</span>
                            <span className="font-bold">windchill</span>
                            <span className="font-bold">LDRA</span>
                            <span className="font-bold text-red-600">aras</span>
                            <span className="font-bold">Tricentis qTest</span>
                            <span className="font-bold flex items-center gap-1"><div className="w-4 h-4 bg-orange-600 rounded-full"></div> git</span>
                            <span className="font-bold">CATIA</span>
                            <span className="font-bold">MathWorks</span>
                            <span className="font-bold">VECTOR</span>
                            <span className="font-bold">Zephyr</span>
                            <span className="font-bold">ENTERPRISE ARCHITECT</span>
                            <span className="font-bold font-serif">CAMEO</span>
                        </div>
                    </div>
                </section>

                {/* FEATURES INTERACTIVE - Image 5 */}
                <section className="bg-white py-24 pt-0">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Features to Ensure Product Quality and Standards</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                            <FeatureSidebar active={activeFeature} setActive={setActiveFeature} />
                            <FeatureContent active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 6 */}
                <section className="py-24 bg-[#001e4d] text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-white">
                                Never Worry or Waste Time and Money on Servers, Upgrades, Tool Validation, or Application Security Again
                            </h2>
                            <p className="text-blue-100 text-[12px] max-w-5xl mx-auto mb-16 font-medium">
                                CarpacSoft is the only multi-tenant requirements management software platform. It includes automatic updates, SOC 2 Type 2 compliance on the platform and environment, proven scalability up to 10 million items per project, and global user P75 performance of sub three seconds — and there's no additional charge for any of it.
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application" },
                                { icon: Lock, title: "Ensures strong privacy management practices" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 mb-4 flex items-center justify-center relative bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                        <item.icon size={48} className="text-white" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-[10px] font-bold text-blue-100 max-w-[180px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-8 flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-[#0ea5e9] text-white font-bold px-3 py-1 text-2xl tracking-widest mb-4">TLS</div>
                                <p className="text-xs font-bold text-blue-100 max-w-[250px]">
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

export default IndustrialManufacturing;



