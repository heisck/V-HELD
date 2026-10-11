'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VolunteerTrack {
  id: 'ghanaian' | 'international';
  label: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const VOLUNTEER_TRACKS: Record<'ghanaian' | 'international', VolunteerTrack> = {
  ghanaian: {
    id: 'ghanaian',
    label: 'Ghanaian Residents',
    tagline: 'Serve your communities across Ghana',
    description:
      'You do not need to cross borders to create lasting change. Whether you are a student, National Service Personnel, working professional, or retiree living in Ghana, your skills directly empower local schools, health centres, and youth initiatives.',
    highlights: [
      'Flexible commitments alongside study or work',
      'Direct regional leadership and youth mentorship',
      'Collaborate with certified local community partners',
    ],
  },
  international: {
    id: 'international',
    label: 'International Volunteers',
    tagline: 'Experience Ghana through authentic service',
    description:
      'Discover Ghana beyond conventional tourism. Join community-led initiatives in education, healthcare, and youth leadership with full pre-departure briefings, airport reception, vetted host accommodations, and dedicated field coordinators.',
    highlights: [
      'Airport reception and comprehensive cultural orientation',
      'Vetted homestays and 24/7 dedicated local field support',
      'Ethical, community-governed non-profit placements',
    ],
  },
};

export default function IntroSection() {
  const [activeTrack, setActiveTrack] = useState<'ghanaian' | 'international'>('ghanaian');
  const track = VOLUNTEER_TRACKS[activeTrack];

  return (
    <section
      id="about"
      aria-labelledby="intro-heading"
      className="relative w-full bg-[#065830] text-white border-t border-emerald-800/40"
    >
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mission Narrative & Track Switcher */}
          <div className="lg:col-span-6 space-y-6">
            <h2
              id="intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Rooted in Ghanaian communities,{' '}
              <span className="text-[#E3A709]">connecting hands worldwide.</span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Volunteers in Health, Education and Leadership Development (V-HELD) is an authentic non-profit organisation creating open pathways for purposeful community action. We believe lasting progress emerges when dedicated volunteers work alongside local leaders through mutual respect and shared responsibility.
            </p>

            {/* Interactive Dual-Track Pill Switcher */}
            <div className="pt-2">
              <div
                role="tablist"
                aria-label="Volunteer Tracks"
                className="inline-flex p-1 rounded-full bg-[#044324] border border-emerald-800"
              >
                <button
                  role="tab"
                  type="button"
                  id="tab-ghanaian"
                  aria-selected={activeTrack === 'ghanaian'}
                  aria-controls="panel-ghanaian"
                  onClick={() => setActiveTrack('ghanaian')}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    activeTrack === 'ghanaian'
                      ? 'bg-white text-[#065830] shadow-sm'
                      : 'text-emerald-100 hover:text-white'
                  }`}
                >
                  Ghanaian Residents
                </button>
                <button
                  role="tab"
                  type="button"
                  id="tab-international"
                  aria-selected={activeTrack === 'international'}
                  aria-controls="panel-international"
                  onClick={() => setActiveTrack('international')}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    activeTrack === 'international'
                      ? 'bg-white text-[#065830] shadow-sm'
                      : 'text-emerald-100 hover:text-white'
                  }`}
                >
                  International Volunteers
                </button>
              </div>

              {/* Active Track Card Details */}
              <div
                id={`panel-${track.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${track.id}`}
                className="mt-5 p-6 rounded-2xl bg-white text-stone-900 border border-emerald-800/30 shadow-lg space-y-3.5"
              >
                <div className="font-semibold text-stone-900 text-base">
                  {track.tagline}
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {track.description}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-medium">
                  {track.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#065830] mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-emerald-50 active:scale-[0.98] text-[#065830] text-sm font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Apply
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-white hover:text-[#E3A709] underline underline-offset-4 decoration-emerald-500/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                Learn More
              </Link>
            </div>
          </div>


        {/* Right Column: Visual Showcase Window */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-white border border-stone-200 shadow-xl overflow-hidden">
            {/* Window Bar Header */}
            <div className="px-4 py-3 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-stone-300" />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
                <span className="w-3 h-3 rounded-full bg-stone-300" />
              </div>
              <span className="text-xs font-medium text-stone-500">
                Community Partnership • Ghana
              </span>
            </div>

            {/* Showcase Image */}
            <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
              <Image
                src="/assets/intro-community.webp"
                alt="Ghanaian community leaders and volunteers collaborating in an authentic village courtyard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Caption & Status Pill Row */}
            <div className="p-5 sm:p-6 bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#065830] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Accredited NGO in Ghana
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Verified Grassroots Placement
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Community-led consultations in rural and urban Ghanaian districts ensure every volunteer initiative addresses genuine, long-term priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
