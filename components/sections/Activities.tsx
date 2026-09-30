import type { Img } from "@/lib/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Activities({ items: activities }: { items: Img[] }) {
  return (
    <Section eyebrow="Aktivitas" title="Belajar Sambil Bermain" intro="Setiap hari penuh kegiatan seru yang menumbuhkan rasa ingin tahu." className="bg-sun-100/40">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {activities.map((a, i) => (
          <li key={a.title} className="list-none">
            <Reveal delay={i * 0.04}>
              <div className="overflow-hidden rounded-3xl bg-surface shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-square"><PlaceholderImage src={a.src} alt={a.alt} /></div>
                <p className="p-3 text-center font-display font-bold">{a.title}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
