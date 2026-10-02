export async function GET() {
  return Response.json({
    credits: 1240,
    plan: 'Creator Pro',
    monthlyLimit: 2000,
    bonusCredits: 80,
    nextRefill: '2026-11-02',
  });
}
