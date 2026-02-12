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
    ArrowRight,
    ShieldCheck,
    Shield,
    Server,
    Lock,
    ChevronRight,
    Database,
    Users,
    Layout,
    FileCheck,
    Check
} from "lucide-react";

// Feature Card Component - Image 3 Style
const FeatureCard = ({ title, description, image }: { title: string, description: string, image: string }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-100 feature-card">
        <div className="p-6">
            <div className="mb-4 text-center">
                <img src={image} alt={title} className="max-w-[150px] mx-auto" />
            </div>
            <h3 className="text-[#001e4d] font-bold text-sm mb-4 leading-tight min-h-[40px] ">
                {title}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

// Sidebar Navigation Component - Image 4 Style
const SidebarNav = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability™",
        "Reuse & Sync",
        "Collaboration",
        "Reviews & Approvals"
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
                        <span>{item}</span>
                        <ChevronRight size={16} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Content Area for Features - Updated to match screenshot
const FeatureDisplay = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{active}</h3>
            <p className="text-sm text-slate-600 mb-6 max-w-2xl">
                {active === "Live Traceability™" && "Link high-level requirements to more detailed engineering requirements to assure proper testing and regulatory compliance."}
                {active === "Reuse & Sync" && "Reuse requirements across projects to ensure consistency and speed up development."}
                {active === "Collaboration" && "Collaborate in real-time with stakeholders to gather feedback and make informed decisions."}
                {active === "Reviews & Approvals" && "Streamline approval processes with electronic signatures and audit trails."}
            </p>

            <div className="relative w-full aspect-[16/10] bg-white rounded-lg overflow-hidden border border-slate-300 shadow-inner">
                {/* Mockup for Live Traceability Logic - Table View */}
                <div className="flex flex-col h-full text-[10px] font-sans">
                    {/* Header Bar */}
                    <div className="bg-[#2c3e50] text-white px-4 py-2 flex justify-between items-center">
                        <div className="font-bold flex gap-4">
                            <span>CarpacSoft</span>
                            <span className="opacity-70">PROJECTS</span>
                            <span className="opacity-70">REVIEWS</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                    {/* Toolbar */}
                    <div className="bg-[#f1f5f9] border-b border-slate-200 p-2 flex gap-2 items-center">
                        <div className="bg-white border px-2 py-1 rounded text-slate-500">Hazard Analysis...</div>
                        <div className="flex-1"></div>
                        <div className="px-2 py-1 bg-white border rounded">Export</div>
                    </div>
                    {/* Grid Content */}
                    <div className="flex-1 overflow-auto bg-white p-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#eff6ff] text-slate-600 border-b border-slate-300">
                                    <th className="p-2 text-left w-10">ID</th>
                                    <th className="p-2 text-left">Hazard Description</th>
                                    <th className="p-2 text-left w-20">Status</th>
                                    <th className="p-2 text-left w-10">ID</th>
                                    <th className="p-2 text-left">Safety Goal</th>
                                    <th className="p-2 text-left w-20">Link Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: "HA-1", desc: "Battery overheating detected", status: "Approved", linkId: "SG-1", linkDesc: "Thermal cutoff activation", linkStatus: "Valid" },
                                    { id: "HA-2", desc: "Signal loss during transmission", status: "Draft", linkId: "SG-2", linkDesc: "Auto-reconnect protocol", linkStatus: "Suspect" },
                                    { id: "HA-3", desc: "UI unresponsive timeout", status: "Review", linkId: "SG-3", linkDesc: "Watchdog timer reset", linkStatus: "Valid" },
                                    { id: "HA-4", desc: "Incorrect dosage calculation", status: "Approved", linkId: "SG-4", linkDesc: "Double-precision math", linkStatus: "Valid" },
                                    { id: "HA-5", desc: "Power supply fluctuation", status: "Approved", linkId: "SG-5", linkDesc: "Voltage regulator check", linkStatus: "Missing" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-2 text-blue-600">{row.id}</td>
                                        <td className="p-2 font-medium">{row.desc}</td>
                                        <td className="p-2">
                                            <span className={`px-2 py-0.5 rounded-full text-white ${row.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'}`}>{row.status}</span>
                                        </td>
                                        <td className="p-2 text-blue-600 border-l border-slate-200">{row.linkId}</td>
                                        <td className="p-2">{row.linkDesc}</td>
                                        <td className="p-2">
                                            <span className={`px-2 py-0.5 rounded-full text-white ${row.linkStatus === 'Valid' ? 'bg-green-500' : row.linkStatus === 'Suspect' ? 'bg-red-400' : 'bg-slate-400'}`}>{row.linkStatus}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#001e4d] text-white px-4 py-2 text-xs rounded shadow-lg uppercase font-bold flex items-center gap-2">
                    EASILY DEMONSTRATE TRACEABILITY
                </div>
            </div>
        </div>
    );
};


