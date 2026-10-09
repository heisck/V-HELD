import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E3A709] animate-pulse" aria-hidden="true" />
            <span>Volunteers in Health, Education &amp; Leadership — Ghana</span>
          </div>

          {/* Main Headline (Anti-vibecoding: Solid, authoritative, zero gradient text) */}
          <div className="space-y-2">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Give Back.{' '}
              <span className="text-[#E3A709]">Make a Difference.</span>
            </h1>
          </div>

          {/* Subtitle / Value Narrative */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
            V-HELD welcomes passionate volunteers from Ghana and across the globe to work alongside communities, share vital skills, and build sustainable futures through health initiatives, educational advancement, and youth leadership.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#065830] hover:bg-[#186835] active:scale-[0.98] text-white text-sm sm:text-base font-semibold shadow-lg shadow-emerald-950/40 border border-emerald-600/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Become a Volunteer</span>
              <svg
                className="w-4 h-4 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="#focus-areas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white text-sm sm:text-base font-medium border border-stone-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Explore Our Programmes</span>
            </Link>
          </div>

          {/* Trust Signals & Institutional Credentials */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Registered Ghanaian NGO</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <span>Community-Led Placements</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Local &amp; Global Cohorts</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual Card & Brand Showcase (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl bg-[#121110] border border-stone-800 p-6 sm:p-8 shadow-2xl overflow-hidden group">
            {/* Subtle brand ambient glow in dark mode */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#065830]/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C34D21]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              {/* Official Seal / Logo Presentation */}
              <div className="flex items-center justify-center p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80">
                <Image
                  src="/assets/brand/v-held-logo-vertical-full-dark.svg"
                  alt="V-HELD Full Official Brand Seal"
                  width={260}
                  height={285}
                  priority
                  className="w-auto h-56 sm:h-64 object-contain"
                />
              </div>

              {/* Informational Sub-card */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-stone-900/80 border border-stone-800/60 p-3.5 space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E3A709]">
                    Primary Sectors
                  </div>
                  <div className="text-sm font-medium text-white">
                    Health • Education • Leadership
                  </div>
                </div>
                <div className="rounded-xl bg-stone-900/80 border border-stone-800/60 p-3.5 space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Host Nation
                  </div>
                  <div className="text-sm font-medium text-white">
                    Ghana, West Africa
                  </div>
                </div>
              </div>

              {/* Mission quote snippet */}
              <blockquote className="rounded-xl bg-[#065830]/15 border border-[#065830]/30 p-4 text-xs text-stone-300 leading-relaxed italic">
                &ldquo;We connect passionate people with communities in need of support, fostering sustainable development and lifelong personal growth.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
