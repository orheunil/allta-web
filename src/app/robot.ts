import type { MetadataRoute } from "next";

const termRoutes = ["/terms/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: termRoutes,
    },
    sitemap: "https://allta.io/sitemap.xml",
  };
}
