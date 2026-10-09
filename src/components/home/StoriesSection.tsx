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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2
            id="stories-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight"
          >
            Real people. Real relationships.{' '}
            <span className="text-[#065830]">Unfiltered impact.</span>
          </h2>

          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Hear from local volunteers, international healthcare advocates, and community headteachers whose shared dedication fuels V-HELD’s everyday work.
          </p>
        </div>

        {/* 3-Column Testimonials / Field Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 hover:shadow-md transition-all shadow-sm space-y-6 group"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-medium text-[#065830] uppercase tracking-wider">
                  {story.category}
                </span>

                <blockquote className="text-sm sm:text-[15px] text-stone-700 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-stone-200 space-y-1">
                <div className="text-sm font-bold text-stone-900">
                  {story.author}
                </div>
                <div className="text-xs font-medium text-[#065830]">
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
            className="inline-flex items-center text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] rounded-md px-4 py-2 border border-stone-200 hover:border-stone-300 bg-stone-50 shadow-sm"
          >
            <span>View All Field Stories</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
