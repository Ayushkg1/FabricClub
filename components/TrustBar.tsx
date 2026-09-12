import Container from "./ui/Container";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const POINTS = [
  { icon: "shield" as const, label: "Fabric-Safe Processes" },
  { icon: "truck" as const, label: "Doorstep Pickup & Delivery" },
  { icon: "droplet" as const, label: "Hygienic Handling" },
  { icon: "clock" as const, label: "On-Time Delivery" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-soft border-b border-ink/5">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        {POINTS.map((point, i) => (
          <Reveal
            key={point.label}
            delay={i * 60}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 text-center sm:text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
              <Icon name={point.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-ink-soft leading-snug">{point.label}</span>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
