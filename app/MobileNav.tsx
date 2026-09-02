"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#framework", label: "Framework" },
  { href: "#work", label: "Work with Jo" },
  { href: "#jo", label: "Meet Jo" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className={`mobile-nav-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div id="mobile-menu" className="mobile-menu-panel">
          <nav className="mobile-menu-links" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span className="mobile-menu-number">0{index + 1}</span>
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <p>Science-based human performance.</p>
            <a href="#contact" onClick={() => setOpen(false)}>
              Start a conversation <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