// Custom SVG Diagrams for AECO Solutions
const VModelDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0052cc" />
                <stop offset="100%" stopColor="#003366" />
            </linearGradient>
        </defs>
        {/* V Shape */}
        <path d="M 50 50 L 200 250 L 350 50" stroke="url(#blueGrad)" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" opacity="0.1" />
        <path d="M 50 50 L 200 250 L 350 50" stroke="#0052cc" strokeWidth="4" fill="none" strokeDasharray="10 5" />

        {/* Nodes */}
        <g>
            <circle cx="50" cy="50" r="20" fill="#0052cc" />
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">REQS</text>
        </g>
        <g>
            <circle cx="100" cy="120" r="20" fill="#0052cc" />
            <text x="100" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DESIGN</text>
        </g>
        <g>
            <circle cx="200" cy="250" r="25" fill="#003366" />
            <text x="200" y="255" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">IMPL</text>
        </g>
        <g>
            <circle cx="300" cy="120" r="20" fill="#0052cc" />
            <text x="300" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VERIFY</text>
        </g>
        <g>
            <circle cx="350" cy="50" r="20" fill="#0052cc" />
            <text x="350" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VALID</text>
        </g>

        {/* Arrows */}
        <path d="M 70 50 L 330 50" stroke="#00a3cc" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5 5" />
        <path d="M 120 120 L 280 120" stroke="#00a3cc" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5 5" />
    </svg>
);

const CollaborationDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Hub */}
        <rect x="150" y="100" width="100" height="100" rx="10" fill="#001e4d" />
        <text x="200" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">CarpacSoft</text>
        <text x="200" y="160" textAnchor="middle" fill="#00a3cc" fontSize="10">Connect</text>

        {/* Connectors */}
        <line x1="150" y1="150" x2="80" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="250" y1="150" x2="320" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="150" y1="180" x2="80" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="250" y1="180" x2="320" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />

        {/* Stakeholders */}
        <g transform="translate(50, 50)">
            <circle cx="0" cy="0" r="20" fill="#f1f5f9" stroke="#cbd5e1" />
            <Users x="-10" y="-10" size={20} className="text-slate-600" />
            <text x="0" y="30" textAnchor="middle" fill="#64748b" fontSize="10">Owners</text>
        </g>
        <g transform="translate(350, 50)">
            <circle cx="0" cy="0" r="20" fill="#f1f5f9" stroke="#cbd5e1" />
            <Users x="-10" y="-10" size={20} className="text-slate-600" />
            <text x="0" y="30" textAnchor="middle" fill="#64748b" fontSize="10">Contractors</text>
        </g>
        <g transform="translate(50, 250)">
            <circle cx="0" cy="0" r="20" fill="#f1f5f9" stroke="#cbd5e1" />
            <Layout x="-10" y="-10" size={20} className="text-slate-600" />
            <text x="0" y="30" textAnchor="middle" fill="#64748b" fontSize="10">Regulators</text>
        </g>
        <g transform="translate(350, 250)">
            <circle cx="0" cy="0" r="20" fill="#f1f5f9" stroke="#cbd5e1" />
            <Database x="-10" y="-10" size={20} className="text-slate-600" />
            <text x="0" y="30" textAnchor="middle" fill="#64748b" fontSize="10">Suppliers</text>
        </g>
    </svg>
);

