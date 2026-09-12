import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { whatsappHref } from "@/lib/contact";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="absolute inset-0 bg-fabric-pattern opacity-[0.08]" aria-hidden />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-gold/15 blur-3xl" aria-hidden />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight max-w-3xl text-balance">
            Fresh Clothes. Professional Care.{" "}
            <span className="gold-gradient-text">Delivered to Your Door.</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-col sm:flex-row gap-4">
          <Button href="#booking" size="lg">
            Book a Pickup
          </Button>
          <Button
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
            size="lg"
            icon={<Icon name="whatsapp" filled className="h-4 w-4" />}
          >
            WhatsApp Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
