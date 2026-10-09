'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Focus Areas', href: '/#focus-areas' },
  { label: 'Why Volunteer', href: '/#why-volunteer' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Stories', href: '/#stories' },
  { label: 'Partner', href: '/partner' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const linkBaseClass = `px-3 py-1.5 rounded-full text-xs lg:text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] ${
    isScrolled
      ? 'text-stone-300 hover:text-white hover:bg-stone-800/80'
      : 'text-stone-300 hover:text-white hover:bg-white/10'
  }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-6 pt-3 sm:pt-4">
      {/* Outer container */}
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`pointer-events-auto relative w-full transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-w-5xl rounded-full bg-[#121110]/95 backdrop-blur-md border border-stone-800/80 px-4 sm:px-6 py-2 shadow-2xl'
            : 'max-w-7xl px-2 sm:px-4 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand Anchor */}
          <Link
            href="/"
            aria-label="V-HELD Homepage"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group flex items-center gap-2.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] transition-transform active:scale-95"
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
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                V-HELD
              </span>
              <span className="hidden md:inline-block text-[10px] font-medium text-stone-400 tracking-wider uppercase -mt-0.5">
                Ghana
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={linkBaseClass}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex text-xs font-medium text-stone-300 hover:text-white px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-full"
            >
              Contact
            </Link>

            {/* Primary Action Button: Ghanaian Forest Green */}
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#065830] hover:bg-[#186835] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md border border-emerald-700/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
            >
              <span>Apply to Volunteer</span>
              <svg
                className="w-3.5 h-3.5 text-emerald-300 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Mobile Hamburger Toggle (Min 44x44px touch target) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-stone-300 hover:text-white hover:bg-stone-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden mt-3 rounded-2xl bg-[#121110] border border-stone-800 p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-stone-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2.5">
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-[#065830] hover:bg-[#186835] text-white text-sm font-semibold tracking-wide shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709]"
              >
                Apply to Volunteer
              </Link>
              <div className="text-center text-[11px] text-stone-400 pt-1">
                Ghana Registered NGO • Welcoming Local &amp; Global Volunteers
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
