import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FocusAreasSection from '@/components/home/FocusAreasSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ImpactSection from '@/components/home/ImpactSection';
import StoriesSection from '@/components/home/StoriesSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#EFE9E2] text-stone-900 selection:bg-[#065830] selection:text-white flex flex-col font-sans antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Top Hero Section */}
        <HeroSection />

        {/* Introduction & Dual-Track Inclusivity */}
        <IntroSection />

        {/* Focus Areas & Why Volunteer (Bento Grid) */}
        <FocusAreasSection />

        {/* How It Works (Step Formula) */}
        <HowItWorksSection />

        {/* Impact Scorecard */}
        <ImpactSection />

        {/* Stories & Testimonials */}
        <StoriesSection />

        {/* Call to Action Gateway */}
        <CtaSection />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
