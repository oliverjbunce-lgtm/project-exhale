import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
