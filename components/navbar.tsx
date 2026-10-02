import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="top-nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">C</span>
          <span>Creator AI</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Product</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Resources</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/dashboard" className="secondary-button">
            Dashboard
          </Link>
          <button className="primary-button">Launch app</button>
        </div>
      </div>
    </header>
  );
}
