import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://www.dharma-yudistira.com/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `https://www.dharma-yudistira.com/blogs`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `https://www.dharma-yudistira.com/playgrounds`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
