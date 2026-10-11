import RootedAnimation from './RootedAnimation';

export default function IntroSection() {
  return (
    <section
      id="about"
      aria-label="Rooted Section"
      className="relative w-full"
    >
      {/* Container holding the SVG typography on the top sand background */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pointer-events-none z-20">
        <RootedAnimation />
      </div>

      {/* Forest Green Base Section: negative margin pulls it up to meet the letters' baseline exactly */}
      <div className="relative w-full bg-[#065830] border-t border-emerald-800/40 min-h-[220px] sm:min-h-[280px] -mt-[170px] sm:-mt-[210px] md:-mt-[245px] z-10" />
    </section>
  );
}
