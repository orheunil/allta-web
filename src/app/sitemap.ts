import type { MetadataRoute } from "next";

const siteUrl = "https://allta.io";

const pages = ["", "/stores"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
