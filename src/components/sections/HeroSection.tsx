import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accessibility } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DemoFormSection from "@/components/features/DemoFormSection";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden pt-20 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-jama-navy leading-[1.15] mb-8 tracking-tight">
            Intelligently Improve Your Development Process
            <br className="hidden md:block" />
            with CarpacSoft<sup className="text-2xl top-[-1.5em] relative">®</sup> Requirements Management &
            <br className="hidden md:block" />
            Traceability Software
          </h1>

          <p className="text-base md:text-lg text-jama-navy/80 mb-10 max-w-4xl mx-auto leading-relaxed">
            CarpacSoft is the only software platform that intelligently improves product requirement quality, auto-detects product development risk, and
            measurably increases performance across multi-disciplinary teams developing products, systems, and software — while still allowing the use of
            their tools of choice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/trial">
              <Button size="lg" className="min-w-[180px] h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 shadow-lg hover:shadow-xl transition-all uppercase tracking-wide text-sm">
                GET STARTED
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="min-w-[180px] h-12 rounded-full bg-gradient-to-r from-[#00A0D1] to-[#00C2B2] hover:from-[#008AB5] hover:to-[#00A89A] text-white font-bold px-8 shadow-lg hover:shadow-xl transition-all uppercase tracking-wide text-sm border-0">
                  BOOK A DEMO
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] w-full p-0 overflow-y-auto max-h-[90vh] bg-transparent border-none">
                <DemoFormSection />
              </DialogContent>
            </Dialog>
          </div>

        </AnimatedSection>
      </div>

      {/* Accessibility Widget - Bottom Left Fixed */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-[#0052cc] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0043a6] transition-colors" aria-label="Accessibility settings">
          <Accessibility className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;



