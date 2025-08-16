import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Gamification from "@/components/Gamification";
import Learning from "@/components/Learning";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Gamification />
      <Learning />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;