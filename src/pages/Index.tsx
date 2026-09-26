import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveFromWall from "@/components/LiveFromWall";
import ImpactTicker from "@/components/ImpactTicker";
import TheStory from "@/components/TheStory";
import HowItWorks from "@/components/HowItWorks";
import AnthemSection from "@/components/AnthemSection";
import ScienceProof from "@/components/ScienceProof";
import GlobalMap from "@/components/GlobalMap";
import Testimonials from "@/components/Testimonials";
import VisualTransition from "@/components/VisualTransition";
import TwoPaths from "@/components/TwoPaths";
import NovemberBand from "@/components/NovemberBand";
import DonateBand from "@/components/DonateBand";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pass Kindness Forward — One Act Can Inspire Another"
        description="Join Pass Kindness Forward and help spark 1 billion acts of kindness worldwide. One act can inspire another."
        path="/"
      />
      <Navbar />
      <Hero />
      <LiveFromWall />
      <HowItWorks />
      <AnthemSection />
      <TheStory />
      <ScienceProof />
      <GlobalMap />
      <Testimonials />
      <VisualTransition />
      <TwoPaths />
      
      <DonateBand />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
