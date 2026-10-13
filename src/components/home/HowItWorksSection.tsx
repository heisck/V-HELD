import Image from 'next/image';
import Link from 'next/link';

interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string;
}

const FULL_JOURNEY_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Explore',
    description: 'Review our programmes in Education, Health, and Leadership Development to select your best fit.',
    details: 'Identify opportunities matching your skills, interests, and timeframe.',
  },
  {
    step: '02',
    title: 'Apply',
    description: 'Submit our streamlined volunteer form with your background and motivation.',
    details: 'Takes under 5 minutes with zero upfront payment.',
  },
  {
    step: '03',
    title: 'Connect',
    description: 'Consult directly with V-HELD coordinators to match with local community partners.',
    details: 'One-on-one placement consultation tailored to your goals.',
  },
  {
    step: '04',
    title: 'Prepare',
    description: 'Receive detailed briefings covering pre-departure, health, packing, and cultural etiquette.',
    details: 'Comprehensive visa and logistical support provided.',
  },
  {
    step: '05',
    title: 'Arrive & Orient',
    description: 'Arrive in Ghana with dedicated airport reception and comprehensive local orientation.',
    details: 'Safe vetted accommodations and neighborhood walking tours.',
  },
  {
    step: '06',
    title: 'Volunteer',
    description: 'Engage alongside teachers, health officers, and youth leaders in impactful community work.',
    details: 'Continuous in-country guidance and 24/7 coordinator support.',
  },
  {
    step: '07',
    title: 'Reflect & Grow',
    description: 'Reflect on shared learnings, build lifelong connections, and receive certified completion.',
    details: 'Join our global alumni network of community changemakers.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <h2
          id="how-it-works-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]"
        >
          Your journey from application to{' '}
          <span className="text-[#065830]">community impact.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
          We ensure every volunteer is carefully matched, thoroughly prepared, and warmly welcomed into Ghanaian community partnerships.
        </p>
      </div>

      {/* Brightful Step Formula Architecture (1 + 2 = Result) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Step 1 Card (3 cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#065830] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              1
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-stone-900">
                Explore &amp; Apply
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Step 01 &amp; 02
              </p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Select an educational, health, or leadership initiative and complete our online intake. Tell us what you hope to contribute and learn.
            </p>
          </div>
          <div className="pt-4 border-t border-stone-100 text-xs font-medium text-[#065830]">
            Review within 48 hours
          </div>
        </div>

        {/* Step 2 Card (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#E3A709] text-stone-900 flex items-center justify-center font-bold text-sm shadow-sm">
              2
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-stone-900">
                Connect &amp; Prepare
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Step 03 &amp; 04
              </p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Consult with our Ghana team on placement specifics. Receive full documentation on health guidelines, cultural norms, and community partner agreements.
            </p>
          </div>
          <div className="pt-4 border-t border-stone-100 text-xs font-medium text-stone-700">
            Dedicated pre-departure advisory
          </div>
        </div>

        {/* Step 3 Milestone Card with Arrival Image (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
            <Image
              src="/assets/step-arrival.webp"
              alt="Volunteers arriving in Ghana warmly welcomed by host coordinators"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#065830] text-white flex items-center justify-center font-bold text-sm shadow-md">
              3
            </div>
          </div>
          <div className="p-6 sm:p-7 space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-stone-900">
                Arrive, Serve &amp; Flourish
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Step 05 to 07
              </p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              Touch down at Kotoka International Airport, receive comprehensive orientation, and dive into genuine community development alongside local leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Structured 7-Step Journey Grid */}
      <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            The 7-Step Volunteer Pathway
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            Every step is structured for safety, transparency, and reciprocal community value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 pt-2">
          {FULL_JOURNEY_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2 hover:bg-stone-100/80 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-[#065830]">
                {item.step}
              </div>
              <div className="text-sm font-bold text-stone-900">
                {item.title}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-medium">
            Ready to embark on this journey?
          </span>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
          >
            Apply
          </Link>
        </div>
      </div>
    </section>
  );
}
