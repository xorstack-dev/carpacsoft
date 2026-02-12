import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { DemoForm } from "@/components/sections/DemoForm";
import {
    CheckCircle,
    Play,
    FileText,
    Search,
    Eye,
    FileCheck,
    Link2,
    AlertTriangle,
    Award,
    Settings
} from "lucide-react";

const RequirementsTraceability = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 2 */}
                <section className="relative bg-gradient-to-br from-[#1a4f78] to-[#3b5998] text-white py-32 overflow-hidden">
                    {/* Background Pattern - Isometric Grid */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a4f78]/90 to-[#3b5998]/90"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Only CarpacSoft Delivers Live Requirements Traceability
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-xl leading-relaxed text-white">
                                Leverage real-time insights and seamless integrations to enhance productivity, reduce risks, and ensure compliance throughout your product development lifecycle.
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

                {/* ACHIEVE UNMATCHED SECTION - Image 2 Middle */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Achieve Unmatched Live Traceability™ Across the Development Cycle</h2>
                            <p className="text-sm text-slate-600 mb-10 leading-relaxed">
                                Only companies using CarpacSoft can define a Traceability Information Model, sync best-of-breed tools, measure traceability in real time, and auto-detect risk across the end-to-end development process.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD THE FREE GUIDE
                                </Button>
                                <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    WATCH THE WEBINAR
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* LIVE TRACEABILITY VIDEO SECTION - Image 2 Bottom */}
                <section className="bg-[#001e4d] py-24 text-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Video Card */}
                            <AnimatedSection className="md:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                                    <div className="bg-gradient-to-br from-[#8b5cf6] to-[#0ea5e9] p-8 aspect-video flex items-center justify-center relative">
                                        {/* Isometric Factory Illustration */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-3/4 h-3/4 bg-[#0ea5e9]/30 rounded-lg transform rotate-3"></div>
                                        </div>
                                        {/* Play Button */}
                                        <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-xl">
                                            <Play size={36} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-1/2">
                                <h2 className="text-[#00a3cc] font-bold text-xl mb-6">Live Traceability™</h2>
                                <p className="text-sm text-blue-100 leading-relaxed mb-8">
                                    Live Traceability occurs in real time as the product development process progresses to improve overall productivity (by ensuring engineers across disciplines are always working off the most recent and correct versions) and to reduce the risk of negative product outcomes (delays, defects, rework, cost overruns, recalls, etc.) through the early detection of issues.
                                </p>
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e4d] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* MEASURE & IMPROVE SECTION - Image 3 */}
                <section className="bg-gradient-to-b from-[#e0f7fa] to-white py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Measure and Improve Development Success Through Live Requirements Traceability</h2>
                            <p className="text-sm text-slate-600 mb-12">Better requirements traceability practices and higher Trace Scores are proven to:</p>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                            {[
                                "Reduce Cycle Times",
                                "Speed Time to Market",
                                "Increase Success Rates",
                                "Gain Visibility & Control",
                                "Reduce Iterations",
                                "Ensure Compliance"
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100} className="flex items-center gap-3 justify-center">
                                    <CheckCircle className="text-[#00a3cc]" size={24} />
                                    <span className="font-bold text-[#001e4d]">{item}</span>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* Higher Trace Scores Section */}
                        <AnimatedSection delay={400} className="mb-16">
                            <h3 className="text-xl font-bold text-[#001e4d] mb-12">Higher Trace Scores™ = Improved Product Quality and Faster Time to Market</h3>

                            <div className="flex flex-col md:flex-row justify-center gap-16 max-w-4xl mx-auto">
                                {/* Test Case Card */}
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center mb-6 relative">
                                        <div className="w-16 h-12 bg-[#0ea5e9] rounded flex flex-col justify-center px-2">
                                            <div className="h-1 bg-white/50 rounded mb-1"></div>
                                            <div className="h-1 bg-white/50 rounded mb-1"></div>
                                            <div className="h-1 bg-white/50 rounded"></div>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                                            <AlertTriangle size={16} className="text-white" />
                                        </div>
                                    </div>
                                    <h4 className="text-[#f59e0b] font-bold text-xs uppercase tracking-wide mb-2">TEST CASE EXECUTION AND DEFECT DETECTION</h4>
                                    <p className="text-xs text-slate-600 max-w-[200px]">Top quartile benchmarked outperformed bottom-quartile counterparts by 2.5x</p>
                                </div>

                                {/* Trophy Card */}
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-6 relative">
                                        <Award size={48} className="text-[#10b981]" />
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs">★</span>
                                        </div>
                                    </div>
                                    <h4 className="text-[#f59e0b] font-bold text-xs uppercase tracking-wide mb-2">TEST QUANTITY AND TESTS PASSED</h4>
                                    <p className="text-xs text-slate-600 max-w-[200px]">Top quartile performers outperformed bottom-quartile counterparts by nearly 2X.</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Benchmark Report */}
                        <AnimatedSection delay={600}>
                            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
                                {/* Report Cover */}
                                <div className="md:w-1/3">
                                    <div className="relative">
                                        <div className="w-40 h-52 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                                                <CheckCircle className="text-[#0ea5e9]" size={24} />
                                            </div>
                                            <p className="text-white text-[10px] font-bold text-center">Requirements Traceability Benchmark</p>
                                        </div>
                                        <div className="absolute -bottom-4 -left-4 w-32 h-40 bg-slate-100 rounded-lg -z-10 transform -rotate-6"></div>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="md:w-2/3 text-left">
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        CarpacSoft is the first to measure traceability thanks to our clients' participation in a benchmarking dataset of over 40,000 complex product development projects spanning aerospace, automotive, consumer electronics, industrial, medical device, semiconductor, space systems, and more.
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        All of this is made possible by our core product, CarpacSoft, which enables the largest community of engineers using requirements management SaaS (Software as a Service) in the world.
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        In this Requirements Traceability Benchmark, we examine how traceability is measured, and the business practices that separate top-quartile performers from the rest. This is the first large-scale, empirical research to confirm that higher levels of traceability correlate to cycle time and quality improvements.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button className="bg-[#001e4d] hover:bg-[#00132e] text-white rounded-full px-6 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            DOWNLOAD THE REPORT
                                        </Button>
                                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-6 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            WATCH THE WEBINAR
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* REALIZE LIVE TRACEABILITY SECTION - Image 4 */}
                <section className="bg-[#0ea5e9] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-6">Realize Live Requirements Traceability with CarpacSoft</h2>
                            <p className="text-sm text-blue-100 max-w-4xl mx-auto mb-4">
                                With CarpacSoft, teams can implement Live Traceability and measure it to continuously improve end-to-end systems development process performance even through siloed development, test, and risk activities.
                            </p>
                            <p className="text-xs text-blue-200 max-w-5xl mx-auto mb-16">
                                Requirements traceability across the entire systems development lifecycle is a core tenant of the systems engineering discipline and underpins industry standards to ensure higher quality, faster cycle times, and less costly rework. CarpacSoft is a modern solution for requirements management and traceability. In the platform, teams can:
                            </p>
                        </AnimatedSection>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
                            {[
                                { icon: <Eye size={32} />, title: "Provide backward and forward visibility for requirements" },
                                { icon: <Search size={32} />, title: "Easily conduct an impact analysis" },
                                { icon: <FileCheck size={32} />, title: "Generate trace reports" },
                                { icon: <Link2 size={32} />, title: "Get an overview of how your requirements tie together" }
                            ].map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100}>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors h-full flex flex-col items-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-[#f59e0b]">
                                            {item.icon}
                                        </div>
                                        <p className="text-xs font-medium">{item.title}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection delay={400}>
                            <Button className="bg-[#001e4d] hover:bg-[#00132e] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                VISIT OUR FEATURES PAGE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* AUTO-DETECT RISK SECTION - Image 4 Bottom */}
                <section className="bg-[#e0f7fa] py-24 text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Auto-Detect Risk and Prevent Defects, Rework, and Delays</h2>
                            <p className="text-sm text-slate-600 max-w-5xl mx-auto mb-16">
                                CarpacSoft is the ONLY requirements management solution that delivers Live Traceability across integrations with best-of-breed tooling. No changes are required to engineering teams' process, tools or field values for CarpacSoft to track the life of a requirement through all stages of your development lifecycle, in real time.
                            </p>
                        </AnimatedSection>

                        {/* Live Trace Explorer Mockup */}
                        <AnimatedSection delay={200}>
                            <div className="bg-white rounded-lg shadow-2xl max-w-5xl mx-auto overflow-hidden mb-12">
                                {/* Header Bar */}
                                <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-slate-600 ml-4">Live Trace Explorer | Semiconductor Product</div>
                                    <div className="ml-auto text-xs text-green-500 font-bold">Trace score: 40.87%</div>
                                </div>

                                {/* Content */}
                                <div className="p-8 bg-slate-50">
                                    {/* Traceability Flow Diagram */}
                                    <div className="flex items-center justify-between gap-4 mb-8">
                                        {/* Box 1 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-green-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Stakeholder Requirements</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Stakeholder Requirement</span><span className="font-bold">2,096</span></div>
                                                <div className="flex justify-between"><span>Open conversations</span><span>1</span></div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white animate-pulse">→</div>

                                        {/* Box 2 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-blue-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Product Requirements</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Product Requirement</span><span className="font-bold">4,911</span></div>
                                                <div className="flex justify-between"><span>Open conversations</span><span>0</span></div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="w-8 h-8 bg-[#0ea5e9] rounded-full flex items-center justify-center text-white animate-pulse" style={{ animationDelay: '0.5s' }}>→</div>

                                        {/* Box 3 */}
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow border-l-4 border-orange-500">
                                            <h4 className="font-bold text-xs text-slate-700 mb-2">Related test cases</h4>
                                            <div className="text-[8px] text-slate-500 space-y-1">
                                                <div className="flex justify-between"><span>Test count</span><span className="font-bold">289</span></div>
                                                <div className="flex justify-between"><span>Verification</span><span>279</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Relationship Diagram */}
                                    <div className="bg-white rounded-lg p-4 shadow">
                                        <h4 className="text-xs font-bold text-slate-700 mb-4">Relationship Diagram</h4>
                                        <div className="flex items-center justify-center gap-2 flex-wrap text-[8px]">
                                            <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">Stakeholder Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-blue-100 rounded text-blue-700">System Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-green-100 rounded text-green-700">System Architecture</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-yellow-100 rounded text-yellow-700">Subsystem Requirement</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-orange-100 rounded text-orange-700">User Story</span>
                                            <span className="text-slate-400">→</span>
                                            <span className="px-2 py-1 bg-red-100 rounded text-red-700">Test Case</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <Button className="bg-[#001e4d] hover:bg-[#00132e] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                GET A DEMO
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* BETTER PRODUCT DEVELOPMENT SECTION - Image 5 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Text */}
                            <AnimatedSection className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Better Product Development: Five Tips to Achieve Live Traceability</h2>
                                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                    Products have become smarter. They have more requirements and interdependencies, and there are more of them than ever. As a result, the product development process has become a matter of managing complexity. This paper discusses five tips that will help you produce the kind of traceability that allows teams to manage complexities more effectively and efficiently across the entire product development process.
                                </p>
                                <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    DOWNLOAD WHITEPAPER
                                </Button>
                            </AnimatedSection>

                            {/* Whitepaper Cover */}
                            <AnimatedSection delay={200} className="md:w-1/3">
                                <div className="bg-gradient-to-br from-[#1a4f78] to-[#003366] rounded-lg shadow-2xl overflow-hidden">
                                    <div className="p-4 border-b border-white/20">
                                        <img src="/jama-connect-logo-white.svg" alt="Jama" className="h-4" />
                                    </div>
                                    <div className="p-6">
                                        <div className="w-full h-24 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center rounded mb-4"></div>
                                        <h4 className="text-white text-sm font-bold">Better Product Development: 5 Tips to Achieve Live Traceability™</h4>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* ESSENTIAL GUIDE SECTION - Image 5 Bottom */}
                <section className="bg-gradient-to-br from-[#e0f7fa] to-[#a7f3d0] py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Book Icon */}
                            <AnimatedSection className="md:w-1/3">
                                <div className="relative">
                                    <div className="w-32 h-32 bg-[#0ea5e9] rounded-2xl flex items-center justify-center shadow-xl">
                                        <Settings size={48} className="text-white" />
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f59e0b]/30 rounded-full"></div>
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#10b981]/30 rounded-full"></div>
                                </div>
                            </AnimatedSection>

                            {/* Text */}
                            <AnimatedSection delay={200} className="md:w-2/3">
                                <h2 className="text-3xl italic font-serif text-[#0d47a1] mb-2">The Essential Guide to</h2>
                                <h3 className="text-2xl font-bold text-[#001e4d] mb-6">Requirements Management & Traceability</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                    Hardware and software complexity is rapidly increasing across all highly regulated industries. Smart organizations are mitigating risk by using modern requirements management (RM) tools to manage product, systems, and software development. Check out our Essential Guide to Requirements Management to up your RM game.
                                </p>
                                <Button className="bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                    LEARN MORE
                                </Button>
                            </AnimatedSection>
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

export default RequirementsTraceability;



