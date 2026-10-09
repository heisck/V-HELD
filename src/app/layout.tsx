import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#090807',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'V-HELD | Volunteers in Health, Education and Leadership Development',
  description:
    'V-HELD connects passionate volunteers from Ghana and across the world with community initiatives in education, community health, and youth leadership. Give Back. Make a Difference!',
  keywords: [
    'volunteer in Ghana',
    'Ghana NGO',
    'community development Ghana',
    'healthcare volunteering',
    'teaching in Ghana',
    'youth leadership development',
    'volunteer Africa',
    'ethical volunteering',
  ],
  authors: [{ name: 'V-HELD' }],
  metadataBase: new URL('https://vheld.org'),
  openGraph: {
    title: 'V-HELD | Volunteers in Health, Education and Leadership Development',
    description:
      'Join volunteers from Ghana and around the world in supporting communities through health, education and leadership development.',
    url: 'https://vheld.org',
    siteName: 'V-HELD',
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V-HELD | Volunteers in Health, Education and Leadership Development',
    description:
      'Join volunteers from Ghana and around the world supporting grassroots community development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090807] text-[#F5F5F4] min-h-screen antialiased">{children}</body>
    </html>
  );
}
