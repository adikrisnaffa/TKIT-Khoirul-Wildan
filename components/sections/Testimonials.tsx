import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  // TODO: Replace with real parent testimonials
  return (
    <Section id="informasi" eyebrow="Testimoni" title="Cerita dari Orang Tua" className="bg-sky-50">
      <ul className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <li key={i} className="list-none">
            <Reveal delay={i * 0.08} className="h-full">
              <figure className="h-full rounded-[2rem] bg-white p-6 shadow-soft">
                <Quote className="h-8 w-8 text-sun-400" aria-hidden />
                <blockquote className="mt-3 text-ink/80">{t.quote}</blockquote>
                <figcaption className="mt-4 font-display font-bold text-sky-700">{t.name}</figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
