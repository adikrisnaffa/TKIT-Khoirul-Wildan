import { features } from "@/lib/data";
import Section from "@/components/ui/Section";
import CardGrid from "./CardGrid";
export default function WhyChooseUs() {
  return <Section id="fasilitas" eyebrow="Keunggulan" title="Mengapa Memilih TK Khoirul Wildan?" className="bg-sky-50"><CardGrid items={features} /></Section>;
}
