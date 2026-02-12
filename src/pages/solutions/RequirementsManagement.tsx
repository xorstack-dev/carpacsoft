import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    CheckCircle,
    Users,
    FileText,
    Settings,
    Target,
    Eye,
    MessageSquare,
    Search,
    ArrowRight
} from "lucide-react";

// Integration logos
const integrationLogos = [
    { name: "Ansys", text: "Ansys", color: "text-slate-800" },
    { name: "Azure DevOps", text: "Azure DevOps", color: "text-blue-500" },
    { name: "Bugzilla", text: "Bugzilla", color: "text-red-500" },
    { name: "CA Technologies", text: "CA", color: "text-red-600" },
    { name: "Rally", text: "Rally", color: "text-orange-500" },
    { name: "HP", text: "hp", color: "text-blue-600" },
    { name: "Enterprise Architect", text: "ENTERPRISE ARCHITECT", color: "text-blue-800" },
    { name: "Jira", text: "Jira", color: "text-blue-600" },
    { name: "Micro Focus", text: "MICRO FOCUS", color: "text-green-600" },
    { name: "LDRA", text: "LDRA", color: "text-blue-800" },
    { name: "MathWorks", text: "MathWorks", color: "text-orange-600" },
    { name: "Tricentis qTest", text: "TRICENTIS qTest", color: "text-blue-700" },
    { name: "TestRail", text: "TestRail", color: "text-teal-600" },
    { name: "Vector", text: "VECTOR", color: "text-red-600" },
    { name: "Zephyr", text: "ZEPHYR", color: "text-blue-500" },
];

