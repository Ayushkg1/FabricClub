import Image from "next/image";
import Container from "./ui/Container";
import Icon from "./ui/Icon";
import { business, telHref, whatsappHref } from "@/lib/contact";
import { services } from "@/lib/data/services";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_SERVICES = services.slice(0, 6);

const SOCIALS = [
  { key: "instagram" as const, href: business.social.instagram, label: "Instagram" },
  { key: "facebook" as const, href: business.social.facebook, label: "Facebook" },
  { key: "google" as const, href: business.social.googleBusiness, label: "Google Business Profile" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-16 pb-28 sm:pb-16 text-cream/80">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 shrink-0 items-center justify-center rounded-lg bg-cream/90 px-2 py-1.5">
              <Image
                src="/images/LogoWithoutBG.png"
                alt={`${business.name} logo`}
                width={64}
                height={35}
                className="h-full w-auto object-contain"
              />
            </span>
            <span className="font-display text-lg text-cream">The Fabric Club</span>
          </div>
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            Professional dry cleaning, laundry and garment care with doorstep pickup
            and delivery — premium care for every fabric.
          </p>
          {SOCIALS.length > 0 && (
            <div className="flex gap-3 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 hover:border-gold hover:text-gold-light transition-colors"
                >
                  <Icon name={s.key} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-base text-cream">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/65 hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-base text-cream">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_SERVICES.map((service) => (
              <li key={service.slug}>
                <a href="#services" className="text-sm text-cream/65 hover:text-gold-light transition-colors">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-base text-cream">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={telHref()} className="flex items-start gap-2.5 text-sm text-cream/65 hover:text-gold-light transition-colors">
                <Icon name="phone" filled className="h-4 w-4 mt-0.5 shrink-0" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm text-cream/65 hover:text-gold-light transition-colors">
                <Icon name="whatsapp" filled className="h-4 w-4 mt-0.5 shrink-0" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-start gap-2.5 text-sm text-cream/65 hover:text-gold-light transition-colors">
                <Icon name="mail" className="h-4 w-4 mt-0.5 shrink-0" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-cream/65">
              <Icon name="map-pin" className="h-4 w-4 mt-0.5 shrink-0" />
              {business.address}
            </li>
          </ul>

          <div className="pt-2 border-t border-cream/10">
            <h4 className="text-sm font-medium text-cream mb-2">Business Hours</h4>
            <ul className="flex flex-col gap-1">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-xs text-cream/60 gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="pt-6">
        <p className="text-xs text-cream/45 text-center">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
