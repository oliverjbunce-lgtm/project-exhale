import { NextResponse } from "next/server";

function text(value: unknown, max = 3000) {
  return String(value ?? "").trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (text(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name, 120);
  const organisation = text(payload.organisation, 160);
  const email = text(payload.email, 180);
  const interest = text(payload.interest, 160);
  const message = text(payload.message, 5000);

  if (!name || !isEmail(email) || !interest || !message) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "jo@project-exhale.co.nz";

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email service not configured", fallback: true },
      { status: 503 },
    );
  }

  const emailBody = [
    "New Project Exhale website enquiry",
    "",
    `Name: ${name}`,
    `Organisation: ${organisation || "—"}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Project Exhale enquiry — ${interest}`,
      text: emailBody,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Unable to send right now", fallback: true },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
