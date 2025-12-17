import { MetadataRoute } from "next";
import { fetchAllPosts } from "@/lib/blogApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.aiprojectreport.com";
  const now = new Date();

  let posts: any[] = [];

  try {
    posts = await fetchAllPosts();
  } catch (e) {
    console.error("Sitemap fetch failed:", e);
  }

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    ...posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate || now),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
