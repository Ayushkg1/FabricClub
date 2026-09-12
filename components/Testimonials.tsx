import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-cream-soft">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Customer Stories"
          title="What Our Customers Say"
          description="Sample reviews shown for demonstration — replace with real customer testimonials."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 70}
              className="flex flex-col gap-4 rounded-2xl border border-ink/8 bg-white p-6"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Icon key={idx} name="star" filled className={`h-4 w-4 ${idx < t.rating ? "" : "opacity-20"}`} />
                ))}
              </div>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center justify-between pt-3 border-t border-ink/8">
                <span className="text-sm font-semibold text-ink">{t.name}</span>
                <span className="text-xs text-gold-dark font-medium">{t.service}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
