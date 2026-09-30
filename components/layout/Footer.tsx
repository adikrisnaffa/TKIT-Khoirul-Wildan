import { Instagram, MessageCircle, Facebook } from "lucide-react";
import { navigation, schoolInfo, waLink } from "@/lib/data";

export default function Footer() {
  const links = navigation.filter((n) => ["#beranda", "#tentang", "#program", "#galeri", "#kontak"].includes(n.href));
  const social = [
    { label: "Instagram", href: schoolInfo.instagram, Icon: Instagram },
    { label: "WhatsApp", href: waLink(), Icon: MessageCircle },
    { label: "Facebook", href: schoolInfo.facebook, Icon: Facebook },
  ];
  return (
    <footer className="bg-sky-700 px-5 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold">{schoolInfo.name}</p>
          <p className="mt-2 text-white/80">{schoolInfo.tagline}.</p>
        </div>
        <nav aria-label="Tautan footer"><ul className="grid grid-cols-2 gap-2">
          {links.map((l) => <li key={l.href}><a href={l.href} className="hover:underline">{l.label}</a></li>)}
        </ul></nav>
        <ul className="flex gap-3 md:justify-end">
          {social.map(({ label, href, Icon }) => (
            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 transition hover:bg-white/30"><Icon className="h-5 w-5" aria-hidden /></a></li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-sm text-white/70">© 2026 TK Khoirul Wildan. All rights reserved.</p>
    </footer>
  );
}
