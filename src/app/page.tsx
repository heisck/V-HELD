import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-stone-950">
      <Image
        src="/assets/landing/hero-primary.jpg"
        alt="V-HELD primary landing visual"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center select-none"
      />
    </main>
  );
}
