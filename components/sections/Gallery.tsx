"use client";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { Img } from "@/lib/content";
import Section from "@/components/ui/Section";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const spans = ["sm:col-span-2 sm:row-span-2", "", "", "", "sm:col-span-2", ""];

export default function Gallery({ items: gallery }: { items: Img[] }) {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <Section id="galeri" eyebrow="Galeri" title="Kegiatan Kami">
      <ul className="grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-4">
        {gallery.map((g, i) => (
          <li key={g.title} className={`list-none ${spans[i] ?? ""}`}>
            <button type="button" onClick={() => setActive(i)} aria-label={`Lihat ${g.title}`}
              className="group relative h-full w-full overflow-hidden rounded-3xl shadow-soft">
              <PlaceholderImage src={g.src} alt={g.alt} label={g.title} className="transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-4 text-left font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {g.title}<ZoomIn className="h-5 w-5" aria-hidden />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label={gallery[active].title} onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-5">
          <div onClick={(e) => e.stopPropagation()} className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-3xl bg-white">
            <PlaceholderImage src={gallery[active].src} alt={gallery[active].alt} label={gallery[active].title} />
            <button type="button" autoFocus onClick={() => setActive(null)} aria-label="Tutup"
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white shadow-card"><X aria-hidden /></button>
          </div>
        </div>
      )}
    </Section>
  );
}
