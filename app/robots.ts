import type { MetadataRoute } from "next";
import { schoolInfo } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${schoolInfo.siteUrl}/sitemap.xml` };
}