import Image from 'next/image';
import Link from 'next/link';

interface FocusPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  href: string;
}

const FOCUS_PILLARS: FocusPillar[] = [
  {
    id: 'education',
    number: '01',
    title: 'Education & Teaching',
    subtitle: 'Classroom & Literacy Support',
    description:
      'Collaborate with local teachers in primary and junior high schools. Support literacy programs, STEM workshops, and tailored tutoring based on community curricula.',
    imageSrc: '/assets/focus-education.webp',
    imageAlt: 'Ghanaian primary school pupils engaged in an interactive classroom lesson with a volunteer teacher',
    tags: ['Classroom Teaching', 'Literacy & Reading', 'Teacher Support', 'STEM Tutoring'],
    href: '/programmes#education',
  },
  {
    id: 'health',
    number: '02',
    title: 'Community Health & Wellbeing',
    subtitle: 'Preventative Care & Outreach',
    description:
      'Partner with community clinics and health centres. Facilitate preventative health education, hygiene campaigns, maternal health awareness, and medical outreach screenings.',
    imageSrc: '/assets/focus-health.webp',
    imageAlt: 'Community healthcare volunteer and Ghanaian nurse conducting a friendly clinic health screening',
    tags: ['Health Education', 'Hygiene Campaigns', 'Maternal Wellness', 'Clinic Support'],
    href: '/programmes#health',
  },
  {
    id: 'leadership',
    number: '03',
    title: 'Youth Leadership Development',
    subtitle: 'Mentorship & Civic Action',
    description:
      'Empower adolescent and young adult changemakers with entrepreneurship tools, leadership mentorship, and collaborative problem-solving skills for civic transformation.',
    imageSrc: '/assets/focus-leadership.webp',
    imageAlt: 'Young Ghanaian adults collaborating in an active outdoor youth leadership and entrepreneurship workshop',
    tags: ['Mentorship Workshops', 'Entrepreneurship', 'Civic Action', 'Life Skills'],
    href: '/programmes#leadership',
  },
];

const BENEFIT_CHIPS = [
  { title: 'Meaningful Impact', detail: 'Grassroots projects addressing verified local needs' },
  { title: 'Community Connection', detail: 'Deep relationships beyond standard travel paths' },
  { title: 'Skill Development', detail: 'Field leadership, communication, and cross-cultural adaptability' },
  { title: 'Cultural Reciprocity', detail: 'Mutual learning rooted in mutual dignity and respect' },
  { title: 'Safety & Guidance', detail: 'Dedicated 24/7 staff support and verified host partners' },
  { title: 'Global Network', detail: 'Lifelong community of Ghanaian and international changemakers' },
];

export default function FocusAreasSection() {
  return (
    <section
      id="focus-areas"
      aria-labelledby="focus-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      {/* Section Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <h2
          id="focus-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]"
        >
          Community priorities shaped into{' '}
          <span className="text-[#065830]">lasting development.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
          Every V-HELD initiative is designed around genuine community needs in Ghana, ensuring your commitment translates directly into sustainable local empowerment.
        </p>
      </div>

      {/* Asymmetric Woblo-Style Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {FOCUS_PILLARS.map((pillar) => (
          <article
            key={pillar.id}
            className="group rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Media Container with WebP Asset */}
              <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-mono font-bold text-[#065830] shadow-sm">
                  {pillar.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-3.5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#065830] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-stone-100">
              <Link
                href={pillar.href}
                className="inline-flex items-center text-sm font-semibold text-[#065830] hover:text-[#086c3b] group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] rounded"
              >
                Explore {pillar.title.split(' ')[0]}
              </Link>
            </div>
          </article>
        ))}

        {/* Bento Anchor: Why Volunteer / Value Ledger (Full-Width Span on 3-col) */}
        <div className="lg:col-span-3 rounded-3xl bg-stone-900 text-white p-7 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Make Your Time Matter
            </h3>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              Volunteering with V-HELD is more than giving time. It is an opportunity to learn from distinct perspectives, contribute your skills, and experience authentic community partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {BENEFIT_CHIPS.map((chip, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 space-y-1.5 hover:bg-stone-800 transition-colors"
              >
                <div className="text-sm font-semibold text-[#E3A709]">
                  {chip.title}
                </div>
                <div className="text-xs text-stone-300 leading-relaxed font-normal">
                  {chip.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