const DocumentTransitionDiagram = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Side: Documents */}
        <g transform="translate(50, 100)">
            <rect x="0" y="0" width="60" height="80" rx="5" fill="#f1f5f9" stroke="#94a3b8" />
            <path d="M 40 0 L 40 20 L 60 20" fill="#cbd5e1" />
            <text x="30" y="45" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">DOCS</text>
            <text x="30" y="60" textAnchor="middle" fill="#94a3b8" fontSize="8">Static</text>
        </g>
        <g transform="translate(70, 120)">
            <rect x="0" y="0" width="60" height="80" rx="5" fill="#ffffff" stroke="#94a3b8" />
            <path d="M 40 0 L 40 20 L 60 20" fill="#cbd5e1" />
            <text x="30" y="45" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">PRE SHEETS</text>
        </g>

        {/* Right Side: Digital */}
        <g transform="translate(280, 100)">
            <rect x="0" y="0" width="80" height="100" rx="10" fill="#e0f2fe" stroke="#0ea5e9" />
            <Database x="25" y="30" size={30} className="text-blue-500" />
            <text x="40" y="75" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">DIGITAL</text>
            <text x="40" y="90" textAnchor="middle" fill="#0284c7" fontSize="8">Live Data</text>
        </g>

        {/* Transition Arrow */}
        <path d="M 150 150 L 260 150" stroke="#00a3cc" strokeWidth="4" markerEnd="url(#arrow)" strokeDasharray="10 5" />
        <text x="205" y="140" textAnchor="middle" fill="#00a3cc" fontSize="12" fontWeight="bold">Transformation</text>

        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#00a3cc" />
            </marker>
        </defs>
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


