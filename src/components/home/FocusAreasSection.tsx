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
      className="sticky top-18 sm:top-24 z-20 w-full bg-[#065830] text-white rounded-t-2xl sm:rounded-t-3xl border-t border-white/10 shadow-[0_-10px_35px_rgba(0,0,0,0.25)] pt-10 sm:pt-14 pb-16 sm:pb-24 min-h-[78vh] sm:min-h-[85vh]"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2
            id="focus-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Where volunteers make a lasting difference in Ghana.
          </h2>

          <p className="text-base text-stone-100/90 leading-relaxed font-normal">
            Every V-HELD initiative is designed around genuine community needs, ensuring your time and expertise translate directly into sustainable local development.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {FOCUS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-white border border-emerald-950/20 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all shadow-md group text-stone-900"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#065830] tracking-widest">
                    {pillar.number}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Focus Pillar
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#065830] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-500">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200 text-stone-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200">
                <Link
                  href={pillar.href}
                  className="text-xs sm:text-sm font-semibold text-[#065830] hover:text-[#086c3b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] rounded-md"
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
