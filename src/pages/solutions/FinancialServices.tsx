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
    BarChart,
    Users,
    Search,
    Zap,
    Target,
    FileText,
    RefreshCw,
    Share2,
    Layout,
    GitBranch,
    Headphones,
    Check,
    CheckCircle2
} from "lucide-react";

// Sidebar Navigation Component
const SidebarNav = ({ active, setActive }: { active: string, setActive: (s: string) => void }) => {
    const items = [
        "Real-Time Collaboration",
        "Live Traceability",
        "Reports",
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
                {active === "Real-Time Collaboration" && "Ensure secure, cross-functional collaboration across teams and customers to improve communication and connect teams."}
                {active === "Live Traceability" && "Gain visibility into the development lifecycle with live traceability across requirements, tests, and risks."}
                {active === "Reports" && "Generate comprehensive reports to demonstrate compliance and progress to stakeholders."}
                {active === "Reviews & Approvals" && "Accelerate review cycles with clear, auditable approval workflows."}
                {active === "Test Management" && "Integrate testing into the development process for higher quality and reliability."}
            </p>

            <div className="relative w-full aspect-video bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <div className="absolute inset-0 p-2">
                    {/* UI Mockup - Collaborative View */}
                    <div className="bg-white w-full h-full border border-slate-200 shadow-sm flex flex-col">
                        <div className="h-8 border-b border-slate-200 flex items-center px-4 bg-slate-50">
                            <div className="w-4 h-4 rounded-full bg-slate-300 mr-2"></div>
                            <div className="text-[10px] text-slate-500">GDPR Compliance - V1.3</div>
                        </div>
                        <div className="flex-1 p-4 overflow-hidden relative">
                            <div className="flex gap-4 mb-4">
                                <div className="w-2/3 space-y-2">
                                    <div className="h-4 bg-slate-100 w-3/4 rounded"></div>
                                    <div className="h-4 bg-slate-100 w-full rounded"></div>
                                    <div className="h-4 bg-slate-100 w-5/6 rounded"></div>
                                </div>
                                <div className="w-1/3 bg-yellow-50 border border-yellow-200 p-2 rounded relative">
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">3</div>
                                    <div className="text-[8px] text-slate-500 mb-1">Comments</div>
                                    <div className="h-2 bg-slate-200 w-full mb-1"></div>
                                    <div className="h-2 bg-slate-200 w-3/4"></div>
                                </div>
                            </div>
                            <div className="border p-2 rounded border-blue-200 bg-blue-50/50">
                                <div className="text-[10px] font-bold text-blue-800 mb-2">Change Request #402</div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                                    <div className="space-y-1 w-full">
                                        <div className="h-2 bg-slate-200 w-full rounded"></div>
                                        <div className="h-2 bg-slate-200 w-1/2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6">
                                <div className="w-10 h-10 bg-[#001e4d] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                    <Play size={16} fill="white" className="text-white ml-0.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="mt-8 text-xs text-slate-700 space-y-2 list-disc pl-4 font-medium">
                <li>Increase efficiency</li>
                <li>Drive alignment</li>
                <li>Mitigate organizational risk</li>
            </ul>
        </div>
    );
};


