export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'creator-ai-studio',
    timestamp: new Date().toISOString(),
  });
}
