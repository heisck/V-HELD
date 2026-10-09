import Image from 'next/image';

interface LogoItem {
  id: string;
  title: string;
  source: string;
  description: string;
  lightAsset: string;
  darkAsset: string;
  width: number;
  height: number;
  aspect: string;
}

const LOGO_VARIANTS: LogoItem[] = [
  {
    id: 'emblem',
    title: '1. Standalone Emblem Mark',
    source: 'photo_4_2026-10-09_08-41-10.jpg',
    description:
      'Pure symbol mark: three unified community figures (gold and terracotta) in mutual support, central sprouting leaves (health & youth), and the embracing Ghanaian forest green cradle/hand.',
    lightAsset: '/assets/brand/v-held-emblem.svg',
    darkAsset: '/assets/brand/v-held-emblem.svg',
    width: 240,
    height: 235,
    aspect: 'max-w-[240px]',
  },
  {
    id: 'vertical-name',
    title: '2. Primary Vertical Lockup (Emblem + Logotype)',
    source: 'photo_1_2026-10-09_08-41-10.jpg',
    description:
      'Vertical brand lockup uniting the official emblem mark with the bold geometric V-HELD logotype.',
    lightAsset: '/assets/brand/v-held-logo-vertical-name.svg',
    darkAsset: '/assets/brand/v-held-logo-vertical-name.svg',
    width: 260,
    height: 220,
    aspect: 'max-w-[260px]',
  },
  {
    id: 'horizontal',
    title: '3. Master Horizontal Lockup (Full Brand Suite)',
    source: 'photo_2_2026-10-09_08-41-10.jpg',
    description:
      'Horizontal header lockup with emblem mark, bold logotype, full organisation descriptor ("Volunteers in Health, Education and Leadership Development"), and the motto "— Give Back, Make a Difference. —" flanked by gold rules.',
    lightAsset: '/assets/brand/v-held-logo-horizontal.svg',
    darkAsset: '/assets/brand/v-held-logo-horizontal-dark.svg',
    width: 480,
    height: 170,
    aspect: 'max-w-[480px]',
  },
  {
    id: 'vertical-full',
    title: '4. Full Stacked Vertical Lockup (Official Seal)',
    source: 'photo_3_2026-10-09_08-41-10.jpg',
    description:
      'Centered stacked lockup incorporating all identity elements: top emblem, bold logotype, two-line mission descriptor, and the gold-flanked tagline.',
    lightAsset: '/assets/brand/v-held-logo-vertical-full.svg',
    darkAsset: '/assets/brand/v-held-logo-vertical-full-dark.svg',
    width: 320,
    height: 350,
    aspect: 'max-w-[320px]',
  },
];

const BRAND_COLORS = [
  {
    name: 'Ghanaian Forest Green',
    hex: '#065830',
    role: 'Primary mark body, cradle hand & logotype',
    textColor: 'text-white',
  },
  {
    name: 'Warm African Gold',
    hex: '#E3A709',
    role: 'Center leader head, right leaf & accent rules',
    textColor: 'text-stone-950',
  },
  {
    name: 'Terracotta Earth',
    hex: '#C34D21',
    role: 'Left/right community heads & supporting bodies',
    textColor: 'text-white',
  },
  {
    name: 'Vibrant Sprout Green',
    hex: '#186835',
    role: 'Left sprouting leaf (growth, health, vitality)',
    textColor: 'text-white',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090807] text-stone-100 selection:bg-amber-500 selection:text-stone-950 px-4 sm:px-8 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-b border-stone-800 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            Official System Logos
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            V-HELD Brand Identity &amp; Logo System
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Exact vector SVG replicas reconstructed directly from the official system assets.
            Includes the standalone emblem, vertical lockup, master horizontal lockup, and full stacked vertical lockup.
          </p>
        </header>

        {/* Color Palette Strip */}
        <section aria-labelledby="palette-heading" className="space-y-4">
          <h2 id="palette-heading" className="text-sm font-semibold uppercase tracking-wider text-stone-400">
            Brand Color Palette (Sampled from Real Artwork)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BRAND_COLORS.map((col) => (
              <div
                key={col.hex}
                className="p-4 rounded-xl border border-stone-800/80 flex flex-col justify-between h-28 shadow-sm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: col.hex }}
              >
                <div className={`font-bold text-sm ${col.textColor}`}>{col.name}</div>
                <div className="space-y-0.5">
                  <div className={`font-mono text-xs font-semibold tracking-wider ${col.textColor}`}>
                    {col.hex}
                  </div>
                  <div className={`text-[10px] opacity-90 line-clamp-1 ${col.textColor}`}>
                    {col.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Showcase Grid */}
        <section aria-labelledby="logos-heading" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
            <h2 id="logos-heading" className="text-xl sm:text-2xl font-bold text-stone-100">
              Vector SVG Replicas (Exact Copies)
            </h2>
            <span className="text-xs text-stone-400">
              Previewed on both Dark Canvas (#090807) and Light Canvas (#FFFFFF)
            </span>
          </div>

          <div className="space-y-12">
            {LOGO_VARIANTS.map((item) => (
              <article
                key={item.id}
                id={`logo-${item.id}`}
                className="rounded-2xl border border-stone-800/90 bg-[#12100E] p-6 lg:p-8 space-y-6 shadow-xl"
              >
                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-800/80 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-stone-400">
                      Source Reference: <code className="text-amber-400 font-mono">{item.source}</code>
                    </p>
                    <p className="text-xs text-stone-300 pt-1 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <a
                      href={item.lightAsset}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Raw SVG (Light)
                    </a>
                    {item.darkAsset !== item.lightAsset && (
                      <a
                        href={item.darkAsset}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Raw SVG (Dark)
                      </a>
                    )}
                  </div>
                </div>

                {/* Split Dual-Canvas Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dark Mode Preview */}
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Dark Background Preview (#000000)
                    </span>
                    <div className="w-full h-80 rounded-xl bg-black border border-stone-800 flex items-center justify-center p-6 shadow-inner">
                      <div className={`w-full flex items-center justify-center ${item.aspect}`}>
                        <Image
                          src={item.darkAsset}
                          alt={`${item.title} on dark background`}
                          width={item.width}
                          height={item.height}
                          className="w-auto h-auto max-h-64 object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Light Mode Preview */}
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Light Background Preview (#FFFFFF)
                    </span>
                    <div className="w-full h-80 rounded-xl bg-white border border-stone-200 flex items-center justify-center p-6 shadow-inner">
                      <div className={`w-full flex items-center justify-center ${item.aspect}`}>
                        <Image
                          src={item.lightAsset}
                          alt={`${item.title} on light background`}
                          width={item.width}
                          height={item.height}
                          className="w-auto h-auto max-h-64 object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Location Footer */}
                <div className="text-[11px] text-stone-400 pt-1 font-mono flex items-center gap-2">
                  <span className="text-stone-500">Asset File:</span>
                  <span className="text-emerald-400">{item.lightAsset}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
