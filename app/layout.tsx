import type { Metadata } from "next";
import "./globals.css";
import "./v2.css";
import "./refinement.css";
import "./rail-fix.css";
import "./scroll-rail.css";
import "./phase3.css";
import "./services.css";
import ScrollBreathRail from "./ScrollBreathRail";

export const metadata: Metadata = {
  title: "Project Exhale | Science-based human performance",
  description:
    "Practical, evidence-informed strategies for leaders and teams to regulate pressure, recover well and perform sustainably.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollBreathRail />
        {children}
      </body>
    </html>
  );
}
