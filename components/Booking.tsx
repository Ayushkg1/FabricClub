import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import BookingForm from "./BookingForm";
import { business, telHref } from "@/lib/contact";

export default function Booking() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-cream-soft">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="flex flex-col gap-7 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Book a Pickup"
            title="Need Your Clothes Cleaned? We'll Pick Them Up."
            description="Fill out the form and our team will confirm your pickup — or reach out directly and we'll take it from there."
            align="left"
          />
          <div className="flex flex-col gap-3">
            {[
              { icon: "truck" as const, text: "Free doorstep pickup & delivery" },
              { icon: "clock" as const, text: "Convenient time slots" },
              { icon: "shield" as const, text: "Fabric-safe, hygienic processing" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                  <Icon name={item.icon} className="h-4.5 w-4.5" />
                </span>
                {item.text}
              </div>
            ))}
          </div>
          <a
            href={telHref()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-gold-dark w-fit"
          >
            <Icon name="phone" filled className="h-4 w-4" />
            Prefer to talk? Call {business.phoneDisplay}
          </a>
        </div>

        <Reveal delay={100}>
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  );
}
