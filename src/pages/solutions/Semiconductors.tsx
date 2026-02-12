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
    RefreshCw,
    FileText,
    CircuitBoard,
    Layers,
    Component,
    Share2
} from "lucide-react";

// Feature Sidebar Component (Image 5)
const FeatureSidebar = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability",
        "Real-time Collaboration",
        "Interoperability", // from screenshot
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
                {active === "Live Traceability" && "Link high-level requirements to more detailed and sub-system requirements and implementation work products to ensure proper validation before release."}
                {active === "Real-time Collaboration" && "Work together seamlessly across teams and locations, ensuring that everyone is on the same page and working with the most up-to-date information."}
                {active === "Interoperability" && "Integrate with best-of-breed tools across the semiconductor development lifecycle, including EDA tools and verification platforms."}
                {active === "Reviews & Approvals" && "Streamline the review process with formal approvals, electronic signatures, and audit trails to ensure quality and compliance."}
            </p>

            <div className="relative w-full aspect-[16/9] bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0 p-4 bg-white">
                    {/* Flow Diagram Placeholder for Traceability */}
                    <div className="w-full h-full flex flex-col justify-between relative">
                        {/* Top Row */}
                        <div className="flex justify-between items-center px-8">
                            <div className="bg-slate-100 border border-slate-300 rounded p-2 text-[10px] w-32 shadow-sm">Hardware Block Requirements</div>
                            <div className="border-t-2 border-green-500 flex-1 mx-2 relative top-3"></div>
                            <div className="bg-slate-100 border border-slate-300 rounded p-2 text-[10px] w-32 shadow-sm text-right">Related Test Cases</div>
                        </div>

                        {/* Connector */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 bg-[#00a3cc] rounded-full flex items-center justify-center shadow-lg">
                                <Share2 size={20} className="text-white" />
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="flex justify-between items-center px-8">
                            <div className="bg-slate-100 border border-slate-300 rounded p-2 text-[10px] w-32 shadow-sm">Container Details</div>
                            <div className="border-t-2 border-green-500 flex-1 mx-2 relative top-3"></div>
                            <div className="bg-slate-100 border border-slate-300 rounded p-2 text-[10px] w-32 shadow-sm text-right">Verification Test Case</div>
                        </div>

                        {/* Additional Labels from screenshot */}
                        <div className="absolute top-4 right-4 bg-yellow-100 px-2 py-1 text-[8px] font-bold border border-yellow-300 rounded">Trace Score: 83.33%</div>
                    </div>
                </div>
            </div>

            {active === "Live Traceability" && (
                <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                    <li>Increase efficiency</li>
                    <li>Drive alignment</li>
                    <li>Mitigate organizational risk</li>
                </ul>
            )}
        </div>
    );
};

