import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, BookOpen, Laptop, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export function SuccessSection() {
  return (
    <section>
      {/* Part 1: Committed to Success */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
            <AnimatedSection className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-jama-navy leading-tight mb-6">
                We are Committed to Your Success
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Unlike many of our competitors, we invest in a team of industry experts and share best practices to ensure you achieve your business goals. Our Success Programs provide an easy and cost-effective way to rapidly adopt CarpacSoft, to accelerate time to value and maximize your development success.
              </p>
              <Link to="/resources/success-programs">
                <Button variant="outline" className="rounded-full px-8 py-6 text-jama-blue border-jama-blue hover:bg-slate-100 hover:text-jama-blue font-bold text-sm tracking-wide transition-all border-2 uppercase">
                  LEARN ABOUT OUR SUCCESS PROGRAMS
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center">
              <div className="absolute top-0 left-10 w-40 h-40 rounded-full bg-green-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden z-10">
                <svg viewBox="0 0 100 100" className="w-24 h-24 text-jama-orange">
                  <path d="M30 80 Q 30 40 40 30 L 40 10 L 50 10 L 50 30 Q 70 30 70 80" fill="currentColor" />
                  <rect x="35" y="80" width="5" height="15" fill="currentColor" />
                  <rect x="65" y="80" width="5" height="15" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white border-4 border-white shadow-2xl flex items-center justify-center z-20">
                <Trophy className="w-24 h-24 text-blue-500 fill-blue-500" strokeWidth={1} />
                <Star className="absolute w-8 h-8 text-yellow-400 fill-yellow-400 top-16" />
              </div>
              <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden z-10">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-orange-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-100"></div>
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-300" style={{ zIndex: 0 }}>
                <path d="M 100 100 Q 200 50 300 100 Q 400 200 300 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Part 2: Essential Guide */}
      <div className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(45deg, #e0f2fe 25%, transparent 25%), linear-gradient(-45deg, #e0f2fe 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0f2fe 75%), linear-gradient(-45deg, transparent 75%, #e0f2fe 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
            <AnimatedSection className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl transform scale-150 opacity-50"></div>
                <div className="relative">
                  <Laptop className="w-64 h-64 text-jama-blue" strokeWidth={1} />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white w-40 h-32 flex items-center justify-center shadow-inner rounded">
                    <BookOpen className="w-20 h-20 text-jama-navy" />
                  </div>
                </div>
                <div className="absolute -left-10 top-1/2 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute right-0 top-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 -right-10 text-2xl text-blue-400">+</div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-jama-navy leading-tight mb-6">
                Essential Guide to Requirements Management and Traceability
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hardware and software complexity is rapidly increasing across all highly regulated industries. Smart organizations are mitigating risk by using modern requirements management tools to manage product, systems, and software development. Check out our Essential Guide to Requirements Management to up your requirements management game and stay ahead of the competition.
              </p>
              <Link to="/resources/essential-guide">
                <Button variant="outline" className="rounded-full px-8 py-6 text-jama-blue border-jama-blue hover:bg-slate-100 hover:text-jama-blue font-bold text-sm tracking-wide transition-all border-2 uppercase">
                  LEARN MORE
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessSection;



