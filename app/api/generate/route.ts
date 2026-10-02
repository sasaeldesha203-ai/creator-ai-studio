import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const script = String(body.script ?? '').trim();
  const duration = Number(body.duration ?? 180);

  if (!script || script.length < 40) {
    return NextResponse.json(
      { success: false, error: 'A script with at least 40 characters is required.' },
      { status: 400 }
    );
  }

  const estimatedCredits = Math.max(8, Math.ceil(duration / 15));

  return NextResponse.json({
    success: true,
    jobId: crypto.randomUUID(),
    status: 'queued',
    estimatedCredits,
    output: {
      shotCount: 18,
      scenes: [
        'Opening hook',
        'Narrator introduction',
        'B-roll sequence',
        'Visual proof moments',
        'Call to action overlay',
      ],
      voiceover: 'Narrator voice',
      aspectRatio: '16:9',
      export: '1080p',
    },
  });
}
