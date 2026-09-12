import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { business } from "@/lib/contact";

const TRUST_POINTS = [
  "Professional Cleaning",
  "Doorstep Pickup & Delivery",
  "Fabric-Safe Processes",
  "On-Time Delivery",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-fabric-pattern opacity-30" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-7">
          <Reveal className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            <Icon name="sparkle" filled className="h-3.5 w-3.5" />
            Premium Garment Care
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-cream text-balance">
              Premium Care for{" "}
              <span className="gold-gradient-text">Every Fabric</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base sm:text-lg text-cream/75 leading-relaxed text-balance">
              Professional dry cleaning, laundry and garment care with convenient
              doorstep pickup and delivery — handled the way {business.name} treats
              every fabric: carefully.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <Button href="#booking" size="lg">
              Book a Pickup
            </Button>
            <Button href="#services" variant="outline-light" size="lg">
              Explore Services
            </Button>
          </Reveal>

          <Reveal delay={320} className="grid grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-cream/10">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm text-cream/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {point}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full rounded-[2rem] border border-gold/20 bg-gradient-to-br from-charcoal via-ink to-ink p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex h-full flex-col items-center justify-center gap-8">
              <Image
                src="/logo/logo.png"
                alt={`${business.name} — premium care for every fabric`}
                width={220}
                height={220}
                className="w-40 sm:w-48 h-auto object-contain drop-shadow-[0_10px_30px_rgba(182,145,60,0.35)]"
                priority
              />
              <div className="grid grid-cols-2 gap-3 w-full">
                {[
                  { icon: "hanger", label: "Dry Cleaning" },
                  { icon: "washer", label: "Laundry" },
                  { icon: "iron", label: "Steam Iron" },
                  { icon: "sofa", label: "Sofa & Carpet" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-cream/10 bg-cream/5 px-3.5 py-3 text-cream/90"
                  >
                    <Icon name={item.icon as never} className="h-5 w-5 text-gold-light shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
              <Icon name="truck" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Doorstep Pickup</p>
              <p className="text-xs text-ink-soft">& Delivery, Always</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
