import Image from 'next/image';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  cohort: string;
  avatarSrc: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'kwame',
    name: 'Kwame Mensah',
    role: 'Primary Education Volunteer',
    location: 'Kumasi, Ghana',
    quote:
      'Volunteering with V-HELD in my home region allowed me to directly support primary students who needed foundational reading support. Seeing their confidence rise week after week was the most rewarding experience of my year.',
    cohort: 'Ghanaian Volunteer, 2025',
    avatarSrc: '/assets/testimonial-kwame.webp',
  },
  {
    id: 'sarah',
    name: 'Sarah Jenkins',
    role: 'Health Outreach Volunteer',
    location: 'United Kingdom',
    quote:
      'My placement was about listening, learning from local community nurses, and assisting mobile health checks. The hospitality, structure, and mutual dignity of the community touched me forever.',
    cohort: 'International Volunteer, 2025',
    avatarSrc: '/assets/testimonial-sarah.webp',
  },
  {
    id: 'ama',
    name: 'Dr. Ama Osei',
    role: 'Youth Leadership Mentor',
    location: 'Accra, Ghana',
    quote:
      'V-HELD bridges genuine community needs with passionate young minds. The leadership workshops equip our local youth with practical entrepreneurial tools they continue applying in their communities.',
    cohort: 'Community Partner, 2024',
    avatarSrc: '/assets/testimonial-ama.webp',
  },
];

export default function StoriesSection() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <h2
          id="stories-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]"
        >
          Voices from volunteers and{' '}
          <span className="text-[#065830]">community partners.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
          Real experiences from Ghanaian and international changemakers who have lived and served in local communities.
        </p>
      </div>

      {/* Dico-Style Layered Physical Quote Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {TESTIMONIALS.map((item, idx) => (
          <article
            key={item.id}
            className={`rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
              idx === 1 ? 'lg:-translate-y-2' : ''
            }`}
          >
            <div className="space-y-5">
              {/* Header with Avatar & Identity */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-stone-100 shadow-sm shrink-0">
                  <Image
                    src={item.avatarSrc}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#065830]">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-sm text-stone-700 leading-relaxed italic font-normal">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            {/* Card Footer with Verified Cohort Tag */}
            <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-medium text-stone-600 font-mono">
                {item.cohort}
              </span>
              <span className="text-[#065830] font-semibold">
                Verified Story
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Action Pathway */}
      <div className="pt-2 text-center">
        <Link
          href="/stories"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 text-sm font-semibold border border-stone-300 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
        >
          Read Field Stories
        </Link>
      </div>
    </section>
  );
}

