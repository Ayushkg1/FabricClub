import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { whyChooseUs } from "@/lib/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-fabric-pattern opacity-[0.08]" aria-hidden />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Fabric Club"
          title="Why Customers Choose Fabric Club"
          tone="dark"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="flex flex-col gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors duration-300 hover:border-gold/30 hover:bg-cream/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                <Icon name={item.icon as never} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
