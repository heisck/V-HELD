'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SubItem {
  title: string;
  href: string;
}

const VOLUNTEER_SUBITEMS: SubItem[] = [
  {
    title: 'Why Volunteer',
    href: '/#why-volunteer',
  },
  {
    title: 'How It Works',
    href: '/#how-it-works',
  },
  {
    title: 'Impact',
    href: '/#impact',
  },
  {
    title: 'Stories',
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
    'px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-tight text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6 pt-3 sm:pt-4">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`pointer-events-auto relative w-full rounded-full bg-white/95 backdrop-blur-md border border-stone-200 transform-gpu transition-[max-width,padding,box-shadow] duration-300 ease-out ${
          isScrolled
            ? 'max-w-4xl px-4 sm:px-6 py-2 shadow-md'
            : 'max-w-5xl px-4 sm:px-6 py-2.5 shadow-sm'
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
            className="flex items-center gap-2.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] group"
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
            <span className="font-bold text-base sm:text-lg tracking-tight text-stone-900 group-hover:text-[#065830] transition-colors">
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
                  isDropdownOpen ? 'bg-stone-100 text-stone-900' : ''
                }`}
              >
                <span>Volunteer</span>
                <svg
                  className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-[#065830]' : ''
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

              {/* Clean Context Menu: Clean links without header or description clutter */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl bg-white border border-stone-200 p-1.5 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                >
                  {VOLUNTEER_SUBITEMS.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setIsDropdownOpen(false)}
                      role="menuitem"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:text-[#065830] hover:bg-stone-50 transition-colors"
                    >
                      {sub.title}
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

          {/* Action Button: Pure action text, zero extraneous icon */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#065830] hover:bg-[#086c3b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830]"
            >
              <span>Apply</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-stone-700 hover:text-stone-950 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065830] transition-colors"
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
            className="md:hidden mt-3 rounded-2xl bg-white border border-stone-200 p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col space-y-1">
              <Link
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50"
              >
                About
              </Link>
              <Link
                href="/#focus-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50"
              >
                Focus
              </Link>
              <div className="pt-2 pb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-[#065830]">
                Volunteer
              </div>
              {VOLUNTEER_SUBITEMS.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pl-6 pr-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:text-[#065830] hover:bg-stone-50"
                >
                  {sub.title}
                </Link>
              ))}
              <Link
                href="/partner"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50"
              >
                Partner
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-stone-200">
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-2.5 rounded-xl bg-[#065830] hover:bg-[#086c3b] text-white text-sm font-semibold shadow-sm transition-colors"
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
