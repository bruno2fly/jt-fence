import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const DEFAULT_TO = 'contact@jtfenceboston.com';

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  projectDetails: string;
};

function validate(payload: Partial<ContactPayload>): payload is ContactPayload {
  if (!payload.name?.trim()) return false;
  if (!payload.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return false;
  if (!payload.phone?.trim() || !/^\d{10}$/.test(payload.phone.replace(/\D/g, ''))) return false;
  if (!payload.city?.trim()) return false;
  if (!payload.serviceType?.trim()) return false;
  if (!payload.projectDetails?.trim()) return false;
  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildMessage(body: ContactPayload, phoneDigits: string) {
  const { name, email, city, serviceType, projectDetails } = body;
  const text = [
    `New quote request from jtfenceboston.com`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phoneDigits}`,
    `City: ${city}`,
    `Service: ${serviceType}`,
    ``,
    `Project details:`,
    projectDetails,
  ].join('\n');

  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneDigits)}</p>
    <p><strong>City:</strong> ${escapeHtml(city)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>
    <p><strong>Project details:</strong></p>
    <pre style="font-family:sans-serif;white-space:pre-wrap;">${escapeHtml(projectDetails)}</pre>
  `;

  return { text, html };
}

export async function POST(request: Request) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const resendFrom = process.env.RESEND_FROM_EMAIL?.trim();
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.trim();

  const hasResend = Boolean(resendKey && resendFrom);
  const hasGmail = Boolean(gmailUser && gmailPass);

  if (!hasResend && !hasGmail) {
    console.error(
      'Contact API: set RESEND_API_KEY + RESEND_FROM_EMAIL, or GMAIL_USER + GMAIL_APP_PASSWORD'
    );
    return NextResponse.json(
      {
        error:
          'Email delivery is not configured. Add environment variables in the hosting dashboard (Vercel → Settings → Environment Variables), then redeploy.',
      },
      { status: 503 }
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!validate(body)) {
    return NextResponse.json(
      { error: 'Please fill in all fields with valid information.' },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const { name, email, phone, city, serviceType, projectDetails } = body;
  const phoneDigits = phone.replace(/\D/g, '');
  const { text, html } = buildMessage(
    { name, email, phone, city, serviceType, projectDetails },
    phoneDigits
  );
  const subject = `Quote request: ${name} — ${city}`;

  try {
    if (hasResend && resendKey && resendFrom) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: resendFrom,
        to: [to],
        replyTo: email,
        subject,
        text,
        html,
      });
      if (error) {
        console.error('Contact API: Resend error', error);
        return NextResponse.json(
          { error: 'Could not send your message. Please try again or call us directly.' },
          { status: 502 }
        );
      }
    } else if (hasGmail && gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });
      await transporter.sendMail({
        from: `JT Fence Website <${gmailUser}>`,
        to,
        replyTo: email,
        subject,
        text,
        html,
      });
    }
  } catch (err) {
    console.error('Contact API: failed to send mail', err);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again or call us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
