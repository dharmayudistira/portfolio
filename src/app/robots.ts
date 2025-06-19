import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blogs", "/playgrounds"],
    },
    sitemap: `https://www.dharma-yudistira.com/sitemap.xml`,
  };
}
