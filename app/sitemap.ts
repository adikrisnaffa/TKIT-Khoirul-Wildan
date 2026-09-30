import type { MetadataRoute } from "next";
import { schoolInfo } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: schoolInfo.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}