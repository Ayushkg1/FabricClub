import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { howItWorks } from "@/lib/data/howItWorks";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="The Process" title="Clean Clothes, Zero Hassle" />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {howItWorks.map((item, i) => (
            <Reveal key={item.step} delay={i * 100} className="relative flex flex-col items-center text-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ink text-gold-light shadow-[0_10px_25px_-10px_rgba(23,20,15,0.5)]">
                <Icon name={item.icon as never} className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed max-w-[220px]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
