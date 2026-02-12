import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Play, ExternalLink, ChevronRight, Check, X, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import DemoForm from "@/components/sections/DemoForm";

const industryTabs = [
  {
    id: "aerospace",
    label: "Aerospace & Defense",
    title: "Traceability Information Model – Airborne Systems",
    learnMoreLink: "/solutions/aerospace-defense",
    image: "https://www.jamasoftware.com/media/2024/09/airborne-tim-diagram.jpg"
  },
  {
    id: "aeco",
    label: "AECO",
    title: "Traceability Information Model – AECO Projects",
    learnMoreLink: "/solutions/aeco-solutions",
    image: "https://www.jamasoftware.com/media/2024/09/aeco-tim-diagram.jpg"
  },
  {
    id: "automotive",
    label: "Automotive",
    title: "Traceability Information Model – Automotive Functional Safety/Security",
    learnMoreLink: "/solutions/automotive",
    image: "https://www.jamasoftware.com/media/2024/09/automotive-tim-diagram.jpg"
  },
  {
    id: "consumer-electronics",
    label: "Consumer Electronics",
    title: "Traceability Information Model – Consumer Electronics (ICE)",
    learnMoreLink: "/solutions/ai",
    image: "https://www.jamasoftware.com/media/2024/09/ice-tim-diagram.jpg"
  },
  {
    id: "financial",
    label: "Financial Services",
    title: "Traceability Information Model – Financial Services & Insurance",
    learnMoreLink: "/solutions/financial-services",
    image: "https://www.jamasoftware.com/media/2024/09/insurance-tim-diagram.jpg"
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Traceability Information Model – Industrial Machinery & Technology",
    learnMoreLink: "/solutions/industrial-manufacturing",
    image: "https://www.jamasoftware.com/media/2024/09/industrial-tim-diagram-scaled.jpg"
  },
  {
    id: "medical",
    label: "Medical Device",
    title: "Traceability Information Model – Medical Device",
    learnMoreLink: "/solutions/medical-device",
    image: "https://www.jamasoftware.com/media/2024/09/medical-device-tim-diagram.jpg"
  },
  {
    id: "oil-gas",
    label: "Oil & Gas",
    title: "Traceability Information Model – Oil & Gas Products/Standards",
    learnMoreLink: "/solutions/oil-and-gas",
    image: "https://www.jamasoftware.com/media/2024/09/oil-gas-tim-diagram.jpg"
  },
  {
    id: "semiconductor",
    label: "Semiconductor",
    title: "Traceability Information Model – Semiconductor",
    learnMoreLink: "/solutions/semiconductors",
    image: "https://www.jamasoftware.com/media/2025/11/Semiconductors-TIM-Interoperability-1.png"
  },
  {
    id: "software-delivery",
    label: "Software Delivery",
    title: "Traceability Information Model – Software Delivery",
    learnMoreLink: "/solutions/software-development",
    image: "https://www.jamasoftware.com/media/2024/09/software-delivery-tim-diagram.jpg"
  },
  {
    id: "software-development",
    label: "Software Development",
    title: "Traceability Information Model – Software Development",
    learnMoreLink: "/solutions/software-development",
    image: "https://www.jamasoftware.com/media/2024/09/software-development-tim-diagram.jpg"
  },
];

const bestOfBreedTools = [
  {
    title: "DESIGN AND SIMULATION",
    desc: "CarpacSoft is the only model-based requirements management solution to seamlessly integrate with MBSE and SysML tools.",
    tools: ["Ansys", "Capella", "Enterprise Architect", "MathWorks", "CATIA No Magic"]
  },
  {
    title: "TASK MANAGEMENT",
    desc: "Achieve Live Traceability without a single change required to software developers' preferred tools, methodology or field values.",
    tools: ["Jira", "Bugzilla", "Azure DevOps", "TFS"]
  },
  {
    title: "PLM & PLE",
    desc: "Extend Live Traceability to hardware specifications and product data management.",
    tools: ["Teamcenter", "Aras", "pure systems", "BigLever", "Windchill"]
  },
  {
    title: "TEST AUTOMATION & VERIFICATION",
    desc: "Live trace requirements and test cases to automated testing results in preferred tools.",
    tools: ["Tricentis", "Ansys", "LDRA", "TestRail", "Zephyr", "Vector", "Jenkins", "Bugzilla", "Parasoft"]
  },
  {
    title: "RISK MANAGEMENT",
    desc: "Extend Live Traceability to FMEA/DFMEA calculations, even in Microsoft Excel, without any changes required to Risk team's tooling or approaches.",
    tools: ["Ansys", "Excel", "ENCO"]
  },
  {
    title: "DEVOPS",
    desc: "Extend Live Traceability down to source code with no changes required to software developers' tools or methodologies.",
    tools: ["GitLab", "GitHub", "Azure DevOps"]
  }
];

