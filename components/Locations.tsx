import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { locations } from "@/lib/data/locations";

export default function Locations() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Where We Operate"
          title="Serving Your Neighbourhood"
          description="Doorstep pickup and delivery across these areas. More locations and branches are added as Fabric Club grows."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location, i) => (
            <Reveal
              key={location.name}
              delay={i * 50}
              className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                <Icon name="map-pin" className="h-4.5 w-4.5" />
              </span>
              <span className="text-sm font-medium text-ink">{location.name}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
