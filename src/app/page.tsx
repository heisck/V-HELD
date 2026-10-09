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
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#065830] selection:text-white flex flex-col font-sans antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 space-y-4">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Welcome & Inclusivity Section */}
        <IntroSection />

        {/* 3. Three Core Focus Areas */}
        <FocusAreasSection />

        {/* 4. Why Volunteer & Value Architecture */}
        <WhyVolunteerSection />

        {/* 5. Volunteer Journey (7 Steps) */}
        <HowItWorksSection />

        {/* 6. Impact Metrics & Accountability */}
        <ImpactSection />

        {/* 7. Real Stories & Testimonials */}
        <StoriesSection />

        {/* 8. Call to Action Gateway */}
        <CtaSection />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
