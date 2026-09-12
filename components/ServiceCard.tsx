import type { Service } from "@/lib/data/services";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative flex flex-col gap-4 rounded-2xl border border-ink/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_45px_-20px_rgba(23,20,15,0.25)]"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
        <Icon name={service.icon as never} className="h-7 w-7" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-xl text-ink">{service.name}</h3>
        <p className="text-sm text-ink-soft leading-relaxed">{service.description}</p>
      </div>
      <a
        href="#booking"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark"
      >
        Learn More
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </Reveal>
  );
}
