import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { specialCareItems } from "@/lib/data/specialCare";

export default function SpecialCare() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Delicate & Premium Wear"
          title="Because Every Fabric Deserves the Right Care."
          description="Silk, wool, wedding wear and designer pieces don't follow standard cleaning rules. Our team identifies the fabric, its sensitivities and the finishing method it actually needs before it's ever treated."
        />

        <Reveal className="flex flex-wrap gap-3 justify-center">
          {specialCareItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/30 bg-white px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
