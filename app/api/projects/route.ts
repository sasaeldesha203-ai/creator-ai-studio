import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    credits: 1240,
    plan: 'Creator Pro',
    nextRefill: 'In 12 days',
    modelStatus: 'Ready',
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const project = {
    id: crypto.randomUUID(),
    name: body.name ?? 'Untitled project',
    type: body.type ?? 'youtube',
    status: 'queued',
    duration: body.duration ?? 180,
    tone: body.tone ?? 'cinematic',
    platform: body.platform ?? 'YouTube',
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json({
    success: true,
    project,
    creditsUsed: 12,
    message: 'Project created and queued for generation.',
  });
}
