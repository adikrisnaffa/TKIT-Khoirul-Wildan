import { schoolInfo, waLink } from "@/lib/data";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { FloatingCloud, FloatingStar, FloatingSun } from "@/components/ui/Decor";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-cream px-5 pb-20 pt-12 sm:pt-20">
      <FloatingSun className="right-6 top-6 h-14 w-14" />
      <FloatingCloud className="left-4 top-24 hidden h-16 w-16 sm:block" />
      <FloatingStar className="bottom-16 left-1/2 h-7 w-7" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-sky-700 shadow-soft">{schoolInfo.name}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Tempat <span className="text-sky-500">Tumbuh</span>, <span className="text-coral-500">Bermain</span>, dan <span className="text-leaf-600">Belajar</span> dengan Bahagia
          </h1>
          <p className="mt-5 max-w-lg text-base text-ink/75 sm:text-lg">{schoolInfo.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={waLink()} external>Daftar Sekarang</Button>
            <Button href="#tentang" variant="secondary">Kenali Sekolah Kami</Button>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[3rem] rounded-tr-[7rem] bg-white shadow-card ring-8 ring-white">
            {/* TODO: Replace with actual school photo, e.g. src="/images/hero.jpg" */}
            <PlaceholderImage alt="Anak-anak TK Khoirul Wildan belajar dan bermain bersama" label="Foto anak belajar & bermain" />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-sun-300 px-4 py-2 font-display font-bold shadow-card sm:-left-6">🌈 Belajar itu seru!</div>
        </Reveal>
      </div>
    </section>
  );
}
