import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-jama-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-white/70">
              See what our customers have to say about CarpacSoft
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-jama-orange/20" />
            
            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl text-jama-navy font-medium mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-jama-light-blue rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-jama-navy">
                    {currentTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-jama-navy">{currentTestimonial.author}</p>
                  <p className="text-sm text-jama-gray">
                    {currentTestimonial.title}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:-mx-16">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto w-12 h-12 bg-jama-navy text-white rounded-full flex items-center justify-center hover:bg-jama-orange transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto w-12 h-12 bg-jama-navy text-white rounded-full flex items-center justify-center hover:bg-jama-orange transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-jama-orange" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;