const integrationLogos = [
  { name: "Git", icon: "/logos/git.png", desc: "Git Repository – CarpacSoft Integration Demo" },
  { name: "CATIA No Magic", icon: "/logos/catia.png", desc: "CATIA Magic (Cameo) – CarpacSoft Integration Demo" },
  { name: "Jira", icon: "/logos/jira.png", desc: "Jira – CarpacSoft Integration Demo" },
  { name: "OPEN API", icon: "/logos/openapi.png", desc: "Automated Testing – CarpacSoft Integration Demo" },
  { name: "Azure DevOps", icon: "/logos/azure.png", desc: "Azure DevOps – CarpacSoft Integration Demo" },
  { name: "Windchill", icon: "/logos/windchill.png", desc: "Windchill – CarpacSoft Integration Demo" },
  { name: "XRAY", icon: "/logos/xray.png", desc: "Xray – CarpacSoft Integration Demo" },
  { name: "LDRA", icon: "/logos/ldra.png", desc: "LDRA – CarpacSoft Integration Demo" },
  { name: "Aras", icon: "/logos/aras.png", desc: "Aras – CarpacSoft Integration Demo" },
  { name: "TestRail", icon: "/logos/testrail.png", desc: "TestRail – CarpacSoft Integration Demo" },
  { name: "Enterprise Architect", icon: "/logos/ea.png", desc: "Sparx Systems EA – CarpacSoft Integration Demo" },
  { name: "MATLAB Simulink", icon: "/logos/matlab.png", desc: "Matlab Simulink – CarpacSoft Integration Demo" },
  { name: "PARASOFT", icon: "/logos/parasoft.png", desc: "Parasoft – CarpacSoft Integration Demo" },
  { name: "SIEMENS", icon: "/logos/siemens.png", desc: "Questa™ Verification IQ: Using Testplan Author (TPA) with CarpacSoft" },
  { name: "Capella", icon: "/logos/capella.png", desc: "Capella – CarpacSoft Integration Demo" },
];

