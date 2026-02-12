import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowRight,
  Link2,
  Users,
  ClipboardCheck,
  TestTube,
  ShieldAlert,
  GitBranch,
  FileText,
  Sparkles,
  CheckCircle2,
  Play,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import FeaturesAdditionalSection from "@/components/features/FeaturesAdditionalSection";
import FeaturesSecuritySection from "@/components/features/FeaturesSecuritySection";
import FeaturesDemoSection from "@/components/features/FeaturesDemoSection";

interface Feature {
  id: string;
  icon: LucideIcon;
  sidebarTitle?: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: "live-traceability",
    icon: Link2,
    title: "Live Traceability",
    subtitle: "Ensure product quality and improve change management with complete traceability",
    description: "Maintain a rigorous change management process and reveal interdependencies within the process to keep projects on track.",
    benefits: [
      "Easily navigate upstream and downstream relationships to understand the impact of change and coverage across the development lifecycle",
      "Save time finding gaps in overall test coverage",
      "Understand change impact before it happens",
      "Track relationships across projects",
      "Identify potentially problematic links when changes are made",
      "Produce traceability documentation required by regulators",
      "Relationship Rules are tracked across projects with a visual schematic that shows the impact and reach of information across the organization"
    ]
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Real-time Collaboration",
    subtitle: "Ensure secure, cross-functional collaboration across teams",
    description: "Collaboration in CarpacSoft is the key to helping engineering teams streamline and optimize their product development processes in today's highly competitive market.",
    benefits: [
      "View open decisions, issues and questions that require response",
      "Make timely decisions by responding directly to emails and @mentioning stakeholders",
      "Stream discussions to quickly get a pulse on a project and seamlessly bring new users and stakeholders into current conversations",
      "View actions quickly: who authored an item, made an edit, commented or was mentioned",
      "Shorten milestone phases, reduce development cycles, and improve efficiency",
      "Quickly see who authored, made an edit, or commented on a requirement to connect users and enhance collaboration"
    ]
  },
  {
    id: "review-center",
    icon: ClipboardCheck,
    title: "Review Center",
    subtitle: "Transition from document-centric to data-centric approach",
    description: "Review Center provides an iterative, collaborative approach to reviewing requirements and tests in real-time.",
    benefits: [
      "Enable efficient and scalable reviews and shorten review cycles by up to 50%",
      "Prioritize critical decisions and align stakeholders to improve response times, minimize meetings, and eliminate communication bottlenecks",
      "Facilitate compliant reviews and approvals by creating a standardized review process, gaining formal approvals, and exporting to an auditable system of record",
      "Engage unlimited stakeholders: Drive participation from buyers, suppliers, and partners across organizational boundaries"
    ]
  },
  {
    id: "test-management",
    icon: TestTube,
    title: "Test and Quality Management",
    subtitle: "Give your QA teams the ability to manage testing easily, in real time",
    description: "Bring your testing teams into the development process earlier to view and run their test cases and instantly log connected defects when tests fail.",
    benefits: [
      "View and run test cases, and instantly log connected defects when tests fail",
      "Engage in real-time conversations about the impact and prioritization of defects",
      "Execute, open, or assign tests that directly associate with requirements and features",
      "Integrate with trusted solutions for test execution and automation",
      "Build custom reports that provide the analysis you need for industry compliance",
      "Easily show auditors the connections between regulations, requirements, and tests"
    ]
  },
  {
    id: "risk-management",
    icon: ShieldAlert,
    title: "Risk and Hazard Analysis",
    subtitle: "Simplify compliance with integrated risk management",
    description: "Performing risk analysis early and often throughout the product development process allows your teams to identify and mitigate risks effectively.",
    benefits: [
      "Identify, estimate, and evaluate risks directly in CarpacSoft",
      "Ensure risk analysis is updated throughout the process with real-time data",
      "Provide more coverage by easily tracing open risks and linking them back to requirements",
      "Build a comprehensive risk management profile based on techniques including PHA and FMEA in accordance with ISO 14971 and IEC 60812",
      "Ensure quality and safety in complex product development"
    ]
  },
  {
    id: "reuse-baseline",
    icon: GitBranch,
    title: "Reuse and Baseline Management",
    subtitle: "Reduce development time and ensure consistency across projects",
    description: "Compare versions of a requirement, generate branches to develop a variant, and create catalogs of reusable requirements and baselines.",
    benefits: [
      "Compare two versions of a requirement side by side and see what changed",
      "Keep your data organized and secure across one project or many, automatically",
      "Create a baseline by taking a 'snapshot' that documents the current state of a project at a given point in time",
      "Create catalogs of reusable requirements to get your next product to market faster",
      "Generate branches of a product to develop a variant or a new version"
    ]
  },
  {
    id: "authoring",
    icon: FileText,
    title: "Requirements Authoring",
    subtitle: "Seamless experience for authoring and managing requirements",
    description: "CarpacSoft's Document View allows users to author, read, and edit items in a single view without losing visual context.",
    benefits: [
      "Author, read, and edit items in a single view without losing visual context in the overall document",
      "Optimize the functionality of editing and creating content efficiently by saving time when switching between different views",
      "Balance the power of atomic requirements management and traceability with a more familiar, approachable document style"
    ]
  },
  {
    id: "advisor",
    icon: Sparkles,
    sidebarTitle: "Requirements Quality",
    title: "CarpacSoft Advisor™",
    subtitle: "Improving Requirements Quality Avoids Costly Rework",
    description: "CarpacSoft Advisor™ is a fully integrated add-on product for CarpacSoft to help people write effective, efficient, and well-organized requirement specifications. Based on industry-accepted INCOSE rules and EARS notation approach, CarpacSoft Advisor utilizes natural language processing (NLP) to deliver insight into requirement quality in real time.",
    benefits: [
      "Boost requirements accuracy and writing speed with guided authoring",
      "Streamline requirements review and standardization with batch analysis",
      "Track and improve requirements quality over time with downloadable reports"
    ]
  }
];

