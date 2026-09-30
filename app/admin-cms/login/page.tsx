"use client";
import { useState } from "react";

export default function Login() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr("");
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
    if (r.ok) location.href = "/admin-cms";
    else { setErr("Password salah"); setBusy(false); }
  }
  return (
    <main className="grid min-h-screen place-items-center p-5">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-card">
        <h1 className="text-2xl font-extrabold text-sky-700">Admin TK Khoirul Wildan</h1>
        <label htmlFor="pw" className="mt-5 block font-semibold">Password</label>
        <input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" required
          className="mt-1 w-full rounded-xl border-2 border-sky-200 px-4 py-3" />
        {err && <p role="alert" className="mt-2 font-semibold text-coral-600">{err}</p>}
        <button disabled={busy} className="mt-5 min-h-12 w-full rounded-full bg-coral-500 font-bold text-white disabled:opacity-60">{busy ? "Masuk…" : "Masuk"}</button>
      </form>
    </main>
  );
}
