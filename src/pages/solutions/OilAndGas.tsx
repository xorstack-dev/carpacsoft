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
    FileText,
    BookOpen
} from "lucide-react";

// Sidebar Navigation Component
const SidebarNav = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability",
        "Reuse & Sync",
        "Collaboration",
        "Reviews & Approvals",
        "Test Management"
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

// Main Content Area for Features
const FeatureDisplay = ({ active }: { active: string }) => {
    return (
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{active}</h3>
            <p className="text-sm text-slate-600 mb-8 max-w-2xl leading-relaxed">
                {active === "Live Traceability" && "Link high-level requirements to more detailed and sub-system requirements to assure proper validation before release."}
                {active === "Reuse & Sync" && "Reuse requirements across projects to ensure consistency and speed up development."}
                {active === "Collaboration" && "Collaborate in real-time with stakeholders to gather feedback and make informed decisions."}
                {active === "Reviews & Approvals" && "Streamline approval processes with electronic signatures and audit trails."}
                {active === "Test Management" && "Manage test plans, cases, and results to ensure product quality and reliability."}
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0 p-4">
                    {/* Simplified UI Mockup */}
                    <div className="flex h-full flex-col">
                        <div className="h-8 bg-slate-200 mb-4 w-full rounded flex items-center px-4">
                            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="ml-auto w-1/3 h-4 bg-slate-300 rounded"></div>
                        </div>
                        <div className="flex-1 bg-white border border-slate-200 rounded p-4 relative">
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="flex gap-4 items-center border-b border-slate-100 pb-2">
                                        <div className="w-4 h-4 rounded-sm bg-blue-100 border border-blue-300"></div>
                                        <div className="h-4 bg-slate-100 w-1/3 rounded"></div>
                                        <div className="h-4 bg-slate-50 w-1/2 rounded ml-auto"></div>
                                        <div className="w-16 h-4 bg-green-100 text-green-700 text-[8px] flex items-center justify-center rounded font-bold">APPROVED</div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-4 right-4 bg-[#001e4d] text-white text-[10px] px-3 py-2 rounded font-bold uppercase flex items-center gap-2">
                                <Play size={12} fill="white" />
                                EASILY DEMONSTRATE TRACEABILITY
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const OilAndGas = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#004d60] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003d6d] to-[#006088] opacity-90"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941348-c09e55483f4b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Join the Leaders Choosing CarpacSoft for Oil & Gas Projects and Products
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                Oil & gas companies are transitioning to digital solutions for project execution, product development, and standards compliance. CarpacSoft streamlines collaboration and compliance, simplifies documentation, accelerates time to market, reduces rework, and cuts the time needed to approve and process standards.
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

                {/* CHALLENGES - Image 3 */}
                <section className="bg-white py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-8">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">
                                Address Oil & Gas Project and Product Development Challenges with CarpacSoft
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={100} className="text-left max-w-4xl mx-auto mb-16">
                            <p className="text-xs font-bold text-slate-700 mb-2">With CarpacSoft, Teams Can:</p>
                            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-2">
                                <li>Efficiently manage project requirements, verification, and validation through Live Traceability™</li>
                                <li>Quickly align exploration and delivery product development across hardware and software teams</li>
                                <li>Improve outcomes by transitioning from document-centric to item-based digital requirements management and standards compliance.</li>
                            </ul>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Supercharge Oil & Gas Projects and Products to Improve Quality and Accelerate Time to Market",
                                    desc: "CarpacSoft enables the delivery of high-quality projects and products faster, by improving the development process through unified requirements management and living requirements traceability across the V model, Agile, Waterfall or other development process.",
                                    img: "https://cdn-icons-png.flaticon.com/512/3094/3094851.png"
                                },
                                {
                                    title: "Manage Project Requirements, Risks, Verification, and Validation for Hardware and Software Development",
                                    desc: "CarpacSoft offers a comprehensive solution for simplifying the project and product development process across the software and hardware lifecycle.",
                                    img: "https://cdn-icons-png.flaticon.com/512/8637/8637179.png"
                                },
                                {
                                    title: "Transition From Documents to Digital Requirements Engineering and Standards Management for Greater Speed, Efficiency, Traceability, Auditability, and Quality",
                                    desc: "CarpacSoft offers easier, more efficient workflows streamlining how you import, reuse, review, test, reuse and export requirements and standards for audit preparation and compliance.",
                                    img: "https://cdn-icons-png.flaticon.com/512/10008/10008786.png"
                                }
                            ].map((card, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="text-left bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <div className="h-40 flex items-center justify-center mb-6">
                                        <div className="relative">
                                            {/* Diagram Approximation */}
                                            <img src={card.img} className="h-32 object-contain opacity-80" alt="Diagram" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-[#001e4d] text-sm mb-4 min-h-[40px]">{card.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS - Image 4 */}
                <section className="bg-white py-16 text-center border-t border-slate-100">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-12">
                                CarpacSoft is the Platform of Choice for Top Global Oil & Gas Companies
                            </h2>
                            <p className="text-xs text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed">
                                CarpacSoft helps energy customers seamlessly transition from a document-centric way of working with requirements and engineering standards to digital requirements and standards management. This enables companies to significantly improve project and product development outcomes in terms of increasing the speed of processing and approving requirements and standards, reducing rework, improving traceability, providing an embedded audit trail, and increasing efficiency and quality.
                            </p>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-24 mb-16">
                            <img src="https://www.iogp.org/wp-content/uploads/2021/04/IOGP-Logo-Color.svg" className="h-16 grayscale hover:grayscale-0 transition-all" alt="IOGP" />
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/BP_Helios_logo.svg/1200px-BP_Helios_logo.svg.png" className="h-16 grayscale hover:grayscale-0 transition-all" alt="bp" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
                            <AnimatedSection className="bg-slate-50 p-8 rounded-xl">
                                <p className="text-slate-700 text-xs italic font-medium leading-relaxed mb-6">
                                    Currently the JIP33 program delivers specifications at a rate four times faster than in its original approach. This efficiency improvement is enabled by CarpacSoft. By using CarpacSoft Review Center, JIP33 is ensuring every reviewer is seeing the same content in real time, so there are no worries someone is looking at an out-of-date version of the specifications.
                                </p>
                                <Button className="bg-white border border-[#00a3cc] text-[#00a3cc] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    READ CUSTOMER STORY
                                </Button>
                            </AnimatedSection>

                            <AnimatedSection className="bg-slate-50 p-8 rounded-xl" delay={200}>
                                <p className="text-slate-700 text-xs italic font-medium leading-relaxed mb-6">
                                    "With CarpacSoft you check all the boxes — flexibility without all the unnecessary complexity. That's the real value of CarpacSoft."
                                </p>
                                <div className="mb-6">
                                    <div className="text-xs text-slate-800 font-bold">Nick Cawley</div>
                                    <div className="text-[10px] text-slate-500">Lead Product Manager Engineering Product Data, bp</div>
                                </div>
                                <Button className="bg-white border border-[#00a3cc] text-[#00a3cc] hover:bg-sky-50 rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    READ CUSTOMER STORY
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE FEATURES - Image 5 */}
                <section className="bg-sky-50/30 py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d]">Features to Achieve Faster Project Execution and Product Time to Market for Oil & Gas Companies</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* RESOURCES - Image 6 */}
                <section className="bg-sky-100/50 py-20">
                    <div className="container mx-auto px-4 max-w-5xl">
                        {/* Resource 1 */}
                        <AnimatedSection className="flex flex-col md:flex-row items-center gap-12 mb-16">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-video bg-slate-900 rounded-lg shadow-xl relative group cursor-pointer overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600" alt="Webinar" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                            <Play className="text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white text-[10px] font-bold leading-tight">From Documents to Data-Driven Governance: Modernizing Specification Management in Oil & Gas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-xl font-bold text-[#001e4d] mb-4">
                                    From Documents to Data-Driven Governance: Modernizing Specification Management in Oil & Gas
                                </h3>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    Oil & gas projects are large, complex, and multi-year. Yet many organizations still manage critical technical specifications in fragmented, document-based systems - slowing execution, inviting costly errors, and directly impacting project safety, reliability, and capital efficiency.
                                </p>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    In this webinar, <span className="text-blue-500">Catriona Shepherd, Founder of Bannock Technical Consulting</span>, examines the challenges of document-heavy processes and show how digitizing specifications in a modern requirements management tool can enable data-driven governance, streamline execution, and strengthen project outcomes.
                                </p>
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    WATCH WEBINAR
                                </Button>
                            </div>
                        </AnimatedSection>

                        {/* Resource 2 */}
                        <AnimatedSection delay={200} className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/3">
                                <div className="relative transform hover:-translate-y-2 transition-transform duration-300">
                                    <img src="https://images.unsplash.com/photo-1518364538800-6bae3c2db0f2?auto=format&fit=crop&q=80&w=400" alt="eBook" className="shadow-2xl rounded" />
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-[9px] font-bold px-2 py-1 uppercase rounded">eBook</div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-xl font-bold text-[#001e4d] mb-4">
                                    Fueling Progress: Solutions to the Biggest Challenges Slowing Oil & Gas Projects
                                </h3>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    From fluctuating market dynamics and stringent environmental regulations to technological advancements and the demand for operational efficiency, oil and gas companies must navigate a series of critical obstacles to remain resilient and sustainable.
                                </p>
                                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                                    In this eBook, we explore the top challenges shaping the future of the oil and gas industry, providing insights into how businesses can adapt and thrive amid these shifting pressures, including:
                                </p>
                                <ul className="text-xs text-[#001e4d] font-bold space-y-1 mb-8 list-disc pl-4">
                                    <li>Energy transition and decarbonization</li>
                                    <li>Technological innovation and digital transformation</li>
                                    <li>Aging infrastructure and asset integrity</li>
                                </ul>
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD EBOOK
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 7 */}
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

export default OilAndGas;



