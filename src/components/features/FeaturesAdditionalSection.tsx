import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const additionalCapabilities = [
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="10" width="30" height="30" rx="4" fill="#01CFD1" fillOpacity="0.2" stroke="#01CFD1" strokeWidth="2" />
        <path d="M45 25L48 28L55 21" stroke="#01CFD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 40V55" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="15" y="55" width="25" height="25" rx="4" fill="#4B63FF" fillOpacity="0.2" stroke="#4B63FF" strokeWidth="2" />
        <path d="M22 67L25 70L32 63" stroke="#4B63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="72.5" cy="67.5" r="12.5" fill="#FFB800" fillOpacity="0.2" stroke="#FFB800" strokeWidth="2" />
        <circle cx="72.5" cy="67.5" r="4" fill="#FFB800" />
        <path d="M40 67.5H60" stroke="white" strokeWidth="2" />
      </svg>
    ),
    title: "Workflow & Configuration Management",
    description: "Easy configuration that supports your existing processes, and enables maximum adoption and usability across teams."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="20" width="35" height="45" rx="2" fill="#FFB800" fillOpacity="0.8" />
        <rect x="42" y="32" width="35" height="45" rx="2" fill="#01CFD1" fillOpacity="0.8" />
        <path d="M48 40L38 40M48 50L38 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 72L22 72L22 59" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Import-Export Wizard",
    description: "Flexibility to import/export requirements data to/from CarpacSoft to operate effectively within the customer/supply chain."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" stroke="#00A3E0" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="#00A3E0" fillOpacity="0.3" />
        <circle cx="50" cy="50" r="6" fill="#00A3E0" />
        <path d="M50 10V20M50 80V90M10 50H20M80 50H90" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Open REST API",
    description: "Extend tools across the product development lifecycle by having the flexibility to create connectors to the existing tool chain, in-house."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="30" width="50" height="40" rx="2" stroke="white" strokeWidth="2" fill="#002d5b" />
        <path d="M30 60V50M40 60V40M50 60V50M60 60V35M70 60V50" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
        <rect x="30" y="35" width="10" height="2" fill="white" />
        <rect x="30" y="40" width="6" height="2" fill="white" />
      </svg>
    ),
    title: "Visibility & Compliance Reporting",
    description: "Easily create and share reports that provide visibility across the product development lifecycle to expose relationships and dependencies between teams, and demonstrate to auditors the connections between regulations, requirements, and tests."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 65C30 45 45 30 50 30C55 30 70 45 70 65" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <rect x="20" y="65" width="12" height="15" rx="2" fill="#01CFD1" />
        <rect x="68" y="65" width="12" height="15" rx="2" fill="#01CFD1" />
        <path d="M68 80C68 90 55 90 55 90" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="55" y="15" width="30" height="25" rx="4" fill="#4B63FF" stroke="white" strokeWidth="1" />
        <path d="M65 25H75M65 30H70" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Customer Support & Community",
    description: "Our in-house support team ensures software upgrades are handled in a quality and timely manner and our managed, on-line community supports on-going education and enhanced product adoption."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="20" height="30" fill="#4B63FF" fillOpacity="0.8" />
        <rect x="45" y="30" width="20" height="40" fill="#01CFD1" fillOpacity="0.8" />
        <rect x="70" y="45" width="20" height="25" fill="#FFB800" fillOpacity="0.8" />
        <path d="M25 80H75" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Subscription-based Scalable Deployment Models",
    description: "Deployment for both cloud & on-prem models, scalable to meet each client's unique needs. Easily manage changes & software releases at any pace you choose—regardless of your deployment type."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="20" height="20" fill="#01CFD1" stroke="white" />
        <circle cx="65" cy="65" r="10" fill="#4B63FF" />
        <path d="M50 40Q65 40 65 55" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="65" cy="40" r="5" fill="#FFB800" />
      </svg>
    ),
    title: "Customer & Supply Chain Integration Connectors",
    description: "Seamlessly connect to other tools across the development lifecycle to ensure traceability and alignment with development teams."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="20" width="40" height="60" rx="2" stroke="white" strokeWidth="2" fill="#002d5b" />
        <path d="M35 30H45M35 45H45M35 60H45" stroke="#01CFD1" strokeWidth="2" />
        <path d="M50 30H65M50 45H65M50 60H65" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Validation & Functional Safety Kits",
    description: "Streamline your process and reduce the time required for validation of CarpacSoft and ongoing incremental enhancements in safety-critical environments."
  },
  {
    icon: (
      <svg className="w-16 h-16 mb-4 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20C40 20 30 25 30 35M50 80C60 80 70 75 70 65" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <rect x="40" y="45" width="20" height="15" rx="2" fill="#0066CC" stroke="white" />
        <rect x="45" y="40" width="10" height="5" fill="#01CFD1" />
      </svg>
    ),
    title: "CarpacSoft Interchange™ for ReqIF",
    description: "Enable the transfer of requirements and metadata between customers and suppliers or migration of requirements data from other ReqIF-compliant tools using the industry standard ReqIF file format."
  }
];

export default function FeaturesAdditionalSection() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  return (
    <section className="py-24 bg-[#011432] text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-6 text-white">
            Additional Capabilities in CarpacSoft:
          </h2>
          <p className="text-[17px] text-blue-200 text-center max-w-[900px] mx-auto leading-relaxed font-light opacity-90">
            CarpacSoft brings people and data together in one place, providing visibility and actionable insights into the product development lifecycle. Share updates in seconds, discover issues weeks sooner, and have one place to collaborate with key stakeholders — in real time.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-14 max-w-7xl mx-auto text-center mb-28">
          {additionalCapabilities.map((cap, i) => (
            <AnimatedSection key={i} className="flex flex-col items-center">
              <div className="h-20 flex items-center justify-center mb-6">
                {cap.icon}
              </div>
              <h3 className="text-[19px] font-bold text-[#F28E1C] mb-4 min-h-[56px] flex items-center justify-center leading-tight">
                {cap.title}
              </h3>
              <p className="text-[#E2E8F0] text-sm leading-relaxed max-w-[340px] mx-auto opacity-80">
                {cap.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="flex flex-wrap justify-center gap-6 pb-12">
          <Button
            className="bg-[#01CFD1] hover:bg-[#00B8B8] text-white rounded-full px-12 py-8 font-bold text-sm tracking-widest transition-all shadow-lg uppercase"
            onClick={() => setVideoUrl("https://fast.wistia.net/embed/iframe/ahilhdud1v?autoPlay=true")}
          >
            SEE CARPACSOFT IN ACTION
          </Button>
          <Button
            className="rounded-full border-2 border-[#00A3E0] text-white hover:bg-white/10 px-12 py-8 font-bold text-sm tracking-widest transition-all uppercase bg-transparent"
            onClick={() => setVideoUrl("https://fast.wistia.net/embed/iframe/sdjf1mehwe?autoPlay=true")}
          >
            <span className="flex items-center gap-2">
              <span className="text-[#01CFD1]">▶</span> WHY LIVE TRACEABILITY™?
            </span>
          </Button>
        </AnimatedSection>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setVideoUrl(null)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 rounded-full p-2 transition-colors"
              onClick={() => setVideoUrl(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src={videoUrl}
              title="CarpacSoft Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </section>
  );
}



