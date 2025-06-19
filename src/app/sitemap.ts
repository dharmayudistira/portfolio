import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/playgrounds`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