const RequirementsManagement = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>
                    {/* Geometric Pattern */}
                    <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <polygon points="200,0 400,100 400,300 200,400 0,300 0,100" fill="none" stroke="white" strokeWidth="1" />
                            <polygon points="200,50 350,125 350,275 200,350 50,275 50,125" fill="none" stroke="white" strokeWidth="1" />
                            <polygon points="200,100 300,150 300,250 200,300 100,250 100,150" fill="none" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                CarpacSoft's Requirements Management Enables Live Traceability™ Across Your Development Process
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed text-white">
                                Bridge engineering silos across development, test, and risk activities. Provide end-to-end compliance, risk mitigation, and process improvement with our intuitive, award-winning requirements management platform.
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

                {/* CENTRALIZE SECTION - Image 2 Middle */}
                <section className="bg-[#e0f7fa] py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Centralize Your Requirements Management Process</h2>
                            <p className="text-sm text-slate-600 max-w-4xl mx-auto">
                                Managing requirements in CarpacSoft speeds the product development process by saving time, strengthening alignment, and ensuring quality and compliance. Teams can create, review, validate, and verify requirements in one solution. With CarpacSoft, teams can:
                            </p>
                        </AnimatedSection>

                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Illustration */}
                            <AnimatedSection delay={100} className="md:w-2/5">
                                <div className="relative w-full h-64">
                                    {/* Team Illustration */}
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                        <div className="flex items-center">
                                            <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                                                <Users className="text-white" size={28} />
                                            </div>
                                            <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center -ml-4">
                                                <Users className="text-white" size={28} />
                                            </div>
                                            <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center -ml-4">
                                                <Users className="text-white" size={28} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Document Icons */}
                                    <div className="absolute right-0 top-0">
                                        <div className="w-20 h-24 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center">
                                            <FileText className="text-[#0ea5e9]" size={32} />
                                            <div className="mt-2 space-y-1">
                                                <div className="w-12 h-1 bg-slate-200 rounded"></div>
                                                <div className="w-8 h-1 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute right-8 bottom-0">
                                        <div className="w-16 h-20 bg-[#f59e0b] rounded-lg shadow-lg flex items-center justify-center">
                                            <FileText className="text-white" size={28} />
                                        </div>
                                    </div>
                                    {/* Connecting Lines */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                                        <path d="M80,100 Q150,50 220,40" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                                        <path d="M80,100 Q150,150 220,160" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    </svg>
                                </div>
                            </AnimatedSection>

                            {/* Checklist */}
                            <AnimatedSection delay={200} className="md:w-3/5">
                                <ul className="space-y-4">
                                    {[
                                        "Have an authoritative source of truth for clear visibility throughout the product development lifecycle",
                                        "Iterate in real time for informed decision making and consensus",
                                        "Support multiple product development methodologies and engineering disciplines",
                                        "Configure the requirements management software to align to industry best practices",
                                        "Visualize how tests track back to requirements to prove quality and compliance",
                                        "Reuse validated requirements to quickly replicate features across products"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-[#00a3cc] shrink-0 mt-0.5" size={18} />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        GET THE GUIDE
                                    </Button>
                                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        WATCH WEBINAR
                                    </Button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CarpacSoft ADVISOR SECTION - Image 3 */}
                <section className="bg-[#003366] py-24 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Logo */}
                            <AnimatedSection className="md:w-1/3">
                                <div className="flex flex-col items-start">
                                    <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-12 mb-2" />
                                    <span className="text-3xl font-light text-white">Advisor</span>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-2/3">
                                <h2 className="text-xl font-bold mb-6 text-white">Improve Requirements Quality with CarpacSoft Advisor™ to Avoid Costly Rework</h2>
                                <p className="text-xs text-blue-100 leading-relaxed mb-8 text-white">
                                    Ambiguous or conflicting requirement statements can cause issues that are costly to resolve if discovered late in the development process. They also make it difficult for teams to work together with a shared and clear understanding of the project goals. CarpacSoft Advisor's natural language processing (NLP) evaluates and scores requirements against INCOSE and EARS standards to improve quality and clarity. It streamlines the requirements writing and review process with easy-to-use authoring, editing, and batch analysis integrated inside CarpacSoft Cloud.
                                </p>
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* STREAMLINE SECTION - Image 3 Bottom */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-16 text-white">Streamline Your Product Development Process</h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
                            {[
                                {
                                    icon: <Settings className="text-[#0ea5e9]" size={40} />,
                                    title: "Increase Efficiency & Optimize Processes",
                                    desc: "Accurately capture and communicate requirements, goals, progress, and interdependencies to remove friction throughout the development process."
                                },
                                {
                                    icon: <Target className="text-[#f59e0b]" size={40} />,
                                    title: "Understand and Respond to Change",
                                    desc: "Identify implications of product changes to minimize late-stage changes and rework by ensuring development teams have the latest information to make informed decisions as requirements evolve."
                                },
                                {
                                    icon: <Eye className="text-[#0ea5e9]" size={40} />,
                                    title: "Establish Clarity & Visibility",
                                    desc: "Integrate CarpacSoft® requirements management and test case management with Jira task management and test automation solutions for broader visibility into what you're building and why."
                                }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={100 + i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-lg bg-[#002d5c] flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-[#f59e0b] font-bold text-sm mb-4">{item.title}</h3>
                                    <p className="text-xs text-blue-100 leading-relaxed">{item.desc}</p>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection delay={400}>
                            <h2 className="text-2xl font-bold mb-16 text-white">Change Management Made Simple</h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: <Search className="text-[#0ea5e9]" size={40} />,
                                    title: "Live Traceability",
                                    desc: "Easily navigate upstream and downstream relationships to understand the impact of change and coverage across development."
                                },
                                {
                                    icon: <FileText className="text-[#0ea5e9]" size={40} />,
                                    title: "Decision Tracking & Fast Reviews",
                                    desc: "Conduct virtual reviews of requirements, test cases, user needs, or test results and track discussions, changes, and critical decisions across teams and geographies."
                                },
                                {
                                    icon: <MessageSquare className="text-[#f59e0b]" size={40} />,
                                    title: "Real-Time Collaboration",
                                    desc: "Immediately note and prioritize critical decisions, pull in required contributors, and reference historical context to eliminate communication bottlenecks."
                                }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={500 + i * 100} className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-lg bg-[#002d5c] flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-[#f59e0b] font-bold text-sm mb-4">{item.title}</h3>
                                    <p className="text-xs text-blue-100 leading-relaxed">{item.desc}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* G2 GRID SECTION - Image 4 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* G2 Grid */}
                            <AnimatedSection className="md:w-1/2">
                                <div className="relative bg-white rounded-xl shadow-xl p-6 border">
                                    {/* Grid Labels */}
                                    <div className="absolute top-2 left-2 text-xs text-slate-500">Contenders</div>
                                    <div className="absolute top-2 right-2 text-xs text-green-600 font-bold">Leaders</div>
                                    <div className="absolute bottom-2 left-2 text-xs text-slate-500">Niche</div>
                                    <div className="absolute bottom-2 right-2 text-xs text-slate-500">High Performers</div>

                                    {/* Grid */}
                                    <div className="w-64 h-64 mx-auto relative border border-slate-200">
                                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                                            {Array.from({ length: 16 }).map((_, i) => (
                                                <div key={i} className="border border-slate-100"></div>
                                            ))}
                                        </div>
                                        {/* Jama Logo - Leader Position */}
                                        <div className="absolute top-2 right-2 w-10 h-10 bg-[#ea580c] rounded flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                            <span className="text-white font-bold text-xs">J</span>
                                        </div>
                                        {/* Other logos scattered */}
                                        <div className="absolute top-8 left-4 w-6 h-6 bg-blue-500 rounded text-white text-[8px] flex items-center justify-center">IBM</div>
                                        <div className="absolute top-12 left-12 w-6 h-6 bg-slate-600 rounded text-white text-[8px] flex items-center justify-center">@</div>
                                        <div className="absolute bottom-16 left-8 w-6 h-6 bg-orange-400 rounded text-white text-[8px] flex items-center justify-center">✓</div>
                                        <div className="absolute bottom-8 right-16 w-6 h-6 bg-teal-500 rounded text-white text-[8px] flex items-center justify-center">H</div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-1/2">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-8">See why CarpacSoft is the #1-rated requirements management software on the G2 Grid</h2>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {[
                                        { label: "WINTER 2026", badge: "Leader" },
                                        { label: "WINTER 2026", badge: "Best Relationship" },
                                        { label: "WINTER 2026 EMEA", badge: "Regional Leader" },
                                        { label: "WINTER 2026", badge: "Leader", sub: "ENTERPRISE" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-[8px] px-2 py-0.5 rounded-t font-bold">{item.label}</div>
                                            <div className="bg-white border-2 border-orange-400 px-3 py-2 rounded-b text-center">
                                                <div className="text-xs font-bold text-slate-700">{item.badge}</div>
                                                {item.sub && <div className="text-[8px] text-slate-500">{item.sub}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD REPORT
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS SECTION - Image 5 */}
                <section className="bg-[#f0f9ff] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold text-slate-700 mb-6">Seamlessly Integrate with Your Development Tech Stack</h2>
                            <p className="text-xs text-slate-600 max-w-4xl mx-auto mb-12">
                                Take advantage of our integration solutions with market-leading tools for design and simulation, task management, lifecycle management, quality assurance, and testing. Teams can work in their preferred tools while ensuring all requirements are verified and validated to achieve complete traceability.
                            </p>
                        </AnimatedSection>

                        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
                            {integrationLogos.map((logo, idx) => (
                                <AnimatedSection key={idx} delay={idx * 30}>
                                    <div className={`font-bold text-lg ${logo.color} hover:scale-110 transition-transform cursor-pointer`}>
                                        {logo.text}
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ESSENTIAL GUIDE SECTION - Image 5 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Book Illustration */}
                            <AnimatedSection className="md:w-1/3">
                                <div className="relative">
                                    <div className="w-48 h-56 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg shadow-2xl flex items-center justify-center transform hover:rotate-3 transition-transform">
                                        <FileText className="text-white" size={64} />
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f59e0b] rounded-lg opacity-50 transform rotate-12"></div>
                                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#8b5cf6] rounded-full opacity-50"></div>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-[#0d47a1] mb-6">Essential Guide to Requirements Management and Traceability</h2>
                                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                    Hardware and software complexity is rapidly increasing across all highly regulated industries. Smart organizations are mitigating risk by using modern requirements management tools to manage product, systems, and software development. Check out our Essential Guide to Requirements Management to up your requirements management game and stay ahead of the competition.
                                </p>
                                <Link to="/resources" className="text-[#00a3cc] font-bold text-sm flex items-center gap-2 hover:underline">
                                    <ArrowRight size={16} /> Learn more
                                </Link>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CUSTOMER QUOTE SECTION - Image 5 Bottom */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-xl font-bold mb-8 text-white">Transform Requirements Management for Clients</h2>
                            <blockquote className="text-lg text-orange-300 italic font-serif leading-relaxed mb-8">
                                "We love the fact that it's very easy to compare prior versions of requirements. It's easy to track, review, sign off and know how and why we did certain things."
                            </blockquote>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <span className="font-bold text-2xl text-white">alight</span>
                                <div className="text-left">
                                    <div className="font-bold text-white">Elizabeth Rosenberg</div>
                                    <div className="text-xs text-blue-200">Practice Leader Alight Solutions</div>
                                </div>
                            </div>
                            <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORY
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

export default RequirementsManagement;