const Integrations = () => {
  const [activeTab, setActiveTab] = useState(industryTabs[0]);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Add the image to the Aerospace tab dynamically if it's not in the static list yet
  // Ideally this should be in the static list definition but for minimal diff we can handle it here or modify the list above.
  // Let's modify the list above in a separate replacement chunk implies multiple chunks.
  // Actually, I can replace the whole file content related to this or use multi_replace.
  // However, `replace_file_content` checks strictly.
  // Let's use `multi_replace_file_content` to be safe and clean.
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* NEW HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0d3c9b] to-[#0057b8] text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection className="w-full lg:w-1/2">
                <img src="/Logo.jpg" alt="CarpacSoft" className="h-10 mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                  Only CarpacSoft Delivers Live Traceability™ Across Best-of-Breed Tools
                </h1>
                <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-xl">
                  Other vendors lock you into inferior platforms. Only CarpacSoft seamlessly integrates with your tools-of-choice across engineering teams.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/trial">
                    <Button className="bg-[#ff8f00] hover:bg-[#e68200] text-white font-bold px-8 py-6 rounded-full uppercase tracking-wide text-sm border-none shadow-lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/company/contact">
                    <Button className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-6 rounded-full uppercase tracking-wide text-sm border-none shadow-lg">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
              {/* Background Image Effect on Right */}
              <div>
                <img
                  src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                  alt="CarpacSoft Platform Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIM INTERACTIVE SECTION */}
        <section className="py-20 bg-[#f0f9ff]">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#404040] mb-6 max-w-4xl mx-auto leading-tight">
                Only CarpacSoft Can Manage the State of Development Across All Integrated Teams and Tools.
              </h2>
              <p className="text-slate-600 max-w-4xl mx-auto text-base">
                CarpacSoft's unique and industry-specific Traceability Information Models define the relationships and expected behavior across teams and tools.
              </p>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start">
              {/* Sidebar Tabs */}
              <div className="w-full lg:w-[300px] bg-white rounded-lg shadow-sm border border-slate-100/50 shrink-0">
                {industryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 px-6 text-left transition-all border-b border-slate-50 last:border-0 text-sm font-medium",
                      activeTab.id === tab.id
                        ? "bg-[#00bcc2] text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#00bcc2]"
                    )}
                  >
                    <span>{tab.label}</span>
                    <ChevronRight size={16} className={cn(activeTab.id === tab.id ? "text-white" : "text-[#00bcc2]")} />
                  </button>
                ))}
              </div>

              {/* Tab Content Card */}
              <div className="flex-1 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 lg:p-12 border border-slate-100 min-h-[500px]">
                <h3 className="text-xl font-bold text-[#404040] mb-8">{activeTab.title}</h3>

                <div className="bg-slate-50 rounded-lg p-4 mb-8 border border-slate-100">
                  {/* Diagram Area */}
                  <div
                    className="aspect-[2/1] relative flex items-center justify-center bg-white rounded border border-slate-200 overflow-hidden group cursor-pointer"
                    onClick={() => activeTab.image && setModalImage(activeTab.image)}
                  >
                    {activeTab.image ? (
                      <img
                        src={activeTab.image}
                        alt={activeTab.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-50">
                          <div className="p-2 border border-slate-300 rounded text-xs">Requirements</div>
                          <ArrowRight className="text-slate-300" />
                          <div className="p-2 border border-slate-300 rounded text-xs">System Arch</div>
                          <ArrowRight className="text-slate-300" />
                          <div className="p-2 border border-slate-300 rounded text-xs">Validation</div>
                        </div>
                        <p className="text-slate-400 text-sm italic">Traceability Diagram for {activeTab.label}</p>
                      </div>
                    )}

                    {/* Overlay for zoom */}
                    {activeTab.image && (
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-[#004d99] text-white p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                          <Maximize2 size={24} />
                        </div>
                      </div>
                    )}

                    {!activeTab.image && (
                      <div className="absolute bottom-4 right-4 bg-[#004d99] text-white p-2 rounded-full cursor-pointer hover:bg-blue-800 transition-colors">
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-sm text-slate-600 italic">
                    Traceability Information Model (TIM) – A graph defining the expected item types and relationships on a project to enable the measurement of traceability and the auto-detection of risk – only available in CarpacSoft.
                  </p>
                  <Link to={activeTab.learnMoreLink}>
                    <Button variant="outline" className="border-[#00bcc2] text-[#00bcc2] hover:bg-sky-50 rounded-full px-8 uppercase text-xs font-bold tracking-widest">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS GRID SECTION */}
        <section className="py-20 bg-[#051c2c] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                See How the Top Tools Seamlessly Integrate with CarpacSoft
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                {integrationLogos.map((demo, i) => (
                  <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="h-12 mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        {demo.name}
                      </div>
                    </div>
                    <div className="text-[#00a7b5] text-sm group-hover:underline">{demo.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* REST OF SECTIONS... */}
        {/* BEST OF BREED TOOLS SECTION */}
        <section className="py-24 bg-[#3b99fc] text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-tight">
                Sample List of Best-of-Breed Tools that Integrate with CarpacSoft by Function
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {bestOfBreedTools.map((category, i) => (
                <div key={i} className="bg-white rounded-lg p-8 text-slate-800 flex flex-col h-full shadow-lg">
                  <h3 className="text-[#0066cc] font-bold text-sm uppercase tracking-wide mb-4 h-10 border-b-2 border-slate-100 pb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 flex-grow leading-relaxed">
                    {category.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REST API SECTION */}
        <section className="py-24 bg-[#5e6d7e] relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection className="w-full lg:w-1/3">
                <div>
                  <img
                    src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                    alt="CarpacSoft Platform Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection className="w-full lg:w-2/3 text-white">
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Connect CarpacSoft to any REST-compliant software or system with our best-in-class API
                </h2>
                <p className="text-slate-200 mb-6 text-sm leading-relaxed">
                  Siloed data creates significant roadblocks for businesses. Isolated information across teams and systems obstructs collaboration and slows critical decision-making.
                </p>
                <p className="text-slate-200 mb-10 text-sm leading-relaxed">
                  CarpacSoft offers a powerful REST API that allows your team to integrate and extend the capabilities of CarpacSoft. Benefit in many ways including reporting, data & trace synchronization, and test results import. Combine CarpacSoft API's simple, flexible, and easy to use framework with resources for step-by-step guidance and practical, real-world recipes that address common integration needs, offer clear best practices, and answer frequently asked questions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/other-pages/datasheet" target="_blank">
                    <Button className="bg-[#ff6b00] hover:bg-[#e65a00] text-white font-bold px-8 py-4 rounded text-xs uppercase tracking-wider border-none">
                      GET DATASHEET
                    </Button>
                  </Link>
                  <Link to="/other-pages/rest-api" target="_blank">
                    <Button className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-4 rounded text-xs uppercase tracking-wider border-none">
                      GET STARTED
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* DISCOVERY CENTER */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ff8f00 0%, #ff5e00 100%)' }}>
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-6">Discover all that CarpacSoft has to offer!</h2>
                <p className="text-white/90 text-sm mb-8 leading-relaxed max-w-lg">
                  Interested in learning more about how CarpacSoft can help your organization achieve its goals? The CarpacSoft Discovery Center lets you control your knowledge journey and get your questions answered, all at your own pace. We've put our most relevant and valuable content —from discovery to optimization—right at your fingertips!
                </p>
                <Link to="/resources/discovery">
                  <Button className="bg-[#00a7b5] hover:bg-[#00929e] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider border-none shadow-lg">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl border border-white/30">
                  <img src="/Logo.jpg" alt="Discovery" className="w-32 brightness-0 invert opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DemoForm />
      </main>
      <Footer />
      <ChatWidget />

      {/* MODAL OVERLAY */}
      {modalImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 px-6 border-b border-slate-100 bg-white z-10">
              <h3 className="text-xl font-bold text-[#0066cc]">
                {activeTab.title}
              </h3>
              <button
                onClick={() => setModalImage(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-red-500 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 overflow-auto bg-slate-50 p-6 flex items-center justify-center">
              <img
                src={modalImage}
                alt="Enlarged Diagram"
                className="max-w-full h-auto object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integrations;



