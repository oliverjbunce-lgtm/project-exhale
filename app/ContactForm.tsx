"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Conference speaking",
  "Workplace workshop",
  "Leadership development",
  "Executive coaching",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");
  const [fallbackHref, setFallbackHref] = useState("mailto:jo@project-exhale.co.nz");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const subject = `Project Exhale enquiry — ${String(payload.interest || "Website")}`;
    const body = [
      `Name: ${String(payload.name || "")}`,
      `Organisation: ${String(payload.organisation || "")}`,
      `Email: ${String(payload.email || "")}`,
      `Interest: ${String(payload.interest || "")}`,
      "",
      String(payload.message || ""),
    ].join("\n");

    setFallbackHref(
      `mailto:jo@project-exhale.co.nz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("fallback");
        return;
      }

      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("fallback");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Organisation</span>
          <input name="organisation" type="text" autoComplete="organization" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Interested in</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>{interest}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>What is happening in your team?</span>
        <textarea
          name="message"
          rows={5}
          placeholder="A little context is plenty — what are you noticing, and what would you like to change?"
          required
        />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-submit-row">
        <button className="form-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="form-privacy">Your enquiry goes directly to Jo.</p>
      </div>

      {status === "sent" && (
        <p className="form-status" role="status">
          Thanks — your enquiry has been sent to Jo.
        </p>
      )}

      {status === "fallback" && (
        <p className="form-status" role="status">
          The direct website mail service is not connected yet. <a href={fallbackHref}>Open this enquiry in your email app instead →</a>
        </p>
      )}
    </form>
  );
}
