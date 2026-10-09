import Link from 'next/link';

interface ValuePillar {
  index: string;
  title: string;
  description: string;
}

const VALUE_PILLARS: ValuePillar[] = [
  {
    index: '01',
    title: 'Make a Meaningful Impact',
    description:
      'Direct your skills, knowledge, and energy into initiatives defined and requested by community leaders, creating tangible, lasting improvements in education and public health.',
  },
  {
    index: '02',
    title: 'Connect With Communities',
    description:
      'Build genuine, enduring relationships with Ghanaian families, schools, and civic leaders. Experience daily life, dialogue, and culture far beyond the surface of typical tourism.',
  },
  {
    index: '03',
    title: 'Grow Your Skills',
    description:
      'Hone adaptability, cross-cultural communication, empathetic leadership, problem-solving, and practical field competencies that accelerate both personal and professional growth.',
  },
  {
    index: '04',
    title: 'Learn Through Experience',
    description:
      'Gain immersive hands-on insights into grassroots community development, navigating real-world resource dynamics alongside experienced Ghanaian educators and health advocates.',
  },
  {
    index: '05',
    title: 'Experience Ghana Authentically',
    description:
      'Discover Ghana’s rich history, hospitality, and cultural heritage through safe, structured placements supported by on-the-ground coordinators who understand the terrain.',
  },
  {
    index: '06',
    title: 'Join a Lifelong Network',
    description:
      'Become an active member of an international and Ghanaian fellowship of changemakers, alumni, and community partners dedicated to ethical service and collaborative development.',
  },
];

export default function WhyVolunteerSection() {
  return (
    <section
      id="why-volunteer"
      aria-labelledby="why-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>The V-HELD Experience</span>
          </div>

          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Make your time matter.{' '}
            <span className="text-[#E3A709]">Serve with purpose.</span>
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            Volunteering with V-HELD is not a passive holiday. It is an intentional commitment to mutual learning, community empowerment, and cross-cultural solidarity.
          </p>
        </div>

        {/* 6-Part Editorial Value Ledger (2x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="rounded-2xl bg-[#121110] border border-stone-800/90 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-700 transition-colors space-y-4 group"
            >
              <div className="space-y-3">
                <span className="text-sm font-mono font-bold text-[#E3A709] tracking-widest">
                  {pillar.index}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Who Can Volunteer Banner / Callout */}
        <div className="rounded-3xl bg-stone-900/60 border border-stone-800 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E3A709]">
                Inclusive Participation
              </span>
              <h3 className="text-2xl font-bold text-white">
                Who can volunteer with V-HELD?
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-3xl">
                We welcome students, recent graduates, healthcare personnel, educators, researchers, entrepreneurs, career-break adventurers, and retirees. Professional credentials are required only for specialized health tracks; for most programmes, what matters most is your humility, dedication, and readiness to collaborate respectfully.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#065830] hover:bg-[#186835] active:scale-[0.98] text-white text-sm font-semibold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
              >
                <span>Check Eligibility &amp; Apply</span>
                <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
