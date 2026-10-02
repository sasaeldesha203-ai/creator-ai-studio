import Link from 'next/link';
import GenerationForm from '@/components/generation-form';

export default function GeneratePage() {
  return (
    <main className="page-shell generate-page-shell">
      <header className="top-nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">C</span>
            <span>Creator AI</span>
          </Link>

          <nav className="nav-links">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/generate">Generate</Link>
            <Link href="/">Pricing</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/dashboard" className="secondary-button">Workspace</Link>
          </div>
        </div>
      </header>

      <section className="generate-page">
        <div className="generate-header">
          <div>
            <p className="eyebrow">AI workflow</p>
            <h1>Generate a YouTube-ready video</h1>
          </div>
          <div className="status-chip">Credits: 1,240</div>
        </div>

        <GenerationForm />
      </section>
    </main>
  );
}
