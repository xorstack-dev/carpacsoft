import { Link } from "react-router-dom";
import { Brain, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export function AISection() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left Column - Visual */}
          <AnimatedSection className="relative flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-orange-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Brain className="w-32 h-32 text-jama-navy stroke-1" />
                  <Cog className="absolute top-4 left-6 w-12 h-12 text-jama-orange animate-spin-slow" />
                  <Cog className="absolute top-10 right-6 w-10 h-10 text-blue-500 animate-spin-slow animation-delay-500" />
                  <div className="absolute -top-8 -right-12 bg-sky-500 text-white p-3 rounded-xl rounded-bl-none shadow-lg transform rotate-6 border-2 border-white">
                    <div className="h-2 w-8 bg-white/30 rounded mb-1"></div>
                    <div className="h-2 w-5 bg-white/30 rounded"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-4 bg-jama-navy p-3 rounded-lg shadow-xl border-2 border-jama-orange flex flex-col items-center">
                    <div className="text-jama-orange font-bold text-2xl font-mono leading-none">AI</div>
                    <div className="w-full h-[2px] bg-jama-orange mt-1"></div>
                    <div className="flex gap-1 mt-1 justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 -left-4 w-4 h-[2px] bg-jama-orange"></div>
                    <div className="absolute -top-4 left-1/2 w-[2px] h-4 bg-jama-orange"></div>
                  </div>
                  <div className="absolute -left-12 top-0 text-sky-400 font-bold text-xl">+</div>
                  <div className="absolute right-0 bottom-0 text-orange-400 font-bold text-xl">+</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-jama-navy leading-[1.15] mb-6">
              Unlock the power of Artificial Intelligence and Natural Language Processing.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Successful product delivery begins with understanding the right user needs and crafting clear, concise requirements. Improve efficiency, elevate quality, and fast-track innovation like never before with the power of <span className="font-semibold text-jama-navy">AWS Generative AI</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solutions/ai">
                <Button variant="outline" className="rounded-full px-8 py-6 text-jama-blue border-jama-blue hover:bg-[#e9ecef] hover:border-[#00aeef] hover:text-[#2b7bb5] font-bold text-sm tracking-wide transition-all border-2">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

export default AISection;



