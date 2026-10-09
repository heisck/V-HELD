import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#090807] text-stone-100 selection:bg-amber-500 selection:text-stone-950 overflow-x-hidden">
      {/* Floating Pill Nav Menu */}
      <Navbar />

      {/* Hero Visual Section: Full viewport with refined editorial typography */}
      <section className="relative h-screen w-full overflow-hidden select-none">
        {/* Primary Mountain Backdrop */}
        <Image
          src="/assets/landing/hero-primary.jpg"
          alt="V-HELD volunteers supporting one another at sunrise"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />

        {/* Subtle ambient bottom scrim for soft contrast */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-[#090807]/20 to-transparent pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Light Zone Area: Tucked high in the clear sky pocket to stay clear of climbers */}
        <div className="absolute top-[18%] sm:top-[22%] md:top-[24%] lg:top-[26%] right-3 sm:right-6 lg:right-10 z-20 flex flex-col items-end text-right gap-3 max-w-[280px] sm:max-w-xs lg:max-w-sm pointer-events-auto">
          {/* Dual Segmented Capsule Pill Button: Explore Programmes + Circular Globe Icon */}
          <Link
            href="/programmes"
            className="group inline-flex items-center gap-2 p-1 pl-3.5 sm:pl-4 rounded-full bg-[#F4EFEB] border border-stone-200/90 shadow-2xl transition-all duration-200 hover:scale-[1.02]"
          >
            <span className="text-xs sm:text-sm font-medium text-stone-800 group-hover:text-stone-950 whitespace-nowrap">
              Explore Programmes
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-950 text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-stone-800 transition-colors">
              <svg
                className="w-4 h-4 text-stone-100 group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </Link>

          {/* Stepped Downward-Facing Triangle Description:
              Line 1: longest / widest
              Line 2: shorter than first
              Line 3: shortest */}
          <div className="flex flex-col items-end text-right text-stone-100 font-medium text-[11px] sm:text-xs md:text-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] space-y-1">
            <span className="block max-w-[250px] sm:max-w-[280px]">
              Join volunteers from Ghana &amp; across the world
            </span>
            <span className="block max-w-[200px] sm:max-w-[220px] text-stone-200/90">
              to support grassroots communities in
            </span>
            <span className="block max-w-[160px] sm:max-w-[180px] text-amber-300 font-semibold">
              health, education &amp; leadership.
            </span>
          </div>
        </div>

        {/* Refined Headline: Anchored in bottom-left corner with medium-bold architectural balance */}
        <div className="absolute bottom-3 sm:bottom-6 lg:bottom-8 left-3 sm:left-6 lg:left-10 z-20 pointer-events-none max-w-lg sm:max-w-xl lg:max-w-2xl">
          <h1 className="font-sans font-semibold sm:font-bold uppercase text-white tracking-normal sm:tracking-tight leading-[0.85] sm:leading-[0.92] text-5xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.4rem] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] scale-y-125 sm:scale-y-100 origin-bottom-left">
            <span className="block text-white">GIVE BACK.</span>
            <span className="block text-white/95">MAKE A</span>
            <span className="block text-[#FBBF24]">DIFFERENCE!</span>
          </h1>
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
