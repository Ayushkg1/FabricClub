import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import Button from "./ui/Button";
import { howItWorks } from "@/lib/data/howItWorks";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-fabric-pattern opacity-[0.08]" aria-hidden />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="The Process"
          title="Simple &amp; Convenient in 4 Easy Steps"
          description="We make garment care effortless for you."
          tone="dark"
        />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {howItWorks.map((item, i) => (
            <Reveal key={item.step} delay={i * 100} className="relative flex flex-col items-center text-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold-light shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)]">
                <Icon name={item.icon as never} className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed max-w-[220px]">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="flex justify-center">
          <Button href="#booking" size="lg">
            Book a Pickup Now
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
