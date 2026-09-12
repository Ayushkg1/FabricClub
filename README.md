# Fabric Club

Premium dry cleaning & garment care website built with Next.js, React, TypeScript and Tailwind CSS.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing Content

Content is kept separate from UI so it's easy to update without touching components:

| What to change | File |
| --- | --- |
| Phone, WhatsApp, email, address, business hours, social links | `lib/contact.ts` |
| Services (cards + featured services) | `lib/data/services.ts` |
| How It Works steps & garment care process | `lib/data/howItWorks.ts` |
| Why Choose Us points | `lib/data/whyChooseUs.ts` |
| Special care fabrics/garments | `lib/data/specialCare.ts` |
| Offers / promotions | `lib/data/offers.ts` |
| Pricing table | `lib/data/pricing.ts` |
| Service area locations | `lib/data/locations.ts` |
| Testimonials | `lib/data/testimonials.ts` |
| FAQs | `lib/data/faqs.ts` |

**Important:** `lib/contact.ts` currently has placeholder phone/WhatsApp numbers and email. Update `business.phone`, `business.whatsapp`, `business.email` and `business.address` with real details before launch — every component (header, floating buttons, footer, booking form) reads from this single file.

## Booking Form

`components/BookingForm.tsx` has full client-side validation and a clearly marked integration point (see the comment inside `handleSubmit`) for wiring up a real booking API once one exists.

## Tech

Next.js (App Router) · React · TypeScript · Tailwind CSS v4
