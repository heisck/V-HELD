interface MetricRow {
  id: string;
  category: string;
  stat: string;
  percentage: number;
  label: string;
  details: string;
}

const IMPACT_METRICS: MetricRow[] = [
  {
    id: 'education',
    category: 'Education & Literacy',
    stat: '1,200+',
    percentage: 94,
    label: 'Learners Supported',
    details: 'Primary and junior high school pupils across regional partner schools in Ghana',
  },
  {
    id: 'health',
    category: 'Community Health Outreach',
    stat: '4,200+',
    percentage: 88,
    label: 'Health Screenings Conducted',
    details: 'Preventative malaria, hygiene, and maternal checks with local health posts',
  },
  {
    id: 'leadership',
    category: 'Youth Leadership & Enterprise',
    stat: '850+',
    percentage: 92,
    label: 'Young Leaders Mentored',
    details: 'Adolescent changemakers trained in entrepreneurship and civic problem-solving',
  },
  {
    id: 'placements',
    category: 'Community Placements',
    stat: '100%',
    percentage: 100,
    label: 'Verified Community Governed',
    details: 'Placements designed with and approved by local community elders and directors',
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <h2
          id="impact-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]"
        >
          Impact measured in lives, skills, and{' '}
          <span className="text-[#065830]">community strength.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
          We believe real impact is reflected in classroom progress, preventative health awareness, and self-directed youth leadership across Ghana.
        </p>
      </div>

      {/* Piio-Style Scorecard Container */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-stone-200/90 shadow-xl overflow-hidden">
        {/* Scorecard Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-stone-100 flex flex-wrap items-center justify-between gap-4 bg-stone-50/70">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Verified Field Metrics
            </h3>
            <p className="text-xs text-stone-500 font-normal">
              Audited grassroots community outcomes
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#065830] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-[#065830] animate-pulse" />
            <span>Non-Profit Field Audited</span>
          </div>
        </div>

        {/* Metric Rows */}
        <div className="divide-y divide-stone-100">
          {IMPACT_METRICS.map((row) => (
            <div
              key={row.id}
              className="p-6 sm:p-8 hover:bg-stone-50/50 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                    {row.category}
                  </span>
                  <div className="text-lg font-bold text-stone-900">
                    {row.label}
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#065830] font-mono tracking-tight">
                  {row.stat}
                </div>
              </div>

              {/* Progress Track */}
              <div className="space-y-1.5">
                <div className="w-full h-2.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#065830] to-[#E3A709] transition-all duration-700"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>{row.details}</span>
                  <span className="font-semibold text-stone-700 font-mono">
                    {row.percentage}% Target Reached
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scorecard Footer */}
        <div className="px-6 sm:px-8 py-5 bg-stone-50 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[#065830] font-bold">✓</span>
            <span>All initiatives verified by local community stakeholders</span>
          </div>
          <div>Republic of Ghana Registered NGO</div>
        </div>
      </div>
    </section>
  );
}

