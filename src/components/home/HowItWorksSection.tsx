import Link from 'next/link';

interface JourneyStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Explore Programmes',
    description:
      'Review opportunities across Education, Community Health, and Youth Leadership to identify where your skills and availability align best.',
    badge: 'Discovery',
  },
  {
    step: '02',
    title: 'Apply Online',
    description:
      'Submit our verified volunteer application form detailing your background, motivations, preferred duration, and target start period.',
    badge: 'Application',
  },
  {
    step: '03',
    title: 'Connect & Review',
    description:
      'Engage with our placement coordinators to clarify goals, review placement locations, and confirm project scope.',
    badge: 'Placement',
  },
  {
    step: '04',
    title: 'Prepare & Plan',
    description:
      'Receive tailored preparation packages: local travel guidance, community cultural norms, packing recommendations, and safeguarding guidelines.',
    badge: 'Preparation',
  },
  {
    step: '05',
    title: 'Arrive & Orient',
    description:
      'Join our comprehensive in-country orientation, meet host community counterparts, tour placement facilities, and review safety protocols.',
    badge: 'Arrival',
  },
  {
    step: '06',
    title: 'Collaborative Service',
    description:
      'Work alongside community mentors and local leaders, contributing to hands-on classroom, clinical, or mentorship activities.',
    badge: 'Action',
  },
  {
    step: '07',
    title: 'Reflect & Grow',
    description:
      'Participate in structured debriefs, document outcomes, receive formal recognition certificates, and join our global alumni community.',
    badge: 'Impact',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="journey-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>Step-by-Step Pathway</span>
          </div>

          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Your volunteer journey,{' '}
            <span className="text-[#E3A709]">from first step to field impact.</span>
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            Whether you are joining us locally from across Ghana or travelling across continents, we ensure every step is transparent, safe, and mutually supportive.
          </p>
        </div>

        {/* 7 Consecutive Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`rounded-2xl bg-[#121110] border border-stone-800 p-6 flex flex-col justify-between hover:border-stone-700 transition-colors ${
                idx === 6 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-[#E3A709]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 px-2 py-0.5 rounded-full bg-stone-900 border border-stone-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/60 text-xs text-stone-500 font-mono">
                Stage 0{idx + 1} of 07
              </div>
            </div>
          ))}
        </div>

        {/* Dual Guidance Callout Box */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 to-[#121110] border border-stone-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">
              Preparedness &amp; Safeguarding First
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed">
              All placements follow strict safeguarding protocols, emergency contact trees, and ethical community engagement guidelines vetted by local partner leaders.
            </p>
          </div>

          <div className="flex md:justify-end gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#065830] hover:bg-[#186835] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Begin Your Application</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
