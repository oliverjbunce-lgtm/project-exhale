import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Project Exhale",
    short_name: "Exhale",
    description:
      "Science-based human performance for leaders and teams — practical strategies to regulate pressure, recover well and perform sustainably.",
    start_url: "/",
    display: "standalone",
    background_color: "#070a09",
    theme_color: "#070a09",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
