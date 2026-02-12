import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">

          {/* Left Column - Video Visual */}
          <AnimatedSection className="w-full lg:w-[52%] relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-100 bg-slate-50">
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source src="https://www.jamasoftware.com/media/2024/03/lte-explorer-sm.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection className="w-full lg:w-[48%] text-left">
            <h2 className="text-[36px] lg:text-[45px] leading-[1.1] font-bold text-[#002d5b] mb-8">
              The #1 problem in product development is identifying risk early across siloed teams and tools.
            </h2>
            <p className="text-[17px] text-[#4a5568] mb-10 leading-[1.6]">
              Only CarpacSoft, the top-rated requirements management and traceability software, auto-detects development risk to reduce rework, delays, and cost overruns.
            </p>
            <div className="space-y-6 mb-12">
              <p className="font-bold text-[#002d5b] text-sm uppercase tracking-[0.1em]">Identify in real-time:</p>
              <ul className="space-y-4">
                {[
                  "Poorly written requirements with recommended improvements",
                  "Missing, changed, or late requirements",
                  "Gaps in verification and validation test coverage",
                  "Changes made in one engineering discipline that impact others"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#f28e1c] shrink-0" />
                    <span className="text-[17px] text-[#4a5568] leading-tight font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/product/jama-connect">
              <Button variant="outline" className="rounded-full px-10 py-7 text-[#00aed9] border-[#00aed9] hover:bg-sky-50 hover:text-[#008cb0] hover:border-[#008cb0] font-bold text-[15px] tracking-[0.05em] transition-all border-2 uppercase bg-transparent">
                LEARN MORE
              </Button>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

export default ProblemSection;



