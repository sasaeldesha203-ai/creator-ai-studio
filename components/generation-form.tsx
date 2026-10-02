'use client';

import { useState } from 'react';

export default function GenerationForm() {
  const [script, setScript] = useState(
    'The future of AI content is not just about tools — it is about building a repeatable creative system that turns research into quality videos on a schedule.'
  );
  const [duration, setDuration] = useState(180);
  const [platform, setPlatform] = useState('YouTube');
  const [tone, setTone] = useState('cinematic');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ script, duration, platform, tone }),
    });

    const data = await response.json();
    console.log('Generation response:', data);
    alert(data.success ? `Job queued: ${data.jobId}` : 'Generation failed');
  };

  return (
    <form className="generator-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field-block wide">
          <label htmlFor="script">Video script</label>
          <textarea
            id="script"
            value={script}
            onChange={(event) => setScript(event.target.value)}
            rows={10}
          />
        </div>

        <div className="field-block">
          <label htmlFor="duration">Duration (seconds)</label>
          <input
            id="duration"
            type="number"
            min={30}
            max={600}
            value={duration}
            onChange={(event) => setDuration(Number(event.target.value))}
          />
        </div>

        <div className="field-block">
          <label htmlFor="platform">Platform</label>
          <select id="platform" value={platform} onChange={(event) => setPlatform(event.target.value)}>
            <option value="YouTube">YouTube</option>
            <option value="YouTube Shorts">YouTube Shorts</option>
            <option value="Instagram Reels">Instagram Reels</option>
            <option value="TikTok">TikTok</option>
          </select>
        </div>

        <div className="field-block">
          <label htmlFor="tone">Tone</label>
          <select id="tone" value={tone} onChange={(event) => setTone(event.target.value)}>
            <option value="cinematic">Cinematic</option>
            <option value="educational">Educational</option>
            <option value="fast-paced">Fast-paced</option>
            <option value="premium">Premium</option>
          </select>
        </div>
      </div>

      <div className="generate-actions">
        <button type="button" className="secondary-button">Use template</button>
        <button type="submit" className="primary-button">Generate video</button>
      </div>
    </form>
  );
}
