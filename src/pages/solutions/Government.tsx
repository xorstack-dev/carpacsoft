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
    Briefcase,
    FileText,
    Users,
    AlertTriangle,
    FileCheck,
    LayoutGrid,
    Database,
    GraduationCap,
    Layers,
    GitMerge
} from "lucide-react";

// Sidebar Navigation Component
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

// Main Content Area for Features
const FeatureDisplay = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{active}</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
                {active === "Requirements Management" && "Requirements Management in CarpacSoft provides a data-driven requirements architecture for your digital engineering environment, speeding the systems development process, strengthening alignment, and ensuring quality and compliance. Configure management is automated with immutable audit trails, and change management is built-in and designed for a streamlined workflow."}
                {active === "Traceability" && "Live Traceability™ enables you to see the impact of changes upstream and downstream, ensuring that nothing is missed and risks are mitigated before they become issues."}
                {active === "Reports" && "Generate comprehensive compliance reports and audits with a single click, saving weeks of manual effort and reducing the risk of human error."}
                {active === "CarpacSoft Interchange for ReqIF" && "Seamlessly exchange requirements data with partners and suppliers using the standard ReqIF format, ensuring data integrity across the supply chain."}
                {active === "Reviews & Approvals" && "Streamline the review process with real-time collaboration, electronic signatures, and clear audit trails that verify who approved what and when."}
                {active === "Verification & Validation" && "Link requirements directly to test cases and validation results to ensure that every requirement has been met and verified."}
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0">
                    {/* UI Mockup Placeholder - replicating the complex grid view from image */}
                    <img
                        src="https://www.jamasoftware.com/wp-content/uploads/2023/10/jama-connect-review-center-1024x638.png"
                        alt="CarpacSoft Interface"
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                            // Fallback if the specific image URL fails, using a generic placeholder construction
                            e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000";
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-[#000033]/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play size={24} fill="white" className="text-white ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                <li>Support complex requirements hierarchies and flowdowns</li>
                <li>Import data from static documents or legacy tools</li>
                <li>Have a single source of truth for clear visibility throughout the development process</li>
                <li>Iterate in real time for informed decision-making and consensus</li>
                <li>Support agile and industry-specified development methodologies</li>
                <li>Reuse validated requirements to quickly replicate features across systems</li>
            </ul>
        </div>
    );
};


