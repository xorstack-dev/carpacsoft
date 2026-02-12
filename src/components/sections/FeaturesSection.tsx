import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    text: "Intelligently Improve Requirements",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#f0f9ff" className="opacity-50" />
        <path d="M25 65 L40 55 L55 60 L75 40" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="65" r="3" fill="#3b82f6" /><circle cx="40" cy="55" r="3" fill="#3b82f6" /><circle cx="55" cy="60" r="3" fill="#3b82f6" /><circle cx="75" cy="40" r="3" fill="#3b82f6" />
        <circle cx="45" cy="45" r="18" fill="none" stroke="#f59e0b" strokeWidth="4" />
        <path d="M58 58 L75 75" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <circle cx="45" cy="45" r="14" fill="#fff" fillOpacity="0.4" />
        <text x="20" y="30" fill="#60a5fa" fontSize="12">+</text><text x="80" y="70" fill="#60a5fa" fontSize="12">+</text>
      </svg>
    )
  },
  {
    text: "Bring All Collaboration and Reviews Online",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#f5f3ff" className="opacity-50" />
        <rect x="25" y="45" width="40" height="25" rx="4" fill="#8b5cf6" /><path d="M30 70 L25 80 L40 70" fill="#8b5cf6" />
        <line x1="30" y1="53" x2="60" y2="53" stroke="white" strokeWidth="2" /><line x1="30" y1="60" x2="50" y2="60" stroke="white" strokeWidth="2" />
        <rect x="50" y="30" width="35" height="20" rx="4" fill="#0ea5e9" /><path d="M80 50 L85 58 L70 50" fill="#0ea5e9" />
        <line x1="55" y1="38" x2="80" y2="38" stroke="white" strokeWidth="2" />
        <path d="M40 15 C40 5 60 5 60 15 C60 22 55 25 55 30 L45 30 C45 25 40 22 40 15" fill="#fbbf24" /><rect x="46" y="31" width="8" height="3" fill="#9ca3af" />
        <circle cx="20" cy="30" r="2" fill="#fbbf24" /><circle cx="85" cy="20" r="2" fill="#0ea5e9" />
      </svg>
    )
  },
  {
    text: "Unify Test Case Management",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#ecfdf5" className="opacity-50" />
        <rect x="55" y="30" width="30" height="40" rx="2" fill="#3b82f6" />
        <rect x="60" y="35" width="20" height="2" fill="white" opacity="0.5" /><rect x="60" y="42" width="20" height="2" fill="white" opacity="0.5" /><rect x="60" y="49" width="15" height="2" fill="white" opacity="0.5" />
        <rect x="58" y="55" width="24" height="10" rx="1" fill="#059669" /><path d="M65 60 L68 63 L75 56" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="35" cy="50" r="22" fill="white" stroke="#334155" strokeWidth="2" />
        <path d="M35 50 L45 40" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /><circle cx="35" cy="50" r="3" fill="#334155" />
        <path d="M20 50 A 15 15 0 0 1 50 50" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
      </svg>
    )
  },
  {
    text: "Auto-Detect Development Risk",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#fdf4ff" className="opacity-50" />
        <rect x="20" y="30" width="60" height="40" rx="3" fill="white" stroke="#334155" strokeWidth="2" /><path d="M30 70 L70 70 L75 80 L25 80 Z" fill="#e2e8f0" /><rect x="25" y="35" width="50" height="30" fill="#f8fafc" />
        <rect x="30" y="50" width="5" height="15" fill="#8b5cf6" /><rect x="38" y="45" width="5" height="20" fill="#a855f7" /><rect x="46" y="40" width="5" height="25" fill="#d946ef" /><rect x="54" y="55" width="5" height="10" fill="#ec4899" />
        <path d="M30 45 L40 40 L50 35 L60 45" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="80" cy="25" r="8" fill="#e0f2fe" /><path d="M80 21 L80 29 M76 25 L84 25" stroke="#0ea5e9" strokeWidth="2" />
      </svg>
    )
  },
  {
    text: "Maintain Product State Across Tools",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#fff7ed" className="opacity-50" />
        <rect x="40" y="20" width="20" height="15" rx="2" fill="#14b8a6" stroke="#0f766e" strokeWidth="1" />
        <path d="M50 35 L50 45" stroke="#94a3b8" strokeWidth="2" /><line x1="30" y1="45" x2="70" y2="45" stroke="#94a3b8" strokeWidth="2" /><line x1="30" y1="45" x2="30" y2="55" stroke="#94a3b8" strokeWidth="2" /><line x1="70" y1="45" x2="70" y2="55" stroke="#94a3b8" strokeWidth="2" />
        <rect x="20" y="55" width="20" height="15" rx="2" fill="#0ea5e9" stroke="#0369a1" strokeWidth="1" /><rect x="60" y="55" width="20" height="15" rx="2" fill="#6366f1" stroke="#4338ca" strokeWidth="1" />
        <path d="M30 70 C 30 80, 70 80, 70 70" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50" cy="75" r="12" fill="#fff" stroke="#f97316" strokeWidth="1.5" /><text x="46" y="80" fontSize="14" fill="#f97316">+</text>
      </svg>
    )
  },
  {
    text: "Manage Product Complexity and Scale",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
        <circle cx="50" cy="50" r="45" fill="#ecfeff" className="opacity-50" />
        <rect x="60" y="40" width="20" height="40" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1" />
        <rect x="64" y="45" width="4" height="4" fill="#bae6fd" /><rect x="72" y="45" width="4" height="4" fill="#bae6fd" /><rect x="64" y="55" width="4" height="4" fill="#bae6fd" /><rect x="72" y="55" width="4" height="4" fill="#bae6fd" />
        <rect x="30" y="50" width="25" height="30" fill="#06b6d4" stroke="#0891b2" strokeWidth="1" />
        <rect x="35" y="55" width="4" height="4" fill="#cffafe" /><rect x="45" y="55" width="4" height="4" fill="#cffafe" /><rect x="35" y="65" width="4" height="4" fill="#cffafe" /><rect x="45" y="65" width="4" height="4" fill="#cffafe" />
        <line x1="55" y1="50" x2="60" y2="40" stroke="#fcd34d" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="25" cy="30" r="8" fill="#fff" stroke="#64748b" strokeWidth="1" /><path d="M25 30 L35 50" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-jama-navy leading-tight mb-6">
            Only CarpacSoft Provides the Functionality Critical for Your Success
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            To measurably reduce the risk of defects, delays and cost overruns, your requirements management & traceability software must do these six critical things — only CarpacSoft does.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="mb-6 transform transition-transform duration-500 ease-out group-hover:scale-110">
                  {feature.illustration}
                </div>
                <h3 className="text-xl font-bold text-jama-navy max-w-[280px] leading-snug group-hover:text-jama-blue transition-colors">
                  {feature.text}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link to="/resources/features">
            <Button variant="outline" className="rounded-full px-10 py-7 text-jama-blue border-jama-blue hover:bg-sky-50 hover:text-[#008cb0] hover:border-[#008cb0] font-bold text-sm tracking-widest transition-all border-2 uppercase">
              CarpacSoft FEATURES
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default FeaturesSection;



