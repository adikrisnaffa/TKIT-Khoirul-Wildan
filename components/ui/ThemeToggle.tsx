"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

type Mode = "auto" | "light" | "dark";
const ORDER: Mode[] = ["auto", "light", "dark"];
const LABEL: Record<Mode, string> = { auto: "Otomatis (sesuai jam)", light: "Mode terang", dark: "Mode gelap" };

// Gelap: 18.00 - 05.59. Terang: 06.00 - 17.59.
const isNight = () => {
  const h = new Date().getHours();
  return h >= 18 || h < 6;
};
const apply = (m: Mode) =>
  document.documentElement.classList.toggle("dark", m === "dark" || (m === "auto" && isNight()));

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("theme"); } catch {}
    setMode(saved === "light" || saved === "dark" ? saved : "auto");
  }, []);

  useEffect(() => {
    if (!mode) return;
    apply(mode);
    if (mode !== "auto") return;
    const id = setInterval(() => apply("auto"), 60_000);
    return () => clearInterval(id);
  }, [mode]);

  function next() {
    const m = ORDER[(ORDER.indexOf(mode ?? "auto") + 1) % ORDER.length];
    setMode(m);
    try { localStorage.setItem("theme", m); } catch {}
  }

  const current = mode ?? "auto";
  const Icon = current === "auto" ? SunMoon : current === "light" ? Sun : Moon;
  return (
    <button type="button" onClick={next} title={LABEL[current]}
      aria-label={`Tema: ${LABEL[current]}. Klik untuk mengganti.`}
      className="grid h-11 w-11 place-items-center rounded-full bg-sky-100 text-sky-700 transition hover:scale-110">
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
}