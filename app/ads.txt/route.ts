import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const response = NextResponse.redirect(
    'https://srv.adstxtmanager.com/19390/aiprojectreport.com',
    { status: 301 }
  );

  // prevent Cloudflare caching
  response.headers.set('Cache-Control', 'no-store');

  return response;
}
