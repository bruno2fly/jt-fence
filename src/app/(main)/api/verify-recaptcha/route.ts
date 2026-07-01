import { NextRequest, NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(request: NextRequest) {
  if (!RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return NextResponse.json(
      { error: 'reCAPTCHA not configured' },
      { status: 500 }
    );
  }

  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is required' },
        { status: 400 }
      );
    }

    // Verify the token with Google
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.log('reCAPTCHA verification failed:', verifyData);
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Check the score (reCAPTCHA v3 returns a score from 0 to 1)
    const score = verifyData.score || 0;
    const threshold = 0.5;

    if (score < threshold) {
      console.log(`reCAPTCHA score too low: ${score} < ${threshold}`);
      return NextResponse.json(
        { 
          error: 'Security check failed. Please refresh the page and try again.',
          score: score
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      score: score 
    });

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify security check' },
      { status: 500 }
    );
  }
}