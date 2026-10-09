'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SubItem {
  title: string;
  desc: string;
  href: string;
}

const VOLUNTEER_SUBITEMS: SubItem[] = [
  {
    title: 'Why Volunteer',
    desc: 'Our service philosophy, values & community reciprocity',
    href: '/#why-volunteer',
  },
  {
    title: 'How It Works',
    desc: 'The 7-step onboarding journey for local & global cohorts',
    href: '/#how-it-works',
  },
  {
    title: 'Impact',
    desc: 'Verified metrics, partner communities & schools',
    href: '/#impact',
  },
  {
    title: 'Stories',
    desc: 'Field reflections from volunteers & community leaders',
    href: '/#stories',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and drawer on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Hover handlers for dropdown (desktop only)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 150);
    }
  };

  const linkBaseClass =
    'px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-tight text-stone-300 hover:text-white hover:bg-stone-800/80 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6 pt-3 sm:pt-4">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`pointer-events-auto relative w-full transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-w-4xl rounded-full bg-[#121110]/95 backdrop-blur-md border border-stone-800/90 px-4 sm:px-6 py-2 shadow-2xl'
            : 'max-w-6xl px-3 sm:px-6 py-3 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand Anchor: Emblem + V-HELD text, NO country tag */}
          <Link
            href="/"
            aria-label="V-HELD Home"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] group"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
              <Image
                src="/assets/brand/v-held-emblem.svg"
                alt="V-HELD Emblem"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
              V-HELD
            </span>
          </Link>

          {/* Desktop Navigation Links: Maximum 4 items, Single words only */}
          <div className="hidden md:flex items-center gap-1.5">
            <Link href="/#about" className={linkBaseClass}>
              About
            </Link>

            <Link href="/#focus-areas" className={linkBaseClass}>
              Focus
            </Link>

            {/* Context Menu Dropdown: Volunteer */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 ${linkBaseClass} ${
                  isDropdownOpen ? 'bg-stone-800 text-white' : ''
                }`}
              >
                <span>Volunteer</span>
                <svg
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Refined Context Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-[#141312] border border-stone-800 p-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E3A709]">
                    Volunteer Pathways
                  </div>
                  {VOLUNTEER_SUBITEMS.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setIsDropdownOpen(false)}
                      role="menuitem"
                      className="block px-3 py-2 rounded-xl hover:bg-stone-850 hover:bg-stone-800/80 transition-colors group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {sub.title}
                      </div>
                      <div className="text-[11px] text-stone-400 leading-snug mt-0.5">
                        {sub.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/partner" className={linkBaseClass}>
              Partner
            </Link>

            <Link href="/#contact" className={linkBaseClass}>
              Contact
            </Link>
          </div>

          {/* Action Button: Short, punchy action, non-generic icon */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#065830] hover:bg-[#186835] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md border border-emerald-600/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Apply</span>
              {/* Purposeful application / document form icon */}
              <svg
                className="w-3.5 h-3.5 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-stone-300 hover:text-white hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-3 rounded-2xl bg-[#121110] border border-stone-800 p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col space-y-1">
              <Link
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-850"
              >
                About
              </Link>
              <Link
                href="/#focus-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-850"
              >
                Focus
              </Link>
              <div className="pt-2 pb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-[#E3A709]">
                Volunteer
              </div>
              {VOLUNTEER_SUBITEMS.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pl-6 pr-3 py-1.5 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-850"
                >
                  {sub.title}
                </Link>
              ))}
              <Link
                href="/partner"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-850"
              >
                Partner
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-850"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-stone-800">
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 rounded-xl bg-[#065830] hover:bg-[#186835] text-white text-sm font-semibold shadow-md transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
