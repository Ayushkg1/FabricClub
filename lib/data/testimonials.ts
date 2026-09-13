export type Testimonial = {
  name: string;
  rating: number;
  review: string;
  service: string;
};

// Sample / demo testimonials — replace with real customer reviews when available.
export const testimonials: Testimonial[] = [
  {
    name: "Ankita S.",
    rating: 5,
    review: "Excellent service and my clothes came back looking as good as new. Pickup and delivery made it effortless.",
    service: "Dry Cleaning",
  },
  {
    name: "Rohit M.",
    rating: 5,
    review: "Very professional handling of my sherwani before the wedding. Finished on time and beautifully pressed.",
    service: "Premium Garment Care",
  },
  {
    name: "Priya K.",
    rating: 4,
    review: "Reliable weekly laundry pickup. Clothes always come back clean, folded and on schedule.",
    service: "Laundry",
  },
  {
    name: "Sameer T.",
    rating: 5,
    review: "Got my sofa cleaned at home — quick, tidy and the results were noticeably better than I expected.",
    service: "Sofa Cleaning",
  },
];
