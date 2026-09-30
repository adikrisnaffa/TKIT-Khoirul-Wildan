import { programs } from "@/lib/data";
import Section from "@/components/ui/Section";
import CardGrid from "./CardGrid";
export default function Programs() {
  // TODO: Replace with actual school information (program resmi)
  return <Section id="program" eyebrow="Kurikulum" title="Program Pembelajaran"><CardGrid items={programs} /></Section>;
}
