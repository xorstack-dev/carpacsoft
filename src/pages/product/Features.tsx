import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";
import {
  CheckCircle, ArrowRight, Network, Eye, MessageSquare,
  ClipboardCheck, Shield, RefreshCw, PenTool, Sparkles, Play, Maximize2, X
} from "lucide-react";
import FeaturesAdditionalSection from "@/components/features/FeaturesAdditionalSection";
import FeaturesSecuritySection from "@/components/features/FeaturesSecuritySection";
import FeaturesDemoSection from "@/components/features/FeaturesDemoSection";
import DemoFormSection from "@/components/features/DemoFormSection";

const featureTabs = [
  {
    id: "traceability",
    icon: Network,
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
    ],
    learnMoreLink: "/resources?primary_topic=traceability",
    videoLabel: "Why Live Traceability?",
    videoUrl: "https://fast.wistia.net/embed/iframe/cyuubluabs?autoPlay=true"
  },
  {
    id: "collaboration",
    icon: MessageSquare,
    title: "Real-time Collaboration",
    subtitle: "Ensure secure, cross-functional collaboration across teams, customers, and complex supply chains to remove friction throughout the development process",
    description: "Collaboration in CarpacSoft is the key to helping engineering teams streamline and optimize their product development processes in today's highly competitive market.",
    benefits: [
      "View open decisions, issues and questions that require response",
      "Make timely decisions by responding directly to emails and @mentioning stakeholders",
      "Stream discussions to quickly get a pulse on a project and seamlessly bring new users and stakeholders into current conversations",
      "View actions quickly: who authored an item, made an edit, commented or was mentioned",
      "Shorten milestone phases, reduce development cycles, and improve efficiency, helping teams identify risks and opportunities",
      "Quickly see who authored, made an edit, or commented on a requirement to connect users and enhance collaboration"
    ],
    learnMoreLink: "/resources"
  },
  {
    id: "review",
    icon: Eye,
    title: "Review Center",
    subtitle: "Transition from a document-centric to a data-centric approach, and capture reviews, approvals, and feedback from stakeholders in one central place",
    description: "Review Center provides an iterative, collaborative approach to reviewing requirements and tests in real-time.",
    benefits: [
      "Enable efficient and scalable reviews and shorten review cycles by up to 50%",
      "Prioritize critical decisions and align stakeholders to improve response times, minimize meetings, and eliminate communication bottlenecks",
      "Facilitate compliant reviews and approvals by creating a standardized review process, gaining formal approvals, and exporting to an auditable system of record",
      "Engage unlimited stakeholders: Drive participation from buyers, suppliers, and partners across organizational boundaries for centralized definitions, input, and decisions"
    ],
    learnMoreLink: "/resources",
    videoLabel: "Watch Review Center Demo",
    videoUrl: "https://fast.wistia.net/embed/iframe/atu6s8h5s4?autoPlay=true"
  },
  {
    id: "test",
    icon: ClipboardCheck,
    title: "Test and Quality Management",
    subtitle: "Give your Quality Assurance (QA) teams the ability to create and organize test plans, test cases, dashboards, and reports to manage testing easily, in real time",
    description: "Bring your testing teams into the development process earlier to view and run their test cases and instantly log connected defects when tests fail. Your team can:",
    benefits: [
      "View and run test cases, and instantly log connected defects when tests fail",
      "Engage in real-time conversations about the impact and prioritization of defects",
      "Execute, open, or assign tests that directly associate with requirements and features",
      "Integrate with trusted solutions for test execution and automation",
      "Build custom reports that provide the analysis you need for industry compliance",
      "Easily show auditors the connections between regulations, requirements, and tests"
    ],
    learnMoreLink: "/resources",
    videoLabel: "Watch Test Management Demo",
    videoUrl: "https://fast.wistia.net/embed/iframe/0130tanmy3?autoPlay=true"
  },
  {
    id: "risk",
    icon: Shield,
    title: "Risk and Hazard Analysis",
    subtitle: "Simplify compliance with integrated risk management",
    description: "Performing risk analysis early and often throughout the product development process allows your teams the ability to:",
    benefits: [
      "Identify, estimate, and evaluate risks directly in Jama Connect",
      "Ensure risk analysis is updated throughout the process with real-time data",
      "Provide more coverage by easily tracing open risks and linking them back to requirements",
      "Build a comprehensive risk management profile based on techniques including Preliminary Hazard Analysis (PHA) and FMEA in accordance with ISO 14971 and IEC 60812",
      "Ensure quality and safety in complex product development"
    ],
    learnMoreLink: "/resources"
  },
  {
    id: "reuse",
    icon: RefreshCw,
    title: "Reuse and Baseline Management",
    subtitle: "Reduce development time and ensure consistency across projects",
    description: "Compare versions of a requirement, generate branches to develop a variant, and create catalogs of reusable requirements and baselines of your development streams at milestones or versions.",
    benefits: [
      "Compare two versions of a requirement side by side and see what changed",
      "Keep your data organized and secure across one project or many, automatically",
      "Create a baseline by taking a \"snapshot\" that documents the current state of a project, or any subset of a project, at a given point in time",
      "Create catalogs of reusable requirements to get your next product to market faster",
      "Generate branches of a product to develop a variant or a new version"
    ],
    learnMoreLink: "/resources"
  },
  {
    id: "authoring",
    icon: PenTool,
    title: "Requirements Authoring",
    subtitle: "Seamless experience for authoring and managing requirements",
    description: "For enabling efficient Requirements Authoring — Jama Connect's Document View allows users to:",
    benefits: [
      "Author, read, and edit items in a single view without losing visual context in the overall document, allowing quick editing and reviewing",
      "Optimize the functionality of editing and creating content efficiently by saving time when switching between different views",
      "Balance the power of atomic requirements management and traceability with a more familiar, approachable document style"
    ],
    learnMoreLink: "/resources"
  },
  {
    id: "quality",
    icon: Sparkles,
    title: "Requirements Quality",
    subtitle: "Improving Requirements Quality Avoids Costly Rework",
    description: "With Jama Connect Advisor™, natural language processing (NLP) evaluates and scores requirements against INCOSE and EARS standards to improve quality and clarity.",
    benefits: [
      "Boost requirements accuracy and writing speed with guided authoring",
      "Streamline requirements review and standardization with batch analysis",
      "Track and improve requirements quality over time with downloadable reports"
    ],
    learnMoreLink: "/resources"
  }
];

