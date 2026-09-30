import { waLink } from "@/lib/data";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { FloatingStar, FloatingCloud } from "@/components/ui/Decor";

export default function CTA() {
  return (
    <section className="px-5 py-16">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-sky-500 to-sky-700 px-6 py-14 text-center text-white shadow-card">
        <FloatingStar className="left-8 top-8 h-8 w-8" />
        <FloatingCloud className="bottom-6 right-8 h-16 w-16" />
        <h2 className="relative text-3xl font-extrabold sm:text-4xl">Mari Tumbuh dan Belajar Bersama</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90">Berikan pengalaman belajar yang menyenangkan dan bermakna untuk buah hati Anda bersama TK Khoirul Wildan.</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#kontak" variant="light">Hubungi Kami</Button>
          <Button href={waLink()} external variant="outline">Daftar Sekarang</Button>
        </div>
      </Reveal>
    </section>
  );
}
