import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { featuredServices } from "@/lib/data/services";

export default function FeaturedServices() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Signature Services"
          title="Care Built Around Your Fabric"
          description="A closer look at how we handle the services that matter most to your wardrobe."
        />

        <div className="flex flex-col gap-16">
          {featuredServices.map((service, i) => (
            <Reveal
              key={service.slug}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/11] w-full rounded-3xl bg-gradient-to-br from-ink via-charcoal to-ink p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-fabric-pattern opacity-20" aria-hidden />
                <div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-gold/15 blur-3xl" aria-hidden />
                <span className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold-light">
                  <Icon name="sparkles" className="h-12 w-12" />
                </span>
              </div>

              <div className="flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  {service.name}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink leading-snug text-balance">
                  {service.headline}
                </h3>
                <p className="text-ink-soft leading-relaxed">{service.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button href="#booking" className="w-fit mt-2">
                  Book a Pickup
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
