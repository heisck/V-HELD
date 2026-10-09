import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
    >
      <div className="space-y-6">
        {/* Main Headline (Anti-vibecoding: NO badge above headline, NO gradient text, NO em-dash) */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.08]"
        >
          Give Back.{' '}
          <span className="text-[#065830]">Make a Difference.</span>
        </h1>

        {/* Subtitle / Core Narrative */}
        <p className="text-base sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal">
          V-HELD connects passionate volunteers from Ghana and across the world with community-led initiatives in education, community health, and youth leadership.
        </p>

        {/* Action Buttons (Anti-vibecoding: short actions, NO generic arrows) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-sm sm:text-base font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Volunteer
          </Link>

          <Link
            href="#focus-areas"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm sm:text-base font-medium border border-stone-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Explore Focus Areas
          </Link>
        </div>

        {/* Context Credentials (Clean editorial typography, NO icon boxes) */}
        <div className="pt-6 text-xs text-stone-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
          <span>Registered Non-Profit in Ghana</span>
          <span className="text-stone-300" aria-hidden="true">•</span>
          <span>Community-Led Placements</span>
          <span className="text-stone-300" aria-hidden="true">•</span>
          <span>Local &amp; International Cohorts</span>
        </div>
      </div>
    </section>
  );
}
