"use client";
import { useState } from "react";
import type { Content, Img } from "@/lib/content";

async function shrink(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const s = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej()), "image/jpeg", 0.85));
}
async function upload(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", new File([await shrink(file)], "foto.jpg", { type: "image/jpeg" }));
  const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
  if (!r.ok) throw new Error();
  return (await r.json()).url;
}

function ImageCard({ item, onChange, onDelete }: { item: Img; onChange: (i: Img) => void; onDelete?: () => void }) {
  const [busy, setBusy] = useState(false);
  async function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setBusy(true);
    try { onChange({ ...item, src: await upload(f) }); } catch { alert("Gagal upload. Coba lagi."); }
    setBusy(false); e.target.value = "";
  }
  return (
    <div className="rounded-2xl bg-white p-3 shadow-soft">
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-sky-100">
        {item.src ? <img src={item.src} alt={item.alt} className="h-full w-full object-cover" /> : <p className="grid h-full place-items-center text-sm text-ink/50">Belum ada foto</p>}
      </div>
      <input value={item.title} aria-label="Judul foto" onChange={(e) => onChange({ ...item, title: e.target.value, alt: `${e.target.value} TK Khoirul Wildan` })}
        className="mt-2 w-full rounded-lg border-2 border-sky-100 px-3 py-2" />
      <div className="mt-2 flex gap-2">
        <label className="flex-1 cursor-pointer rounded-full bg-sky-500 px-4 py-2 text-center font-bold text-white">
          {busy ? "Mengunggah…" : item.src ? "Ganti foto" : "Pilih foto"}
          <input type="file" accept="image/*" hidden onChange={pick} disabled={busy} />
        </label>
        {onDelete && <button type="button" onClick={() => confirm("Hapus item ini?") && onDelete()} className="rounded-full bg-coral-100 px-4 py-2 font-bold text-coral-600">Hapus</button>}
      </div>
    </div>
  );
}

export default function Editor({ initial }: { initial: Content }) {
  const [c, setC] = useState(initial);
  const [msg, setMsg] = useState("");
  const [saving, setSaving] = useState(false);
  const setImg = (k: "gallery" | "activities", i: number, it: Img) => setC({ ...c, [k]: c[k].map((x, j) => (j === i ? it : x)) });
  const setT = (i: number, p: Partial<{ quote: string; name: string }>) => setC({ ...c, testimonials: c.testimonials.map((x, j) => (j === i ? { ...x, ...p } : x)) });

  async function save() {
    setSaving(true); setMsg("");
    const r = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(c) });
    setMsg(r.ok ? "Tersimpan ✔ Website diperbarui dalam ±1–2 menit." : "Gagal menyimpan. Coba lagi.");
    setSaving(false);
  }
  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    location.href = "/admin-cms/login";
  }
  const h2 = "mb-4 mt-10 text-2xl font-extrabold text-sky-700";
  return (
    <main className="mx-auto max-w-5xl p-5 pb-32">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Admin Website</h1>
        <button type="button" onClick={logout} className="rounded-full bg-white px-4 py-2 font-bold shadow-soft">Keluar</button>
      </div>

      <h2 className={h2}>Kegiatan Kami (Galeri)</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.gallery.map((g, i) => (
          <ImageCard key={i} item={g} onChange={(it) => setImg("gallery", i, it)} onDelete={() => setC({ ...c, gallery: c.gallery.filter((_, j) => j !== i) })} />
        ))}
      </div>
      <button type="button" onClick={() => setC({ ...c, gallery: [...c.gallery, { title: "Kegiatan baru", src: "", alt: "Kegiatan baru TK Khoirul Wildan" }] })}
        className="mt-4 rounded-full bg-leaf-400 px-5 py-3 font-bold text-white">+ Tambah foto galeri</button>

      <h2 className={h2}>Belajar Sambil Bermain</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.activities.map((a, i) => <ImageCard key={i} item={a} onChange={(it) => setImg("activities", i, it)} />)}
      </div>

      <h2 className={h2}>Cerita dari Orang Tua</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {c.testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl bg-white p-3 shadow-soft">
            <textarea value={t.quote} rows={4} aria-label="Isi testimoni" onChange={(e) => setT(i, { quote: e.target.value })} className="w-full rounded-lg border-2 border-sky-100 p-3" />
            <input value={t.name} aria-label="Nama" onChange={(e) => setT(i, { name: e.target.value })} className="mt-2 w-full rounded-lg border-2 border-sky-100 px-3 py-2" />
            <button type="button" onClick={() => confirm("Hapus testimoni ini?") && setC({ ...c, testimonials: c.testimonials.filter((_, j) => j !== i) })}
              className="mt-2 rounded-full bg-coral-100 px-4 py-2 font-bold text-coral-600">Hapus</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setC({ ...c, testimonials: [...c.testimonials, { quote: "", name: "Orang Tua Siswa" }] })}
        className="mt-4 rounded-full bg-leaf-400 px-5 py-3 font-bold text-white">+ Tambah testimoni</button>

      <div className="fixed inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-sky-100 bg-white/95 p-4 backdrop-blur">
        <p role="status" className="text-sm font-semibold text-leaf-600">{msg}</p>
        <button type="button" onClick={save} disabled={saving} className="min-h-12 rounded-full bg-coral-500 px-8 font-bold text-white disabled:opacity-60">{saving ? "Menyimpan…" : "Simpan perubahan"}</button>
      </div>
    </main>
  );
}
