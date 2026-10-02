import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creator AI Studio',
  description: 'AI-powered video creation workflow for creators and YouTube channels.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
