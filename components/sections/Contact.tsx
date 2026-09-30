import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { schoolInfo, waLink } from "@/lib/data";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Contact() {
  // TODO: Replace with actual school information (lihat lib/data.ts)
  const rows = [
    { Icon: MapPin, label: "Alamat", value: schoolInfo.address },
    { Icon: Phone, label: "WhatsApp", value: `+${schoolInfo.whatsapp}` },
    { Icon: Mail, label: "Email", value: schoolInfo.email },
    { Icon: Clock, label: "Jam Operasional", value: schoolInfo.hours },
    { Icon: Instagram, label: "Instagram", value: schoolInfo.instagram.replace("https://", "") },
  ];
  return (
    <Section id="kontak" eyebrow="Kontak" title="Hubungi TK Khoirul Wildan">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ul className="space-y-3">
            {rows.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4 rounded-3xl bg-surface p-4 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-100 text-sky-600"><Icon className="h-5 w-5" aria-hidden /></span>
                <div><p className="text-sm font-semibold text-ink/60">{label}</p><p className="break-words font-bold">{value}</p></div>
              </li>
            ))}
          </ul>
          <Button href={waLink()} external className="mt-6 w-full sm:w-auto"><MessageCircle className="h-5 w-5" aria-hidden />Chat WhatsApp</Button>
        </div>
        <div className="min-h-72 overflow-hidden rounded-[2rem] bg-sky-100 shadow-soft">
          {schoolInfo.mapsEmbedUrl ? (
            <iframe title="Lokasi TK Khoirul Wildan" src={schoolInfo.mapsEmbedUrl} loading="lazy" className="h-full min-h-72 w-full border-0" />
          ) : (
            <div className="grid h-full min-h-72 place-items-center p-6 text-center font-semibold text-sky-700">
              {/* TODO: isi mapsEmbedUrl di lib/data.ts */}
              <span><MapPin className="mx-auto mb-2 h-8 w-8" aria-hidden />Placeholder Google Maps</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
