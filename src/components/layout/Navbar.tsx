'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [openMenu, setOpenMenu] = useState<'volunteer' | 'join' | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 25) {
        // At the very top: expanded
        setIsCompact(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        // Scrolling down: contract into compact centered floating dock
        setIsCompact(true);
        setOpenMenu(null); // close open dropdowns on scroll
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up: expand back into the wider nav menu
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 ${
        isCompact
          ? 'top-4 w-[90%] max-w-3xl'
          : 'top-4 sm:top-6 w-[95%] max-w-6xl'
      }`}
    >
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`w-full bg-[#FAF7F2]/95 sm:bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-md transition-all duration-500 ease-in-out flex items-center justify-between ${
          isCompact
            ? 'rounded-full py-2 px-4 sm:px-6 shadow-2xl border-stone-300'
            : 'rounded-2xl sm:rounded-3xl py-3 px-5 sm:px-8 shadow-xl'
        }`}
      >
        {/* Left: Simple Icon-Only Logo (Navigates to Home) */}
        <Link
          href="/"
          className="flex items-center rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-transform hover:scale-105"
          aria-label="V-HELD Home"
          onClick={() => setOpenMenu(null)}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <Image
              src="/assets/logo.svg"
              alt="V-HELD Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-6 text-stone-800 text-sm font-medium">
          {/* About */}
          <Link
            href="/about"
            className="px-2.5 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={() => setOpenMenu(null)}
          >
            About
          </Link>

          {/* Volunteer (Context Menu Dropdown) */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenMenu(openMenu === 'volunteer' ? null : 'volunteer')
              }
              aria-expanded={openMenu === 'volunteer'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                openMenu === 'volunteer'
                  ? 'bg-stone-100 text-stone-950'
                  : 'hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              Volunteer
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openMenu === 'volunteer' ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Volunteer Context Menu */}
            {openMenu === 'volunteer' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-64 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 px-1.5 text-stone-800 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  Proof &amp; Impact
                </div>
                <Link
                  href="/impact"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-stone-900">
                    Our Impact
                  </span>
                  <span className="text-xs text-stone-500">
                    Community results &amp; verifiable milestones
                  </span>
                </Link>
                <Link
                  href="/stories"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-stone-900">
                    Stories
                  </span>
                  <span className="text-xs text-stone-500">
                    Field narratives from local &amp; global volunteers
                  </span>
                </Link>
                <div className="my-1.5 border-t border-stone-100" />
                <div className="p-1">
                  <Link
                    href="/apply"
                    onClick={() => setOpenMenu(null)}
                    className="w-full inline-flex items-center justify-center gap-1.5 font-medium text-xs bg-amber-500 hover:bg-amber-600 text-white py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                  >
                    <span>Volunteer Now</span>
                    <svg
                      className="w-3.5 h-3.5"
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
              </div>
            )}
          </div>

          {/* Programmes */}
          <Link
            href="/programmes"
            className="px-2.5 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={() => setOpenMenu(null)}
          >
            Programmes
          </Link>

          {/* Join (Context Menu Dropdown) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === 'join' ? null : 'join')}
              aria-expanded={openMenu === 'join'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                openMenu === 'join'
                  ? 'bg-stone-100 text-stone-950'
                  : 'hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              Join
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openMenu === 'join' ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Join Context Menu */}
            {openMenu === 'join' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-64 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 px-1.5 text-stone-800 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/partner"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-stone-900">
                    Partner With Us
                  </span>
                  <span className="text-xs text-stone-500">
                    Universities, NGOs &amp; institutional partners
                  </span>
                </Link>
                <Link
                  href="/support"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-stone-900">
                    Support Our Work
                  </span>
                  <span className="text-xs text-stone-500">
                    Individual contributions &amp; community aid
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-2.5 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={() => setOpenMenu(null)}
          >
            Contact
          </Link>
        </div>

        {/* Right: Primary Action Button: "Volunteer" with exact icon */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="sm:hidden text-xs font-medium text-stone-700 hover:text-stone-950 px-2 py-1"
            onClick={() => setOpenMenu(null)}
          >
            Contact
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 font-medium text-xs sm:text-sm bg-stone-950 hover:bg-stone-800 text-white pl-4 pr-3 py-2 sm:py-2.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
            onClick={() => setOpenMenu(null)}
          >
            <span>Volunteer</span>
            {/* Circular icon container with arrow entering/action icon from reference image */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/30 text-white/90">
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
