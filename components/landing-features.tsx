import workflowCards from '@/lib/mock-data';

export default function LandingFeatures() {
  return (
    <section className="feature-section">
      <div className="section-heading">
        <p className="eyebrow">Why creators switch</p>
        <h2>Build a content engine, not just isolated edits.</h2>
      </div>

      <div className="feature-grid">
        {workflowCards.map((item) => (
          <article key={item.title} className="feature-card">
            <div className="icon-badge">✦</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
