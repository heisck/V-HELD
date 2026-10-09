import Link from 'next/link';

interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: '500+',
    label: 'Volunteers Engaged',
    description: 'Passionate local and international volunteers placed across schools and community clinics.',
  },
  {
    value: '24+',
    label: 'Partner Communities',
    description: 'Rural and peri-urban communities across Ghana actively engaged in ongoing initiatives.',
  },
  {
    value: '4,500+',
    label: 'Learners Supported',
    description: 'Primary and junior high school students receiving classroom teaching and literacy mentorship.',
  },
  {
    value: '85+',
    label: 'Workshops & Clinics',
    description: 'Preventative health outreach, hygiene campaigns, and youth leadership empowerment seminars.',
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>Verified Results</span>
          </div>

          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Measured by lives touched and{' '}
            <span className="text-[#E3A709]">communities strengthened.</span>
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            We hold ourselves accountable to the people we serve. Our impact data is grounded in verified community records and ongoing dialogue with local leadership.
          </p>
        </div>

        {/* 4-Column Metric Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-700 transition-colors space-y-3"
            >
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[#E3A709] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-white">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pt-2 border-t border-stone-800/80">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accountability & Transparency Card */}
        <div className="rounded-2xl bg-stone-900/60 border border-stone-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Transparency &amp; Community Governance
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Every project is co-designed with community partners to ensure resources are deployed ethically, sustainably, and in direct response to local priorities.
            </p>
          </div>

          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E3A709] hover:text-amber-300 transition-colors shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-md px-1 py-0.5"
          >
            <span>Explore Comprehensive Impact Reports</span>
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
    </section>
  );
}
