import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'V-HELD | Volunteers in Health, Education and Leadership Development',
  description:
    'Join volunteers from Ghana and around the world in supporting communities through health, education and leadership development. Give Back. Make a Difference!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
