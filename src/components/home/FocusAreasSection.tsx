import Link from 'next/link';

interface FocusPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  linkText: string;
}

const FOCUS_PILLARS: FocusPillar[] = [
  {
    id: 'education',
    number: '01',
    title: 'Education & Teaching',
    subtitle: 'Empowering Classrooms & Learners',
    description:
      'Support educational development by connecting with schools, learners, and teachers. Assist with classroom activities, literacy programs, STEM tutoring, and extracurricular learning tailored to local curricula.',
    tags: ['Classroom Teaching', 'Literacy & Reading', 'Teacher Support', 'STEM Tutoring'],
    href: '/programmes#education',
    linkText: 'Explore Education Programmes',
  },
  {
    id: 'health',
    number: '02',
    title: 'Community Health & Wellbeing',
    subtitle: 'Preventative Care & Health Education',
    description:
      'Collaborate on community health campaigns, hygiene awareness, and preventative outreach. Qualified healthcare students and professionals contribute skills within partner health centres and community clinics.',
    tags: ['Health Education', 'Clinical Support', 'Hygiene Campaigns', 'Maternal Wellness'],
    href: '/programmes#health',
    linkText: 'Explore Health Programmes',
  },
  {
    id: 'leadership',
    number: '03',
    title: 'Youth Leadership Development',
    subtitle: 'Cultivating Tomorrow’s Changemakers',
    description:
      'Empower young people with foundational leadership competencies, entrepreneurship tools, mentorship, and civic engagement. Help youth build self-confidence and practical skills for community problem-solving.',
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-stone-850 border-stone-800/80"
    >
      <div className="space-y-12">
        {/* Section Header (Anti-vibecoding: NO badge above headline) */}
        <div className="max-w-3xl space-y-3">
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

        {/* 3 Pillars Grid (Anti-vibecoding: NO colored borders, clean neutral stone structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {FOCUS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-8 flex flex-col justify-between hover:border-stone-700 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E3A709] tracking-widest">
                    {pillar.number}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">
                    Focus Pillar
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-400">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>

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

              <div className="pt-6 mt-6 border-t border-stone-800">
                <Link
                  href={pillar.href}
                  className="text-xs sm:text-sm font-semibold text-stone-200 hover:text-[#E3A709] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-md"
                >
                  {pillar.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
