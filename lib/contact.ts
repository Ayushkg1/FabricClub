// Central contact configuration.
// Update these values once — every component reads from here.
export const business = {
  name: "Fabric Club",
  legalName: "The Fabric Club Dry Cleaning",
  tagline: "Premium Care for Every Fabric",
  phone: "+91 90000 00000",
  phoneDisplay: "+91 90000 00000",
  whatsapp: "919000000000", // digits only, country code first, no + or spaces
  email: "care@fabricclub.in",
  address: "Civil Lines, Bareilly, Uttar Pradesh, India",
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "9:00 AM – 6:00 PM" },
  ],
  social: {
    instagram: "",
    facebook: "",
    googleBusiness: "",
  },
};

export const CONTACT = {
  phone: business.phone,
  whatsapp: business.whatsapp,
};

export function telHref() {
  return `tel:${business.phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message?: string) {
  const defaultMessage = `Hi ${business.name}, I would like to book a pickup. Please share the details.`;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}
