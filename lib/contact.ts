// Central contact configuration.
// Update these values once — every component reads from here.
export const business = {
  name: "Fabric Club",
  legalName: "The Fabric Club Dry Cleaning",
  tagline: "Premium Care for Every Fabric",
  phone: "+91 93549 02020",
  phoneDisplay: "+91 93549 02020",
  whatsapp: "919354902020", // digits only, country code first, no + or spaces
  supportPhone: "+91 99770 06070",
  supportPhoneDisplay: "+91 99770 06070",
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

export function telHref(phone: string = business.phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message?: string) {
  const defaultMessage = `Hi ${business.name}, I would like to book a pickup. Please share the details.`;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}
