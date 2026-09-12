"use client";

import { business, telHref, whatsappHref } from "@/lib/contact";
import Icon from "./ui/Icon";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Desktop / tablet: floating stack, bottom-right */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={telHref()}
          aria-label={`Call ${business.name} now`}
          className="group flex items-center gap-2.5 rounded-full bg-ink text-cream pl-4 pr-5 py-3 shadow-[0_10px_30px_-8px_rgba(16,42,67,0.5)] transition-all duration-300 hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-8px_rgba(16,42,67,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110">
            <Icon name="phone" filled className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide">Call Now</span>
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${business.name} on WhatsApp`}
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] text-ink pl-4 pr-5 py-3 shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:bg-[#1fbd5a] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-8px_rgba(37,211,102,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1fbd5a] transition-transform duration-300 group-hover:scale-110">
            <Icon name="whatsapp" filled className="h-4.5 w-4.5" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink">WhatsApp</span>
        </a>
      </div>

      {/* Mobile: fixed bottom bar */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-ink/10 bg-cream/95 backdrop-blur-md shadow-[0_-6px_24px_-6px_rgba(16,42,67,0.15)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={telHref()}
          aria-label={`Call ${business.name} now`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wide text-cream bg-ink active:bg-charcoal transition-colors"
        >
          <Icon name="phone" filled className="h-4 w-4 text-gold" />
          Call Now
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${business.name} on WhatsApp`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wide text-ink bg-[#25D366] active:bg-[#1fbd5a] transition-colors"
        >
          <Icon name="whatsapp" filled className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
