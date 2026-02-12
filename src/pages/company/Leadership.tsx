import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";

// Leadership team data
const executiveTeam = [
  { name: "Marc Osofsky", title: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Marc Litz", title: "Chief Financial Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Jim Davidson", title: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Tom Tseki", title: "Chief Revenue Officer", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Josh Turpen", title: "Chief Strategy Officer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Patrick Richardson", title: "SVP, Product Management", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Kevin Andrewjeski", title: "GM, Growth Markets", image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Matt Macias", title: "GM, Aerospace and Defense", image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=200&h=200" },
];

const leadershipTeam = [
  { name: "Neil Bjorklund", title: "GM, Medical Device & Life Sciences", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Neil Stroud", title: "GM, Automotive & Semiconductor", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Vlad Tanasescu", title: "GM, ICE", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Jeff Jilot", title: "VP, Product Operations", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Allyson Keo", title: "VP, Legal & People / General Counsel", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Preston Mitchell", title: "VP, Solutions & Support", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Fani Yaneva", title: "VP, Global Marketing", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Kevin Pearson", title: "VP, Analytics & GTM Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Premi Vinayagam", title: "VP, Engineering", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" },
];

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 bg-[#e0f4fa]">

        {/* Leadership Title */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#001e4d]">Leadership</h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Executive Team */}
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {executiveTeam.map((person, index) => (
                <AnimatedSection
                  key={person.name}
                  delay={index * 100}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#b8dce8] p-2 group-hover:scale-105 transition-transform duration-300">
                      <div
                        className="w-full h-full rounded-full bg-cover bg-center bg-gray-300"
                        style={{ backgroundImage: `url(${person.image})` }}
                      />
                    </div>
                    {/* Hover Effect Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#0ea5e9] transition-colors duration-300" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[#0066cc] font-bold text-sm md:text-base mb-1 group-hover:text-[#004499] transition-colors">
                    {person.name}
                  </h3>

                  {/* Title */}
                  <p className="text-slate-600 text-xs md:text-sm">
                    {person.title}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {leadershipTeam.map((person, index) => (
                <AnimatedSection
                  key={person.name}
                  delay={100 + index * 100}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#b8dce8] p-2 group-hover:scale-105 transition-transform duration-300">
                      <div
                        className="w-full h-full rounded-full bg-cover bg-center bg-gray-300"
                        style={{ backgroundImage: `url(${person.image})` }}
                      />
                    </div>
                    {/* Hover Effect Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#0ea5e9] transition-colors duration-300" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[#0066cc] font-bold text-sm md:text-base mb-1 group-hover:text-[#004499] transition-colors">
                    {person.name}
                  </h3>

                  {/* Title */}
                  <p className="text-slate-600 text-xs md:text-sm">
                    {person.title}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Leadership;