const Semiconductors = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Overlay - Circuit Board Pattern */}
                    <div className="absolute inset-0 bg-[#002b55] opacity-90"></div>
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Join the Leaders Choosing CarpacSoft for Semiconductors
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                Semiconductor companies are choosing intelligent automated solutions to accelerate product design and development while avoiding costly mistakes in system of systems (SoS) delivery. CarpacSoft enables visibility and accountability for customer needs and system requirements, architecture, and test across the entire lifecycle.
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

                {/* DIAGRAM INTRO SECTION - Image 2 */}
                <section className="bg-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <div className="flex justify-center mb-8">
                                {/* Centered complex diagram representation */}
                                <div className="relative w-[300px] md:w-[600px] h-[300px] md:h-[400px]">
                                    {/* Central V-Model Graphic Placeholder */}
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/05/Semiconductor-V-Process-Diagram.png"
                                        alt="CarpacSoft for Semiconductors Diagram"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 border-2 border-blue-200 border-dashed font-bold">Semiconductor Lifecycle Diagram</div>`;
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-xs font-bold text-slate-500 max-w-2xl mx-auto uppercase tracking-wider mb-8">
                                CarpacSoft FOR SEMICONDUCTORS IS THE ONLY REQUIREMENTS MANAGEMENT SOLUTION SPECIFICALLY DESIGNED TO BE PART OF A BEST-OF-BREED TOOLCHAIN FOR SEMICONDUCTOR TO DELIVER LIVE TRACEABILITY™
                            </h3>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto bg-blue-100 rounded-lg p-8 md:p-12">
                            <div className="md:w-1/2 text-left">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-4">CarpacSoft for Semiconductors</h2>
                                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                                    It can take months or even years to complete development of a new product. To avoid costly mistakes, requirements need to be clearly communicated to the entire team across the development lifecycle. While most teams acknowledge their communication challenges, the risk of process change or adopting a new tool can be daunting. CarpacSoft for Semiconductors is a custom-built, powerful, and easy-to-use solution that helps automate engineering processes often done manually in Excel and Word so that you can develop the right products with speed, quality, and data integrity.
                                </p>
                                <div className="flex gap-4">
                                    <Button className="bg-[#00a3cc] hover:bg-[#008fb3] rounded-full px-6 text-xs uppercase font-bold">Read Datasheet</Button>
                                    <Button className="bg-[#ea580c] hover:bg-[#c2410c] rounded-full px-6 text-xs uppercase font-bold">Watch Webinar</Button>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1555664424-778a696335b5?auto=format&fit=crop&q=80&w=800"
                                    alt="Semiconductor Engineering"
                                    className="rounded-lg shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS - Image 3 Top */}
                <section className="bg-white py-20 pb-0 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-xl font-bold text-[#001e4d] max-w-4xl mx-auto mb-16">
                                CarpacSoft supports several of the top global semiconductor companies
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20 text-left">
                                {/* Quote 1 */}
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-orange-400 italic font-serif leading-relaxed">
                                        "By using CarpacSoft to manage our requirements-related information over the product development cycle, our R&D engineers increase their daily efficiency and simultaneously contribute to the current digital transformation. CarpacSoft's good usability won over our development teams."
                                    </p>
                                    <div className="flex flex-col mt-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="text-blue-900 font-bold text-xs italic">Infineon</div>
                                        </div>
                                        <span className="font-bold text-xs text-slate-800">Pierre Nury</span>
                                        <span className="text-[10px] text-slate-500 mb-1">Technical Lead Requirements Management Methodologies, Infineon</span>
                                        <a href="#" className="text-[#ea580c] text-[10px] font-bold hover:underline">Read Customer Story</a>
                                    </div>
                                </div>

                                {/* Quote 2 */}
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-orange-400 italic font-serif leading-relaxed">
                                        "Our teams around the world are all documenting their work in CarpacSoft, which is helping us achieve our goal of establishing one way of working for all development at SUSS."
                                    </p>
                                    <div className="flex flex-col mt-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="text-green-800 font-bold text-xs">SUSS</div>
                                        </div>
                                        <span className="font-bold text-xs text-slate-800">Dr. Christoph Hackstein</span>
                                        <span className="text-[10px] text-slate-500 mb-1">Project Coordinator Software, SUSS</span>
                                        <a href="#" className="text-[#ea580c] text-[10px] font-bold hover:underline">Read Customer Story</a>
                                    </div>
                                </div>
                            </div>

                            {/* Logos */}
                            <div className="flex flex-wrap justify-center gap-16 items-center opacity-80 mb-12">
                                <div className="font-bold text-xl text-black flex items-center gap-1"><div className="w-5 h-5 bg-green-500"></div>NVIDIA</div>
                                <div className="font-bold text-xl text-slate-600 border-2 border-slate-400 rounded-full px-3 py-1">Infineon</div>
                                <div className="font-bold text-xl text-slate-800">Synopsys</div>
                                <div className="font-bold text-xl text-green-700 flex flex-col items-center leading-none"><div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-serif text-sm">ON</div><span className="text-[8px] mt-1 text-black font-sans">ON Semiconductor</span></div>
                                <div className="font-bold text-xl text-purple-700 flex items-center gap-1">tenstorrent</div>
                                <div className="font-bold text-xl text-green-800 flex items-center gap-1"><div className="w-5 h-5 bg-green-800 rotate-45"></div>SUSS</div>
                            </div>

                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                MEET OUR CUSTOMERS
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FEATURES INTERACTIVE - Image 3 Bottom */}
                <section className="bg-sky-100 py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-slate-700 mb-4">Features to Ensure Product Quality and Meet Standards</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
                            <FeatureSidebar active={activeFeature} setActive={setActiveFeature} />
                            <FeatureContent active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* RESOURCES (eBook & Whitepaper) - Image 4 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Resource 1 */}
                            <div className="flex flex-col items-start bg-slate-50 p-8 rounded-lg shadow-sm">
                                <div className="w-full mb-6 overflow-hidden rounded-lg shadow-md group">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/02/Buyers-Guide-Selecting-Requirements-Management-Semiconductor-Cover-TN.png"
                                        alt="Buyer's Guide"
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500";
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Assess Your Semiconductor Product Requirements and Traceability Pain Points</h3>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    Semiconductor companies face increasing challenges developing their next-gen products and product families. Product customization, and the variation caused by multiple product configurations, make it difficult...
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-xs font-bold text-slate-700 mb-8">
                                    <li>Identify pain points in your processes</li>
                                    <li>Qualify the problem with your company</li>
                                    <li>Narrow down your options</li>
                                    <li>Build the business case to get the buy-in you need for success</li>
                                    <li>Prepare for solution deployment and adoption</li>
                                </ul>
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] rounded-full px-6 text-[10px] uppercase font-bold mt-auto">Read eBook</Button>
                            </div>

                            {/* Resource 2 */}
                            <div className="flex flex-col items-start bg-slate-50 p-8 rounded-lg shadow-sm">
                                <div className="w-full mb-6 overflow-hidden rounded-lg shadow-md group">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2021/11/Whitepaper-Extending-End-to-End-Traceability-Into-Semiconductor-Design-Cycle-Cover-TN.png"
                                        alt="Whitepaper"
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500";
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Extending End-to-End Traceability into the Semiconductor Design Cycle</h3>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    With fabless semiconductor companies evolving rapidly and tackling increasing design challenges, effective requirement traceability across the entire design lifecycle has never been more critical...
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-xs font-bold text-slate-700 mb-8">
                                    <li>Why integrating traceability into EDA tools benefits chip and system-on-chip (SOC) projects</li>
                                    <li>How companies can set themselves up for success</li>
                                    <li>How CarpacSoft can help</li>
                                </ul>
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-6 text-[10px] uppercase font-bold mt-auto">Read Whitepaper</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 5 Top */}
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
                                { icon: ShieldCheck, title: "Suitably validated by TÜV SÜD for safety-related development" },
                                { icon: Shield, title: "CarpacSoft codes with OWASP best practices" },
                                { icon: Server, title: "CarpacSoft is SOC2 Type 2 certified in both the server and application" },
                                { icon: Lock, title: "Ensures strong privacy management practices" },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 mb-4 flex items-center justify-center relative border-2 border-slate-200 rounded-xl bg-white">
                                        <item.icon size={48} className="text-[#001e4d]" strokeWidth={1.5} />
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

                {/* INTEGRATIONS - Image 5 Bottom */}
                <section className="bg-[#0ea5e9] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-12">CarpacSoft Integrates with Top-tier Solutions</h2>
                        <div className="flex flex-wrap justify-center items-center gap-16 max-w-6xl mx-auto mb-12">
                            <span className="font-bold text-xl flex items-center gap-2 text-white"><div className="w-4 h-4 bg-blue-700 rounded rotate-45"></div> Jira Software</span>
                            <span className="font-bold text-xl text-white font-mono tracking-widest">cadence</span>
                            <span className="font-bold text-xl text-yellow-300 italic">Ansys</span>
                            <span className="font-bold text-xl text-white font-sans">synopsys</span>
                            <span className="font-bold text-xl text-teal-200 tracking-wider">SIEMENS</span>
                        </div>
                        <p className="text-xs font-medium mb-10 max-w-3xl mx-auto opacity-90">
                            And even more integrations with other leading software — including automated test solutions— to accelerate and facilitate success across the entire semiconductor product development lifecycle.
                        </p>
                        <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            LEARN MORE
                        </Button>
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

export default Semiconductors;



