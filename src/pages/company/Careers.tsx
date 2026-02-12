import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Calendar,
  Heart,
  Shield,
  Baby,
  PiggyBank,
  GraduationCap,
  Home,
  Bell,
  Search,
  ChevronDown,
  MapPin
} from "lucide-react";

// Benefits data
const benefits = [
  {
    icon: <Calendar size={32} className="text-[#0ea5e9]" />,
    title: "Time Off and Holidays",
    description: "We know that in order for you to give your best at work, rest and rejuvenation are required. Our policy ensures that you receive the paid time off you need for those breaks, plus time away during recognized public holidays.",
    extra: "In the USA, we have an honor-based, flexible time-off policy plus ten paid holidays."
  },
  {
    icon: <Heart size={32} className="text-[#ec4899]" />,
    title: "Healthcare",
    description: "We are committed to participating in medical, dental and vision plans in each of the countries where we operate to meet the needs of you and your family.",
    extra: "In the USA, we offer multiple medical, dental and vision plan choices with additional options for HSA & FSA plans."
  },
  {
    icon: <Shield size={32} className="text-[#0ea5e9]" />,
    title: "Life and Disability Plans",
    description: "We know that the unexpected can happen, and we are prepared to support you during times of illness and injury by participating in programs in each of the countries where we operate.",
    extra: "In the USA, we provide Life, AD&D, and Short- and Long-Term Disability Insurance plans at no cost to employees."
  },
  {
    icon: <Baby size={32} className="text-[#f59e0b]" />,
    title: "Paid Parental Leave",
    description: "We are proud to support parents in each country where we operate with paid leave programs that allow bonding time with new children in their family.",
    extra: "In the USA, we offer six weeks of paid parental leave for the birthing and non-birthing parents following the birth or adoption of a child."
  },
  {
    icon: <PiggyBank size={32} className="text-[#10b981]" />,
    title: "Plan for Retirement",
    description: "CarpacSoft participates in retirement plans within each of the countries we operate in.",
    extra: "In the USA, we offer a traditional 401(k) or Roth IRA with immediate vesting and 4% employer match."
  },
  {
    icon: <GraduationCap size={32} className="text-[#8b5cf6]" />,
    title: "Professional Development",
    description: "We can't stay ahead of the curve if our employees are falling behind it, which is why we prioritize and invest in your training and career growth opportunities.",
    extra: ""
  },
  {
    icon: <Home size={32} className="text-[#f59e0b]" />,
    title: "Work From Home Allowance",
    description: "Work from home expenses can add up! We'll help cover some of the overhead of remote work, including internet costs!",
    extra: ""
  }
];

// Job listings
const jobListings = [
  {
    department: "Go To Market",
    category: "Medical Devices and Life Sciences",
    title: "Associate Solutions Architect",
    location: "Remote - US"
  },
  {
    department: "Go To Market",
    category: "Solutions and Support",
    title: "Solutions Consultant",
    location: "Remote - US"
  }
];

