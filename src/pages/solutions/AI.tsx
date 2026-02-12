
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Target, BarChart3, ShieldCheck, FileText, Smartphone, Search, FileCheck, Brain, Minimize2, Accessibility, Users } from "lucide-react";

export default function AI() {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-white">
            <Header />

            {/* HERO SECTION - Image 2 */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background - Dark blue with geometric patterns */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1b4d82] to-[#0f3057] z-0">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                    }}></div>
                    {/* Blue overlay geometric shapes can be simulated with divs */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-500/10 transform skew-x-12 translate-x-20"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white flex flex-col items-start lg:items-start max-w-6xl">
                    {/* Logo/Tagline area if needed (Image 2 shows CarpacSoft logo at top left inside page, but header handles that usually. The hero text is strict) */}
                    <div className="mb-4">
                        <span className="font-semibold text-sky-300">CarpacSoft</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight max-w-3xl mb-6 text-white">
                        Streamline Development with AI-Powered CarpacSoft Advisor™
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
                        In today's fast-paced development environment, ensuring your requirements are clear, accurate, and aligned from the start is essential. CarpacSoft Advisor™, powered by advanced Artificial Intelligence and Natural Language Processing, brings requirements quality intelligence to your fingertips, transforming the way systems engineers approach requirements management.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/trial">
                            <Button className="bg-[#ff6b00] hover:bg-[#e65a00] text-white font-bold rounded-full px-8 py-6 text-sm tracking-wide uppercase">
                                GET STARTED
                            </Button>
                        </Link>
                        <Button
                            className="bg-[#00a8aa] hover:bg-[#008f91] text-white font-bold rounded-full px-8 py-6 text-sm tracking-wide uppercase"
                            onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            BOOK A DEMO
                        </Button>
                    </div>
                </div>

                {/* Right side abstract person thinking image placeholder */}
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3">
                    {/* SVG or simple placeholder to mimic the thoughtful person with overlays */}
                </div>
            </section>

            {/* SECTION 2 - Image 3: Cut Defects & Eliminate Ambiguity */}
            <section className="py-24 bg-white text-slate-800">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Row 1 - Content Block */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Cut Defects at the Source</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Experience the benefits of catching errors and quality issues during the authoring phase:
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-1 max-w-3xl mx-auto mb-24">
                        <div className="flex flex-col gap-6">
                            {[
                                "Write clear and accurate requirements using best practices like INCOSE rules and EARS notation.",
                                "Detect and address potential issues early, minimizing costly late-stage fixes.",
                                "Deliver products faster by improving collaboration and reducing rework."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start list-none">
                                    <div className="mt-1 bg-[#1e3a8a] rounded-full p-0.5 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-slate-700 text-sm md:text-[15px] font-medium leading-relaxed">
                                        <span className="text-slate-600 font-normal">{item}</span>
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100 my-24"></div>

                    {/* Row 2 - Content Block */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Eliminate Ambiguity and Align Teams from Day One</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Ambiguous requirements can derail projects. CarpacSoft Advisor helps you create requirements that unite your team around a shared vision:
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Write with Confidence:", text: "Receive AI-driven guidance to craft precise, high-quality requirements." },
                                { title: "Bridge Communication Gaps:", text: "Ensure stakeholders clearly understand project goals." },
                                { title: "Save Time and Avoid Missteps:", text: "Minimize miscommunication with standardized, unambiguous requirements." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start list-none">
                                    <div className="mt-1 bg-[#1e3a8a] rounded-full p-0.5 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-slate-700 text-sm md:text-[15px] font-medium leading-relaxed">
                                        <span className="text-sky-500">{item.title}</span> <span className="text-slate-600 font-normal">{item.text}</span>
                                    </span>
                                </li>
                            ))}
                        </div>

                        <div className="flex justify-center relative">
                            <div className="relative w-full max-w-[450px]">
                                {/* Background Blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-sky-50/50 rounded-full blur-3xl -z-10"></div>

                                <svg viewBox="0 0 300 200" className="w-full h-auto drop-shadow-xl">
                                    {/* Decorative dots and pluses */}
                                    <circle cx="20" cy="150" r="2" fill="#0ea5e9" />
                                    <text x="250" y="30" fill="#fcd34d" fontSize="20" fontWeight="bold">+</text>
                                    <circle cx="280" cy="160" r="2" fill="#0ea5e9" />
                                    <text x="10" y="50" fill="#0ea5e9" fontSize="15" fontWeight="bold">+</text>
                                    <circle cx="260" cy="180" r="3" fill="#0ea5e9" opacity="0.5" />
                                    <circle cx="220" cy="40" r="3" fill="#0ea5e9" opacity="0.5" />
                                    <text x="265" y="140" fill="#14b8a6" fontSize="20" fontWeight="bold">+</text>

                                    {/* People Icons Group */}
                                    <g transform="translate(10, 50)">
                                        {/* Blue Person */}
                                        <g transform="translate(0, 50)">
                                            <path d="M5 25 Q15 15 25 25 L25 40 L5 40 Z" fill="#0ea5e9" stroke="#1e293b" strokeWidth="2" />
                                            <circle cx="15" cy="15" r="8" fill="#0ea5e9" stroke="#1e293b" strokeWidth="2" />
                                        </g>
                                        {/* Purple Person */}
                                        <g transform="translate(15, 80)">
                                            <path d="M5 25 Q15 15 25 25 L25 40 L5 40 Z" fill="#8b5cf6" stroke="#1e293b" strokeWidth="2" />
                                            <circle cx="15" cy="15" r="8" fill="#8b5cf6" stroke="#1e293b" strokeWidth="2" />
                                        </g>
                                        {/* Yellow Person */}
                                        <g transform="translate(20, 20)">
                                            <path d="M5 25 Q15 15 25 25 L25 40 L5 40 Z" fill="#fcd34d" stroke="#1e293b" strokeWidth="2" />
                                            <circle cx="15" cy="15" r="8" fill="#fcd34d" stroke="#1e293b" strokeWidth="2" />
                                        </g>
                                        {/* Top Grayish Person */}
                                        <g transform="translate(25, 0)">
                                            <path d="M5 25 Q15 15 25 25 L25 40 L5 40 Z" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2" />
                                            <circle cx="15" cy="15" r="8" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2" />
                                        </g>
                                    </g>

                                    {/* Radar / Target element */}
                                    <g transform="translate(140, 100)">
                                        <circle cx="0" cy="0" r="40" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 2" />
                                        <circle cx="0" cy="0" r="30" fill="none" stroke="#1e293b" strokeWidth="1.5" />
                                        <circle cx="0" cy="0" r="20" fill="none" stroke="#1e293b" strokeWidth="2" />
                                        <circle cx="0" cy="0" r="10" fill="none" stroke="#1e293b" strokeWidth="2" />
                                        <circle cx="0" cy="0" r="3" fill="#fcd34d" stroke="#1e293b" strokeWidth="1.5" />
                                    </g>

                                    {/* Connection Line */}
                                    <path d="M60 140 L100 120 L135 150 L170 100 L210 60 L240 80"
                                        fill="none" stroke="#1e293b" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round" />

                                    {/* Circles on line */}
                                    <circle cx="60" cy="140" r="4" fill="#0ea5e9" stroke="#1e293b" strokeWidth="1.5" />
                                    <circle cx="100" cy="120" r="6" fill="#0ea5e9" stroke="#1e293b" strokeWidth="2" />
                                    <circle cx="135" cy="150" r="4" fill="#0ea5e9" stroke="#1e293b" strokeWidth="1.5" />
                                    <circle cx="170" cy="100" r="5" fill="#14b8a6" stroke="#1e293b" strokeWidth="1.5" />
                                    <circle cx="210" cy="60" r="7" fill="#0ea5e9" stroke="#1e293b" strokeWidth="2" />

                                    {/* Documents Group */}
                                    <g transform="translate(225, 70)">
                                        {/* Purple Doc */}
                                        <g transform="translate(0, 0)">
                                            <rect x="0" y="0" width="35" height="45" rx="4" fill="#8b5cf6" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="10" x2="28" y2="10" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="18" x2="28" y2="18" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="26" x2="20" y2="26" stroke="#1e293b" strokeWidth="2" />
                                            <circle cx="30" cy="35" r="6" fill="#0ea5e9" stroke="#1e293b" strokeWidth="1.5" />
                                        </g>
                                        {/* Green Doc */}
                                        <g transform="translate(20, 25)">
                                            <rect x="0" y="0" width="35" height="45" rx="4" fill="#14b8a6" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="10" x2="28" y2="10" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="18" x2="28" y2="18" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="26" x2="28" y2="26" stroke="#1e293b" strokeWidth="2" />
                                            <line x1="7" y1="34" x2="15" y2="34" stroke="#1e293b" strokeWidth="2" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* SECTION 3 - Image 4: Prevent Costly Errors */}
            <section className="py-24 bg-blue-50/50 text-slate-800">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Center Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Prevent Costly Errors Before They Happen</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Reduce errors and streamline development by addressing quality at the source:
                        </p>
                    </div>

                    {/* Content Block 1 - Two Columns */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">

                        {/* Left Column: Custom Illustration */}
                        <div className="flex justify-center md:justify-end pr-0 md:pr-12">
                            <div className="relative w-64 h-48">
                                {/* Background Blob */}
                                <div className="absolute inset-0 bg-orange-50 rounded-[2rem] transform -rotate-3 scale-110 -z-10"></div>
                                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-orange-100 rounded-full -z-10"></div>
                                <div className="absolute top-0 right-0 text-sky-400 text-xl font-bold">+</div>
                                <div className="absolute bottom-4 left-0 text-blue-200 text-6xl leading-none -z-10">.</div>
                                <div className="absolute top-1/2 -left-8 text-yellow-300 text-2xl">✦</div>

                                <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-lg">
                                    {/* Speedometer */}
                                    <g transform="translate(40, 60)">
                                        <circle cx="0" cy="0" r="35" fill="white" stroke="#1e293b" strokeWidth="2.5" />
                                        <path d="M-25 15 A 30 30 0 1 1 25 15" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                                        <path d="M0 0 L15 -20" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="0" cy="0" r="4" fill="#1e293b" />
                                        {/* Ticks */}
                                        <line x1="0" y1="-28" x2="0" y2="-35" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="20" y1="-20" x2="25" y2="-25" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="-20" y1="-20" x2="-25" y2="-25" stroke="#1e293b" strokeWidth="2" />
                                    </g>

                                    {/* Checklist */}
                                    <g transform="translate(110, 20)">
                                        {/* Connecting Line */}
                                        <path d="M-35 40 L0 40" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="0" y1="15" x2="0" y2="65" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="0" y1="15" x2="10" y2="15" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="0" y1="40" x2="10" y2="40" stroke="#1e293b" strokeWidth="2" />
                                        <line x1="0" y1="65" x2="10" y2="65" stroke="#1e293b" strokeWidth="2" />

                                        {/* Boxes */}
                                        <g transform="translate(10, 0)">
                                            {/* Item 1 */}
                                            <rect x="0" y="0" width="25" height="25" rx="4" fill="#8b5cf6" stroke="#1e293b" strokeWidth="2" />
                                            <path d="M6 13 L10 17 L19 8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                            {/* Item 2 */}
                                            <rect x="0" y="27.5" width="25" height="25" rx="4" fill="#0ea5e9" stroke="#1e293b" strokeWidth="2" />
                                            <path d="M6 40.5 L10 44.5 L19 35.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                            {/* Item 3 - X Mark */}
                                            <rect x="0" y="55" width="25" height="25" rx="4" fill="#14b8a6" stroke="#1e293b" strokeWidth="2" />
                                            <path d="M7 62 L18 73 M18 62 L7 73" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Right Column: List Content */}
                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Catch Mistakes Early:", text: "Real-time AI analysis detects issues before they escalate." },
                                { title: "Enhance Accuracy at Scale:", text: "Standardize requirement authoring for consistent quality." },
                                { title: "Speed Up Testing and Validation:", text: "Spend less time fixing and more time delivering results." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start list-none">
                                    <div className="mt-1 bg-[#1e3a8a] rounded-full p-0.5 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-slate-700 text-sm md:text-[15px] font-medium leading-relaxed">
                                        <span className="text-sky-500">{item.title}</span> <span className="text-slate-600 font-normal">{item.text}</span>
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-200 my-16"></div>

                    {/* Content Block 2 - Analyze and Optimize */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Analyze and Optimize Requirements in Real Time</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Maintain project momentum with AI-powered tools that provide immediate insights:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Single-Item Analysis:", text: "Get instant feedback on individual requirements for precise improvements." },
                                { title: "Batch Analysis for Teams:", text: "Evaluate multiple requirements simultaneously to keep projects on track." },
                                { title: "Monitor Quality Over Time:", text: "Track progress with quality scores and drive continuous improvement." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start list-none">
                                    <div className="mt-1 bg-[#1e3a8a] rounded-full p-0.5 shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-slate-700 text-sm md:text-[15px] font-medium leading-relaxed">
                                        <span className="text-sky-500">{item.title}</span> <span className="text-slate-600 font-normal">{item.text}</span>
                                    </span>
                                </li>
                            ))}
                        </div>
                        <div className="flex justify-center relative">
                            <div className="relative w-full max-w-[400px]">
                                {/* Background Blob */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50/50 rounded-full blur-3xl -z-10"></div>

                                <svg viewBox="0 0 220 180" className="w-full h-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
                                    {/* Decor Elements */}
                                    <circle cx="200" cy="160" r="4" fill="none" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse" />
                                    <text x="10" y="140" fill="#8b5cf6" fontSize="20" fontWeight="bold" className="animate-bounce">+</text>
                                    <circle cx="210" cy="40" r="2" fill="#0ea5e9" />
                                    <text x="10" y="50" fill="#0ea5e9" fontSize="10" fontWeight="bold">.</text>

                                    {/* Monitor Group */}
                                    <g transform="translate(20, 30)">
                                        {/* Monitor Stand */}
                                        <path d="M60 110 L50 130 L130 130 L120 110" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="40" y1="130" x2="140" y2="130" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />

                                        {/* Monitor Frame */}
                                        <rect x="0" y="0" width="180" height="110" rx="8" fill="white" stroke="#1e293b" strokeWidth="2.5" />

                                        {/* Purple Chin */}
                                        <path d="M2.5 95 H177.5 V102 A5.5 5.5 0 0 1 172 107.5 H8 A5.5 5.5 0 0 1 2.5 102 V95 Z" fill="#8b5cf6" />
                                        <rect x="80" y="98" width="20" height="2" rx="1" fill="#1e293b" opacity="0.5" />

                                        {/* Screen Content Area */}
                                        <g transform="translate(15, 15)">
                                            {/* Top Rectangles */}
                                            <rect x="0" y="0" width="30" height="12" rx="2" fill="#fcd34d" stroke="#1e293b" strokeWidth="1.5" />
                                            <rect x="35" y="0" width="30" height="12" rx="2" fill="#0ea5e9" stroke="#1e293b" strokeWidth="1.5" />
                                            <line x1="75" y1="6" x2="150" y2="6" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />

                                            {/* Line Chart */}
                                            <path d="M0 45 L20 35 L40 50 L60 25 L80 40 L100 20 L120 30 L140 15"
                                                fill="none"
                                                stroke="#1e293b"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* Bar Chart */}
                                            <g transform="translate(0, 60)">
                                                <rect x="0" y="10" width="6" height="15" fill="#1e293b" rx="1" />
                                                <rect x="12" y="5" width="6" height="20" fill="#1e293b" rx="1" />
                                                <rect x="24" y="15" width="6" height="10" fill="#1e293b" rx="1" />
                                                <rect x="36" y="8" width="6" height="17" fill="#1e293b" rx="1" />
                                                <rect x="48" y="2" width="6" height="23" fill="#1e293b" rx="1" />
                                                <rect x="60" y="12" width="6" height="13" fill="#1e293b" rx="1" />
                                                <rect x="72" y="6" width="6" height="19" fill="#1e293b" rx="1" />
                                                <rect x="84" y="18" width="6" height="7" fill="#1e293b" rx="1" />
                                                <rect x="96" y="4" width="6" height="21" fill="#1e293b" rx="1" />
                                                <rect x="108" y="14" width="6" height="11" fill="#1e293b" rx="1" />
                                                <rect x="120" y="8" width="6" height="17" fill="#1e293b" rx="1" />
                                                <rect x="132" y="16" width="6" height="9" fill="#1e293b" rx="1" />
                                                <rect x="144" y="5" width="6" height="20" fill="#1e293b" rx="1" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 4 - Image 5 Part A: Unlock Your Potential */}
            <section className="py-24 bg-[#063060] text-white">
                <div className="container mx-auto px-4 text-center max-w-6xl text-white">
                    <h2 className="text-3xl font-bold mb-16 text-white">Unlock Your Potential with CarpacSoft Advisor</h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
                        {/* Col 1 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6 flex justify-center w-full">
                                <Target className="w-16 h-16 text-sky-400" />
                            </div>
                            <h3 className="text-lg font-bold text-sky-400 mb-4 text-center w-full">AI-Powered Guidance for Precision</h3>
                            <ul className="space-y-4 text-white">
                                <li className="text-sm leading-relaxed"><span className="font-bold">AI Driven Recommendations:</span> Automatically evaluate requirements based on best practices like INCOSE rules and EARS notation.</li>
                                <li className="text-sm leading-relaxed"><span className="font-bold">Smart Suggestions:</span> Instantly flag unclear or incomplete requirements with actionable feedback.</li>
                            </ul>
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6 flex justify-center w-full">
                                <Search className="w-16 h-16 text-yellow-400" />
                            </div>
                            <h3 className="text-lg font-bold text-yellow-400 mb-4 text-center w-full">Continuous Improvement Through Insights</h3>
                            <ul className="space-y-4 text-white">
                                <li className="text-sm leading-relaxed"><span className="font-bold">Quality Monitoring:</span> Measure, track, and visualize requirement quality over time with detailed reports.</li>
                                <li className="text-sm leading-relaxed"><span className="font-bold">Collaboration Optimization:</span> Identify common gaps or trends to improve team performance and alignment.</li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div className="flex flex-col items-start">
                            <div className="mb-6 flex justify-center w-full">
                                <Smartphone className="w-16 h-16 text-orange-400" />
                            </div>
                            <h3 className="text-lg font-bold text-orange-400 mb-4 text-center w-full">Integrated Tools for Effortless Workflows</h3>
                            <ul className="space-y-4 text-white">
                                <li className="text-sm leading-relaxed"><span className="font-bold">Native Integration:</span> AI features are seamlessly embedded within CarpacSoft® Cloud, ensuring ease of use.</li>
                                <li className="text-sm leading-relaxed"><span className="font-bold">Efficiency at Scale:</span> Save time with features that streamline requirement authoring and validation for complex projects.</li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/product/jama-connect">
                        <Button className="bg-[#00a8aa] hover:bg-[#008f91] text-white font-bold rounded-full px-12 py-6 text-sm tracking-wide uppercase">
                            LEARN MORE
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SECTION 5 - Image 5 Part B: Leverage Generative AI & Form */}
            <section className="py-24 bg-[#02132b] text-white">
                <div className="container mx-auto px-4 border-b border-slate-800 pb-24 mb-12">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Leverage generative AI to improve efficiency, quality, and speed of product delivery.</h2>
                        <p className="text-blue-200 text-sm text-white">Improve efficiency, quality, and speed within your requirements process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mb-16">
                        <div className="text-center">
                            <div className="flex justify-center mb-4"><Brain className="w-10 h-10 text-orange-400" /></div>
                            <h3 className="text-sky-400 font-bold mb-2">Apply AI to Create Glossaries</h3>
                            <p className="text-xs text-slate-400 text-white">Eliminate the risk of misused terms and confusion across engineering disciplines.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4"><ShieldCheck className="w-10 h-10 text-blue-500" /></div>
                            <h3 className="text-sky-400 font-bold mb-2">Automatically Detect High-Risk Areas</h3>
                            <p className="text-xs text-slate-400 text-white">Analyze review comments, help teams focus their attention where it matters most.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4"><FileCheck className="w-10 h-10 text-teal-400" /></div>
                            <h3 className="text-sky-400 font-bold mb-2">Streamline Verification</h3>
                            <p className="text-xs text-slate-400 text-white">Accelerate time to market with AI-generated test cases derived from requirements.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4"><FileText className="w-10 h-10 text-purple-400" /></div>
                            <h3 className="text-sky-400 font-bold mb-2">Quickly Parse PDFs and Office Files</h3>
                            <p className="text-xs text-slate-400 text-white">Utilize AI to match existing IP or generate new requirements for review and collaboration.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button className="bg-[#00a8aa] hover:bg-[#008f91] text-white font-bold rounded-full px-12 py-6 text-sm tracking-wide uppercase">
                            LEARN MORE
                        </Button>
                    </div>
                </div>

                {/* Deep Blue/Gradient Form Area - Matches bottom of image 5 */}
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Left Text */}
                        <div className="bg-white rounded-xl shadow-2xl p-8 lg:w-1/2 text-slate-800 order-2 lg:order-1 lg:hidden">
                            {/* Mobile view form container if needed, but the design shows form on white card next to text */}
                        </div>

                        {/* Form Card */}
                        <div id="demo-form" className="w-full lg:w-5/12 bg-white rounded-lg p-8 text-slate-800 shadow-xl order-2 lg:order-1">
                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 text-center">Book Your Free Demo Today!</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="First Name*" className="bg-slate-50 border-slate-300" />
                                    <Input placeholder="Last Name*" className="bg-slate-50 border-slate-300" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Work Email*" className="bg-slate-50 border-slate-300" />
                                    <Input placeholder="Phone Number" className="bg-slate-50 border-slate-300" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="Industry" className="bg-slate-50 border-slate-300" />
                                    <Input placeholder="Company*" className="bg-slate-50 border-slate-300" />
                                </div>
                                <Select>
                                    <SelectTrigger className="bg-slate-50 border-slate-300">
                                        <SelectValue placeholder="Country*" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                    </SelectContent>
                                </Select>

                                <div className="text-center pt-2">
                                    <a href="#" className="text-xs text-blue-500 hover:underline">Your privacy is important to us.</a>
                                </div>

                                <div className="flex justify-center pt-2">
                                    <Button className="bg-[#00c569] hover:bg-[#00a859] text-white font-bold rounded-full px-12 py-6 uppercase tracking-wider w-full sm:w-auto shadow-lg shadow-green-200">
                                        SUBMIT
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Right Text Content (Actually on the right in image/design) */}
                        <div className="w-full lg:w-7/12 order-1 lg:order-2 text-left pt-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                                Don't Just Manage Requirements — Master Them
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed text-white">
                                Book Your Free Demo and experience the future of requirements management with Artificial Intelligence. CarpacSoft Advisor is your partner in delivering quality, innovation, and success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}



