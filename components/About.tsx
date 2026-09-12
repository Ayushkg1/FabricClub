import Image from "next/image";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { business } from "@/lib/contact";

const POINTS = [
  { icon: "shield" as const, title: "Professional Garment Care", text: "Every fabric is assessed and treated with the right process, not a generic wash." },
  { icon: "heart" as const, title: "Customer-First Service", text: "Convenient pickup, clear communication, and clothes handled the way you'd want them handled." },
  { icon: "sparkle" as const, title: "Quality & Fabric Expertise", text: "From everyday laundry to delicate occasion wear, care matched to material and finish." },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-soft">
      <Container className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative mx-auto lg:mx-0 w-full max-w-md">
          <div className="relative aspect-square w-full rounded-[2rem] bg-gradient-to-br from-ink via-charcoal to-ink flex items-center justify-center p-10 overflow-hidden">
            <div className="absolute inset-0 bg-fabric-pattern opacity-20" aria-hidden />
            <Image
              src="/logo/logo.png"
              alt={`${business.name} logo`}
              width={200}
              height={200}
              className="relative w-32 sm:w-40 h-auto object-contain"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark w-fit">
              <span className="h-px w-6 bg-gold" />
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight text-balance">
              Professional Garment Care, Built Around You
            </h2>
            <p className="text-ink-soft leading-relaxed">
              {business.name} exists to take one everyday chore off your plate — the
              cleaning, care and upkeep of the clothes you rely on and the pieces you
              treasure. We combine professional cleaning processes with the
              convenience of doorstep pickup and delivery, so quality care never
              costs you time.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 80} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium text-ink">{point.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
