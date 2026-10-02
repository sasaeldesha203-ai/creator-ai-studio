import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">C</div>
          <div>
            <div className="brand-name">Creator AI</div>
            <div className="brand-lbl">Studio</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard">Projects</Link>
          <Link href="/dashboard">Templates</Link>
          <Link href="/dashboard">Analytics</Link>
          <Link href="/dashboard">Subscriptions</Link>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Creator workspace</p>
            <h1>My content pipeline</h1>
          </div>
          <button className="primary-button">New video</button>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Videos this month</span>
            <strong>48</strong>
            <small>+19% vs last month</small>
          </div>
          <div className="stat-card">
            <span>Credits remaining</span>
            <strong>1,240</strong>
            <small>24 videos left</small>
          </div>
          <div className="stat-card">
            <span>Avg. watch time</span>
            <strong>6m 42s</strong>
            <small>Up from 5m 18s</small>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card feature-card">
            <div className="project-header">
              <span className="pill success">Published</span>
              <span>2 days ago</span>
            </div>
            <h3>AI documentary breakdown</h3>
            <p>
              Script, voiceover, B-roll, and subtitles generated in 17 minutes with a multi-shot story structure.
            </p>
            <div className="meta-row">
              <span>4K export</span>
              <span>8.7k views</span>
            </div>
          </div>

          <div className="project-card feature-card">
            <div className="project-header">
              <span className="pill warning">Processing</span>
              <span>Queued</span>
            </div>
            <h3>Market update: AI creators</h3>
            <p>
              Voiceover and keyframe generation are currently rendering. Final export expected in 8 minutes.
            </p>
            <div className="meta-row">
              <span>3 min</span>
              <span>Reels</span>
            </div>
          </div>

          <div className="project-card feature-card">
            <div className="project-header">
              <span className="pill neutral">Draft</span>
              <span>Saved</span>
            </div>
            <h3>Short-form ad concept</h3>
            <p>
              Visual prompts are ready. Waiting for brand assets and final timeline edit before export.
            </p>
            <div className="meta-row">
              <span>20 sec</span>
              <span>YT Shorts</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
