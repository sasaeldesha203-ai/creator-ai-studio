export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Script. Generate. Publish.</p>
        <h1>AI video creation for creators who want faster output and stronger reach.</h1>
        <p className="hero-text">
          Build cinematic, YouTube-ready videos from a single brief with structured scenes, voiceover timing,
          captions, and export-ready workflows.
        </p>

        <div className="hero-actions">
          <button className="primary-button">Start creating</button>
          <button className="secondary-button">View demo</button>
        </div>

        <div className="mini-stats">
          <div>
            <strong>2.4x</strong>
            <span>faster scripting</span>
          </div>
          <div>
            <strong>1080p</strong>
            <span>export ready</span>
          </div>
          <div>
            <strong>16:9</strong>
            <span>YouTube workflow</span>
          </div>
        </div>
      </div>

      <div className="preview-panel">
        <div className="screen-card">
          <div className="screen-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span>Project: Ancient Egypt documentary</span>
              <span className="pill success">Ready</span>
            </div>
            <ul>
              <li><span>Hook sequence</span><strong>00:12</strong></li>
              <li><span>Archive visuals</span><strong>00:48</strong></li>
              <li><span>Voiceover track</span><strong>01:20</strong></li>
              <li><span>CTA overlay</span><strong>00:15</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
