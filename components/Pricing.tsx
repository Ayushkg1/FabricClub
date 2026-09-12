import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { pricingRows } from "@/lib/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-cream-soft">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          description="Starting prices for our most requested services. Final pricing depends on fabric, size and treatment required."
        />

        <Reveal className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink text-cream">
                <th className="px-6 py-4 text-sm font-semibold">Service</th>
                <th className="px-6 py-4 text-sm font-semibold text-right">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, i) => (
                <tr
                  key={row.service}
                  className={i % 2 === 0 ? "bg-white" : "bg-cream-soft/60"}
                >
                  <td className="px-6 py-3.5 text-sm text-ink-soft border-t border-ink/5">{row.service}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-ink text-right border-t border-ink/5">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="text-sm text-ink-soft max-w-md">
            Prices may vary depending on fabric, size and treatment required.
          </p>
          <Button href="#booking" size="lg">
            Get a Quote
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
