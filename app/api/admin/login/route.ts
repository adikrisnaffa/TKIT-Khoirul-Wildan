import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE, createSession, safeEqual } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({}));
  const real = process.env.ADMIN_PASSWORD;
  if (!real || typeof password !== "string" || !safeEqual(password, real)) {
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }
  cookies().set(COOKIE, await createSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7 });
  return NextResponse.json({ ok: true });
}
export async function DELETE() {
  cookies().delete(COOKIE);
  return NextResponse.json({ ok: true });
}
