import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const EXT: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export async function POST(req: Request) {
  const f = (await req.formData()).get("file");
  if (!(f instanceof File) || !EXT[f.type] || f.size > 4_000_000)
    return NextResponse.json({ error: "File harus JPG/PNG/WebP di bawah 4MB" }, { status: 400 });
  const blob = await put(`images/foto.${EXT[f.type]}`, f, { access: "public", addRandomSuffix: true, contentType: f.type });
  return NextResponse.json({ url: blob.url });
}
