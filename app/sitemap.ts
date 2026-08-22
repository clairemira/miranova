import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://miranova.dev";

  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-08-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/matrix`,
      lastModified: new Date("2026-08-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/commons`,
      lastModified: new Date("2026-08-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
