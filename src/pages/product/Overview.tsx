import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowRight, Play, Lightbulb, Settings, Link2, CheckCircle, ChevronRight,
  Plane, Car, Stethoscope, Cpu, Factory
} from "lucide-react";
import { cn } from "@/lib/utils";
import DemoForm from "@/components/sections/DemoForm";

const customerLogos = [
  "Collins Aerospace", "Deloitte", "ABIOMED", "Siemens", "Honeywell", "Boston Scientific"
];

const intelligenceTabs = [
  {
    id: "intelligence",
    icon: Lightbulb,
    title: "Intelligence & AI",
    content: {
      title: "Intelligence & AI",
      description: "Improving the product development process requires the ability to measure development activity against what was expected to auto-detect areas of greatest risk. Only CarpacSoft provides a Live Trace Explorer™ which calculates real-time scores for requirements quality, coverage and test verification, to automatically identify areas of risk to be addressed. CarpacSoft Advisor™ is the only native natural language processing (NLP) capability in the market to improve requirement quality by applying INCOSE and EARS rules."
    }
  },
  {
    id: "workflow",
    icon: Settings,
    title: "Workflow",
    content: {
      title: "Workflow",
      description: "Only CarpacSoft enables you to define the desired development process across best-of-breed tools with a Traceability Information Model (TIM). TIMs are configurable industry-specific frameworks that define the expected development process, ensure industry standard compliance, and enable the measurement of progress and the auto-detection of risk. CarpacSoft uniquely brings the entire workflow of development online to create a single source of truth from requirement authoring, collaborating, reviewing, and managing requirement traceability, test coverage, risk assessments, and variants."
    }
  },
  {
    id: "integrations",
    icon: Link2,
    title: "Integrations",
    content: {
      title: "Integrations",
      description: "CarpacSoft embraces a best-of-breed world and provides the most integrations with the most robust capability. Our REST API and Excel Functions capabilities are the most complete in the industry to extend integrations to your homegrown tools and Excel files. We are also the only provider to fully support all vendor flavors of ReqIF with our Universal ReqIF capability for co-development, RFP responses and supply chain coordination."
    }
  }
];

