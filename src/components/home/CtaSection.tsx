import Link from 'next/link';

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="relative rounded-3xl bg-[#065830] border border-emerald-900/60 p-8 sm:p-14 lg:p-16 overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E3A709] hover:bg-amber-400 active:scale-[0.98] text-stone-950 text-base font-bold shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Volunteer</span>
            </Link>

            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 text-white text-base font-semibold border border-emerald-600/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Partner</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-emerald-800/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-emerald-200/80 font-mono">
            <span>Verified Non-Profit Organisation (Ghana)</span>
            <span className="hidden sm:inline text-emerald-500/50">•</span>
            <span>Comprehensive Safeguarding Policies</span>
            <span className="hidden sm:inline text-emerald-500/50">•</span>
            <span>Full Local Coordinator Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
