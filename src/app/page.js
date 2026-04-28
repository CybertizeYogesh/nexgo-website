import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services limit={4} />
      <WhyChooseUs />
      <Process />
      <ServiceAreas />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}