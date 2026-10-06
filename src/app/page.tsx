import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#090807] text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* Floating Pill Nav Menu */}
      <Navbar />

      {/* Hero Visual Section: Full viewport with bottom editorial layout */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
        {/* Primary Mountain Backdrop */}
        <Image
          src="/assets/landing/hero-primary.jpg"
          alt="V-HELD volunteers supporting one another at sunrise"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center select-none"
        />

        {/* Ambient bottom scrim to guarantee high contrast for bottom typography */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/30 to-transparent pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Hero Bottom Content: Editorial Layout Matching Reference */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          {/* Bottom Left: Bold Condensed Main Headline (Matching "THE PRECISION OF LIVING" aesthetic) */}
          <div className="max-w-2xl">
            <h1 className="font-sans font-black tracking-tighter uppercase text-white leading-[0.88] text-5xl sm:text-7xl lg:text-8xl drop-shadow-md">
              GIVE BACK. <br />
              <span className="text-white/95">MAKE A</span> <br />
              <span className="text-amber-400">DIFFERENCE!</span>
            </h1>
          </div>

          {/* Bottom Right / Center: Segmented Capsule Pill Button + Shortened Vision Narrative */}
          <div className="flex flex-col items-start lg:items-end gap-5 max-w-md lg:text-right">
            {/* Dual Segmented Capsule Pill Button (Matching Reference Image 1) */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#F4EFEB]/95 backdrop-blur-md border border-stone-200/80 shadow-2xl">
              {/* Left Segment: Explore Programmes */}
              <Link
                href="/programmes"
                className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-stone-800 hover:text-stone-950 rounded-full hover:bg-stone-200/50 transition-colors"
              >
                Explore Programmes
              </Link>

              {/* Right Segment: Volunteer (Solid dark pill with arrow) */}
              <Link
                href="/apply"
                className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold bg-stone-950 hover:bg-stone-800 text-white rounded-full transition-all duration-200 shadow-md"
              >
                <span>Volunteer</span>
                <svg
                  className="w-3.5 h-3.5 text-stone-200 group-hover:text-white transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </Link>
            </div>

            {/* Shortened Supporting Narrative (Positioned where the vision is) */}
            <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed max-w-sm drop-shadow-sm font-normal">
              Join volunteers from Ghana and across the world to empower communities through education, health, and leadership development.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Simulation Area */}
      <section className="relative z-10 w-full min-h-[160vh] bg-[#090807] px-6 py-24 flex flex-col items-center justify-start text-stone-400">
        <div className="max-w-xl text-center space-y-4 pt-12">
          <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
            Scroll Simulation Zone
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-100">
            Scroll to observe the floating pill navbar
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed">
            As you scroll down, notice how the pill menu smoothly centers itself into a focused floating dock.
          </p>
        </div>
      </section>
    </div>
  );
}