// Life at Jama images
const lifeImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=300&h=200",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300&h=200"
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#1a4f78] to-[#003366] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                Careers at CarpacSoft
              </h1>
              <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                Join our team and discover why CarpacSoft is continually named a top place to work. Scroll down to check out our open positions. As a virtual first company, our positions are not restricted geographically.
              </p>
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wide text-xs">
                SEE OPEN POSITIONS
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* WHY CarpacSoft SECTION */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-start gap-16">
              {/* Illustration */}
              <AnimatedSection className="md:w-2/5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                    alt="Team collaboration"
                    className="rounded-xl shadow-xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0ea5e9]/20 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#f59e0b]/20 rounded-lg"></div>
                </div>
              </AnimatedSection>

              {/* Text */}
              <AnimatedSection delay={200} className="md:w-3/5">
                <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Why CarpacSoft?</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Our purpose is to ensure innovators succeed. Numerous firsts for humanity in fields such as fuel cells, electrification, space, autonomous vehicles, surgical robotics, and more all rely on us to bring these new products to life. Our clients are the top innovators on the planet and a great group with whom to work.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  At CarpacSoft, we nurture an <span className="underline">inclusive</span>, learning organization where a focus on professional growth thrives. We have high expectations for ourselves, but support each other through our Six Habits of Learning:
                </p>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><strong className="text-[#001e4d]">Embrace a Growth Mindset:</strong> For the company to grow, we all must grow. We all share and support each other in the joy of learning.</li>
                  <li><strong className="text-[#001e4d]">Follow the Scientific Method:</strong> We challenge ourselves to move past personal attachment to ideas and instead make observations and explore multiple hypotheses to improve key metric performance.</li>
                  <li><strong className="text-[#001e4d]">Guide our Clients Through Insight:</strong> We see across hundreds of companies to determine data-driven best practices that improve our clients' performance.</li>
                  <li><strong className="text-[#001e4d]">Lead with Empathy:</strong> We seek to understand different perspectives, we engage in constructive dialogue, and we resolve differences respectfully.</li>
                  <li><strong className="text-[#001e4d]">Think Virtual-First:</strong> We optimize virtual interactions for ourselves and our clients and we cherish our purposeful in-person interactions.</li>
                  <li><strong className="text-[#001e4d]">View Change as Opportunity:</strong> Change is a given; we respond quickly to opportunities and continuously improve our internal operations and ourselves.</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* COMMITTED TO GROWTH SECTION */}
        <section className="bg-[#001e4d] py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6 text-white">Committed to Each Jamanian's Growth</h2>
              <p className="text-sm text-blue-100 max-w-5xl mx-auto leading-relaxed">
                We recognize that each individual brings a unique background and set of experiences to CarpacSoft. We strive to ensure that all employees experience CarpacSoft as an inclusive, collaborative, and inspiring place to work. We provide professional growth opportunities by investing in our employees; by identifying and eliminating barriers to full participation; and by cultivating an environment where employees know they are supported and valued. As a result, we attract, hire, promote, and retain the most talented, compassionate people from diverse backgrounds.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="bg-[#f0f9ff] py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#001e4d] mb-6">Benefits</h2>
              <p className="text-sm text-slate-600 max-w-4xl mx-auto">
                CarpacSoft takes pride in offering competitive benefit programs that provide choices for the diverse and changing needs of our employees. The benefit package you are eligible for will depend upon your employment relationship with CarpacSoft and the country you work in, but our goal is the same for all.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 100} className="flex gap-4">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001e4d] mb-2">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">{benefit.description}</p>
                    {benefit.extra && <p className="text-xs text-slate-500 italic">{benefit.extra}</p>}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE AT JAMA SECTION */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-xl font-bold text-slate-700">Learn More about #lifeatjama by Following us on Twitter and LinkedIn</h2>
            </AnimatedSection>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
              {lifeImages.map((img, i) => (
                <AnimatedSection key={i} delay={i * 50}>
                  <div
                    className="aspect-square bg-cover bg-center rounded-lg hover:scale-105 transition-transform cursor-pointer shadow-md"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* JOB OPENINGS SECTION */}
        <section className="bg-[#f0f9ff] py-24" id="jobs">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0066cc] mb-4">Current Job Openings</h2>
              <p className="text-xs text-blue-600 max-w-3xl mx-auto">
                Please note that CarpacSoft is currently only hiring candidates who have the unrestricted right to work in their country of residence (this includes natural citizens or Green Card holders) and who live in eligible states or countries.
              </p>
            </AnimatedSection>

            {/* Job Alert */}
            <AnimatedSection delay={100} className="bg-white rounded-lg p-6 shadow-md mb-8">
              <div className="flex items-start gap-4">
                <Bell className="text-slate-400 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-[#001e4d] mb-1">Create a Job Alert</h3>
                  <p className="text-sm text-slate-600 mb-2">Level-up your career by having opportunities at CarpacSoft sent directly to your inbox.</p>
                  <a href="#" className="text-[#0066cc] text-sm hover:underline">Create alert</a>
                </div>
              </div>
            </AnimatedSection>

            {/* Search Filters */}
            <AnimatedSection delay={200} className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs font-bold text-slate-700 block mb-1">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#0066cc]"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                </div>
              </div>
              <div className="min-w-[150px]">
                <label className="text-xs font-bold text-slate-700 block mb-1">Department</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm appearance-none focus:outline-none focus:border-[#0066cc]">
                    <option>Select...</option>
                    <option>Engineering</option>
                    <option>Go To Market</option>
                    <option>Product</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                </div>
              </div>
              <div className="min-w-[150px]">
                <label className="text-xs font-bold text-slate-700 block mb-1">Office</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm appearance-none focus:outline-none focus:border-[#0066cc]">
                    <option>Select...</option>
                    <option>Remote - US</option>
                    <option>Portland, OR</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                </div>
              </div>
            </AnimatedSection>

            {/* Job Count */}
            <AnimatedSection delay={300}>
              <h3 className="text-2xl font-bold text-[#0066cc] mb-6">{jobListings.length} jobs</h3>
            </AnimatedSection>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobListings.map((job, i) => (
                <AnimatedSection key={i} delay={400 + i * 100}>
                  <div className="border-b border-slate-200 pb-6">
                    <p className="text-xs text-red-500 font-bold mb-1">{job.department}</p>
                    <h4 className="text-xl font-bold text-[#0066cc] mb-2">{job.category}</h4>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[#001e4d]">{job.title}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* EEOC STATEMENT */}
        <section className="bg-[#001e4d] py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl font-bold mb-6 text-white">EEOC Statement</h2>
              <p className="text-sm text-blue-100 max-w-4xl mx-auto">
                CarpacSoft is an Equal Opportunity Employer. Qualified applicants will be considered without regard to any characteristic protected under applicable law. To request an accommodation or for general assistance, please contact <a href="mailto:recruiting@jamasoftware.com" className="text-[#f59e0b] hover:underline">recruiting@jamasoftware.com</a>.
              </p>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Careers;



