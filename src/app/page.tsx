import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
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

        {/* Middle Placeholder */}
        <div className="py-24 text-center text-stone-600 text-lg">
          ui to be built
        </div>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
