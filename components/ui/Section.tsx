import Reveal from "./Reveal";
export default function Section({ id, title, eyebrow, intro, children, className = "" }:
  { id?: string; title: string; eyebrow?: string; intro?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && <span className="mb-3 inline-block rounded-full bg-sun-100 px-4 py-1 text-sm font-bold text-coral-600">{eyebrow}</span>}
          <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-base text-ink/70 sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
