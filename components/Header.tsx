"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business, telHref, whatsappHref } from "@/lib/contact";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Fabric Club", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const CLOSE_TRANSITION_MS = 320;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function goTo(href: string) {
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, CLOSE_TRANSITION_MS);
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_-8px_rgba(16,42,67,0.15)]" : "shadow-none"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="#home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo/fabric_club_logo_no_text.svg"
            alt={`${business.name} logo`}
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            priority
          />
          <span className="font-display text-lg sm:text-xl leading-tight text-ink">
            The Fabric Club
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={telHref()}
            variant="ghost"
            size="md"
            icon={<Icon name="phone" filled className="h-4 w-4" />}
          >
            Call Now
          </Button>
          <Button href="#booking" variant="primary" size="md">
            Book a Pickup
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
            open ? "border-cream/25 text-cream bg-ink" : "border-ink/10 text-ink"
          }`}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>
    </header>

      {/* Mobile menu — rendered outside <header> so its own conditional
          backdrop-blur/transform never creates a containing block that
          would break this overlay's fixed, full-viewport positioning. */}
      <div
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[84%] max-w-[340px] bg-ink shadow-[-16px_0_48px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-fabric-pattern opacity-[0.06] pointer-events-none" aria-hidden />

          <div className="relative flex items-center gap-3 px-6 pt-7 pb-5 border-b border-cream/10">
            <Image
              src="/logo/fabric_club_logo_no_text.svg"
              alt={`${business.name} logo`}
              width={38}
              height={38}
              className="h-9 w-9 object-contain rounded-full bg-cream p-1"
            />
            <span className="font-display text-lg text-cream">The Fabric Club</span>
          </div>

          <nav className="relative flex flex-col gap-1 px-4 py-5 overflow-y-auto">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                }}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-cream/85 transition-all duration-300 hover:bg-cream/8 hover:text-gold-light ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className="text-gold-light/0 group-hover:text-gold-light/80 transition-colors"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="relative mt-auto flex flex-col gap-3 px-5 pt-5 pb-24 sm:pb-7 border-t border-cream/10">
            <div className="flex flex-col gap-2 mb-1">
              <a
                href={telHref()}
                className="flex items-center gap-2.5 text-sm text-cream/70 hover:text-gold-light transition-colors"
              >
                <Icon name="phone" filled className="h-4 w-4 text-gold-light" />
                {business.phoneDisplay}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream/70 hover:text-gold-light transition-colors"
              >
                <Icon name="whatsapp" filled className="h-4 w-4 text-gold-light" />
                Chat on WhatsApp
              </a>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => goTo("#booking")}
            >
              Book a Pickup
            </Button>
            <Button
              href={telHref()}
              variant="outline-light"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
              icon={<Icon name="phone" filled className="h-4 w-4" />}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
