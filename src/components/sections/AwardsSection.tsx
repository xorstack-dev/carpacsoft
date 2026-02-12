import { Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

export function AwardsSection() {
  return (
    <section className="py-20 bg-[#6384a6] text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <AnimatedSection className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
            CarpacSoft is Consistently Named the Leader for Requirements Management Software
          </h2>
        </AnimatedSection>

        {/* Badges Row */}
        <AnimatedSection className="flex flex-wrap justify-center items-end gap-6 mb-16">
          {/* Badge 1 */}
          <div className="w-32 h-44 bg-white relative shadow-lg clip-path-badge items-center flex flex-col">
            <div className="w-full h-8 bg-white border-b border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 uppercase">Winter 2026</div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#ff492c] items-center flex justify-center text-white font-bold text-xs">G2</div>
            <div className="flex-1 flex items-center justify-center font-bold text-jama-navy text-xl">Leader</div>
            <div className="w-full h-12 bg-gradient-to-r from-[#ffcf40] to-[#ff492c] absolute bottom-0 clip-path-triangle-bottom"></div>
          </div>
          {/* Badge 2 */}
          <div className="w-32 h-44 bg-white relative shadow-lg clip-path-badge items-center flex flex-col">
            <div className="w-full h-8 bg-white border-b border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 uppercase">Winter 2026</div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#ff492c] items-center flex justify-center text-white font-bold text-xs">G2</div>
            <div className="flex-1 flex flex-col items-center justify-center font-bold text-jama-navy leading-none">
              <span className="text-lg">Best</span>
              <span className="text-sm">Relationship</span>
            </div>
            <div className="w-full h-12 bg-gradient-to-r from-[#40c7ff] to-[#2cd2ff] absolute bottom-0 clip-path-triangle-bottom"></div>
          </div>
          {/* Badge 3: TrustRadius */}
          <div className="w-36 h-40 bg-[#165bf2] relative shadow-lg mask-hexagon flex flex-col items-center justify-center text-white p-2">
            <div className="text-[10px] uppercase font-bold tracking-wider mb-1">TrustRadius</div>
            <div className="text-xl font-bold leading-tight text-center">Top Rated</div>
            <div className="text-lg font-bold">2025</div>
            <div className="flex gap-1 mt-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-white text-white" />)}
            </div>
          </div>
          {/* Badge 4: Company of Year */}
          <div className="w-36 h-40 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#d4af37] opacity-20 rounded-full blur-xl"></div>
            <Award className="w-36 h-36 text-[#d4af37] absolute" strokeWidth={1} />
            <div className="relative z-10 text-center text-white drop-shadow-md">
              <div className="text-[8px] font-bold uppercase">Requirements Management</div>
              <div className="text-[8px] font-bold uppercase">Software</div>
              <div className="text-[10px] font-bold uppercase bg-white/20 px-1 rounded my-1">Company of the Year</div>
              <div className="text-xs font-bold">2025</div>
            </div>
          </div>
          {/* Badge 5 */}
          <div className="w-32 h-44 bg-white relative shadow-lg clip-path-badge items-center flex flex-col">
            <div className="w-full h-8 bg-white border-b border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 uppercase">Winter 2026</div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#ff492c] items-center flex justify-center text-white font-bold text-xs">G2</div>
            <div className="flex-1 flex flex-col items-center justify-center font-bold text-jama-navy">
              <span className="text-xl">Leader</span>
              <span className="text-[8px] mt-1 text-slate-400 uppercase">Enterprise</span>
            </div>
            <div className="w-full h-12 bg-gradient-to-r from-[#ffcf40] to-[#ff492c] absolute bottom-0 clip-path-triangle-bottom"></div>
          </div>
        </AnimatedSection>

        {/* Logos Row */}
        <AnimatedSection className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-90 mb-16 grayscale">
          <div className="text-2xl font-bold tracking-tighter">ABIOMED</div>
          <div className="font-bold text-xl flex flex-col leading-none"><span>Panasonic</span><span className="text-sm font-normal tracking-widest">Automotive</span></div>
          <div className="text-2xl font-black tracking-widest">MERCK</div>
          <div className="flex items-center gap-2"><div className="w-8 h-8 border-2 border-white rounded-tr-xl rounded-bl-xl"></div><span className="text-xl font-bold tracking-[0.2em]">RIMAC</span></div>
          <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full border-2 border-dashed border-white animate-spin-slow"></div><div className="flex flex-col leading-none font-bold"><span>Collins</span><span>Aerospace</span></div></div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl italic font-serif leading-relaxed opacity-90">
            "CarpacSoft has brought some new life to our requirements management (and how we see the inter-connectivity of functional requirements with System Requirement Specifications), better dashboards and reporting for everything it supports from printing test plans, requirements, specifications, and test runs."
          </p>
        </AnimatedSection>
      </div>

      <style>{`
        .clip-path-badge { clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%); }
        .clip-path-triangle-bottom { clip-path: polygon(0 0, 100% 0, 50% 100%); }
        .mask-hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
      `}</style>
    </section>
  );
}

export default AwardsSection;



