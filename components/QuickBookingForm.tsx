"use client";

import { FormEvent, useState } from "react";
import { business, whatsappHref } from "@/lib/contact";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

type QuickFormState = {
  name: string;
  phone: string;
  address: string;
};

const INITIAL_STATE: QuickFormState = { name: "", phone: "", address: "" };

type QuickFormErrors = Partial<Record<keyof QuickFormState, string>>;

function validate(values: QuickFormState): QuickFormErrors {
  const errors: QuickFormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+]?[\d\s-]{8,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.address.trim()) errors.address = "Please enter your pickup address.";

  return errors;
}

export default function QuickBookingForm() {
  const [values, setValues] = useState<QuickFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<QuickFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function update<K extends keyof QuickFormState>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      `Hi ${business.name}, I'd like to request a free pickup.`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Address: ${values.address}`,
    ];
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus("success");
    setValues(INITIAL_STATE);
  }

  const inputClass = (field: keyof QuickFormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40 ${
      errors[field] ? "border-red-400" : "border-ink/12 focus:border-gold"
    }`;

  return (
    <div className="relative w-full rounded-3xl border border-gold/30 bg-white shadow-[0_30px_60px_-24px_rgba(93,24,57,0.28)] overflow-hidden">
      <div className="flex items-center gap-2 bg-gold px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-ink">
        <Icon name="sparkle" filled className="h-4 w-4 shrink-0" />
        Flat 20% Off Your First Pickup — Free Doorstep Service
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-3 p-7 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
            <Icon name="check" className="h-6 w-6" />
          </span>
          <h3 className="font-display text-xl text-ink">Request Sent!</h3>
          <p className="max-w-xs text-sm text-ink-soft">
            We&apos;ve opened WhatsApp with your details — hit send and our team
            will confirm your pickup shortly.
          </p>
          <Button variant="ghost" onClick={() => setStatus("idle")}>
            Request Another Pickup
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-3.5 p-5 sm:p-6"
        >
          <p className="text-sm font-semibold text-ink">
            Get a Free Pickup — In Under a Minute
          </p>

          <div className="flex flex-col gap-1.5">
            <input
              className={inputClass("name")}
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-xs font-medium text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              className={inputClass("phone")}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 90000 00000"
              inputMode="tel"
              aria-label="Phone number"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <span className="text-xs font-medium text-red-500">{errors.phone}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              className={inputClass("address")}
              value={values.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Pickup address"
              aria-label="Pickup address"
              aria-invalid={!!errors.address}
            />
            {errors.address && (
              <span className="text-xs font-medium text-red-500">{errors.address}</span>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-1 w-full"
            icon={<Icon name="whatsapp" filled className="h-4 w-4" />}
          >
            Schedule Free Pickup
          </Button>

          <p className="text-center text-[11px] text-ink-soft/70">
            We&apos;ll send your details to us on WhatsApp to confirm your slot.
          </p>
        </form>
      )}
    </div>
  );
}
