import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import LandingFeatures from '@/components/landing-features';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <LandingFeatures />
      <CTA />
    </main>
  );
}
