import Link from 'next/link';

interface FocusPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  tags: string[];
  href: string;
  linkText: string;
}

const FOCUS_PILLARS: FocusPillar[] = [
  {
    id: 'education',
    title: 'Education & Teaching',
    subtitle: 'Empowering Classrooms & Learners',
    description:
      'Support educational development by connecting with schools, learners, and teachers. Volunteers assist with classroom activities, literacy programs, STEM tutoring, and extracurricular learning tailored to local curricula.',
    accentColor: '#065830',
    badgeBg: 'bg-emerald-950/60',
    badgeText: 'text-emerald-300',
    borderColor: 'border-emerald-800/40',
    tags: ['Classroom Teaching', 'Literacy & Reading', 'Teacher Support', 'STEM Tutoring'],
    href: '/programmes#education',
    linkText: 'Explore Education Programmes',
  },
  {
    id: 'health',
    title: 'Community Health & Wellbeing',
    subtitle: 'Preventative Care & Health Education',
    description:
      'Collaborate on community health campaigns, hygiene awareness, and preventative outreach. Qualified healthcare students and professionals contribute skills within partner health centres and community clinics.',
    accentColor: '#C34D21',
    badgeBg: 'bg-orange-950/60',
    badgeText: 'text-orange-300',
    borderColor: 'border-orange-800/40',
    tags: ['Health Education', 'Clinical Support', 'Hygiene Campaigns', 'Maternal Wellness'],
    href: '/programmes#health',
    linkText: 'Explore Health Programmes',
  },
  {
    id: 'leadership',
    title: 'Youth Leadership Development',
    subtitle: 'Cultivating Tomorrow’s Changemakers',
    description:
      'Empower young people with foundational leadership competencies, entrepreneurship tools, mentorship, and civic engagement. Help youth build self-confidence and practical skills for community problem-solving.',
    accentColor: '#E3A709',
    badgeBg: 'bg-amber-950/60',
    badgeText: 'text-amber-300',
    borderColor: 'border-amber-800/40',
    tags: ['Mentorship Workshops', 'Entrepreneurship', 'Civic Engagement', 'Life Skills'],
    href: '/programmes#leadership',
    linkText: 'Explore Leadership Programmes',
  },
];

export default function FocusAreasSection() {
  return (
    <section
      id="focus-areas"
      aria-labelledby="focus-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>Our Three Pillars</span>
          </div>

          <h2
            id="focus-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Where volunteers make a lasting difference in Ghana.
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            Every V-HELD initiative is designed around genuine community needs, ensuring your time and expertise translate directly into sustainable local development.
          </p>
        </div>

        {/* Asymmetric 3-Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {FOCUS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`rounded-2xl bg-[#121110] border ${pillar.borderColor} p-6 sm:p-8 flex flex-col justify-between hover:border-stone-700 transition-all duration-200 group relative overflow-hidden`}
            >
              {/* Subtle accent bar at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: pillar.accentColor }}
                aria-hidden="true"
              />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.badgeBg} ${pillar.badgeText} ${pillar.borderColor}`}
                  >
                    Pillar
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    0{FOCUS_PILLARS.indexOf(pillar) + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-400 uppercase tracking-wide">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Focus Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-stone-800/80">
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-200 hover:text-white transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-md px-1 py-0.5"
                >
                  <span>{pillar.linkText}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    style={{ color: pillar.accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
