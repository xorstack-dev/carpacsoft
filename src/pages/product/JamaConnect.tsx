import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowRight,
  Cpu,
  Workflow,
  Link2,
  Shield,
  CheckCircle,
  Zap,
  Activity,
  Car,
  Send,
  Layers,
  Building2,
  Users,
  FileText,
  Settings,
  Target,
  Eye,
  MessageSquare,
  Search,
  ChevronRight,
  Database,
  GitBranch,
  Terminal,
  Code,
  Lock,
  FileKey,
  BarChart4,
  Plane,
  Stethoscope,
  Factory
} from "lucide-react";
import { DemoForm } from "@/components/sections/DemoForm";
import { cn } from "@/lib/utils";

const JamaConnect = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeKeyElement, setActiveKeyElement] = useState(0);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const customerLogos = [
    "Spacex", "NASA", "Caterpillar", "Siemens", "Philips",
    "Medtronic", "Deloitte", "Lockheed Martin", "BAE Systems"
  ];

  const keyElements = [
    {
      label: "Intelligence & AI",
      title: "Intelligence & AI",
      desc: "Improving the product development process requires the ability to measure development activity against what was expected to auto-detect areas of greatest risk. Only CarpacSoft provides a Live Trace Explorer™ which calculates real-time scores for requirements quality, coverage and test verification, to automatically identify areas of risk to be addressed.",
      extra: "CarpacSoft Advisor™ is the only native natural language processing (NLP) capability in the market to improve requirement quality by applying INCOSE and EARS rules.",
      linkText: "CarpacSoft Advisor™",
      linkUrl: "/product/advisor"
    },
    {
      label: "Workflow",
      title: "Workflow",
      desc: "Only CarpacSoft enables you to define the desired development process across best-of-breed tools with a Traceability Information Model (TIM). TIMs are configurable industry-specific frameworks that define the expected development process, ensure industry standard compliance, and enable the measurement of progress and the auto-detection of risk. Jama Connect uniquely brings the entire workflow of development online to create a single source of truth from requirement authoring, collaborating, reviewing, and managing requirement traceability, test coverage, risk assessments, and variants.CarpacSoft provides a complete workflow engine that enables organizations to define, manage and automate their development processes. From requirements capture through review, approval, and release — every step is tracked and traceable.",
      linkText: "",
      linkUrl: ""
    },
    {
      label: "Integrations",
      title: "Integrations",
      desc: "CarpacSoft embraces a best-of-breed world and provides the most integrations with the most robust capability. Our REST API and Excel Functions capabilities are the most complete in the industry to extend integrations to your homegrown tools and Excel files. We are also the only provider to fully support all vendor flavors of ReqIF with our Universal ReqIF capability for co-development, RFP responses and supply chain coordination.",
      linkText: "",
      linkUrl: ""
    }
  ];

  const benefits = [
    {
      id: "compliance",
      label: "Ensure Compliance & Manage Risk",
      title: "Ensure Compliance & Manage Risk",
      desc: "CarpacSoft is engineered to ensure quality with frameworks aligned to key industry standards which streamline design, development, testing, and risk management while maintaining compliance. Teams can quickly see the full historical context around a requirement when they contribute to a project—reducing the probability of errors as well as the time and overhead spent on risk analysis.",
      image: "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png",
      buttons: [{ label: "LEARN MORE", variant: "outline" as const, link: "/product/features" }],
      highlight: ""
    },
    {
      id: "efficiency",
      label: "Increase Process Efficiency",
      title: "Increase Process Efficiency",
      desc: "CarpacSoft allows teams to create catalogs of reusable versions and sets of requirements. With versioning, baselining, and change management of the requirements in place, teams are able to improve reuse, reduce design inconsistencies, and reduce the discrepancies found during testing, verification and validation.",
      image: "https://www.jamasoftware.com/media/2021/04/increase-process-efficiency.png",
      buttons: [{ label: "SEE HOW", variant: "outline" as const, link: "/product/features" }],
      highlight: ""
    },
    {
      id: "traceability",
      label: "Improve Traceability",
      title: "Improve Traceability",
      desc: "Improve change management with complete Live Traceability™, linking requirements across the entire development lifecycle. Clear traceability allows teams to maintain a formal change management process; perform impact analysis; and reveals interdependencies with the process—making it easier to bring in the right decision-makers at the right time.",
      image: "https://www.jamasoftware.com/media/2021/04/improve-traceability.png",
      buttons: [
        { label: "LEARN MORE", variant: "outline" as const, link: "/product/features" },
        { label: "GET A DEMO", variant: "filled" as const, link: "/company/contact" }
      ],
      highlight: "Live Traceability™"
    },
    {
      id: "reviews",
      label: "Streamline & Accelerate Reviews",
      title: "Streamline & Accelerate Reviews",
      desc: "CarpacSoft Review Center can serve as the single place for reviewers, approvers, and moderators to collect and manage all requirements and feedback for a project – in real time. Simplify the review and approval process with easy access for unlimited stakeholders to provide their feedback, resulting in quicker response times and faster review cycles.",
      image: "https://www.jamasoftware.com/media/2021/04/streamline-accelerate-reviews.png",
      buttons: [{ label: "LEARN MORE", variant: "outline" as const, link: "/product/features" }],
      highlight: ""
    },
    {
      id: "collaboration",
      label: "Enable Effective Collaboration",
      title: "Enable Effective Collaboration",
      desc: "Break down silos between engineering disciplines. Provide a shared workspace where hardware, software, and systems engineers can work together with full visibility into their interdependencies.",
      image: "https://www.jamasoftware.com/media/2021/04/enable-effective-collaboration.png",
      buttons: [{ label: "LEARN MORE", variant: "outline" as const, link: "/product/features" }],
      highlight: ""
    },
    {
      id: "jira",
      label: "Integrate with Jira®",
      title: "Integrate with Jira®",
      desc: "Synchronize requirements with development tasks. Bridge the gap between engineering and development tools to ensure that developers always have the most up-to-date requirements and status.",
      image: "https://www.jamasoftware.com/media/2021/04/integrate-with-jira.png",
      buttons: [{ label: "LEARN MORE", variant: "outline" as const, link: "/product/features" }],
      highlight: ""
    }
  ];

  const industrySolutions = [
    {
      title: "MEDICAL DEVICES",
      desc: "Manage design controls for device requirements and related risks on a single, powerful platform.",
      standards: "ISO 13485, FDA 820.30, FDA 21 CFR part 11, ISO 14971, IEC 60812, SEBoK",
      icon: Stethoscope,
      path: "/solutions/medical-device"
    },
    {
      title: "AUTOMOTIVE & SEMICONDUCTOR",
      desc: "Simplify functional safety and improve development cycles across a complex supplier ecosystem.",
      standards: "ISO 26262, ASPICE, IEC 60812, SEBoK",
      icon: Car,
      path: "/solutions/automotive"
    },
    {
      title: "AEROSPACE, DEFENSE & GOVERNMENT",
      desc: "Streamline complex safety-critical product development and accelerate time-to-market for air, space, sea, and defense systems.",
      standards: "ARP 4754/ED-79, DO-178C/ED-12C, DO-254/ED-80, SEBoK",
      icon: Plane,
      path: "/solutions/aerospace-defense"
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      desc: "Align stakeholder and business analyst requirements without slowing down Agile. Connect teams and projects with a unified solution for requirements and tests.",
      standards: "Agile, SAFe®, BABOK®",
      icon: Cpu,
      path: "/solutions/software-development"
    },
    {
      title: "INDUSTRIAL MACHINERY & TECHNOLOGY",
      desc: "Enable compliant, integrated product development across hardware and software teams. Supports manufacturers of industrial machinery and equipment.",
      standards: "IEC 60812, ISO 13485, SEBoK",
      icon: Factory,
      path: "/solutions/industrial-manufacturing"
    }
  ];

  const integrationGrid = [
    { logo: <GitBranch className="w-8 h-8 text-orange-600" />, name: "git", label: "Git Repository — CarpacSoft Integration Demo" },
    { logo: <Database className="w-8 h-8 text-blue-800" />, name: "CATIA No Magic", label: "CATIA Magic (Cameo) — CarpacSoft Integration Demo" },
    { logo: <Layers className="w-8 h-8 text-blue-600" />, name: "Jira", label: "Jira — CarpacSoft Integration Demo" },
    { logo: <Terminal className="w-8 h-8 text-slate-800" />, name: "OPEN API", label: "Automated Testing — CarpacSoft Integration Demo" },
    { logo: <Activity className="w-8 h-8 text-blue-500" />, name: "Azure DevOps", label: "Azure DevOps — CarpacSoft Integration Demo" },
    { logo: <Workflow className="w-8 h-8 text-sky-600" />, name: "windchill", label: "Windchill — CarpacSoft Integration Demo" },
    { logo: <Search className="w-8 h-8 text-pink-600" />, name: "XRAY", label: "Xray — CarpacSoft Integration Demo" },
    { logo: <Target className="w-8 h-8 text-blue-900" />, name: "LDRA", label: "LDRA CarpacSoft Integration Demo" },
    { logo: <Cpu className="w-8 h-8 text-red-600" />, name: "aras", label: "Aras — CarpacSoft Integration Demo" },
    { logo: <FileText className="w-8 h-8 text-teal-600" />, name: "TestRail", label: "TestRail — CarpacSoft Integration Demo" },
    { logo: <Settings className="w-8 h-8 text-blue-700" />, name: "Enterprise Architect", label: "Sparx Systems EA — CarpacSoft Integration Demo" },
    { logo: <Cpu className="w-8 h-8 text-orange-500" />, name: "MATLAB Simulink", label: "MATLAB Simulink — CarpacSoft Integration Demo" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#002d5b] py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00aed9]/20 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-3 mb-10">
                  <img src="/Logo.jpg" alt="CarpacSoft" className="h-8" />
                  <span className="text-2xl font-bold tracking-tight text-white/90">carpac<span className="text-[#01CFD1]">soft</span></span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  CarpacSoft is the Leading Solution for Requirements Management and Traceability
                </h1>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  The world's most innovative companies use CarpacSoft to manage requirements with Live Traceability™ to improve quality, reduce rework, prove compliance, and get to market faster.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/trial">
                    <Button className="bg-gradient-to-r from-[#f28e1c] to-[#ff9900] text-white font-semibold px-8 py-6 rounded-full hover:opacity-90 transition-all border-none">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/company/contact">
                    <Button variant="outline" className="border-2 border-[#00aed9] text-[#00aed9] bg-transparent hover:bg-[#00aed9]/10 font-semibold px-8 py-6 rounded-full">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 hidden lg:block text-center">
                <img
                  src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                  alt="CarpacSoft Platform Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* POWERFUL FEATURES SECTION - Image 2 */}
        <section className="py-20 bg-[#f0f4f8] relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23002d5b\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002d5b] mb-6 leading-tight">
                Powerful Features to Transform Your Development Process
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-5xl mx-auto leading-relaxed">
                CarpacSoft is the only software platform that intelligently improves product requirement quality, auto-detects product development risk, and measurably increases performance across multi-disciplinary teams developing products, systems, and software — while still allowing the use of their tools of choice.
              </p>
            </AnimatedSection>

            {/* Architecture Diagram + Description */}
            <AnimatedSection delay={100} className="max-w-6xl mx-auto mb-20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Left: Architecture Diagram */}
                <div className="w-full lg:w-3/5 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                  {/* Intelligence & AI Layer */}
                  <div className="mb-2">
                    <div className="flex items-start gap-3">
                      <div className="text-[10px] text-slate-500 font-semibold w-20 shrink-0 pt-2 leading-tight">Intelligence<br />& AI Layer</div>
                      <div className="flex-1">
                        {/* Advisor label */}
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1 text-right">Advisor <span className="text-slate-300">(AI Capabilities)</span></div>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex-1 min-w-[100px] bg-[#0077b6] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Live Trace Explorer</div>
                          <div className="flex-1 min-w-[100px] bg-[#0077b6] text-white text-[10px] font-bold text-center py-2 px-2 rounded">NLP Requirement Quality Scoring</div>
                          <div className="flex-1 min-w-[100px] bg-[#0077b6] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Multi-Sentiment Analysis</div>
                          <div className="flex-1 min-w-[100px] bg-[#0077b6] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Dashboards & Reporting</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-dashed border-slate-300 my-3 relative">
                    <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-2 text-[9px] text-slate-400 font-bold uppercase tracking-wider">Walk-Up Interface</span>
                  </div>

                  {/* Workflow Layer */}
                  <div className="mb-2">
                    <div className="flex items-start gap-3">
                      <div className="text-[10px] text-slate-500 font-semibold w-20 shrink-0 pt-2 leading-tight">Workflow<br />Layer</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2">
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Traceability Information Model</div>
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Requirements Management</div>
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded relative">
                            Review Center
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#002d5b] rounded-sm flex items-center justify-center">
                              <CheckCircle className="w-2 h-2 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Risk Management</div>
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Variant Management</div>
                          <div className="flex-1 min-w-[80px] bg-[#00a8cc] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Test Management</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-dashed border-slate-300 my-3 relative">
                    <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-2 text-[9px] text-slate-400 font-bold uppercase tracking-wider">REST API</span>
                  </div>

                  {/* Integration Layer */}
                  <div>
                    <div className="flex items-start gap-3">
                      <div className="text-[10px] text-slate-500 font-semibold w-20 shrink-0 pt-2 leading-tight">Integration<br />Layer</div>
                      <div className="flex-1">
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Interchange</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex-1 min-w-[80px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Pre-built Best-of-Breed Integrations</div>
                          <div className="flex-1 min-w-[60px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">ReqIF</div>
                          <div className="flex-1 min-w-[60px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Atlassian Jira</div>
                          <div className="flex-1 min-w-[60px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Excel Functions</div>
                          <div className="flex-1 min-w-[60px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Advanced Risk</div>
                          <div className="flex-1 min-w-[60px] bg-[#4a90d9] text-white text-[10px] font-bold text-center py-2 px-2 rounded">Robust Open API</div>
                        </div>
                        <div className="text-[8px] text-slate-400 mt-1 italic">Optional Add-On</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Description */}
                <div className="w-full lg:w-2/5">
                  {/* Logo */}
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/Logo.jpg" alt="CarpacSoft" className="h-10" />
                    <div>
                      <div className="text-xl font-bold text-[#002d5b] tracking-tight">carpac<span className="text-[#01CFD1]">soft</span></div>
                      <div className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Intelligent Engineering Management</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#002d5b] mb-4 leading-snug">
                    CarpacSoft – The First Platform to Intelligently Manage & Improve the Performance of the Product Development Process
                  </h3>

                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                    Companies are struggling to speed time to market and improve quality. Defects, delays, and rework are all too common across product development processes that span multiple functional teams and siloed tools. Attempts to piece together traceability after the fact through reporting have failed to solve the problem.
                  </p>

                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    CarpacSoft provides a digital thread across best-of-breed tools to enable the product development process to be measured and improved.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Three Key Elements */}
            <AnimatedSection delay={200} className="max-w-6xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-[#002d5b] text-center mb-10">
                CarpacSoft uniquely provides the three key elements required for intelligent engineering management:
              </h3>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Tab Buttons */}
                <div className="w-full lg:w-[240px] space-y-2 shrink-0">
                  {keyElements.map((element, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveKeyElement(index)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 px-5 text-left transition-all rounded-lg text-sm font-bold",
                        activeKeyElement === index
                          ? "bg-[#0077b6] text-white shadow-lg shadow-[#0077b6]/20"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      )}
                    >
                      <span>{element.label}</span>
                      <ChevronRight size={16} className={cn(activeKeyElement === index ? "text-white" : "text-[#0077b6]")} />
                    </button>
                  ))}
                </div>

                {/* Right: Content Panel */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-8 shadow-sm min-h-[200px]">
                  <h4 className="text-lg font-bold text-[#002d5b] mb-4">{keyElements[activeKeyElement].title}</h4>
                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                    {keyElements[activeKeyElement].desc}
                  </p>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {keyElements[activeKeyElement].linkText ? (
                      <>
                        <Link to={keyElements[activeKeyElement].linkUrl} className="text-[#0077b6] font-semibold hover:underline">
                          {keyElements[activeKeyElement].linkText}
                        </Link>
                        {" "}
                      </>
                    ) : null}
                    {keyElements[activeKeyElement].extra}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BENEFITS TABS SECTION */}
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
              <div className="w-full lg:w-[280px] space-y-1 shrink-0">
                {benefits.map((benefit, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 px-5 text-left transition-all text-sm font-bold",
                      activeTab === index
                        ? "bg-gradient-to-r from-[#00aed9] to-[#00c9a7] text-white rounded-lg shadow-md border-l-4 border-[#00d17e]"
                        : "bg-transparent text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"
                    )}
                  >
                    <span>{benefit.label}</span>
                    <ChevronRight size={16} className={cn(activeTab === index ? "text-white" : "text-slate-400")} />
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 lg:p-12 border border-slate-100 min-h-[400px]">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Text Content */}
                  <div className="w-full md:w-3/5">
                    <h3 className="text-xl md:text-2xl font-bold text-[#002d5b] mb-5">{benefits[activeTab].title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                      {benefits[activeTab].highlight ? (
                        <>
                          {benefits[activeTab].desc.split(benefits[activeTab].highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="text-[#00aed9] font-semibold">{benefits[activeTab].highlight}</span>
                              )}
                            </span>
                          ))}
                        </>
                      ) : (
                        benefits[activeTab].desc
                      )}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {benefits[activeTab].buttons.map((btn, i) => (
                        <Link key={i} to={btn.link}>
                          {btn.variant === "filled" ? (
                            <Button className="bg-[#f28e1c] hover:bg-[#e07d0a] text-white font-bold py-5 px-8 rounded-full uppercase text-[11px] tracking-widest border-none transition-all">
                              {btn.label}
                            </Button>
                          ) : (
                            <Button variant="outline" className="rounded-full py-5 px-8 border-[#00aed9] text-[#00aed9] hover:bg-sky-50 font-bold uppercase text-[11px] tracking-widest transition-all">
                              {btn.label}
                            </Button>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Illustration */}
                  <div className="w-full md:w-2/5 flex justify-center items-center">
                    <div className="relative">
                      <img
                        src={benefits[activeTab].image}
                        alt={benefits[activeTab].title}
                        className="max-w-full h-auto max-h-[280px] object-contain drop-shadow-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://www.jamasoftware.com/media/2021/04/ensure-compliance-manage-risk.png";
                        }}
                      />
                      <div className="absolute -z-10 bg-sky-100 rounded-full w-40 h-40 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-16">
              <Button className="bg-[#0066cc] hover:bg-[#004d99] text-white font-bold py-4 px-10 rounded-full uppercase text-xs tracking-widest border-none">
                SEE HOW IT WORKS
              </Button>
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
                <Link to="/resources/Report-g2-grid" target="_blank">
                  <Button className="bg-[#00d17e] hover:bg-[#00b86e] text-white font-bold px-10 py-7 rounded-full uppercase text-sm tracking-widest shadow-lg shadow-green-200/50 border-none transition-all active:scale-95">
                    GET THE REPORT
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS SECTION - Image 3 */}
        <section className="py-24 bg-gradient-to-br from-[#003d7a] via-[#002d5b] to-[#001d3a] text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16 px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Industry Solutions for Best-Practice Compliance and Process Improvement</h2>
              <p className="text-sm text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Eliminate manual compliance efforts and significantly reduce product delays, rework, and cost overruns with frameworks and templates aligned to industry standards.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {industrySolutions.map((solution, i) => (
                <AnimatedSection key={i} delay={i * 100} className="flex flex-col bg-white rounded-xl text-slate-800 h-full shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="p-8 flex flex-col items-center text-center flex-grow">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-white mb-6 p-1 border-4 border-sky-100 shadow-inner flex items-center justify-center">
                      <solution.icon className="w-10 h-10 text-[#002d5b]" />
                    </div>
                    <h3 className="font-bold text-[11px] uppercase tracking-wider text-[#002d5b] mb-4 min-h-[40px] flex items-center justify-center">
                      {solution.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-6 flex-grow">
                      {solution.desc}
                    </p>
                    <div className="w-full bg-slate-50 p-4 rounded-lg mb-8 min-h-[90px] flex items-center justify-center">
                      <p className="text-[10px] text-slate-400 font-mono font-bold uppercase leading-tight">
                        {solution.standards}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link to={solution.path} className="w-full block">
                      <Button className="w-full bg-[#05003B] hover:bg-black text-white font-bold py-3 px-0 rounded-full uppercase text-[10px] tracking-widest border-none">
                        LEARN MORE
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER QUOTE SECTION */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#002d5b] mb-12">
                Our customers rely on us to move faster, simplify compliance, and redefine the future.
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
                {customerLogos.map((logo) => (
                  <div key={logo} className="font-bold text-xl text-slate-700 tracking-tighter">
                    {logo}
                  </div>
                ))}
              </div>
              <Link to="/resources/library">
                <Button variant="outline" className="border-[#00aed9] text-[#00aed9] rounded-full px-10 py-6 font-bold uppercase text-[11px] tracking-widest hover:bg-sky-50">
                  SEE ALL CUSTOMER STORIES
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* INTEGRATION GRID SECTION - Image 4 */}
        <section className="py-24 bg-gradient-to-br from-[#001d3a] to-[#013444] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">See How the Top Tools Seamlessly Integrate with CarpacSoft</h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
              {integrationGrid.map((item, i) => (
                <AnimatedSection key={i} delay={i * 50} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.logo}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors cursor-pointer border-b border-transparent hover:border-sky-400 inline-block mb-1">
                      {item.label}
                    </p>
                    <p className="text-[10px] uppercase text-sky-400/60 font-bold tracking-widest">DEMO</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link to="/product/integrations">
                <Button className="rounded-full px-12 py-7 bg-transparent border-2 border-[#00aed9] text-[#00aed9] hover:bg-[#00aed9] hover:text-white font-bold uppercase text-xs tracking-widest transition-all">
                  VIEW ALL INTEGRATIONS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECURITY & RELIABILITY */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002d5b] mb-6 leading-tight">
                Enterprise-Grade <span className="text-[#f28e1c]">Security and Reliability</span> You Can Count On to Keep Your Data Protected and Compliant
              </h2>
              <p className="text-lg text-[#4a5568] leading-relaxed max-w-4xl mx-auto">
                CarpacSoft® is the only requirements management platform with enterprise-grade security across every layer. Unlike other vendors, CarpacSoft provides a <strong>SOC 2 Type II</strong> certified application and data center, plus <strong>touchless upgrades and built-in disaster recovery</strong>—reducing risk, ensuring compliance, and keeping your requirements secure and accessible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "TÜV SÜD Validated",
                  description: "CarpacSoft is suitably validated by TÜV SÜD for safety-related development",
                  iconColor: "text-[#005293]" // Brand color for TÜV
                },
                {
                  icon: Car,
                  title: "TISAX",
                  isImage: false, // Using icon for now, ideally an image
                  customIcon: <div className="text-3xl font-black italic tracking-tighter text-[#1e3a8a]">TISAX<span className="text-xs align-top font-normal">®</span></div>,
                  description: "CarpacSoft is TISAX Level 2 certified, ensuring secure automotive industry compliance",
                  iconColor: "text-[#1e3a8a]"
                },
                {
                  icon: Zap,
                  title: "OWASP Best Practices",
                  description: "CarpacSoft codes with OWASP best practices for security",
                  iconColor: "text-black"
                },
                {
                  icon: CheckCircle,
                  title: "SOC 2 Type II Certified",
                  description: "CarpacSoft is SOC2 Type 2 certified in both the server and application",
                  iconColor: "text-[#f28e1c]"
                },
                {
                  icon: Lock,
                  title: "Privacy Management",
                  description: "CarpacSoft ensures strong privacy management practices",
                  iconColor: "text-slate-800"
                },
                {
                  icon: FileKey,
                  title: "TLS Encryption",
                  customIcon: <div className="bg-[#0078d4] text-white font-bold px-2 py-1 rounded text-sm">TLS</div>,
                  description: "Transport Layer Security (TLS) ensures data transferred is secured and encrypted in CarpacSoft",
                  iconColor: "text-[#0078d4]"
                }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 50} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    {item.customIcon ? (
                      item.customIcon
                    ) : (
                      <item.icon className={cn("h-12 w-12 transition-all", item.iconColor)} />
                    )}
                  </div>
                  {/* Removed Title as per image style which mostly relies on the logo/icon, but the text is helpful. 
                      Actually the image has text below logos. Let's keep specific titles hidden if the icon is self-explanatory or redundant, 
                      but for accessibility and clarity I will keep them but maybe style them differently if needed. 
                      Wait, Image 1 has: [Logo] -> [Text Description]. It doesn't have a bold title like "TUV SUD Validated".
                      It just has the description. 
                      However, the "TISAX" and "OWASP" are big logos. 
                      I will try to mimic the image: Logo -> Description.
                  */}
                  <p className="text-slate-600 text-sm leading-relaxed px-4">
                    {item.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        {/* DISCOVERY CENTER SECTION - Matches Image 1 */}
        {showDemoForm ? (
          <DemoForm />
        ) : (
          <section className="py-20 bg-gradient-to-r from-[#e65c00] to-[#f97316] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute left-20 bottom-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-4 max-w-6xl mx-auto">
                {/* Illustration Side */}
                <AnimatedSection className="w-full lg:w-1/3 flex justify-center lg:justify-end pr-0 lg:pr-12">
                  <div className="relative w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20">
                    <div className="relative z-10">
                      <BarChart4 size={80} className="text-[#e65c00]" />
                    </div>
                    {/* Decorative Elements to match the graphic feel */}
                    <div className="absolute top-12 right-12 w-16 h-16 bg-[#00aed9] rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-14 left-14 w-8 h-8 bg-[#f59e0b] rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#e65c00]/20 rounded-full"></div>

                    {/* Magnifying Glass Overlay */}
                    <div className="absolute bottom-12 right-12 bg-white p-3 rounded-full shadow-lg transform translate-x-1/4 translate-y-1/4">
                      <Search size={32} className="text-[#002d5b]" />
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content Side */}
                <AnimatedSection delay={200} className="w-full lg:w-2/3 text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Discover all that Jama Connect has to offer!
                  </h2>
                  <p className="text-white/90 text-[15px] leading-relaxed mb-8 max-w-2xl font-medium">
                    Interested in learning more about how Jama Connect can help your organization achieve its goals? The Jama Connect Discovery Center lets you control your knowledge journey and get your questions answered, all at your own pace. We've put our most relevant and valuable content — from discovery to optimization — right at your fingertips!
                  </p>
                  <Link to="/resources/discovery" target="_blank">
                    <Button className="bg-[#00c7b7] hover:bg-[#00a699] text-white font-bold px-8 py-6 rounded-full uppercase text-sm tracking-wide border-none shadow-lg transition-transform active:scale-95">
                      LEARN MORE
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA - Book a Demo */}
        <section className="py-24 bg-gradient-to-r from-[#002d5b] to-[#003d7a] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white">Ready to Transform Your Product Development?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams who trust CarpacSoft for requirements management and traceability.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/trial">
                <Button className="bg-gradient-to-r from-[#f28e1c] to-[#ff9900] text-white font-bold px-10 py-7 rounded-full uppercase text-sm tracking-widest shadow-2xl border-none hover:scale-105 transition-transform">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/company/contact">
                <Button className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-bold px-10 py-7 rounded-full uppercase text-sm tracking-widest transition-all">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default JamaConnect;
