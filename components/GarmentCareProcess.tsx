import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { garmentCareProcess } from "@/lib/data/howItWorks";

export default function GarmentCareProcess() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Process"
          title="Every Garment, Handled with Precision"
          description="A consistent, transparent process for every item that comes through Fabric Club — from the moment it's inspected to the moment it's delivered back to you."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {garmentCareProcess.map((stage, i) => (
            <Reveal
              key={stage.title}
              delay={i * 50}
              className="relative flex flex-col gap-2 rounded-2xl border border-ink/8 bg-white p-5"
            >
              <span className="font-display text-3xl text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base text-ink">{stage.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{stage.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
