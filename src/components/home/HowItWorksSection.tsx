import Link from 'next/link';

interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Explore Programmes',
    description:
      'Review opportunities across Education, Community Health, and Youth Leadership to identify where your skills and availability align best.',
  },
  {
    step: '02',
    title: 'Apply Online',
    description:
      'Submit our volunteer application detailing your background, motivations, preferred duration, and target start period.',
  },
  {
    step: '03',
    title: 'Connect & Review',
    description:
      'Engage with our placement coordinators to clarify goals, review placement locations, and confirm project scope.',
  },
  {
    step: '04',
    title: 'Prepare & Plan',
    description:
      'Receive tailored preparation packages: local travel guidance, community cultural norms, packing recommendations, and safeguarding guidelines.',
  },
  {
    step: '05',
    title: 'Arrive & Orient',
    description:
      'Join our comprehensive in-country orientation, meet host community counterparts, tour placement facilities, and review safety protocols.',
  },
  {
    step: '06',
    title: 'Collaborative Service',
    description:
      'Work alongside community mentors and local leaders, contributing to hands-on classroom, clinical, or mentorship activities.',
  },
  {
    step: '07',
    title: 'Reflect & Grow',
    description:
      'Participate in structured debriefs, document outcomes, receive formal recognition certificates, and join our global alumni community.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="journey-heading"
      className="sticky top-26 sm:top-32 z-40 w-full bg-[#033d20] text-white rounded-t-2xl sm:rounded-t-3xl border-t border-white/10 shadow-[0_-14px_45px_rgba(0,0,0,0.35)] pt-10 sm:pt-14 pb-16 sm:pb-24 min-h-[82vh] sm:min-h-[90vh]"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Your volunteer journey,{' '}
            <span className="text-[#E3A709]">from first step to field impact.</span>
          </h2>

          <p className="text-base text-stone-100/90 leading-relaxed font-normal">
            Whether you are joining us locally from across Ghana or travelling internationally, every phase is transparent, structured, and mutually supportive.
          </p>
        </div>

        {/* 7 Consecutive Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`rounded-2xl bg-white border border-emerald-950/20 p-6 flex flex-col justify-between hover:shadow-xl transition-all shadow-md text-stone-900 ${
                idx === 6 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#065830]">
                  {item.step}
                </span>

                <h3 className="text-lg font-bold text-stone-900">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200 text-xs text-stone-500 font-mono">
                Stage 0{idx + 1} of 07
              </div>
            </div>
          ))}
        </div>

        {/* Safeguarding & Guidance Banner */}
        <div className="rounded-2xl bg-white border border-emerald-950/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md text-stone-900">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-bold text-stone-900">
              Preparedness &amp; Safeguarding Standards
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              All placements follow strict safeguarding protocols, emergency contact networks, and ethical community engagement guidelines co-signed by local partner leaders.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Apply
          </Link>
        </div>
      </div>
    </section>
  );
}
