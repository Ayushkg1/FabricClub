import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Complete Garment Care Under One Roof"
          description="From everyday laundry to the most delicate occasion wear, Fabric Club brings a professional process to every fabric that comes through the door."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={i * 60} />
          ))}
        </div>
      </Container>
    </section>
  );
}
