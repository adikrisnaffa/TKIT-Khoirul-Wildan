import { CheckCircle2 } from "lucide-react";
import { stats } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

const points = ["Pembelajaran yang menyenangkan", "Perkembangan karakter", "Kreativitas", "Kemandirian", "Sosial dan emosional", "Nilai-nilai Islami"];

export default function About() {
  return (
    <Section id="tentang" eyebrow="Tentang Kami" title="Tentang TK Khoirul Wildan">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal className="aspect-square overflow-hidden rounded-[3rem] rounded-bl-[7rem] shadow-card">
          {/* TODO: Replace with actual school photo */}
          <PlaceholderImage alt="Suasana kelas TK Khoirul Wildan" label="Foto suasana sekolah" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-ink/75">TK Khoirul Wildan adalah tempat pendidikan anak usia dini yang mengutamakan:</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {points.map((p) => <li key={p} className="flex items-center gap-2 font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-leaf-600" aria-hidden />{p}</li>)}
          </ul>
          {/* TODO: Replace with actual school information */}
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <li key={s.label} className="rounded-3xl bg-surface p-4 shadow-soft">
                <p className="font-display text-3xl font-extrabold text-sky-600">{s.value}</p>
                <p className="text-sm text-ink/70">{s.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
