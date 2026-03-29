import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Heritage Passport Finder';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <img src="https://heritagepassportfinder.com/logo.svg" width={120} height={120} style={{ marginBottom: 40 }} alt="Logo" />
        <span style={{ fontSize: 60, fontWeight: 700, color: '#14532d', textAlign: 'center', lineHeight: 1.1 }}>{title}</span>
        <span style={{ fontSize: 32, color: '#334155', marginTop: 32 }}>heritagepassportfinder.com</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
