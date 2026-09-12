export type Offer = {
  title: string;
  description: string;
  tag?: string;
};

// Placeholder offers — replace with real, current promotions.
export const offers: Offer[] = [
  {
    title: "First Order Offer",
    description: "A special introductory offer for your first Fabric Club pickup.",
    tag: "New Customers",
  },
  {
    title: "Combo Packages",
    description: "Bundle dry cleaning, laundry and ironing together for better value.",
    tag: "Popular",
  },
  {
    title: "Seasonal Cleaning",
    description: "Care packages for winter woollens and seasonal wardrobe changeovers.",
  },
  {
    title: "Wedding Collection Care",
    description: "Specialised handling for wedding wear — sarees, lehengas and sherwanis.",
    tag: "Occasion Wear",
  },
  {
    title: "Bulk Laundry",
    description: "Better rates for larger, regular laundry loads.",
  },
  {
    title: "Membership / Loyalty Program",
    description: "Ongoing benefits for regular Fabric Club customers.",
    tag: "Coming Soon",
  },
];
