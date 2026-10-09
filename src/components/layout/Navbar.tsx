'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<'volunteer' | 'join' | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  // Hover handlers for pointer devices (laptops/desktops)
  const handleMouseEnter = (menu: 'volunteer' | 'join') => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpenMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      hoverTimeoutRef.current = setTimeout(() => {
        setOpenMenu(null);
      }, 150);
    }
  };

  const handleClickToggle = (menu: 'volunteer' | 'join') => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  // Uniform link class for synchronized color and background transitions across ALL items
  const linkBaseClass = `px-2 py-1 rounded-full shrink-0 transition-colors duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
    isScrolled
      ? 'text-stone-800 hover:text-stone-950 hover:bg-stone-200/50'
      : 'text-stone-100 hover:text-white hover:bg-white/15 drop-shadow-sm'
  }`;

  return (
    <header className="fixed top-3 sm:top-3.5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none px-3 sm:px-4">
      {/* Outer wrapper: smoothly transitions max-width */}
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        className={`pointer-events-auto relative w-full flex items-center justify-between transition-all duration-400 ease-out ${
          isScrolled
            ? 'max-w-[40rem] py-1.5 px-3 sm:px-4'
            : 'max-w-[72rem] py-2 sm:py-3 px-2 sm:px-4'
        }`}
      >
        {/* Animated Pill Background: Pure solid white on scroll */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-400 ease-out pointer-events-none ${
            isScrolled
              ? 'opacity-100 scale-100 bg-white border border-stone-200/90 shadow-lg'
              : 'opacity-0 scale-95 bg-transparent border border-transparent shadow-none'
          }`}
          aria-hidden="true"
        />

        {/* Left: Simple Icon-Only Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center rounded-xl p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-transform hover:scale-105 shrink-0"
          aria-label="V-HELD Home"
          onClick={() => setOpenMenu(null)}
        >
          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 shrink-0 flex items-center justify-center">
            <Image
              src="/assets/logo.svg"
              alt="V-HELD Logo"
              width={32}
              height={32}
              priority
              className="w-8 h-8 object-contain"
            />
          </div>
        </Link>

        {/* Center: Navigation Links with 100% unified, synchronized transition */}
        <div
          className={`relative z-10 flex items-center transition-all duration-400 ease-out text-xs sm:text-[13px] font-medium
            w-[40vw] max-w-[40vw] sm:w-auto sm:max-w-none overflow-x-auto no-scrollbar whitespace-nowrap shrink
            [mask-image:linear-gradient(to_right,black_65%,transparent_100%)] sm:[mask-image:none]
            ${isScrolled ? 'gap-0.5 sm:gap-2' : 'gap-1 sm:gap-4'}
          `}
        >
          {/* About */}
          <Link
            href="/about"
            className={linkBaseClass}
            onClick={() => setOpenMenu(null)}
          >
            About
          </Link>

          {/* Volunteer (Context Menu) */}
          <div
            className="relative shrink-0"
            onMouseEnter={() => handleMouseEnter('volunteer')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleClickToggle('volunteer')}
              aria-expanded={openMenu === 'volunteer'}
              className={`flex items-center gap-1 ${linkBaseClass} ${
                openMenu === 'volunteer'
                  ? isScrolled
                    ? 'bg-stone-200/70 text-stone-950'
                    : 'bg-white/20 text-white'
                  : ''
              }`}
            >
              <span>Volunteer</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
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

            {/* Volunteer Context Menu (Proof only) */}
            {openMenu === 'volunteer' && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl bg-white shadow-xl border border-stone-200 py-2 px-1 text-stone-800 animate-in fade-in duration-150 whitespace-normal"
                role="menu"
              >
                <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  Proof
                </div>
                <Link
                  href="/impact"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-1.5 rounded-xl hover:bg-stone-200/50 transition-colors"
                  role="menuitem"
                >
                  <span className="text-xs font-semibold text-stone-900">
                    Our Impact
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Community results &amp; milestones
                  </span>
                </Link>
                <Link
                  href="/stories"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-1.5 rounded-xl hover:bg-stone-200/50 transition-colors"
                  role="menuitem"
                >
                  <span className="text-xs font-semibold text-stone-900">
                    Stories
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Field narratives from volunteers
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Programmes */}
          <Link
            href="/programmes"
            className={linkBaseClass}
            onClick={() => setOpenMenu(null)}
          >
            Programmes
          </Link>

          {/* Join (Context Menu) */}
          <div
            className="relative shrink-0"
            onMouseEnter={() => handleMouseEnter('join')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => handleClickToggle('join')}
              aria-expanded={openMenu === 'join'}
              className={`flex items-center gap-1 ${linkBaseClass} ${
                openMenu === 'join'
                  ? isScrolled
                    ? 'bg-stone-200/70 text-stone-950'
                    : 'bg-white/20 text-white'
                  : ''
              }`}
            >
              <span>Join</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
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
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl bg-white shadow-xl border border-stone-200 py-2 px-1 text-stone-800 animate-in fade-in duration-150 whitespace-normal"
                role="menu"
              >
                <Link
                  href="/partner"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-1.5 rounded-xl hover:bg-stone-200/50 transition-colors"
                  role="menuitem"
                >
                  <span className="text-xs font-semibold text-stone-900">
                    Partner With Us
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Institutions &amp; partners
                  </span>
                </Link>
                <Link
                  href="/support"
                  onClick={() => setOpenMenu(null)}
                  className="flex flex-col px-3 py-1.5 rounded-xl hover:bg-stone-200/50 transition-colors"
                  role="menuitem"
                >
                  <span className="text-xs font-semibold text-stone-900">
                    Support Our Work
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Individual contributions
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className={linkBaseClass}
            onClick={() => setOpenMenu(null)}
          >
            Contact
          </Link>
        </div>

        {/* Right: Volunteer Button - Solid black */}
        <div className="relative z-10 flex items-center shrink-0">
          <Link
            href="/apply"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white shadow-md border border-stone-800/50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={() => setOpenMenu(null)}
          >
            <span>Volunteer</span>
            <svg
              className="w-3.5 h-3.5 text-stone-200 group-hover:text-white transition-transform group-hover:translate-x-0.5"
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
      </nav>
    </header>
  );
}
