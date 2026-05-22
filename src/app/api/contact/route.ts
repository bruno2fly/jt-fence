import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = process.env.SMTP_PORT?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  const hasSmtp = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);

  if (!hasSmtp) {
    console.error(
      'Contact API: set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS'
    );
    return NextResponse.json(
      {
        error:
          'Email delivery is not configured. Add SMTP environment variables in the hosting dashboard (Vercel → Settings → Environment Variables), then redeploy.',
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
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    
    await transporter.sendMail({
      from: `JT Fence Website <${smtpUser}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error('Contact API: failed to send mail', err);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again or call us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}