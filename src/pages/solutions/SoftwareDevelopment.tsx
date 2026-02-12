import { useState, useEffect } from "react";
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
    GitBranch,
    Repeat,
    Share2,
    Search,
    BookOpen,
    FileText,
    Clock,
    Target,
    BarChart2,
    Users,
    MessageSquare
} from "lucide-react";

// Custom Icon for Azure DevOps
const AzureDevOpsIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.73 1.353L.004 5.923l1.926 15.688 1.956.816 3.65-2.26.17-.113L6.96 24l9.16-5.877 7.876-4.524L4.73 1.353zm.185 20.306l-2.071-.861-1.169-9.522 7.838 12.036-4.598-1.653zm11.758-7.536l-8.086 5.188L2.52 7.02l2.365-2.288 11.788 9.391zm-.792-6.52l-9.53-7.587 17.58 11.534-8.05-3.947z" />
    </svg>
);

// Custom Jira Icon
const JiraIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M11.565 12.565h-5.04v-5.04a5.04 5.04 0 0 1 5.04 5.04zm-.008 5.76h-5.04v-5.04h5.04a5.04 5.04 0 0 1 0 5.04zm5.752-5.76h-5.04v-5.04h5.04a5.04 5.04 0 0 1 0 5.04z" />
    </svg>
);

// Custom Git Icon
const GitIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.604 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.605-.718.72-1.881.72-2.605 0-.718-.722-.718-1.884 0-2.605.162-.16.339-.283.528-.382V9.419L8.146 6.3V6.265l-5.692 5.69c-.603.607-.603 1.586 0 2.189l10.479 10.479c.604.604 1.582.604 2.188 0L23.546 13.11c.604-.605.604-1.584 0-2.18z" />
    </svg>
);


