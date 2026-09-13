import Container from "./ui/Container";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Carousel from "./ui/Carousel";
import { business } from "@/lib/contact";

const TRUST_POINTS = [
  "Professional Cleaning",
  "Doorstep Pickup & Delivery",
  "Fabric-Safe Processes",
  "On-Time Delivery",
];

const HERO_SLIDES = [
  { src: "/images/Pick&Drop.jpeg", alt: "Doorstep pickup and delivery by Fabric Club" },
  { src: "/images/HassleFreePayment.jpeg", alt: "Schedule a pickup in a few taps" },
  { src: "/images/BeforeAfter.jpeg", alt: "Before and after — the Fabric Club difference" },
  { src: "/images/Shoes.jpeg", alt: "Premium shoe, carpet and rug care" },
  { src: "/images/FabricCare.jpeg", alt: "Careful, fabric-safe cleaning processes" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-fabric-pattern opacity-60" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-ink/5 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-7">
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink text-balance">
              Dry Cleaning &amp; Laundry{" "}
              <span className="gold-gradient-text">Before 24 Hours</span>
            </h1>
          </Reveal>

          <Reveal className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            <Icon name="sparkle" filled className="h-3.5 w-3.5" />
            Express Service Available
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg sm:text-xl font-semibold text-ink-soft text-balance">
              Fast Care. Fresh Clothes. Zero Hassle.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-base sm:text-lg text-ink-soft/80 leading-relaxed text-balance">
              Professional dry cleaning, laundry and garment care with convenient
              doorstep pickup and delivery — handled the way {business.name} treats
              every fabric: carefully.
            </p>
          </Reveal>

          <Reveal delay={260} className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <Button href="#booking" size="lg">
              Book a Pickup
            </Button>
            <Button href="#services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </Reveal>

          <Reveal delay={320} className="grid grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-ink/10">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm text-ink-soft">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {point}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="order-1 lg:order-2 relative w-full -mx-5 sm:-mx-8 lg:mx-0 lg:max-w-none"
        >
          <Carousel
            slides={HERO_SLIDES}
            className="aspect-[1264/843] w-full rounded-none lg:rounded-[2rem] lg:border lg:border-gold/25 lg:shadow-[0_40px_80px_-30px_rgba(93,24,57,0.25)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-light">
              <Icon name="truck" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-cream">Doorstep Pickup</p>
              <p className="text-xs text-cream/70">& Delivery, Always</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
