import { NextResponse } from "next/server";
import { saveContent } from "@/lib/content";

const str = (s: unknown, n: number) => typeof s === "string" && s.length <= n;
const src = (s: unknown) => str(s, 500) && (s === "" || (s as string).startsWith("https://"));
const img = (x: any) => str(x?.title, 80) && str(x?.alt, 200) && src(x?.src);
const testi = (x: any) => str(x?.quote, 600) && str(x?.name, 80);

export async function PUT(req: Request) {
  const b = await req.json().catch(() => null);
  const valid = b && Array.isArray(b.gallery) && b.gallery.length <= 30 && b.gallery.every(img)
    && Array.isArray(b.activities) && b.activities.length <= 16 && b.activities.every(img)
    && Array.isArray(b.testimonials) && b.testimonials.length <= 12 && b.testimonials.every(testi);
  if (!valid) return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
  await saveContent({
    gallery: b.gallery.map(({ title, src, alt }: any) => ({ title, src, alt })),
    activities: b.activities.map(({ title, src, alt }: any) => ({ title, src, alt })),
    testimonials: b.testimonials.map(({ quote, name }: any) => ({ quote, name })),
  });
  return NextResponse.json({ ok: true });
}
