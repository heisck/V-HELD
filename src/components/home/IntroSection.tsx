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

      {/* Forest Green Base Section: exact alignment where letter bottom sits on the border and roots go down inside */}
      <div className="relative w-full bg-[#065830] border-t border-emerald-800/40 min-h-[380px] sm:min-h-[440px] md:min-h-[480px] -mt-[175px] sm:-mt-[220px] md:-mt-[255px] z-10" />
    </section>
  );
}
