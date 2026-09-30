import { put } from "@vercel/blob";
import { gallery, activities, testimonials } from "@/lib/data";

export type Img = { title: string; src: string; alt: string };
export type Testi = { quote: string; name: string };
export type Content = { gallery: Img[]; activities: Img[]; testimonials: Testi[] };

export const defaults: Content = { gallery, activities, testimonials };
const KEY = "content.json";

function contentUrl() {
  if (process.env.CONTENT_URL) return process.env.CONTENT_URL;
  const id = process.env.BLOB_STORE_ID ?? process.env.BLOB_READ_WRITE_TOKEN?.split("_")[3];
  return id ? `https://${id.replace(/^store_/, "").toLowerCase()}.public.blob.vercel-storage.com/${KEY}` : null;
}

export async function getContent(fresh = false): Promise<Content> {
  const u = contentUrl();
  if (!u) return defaults;
  try {
    const r = await fetch(fresh ? `${u}?t=${Date.now()}` : u, fresh ? { cache: "no-store" } : { next: { revalidate: 60 } });
    if (!r.ok) return defaults;
    return { ...defaults, ...(await r.json()) };
  } catch {
    return defaults;
  }
}

export async function saveContent(c: Content) {
  await put(KEY, JSON.stringify(c), { access: "public", addRandomSuffix: false, allowOverwrite: true, contentType: "application/json", cacheControlMaxAge: 60 });
}
