import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { business } from "@/lib/contact";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.fabricclub.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Premium Dry Cleaning & Laundry with Doorstep Pickup`,
    template: `%s | ${business.name}`,
  },
  description:
    "Fabric Club offers premium dry cleaning, laundry, steam ironing and garment care with convenient doorstep pickup and delivery. Fabric-safe processes, on-time delivery, trusted care.",
  keywords: [
    "dry cleaning",
    "laundry service",
    "dry cleaner near me",
    "doorstep dry cleaning",
    "laundry pickup and delivery",
    "clothes cleaning",
    "premium dry cleaning",
    "fabric care",
  ],
  openGraph: {
    title: `${business.name} — Premium Care for Every Fabric`,
    description:
      "Professional dry cleaning, laundry and garment care with convenient doorstep pickup and delivery.",
    url: siteUrl,
    siteName: business.name,
    images: ["/logo/newlogo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${business.name} — Premium Care for Every Fabric`,
    description:
      "Professional dry cleaning, laundry and garment care with convenient doorstep pickup and delivery.",
    images: ["/logo/newlogo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo/fabric_club_logo_no_text.svg",
    apple: "/logo/fabric_club_logo_no_text.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: `${siteUrl}/logo/newlogo.png`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.address,
  },
  priceRange: "₹₹",
  openingHours: business.hours.map((h) => `${h.day} ${h.time}`),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
