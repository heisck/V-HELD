import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[#090807] text-stone-300 border-t border-stone-800/80 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Anchor & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A709] rounded-xl"
              aria-label="V-HELD Home"
            >
              <Image
                src="/assets/brand/v-held-logo-horizontal-dark.svg"
                alt="V-HELD Logo"
                width={260}
                height={80}
                className="w-auto h-12 object-contain"
              />
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed font-normal max-w-sm">
              Volunteers in Health, Education and Leadership Development (V-HELD) is a registered Ghanaian non-profit organisation connecting passionate people with grassroots community initiatives.
            </p>

            <div className="text-xs text-stone-400 space-y-1">
              <div className="font-semibold text-stone-300">
                Motto: &ldquo;Give Back. Make a Difference.&rdquo;
              </div>
              <div>Accra &amp; Regional Communities • Republic of Ghana</div>
            </div>
          </div>

          {/* Column 2: Programmes (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Programmes
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link
                  href="/programmes#education"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Education &amp; Teaching
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#health"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Community Health
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#leadership"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Youth Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  View All Programmes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link
                  href="/apply"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Safeguarding & Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Safeguarding
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link
                  href="/safeguarding"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Child Protection Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Volunteer Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Credentials (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-stone-400">
              <div>
                <span className="block text-xs text-stone-400">Email:</span>
                <a
                  href="mailto:info@vheld.org"
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3A709] rounded"
                >
                  info@vheld.org
                </a>
              </div>
              <div>
                <span className="block text-xs text-stone-400">Location:</span>
                <span className="text-stone-300">Accra, Ghana</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold text-[#E3A709] hover:text-amber-300 transition-colors"
                >
                  <span>Send a message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Governance Statement */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {currentYear} V-HELD (Volunteers in Health, Education and Leadership Development). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Registered NGO in the Republic of Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
