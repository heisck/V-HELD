'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function RootedAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center select-none pointer-events-none"
      style={{ overflow: 'visible' }}
    >
      <svg
        viewBox="0 0 1000 620"
        className="w-full max-w-4xl h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Rooted typography animation"
      >
        <defs>
          <style>{`
            .draw-stroke {
              stroke-dasharray: 1200;
              stroke-dashoffset: 1200;
              transition: stroke-dashoffset 2.2s cubic-bezier(0.35, 0.1, 0.25, 1);
            }
            .animate-in .draw-stroke {
              stroke-dashoffset: 0;
            }

            .circle-stroke {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              transition: stroke-dashoffset 1.8s cubic-bezier(0.35, 0.1, 0.25, 1);
            }
            .animate-in .circle-stroke {
              stroke-dashoffset: 0;
            }

            .root-white-stroke {
              stroke-dasharray: 1600;
              stroke-dashoffset: 1600;
              transition: stroke-dashoffset 2.6s cubic-bezier(0.35, 0.1, 0.25, 1);
            }
            .animate-in .root-white-stroke {
              stroke-dashoffset: 0;
            }

            /* Delays for natural handwriting rhythm */
            .delay-1 { transition-delay: 0.1s; }
            .delay-2 { transition-delay: 0.25s; }
            .delay-3 { transition-delay: 0.4s; }
            .delay-4 { transition-delay: 0.55s; }
            .delay-5 { transition-delay: 0.7s; }
            .delay-6 { transition-delay: 0.85s; }
            .delay-roots { transition-delay: 0.6s; }
          `}</style>
        </defs>

        <g className={inView ? 'animate-in' : ''}>
          {/* ============================================================== */}
          {/* LETTER: 'r' (Forest Green Strokes #065830, sit on the surface) */}
          {/* Stem top coordinates: x = 110, 120, 130, 140. Baseline y = 300 */}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" strokeLinecap="round" fill="none">
            {/* 4 Vertical Stem Lines reaching baseline */}
            <path d="M 110 170 L 110 300" className="draw-stroke delay-1" />
            <path d="M 120 170 L 120 300" className="draw-stroke delay-1" />
            <path d="M 130 170 L 130 300" className="draw-stroke delay-1" />
            <path d="M 140 170 L 140 250" className="draw-stroke delay-1" />

            {/* 4 Arc Branches to the right forming top arch of 'r' */}
            <path d="M 140 200 C 152 176, 175 170, 192 170" className="draw-stroke delay-2" />
            <path d="M 140 210 C 155 186, 175 180, 192 180" className="draw-stroke delay-2" />
            <path d="M 140 220 C 158 196, 175 190, 192 190" className="draw-stroke delay-2" />
            <path d="M 140 230 C 160 206, 175 200, 192 200" className="draw-stroke delay-2" />
          </g>

          {/* ============================================================== */}
          {/* LETTER: First 'o' (4 Concentric Circles at Center x=275, y=235) */}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" fill="none">
            <circle cx="275" cy="235" r="64" className="circle-stroke delay-2" />
            <circle cx="275" cy="235" r="50" className="circle-stroke delay-2" />
            <circle cx="275" cy="235" r="36" className="circle-stroke delay-2" />
            <circle cx="275" cy="235" r="22" className="circle-stroke delay-2" />
          </g>

          {/* ============================================================== */}
          {/* LETTER: Second 'o' (4 Concentric Circles at Center x=445, y=235)*/}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" fill="none">
            <circle cx="445" cy="235" r="64" className="circle-stroke delay-3" />
            <circle cx="445" cy="235" r="50" className="circle-stroke delay-3" />
            <circle cx="445" cy="235" r="36" className="circle-stroke delay-3" />
            <circle cx="445" cy="235" r="22" className="circle-stroke delay-3" />
          </g>

          {/* ============================================================== */}
          {/* LETTER: 't' (Stem lines rising up high + Crossbars)             */}
          {/* Center around x=580 to 610. Tall ascender lines rising to 70-120 */}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" strokeLinecap="round" fill="none">
            {/* 4 Curved bottom and vertical lines rising up with staggered heights */}
            <path d="M 565 140 L 565 245 C 565 275, 590 300, 640 300" className="draw-stroke delay-4" />
            <path d="M 577 95  L 577 245 C 577 268, 595 288, 640 288" className="draw-stroke delay-4" />
            <path d="M 589 50  L 589 245 C 589 260, 602 276, 640 276" className="draw-stroke delay-4" />
            <path d="M 601 115 L 601 245 C 601 254, 610 264, 640 264" className="draw-stroke delay-4" />

            {/* Horizontal Crossbars of 't' at y=170, 180, 190 */}
            <path d="M 601 170 L 640 170" className="draw-stroke delay-4" />
            <path d="M 601 180 L 640 180" className="draw-stroke delay-4" />
            <path d="M 601 190 L 640 190" className="draw-stroke delay-4" />
          </g>

          {/* ============================================================== */}
          {/* LETTER: 'e' (Multi-line nested eye loop & rounded base)         */}
          {/* Center around x=710, matching the 4-line concentric theme      */}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" strokeLinecap="round" fill="none">
            {/* Outer line */}
            <path
              d="M 655 235 L 755 235 C 755 175, 665 175, 665 235 C 665 285, 745 295, 765 285"
              className="draw-stroke delay-5"
            />
            {/* Ring 2 */}
            <path
              d="M 670 235 L 740 235 C 740 190, 680 190, 680 235 C 680 272, 735 280, 755 272"
              className="draw-stroke delay-5"
            />
            {/* Ring 3 */}
            <path
              d="M 685 235 L 725 235 C 725 205, 695 205, 695 235 C 695 258, 725 264, 745 260"
              className="draw-stroke delay-5"
            />
          </g>

          {/* ============================================================== */}
          {/* LETTER: 'd' (Bowl on left + Tall ascender stem lines on right)  */}
          {/* Center bowl at x=830, stem at x=890 rising to 60                */}
          {/* ============================================================== */}
          <g stroke="#065830" strokeWidth="4.5" strokeLinecap="round" fill="none">
            {/* 3 Concentric arch bowls on the left */}
            <path
              d="M 870 180 C 805 180, 805 290, 870 290"
              className="draw-stroke delay-6"
            />
            <path
              d="M 870 195 C 825 195, 825 275, 870 275"
              className="draw-stroke delay-6"
            />
            <path
              d="M 870 210 C 845 210, 845 260, 870 260"
              className="draw-stroke delay-6"
            />

            {/* Ascender stem lines on the right, rising tall like 't' */}
            <path d="M 870 55  L 870 295" className="draw-stroke delay-6" />
            <path d="M 882 85  L 882 295" className="draw-stroke delay-6" />
            <path d="M 894 130 L 894 295" className="draw-stroke delay-6" />
          </g>

          {/* ============================================================== */}
          {/* ROOTS EXTENSION OF 'r' (Drawn in WHITE into the GREEN section)  */}
          {/* Begins at baseline y=300 and branches downwards (y=300 to 600)  */}
          {/* ============================================================== */}
          <g
            stroke="#FFFFFF"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.95"
          >
            {/* Main tap root 1 (from stem x=110) curving down left & deep */}
            <path
              d="M 110 300 Q 105 340, 95 380 Q 75 440, 50 510 Q 30 570, 20 610"
              className="root-white-stroke delay-roots"
            />
            {/* Branch off tap root 1 */}
            <path
              d="M 85 410 Q 60 460, 45 490 Q 35 520, 40 540"
              strokeWidth="2.5"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 98 360 Q 115 400, 125 430 Q 130 450, 135 470"
              strokeWidth="2"
              className="root-white-stroke delay-roots"
            />

            {/* Main deep central tap root 2 (from stem x=120) */}
            <path
              d="M 120 300 Q 120 350, 125 410 Q 130 480, 115 540 Q 105 580, 95 615"
              className="root-white-stroke delay-roots"
            />
            {/* Lateral branches from center root */}
            <path
              d="M 123 370 Q 145 400, 160 435 Q 170 465, 172 490"
              strokeWidth="2.5"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 127 445 Q 110 480, 95 510 Q 85 535, 80 560"
              strokeWidth="2.2"
              className="root-white-stroke delay-roots"
            />

            {/* Tap root 3 (from stem x=130) branching outwards right */}
            <path
              d="M 130 300 Q 138 340, 155 385 Q 175 435, 195 480 Q 210 520, 220 565"
              className="root-white-stroke delay-roots"
            />
            {/* Secondary lateral branches */}
            <path
              d="M 148 365 Q 170 395, 185 415 Q 200 435, 205 450"
              strokeWidth="2.4"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 175 440 Q 165 470, 155 495 Q 150 515, 152 535"
              strokeWidth="2"
              className="root-white-stroke delay-roots"
            />

            {/* Fine capillary rootlets simulating organic nature */}
            <path
              d="M 68 475 Q 55 495, 52 515"
              strokeWidth="1.8"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 152 410 Q 165 430, 168 448"
              strokeWidth="1.8"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 120 510 Q 135 535, 140 555"
              strokeWidth="1.8"
              className="root-white-stroke delay-roots"
            />
            <path
              d="M 188 470 Q 205 495, 212 515"
              strokeWidth="1.8"
              className="root-white-stroke delay-roots"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

