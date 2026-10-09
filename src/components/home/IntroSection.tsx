import Link from 'next/link';

export default function IntroSection() {
  return (
    <section
      id="about"
      aria-labelledby="intro-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Organization Identity (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <h2
            id="intro-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight"
          >
            Rooted in Ghanaian communities,{' '}
            <span className="text-[#065830]">connecting hands across the world.</span>
          </h2>

          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Volunteers in Health, Education and Leadership Development (V-HELD) is an authentic non-profit organisation committed to opening direct avenues for purposeful community action.
          </p>

          <p className="text-sm text-stone-500 leading-relaxed">
            We believe that lasting change happens when passionate individuals connect with local communities through mutual respect, shared purpose, and humble service.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="text-sm font-semibold text-[#065830] hover:text-[#086c3b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] rounded-md"
            >
              Learn more about our heritage &amp; leadership
            </Link>
          </div>
        </div>

        {/* Right Column: Dual-Track Inclusivity Architecture (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track 1: Ghanaian Volunteers */}
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6 sm:p-7 space-y-4 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Ghanaian Residents
            </div>

            <h3 className="text-xl font-bold text-stone-900">Volunteering Within Ghana</h3>

            <p className="text-sm text-stone-600 leading-relaxed">
              You do not need to cross borders to create lasting change. Whether you are a student, National Service Personnel, professional, or retiree living in Ghana, your knowledge and energy strengthen community initiatives across regions.
            </p>

            <div className="pt-3 border-t border-stone-200 text-xs text-stone-500 space-y-1.5">
              <div>• Flexible commitments alongside studies or work</div>
              <div>• Direct community leadership &amp; mentorship roles</div>
            </div>
          </div>

          {/* Track 2: International Volunteers */}
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6 sm:p-7 space-y-4 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              International Guests
            </div>

            <h3 className="text-xl font-bold text-stone-900">Volunteering in Ghana</h3>

            <p className="text-sm text-stone-600 leading-relaxed">
              Experience Ghana beyond superficial tourism. Work alongside local educators, health officers, and community organizers in mutually respectful partnerships with comprehensive logistical orientation and support.
            </p>

            <div className="pt-3 border-t border-stone-200 text-xs text-stone-500 space-y-1.5">
              <div>• Airport reception, vetted homestays &amp; safety</div>
              <div>• Deep cultural immersion &amp; professional reciprocity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
