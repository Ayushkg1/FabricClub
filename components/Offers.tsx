import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { offers } from "@/lib/data/offers";

export default function Offers() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Offers & Packages"
          title="More Value for Every Wardrobe"
          description="Seasonal packages and bundled services designed around how you actually use Fabric Club."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <Reveal
              key={offer.title}
              delay={i * 60}
              className="relative flex flex-col gap-3 rounded-2xl border border-gold/20 bg-gradient-to-br from-ink to-charcoal p-6 overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-gold/15 blur-2xl" aria-hidden />
              {offer.tag && (
                <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-light">
                  {offer.tag}
                </span>
              )}
              <h3 className="font-display text-xl text-cream">{offer.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{offer.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
