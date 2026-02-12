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
    FileText
} from "lucide-react";

// Feature Sidebar Component (Image 5)
const FeatureSidebar = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Live Traceability",
        "Requirements Management",
        "Risk Management",
        "Verification and Validation",
        "Reuse & Sync",
        "Reviews and Approvals",
        "Documentation",
        "Design History File / Technical File"
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
                {active === "Live Traceability" && "Link high-level requirements to more detailed and sub-system requirements to assure proper validation before release."}
                {active === "Requirements Management" && "Manage complex requirements hierarchies and maintain a single source of truth for all your development artifacts."}
                {active === "Risk Management" && "Integrate risk management directly into your development process, linking risks to requirements and tests for complete coverage."}
                {active === "Verification and Validation" && "Ensure all requirements are verifying and validated with integrated test management and execution traceabiltiy."}
                {active === "Reuse & Sync" && "Leverage existing IP by reusing requirements and verifying tests across multiple projects and products."}
                {active === "Reviews and Approvals" && "Streamline the review process with electronic signatures and audit trails that meet FDA 21 CFR Part 11 requirements."}
                {active === "Documentation" && "Generate audit-ready documentation and regulatory submissions with a single click."}
                {active === "Design History File / Technical File" && "Automatically generate and maintain your Design History File (DHF) or Technical File to prove compliance."}
            </p>

            <div className="relative w-full aspect-[16/9] bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0">
                    {/* Placeholder for the screenshot in active tab */}
                    <img
                        src="https://www.jamasoftware.com/wp-content/uploads/2022/04/Live-Traceability-for-Medical-Device-Development-1024x609.png"
                        alt="CarpacSoft Interface"
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000";
                        }}
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-[#000033]/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl">
                            <Play size={24} fill="white" className="text-white ml-1" />
                        </div>
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

const MedicalDevice = () => {
    const [activeFeature, setActiveFeature] = useState("Live Traceability");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-[#002b55] opacity-90"></div>
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Accelerate the Development of Safe and Effective Medical Devices & Life Science Products with CarpacSoft
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                In the medical device & life sciences industries, the transformation from hardware-focused devices to diverse products driven by software — in combination with hardware and bioware — is reshaping the tools and processes by which devices and related products are developed. CarpacSoft for medical device requirements management is purpose-built to reduce the effort required to achieve regulatory compliance by managing design controls for device requirements and related risks, simplifying regulatory submissions and audit preparations, and accelerating time to market.
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

                {/* CHALLENGES SECTION - Image 2 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Address Medical Device & Life Science Product Development Challenges with CarpacSoft</h2>
                            <p className="text-xs text-[#00a3cc] font-bold uppercase mb-4">With CarpacSoft You Can:</p>
                            <ul className="list-disc pl-5 space-y-2 text-xs font-bold text-[#001e4d] mb-12">
                                <li>Efficiently manage requirements, risks, verification, and validation through Live Traceability™</li>
                                <li>Quickly align systems engineering disciplines across hardware, software, and bioware product development teams</li>
                                <li>Simplify regulatory submissions and compliance with industry standards</li>
                            </ul>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <AnimatedSection delay={100} className="bg-sky-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                                <div className="h-40 bg-white rounded-lg mb-6 flex items-center justify-center p-4 border border-blue-100">
                                    {/* Abstract diagram placeholder */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-4 border-l-blue-500 border-t-green-500 border-r-purple-500 border-b-orange-500 animate-spin-slow"></div>
                                        <div className="absolute text-[8px] font-bold text-center">PRODUCT<br />LIFECYCLE</div>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-[#001e4d] mb-4 min-h-[40px]">Support Multiple and Hybrid Product Development Processes (PDP)</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    CarpacSoft provides a flexible solution to manage all of your product development methods.
                                </p>
                            </AnimatedSection>

                            {/* Card 2 */}
                            <AnimatedSection delay={200} className="bg-sky-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                                <div className="h-40 bg-white rounded-lg mb-6 flex items-center justify-center p-4 border border-blue-100">
                                    {/* V-Model diagram placeholder */}
                                    <div className="flex flex-col items-center gap-2 w-full">
                                        <div className="flex justify-between w-full px-2"><div className="w-8 h-6 bg-blue-600 rounded"></div><div className="w-8 h-6 bg-green-600 rounded"></div></div>
                                        <div className="flex justify-between w-3/4 px-2"><div className="w-8 h-6 bg-blue-500 rounded"></div><div className="w-8 h-6 bg-green-500 rounded"></div></div>
                                        <div className="flex justify-between w-1/2 px-2"><div className="w-8 h-6 bg-blue-400 rounded"></div><div className="w-8 h-6 bg-green-400 rounded"></div></div>
                                        <div className="w-8 h-6 bg-purple-600 rounded"></div>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-[#001e4d] mb-4 min-h-[40px]">Manage Requirements, Risks, Verification, and Validation for Hardware, Software, and Bioware Development</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    CarpacSoft offers a comprehensive solution for simplifying the product development process across the device, product, system and software lifecycle.
                                </p>
                            </AnimatedSection>

                            {/* Card 3 */}
                            <AnimatedSection delay={300} className="bg-sky-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                                <div className="h-40 bg-white rounded-lg mb-6 flex items-center justify-center p-4 border border-blue-100">
                                    {/* Document cycle diagram placeholder */}
                                    <div className="flex items-center gap-2">
                                        <FileText size={32} className="text-blue-600" />
                                        <RotateCw size={24} className="text-slate-400" />
                                        <CheckCircle2 size={32} className="text-green-600" />
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-[#001e4d] mb-4 min-h-[40px]">Efficiently Handle Iterative Review Cycles, Baseline Management, and Audit-Ready Documentation</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    CarpacSoft streamlines review cycles and document creation for your design history file/technical file to complement your quality management system.
                                </p>
                            </AnimatedSection>
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                GET DATASHEET
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS - Image 3 Top */}
                <section className="bg-sky-50 py-20 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-xl font-bold text-[#001e4d] max-w-4xl mx-auto mb-12">
                                CarpacSoft is the platform choice for <span className="underline decoration-[#00a3cc] underline-offset-4">8 of the top 10</span> global medical device companies and <span className="underline decoration-[#00a3cc] underline-offset-4">5 of the top 10</span> life sciences companies.
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 text-left">
                            {/* Quote 1 */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-orange-400 italic font-serif leading-relaxed">
                                    "CarpacSoft's automation allows us to efficiently manage each release. The tool allows us to reduce manual processes involved in generating traceability and focus our efforts on reviews of the trace matrix. Efficiency and speed are critical in managing our software cadence and to be competitive in the marketplace."
                                </p>
                                <div className="flex flex-col">
                                    <span className="font-bold text-xs text-slate-800">Sandhya Mitnala</span>
                                    <span className="text-[10px] text-slate-500 mb-1">Head of Quality and Regulatory</span>
                                    <a href="#" className="text-[#00a3cc] text-[10px] font-bold hover:underline">Read Customer Story</a>
                                </div>
                            </div>

                            {/* Quote 2 */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-orange-400 italic font-serif leading-relaxed">
                                    "With Review Center, we review things more incrementally, and we can catch changes, or things to fix, very early in the process. So, the cost at the end is less."
                                </p>
                                <div className="flex flex-col">
                                    <span className="font-bold text-xs text-slate-800">Carmen Pazos</span>
                                    <span className="text-[10px] text-slate-500 mb-1">Diagnostic Divisions R&D, Instruments Sr Manager</span>
                                    <a href="#" className="text-[#00a3cc] text-[10px] font-bold hover:underline">Read Customer Story</a>
                                </div>
                            </div>
                        </div>

                        {/* Logos */}
                        <div className="flex flex-wrap justify-center gap-12 items-center opacity-80 mb-12">
                            <div className="font-bold text-2xl text-blue-900 flex items-center gap-1">Abbott</div>
                            <div className="font-bold text-xl text-slate-600 flex items-center gap-1"><div className="w-4 h-4 rounded-full border-2 border-slate-600"></div>ABIOMED</div>
                            <div className="font-bold text-xl text-blue-500">ÖSSUR.</div>
                            <div className="font-bold text-2xl text-blue-800 tracking-tight">Medtronic</div>
                            <div className="font-bold text-xl text-slate-800 font-serif">Boston<br />Scientific</div>
                            <div className="font-bold text-xl text-teal-800 flex items-center gap-1"><div className="w-6 h-6 rounded-full bg-teal-500"></div>MERCK</div>
                        </div>

                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            MEET OUR CUSTOMERS
                        </Button>
                    </div>
                </section>

                {/* REGULATORY SECTION - Image 3 Bottom */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Simplify Regulatory Submissions and Audit Preparations with CarpacSoft</h2>
                            <p className="text-xs text-slate-600 max-w-5xl mb-8 leading-relaxed">
                                CarpacSoft for Medical Device & Life Sciences Development is a single powerful platform for medical device teams to manage design controls for device requirements and related risks, simplifying regulatory submissions and audit preparations while accelerating time to market. It is built to include standard medical device frameworks that support key medical device software standards and regulations, including:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 max-w-5xl mb-8">
                                {[
                                    "Regulatory Agencies: FDA 21 CFR 820.30, 21 CFR 11, EU MDR, EU IVDR",
                                    "Quality Systems: ISO 13485",
                                    "Risk Management Process and Methods: ISO 14971, IEC 60812",
                                    "Medical Software Development: IEC 62304, AAMI TIR 45 and SW 96",
                                    "Human Factors and Usability Engineering: HE 75, IEC 62366"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-[10px] font-bold text-[#001e4d]">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-[10px] text-slate-500 mb-8 max-w-5xl">
                                Areas within the medical device/life sciences space CarpacSoft supports include Medical Devices, Diagnostics (IVDs, LDTs, RUOs), Medical Device Software, Pharmaceuticals, Life Sciences, and more!
                            </p>

                            <div className="flex gap-4">
                                <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    WATCH WEBINAR
                                </Button>
                                <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD SOLUTION OVERVIEW
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* FEATURES INTERACTIVE - Image 4 */}
                <section className="bg-sky-50 py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-4">Features to Ensure Product Quality and Meet Safety-Critical Standards</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
                            <FeatureSidebar active={activeFeature} setActive={setActiveFeature} />
                            <FeatureContent active={activeFeature} />
                        </div>
                    </div>
                </section>

                {/* RISK WHITE PAPER - Image 5 Top */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="https://www.jamasoftware.com/wp-content/uploads/2023/07/Understanding-Integrated-Risk-Management-for-Medical-Devices-Cover-TN.png"
                                    alt="Whitepaper Cover"
                                    className="w-full shadow-2xl rounded-sm transform rotate-3 hover:rotate-0 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=500";
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Understanding Integrated Risk Management for Medical Devices</h2>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    Medical device companies continually assess potential risks to individuals in order to enhance safety and comply with regulatory requirements. Risk management in the context of ISO 14971 is an integrated process that not only includes teams in product development, quality, but also many other parts of an organization.
                                </p>
                                <p className="text-xs font-bold text-slate-700 mb-4">Download this free whitepaper to learn more about:</p>
                                <ul className="list-disc pl-5 space-y-2 text-xs font-bold text-[#001e4d] mb-8">
                                    <li>Best practices for integrated risk management</li>
                                    <li>How to integrate risk-based thinking into product development cycles</li>
                                    <li>The importance of having end-to-end traceability to improve risk management</li>
                                </ul>
                                <a href="#" className="text-[#00a3cc] text-xs font-bold flex items-center gap-1 hover:underline">
                                    {">> "} Download Free Whitepaper
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECURITY & SLA - Image 5 Bottom */}
                <section className="py-24 bg-sky-50 text-center">
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

                {/* SaMD WEBINAR - Image 6 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="https://www.jamasoftware.com/wp-content/uploads/2023/06/SaMD-Webinar-TN.png"
                                    alt="SaMD Webinar"
                                    className="w-full shadow-lg rounded-sm"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=500";
                                    }}
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Focus on Development Instead of Documentation with CarpacSoft for Software as a Medical Device</h2>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                    Software as a Medical Device (SaMD) often involves a struggle to balance demanding documentation with highly iterative software development cycles under tight deadlines. CarpacSoft for SaMD helps alleviate the burden of documentation to allow teams to focus on innovation and the efficient development of medical software products that are safe, effective, and compliant.
                                </p>
                                <p className="text-xs font-bold text-slate-700 mb-4">Download this free webinar to learn more about:</p>
                                <ul className="list-disc pl-5 space-y-2 text-xs font-bold text-[#001e4d] mb-8">
                                    <li>The new SaMD Framework, which features ISO-aligned document templates and customization capabilities and see it in action.</li>
                                    <li>Variant Management in CarpacSoft, the key concepts required, and how it can revolutionize your workflow.</li>
                                    <li>Insights into the nuances of navigating complex medical device software projects.</li>
                                    <li>A brief exploration of the impact of US and EU regulations shaping the software landscape.</li>
                                </ul>
                                <a href="#" className="text-[#00a3cc] text-xs font-bold flex items-center gap-1 hover:underline">
                                    {">> "} Download Free Webinar
                                </a>
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

export default MedicalDevice;



