import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FocusAreasSection from '@/components/home/FocusAreasSection';
import WhyVolunteerSection from '@/components/home/WhyVolunteerSection';
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
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Stacked Card Deck: Community Programmes & Volunteer Journey */}
        <div id="community-programmes" className="relative w-full">
          {/* Card 1: Welcome & Inclusivity (Fainter green #0b7342, pinned first) */}
          <IntroSection />

          {/* Card 2: Three Core Focus Areas (Classic forest green #065830, slides over Card 1) */}
          <FocusAreasSection />

          {/* Card 3: Why Volunteer & Value Architecture (Deep forest green #054c29, slides over Card 2) */}
          <WhyVolunteerSection />

          {/* Card 4: Volunteer Journey 7 Steps (Dark forest green #033d20, slides over Card 3) */}
          <HowItWorksSection />
        </div>

        {/* 3. Impact Metrics & Accountability */}
        <ImpactSection />

        {/* 4. Real Stories & Testimonials */}
        <StoriesSection />

        {/* 5. Call to Action Gateway */}
        <CtaSection />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
