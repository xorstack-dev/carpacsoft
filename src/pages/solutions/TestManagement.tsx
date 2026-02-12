import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    BarChart,
    GitPullRequest,
    Eye,
    ShieldCheck,
    Clock,
    CheckCircle,
    Play
} from "lucide-react";

// Integration Logos for QA & Testing Ecosystem
const testIntegrations = [
    { name: "Ansys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ansys_logo.svg/2560px-Ansys_logo.svg.png", scale: "h-8" },
    { name: "Azure DevOps", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Azure_DevOps_Services_Logo.svg/1200px-Azure_DevOps_Services_Logo.svg.png", scale: "h-10" },
    { name: "Bugzilla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bugzilla_logo.svg/1200px-Bugzilla_logo.svg.png", scale: "h-10" },
    { name: "CA Technologies", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CA_Technologies_logo.svg/2560px-CA_Technologies_logo.svg.png", scale: "h-8" },
    { name: "Rally", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Rally_Software_Logo.svg/1200px-Rally_Software_Logo.svg.png", scale: "h-8" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png", scale: "h-10" },
    { name: "Enterprise Architect", logo: "https://sparxsystems.com/images/layout/sparx-logo-trans-2.png", scale: "h-8" },
    { name: "Jira", logo: "https://wac-cdn.atlassian.com/dam/jcr:e94285c5-e5ba-4df3-9e4a-446a81a53326/Jira%20Software-blue.svg", scale: "h-8" },
    { name: "Micro Focus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Micro_Focus_Logo.svg/2560px-Micro_Focus_Logo.svg.png", scale: "h-6" },
    { name: "LDRA", logo: "https://ldra.com/wp-content/uploads/2017/04/LDRA_Logo_RGB_Small.png", scale: "h-8" },
    { name: "MathWorks", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png", scale: "h-8" },
    { name: "Tricentis qTest", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Tricentis_Logo.png", scale: "h-8" },
    { name: "TestRail", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TestRail_Logo.png/800px-TestRail_Logo.png", scale: "h-8" },
    { name: "Vector", logo: "https://vector.com/portal/medien/vector_logo_rgb.png", scale: "h-6" },
    { name: "Zephyr", logo: "https://marketplace-cdn.atlassian.com/files/images/9c55b89c-5d66-4e56-8201-906d042125f3.png", scale: "h-8" },
];


const TestManagement = () => {
    // Animation state for the PULSE diagram
    const [view, setView] = useState('list'); // 'list' or 'chart'

    // Toggle view periodically to simulate interaction
    // useEffect(() => { ... }, []); // You can add this if needed, but simple hover/click is fine for now.

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#1a4f78] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78] to-[#144066] opacity-90"></div>
                    {/* Abstract schematic background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')]"></div>

                    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Improve Quality with Requirements-Based Test Management Software
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                Streamline testing, enhance collaboration, and ensure compliance, and gain confidence in complex product and systems development with CarpacSoft Test Management Center.
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

                        {/* Right Side Illustration - Placeholder for the isometric servers/charts in image */}
                        <div className="hidden md:block absolute right-0 top-0 h-full w-1/3 opacity-20">
                            <div className="relative w-full h-full">
                                <div className="absolute top-20 right-20 w-32 h-48 bg-white/20 transform skew-y-12"></div>
                                <div className="absolute bottom-20 right-40 w-40 h-32 bg-white/30 transform -skew-x-12"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BLUE BANNER - Launch Quality Products */}
                <section className="bg-[#007aff] py-20 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-white">Launch Quality Products with Confidence</h2>
                            <p className="text-sm text-blue-100 leading-relaxed mb-12">
                                Enable engineering and quality assurance teams to define, organize, and execute requirements-based test plans and test cases to ensure quality and compliance. With CarpacSoft Test Management Center, you can streamline reviews and approvals, perform manual testing, and integrate with trusted test execution and automation solutions.
                            </p>

                            <Button className="bg-[#00c7b7] hover:bg-[#00a89a] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                SEE HOW IT WORKS <span className="ml-2">▶</span>
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* PULSE DIAGRAM - Image 3 */}
                <section className="bg-[#f0f9ff] py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
                            {/* Diagram Side */}
                            <div className="md:w-1/2 relative">
                                {/* Main Image Base */}
                                <div className="bg-white p-2 rounded-lg shadow-xl border border-slate-200 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://www.jamasoftware.com/wp-content/uploads/2022/05/Test-Management-Center-1024x609.png"
                                        alt="Pulse Satellite Radio Test Management"
                                        className="w-full rounded"
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"; }}
                                    />
                                    {/* Overlay Magnifying Glass Effect */}
                                    <div className="absolute bottom-4 right-4 w-48 h-48 bg-white rounded-full border-4 border-slate-200 shadow-2xl overflow-hidden hidden lg:block animate-pulse-slow">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white z-10">
                                            {/* Mockup of Test Status List */}
                                            <div className="w-full space-y-2 text-[8px] font-mono">
                                                <div className="flex justify-between border-b pb-1"><span className="font-bold">Status</span><span>Pass</span></div>
                                                <div className="flex justify-between bg-red-100 p-1 rounded"><span>Failed</span><span>No</span></div>
                                                <div className="flex justify-between bg-yellow-100 p-1 rounded"><span>Blocked</span><span>No</span></div>
                                                <div className="flex justify-between bg-green-100 p-1 rounded"><span>Passed</span><span>Yes</span></div>
                                                <div className="flex justify-between bg-green-100 p-1 rounded"><span>Passed</span><span>Yes</span></div>
                                            </div>
                                            <div className="absolute top-2 right-2 p-1 bg-[#0052cc] rounded-full text-white"><Eye size={12} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-3xl font-bold text-[#001e4d] mb-6">Move Beyond Testing to Improve Decisions</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        Verification and validation of requirements in complex systems demands speed, traceability, and collaboration. CarpacSoft test management software links disparate processes, sources, and people to increase visibility and simplify your path to compliance with traceability of tests back to requirements. With the CarpacSoft test management system, teams can:
                                    </p>

                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Customize reports for proof of regulatory compliance",
                                            "Perform manual user-acceptance testing to design products with end-users in mind",
                                            "Trace failed tests to new and existing defects for quick resolution",
                                            "Reuse validated requirements to save time when testing consistent features across products"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="text-[#007aff] shrink-0 mt-1" size={18} />
                                                <span className="text-xs text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        WATCH WEBINAR
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID - Image 4 Top */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-white">Execute Requirements-Based Test Plans and Test Cases</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto mb-20 mt-16">
                                {/* Feature 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <GitPullRequest size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Connect Test Status to Requirements</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Connect requirements with test status to achieve end-to-end traceability and ensure all requirements are verified and validated.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <CheckCircle size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Streamline Reviews and Approvals</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Involve quality and testing teams earlier in the process to validate requirements and review and approve test plans.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <BarChart size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Gain Visibility With Test Management Dashboards</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Smart dashboards allow you to monitor test progress and requirements to identify roadblocks and improve decisions.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-16 text-white">Mitigate Risk During Product Development</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto mb-16">
                                {/* Feature 4 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <Eye size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Live Traceability</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Achieve complete traceability by connecting requirements with test results.
                                    </p>
                                </div>

                                {/* Feature 5 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <Clock size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Decision Tracking & Fast Reviews</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Shorten the time from ideation to value creation with intuitive, virtualized review and approvals.
                                    </p>
                                </div>

                                {/* Feature 6 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 mb-6 text-[#00c7b7]">
                                        <ShieldCheck size={64} strokeWidth={1} />
                                    </div>
                                    <h3 className="text-sm font-bold text-orange-400 mb-4">Prove Regulatory Compliance</h3>
                                    <p className="text-[12px] text-blue-100 leading-relaxed max-w-xs">
                                        Ensure each requirement is aligned with the test procedure to validate requirements and adhere to regulatory compliance.
                                    </p>
                                </div>
                            </div>

                            <Button className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide border-none text-xs">
                                GET STARTED
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* ECOSYSTEM - Image 4 Bottom */}
                <section className="bg-[#f0f9ff] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-24">
                            <h2 className="text-2xl font-bold text-slate-700 mb-6">Seamlessly Integrate with Your Existing QA & Testing Ecosystem</h2>
                            <p className="text-sm text-slate-600 max-w-4xl mx-auto mb-16">
                                Take advantage of our integration with top test automation solutions to pass test data automatically between specialized test tools and CarpacSoft. Teams can work in their preferred test management tools while ensuring all requirements are verified and validated to achieve complete traceability.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
                                {testIntegrations.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        {item.logo ? <img src={item.logo} alt={item.name} className={`${item.scale} object-contain mix-blend-multiply`} /> : <span className="font-bold text-slate-500">{item.name}</span>}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Customer Story Quote - Dark Blue Section */}
                    <div className="bg-[#000033] py-24 text-white">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <h2 className="text-2xl font-bold mb-12 text-white">How Össur Keeps Millions of People Moving</h2>
                            <blockquote className="text-lg text-orange-400 italic font-serif leading-relaxed mb-10">
                                "CarpacSoft provides an overview of where you are in the test process, so you can see exactly how much time you have already spent on test cases, and that helps better estimate the amount of time left with remaining test cases still needing to be done."
                            </blockquote>

                            <div className="flex items-center justify-center gap-6 mb-12">
                                {/* Össur Logo Placeholder */}
                                <div className="font-bold text-2xl tracking-widest text-white">ÖSSUR.</div>
                                <div className="text-left text-xs">
                                    <div className="font-bold">Matthías Kristjánsson, Product Lead Designer</div>
                                    <div className="text-slate-400">Össur</div>
                                </div>
                            </div>

                            <Button className="bg-[#00c7b7] hover:bg-[#00a89a] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                READ CUSTOMER STORY
                            </Button>
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

export default TestManagement;