const benefits = [
  {
    label: "Live Traceability",
    title: "Live Traceability",
    desc: "Ensure product quality and improve change management with complete traceability across all project artifacts. Live Traceability™ allows you to see the downstream and upstream impact of every change in real-time, reducing risk and manual effort.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  },
  {
    label: "Real-time Collaboration",
    title: "Real-time Collaboration",
    desc: "Ensure secure, cross-functional collaboration across teams, customers, and complex supply chains. Bring everyone into the conversation to shorten milestone phases, reduce development cycles, and improve efficiency.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  },
  {
    label: "Review Center",
    title: "Review Center",
    desc: "Transition from a document-centric to a data-centric approach with efficient, scalable reviews. Capture feedback, decisions, and approvals in one place to maintain compliance and keep projects moving forward.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  },
  {
    label: "Test Management",
    title: "Test and Quality Management",
    desc: "Give your QA teams the ability to create and organize test plans, test cases, dashboards, and reports. Integrate testing directly into the product development lifecycle to catch defects early.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  },
  {
    label: "Risk Management",
    title: "Risk and Hazard Analysis",
    desc: "Simplify compliance with integrated risk management, FMEA worksheets and risk matrices. Identify and mitigate risks early in the process to ensure safety-critical product success.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  },
  {
    label: "Requirements Quality",
    title: "Requirements Quality",
    desc: "Improve requirements quality with AI-powered analysis to identify ambiguous or incomplete requirements. Leverage Natural Language Processing to ensure clarity and consistency across your documentation.",
    image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png"
  }
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState(intelligenceTabs[0]);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-jama-navy via-jama-navy to-blue-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <AnimatedSection className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-10">
                  <img src="/Logo.jpg" alt="CarpacSoft" className="h-8" />
                  <span className="text-2xl font-bold tracking-tight text-white/90">carpac<span className="text-[#01CFD1]">soft</span></span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                  CarpacSoft is the Leading Solution for Requirements Management and Traceability
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                  The world's most innovative companies use CarpacSoft to manage requirements with Live Traceability™ to improve quality, reduce rework, prove compliance, and get to market faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/trial">
                    <Button className="bg-jama-orange hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-md">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/company/contact">
                    <Button className="border-2 border-jama-blue bg-jama-blue text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-md">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection className="w-full lg:w-1/2 hidden lg:block">
                <div>
                  <img
                    src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                    alt="CarpacSoft Platform Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Powerful Features Section */}
        <section className="py-16 bg-jama-navy">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-white">
                Powerful Features to Transform Your Development Process
              </h2>
              <p className="text-lg text-white max-w-4xl mx-auto">
                CarpacSoft is the only software platform that intelligently improves product requirement quality, auto-detects product development risk, and measurably increases performance across multi-disciplinary teams developing products, systems, and software — while still allowing the use of their tools of choice.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                {/* Product Stack Diagram */}
                <div className="lg:w-3/5">
                  <img
                    src="https://www.jamasoftware.com/media/2025/07/Product-Stack-White-Background-1030x420.png"
                    alt="CarpacSoft Product Stack"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="lg:w-2/5">
                  <div className="text-white">
                    <img
                      src="/jama-logo.jpg"
                      alt="CarpacSoft Intelligent Engineering"
                      className="h-8 mb-4 brightness-0 invert"
                    />
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      CarpacSoft – The First Platform to Intelligently Manage & Improve the Performance of the Product Development Process
                    </h3>
                    <p className="text-white mb-4">
                      Companies are struggling to speed time to market and improve quality. Defects, delays, and rework are all too common across product development processes that span multiple functional teams and siloed tools. Attempts to piece together traceability after the fact through reporting have failed to solve the problem.
                    </p>
                    <p className="text-blue-100">
                      CarpacSoft provides a digital thread across best-of-breed tools to enable the product development process to be measured and improved.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Three Key Elements Tabs */}
            <AnimatedSection className="mt-20">
              <h3 className="text-2xl md:text-3xl font-medium text-white text-center mb-12 max-w-4xl mx-auto leading-tight">
                CarpacSoft uniquely provides the three key elements required for intelligent engineering management:
              </h3>

              <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 items-start">
                {/* Tab List - Sidebar */}
                <div className="lg:w-[320px] w-full space-y-2 shrink-0">
                  {intelligenceTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 px-6 text-left transition-all rounded-lg group shadow-sm",
                        activeTab.id === tab.id
                          ? "bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] text-white"
                          : "bg-white/10 text-white/80 hover:bg-white/20 border-none backdrop-blur-sm"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <tab.icon className={cn("h-5 w-5", activeTab.id === tab.id ? "text-white" : "text-[#00A3E0]")} />
                        <span className="font-medium text-base">{tab.title}</span>
                      </div>
                      <ArrowRight className={cn(
                        "h-4 w-4 transition-colors",
                        activeTab.id === tab.id ? "text-white" : "text-[#00A3E0]"
                      )} />
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 bg-white rounded-[20px] shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] p-10 lg:p-14 border border-white/10">
                  <h4 className="text-[#00A3E0] font-medium text-xl mb-4 tracking-wide uppercase">
                    {activeTab.content.title}
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-[17px]">
                    {activeTab.content.description}
                  </p>
                  <div className="mt-8">
                    <Link to="/product/jama-connect">
                      <Button variant="outline" className="rounded-full border-[#00A3E0] text-[#00A3E0] hover:bg-sky-50 px-8 py-5 font-bold text-sm tracking-widest transition-all">
                        LEARN MORE
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Customer Logos */}
        <section className="py-16 bg-jama-navy border-t border-white/10">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h3 className="text-xl text-white mb-8">
                Our customers rely on us to move faster, simplify compliance, and redefine the future.
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                {customerLogos.map((logo) => (
                  <div key={logo} className="text-white/60 text-lg font-medium">
                    {logo}
                  </div>
                ))}
              </div>
              <Link to="/resources/library" className="inline-block mt-8">
                <Button className="border-white text-white hover:bg-white hover:text-jama-navy rounded-md">
                  Read Customer Stories
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* BENEFITS TABS SECTION - Image 2 */}
        <section className="py-24 bg-[#f0f9ff]">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002d5b] mb-6 max-w-5xl mx-auto leading-tight">
                Explore the Benefits of Our Innovative Technology to Streamline Your Development Processes and Deliver Tangible Results
              </h2>
              <p className="text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
                We help solve the key challenge engineers face—complying with traceability requirements spanning siloed teams and tools in complex product, systems, and software development. CarpacSoft eliminates relying on email updates, inefficient design reviews, cumbersome data sharing, and quickly outdated spreadsheet-based collaboration.
              </p>
            </AnimatedSection>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-16">
              {/* Sidebar Tabs */}
              <div className="w-full lg:w-[350px] space-y-3 shrink-0">
                {benefits.map((benefit, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBenefitIndex(index)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 px-6 text-left transition-all rounded-r-none rounded-l-lg group font-bold text-sm border-r-4 transition-colors",
                      activeBenefitIndex === index
                        ? "bg-[#00aed9] text-white border-[#00d17e]"
                        : "bg-white text-slate-600 border-transparent hover:bg-slate-50"
                    )}
                  >
                    <span>{benefit.label}</span>
                    <ChevronRight size={18} className={cn(activeBenefitIndex === index ? "text-white" : "text-[#00aed9]")} />
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className="flex-1 bg-white rounded-2xl shadow-xl p-10 lg:p-14 border border-slate-100 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl font-bold text-[#002d5b] mb-6">{benefits[activeBenefitIndex].title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {benefits[activeBenefitIndex].desc}
                  </p>
                  <Button variant="outline" className="rounded-full px-10 py-6 border-[#00aed9] text-[#00aed9] hover:bg-sky-50 font-bold uppercase text-[11px] tracking-widest transition-all">
                    LEARN MORE
                  </Button>
                </div>
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="relative">
                    <img
                      src={benefits[activeBenefitIndex].image}
                      alt={benefits[activeBenefitIndex].title}
                      className="max-w-full h-auto drop-shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png";
                      }}
                    />
                    <div className="absolute -z-10 bg-sky-100 rounded-full w-48 h-48 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-16">
              <Link to="/resources/discovery">
                <Button className="bg-[#0066cc] hover:bg-[#004d99] text-white font-bold py-4 px-10 rounded-full uppercase text-xs tracking-widest border-none">
                  SEE HOW IT WORKS
                </Button>
              </Link>
              <Link to="/resources/features">
                <Button variant="outline" className="border-[#00aed9] text-[#00aed9] bg-white hover:bg-sky-50 font-bold py-4 px-10 rounded-full uppercase text-xs tracking-widest">
                  PLATFORM FEATURES
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* G2 GRID SECTION */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* G2 Grid Visualization */}
              <AnimatedSection className="w-full lg:w-1/2">
                <div className="relative bg-white rounded-xl shadow-2xl p-8 border border-slate-100 overflow-hidden">
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-wider text-slate-400 font-bold">Contenders</div>
                  <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-green-600 font-bold">Leaders</div>
                  <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-wider text-slate-400 font-bold">Niche</div>
                  <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-wider text-blue-600 font-bold">High Performers</div>

                  <div className="w-full aspect-square max-w-[340px] mx-auto relative border border-slate-100 bg-slate-50/30">
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-slate-200/50"></div>
                      ))}
                    </div>
                    {/* Brand Logo - Top Right Leader Position */}
                    <div className="absolute top-[10%] right-[10%] w-14 h-14 bg-gradient-to-br from-[#f28e1c] to-[#ff9900] rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-[0_10px_20px_-5px_rgba(242,142,28,0.4)] z-10">
                      <img src="/Logo.jpg" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                    </div>

                    {/* Other Competitor Logos */}
                    <div className="absolute top-[20%] left-[15%] w-8 h-8 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center text-[8px] font-bold text-blue-600">IBM</div>
                    <div className="absolute top-[35%] left-[25%] w-8 h-8 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center text-[8px] font-bold text-slate-700">PTC</div>
                    <div className="absolute top-[50%] left-[40%] w-8 h-8 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center text-[10px]">✓</div>
                    <div className="absolute bottom-[30%] right-[25%] w-8 h-8 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center text-[10px] text-blue-500 font-serif font-bold">C</div>
                    <div className="absolute bottom-[15%] left-[30%] w-8 h-8 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center text-[8px] font-bold">Siemens</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Text Content */}
              <AnimatedSection delay={200} className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002d5b] mb-10 leading-tight">
                  See why CarpacSoft is the #1-rated requirements management software on the G2 Grid
                </h2>

                <div className="flex flex-wrap gap-4 mb-12">
                  {[
                    { label: "WINTER 2026", badge: "Leader", color: "from-orange-400 to-orange-500" },
                    { label: "WINTER 2026", badge: "Best Relationship", color: "from-teal-400 to-teal-500" },
                    { label: "WINTER 2026 EMEA", badge: "Regional Leader", color: "from-rose-400 to-rose-500" },
                    { label: "WINTER 2026", badge: "Leader", sub: "ENTERPRISE", color: "from-amber-400 to-amber-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center min-w-[100px] transform hover:-translate-y-1 transition-transform">
                      <div className={cn("w-full text-white text-[9px] px-2 py-1 rounded-t-md font-bold text-center bg-gradient-to-r", item.color)}>
                        {item.label}
                      </div>
                      <div className="w-full bg-white border-x-2 border-b-2 border-slate-100 flex flex-col items-center justify-center py-4 rounded-b-md shadow-sm">
                        <div className="text-[13px] font-bold text-slate-800 leading-tight text-center px-2">{item.badge}</div>
                        {item.sub && <div className="text-[9px] text-slate-500 mt-1 font-bold tracking-tighter">{item.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/resources/Report-g2-grid">
                  <Button className="bg-[#00d17e] hover:bg-[#00b86e] text-white font-bold px-10 py-7 rounded-full uppercase text-sm tracking-widest shadow-lg shadow-green-200/50 border-none transition-all active:scale-95">
                    GET THE REPORT
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* INDUSTRY SPECIFIC SERVICES */}
        <section className="py-24 bg-[#0033a0] text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight text-white">
                Industry-specific services to ease the path to compliance
              </h2>
              <p className="max-w-4xl mx-auto text-blue-100 text-xl mb-20 leading-relaxed font-light">
                Our teams' years of industry-specific experience and thousands of client engagements allow us to bring best practices to bear, which maximize positive outcomes from your product development process.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {[
                  { title: "Aerospace & Defense", icon: Plane, desc: "Streamline safety-critical development and accelerate time-to-market.", standards: "ARP 4754/ED-79, DO-178C/ED-12C, DO-254/ED-80", path: "/solutions/aerospace-defense" },
                  { title: "Automotive & Semi", icon: Car, desc: "Simplify functional safety and improve cycles across ecosystems.", standards: "ISO 26262, ASPICE, IEC 60812, SEBoK", path: "/solutions/automotive" },
                  { title: "Medical Devices", icon: Stethoscope, desc: "Manage design controls for device requirements and risks.", standards: "ISO 13485, FDA 820.30, ISO 14971, IEC 60812", path: "/solutions/medical-device" },
                  { title: "Software Dev", icon: Cpu, desc: "Align stakeholder requirements without slowing down Agile.", standards: "Agile, SAFe®, BABOK®", path: "/solutions/software-development" },
                  { title: "Industrial Machinery", icon: Factory, desc: "Enable compliant product development for hardware & software.", standards: "IEC 60812, ISO 13485, SEBoK", path: "/solutions/industrial-manufacturing" },
                ].map((item, i) => (
                  <div key={i} className="bg-white text-slate-800 rounded-2xl p-8 flex flex-col items-center h-full shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                    <div className="w-24 h-24 rounded-full bg-blue-50 mb-6 flex items-center justify-center relative group">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
                      <item.icon className="w-12 h-12 text-[#0033a0] relative z-10" />
                    </div>
                    <h3 className="font-bold text-[#b45309] text-sm mb-4 uppercase tracking-wider h-10 flex items-center justify-center">{item.title}</h3>
                    <p className="text-xs mb-6 text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
                    <div className="text-[10px] text-slate-400 font-mono mb-8 bg-slate-50 p-3 rounded-lg w-full min-h-[60px] flex items-center justify-center uppercase">
                      {item.standards}
                    </div>
                    <Link to={item.path} className="w-full">
                      <Button className="w-full bg-[#05003B] hover:bg-black text-white text-xs font-bold py-3 rounded-full uppercase transition-all tracking-widest border-none">
                        LEARN MORE
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Demo Form CTA */}
        <DemoForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Overview;



