import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Direct, authoritative headline & narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Main Headline (Anti-vibecoding: NO badge above headline, NO gradient text, NO em-dash) */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08]"
          >
            Give Back.{' '}
            <span className="text-[#065830]">Make a Difference.</span>
          </h1>

          {/* Subtitle / Core Narrative */}
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
            V-HELD connects passionate volunteers from Ghana and across the world with community-led initiatives in education, community health, and youth leadership.
          </p>

          {/* Action Buttons (Anti-vibecoding: short actions, NO generic arrows) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-sm sm:text-base font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
            >
              Volunteer
            </Link>

            <Link
              href="#focus-areas"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm sm:text-base font-medium border border-stone-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
            >
              Explore Focus Areas
            </Link>
          </div>

          {/* Context Credentials (Clean editorial typography, NO icon boxes) */}
          <div className="pt-4 text-xs text-stone-500 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Registered Non-Profit in Ghana</span>
            <span className="text-stone-300" aria-hidden="true">•</span>
            <span>Community-Led Placements</span>
            <span className="text-stone-300" aria-hidden="true">•</span>
            <span>Local &amp; International Cohorts</span>
          </div>
        </div>

        {/* Right Column: Editorial Brand Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-stone-50 border border-stone-200 p-8 sm:p-10 space-y-6 shadow-sm">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/assets/brand/v-held-logo-vertical-full.svg"
                alt="V-HELD Official Seal"
                width={260}
                height={285}
                priority
                className="w-auto h-52 sm:h-60 object-contain"
              />
            </div>

            <div className="pt-4 border-t border-stone-200 text-center space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#065830]">
                Health • Education • Leadership
              </div>
              <p className="text-xs text-stone-500">
                Grounding service in mutual dignity and long-term community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
