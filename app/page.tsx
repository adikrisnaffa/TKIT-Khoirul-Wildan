import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Programs from "@/components/sections/Programs";
import Activities from "@/components/sections/Activities";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { schoolInfo } from "@/lib/data";
import { getContent } from "@/lib/content";

export const revalidate = 60;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: schoolInfo.name,
  url: schoolInfo.siteUrl,
  email: schoolInfo.email,
  telephone: `+${schoolInfo.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: schoolInfo.address,
    addressCountry: "ID",
  },
};

export default async function Home() {
  const content = await getContent();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Programs />
        <Activities items={content.activities} />
        <Gallery items={content.gallery} />
        <Testimonials items={content.testimonials} />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}