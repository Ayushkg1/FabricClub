import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { whyChooseUs } from "@/lib/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-cream">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Fabric Club"
          title="Why Customers Choose Fabric Club"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="flex flex-col gap-4 rounded-2xl border border-ink/8 bg-white p-6 transition-colors duration-300 hover:border-gold/40 hover:shadow-[0_16px_40px_-20px_rgba(16,42,67,0.2)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold-dark">
                <Icon name={item.icon as never} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg text-ink">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