// Collaboration Tab Screenshot Component (matches reference design)
const CollaborationScreenshot = () => (
  <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200">
    {/* Top Panel - Requirement Detail View */}
    <div className="bg-white">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#f8f9fb] border-b border-slate-200">
        <div className="flex items-center gap-2 text-[11px]">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">W</span>
          </div>
          <span className="font-bold text-slate-800">Waterproof</span>
          <span className="text-slate-400 text-[10px]">· V8 · 🔒</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[9px] text-slate-400">
          <span className="text-blue-500">CLS-SR-1</span>
          <span>· System Requirement</span>
          <span className="mx-0.5">|</span>
          <span>Medical Device Sample Set &gt; System Requirements &gt; System Requirements</span>
        </div>
      </div>

      {/* Detail Fields */}
      <div className="flex">
        <div className="flex-1 px-5 py-3 space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="text-slate-400 w-16 shrink-0">Project ID</span>
              <span className="text-blue-500 font-medium">CLS-SR-1</span>
            </div>
            <span className="bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded text-[10px] hidden sm:inline">Transition Item from: Approved ▾</span>
          </div>
          <div className="flex gap-2">
            <span className="text-slate-400 w-16 shrink-0">Global ID</span>
            <span className="text-slate-600">GID-1198</span>
          </div>
          <div className="flex gap-2">
            <span className="text-slate-400 w-16 shrink-0">Name</span>
            <span className="text-slate-800 font-medium">Waterproof</span>
          </div>
          <div className="flex gap-2">
            <span className="text-slate-400 w-16 shrink-0">Description</span>
            <p className="text-slate-600 leading-relaxed">
              A waterproof device is vital to increasing our market share. There's a large market, especially in the United States, that could be taken over through creation of a waterproof device. This also would increase our ability to attract and retain more younger customers, and may affect our ability to retain older as well.
            </p>
          </div>
          <div className="flex gap-2 text-slate-500 italic text-[10px]">
            <span className="w-16 shrink-0" />
            <span>Currently, processor specifically is not waterproof, so it has to be removed or covered with a special cover prior to showering or swimming.</span>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <span className="text-slate-400 w-16 shrink-0">Status</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-slate-700">Approved</span>
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-slate-400">Priority</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                <span className="text-slate-700">High</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Toolbar Icons */}
        <div className="w-9 bg-slate-50 border-l border-slate-100 flex flex-col items-center py-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-5 h-5 rounded bg-slate-200/80" />
          ))}
        </div>
      </div>
    </div>

    {/* Blue Chat Icon - Center Overlay */}
    <div className="absolute left-1/2 z-10" style={{ top: '52%', transform: 'translate(-50%, -50%)' }}>
      <div className="w-14 h-14 bg-[#0074d9] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
        <MessageSquare className="w-6 h-6 text-white" />
      </div>
    </div>

    {/* Bottom Panel - Discussion Thread */}
    <div className="bg-[#eef2f7] border-t border-slate-200 p-4">
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        {/* Thread Header */}
        <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-2 text-[11px]">
          <span className="font-bold text-blue-600">CLS-SR-1 Waterproof</span>
          <span className="text-slate-400">· View Description ·</span>
        </div>

        {/* Comment */}
        <div className="px-4 py-3 space-y-2">
          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-white text-[9px] font-bold shrink-0">BC</div>
            <div>
              <span className="font-bold text-slate-700">Becky Carlson</span>
              <span className="text-slate-400"> asked a </span>
              <span className="text-blue-500 font-medium">Question</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 ml-9 leading-relaxed">
            "This is to be removed or covered with special cover" - which of these options is preferred by the market? Inputfrom...
          </p>
          <div className="ml-9 flex items-center gap-2 text-[9px] text-slate-400">
            <span>No @CJ-SR-1</span>
            <span className="text-yellow-500">●</span>
            <span>Hide Notifications</span>
          </div>

          {/* Reply Box */}
          <div className="mt-2 bg-blue-50/50 border border-blue-100 rounded-md p-2.5 ml-2 text-[11px] text-slate-600">
            @Becky Our customer research tells us remove is the preferred method. [Answer]
          </div>
          <div className="flex items-center gap-2 mt-2 ml-2">
            <button className="bg-[#0074d9] text-white px-4 py-1 rounded text-[10px] font-medium">Reply</button>
            <button className="text-slate-500 px-3 py-1 rounded text-[10px] border border-slate-200">Cancel</button>
            <div className="ml-auto">
              <span className="bg-green-500 text-white px-3 py-1 rounded text-[10px] font-medium">Answer Question</span>
            </div>
          </div>
          <div className="flex items-center text-[9px] text-slate-400 mt-1 ml-2">
            <span>Actions ▾</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Review Center Tab Screenshot Component (matches reference design)