const AECOSolutions = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability™");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#004d60] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003d4d] to-[#006078] opacity-95"></div>
                    {/* Geometric Pattern Overlay approximation */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 25%, white 25%, white 50%, transparent 50%, transparent 75%, white 75%, white 100%), linear-gradient(135deg, transparent 25%, white 25%, white 50%, transparent 50%, transparent 75%, white 75%, white 100%)',
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Join the Leaders Choosing CarpacSoft for AEC & O — Architecture, Engineering, Construction, and Operations
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                In the evolving AECO industry, sustainability and innovation are driving change, alongside the need to address cost management, project scheduling, and quality assurance. Project owners seek clear visibility into standards, requirements, and testing, all requiring efficient collaboration. CarpacSoft empowers control over specifications for compliant, high performance facilities and systems, helping to manage costs, adhere to schedules, and ensure quality.
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

                {/* PROJECT CHALLENGES - Image 3 */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Address AEC & O Project Challenges with CarpacSoft</h2>
                            <p className="text-xs text-blue-500 font-bold mb-8 uppercase tracking-widest">With CarpacSoft, teams can:</p>
                            <ul className="text-sm text-slate-700 space-y-3 mb-16 max-w-4xl mx-auto text-left list-disc pl-4 leading-relaxed">
                                <li><strong>Proactively track potential hazards</strong> and failure modes and detect issues earlier in the design, build, and operate space.</li>
                                <li><strong>Streamline reviews and approvals</strong> by owners, lead contractors, subcontractors, suppliers, and permitting authorities to promote active participation and discussions.</li>
                                <li><strong>Accelerate time to market</strong> and improve outcomes by transitioning from document-centric requirements to digital requirements and design standards management.</li>
                            </ul>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {[
                                {
                                    title: "Supercharge Your Facility Design and Systems Engineering Process to Manage Costs, Ensure Quality, and Accelerate Time to Market",
                                    desc: "CarpacSoft enables you to manage different types and versions of requirements for construction, systems, and subsystems integrated into facilities.",
                                    Component: VModelDiagram
                                },
                                {
                                    title: "Only CarpacSoft Allows for Efficient Collaboration, Comments, Reviews, and Approvals Involving All Stakeholders in a Secure, Scalable, Cloud Platform",
                                    desc: "Project owners and their lead contractors, subcontractors, suppliers, and permitting authorities can communicate and collaborate securely and efficiently online.",
                                    Component: CollaborationDiagram
                                },
                                {
                                    title: "Transition From Documents to Digital Requirements and Design Standards Management for Greater Speed, Efficiency, Traceability, Auditability, and Quality",
                                    desc: "CarpacSoft offers easier, more efficient workflows streamlining how you collaborate, review, test, reuse, and export requirements and design standards.",
                                    Component: DocumentTransitionDiagram
                                },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="text-left bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <div className="h-48 mb-6 bg-white rounded-lg p-2 shadow-inner border border-slate-100 flex items-center justify-center overflow-hidden">
                                        <item.Component />
                                    </div>
                                    <h3 className="text-[#001e4d] font-bold text-sm mb-4 leading-relaxed min-h-[60px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-[12px] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ACCELERATE DEVELOPMENT - Image 4 Top */}
                <section className="bg-sky-50 py-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3 flex justify-center">
                            <div className="relative group cursor-pointer">
                                <FileCheck size={180} className="text-blue-100 absolute -top-4 -left-4 opacity-50" />
                                <div className="bg-white p-6 shadow-2xl rounded-lg border border-slate-200 relative z-10 w-48 h-64 flex flex-col items-center justify-center text-center">
                                    <img src="/jama-connect-logo.svg" alt="CarpacSoft" className="h-6 mb-4" />
                                    <div className="w-full h-2 bg-slate-100 mb-2"></div>
                                    <div className="w-3/4 h-2 bg-slate-100 mb-4"></div>
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-[8px] text-slate-400">AEC & O SOLUTIONS</p>
                                </div>
                                <div className="absolute -bottom-6 -right-6">
                                    <div className="bg-[#001e4d] rounded-full p-3 shadow-lg">
                                        <Layout size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-4xl font-bold text-[#001e4d] mb-6">
                                Accelerate AECO Facilities and Systems Development with CarpacSoft
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-8">
                                AECO project owners face immense pressure to deliver projects on time, within budget, and with high quality. To meet these challenges, they require clear visibility into specifications and test data, along with efficient collaboration with lead contractors, subcontractors, and suppliers. CarpacSoft strengthens the ability to manage engineering and related requirements for building safe, high-performance, compliant facilities and systems.
                            </p>
                            <a href="#" className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2">
                                &gt;&gt; Get the Datasheet
                            </a>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FEATURES INTERACTIVE - Image 4 Bottom */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d]">Features to Ensure Control over AECO Facility and System Specifications</h2>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* WHITEPAPER - Image 5 */}
                <section className="bg-sky-50 py-24">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3 flex justify-center">
                            <div className="relative">
                                <img src="https://images.unsplash.com/photo-1544256372-5bb1a4db48f1?auto=format&fit=crop&q=80&w=400" alt="Whitepaper" className="w-48 h-auto shadow-2xl rounded border-2 border-white transform rotate-3" />
                                <div className="absolute -left-4 top-10 bg-[#001e4d] rounded-full p-2 border-4 border-white shadow-lg">
                                    <Check size={24} color="white" />
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-[#001e4d] mb-6">
                                Navigating Transformation: Challenges and Solutions in the AECO Industry
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-4">
                                The AECO industry has seen a steady increase in demand for sustainable and energy-efficient designs, innovative building materials and construction techniques. It is also grappling with issues such as a shortage of skilled labor, rising material costs, and increasing regulatory requirements. As such, the industry is undergoing a transformation as it seeks to meet the evolving needs of clients and society while navigating a rapidly changing business landscape.
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed mb-8">
                                Read this whitepaper to learn about some of these challenges including inefficient design review processes, scope creep, the inability to track and manage change, and provides answers on how to solve them.
                            </p>
                            <a href="#" className="text-blue-500 font-bold text-xs hover:underline">
                                &gt;&gt; Download Free Whitepaper
                            </a>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 5 Bottom */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto">
                                CarpacSoft is the Leader in Security, SLAs, High Availability, Touchless Upgrades, and Disaster Recovery
                            </h2>
                            <p className="text-slate-500 text-xs max-w-5xl mx-auto mb-16 font-medium leading-relaxed">
                                CarpacSoft is the only vendor in the space that offers the following: SOC 2 Type 2 certified application and data center (others data center only), SLAs above 99% (others at 95% or lower), touchless upgrades (others require your IT to manually update hosted app), high availability SLA (others don't offer), disaster recovery SLA (others don't offer).
                            </p>
                        </AnimatedSection>

                        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 max-w-7xl mx-auto">
                            {[
                                { Component: TuvIcon, title: "Suitably validated by TÜV SÜD for safety-related development", width: "w-20" },
                                { icon: Shield, title: "CarpacSoft® codes with OWASP best practices", color: "text-[#0077c8]", width: "w-16" },
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
                    </div>
                </section>

                {/* BOOK A DEMO - End of Page */}
                <div className="bg-gradient-to-b from-[#465584] to-[#2e3b5e]">
                    <DemoForm />
                    <div className="container mx-auto px-4 pb-20 text-center">
                        <div className="max-w-2xl mx-auto text-white">
                            <h2 className="text-4xl font-bold mb-6">See CarpacSoft in Action!</h2>
                            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                                Our CarpacSoft experts are ready to guide you through a personalized demo, answer your questions, and show you how CarpacSoft can help you identify risks, improve cross-team collaboration, and drive faster time to market.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default AECOSolutions;