const SoftwareDevelopment = () => {
    // Animation state for the Traceable Agile diagram
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev >= 3 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* HERO SECTION - Image 1 */}
                <section className="relative bg-[#0d47a1] text-white py-32 overflow-hidden">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] opacity-90"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1573495804660-15571663b37a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/jama-connect-logo-white.svg" alt="CarpacSoft" className="h-8" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                Software Teams Choose CarpacSoft to Ensure Quality and Comply with Standards Without Slowing Down
                            </h1>

                            <p className="text-sm text-blue-100 mb-10 max-w-4xl leading-relaxed">
                                CarpacSoft improves quality and automates standards compliance through Live Traceability™ with no change required to developer tools or process.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0d47a1] rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide bg-transparent">
                                    SEE HOW IT WORKS
                                </Button>
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

                {/* TRACEABLE AGILE DIAGRAM - Image 2 */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                            {/* Interactive Diagram */}
                            <div className="md:w-1/2 relative bg-slate-50 p-8 rounded-xl shadow-inner border border-slate-200">
                                <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">Solution: Traceable Agile</h3>

                                {/* Step 1 */}
                                <div className={`transition-all duration-500 ${step === 1 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 mb-8 relative">
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">1</div>
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Auto Detect Risk</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs">Metadata from sprints in Jira are continually synched to associated requirements and test cases in CarpacSoft</p>
                                        </div>
                                        {/* Curved Arrow 1to2 */}
                                        {/* <div className="absolute top-10 left-4 w-1 h-16 border-l-2 border-dashed border-slate-300"></div> */}
                                    </div>
                                </div>

                                {/* Central Hub */}
                                <div className="relative h-40 w-full mb-8 flex justify-center items-center">
                                    <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-lg animate-pulse"></div>
                                    {/* Mockup of CarpacSoft UI */}
                                    <div className="bg-white p-2 rounded shadow-md border border-slate-200 w-48 z-10">
                                        <div className="flex gap-1 mb-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
                                        <div className="h-1 bg-slate-100 w-full rounded mb-1"></div>
                                        <div className="h-1 bg-slate-100 w-3/4 rounded"></div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                        <Repeat className="text-white" size={20} />
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className={`transition-all duration-500 ${step === 2 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 mb-8 justify-end text-right">
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Inspect & Determine Action</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs ml-auto">CarpacSoft continually calculates traceability & coverage scores to identify high risk areas to drill into and determine corrective action</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className={`transition-all duration-500 ${step === 3 ? 'scale-105 opacity-100' : 'opacity-50'}`}>
                                    <div className="flex items-center gap-4 justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[#001e4d] text-white flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                                        <div>
                                            <h4 className="text-[#0052cc] font-bold">Assign Tasks to Backlog</h4>
                                            <p className="text-[10px] text-slate-500 max-w-xs">Corrective action assigned in Jira to be addressed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center mt-6 gap-2 text-[#0052cc] font-bold">
                                    <JiraIcon className="w-6 h-6" />
                                    <span>Jira Software</span>
                                </div>
                                <div className="text-center text-[10px] text-[#00a3cc]">(no change to current developer behavior)</div>

                            </div>

                            {/* Text Content */}
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-3xl font-bold text-[#001e4d] mb-6">Achieve Speed AND Quality with Traceable Agile™</h2>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                        Traceable Agile <span className="text-orange-600 font-bold">speeds</span> the flow of software development and maintains the current and historical state of development <span className="text-orange-600 font-bold">quality</span> to auto-detect issues early
                                    </p>
                                    <Button variant="outline" className="border-[#00a3cc] text-[#00a3cc] hover:bg-[#00a3cc] hover:text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide">
                                        LEARN MORE
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTEGRATIONS BANNER - Image 3 Top */}
                <section className="bg-gradient-to-r from-[#29b6f6] to-[#0288d1] py-24 text-white text-center relative overflow-hidden">
                    {/* Circuit Board Trace Background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold mb-16">CarpacSoft Integrates with Top DevOps Tools</h2>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16">
                                {/* Jira */}
                                <div className="flex flex-col items-center group">
                                    <div className="flex items-center gap-3 mb-4 transform group-hover:scale-110 transition-transform">
                                        <JiraIcon className="w-12 h-12 text-blue-100" />
                                        <span className="text-3xl font-bold">Jira Software</span>
                                    </div>
                                    <p className="text-xs font-bold text-white/80">Jira – CarpacSoft Integration Demo</p>
                                </div>

                                {/* Git */}
                                <div className="flex flex-col items-center group">
                                    <div className="flex items-center gap-3 mb-4 transform group-hover:scale-110 transition-transform">
                                        <GitIcon className="w-12 h-12 text-orange-200" />
                                        <span className="text-3xl font-bold">git</span>
                                    </div>
                                    <p className="text-xs font-bold text-white/80">Git Repository – CarpacSoft Integration Demo</p>
                                </div>

                                {/* Azure DevOps */}
                                <div className="flex flex-col items-center group">
                                    <div className="flex items-center gap-3 mb-4 transform group-hover:scale-110 transition-transform">
                                        <AzureDevOpsIcon className="w-12 h-12 text-blue-200" />
                                        <span className="text-3xl font-bold">Azure DevOps</span>
                                    </div>
                                    <p className="text-xs font-bold text-white/80">Azure DevOps – CarpacSoft Integration Demo</p>
                                </div>
                            </div>

                            <p className="text-xs text-white/70 mb-12 max-w-4xl mx-auto">
                                And even more integrations with other leading software — including automated test solutions — to accelerate and facilitate success across the entire product development lifecycle.
                            </p>

                            <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-white/20">
                                LEARN MORE
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CARNEGIE MELLON SECTION - Image 3 Bottom */}
                <section className="bg-white py-24 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-2/3 h-full bg-slate-50 opacity-50 -skew-x-12 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <AnimatedSection>
                                    <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Carnegie Mellon, the Birthplace of CMMI, uses CarpacSoft for Master's Program</h2>
                                    <p className="text-xs text-slate-600 mb-8">
                                        CarpacSoft enables organizations to achieve higher levels of Capability Maturity Model Integration (CMMI) with Live Traceability.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-6 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            CMMI WHITEPAPER
                                        </Button>
                                        <Button className="bg-[#00a3cc] hover:bg-[#008fb3] text-white rounded-full px-6 py-3 uppercase text-[10px] font-bold tracking-wide">
                                            CARNEGIE MELLON CASE STUDY
                                        </Button>
                                    </div>
                                </AnimatedSection>
                            </div>
                            <div className="md:w-1/2">
                                <blockquote className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-red-800 italic text-slate-600 font-serif text-lg">
                                    "CarpacSoft makes your process and your knowledge visible. It enables changes and communication within the team and will make your team more productive."
                                    <footer className="mt-6 flex items-center gap-4 not-italic">
                                        <div className="w-12 h-12 bg-red-800 text-white flex items-center justify-center font-bold text-xs rounded-full">CMU</div>
                                        <div>
                                            <div className="font-bold text-[#001e4d] text-sm">Cécile Péraire</div>
                                            <div className="text-xs text-slate-500">Professor of Software Engineering, Carnegie Mellon</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS & FEATURES - Image 4 */}
                <section className="bg-[#001e4d] py-24 text-white text-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="mb-24">
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Benefits</h2>
                            <p className="text-xs text-blue-200 max-w-3xl mx-auto mb-16">
                                In the increasingly complex, competitive, and rapidly evolving software development industry, market forces are creating new challenges for developers. CarpacSoft is a software development platform designed to help your teams:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                                {[
                                    { icon: Clock, title: "Build business-critical solutions with accelerated speed to market", color: "text-amber-400" },
                                    { icon: BarChart2, title: "Increase product confidence by reducing risk", color: "text-amber-400" },
                                    { icon: Users, title: "Enable cross-team visibility, collaboration, and alignment", color: "text-purple-400" },
                                    { icon: Search, title: "Assess and reduce the Impact of change", color: "text-amber-400" },
                                    { icon: Target, title: "Accelerate adoption to drive business value", color: "text-amber-400" },
                                    { icon: CrosshairIcon, title: "Integrate key solutions including Jira Software®", color: "text-blue-400" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <item.icon size={48} className={`mb-6 ${item.color}`} strokeWidth={1.5} />
                                        <p className="text-xs font-bold px-8">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Blue Divider Section */}
                        <div className="bg-[#0066cc] py-16 -mx-4 md:-mx-20 px-4 mb-0">
                            <div className="container mx-auto">
                                <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                                <p className="text-sm text-blue-100 max-w-3xl mx-auto mb-16">
                                    In addition to CarpacSoft's standard requirements, test, and risk analysis management, you'll get the following valuable features:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
                                    {[
                                        { icon: Server, title: "Reuse and baseline management" },
                                        { icon: MessageSquare, title: "Real-time collaboration" },
                                        { icon: GitBranch, title: "Live traceability" },
                                        { icon: Share2, title: "Frameworks aligned to software development industry standards (BABOK, Agile, Scaled Agile)" },
                                        { icon: FileText, title: "Export templates & reporting" },
                                        { icon: Headphones, title: "Customer success programs to get your teams up and running quickly" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <item.icon size={48} className="mb-6 text-[#00c7b7]" strokeWidth={1.5} />
                                            <p className="text-xs font-bold px-8">{item.title}</p>
                                        </div>
                                    ))}
                                </div>

                                <Button className="bg-[#000033] hover:bg-black text-white rounded-full px-8 py-3 uppercase text-[10px] font-bold tracking-wide border border-white/20">
                                    DOWNLOAD DATASHEET
                                </Button>
                            </div>
                        </div>

                        {/* Customer Quote Bottom */}
                        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-6xl mx-auto">
                            <div>
                                <p className="text-sm italic font-serif leading-relaxed mb-6">
                                    "Our team cannot stop saying great things about CarpacSoft! Its efficiency and intuitiveness have turned requirements workshops from a multi-day event to a 6 hour meeting. Teams adopted the platform so fast, we needed to go back to Jama to get additional licenses (twice)!"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="font-bold text-xs uppercase tracking-wider">Jim Bolton</div>
                                    <div className="text-xs text-blue-300">WorkForce Software</div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm italic font-serif leading-relaxed mb-6">
                                    "CarpacSoft is a robust solution for requirements management. It allows us to respond in a quicker, more agile and auditable way as the program scales."
                                </p>
                                <div className="mb-4">
                                    <span className="text-[#00a3cc] font-bold text-xs uppercase cursor-pointer hover:underline">READ CUSTOMER STORY</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="font-bold text-xs uppercase tracking-wider">Nicholas "Donnie" Laughton</div>
                                    <div className="text-xs text-blue-300">Director, Software Architecture and Engineering, Telesat</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECURITY SECTION - Image 4 Bottom */}
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

// Helper Icons
const CrosshairIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" /></svg>
)
const Headphones = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
)

export default SoftwareDevelopment;