const Government = () => {
    const [activeFeature, setActiveFeature] = useState("Requirements Management");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 Top */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Overlay - Columns/Building Feel */}
                    <div className="absolute inset-0 bg-[#002b55]"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558525284-3c87154256f1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Enabling a Streamlined and Collaborative Digital Workplace for Government and Public Service Missions
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                Requirements management in CarpacSoft allows innovative DevOps teams to deliver complex applications development and systems modernization to meet intended mission requirements.
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

                {/* INTRO SECTION - Image 1 Middle */}
                <section className="bg-sky-50 py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-6 max-w-4xl mx-auto">
                                CarpacSoft for Teams Supporting Systems and Software in the Public Sector
                            </h2>
                            <p className="text-xs text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                                CarpacSoft provides teams a collaborative means to ensure that end-user requirements, contract requirements, and regulatory requirements are consumable by all stakeholders—either government or supplier. With integrated requirements management, collaborative reviews, test management and government risk management, your teams will see improved quality, increased stakeholder alignment, and a reduction in late-stage changes.
                            </p>
                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                LEARN MORE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CUSTOMER STORY - Image 1 Bottom */}
                <section className="bg-[#000022] py-24 text-center text-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-8 text-white">Increase Efficiency and Innovation in Federal and Public Sector Acquisition Programs</h2>
                            <p className="text-sm text-orange-400 italic mb-10 leading-relaxed font-serif">
                                "This was a very complex project. There were over 10,000 requirements and test cases exceeded 5,000. We used Jama to manage and collaborate successfully with our client through requirements, design, system, and user acceptance testing."
                            </p>

                            <div className="flex flex-col items-center justify-center mb-10">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-bold text-white">Deloitte.</span>
                                    <div className="text-left border-l pl-4 border-slate-600">
                                        <div className="font-bold text-xs">Kenneth J. Smith</div>
                                        <div className="text-[10px] text-slate-400">Senior Manager, Deloitte</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORY
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* KEY BENEFITS - Image 2 Top */}
                <section className="bg-[#000d1f] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Benefits</h2>
                            <p className="text-[14px] text-slate-300 max-w-4xl mx-auto">
                                Increasingly complex and evolving government agencies are creating new challenges for systems development teams. CarpacSoft's digital workplace for government public service missions is designed to help teams:
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Facilitate effective communication, collaboration, and alignment",
                                    icon: <Users size={40} className="text-blue-400 mb-6" />
                                },
                                {
                                    title: "Inform decision-making with increased system design understanding and visibility across the engineering process",
                                    icon: <LayoutGrid size={40} className="text-purple-400 mb-6" />
                                },
                                {
                                    title: "Reduce risk and barriers to compliance with simplified audit preparation",
                                    icon: <AlertTriangle size={40} className="text-yellow-400 mb-6" />
                                },
                                {
                                    title: "Simplify CDRL (contract data requirements list) preparation",
                                    icon: <FileCheck size={40} className="text-teal-400 mb-6" />
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

                {/* KEY FEATURES - Image 2 Bottom */}
                <section className="bg-[#000033] py-20 text-white text-center border-t border-slate-800">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <p className="text-[14px] text-slate-300 max-w-3xl mx-auto">
                                In addition to CarpacSoft's standard requirements, test, and hazard analysis management, you'll get the following valuable features:
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto mb-16">
                            {[
                                { title: "Visualization of the shared system model", icon: <LayoutGrid size={40} className="text-blue-400 mb-4" /> },
                                { title: "Requirements, risk, and verification & validation with a single source of truth", icon: <Database size={40} className="text-teal-400 mb-4" /> },
                                { title: "Training and consulting to get your teams up and running quickly", icon: <GraduationCap size={40} className="text-purple-400 mb-4" /> },
                                { title: "Out-of-the-box templates", icon: <FileText size={40} className="text-yellow-400 mb-4" /> },
                                { title: "Standard frameworks aligned to key industry regulations", icon: <Layers size={40} className="text-blue-400 mb-4" /> },
                                { title: "Integration with DevOps tools in your ecosystem", icon: <GitMerge size={40} className="text-teal-400 mb-4" /> },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    {item.icon}
                                    <p className="text-[11px] font-bold leading-relaxed max-w-[180px]">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        <Button className="bg-transparent border border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            DOWNLOAD DATASHEET
                        </Button>
                    </div>
                </section>

                {/* CUSTOMERS & INTERACTIVE - Image 3 */}
                <section className="bg-sky-100/50 py-20">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-xl font-bold text-[#001e4d] mb-8">
                                CarpacSoft supports systems and software development for large and small public sector entities and their contractor support organizations world-wide.
                            </h2>
                            {/* Logo Strip Placeholder */}
                            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
                                <div className="font-bold text-blue-900 flex items-center gap-1"><div className="w-6 h-6 rounded-full border-4 border-blue-900"></div>Transport<br />for London</div>
                                <div className="font-bold text-orange-600 text-xl tracking-tighter">CALSTRS</div>
                                <div className="font-bold text-purple-900 text-xl tracking-widest">GEHA.</div>
                                <div className="font-extrabold text-pink-600 text-xl">Ofcom</div>
                                <div className="text-xs font-bold text-slate-600 uppercase flex flex-col items-center"><div className="text-blue-400 text-lg">✻</div>HUMAN SERVICES<div className="text-[8px] tracking-widest">DEPARTMENT</div></div>
                                <div className="font-bold text-teal-600 flex flex-col items-center leading-none text-xs"><div className="text-[8px] tracking-widest text-slate-400 mb-0.5">MONTANA</div><div className="text-2xl">DPHHS</div></div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] max-w-4xl mx-auto">
                                Features to Ensure Product Quality and Meet Safety-Critical Standards for Risk Management in Government Agencies
                            </h2>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* CARAHSOFT - Image 4 Top */}
                <section className="bg-blue-50 py-12 text-center">
                    <div className="container mx-auto px-4">
                        <p className="text-xs font-bold text-slate-700 mb-6">We can facilitate your purchases through our partnership with Carahsoft</p>
                        <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            LEARN MORE
                        </Button>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 4 Middle */}
                <section className="bg-gradient-to-r from-blue-500 to-blue-400 py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-12">CarpacSoft integrates with top-tier solutions</h2>
                        <div className="flex flex-wrap justify-center items-center gap-16 max-w-5xl mx-auto mb-12">
                            <span className="font-bold text-2xl flex items-center gap-2"><div className="w-6 h-6 bg-blue-700 rounded rotate-45"></div> Jira Software</span>
                            <span className="font-bold text-2xl flex items-center gap-2"><div className="w-8 h-8 bg-orange-600 rounded-full"></div> git</span>
                            <span className="font-bold text-2xl flex items-center gap-2"><div className="w-8 h-8 bg-blue-100 rounded-full border-4 border-blue-600"></div> Azure DevOps</span>
                        </div>
                        <p className="text-xs font-medium mb-10 max-w-3xl mx-auto opacity-90">
                            And even more integrations with other leading software — including automated test solutions— to accelerate and facilitate success across the entire product development lifecycle.
                        </p>
                        <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            LEARN MORE
                        </Button>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 4 Bottom */}
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

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
                            {[
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development", color: "text-[#003399]" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices", color: "text-[#0077c8]" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application", color: "text-[#be123c]" },
                                { icon: Lock, title: "Ensures strong privacy management practices", color: "text-[#334155]" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 mb-4 flex items-center justify-center relative border-slate-100 border-2 rounded-xl">
                                        <item.icon size={48} className={item.color} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-700 max-w-[180px] leading-relaxed">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* TLS Extra */}
                        <AnimatedSection className="mt-8 flex flex-col items-center justify-center">
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

export default Government;



