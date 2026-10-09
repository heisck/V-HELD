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
    label: 'Workshops & Outreach',
    description: 'Preventative health sessions, hygiene campaigns, and youth leadership empowerment seminars.',
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-200"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header (Anti-vibecoding: NO badge above headline) */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight"
          >
            Measured by lives touched and{' '}
            <span className="text-[#065830]">communities strengthened.</span>
          </h2>

          <p className="text-base text-stone-600 leading-relaxed font-normal">
            We hold ourselves accountable to the people we serve. Our impact data is grounded in verified community records and ongoing dialogue with local leadership.
          </p>
        </div>

        {/* 4-Column Metric Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-all shadow-sm space-y-3"
            >
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[#065830] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-stone-900">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 border-t border-stone-200">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accountability & Transparency Card */}
        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-base font-bold text-stone-900">
              Transparency &amp; Community Governance
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every project is co-designed with community partners to ensure resources are deployed ethically, sustainably, and in direct response to local priorities.
            </p>
          </div>

          <Link
            href="/impact"
            className="text-xs sm:text-sm font-semibold text-[#065830] hover:text-[#086c3b] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] rounded-md"
          >
            Explore Impact Reports
          </Link>
        </div>
      </div>
    </section>
  );
}
