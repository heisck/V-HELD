import Link from 'next/link';

interface ValuePillar {
  index: string;
  title: string;
  description: string;
}

const VALUE_PILLARS: ValuePillar[] = [
  {
    index: '01',
    title: 'Meaningful Community Impact',
    description:
      'Direct your skills and energy into projects identified and requested by local community leaders, achieving tangible improvements in classrooms and community health centres.',
  },
  {
    index: '02',
    title: 'Authentic Local Relationships',
    description:
      'Build enduring bonds with Ghanaian families, schools, and civic mentors. Experience daily community life, dialogue, and culture far beyond the surface of conventional tourism.',
  },
  {
    index: '03',
    title: 'Practical Skill Development',
    description:
      'Hone adaptability, cross-cultural communication, collaborative leadership, and resourcefulness while tackling real-world challenges alongside local practitioners.',
  },
  {
    index: '04',
    title: 'Reciprocal Learning',
    description:
      'Gain hands-on understanding of grassroots community development in West Africa, learning as much from host community wisdom as you contribute.',
  },
  {
    index: '05',
    title: 'Safe & Structured Support',
    description:
      'Participate with confidence through structured placements, ethical safeguarding policies, and round-the-clock guidance from our on-the-ground Ghanaian coordinator team.',
  },
  {
    index: '06',
    title: 'Lasting Global Fellowship',
    description:
      'Join an active network of local and international alumni and community changemakers dedicated to ethical volunteer service and sustainable development.',
  },
];

export default function WhyVolunteerSection() {
  return (
    <section
      id="why-volunteer"
      aria-labelledby="why-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header (Anti-vibecoding: NO badge above headline) */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight"
          >
            Make your time matter.{' '}
            <span className="text-[#065830]">Serve with purpose.</span>
          </h2>

          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Volunteering with V-HELD is an intentional commitment to mutual learning, community empowerment, and cross-cultural solidarity.
          </p>
        </div>

        {/* 6-Part Editorial Value Ledger (2x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-all shadow-sm space-y-3"
            >
              <div className="space-y-2">
                <span className="text-sm font-mono font-bold text-[#065830] tracking-widest">
                  {pillar.index}
                </span>

                <h3 className="text-lg font-bold text-stone-900">
                  {pillar.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusive Participation Callout */}
        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-stone-900">
              Who can volunteer with V-HELD?
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We welcome students, recent graduates, healthcare professionals, educators, researchers, and retirees. Professional credentials are required only for specialized health tracks; for most programmes, what matters most is commitment, humility, and willingness to collaborate responsibly.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-sm font-semibold shadow-sm transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Apply
          </Link>
        </div>
      </div>
    </section>
  );
}
