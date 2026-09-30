import { tones, type features } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function CardGrid({ items }: { items: typeof features }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, description, icon: Icon, tone }, i) => (
        <li key={title} className="list-none">
          <Reveal delay={i * 0.06} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[2rem] bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card">
              <span aria-hidden className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-60 transition group-hover:scale-125 ${tones[tone].bg}`} />
              <span className={`relative grid h-14 w-14 place-items-center rounded-2xl ${tones[tone].bg} ${tones[tone].text}`}><Icon className="h-7 w-7" aria-hidden /></span>
              <h3 className="relative mt-4 text-xl font-bold">{title}</h3>
              <p className="relative mt-2 text-ink/70">{description}</p>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