export default function JamaConnectFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [activeTab, setActiveTab] = useState<"benefits" | "features">("benefits");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#002d5b] via-[#002d5b] to-[#001a35] text-white py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                Powerful Features to Transform Your Development Process
              </h1>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed font-light opacity-90 max-w-3xl mx-auto">
                Our award-winning and industry-leading requirements management software and Live Traceability™ solution enables more efficient and optimized product, system, and software development.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/trial">
                  <Button className="bg-[#f28e1c] hover:bg-[#e47a00] text-white px-10 py-7 text-[15px] rounded-full font-bold tracking-widest shadow-xl transition-all uppercase">
                    GET STARTED
                  </Button>
                </Link>
                <Link to="/company/contact">
                  <Button className="border-2 border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 px-10 py-7 text-[15px] rounded-full font-bold tracking-widest transition-all uppercase backdrop-blur-sm">
                    BOOK A DEMO
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-[#F0F7FF]">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] font-medium text-slate-700 mb-6 leading-tight">
                Features to Empower Your Team and Improve Your Requirements Management Process
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Streamline your team's engineering process from requirements, to modelling, to verification and equip them with the freedom to innovate and the tools they need to do their best work.
              </p>
            </AnimatedSection>

            {/* Feature Explorer */}
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Sidebar */}
                <div className="lg:w-[320px] w-full space-y-2 shrink-0">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature)}
                      className={cn(
                        "w-full flex items-center justify-between p-4 px-6 text-left transition-all rounded-lg group shadow-sm",
                        activeFeature.id === feature.id
                          ? "bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] text-white"
                          : "bg-white text-slate-600 hover:bg-slate-50 border-none"
                      )}
                    >
                      <span className="font-medium text-base">{feature.sidebarTitle || feature.title}</span>
                      <ArrowRight className={cn(
                        "h-4 w-4 transition-colors",
                        activeFeature.id === feature.id ? "text-white" : "text-[#00A3E0]"
                      )} />
                    </button>
                  ))}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-[20px] shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] p-10 lg:p-14 border border-slate-100">
                  <div className="mb-8">
                    <h4 className="text-[#00A3E0] font-medium text-xl mb-3 tracking-wide">
                      {activeFeature.sidebarTitle || activeFeature.title}
                    </h4>
                    <h3 className="text-[26px] font-medium text-slate-800 leading-tight mb-8">
                      {activeFeature.subtitle}
                    </h3>
                  </div>

                  {/* Video/Image Placeholder */}
                  <div className="relative group rounded-xl overflow-hidden mb-10 shadow-lg bg-slate-100 border border-slate-200">
                    <img
                      src="https://www.jamasoftware.com/media/2025/07/Product-Stack-White-Background.png"
                      alt={activeFeature.title}
                      className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#002d5b]/90 text-white rounded-full flex items-center justify-center shadow-2xl scale-110 hover:scale-125 transition-transform cursor-pointer">
                        <Play className="h-7 w-7 fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none mb-10">
                    <p className="text-[#4a5568] text-[17px] leading-relaxed font-medium mb-6">
                      {activeFeature.description}
                    </p>
                    <ul className="space-y-3 list-none p-0">
                      {activeFeature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#4a5568] text-[16px] leading-relaxed">
                          <span className="text-xl leading-none mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-5">
                    {activeFeature.id === "advisor" ? (
                      <>
                        <Link to="/trial">
                          <Button className="bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] hover:opacity-90 text-white rounded-full px-10 py-7 font-bold text-sm tracking-widest transition-all shadow-md uppercase">
                            TRY IT FOR FREE
                          </Button>
                        </Link>
                        <Button variant="outline" className="rounded-full border-[#00A3E0] text-[#00A3E0] hover:bg-sky-50 px-10 py-7 font-bold text-sm tracking-widest transition-all uppercase">
                          DOWNLOAD DATASHEET
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" className="rounded-full border-[#00A3E0] text-[#00A3E0] hover:bg-sky-50 px-10 py-7 font-bold text-sm tracking-widest transition-all uppercase">
                          LEARN MORE
                        </Button>
                        {activeFeature.id === "live-traceability" && (
                          <Link to="/product/jama-connect">
                            <Button className="bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] hover:opacity-90 text-white rounded-full px-10 py-7 font-bold text-sm tracking-widest transition-all shadow-md uppercase">
                              WHY LIVE TRACEABILITY?
                            </Button>
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesAdditionalSection />
        <FeaturesSecuritySection />
        <FeaturesDemoSection />
      </main>
      <Footer />
    </div>
  );
}



