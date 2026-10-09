import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
    >
      <div className="space-y-6 sm:space-y-8">
        {/* Artistic Give Back Illustration */}
        <div className="relative mx-auto max-w-xl sm:max-w-2xl flex justify-center">
          <Image
            src="/assets/hero-give-back.webp"
            alt="Give Back"
            width={1200}
            height={602}
            priority
            className="w-full h-auto max-h-[280px] sm:max-h-[360px] object-contain [mask-image:radial-gradient(ellipse_96%_92%_at_50%_50%,#000_75%,transparent_100%)]"
          />
        </div>

        {/* Main Headline: Make a in black, Difference in Ghanaian Forest Green */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="sr-only">Give Back. </span>
          <span className="text-black">Make a </span>
          <span className="text-[#065830]">Difference.</span>
        </h1>

        {/* Subtitle / Core Narrative */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto font-normal">
          V-HELD connects passionate volunteers from Ghana and across the world with community-led initiatives in education, community health, and youth leadership.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-sm sm:text-base font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Volunteer
          </Link>

          <Link
            href="#focus-areas"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-stone-800 text-sm sm:text-base font-medium border border-stone-300 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Explore Focus Areas
          </Link>
        </div>

        {/* Context Credentials */}
        <div className="pt-4 text-xs text-stone-600 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-medium">
          <span>Registered Non-Profit in Ghana</span>
          <span className="text-stone-400" aria-hidden="true">•</span>
          <span>Community-Led Placements</span>
          <span className="text-stone-400" aria-hidden="true">•</span>
          <span>Local &amp; International Cohorts</span>
        </div>
      </div>
    </section>
  );
}
