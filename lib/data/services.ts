export type Service = {
  slug: string;
  name: string;
  description: string;
  icon: string; // key into <ServiceIcon />
};

export const services: Service[] = [
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    description: "Professional cleaning for delicate and premium garments using fabric-safe processes.",
    icon: "hanger",
  },
  {
    slug: "laundry",
    name: "Laundry",
    description: "Everyday clothing cleaned and cared for with the right wash, every time.",
    icon: "washer",
  },
  {
    slug: "steam-ironing",
    name: "Steam Ironing",
    description: "Professional pressing for a crisp, polished, ready-to-wear finish.",
    icon: "iron",
  },
  {
    slug: "shoe-cleaning",
    name: "Shoe Cleaning",
    description: "Careful cleaning and conditioning for leather, canvas and suede footwear.",
    icon: "shoe",
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    description: "Deep cleaning that lifts dust and stains while protecting fibres and colour.",
    icon: "carpet",
  },
  {
    slug: "curtain-cleaning",
    name: "Curtain Cleaning",
    description: "Specialised care for curtains and large fabrics, collected and returned home-ready.",
    icon: "curtain",
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa Cleaning",
    description: "Deep upholstery cleaning that refreshes sofas without harming delicate covers.",
    icon: "sofa",
  },
  {
    slug: "leather-products",
    name: "Leather Products",
    description: "Specialised cleaning and conditioning for leather jackets, bags and accessories.",
    icon: "sparkle",
  },
  {
    slug: "premium-laundry",
    name: "Premium Laundry",
    description: "Elevated laundry care with extra attention to detail for your finest everyday wear.",
    icon: "washer",
  },
  {
    slug: "premium-garment-care",
    name: "Premium Garment Care",
    description: "Specialised treatment for expensive, delicate and occasion wear.",
    icon: "sparkle",
  },
];

export type FeaturedService = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  benefits: string[];
  image: string;
};

export const featuredServices: FeaturedService[] = [
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    image: "/images/DryClean.png",
    headline: "Give your favourite clothes the professional care they deserve.",
    description:
      "From formal suits to occasion wear, our dry cleaning process is built around fabric safety — the right solvent, the right temperature and a finish that looks tailored, not just clean.",
    benefits: [
      "Fabric-safe solvents for delicate materials",
      "Stain treatment before cleaning",
      "Pressed, finished and packaged with care",
    ],
  },
  {
    slug: "laundry",
    name: "Laundry",
    image: "/images/Laundry.png",
    headline: "Everyday wear, cleaned the professional way.",
    description:
      "Shirts, casuals and daily essentials are sorted, washed and finished with attention to fabric type — so colours, fit and texture are protected wash after wash.",
    benefits: [
      "Sorted by fabric and colour",
      "Gentle, appropriate detergents",
      "Neatly folded or hung finishing",
    ],
  },
  {
    slug: "steam-ironing",
    name: "Steam Ironing",
    image: "/images/SteamIron.png",
    headline: "A crisp, professional finish without the effort.",
    description:
      "Our steam ironing service brings a tailored, wrinkle-free finish to shirts, trousers and formal wear — ready to wear the moment they arrive.",
    benefits: [
      "Even, controlled steam pressing",
      "Sharp collars and creases",
      "Fast turnaround",
    ],
  },
  {
    slug: "premium-garment-care",
    name: "Premium Garment Care",
    image: "/images/GarmentCare.png",
    headline: "Because your finest pieces deserve specialised attention.",
    description:
      "Sarees, sherwanis, suits and designer wear are inspected and treated individually, with the finishing methods each fabric actually needs.",
    benefits: [
      "Individual inspection and handling",
      "Fabric-specific treatment",
      "Careful packaging for delicate wear",
    ],
  },
];
