import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://miranova.dev";

  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/matrix`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/commons`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
