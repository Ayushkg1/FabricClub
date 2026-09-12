"use client";

import { FormEvent, useState } from "react";
import { business, whatsappHref } from "@/lib/contact";
import { services } from "@/lib/data/services";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

type FormState = {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  date: string;
  time: string;
  service: string;
  notes: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  whatsapp: "",
  address: "",
  date: "",
  time: "",
  service: "",
  notes: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+]?[\d\s-]{8,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.whatsapp.trim() && !/^[+]?[\d\s-]{8,15}$/.test(values.whatsapp.trim())) {
    errors.whatsapp = "Please enter a valid WhatsApp number.";
  }

  if (!values.address.trim()) errors.address = "Please enter your pickup address.";
  if (!values.date) errors.date = "Please choose a preferred pickup date.";
  if (!values.time) errors.time = "Please choose a preferred time.";
  if (!values.service) errors.service = "Please select the service you need.";

  return errors;
}

export default function BookingForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Integration point: send `values` to your booking API / CRM here.
    // e.g. await fetch("/api/bookings", { method: "POST", body: JSON.stringify(values) })
    setStatus("success");
    setValues(INITIAL_STATE);
  }

  function bookViaWhatsapp() {
    const serviceLabel = services.find((s) => s.slug === values.service)?.name;
    const lines = [
      `Hi ${business.name}, I would like to book a pickup.`,
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      values.address && `Address: ${values.address}`,
      values.date && `Preferred Date: ${values.date}`,
      values.time && `Preferred Time: ${values.time}`,
      serviceLabel && `Service: ${serviceLabel}`,
      values.notes && `Notes: ${values.notes}`,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40 ${
      errors[field] ? "border-red-400" : "border-ink/12 focus:border-gold"
    }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-gold/25 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl text-ink">Pickup Request Received</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Thank you! We&apos;ve noted your request. Our team will confirm your pickup
          shortly by phone or WhatsApp.
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          Book Another Pickup
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" error={errors.name}>
          <input
            className={inputClass("name")}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone}>
          <input
            className={inputClass("phone")}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 90000 00000"
            inputMode="tel"
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="WhatsApp Number" hint="Optional, if different from phone" error={errors.whatsapp}>
          <input
            className={inputClass("whatsapp")}
            value={values.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="+91 90000 00000"
            inputMode="tel"
            aria-invalid={!!errors.whatsapp}
          />
        </Field>

        <Field label="Service Required" error={errors.service}>
          <select
            className={inputClass("service")}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Pickup Date" error={errors.date}>
          <input
            type="date"
            className={inputClass("date")}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={!!errors.date}
          />
        </Field>

        <Field label="Preferred Time" error={errors.time}>
          <input
            type="time"
            className={inputClass("time")}
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
            aria-invalid={!!errors.time}
          />
        </Field>

        <Field label="Pickup Address" className="sm:col-span-2" error={errors.address}>
          <textarea
            className={`${inputClass("address")} min-h-[88px] resize-none`}
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="House / flat, street, locality, city"
            aria-invalid={!!errors.address}
          />
        </Field>

        <Field label="Additional Notes" hint="Optional" className="sm:col-span-2">
          <textarea
            className={`${inputClass("notes")} min-h-[72px] resize-none`}
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything we should know — stains, delicate fabric, special instructions..."
          />
        </Field>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" size="lg" className="flex-1">
          Schedule Pickup
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={bookViaWhatsapp}
          className="flex-1 !bg-[#25D366] !text-ink hover:!bg-[#1fbd5a]"
          icon={<Icon name="whatsapp" filled className="h-4 w-4" />}
        >
          Book via WhatsApp
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-sm font-medium text-ink flex items-baseline gap-1.5">
        {label}
        {hint && <span className="text-xs font-normal text-ink-soft/70">{hint}</span>}
      </span>
      {children}
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
