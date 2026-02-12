import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export function BenchmarkSection() {
    return (
        <section className="py-20 bg-emerald-50/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">

                    {/* Left Column - Visual */}
                    <AnimatedSection className="relative group w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-72 h-96 bg-white rounded-lg shadow-xl border border-slate-200 p-6 transform rotate-[-6deg] transition-transform duration-500 group-hover:rotate-0">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-jama-orange rounded flex items-center justify-center text-white font-bold text-xs">J</div>
                                <div className="h-2 w-24 bg-slate-200 rounded"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-32 bg-slate-100 rounded flex items-end justify-around p-2 pb-0 overflow-hidden">
                                    <div className="w-8 h-16 bg-blue-300 rounded-t"></div>
                                    <div className="w-8 h-24 bg-blue-400 rounded-t"></div>
                                    <div className="w-8 h-20 bg-blue-300 rounded-t"></div>
                                    <div className="w-8 h-28 bg-jama-orange rounded-t"></div>
                                </div>
                                <div className="h-4 w-full bg-slate-100 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                                <div className="h-4 w-4/6 bg-slate-100 rounded"></div>
                            </div>
                            <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-jama-navy p-4 rounded-xl shadow-2xl border-4 border-white flex flex-col items-center animate-up-down">
                                <ShieldCheck className="w-16 h-16 text-white mb-2" />
                            </div>
                            <div className="absolute -right-6 top-10 bg-white p-2 rounded-lg shadow-lg border border-slate-100">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Column */}
                    <AnimatedSection className="w-full lg:w-1/2 text-left">
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-jama-navy leading-tight mb-6">
                            Product, Systems, and Software Development Teams that Use CarpacSoft Perform Better.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            With Trace Scores™, you can measure your traceability to improve quality and accelerate time to market. Achieve higher Traceability Scores with CarpacSoft and identify defects two times faster and reduce test failures by nearly 3x.
                        </p>
                        <div className="mb-6">
                            <h3 className="font-bold text-jama-navy text-lg mb-2">The Requirements Traceability Benchmark</h3>
                            <p className="text-slate-600">
                                This first-ever, large-scale empirical research, confirms that higher Traceability Scores in CarpacSoft correlate with lower risk and higher quality.
                            </p>
                        </div>
                        <Link to="/resources/benchmark-report">
                            <Button variant="outline" className="rounded-full px-8 py-6 text-jama-blue border-jama-blue hover:bg-slate-100 hover:text-jama-blue font-bold text-sm tracking-wide transition-all border-2 uppercase">
                                GET THE REPORT
                            </Button>
                        </Link>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}

export default BenchmarkSection;



