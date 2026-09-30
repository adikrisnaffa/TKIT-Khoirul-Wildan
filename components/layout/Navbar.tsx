"use client";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { navigation, schoolInfo, waLink } from "@/lib/data";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-cream/85 backdrop-blur">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#beranda" className="flex items-center gap-2 font-display text-lg font-extrabold text-sky-700">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500 text-white"><GraduationCap className="h-5 w-5" aria-hidden /></span>
          {schoolInfo.name}
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((n) => (
            <li key={n.href}><a href={n.href} className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-sky-100 hover:text-sky-700">{n.label}</a></li>
          ))}
        </ul>
        <div className="hidden lg:block"><Button href={waLink()} external className="!min-h-10 !px-5 !py-2 text-sm">Daftar Sekarang</Button></div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"} className="grid h-11 w-11 place-items-center rounded-full bg-sky-100 text-sky-700 lg:hidden">
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-sky-100 bg-cream px-5 pb-5 lg:hidden">
          <ul className="flex flex-col py-2">
            {navigation.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-semibold hover:bg-sky-100">{n.label}</a></li>
            ))}
          </ul>
          <Button href={waLink()} external className="w-full">Daftar Sekarang</Button>
        </div>
      )}
    </header>
  );
}
