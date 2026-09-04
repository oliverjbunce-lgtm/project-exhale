import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollBreathRail from "./ScrollBreathRail";

const siteUrl = "https://www.project-exhale.co.nz";
const siteDescription =
  "Science-based human performance for leaders and teams. Practical strategies to regulate pressure, recover well and perform sustainably.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Project Exhale",
  title: {
    default: "Project Exhale | Science-based human performance",
    template: "%s | Project Exhale",
  },
  description: siteDescription,
  keywords: [
    "Project Exhale",
    "human performance",
    "workplace wellbeing",
    "leadership development",
    "stress regulation",
    "nervous system regulation",
    "workplace workshops",
    "conference speaker New Zealand",
  ],
  authors: [{ name: "Project Exhale", url: siteUrl }],
  creator: "Project Exhale",
  publisher: "Project Exhale",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Project Exhale",
    title: "Project Exhale | Science-based human performance",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Project Exhale — Science-based human performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Exhale | Science-based human performance",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070a09",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Project Exhale",
      description: siteDescription,
      inLanguage: "en-NZ",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Project Exhale",
      url: siteUrl,
      email: "jo@project-exhale.co.nz",
      telephone: "+64211163063",
      areaServed: {
        "@type": "Country",
        name: "New Zealand",
      },
      founder: {
        "@id": `${siteUrl}/#jo-hopkinson-haigh`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#jo-hopkinson-haigh`,
      name: "Jo Hopkinson-Haigh",
      jobTitle: "Physiotherapist and Performance Educator",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Christchurch",
        addressCountry: "NZ",
      },
      knowsAbout: [
        "Human performance",
        "Stress regulation",
        "Recovery",
        "Leadership development",
        "Workplace performance",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollBreathRail />
        {children}
      </body>
    </html>
  );
}
