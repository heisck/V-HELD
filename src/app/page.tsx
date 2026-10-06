import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-stone-950 text-stone-100">
      {/* Floating Pill Nav Menu */}
      <Navbar />

      {/* Hero Visual Section: Full-viewport background image with neat cropping */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <Image
          src="/assets/landing/hero-primary.jpg"
          alt="V-HELD primary landing visual"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        {/* Subtle scrim at the bottom to gently ground the transition */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/80 pointer-events-none" 
          aria-hidden="true" 
        />
      </section>

      {/* Generous scroll padding area to simulate scrolling and observe the floating navbar animation */}
      <section className="relative z-10 w-full min-h-[160vh] bg-stone-950 px-6 py-24 flex flex-col items-center justify-start text-stone-400">
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