const ReviewCenterScreenshot = ({ onPlay }: { onPlay: () => void }) => (
  <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white">
    {/* Filter Bar */}
    <div className="bg-[#f3f5f7] border-b border-slate-200 px-4 py-2 flex items-center gap-2 text-[10px]">
      <span className="font-semibold text-slate-700">Filter: Approved Functional Safety Verification - V3 -</span>
      <span className="text-slate-400">●</span>
      <span className="text-green-600 text-[9px]">In progress</span>
      <span className="text-slate-400 ml-1">Deadline: 04/30/2023</span>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-slate-500">View</span>
        <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-[9px]">Filters</span>
        <span className="text-slate-500">Actions</span>
        <span className="text-slate-500">Export</span>
      </div>
    </div>

    {/* Toolbar */}
    <div className="bg-white border-b border-slate-100 px-4 py-1.5 flex items-center gap-3 text-[9px] text-slate-500">
      <span>Items</span>
      <span>▼</span>
      <span>Filter</span>
      <span>▼</span>
      <span>Flag</span>
      <span>▼</span>
      <span className="text-yellow-500 font-bold">Highlighting</span>
      <span className="text-green-500">On</span>
      <span>Moderate</span>
      <span>Approved</span>
    </div>

    {/* Content Area */}
    <div className="px-4 py-3">
      {/* Requirement Items */}
      <div className="space-y-1 text-[10px]">
        <div className="flex items-center gap-3 py-1.5 px-2 bg-blue-50/50 rounded">
          <span className="text-blue-500 font-mono">4.3.2.1</span>
          <span className="text-slate-700">slats off at speeds &lt; 10 mph</span>
        </div>
        <div className="flex items-center gap-3 py-1.5 px-2">
          <span className="w-4" />
          <span className="text-slate-500 italic">Validate that the airbag shuts off at speeds &lt; 10 mph</span>
        </div>
        <div className="flex items-center gap-3 py-1.5 px-2">
          <span className="text-slate-400">Object Type</span>
          <span className="text-slate-600 ml-4">Component</span>
        </div>
        <div className="flex items-center gap-3 py-1.5 px-2 bg-slate-50 rounded">
          <span className="text-slate-400">1</span>
          <span className="text-slate-600">accelerate to 15 mph, setting it at in the state</span>
        </div>
        <div className="flex items-center gap-3 py-1.5 px-2">
          <span className="text-slate-400">Assigned</span>
        </div>
        <div className="flex items-center gap-3 py-1.5 px-2">
          <span className="text-slate-400">Activation Status</span>
        </div>
      </div>

      {/* Right Panel Hint */}
      <div className="absolute top-12 right-4 text-[9px] space-y-1">
        <div className="bg-green-500 text-white px-2 py-0.5 rounded text-center font-medium">Review</div>
        <div className="mt-2 text-slate-400">5 Compare</div>
      </div>
    </div>

    {/* Play Button Overlay */}
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
      onClick={onPlay}
    >
      <div className="w-16 h-16 bg-[#002d5b]/90 text-white rounded-full flex items-center justify-center shadow-2xl scale-110 group-hover:scale-125 transition-transform">
        <Play className="h-7 w-7 fill-white ml-1" />
      </div>
    </div>
  </div>
);

