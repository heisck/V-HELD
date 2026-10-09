import Link from 'next/link';

interface Story {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  category: string;
}

const STORIES: Story[] = [
  {
    id: 'story-1',
    quote:
      'Serving as a V-HELD STEM tutor during my national service year connected me directly with rural learners eager for hands-on science. It transformed how I view community leadership right here in Ghana.',
    author: 'Kwabena Mensah',
    role: 'STEM Education Volunteer',
    location: 'Kumasi ➔ Eastern Region Placement',
    category: 'Ghanaian Volunteer',
  },
  {
    id: 'story-2',
    quote:
      'My placement was grounded in equal professional partnership, not patronizing intervention. The Ghanaian clinic staff and community health nurses taught me profound lessons in empathetic, resilient care.',
    author: 'Dr. Elena Fischer',
    role: 'Community Health Volunteer',
    location: 'Germany ➔ Greater Accra Outreach',
    category: 'International Volunteer',
  },
  {
    id: 'story-3',
    quote:
      'V-HELD volunteers do not arrive to take photos and vanish. They sit with our teachers, respect our school culture, and support our pupils with consistent dedication throughout the academic term.',
    author: 'Madam Akosua Boakye',
    role: 'Headteacher, Partner Basic School',
    location: 'Asamankese, Eastern Region',
    category: 'Community Partner',
  },
];

export default function StoriesSection() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800/80"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-stone-800 text-stone-300 text-xs font-semibold tracking-wider uppercase">
            <span>Voices From the Field</span>
          </div>

          <h2
            id="stories-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
          >
            Real people. Real relationships.{' '}
            <span className="text-[#E3A709]">Unfiltered impact.</span>
          </h2>

          <p className="text-base text-stone-300 leading-relaxed font-normal">
            Hear from local volunteers, international healthcare advocates, and community headteachers whose shared dedication fuels V-HELD’s everyday work.
          </p>
        </div>

        {/* 3-Column Testimonials / Field Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-700 transition-colors space-y-6 group"
            >
              <div className="space-y-4">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E3A709] px-2.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/40">
                  {story.category}
                </span>

                <blockquote className="text-sm sm:text-[15px] text-stone-200 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-1">
                <div className="text-sm font-bold text-white">
                  {story.author}
                </div>
                <div className="text-xs font-medium text-emerald-400">
                  {story.role}
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  {story.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Full Stories Directory */}
        <div className="text-center pt-4">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-300 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-md px-2 py-1"
          >
            <span>Read More Field Narratives &amp; Community Case Studies</span>
            <svg
              className="w-4 h-4 text-[#E3A709] transition-transform group-hover:translate-x-1"
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