const FinancialServices = () => {
    const [activeFeature, setActiveFeature] = useState("Real-Time Collaboration");

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#001e4d] text-white py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#00102a] opacity-95"></div>
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Accelerate and Simplify Complex Financial Services and Insurance Product Development
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-3xl leading-relaxed">
                                Gain visibility, compliance, and accountability while making your development process a model of efficiency. Mitigate risk and streamline development for financial service and insurance products with a modern requirements management solution. The world's most innovative companies use CarpacSoft to manage requirements with Live Traceability™ to improve quality, reduce rework, prove compliance, and get to market faster.
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

                {/* DATASHEET SELECTOR - Image 2 Top */}
                <section className="bg-sky-50 py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-slate-700 mb-6">CarpacSoft for Financial Services and Insurance</h2>
                            <p className="text-xs text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                                With increased challenges and a changing landscape, Financial Services and Insurance companies are facing new competitive pressures for digital advancement and there is increasing demand for new individualized products and connected services. With CarpacSoft, financial and insurance product development teams can establish transparency, alignment, and impact analysis with Live Traceability™ throughout the software development lifecycle.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    FINANCIAL DATASHEET
                                </Button>
                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    INSURANCE DATASHEET
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* KEY BENEFITS - Image 2 Bottom */}
                <section className="bg-[#00102a] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Benefits</h2>
                            <p className="text-[10px] text-slate-300 max-w-3xl mx-auto">
                                The successful development of complex financial services and insurance products requires that requirements are clearly defined, reviewed, approved, tested, and integrated throughout the development process. CarpacSoft helps development teams:
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Build business-critical solutions with accelerated speed to market",
                                    icon: <Layout size={48} className="text-yellow-400 mb-6" />
                                },
                                {
                                    title: "Increase product confidence by reducing risk",
                                    icon: <BarChart size={48} className="text-blue-400 mb-6" />
                                },
                                {
                                    title: "Enable cross-team visibility, collaboration, and alignment",
                                    icon: <Users size={48} className="text-teal-400 mb-6" />
                                },
                                {
                                    title: "Assess and reduce the impact of change",
                                    icon: <Search size={48} className="text-orange-400 mb-6" />
                                },
                                {
                                    title: "Accelerate adoption to drive business value",
                                    icon: <Zap size={48} className="text-yellow-400 mb-6" />
                                },
                                {
                                    title: "Align requirements to downstream development task in Jira Software",
                                    icon: <Target size={48} className="text-blue-400 mb-6" />
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

                {/* KEY FEATURES - Image 3 Top */}
                <section className="bg-[#000033] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <p className="text-[10px] text-slate-300">
                                In addition to requirements, test, and financial risk analysis, you'll get the following valuable features in CarpacSoft:
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-4xl mx-auto mb-16">
                            {[
                                { title: "Live Traceability", icon: <GitBranch size={40} className="text-teal-400 mb-4" /> },
                                { title: "Re-use requirements across programs", icon: <Server size={40} className="text-teal-400 mb-4" /> },
                                { title: "Manage product revisions", icon: <RefreshCw size={40} className="text-purple-400 mb-4" /> },
                                { title: "Export templates & reporting", icon: <FileText size={40} className="text-yellow-400 mb-4" /> },
                                { title: "Real-time collaboration", icon: <Share2 size={40} className="text-blue-400 mb-4" /> },
                                { title: "Impact analysis", icon: <Search size={40} className="text-yellow-400 mb-4" /> },
                                { title: "Flexible deployment models", icon: <Server size={40} className="text-orange-400 mb-4" /> },
                                { title: "Frameworks aligned to industry standards (BABOK, Agile, Scaled Agile)", icon: <Layout size={40} className="text-purple-400 mb-4" /> },
                                { title: "Customer success programs to get your teams up and running quickly", icon: <Headphones size={40} className="text-teal-400 mb-4" /> },
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex flex-col items-center">
                                    {item.icon}
                                    <p className="text-[10px] font-bold leading-relaxed max-w-[150px]">
                                        {item.title}
                                    </p>
                                </AnimatedSection>
                            ))}
                        </div>

                        <Button className="bg-transparent border border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            GET BUYER'S GUIDE
                        </Button>
                    </div>
                </section>

                {/* CUSTOMERS - Image 3 Bottom */}
                <section className="bg-white py-16 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-[#001e4d] mb-12">
                                CarpacSoft supports teams developing complex software for global insurance and financial institutions.
                            </h2>
                        </AnimatedSection>

                        {/* Logo Strip Placeholder */}
                        <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
                            <span className="font-bold text-lg text-slate-500 flex items-center gap-2"><div className="w-6 h-6 bg-yellow-400 rounded-full"></div>Advance<br />America</span>
                            <span className="font-bold text-lg text-slate-900 flex items-center gap-1"><div className="w-6 h-6 bg-red-600 rounded"></div>FARM BUREAU<br />INSURANCE</span>
                            <span className="font-bold text-xl text-blue-800">MIZUHO</span>
                            <span className="font-bold text-xl text-slate-500">Nasdaq</span>
                            <span className="font-bold text-xl text-yellow-600">Sun<br />Life Financial</span>
                        </div>

                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                            MEET OUR CUSTOMERS
                        </Button>
                    </div>
                </section>

                {/* TESTIMONIAL - Image 3 Bottom Section */}
                <section className="bg-[#000022] py-20 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-8 text-white">Modernize and Digitize the Financial and Insurance Product Development Requirements Management Process</h2>
                            <p className="text-xs text-orange-400 italic mb-10 leading-relaxed font-serif">
                                "Traceability in CarpacSoft makes it easier to assess the impact of a proposed change. It helps identify all areas we have to modify and then gives us the ability to route the change for review and approval with ease. A single source of truth also improves consistency. For example, having templates built into CarpacSoft — with all templates located in a single spot — means we're all using the same template. And we're following the same processes when writing, sending, and closing requirements."
                            </p>

                            <div className="flex flex-col items-center mb-10">
                                <div className="flex items-center gap-3 mb-2">
                                    {/* FB Logo small */}
                                    <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-xs">FB</div>
                                    <div className="text-left">
                                        <div className="font-bold text-sm">Heidi Bundy</div>
                                        <div className="text-[10px] text-slate-400">Business and Technical Analyst</div>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#000022] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                FARM BUREAU INSURANCE STORY
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* INTERACTIVE FEATURES - Image 4 Top */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-slate-700">Features to Accelerate Innovation in Financial Services Risk Management</h2>
                        </AnimatedSection>
                        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mb-16">
                            <SidebarNav active={activeFeature} setActive={setActiveFeature} />
                            <FeatureDisplay active={activeFeature} />
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-slate-500 font-bold mb-6">CarpacSoft is the modern alternative to IBM DOORS</p>
                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </section>

                {/* BENCHMARK REPORT - Image 4 Middle */}
                <section className="bg-gradient-to-b from-[#2c4c66] to-[#1a2b3c] py-20 relative overflow-hidden">
                    {/* Ripple Effect bg */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto relative z-10">
                        <AnimatedSection className="w-full md:w-1/3">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Benchmark Report" className="rounded shadow-2xl border-2 border-white/20" />
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3 text-white text-left">
                            <h2 className="text-2xl font-bold mb-6 text-white">Measure & Improve Development Success Through Traceability</h2>
                            <p className="text-[10px] font-bold text-slate-300 mb-4">
                                You can't improve what you can't measure. Only CarpacSoft can accelerate your systems engineering process with the Traceability Benchmark and Trace Scores™ to help improve your systems engineering process performance.
                            </p>
                            <h3 className="text-xl font-bold mb-4 text-white">Traceability Benchmark Report</h3>
                            <p className="text-[10px] text-slate-300 mb-8 max-w-lg">
                                The first-ever, large-scale, empirical research, confirms that higher levels of traceability correlate to cycle time and quality improvements. Top-performing companies are moving beyond after-the-fact compliance to Live Traceability.
                                To learn how traceability is measured, the business practices that separate top-quartile performers from the rest, and determine your Trace Score™, download this Requirements Traceability Benchmark.
                            </p>
                            <div className="flex gap-4">
                                <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1a2b3c] rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    GET THE REPORT
                                </Button>
                                <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1a2b3c] rounded-full px-6 py-2 uppercase text-[10px] font-bold tracking-wide">
                                    LEARN MORE
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* INTEGRATIONS - Image 4 Bottom */}
                <section className="bg-[#1DA1F2]/80 py-12 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl font-bold mb-8">CarpacSoft integrates with top-tier solutions</h2>
                        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto mb-8">
                            <span className="font-bold text-lg flex items-center gap-2">Jira Software</span>
                            <span className="font-bold text-lg flex items-center gap-2">Azure DevOps</span>
                            <span className="font-bold text-lg flex items-center gap-2">TRICENTIS qTest</span>
                            <span className="font-bold text-lg flex items-center gap-2">Rally Software</span>
                            <span className="font-bold text-lg flex items-center gap-2">digital.ai</span>
                        </div>
                        <p className="text-[10px] mb-8">
                            And even more integrations with other leading software — including automated test solutions— to accelerate and facilitate success across the entire product development lifecycle.
                        </p>
                        <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-2 uppercase text-[10px] font-bold tracking-wide">
                            LEARN MORE
                        </Button>
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

                {/* WHITEPAPER - Image 5 Bottom */}
                <section className="bg-sky-50 py-24">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <AnimatedSection className="w-full md:w-1/3 flex justify-center">
                            <div className="relative">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/checklist-2880927-2394600.png?f=webp" alt="Checklist Illustration" className="w-64 h-auto drop-shadow-xl" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200} className="w-full md:w-2/3">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">
                                Manage Growing Complexity and Delivery Quality While Complying With Strict Regulatory Mandates
                            </h2>
                            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                                Providing the best customer experiences quickly while complying with strict regulatory mandates poses a distinct product development challenge. With CarpacSoft, you can connect product teams and stakeholders in a central repository that automatically captures important conversations, changes and decisions and enables audits. This allows you to move fast with confidence.
                            </p>
                            <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                                Download this whitepaper to explore the 5 major challenges development teams face as they embark on agile transformation.
                            </p>

                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                DOWNLOAD WHITEPAPER
                            </Button>
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

export default FinancialServices;



