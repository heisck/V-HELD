import Link from 'next/link';

export default function IntroSection() {
  return (
    <section
      id="about"
      aria-labelledby="intro-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Organization Identity & Mission Statement (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>Welcome to V-HELD</span>
          </div>

          <h2
            id="intro-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Rooted in Ghanaian communities,{' '}
            <span className="text-[#E3A709]">connecting hands across the world.</span>
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            Volunteers in Health, Education and Leadership Development (V-HELD) is an authentic non-profit organisation committed to opening direct avenues for purposeful community action.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E3A709] hover:text-amber-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-md px-1 py-0.5"
            >
              <span>Learn more about our heritage &amp; leadership</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Dual-Track Inclusivity Architecture (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track 1: Ghanaian Volunteers */}
          <div className="rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-7 space-y-4 hover:border-stone-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E3A709] px-2.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/40">
                Local Engagement
              </span>
              <span className="text-xs text-stone-400">Ghanaian Residents</span>
            </div>

            <h3 className="text-xl font-bold text-white">Volunteering Within Ghana</h3>

            <p className="text-sm text-stone-300 leading-relaxed">
              You do not need to cross borders to create lasting change. Whether you are a student, National Service Personnel, professional, or retiree living in Ghana, your knowledge and energy strengthen community initiatives across regions.
            </p>

            <ul className="text-xs text-stone-400 space-y-2 pt-2 border-t border-stone-800/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#065830]" aria-hidden="true" />
                <span>Flexible commitments alongside studies or work</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#065830]" aria-hidden="true" />
                <span>Peer mentorship &amp; community leadership roles</span>
              </li>
            </ul>
          </div>

          {/* Track 2: International Volunteers */}
          <div className="rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-7 space-y-4 hover:border-stone-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                Global Solidarity
              </span>
              <span className="text-xs text-stone-400">International Guests</span>
            </div>

            <h3 className="text-xl font-bold text-white">Volunteering in Ghana</h3>

            <p className="text-sm text-stone-300 leading-relaxed">
              Experience Ghana beyond superficial tourism. Work alongside local educators, health officers, and community organizers in mutually respectful partnerships with comprehensive logistical orientation and support.
            </p>

            <ul className="text-xs text-stone-400 space-y-2 pt-2 border-t border-stone-800/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3A709]" aria-hidden="true" />
                <span>Full airport pickup, vetted homestays &amp; security</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3A709]" aria-hidden="true" />
                <span>Deep cultural immersion &amp; professional reciprocity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