// Test Management Tab Screenshot Component (matches reference design)
const TestManagementScreenshot = ({ onPlay }: { onPlay: () => void }) => (
  <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white">
    {/* Browser-like header */}
    <div className="bg-[#f3f5f7] border-b border-slate-200 px-4 py-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="ml-3 flex-1 bg-white rounded px-3 py-0.5 text-[9px] text-slate-400 border border-slate-200">
        carpacsoft.com/test-management
      </div>
    </div>

    {/* Content - Relationship Diagram */}
    <div className="p-4">
      {/* Top label */}
      <div className="text-center mb-3">
        <span className="text-[10px] text-slate-500 font-medium">Relationship Diagram</span>
      </div>

      {/* Diagram Area */}
      <div className="relative bg-slate-50 rounded-lg p-4 min-h-[200px] border border-slate-100">
        {/* Flow connections - simplified diagram */}
        <div className="flex items-center justify-between gap-2">
          {/* Left column */}
          <div className="space-y-3 text-[9px]">
            <div className="bg-blue-100 border border-blue-200 rounded px-3 py-1.5 text-blue-700 font-medium text-center">
              Requirements
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded px-3 py-1.5 text-purple-700 font-medium text-center">
              Features
            </div>
          </div>

          {/* Center - diamond decision nodes */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-cyan-400 rotate-45 rounded-sm flex items-center justify-center">
              <span className="-rotate-45 text-white text-[7px] font-bold">V</span>
            </div>
            <svg className="w-16 h-6" viewBox="0 0 64 24">
              <line x1="0" y1="12" x2="64" y2="12" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
              <polygon points="58,8 64,12 58,16" fill="#94a3b8" />
            </svg>
            <div className="w-8 h-8 bg-teal-400 rotate-45 rounded-sm flex items-center justify-center">
              <span className="-rotate-45 text-white text-[7px] font-bold">T</span>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-3 text-[9px]">
            <div className="bg-green-100 border border-green-200 rounded px-3 py-1.5 text-green-700 font-medium text-center">
              Test Plans
            </div>
            <div className="bg-amber-100 border border-amber-200 rounded px-3 py-1.5 text-amber-700 font-medium text-center">
              Test Cases
            </div>
          </div>
        </div>

        {/* Connector lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
          <line x1="100" y1="40" x2="180" y2="80" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="100" y1="120" x2="180" y2="80" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="220" y1="80" x2="300" y2="40" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="220" y1="80" x2="300" y2="120" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom section - Stakeholder/Result nodes */}
      <div className="mt-3 flex items-center justify-between text-[9px]">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Pie chart</span>
          <div className="w-6 h-6 rounded-full border-2 border-blue-400 border-t-green-400" />
        </div>
        <div className="text-slate-400">
          <span>Stakeholder Needs</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-green-500" />
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-blue-400" />
        </div>
      </div>
    </div>

    {/* Play Button Overlay */}
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
      onClick={onPlay}
    >
      <div className="w-16 h-16 bg-[#002d5b]/90 text-white rounded-full flex items-center justify-center shadow-2xl scale-110 group-hover:scale-125 transition-transform">
        <Play className="h-7 w-7 fill-white ml-1" />
      </div>
    </div>
  </div>
);

// Risk Management Tab Screenshot Component (matches reference design)
const RiskManagementScreenshot = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white group cursor-pointer"
  >
    <img
      src="https://www.jamasoftware.com/media/2021/03/features-tab5-risk-and-hazard-analysis.png"
      alt="Risk Management and Hazard Analysis"
      className="w-full h-auto"
    />
    {/* Expand Icon Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white transition-transform group-hover:scale-110">
        <Maximize2 className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);


// Reuse Management Tab Screenshot Component (matches reference design)
const ReuseManagementScreenshot = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white group cursor-pointer"
  >
    <img
      src="https://www.jamasoftware.com/media/2021/03/features-tab6-reause-and-baseline-management.png"
      alt="Reuse and Baseline Management"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white transition-transform group-hover:scale-110">
        <Maximize2 className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);


// Requirements Authoring Tab Screenshot Component (matches reference design)
const AuthoringScreenshot = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white group cursor-pointer"
  >
    <img
      src="https://www.jamasoftware.com/media/2023/01/requirements-authoring-ss-23.jpg"
      alt="Requirements Authoring"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white transition-transform group-hover:scale-110">
        <Maximize2 className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);


// Requirements Quality Tab Screenshot Component (matches reference design)
const QualityScreenshot = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 bg-white group cursor-pointer"
  >
    <img
      src="https://www.jamasoftware.com/media/2024/11/jama-connect-advisor-single-statement-authoring-screenshot.jpg"
      alt="Requirements Quality"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-[#0052cc] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white transition-transform group-hover:scale-110">
        <Maximize2 className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const Features = () => {
  const [activeTab, setActiveTab] = useState(featureTabs[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center bg-[#002d5b] overflow-hidden">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071823991-b967a68e8330?auto=format&fit=crop&q=80"
              alt="Office background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002d5b] via-[#002d5b]/90 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-12 pb-24 md:pb-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <AnimatedSection className="w-full lg:w-[55%]">
                {/* CarpacSoft Logo */}
                <div className="mb-8 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <img src="/Logo.jpg" alt="CarpacSoft Logo" className="h-10 w-auto rounded-full shadow-sm" />
                    <span className="text-white text-lg font-light tracking-wide">
                      <span className="font-bold">CarpacSoft</span> <sup className="text-[8px] ml-0.5">®</sup>
                    </span>
                  </div>
                </div>


                <h1 className="text-3xl md:text-5xl lg:text-[45px] font-bold mb-6 leading-tight text-white max-w-2xl">
                  CarpacSoft is the Leading Solution for Requirements Management and Traceability
                </h1>

                <p className="text-[17px] md:text-lg text-blue-100 mb-10 leading-relaxed max-w-xl opacity-90">
                  The world's most innovative companies use CarpacSoft to manage requirements with Live Traceability™ to improve quality, reduce rework, prove compliance, and get to market faster.
                </p>

                <div className="flex flex-wrap gap-5">
                  <Link to="/trial">
                    <Button
                      className="text-white font-bold px-10 py-7 text-sm rounded-full tracking-widest uppercase transition-all shadow-lg border-none"
                      style={{ background: "linear-gradient(90deg, #E25100 0%, #FF9900 100%)" }}
                    >
                      GET STARTED
                    </Button>
                  </Link>
                  <Link to="/company/contact">
                    <Button
                      className="text-white font-bold px-10 py-7 text-sm rounded-full tracking-widest uppercase transition-all shadow-lg border-none"
                      style={{ background: "linear-gradient(90deg, #0066CC 0%, #00D1D1 100%)" }}
                    >
                      BOOK A DEMO
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              {/* Laptop Illustration */}
              <AnimatedSection className="w-full lg:w-[45%] relative">
                <div className="relative group">
                  {/* Laptop Frame */}
                  <div className="relative z-10 scale-110 lg:scale-[1.3] transform lg:translate-x-12 translate-y-12">
                    <img
                      src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                      alt="CarpacSoft Software Interface"
                      className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[#F0F7FF]">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] font-medium text-slate-700 mb-6 max-w-5xl mx-auto leading-tight">
                Features to Empower Your Team and Improve Your Requirements Management Process
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light">
                Streamline your team's engineering process from requirements, to modelling, to verification and equip them with the freedom to innovate and the tools they need to do their best work.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 items-start">
                {/* Sidebar Tabs */}
                <div className="lg:w-[320px] w-full space-y-2 shrink-0">
                  {featureTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab); setIsVideoPlaying(false); setLightboxImage(null); }}
                      className={cn(
                        "w-full flex items-center justify-between p-4 px-6 text-left transition-all rounded-lg group shadow-sm",
                        activeTab.id === tab.id
                          ? "bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] text-white"
                          : "bg-white text-slate-600 hover:bg-slate-50 shadow-none border-none"
                      )}
                    >
                      <span className="font-medium text-base">{tab.title}</span>
                      <ArrowRight className={cn(
                        "h-4 w-4 transition-colors",
                        activeTab.id === tab.id ? "text-white" : "text-[#00A3E0]"
                      )} />
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 bg-white rounded-[20px] shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] p-10 lg:p-14 border border-slate-100">
                  <div className="mb-8">
                    <h4 className="text-[#00A3E0] font-medium text-xl mb-3 tracking-wide">
                      {activeTab.title}
                    </h4>
                    <h3 className="text-[26px] font-medium text-slate-800 leading-tight mb-8">
                      {activeTab.subtitle}
                    </h3>
                  </div>

                  {/* Tab-specific Image/Video Area */}
                  {activeTab.id === "collaboration" ? (
                    <CollaborationScreenshot />
                  ) : activeTab.id === "review" ? (
                    isVideoPlaying ? (
                      <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            src={activeTab.videoUrl || "https://fast.wistia.net/embed/iframe/atu6s8h5s4?autoPlay=true"}
                            title={activeTab.title}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                          />
                        </div>
                      </div>
                    ) : (
                      <ReviewCenterScreenshot onPlay={() => setIsVideoPlaying(true)} />
                    )
                  ) : activeTab.id === "test" ? (
                    isVideoPlaying ? (
                      <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            src={activeTab.videoUrl || "https://fast.wistia.net/embed/iframe/0130tanmy3?autoPlay=true"}
                            title={activeTab.title}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                          />
                        </div>
                      </div>
                    ) : (
                      <TestManagementScreenshot onPlay={() => setIsVideoPlaying(true)} />
                    )
                  ) : activeTab.id === "risk" ? (
                    <RiskManagementScreenshot onClick={() => setLightboxImage("https://www.jamasoftware.com/media/2021/03/features-tab5-risk-and-hazard-analysis.png")} />
                  ) : activeTab.id === "reuse" ? (
                    <ReuseManagementScreenshot onClick={() => setLightboxImage("https://www.jamasoftware.com/media/2021/03/features-tab6-reause-and-baseline-management.png")} />
                  ) : activeTab.id === "authoring" ? (
                    <AuthoringScreenshot onClick={() => setLightboxImage("https://www.jamasoftware.com/media/2023/01/requirements-authoring-ss-23.jpg")} />
                  ) : activeTab.id === "quality" ? (
                    <QualityScreenshot onClick={() => setLightboxImage("https://www.jamasoftware.com/media/2024/11/jama-connect-advisor-single-statement-authoring-screenshot.jpg")} />
                  ) : (
                    <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg bg-slate-100 border border-slate-200">
                      {isVideoPlaying ? (
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            src={activeTab.videoUrl || "https://fast.wistia.net/embed/iframe/cyuubluabs?autoPlay=true"}
                            title={activeTab.title}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                          />
                        </div>
                      ) : (
                        <div className="group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                          <img
                            src="https://www.jamasoftware.com/media/2021/02/jama-connect-laptop-img-1030x553.png"
                            alt={activeTab.title}
                            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#002d5b]/90 text-white rounded-full flex items-center justify-center shadow-2xl scale-110 group-hover:scale-125 transition-transform">
                              <Play className="h-7 w-7 fill-white ml-1" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="prose prose-slate max-w-none mb-10">
                    <p className="text-[#4a5568] text-[17px] leading-relaxed font-medium mb-6">
                      {activeTab.description}
                    </p>
                    <ul className="space-y-3 list-none p-0">
                      {activeTab.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#4a5568] text-[16px] leading-relaxed">
                          <span className="text-xl leading-none mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-5">
                    <Link to="/resources/library" target="_blank">
                      <Button variant="outline" className="rounded-full border-[#00A3E0] text-[#00A3E0] hover:bg-sky-50 px-10 py-7 font-bold text-sm tracking-widest transition-all uppercase">
                        LEARN MORE
                      </Button>
                    </Link>
                    {activeTab.videoLabel && (
                      <Button className="bg-gradient-to-r from-[#00A3E0] to-[#01CFD1] hover:opacity-90 text-white rounded-full px-10 py-7 font-bold text-sm tracking-widest transition-all shadow-md">
                        {activeTab.videoLabel.toUpperCase()}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <FeaturesAdditionalSection />
        <FeaturesDemoSection />
        <FeaturesSecuritySection />
        <DemoFormSection />
      </main>
      <Footer />
      <ChatWidget />

      {/* Lightbox for Feature Image */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setLightboxImage(null)}>
          <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Feature Full View"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;



