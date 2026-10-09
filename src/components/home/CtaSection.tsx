import Link from 'next/link';

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="relative rounded-3xl bg-[#065830] border border-emerald-600/50 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
        {/* Subtle decorative background glow in Ghanaian Forest Green & Gold */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E3A709]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-950/60 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold tracking-wider uppercase">
            <span>Take Action Today</span>
          </div>

          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Ready to give back and{' '}
            <span className="text-[#E3A709]">make a lasting difference?</span>
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Whether you are living in Ghana or travelling from across the world, V-HELD offers a structured, safe, and deeply meaningful platform to share your skills and support communities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E3A709] hover:bg-amber-400 active:scale-[0.98] text-stone-950 text-sm sm:text-base font-bold shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Apply to Volunteer</span>
              <svg
                className="w-4 h-4 text-stone-950"
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
              href="/partner"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 text-white text-sm sm:text-base font-semibold border border-emerald-500/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Partner With Us</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-emerald-700/60 flex flex-wrap items-center gap-6 text-xs text-emerald-200/90 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Verified Non-Profit Organisation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Comprehensive Safeguarding Policies</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E3A709]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Full Local Coordinator Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
