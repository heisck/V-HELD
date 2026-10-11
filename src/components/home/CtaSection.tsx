import Link from 'next/link';

export default function CtaSection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-3xl bg-white border border-stone-200/90 shadow-xl p-8 sm:p-14 lg:p-20 text-center max-w-5xl mx-auto space-y-8 overflow-hidden">
        {/* Subtle Decorative Ambient Background */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-100/40 blur-3xl pointer-events-none"
        />

        {/* Content Box */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.12]"
          >
            Join hands with communities.{' '}
            <span className="text-[#065830]">Create lasting change.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Whether you are a Ghanaian resident or an international changemaker, your time and skills contribute to community-led initiatives in education, healthcare, and youth leadership.
          </p>
        </div>

        {/* Action Pathways */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/apply"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-sm sm:text-base font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Apply
          </Link>
          <Link
            href="/partner"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 active:scale-[0.98] text-stone-800 text-sm sm:text-base font-semibold border border-stone-300 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Partner
          </Link>
        </div>

        {/* Verification Credentials Footer */}
        <div className="relative z-10 pt-4 text-xs text-stone-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-medium">
          <span>Registered Non-Profit in Ghana</span>
          <span className="text-stone-300" aria-hidden="true">•</span>
          <span>Community Governed Placements</span>
          <span className="text-stone-300" aria-hidden="true">•</span>
          <span>Rolling Admissions</span>
        </div>
      </div>
    </section>
  );
}

