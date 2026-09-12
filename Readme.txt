# Build a Rich, Premium Dry Cleaning Website for "Fabric Club"

Create a **modern, premium, highly polished, responsive website** for a dry-cleaning and laundry business named **Fabric Club**.

The website should feel like a professional, established Indian dry-cleaning brand rather than a basic local-business website.

## 1. Brand & Assets

* Business Name: **Fabric Club**
* The **Fabric Club logo is already available in the project/folder**.
* Locate and use the existing logo from the provided folder.
* **Do not create a new logo.**
* Use the existing logo consistently across:

  * Header
  * Footer
  * Mobile navigation
  * Any relevant promotional sections
* Maintain the logo's original proportions and quality.
* Build the overall color palette and visual identity around the existing logo.

## 2. Design Inspiration

Take design inspiration from:

**https://tumbledry.in/**

Use it as inspiration for:

* Overall structure
* Service presentation
* Dry-cleaning/laundry industry UX
* Strong call-to-action sections
* Service cards
* Trust-building sections
* Location/service-area presentation
* Booking/pickup flow
* Mobile responsiveness

However:

**Do NOT clone the website.**

Create an original design for Fabric Club with its own:

* Layout
* Typography
* Colors
* Components
* Copy
* Visual hierarchy
* Animations
* User experience

The final result should feel **inspired by the professionalism of Tumbledry but clearly be a separate Fabric Club website**.

---

# 3. Technology Requirements

Build the website using:

* **Next.js**
* React
* TypeScript
* Tailwind CSS
* Modern component architecture
* Fully responsive design
* SEO-friendly structure

Use reusable components wherever possible.

Suggested structure:

```text
app/
components/
public/
  images/
  logo/
  icons/
lib/
styles/
```

If the project already has an existing structure, work within it rather than unnecessarily restructuring the project.

---

# 4. Overall Website Experience

The website should communicate:

* Premium quality
* Professional garment care
* Reliability
* Convenience
* Hygiene
* Fast service
* Doorstep pickup & delivery
* Modern technology
* Trust

The user should immediately understand:

**"Fabric Club takes care of my clothes professionally, conveniently, and safely."**

Use high-quality imagery related to:

* Dry cleaning
* Premium clothing
* Washing
* Ironing
* Garment care
* Steam cleaning
* Laundry
* Professional cleaning processes
* Pickup and delivery

Avoid generic-looking stock imagery where possible.

---

# 5. Sticky Contact Buttons — VERY IMPORTANT

This is a critical requirement.

The **Phone and WhatsApp buttons must remain visible throughout the entire website while the user scrolls.**

They should be fixed/sticky to the viewport.

### Desktop

Place two floating buttons on the **bottom-right side**:

📞 Call Now
💬 WhatsApp

Example:

```text
                 ┌──────────────┐
                 │ 📞 Call Now  │
                 ├──────────────┤
                 │ 💬 WhatsApp  │
                 └──────────────┘
```

### Mobile

Make the buttons highly accessible.

Prefer a fixed bottom bar such as:

```text
┌───────────────────────┬───────────────────────┐
│      📞 CALL NOW      │      💬 WHATSAPP      │
└───────────────────────┴───────────────────────┘
```

Requirements:

* Always visible while scrolling
* High contrast
* Easy to tap
* Proper hover effects
* Subtle animation
* Do not cover important content
* Respect mobile safe-area spacing
* Use `tel:` for the phone button
* Use a WhatsApp deep link for WhatsApp
* Make the phone number and WhatsApp number configurable from one central configuration file

Do not hardcode the number in multiple components.

For example:

```ts
const CONTACT = {
  phone: "YOUR_PHONE_NUMBER",
  whatsapp: "YOUR_WHATSAPP_NUMBER",
};
```

Use placeholders if the actual numbers are not available.

---

# 6. Header / Navigation

Create a premium sticky header.

Include:

* Fabric Club logo
* Home
* About
* Services
* How It Works
* Why Fabric Club
* Pricing / Offers
* Contact
* Book a Pickup CTA

Header behavior:

* Sticky while scrolling
* Slight background/blur effect after scrolling
* Smooth transitions
* Mobile hamburger menu
* Mobile menu should be polished and easy to use

Primary CTA:

**Book a Pickup**

Secondary CTA:

**Call Now**

---

# 7. Hero Section

Create a visually impressive hero section.

Suggested messaging:

### Main heading

**"Premium Care for Every Fabric"**

or a stronger equivalent.

Supporting text:

"Professional dry cleaning, laundry and garment care with convenient doorstep pickup and delivery."

Primary CTA:

**Book a Pickup**

Secondary CTA:

**Explore Services**

Include:

* High-quality garment-care visual
* Premium layout
* Subtle animations
* Trust indicators
* Strong visual hierarchy

Possible trust indicators:

* ✓ Professional Cleaning
* ✓ Doorstep Pickup & Delivery
* ✓ Fabric-Safe Processes
* ✓ On-Time Delivery

The hero should immediately communicate the value proposition.

---

# 8. Service Categories

Create a prominent section:

## "Complete Garment Care Under One Roof"

Create attractive service cards.

Include services such as:

### Dry Cleaning

Professional cleaning for delicate and premium garments.

### Laundry

Everyday clothing cleaning with proper fabric care.

### Steam Ironing

Professional ironing for a crisp, polished finish.

### Shoe Cleaning

Cleaning and care for different types of footwear.

### Carpet Cleaning

Deep cleaning for carpets and rugs.

### Curtain Cleaning

Professional cleaning for curtains and large fabrics.

### Sofa / Upholstery Cleaning

Deep cleaning for sofas and upholstery.

### Premium Garment Care

Specialized treatment for expensive and delicate clothing.

Each card should include:

* Image/icon
* Service name
* Short description
* "Learn More" link
* Hover animation

---

# 9. Featured Services

Add a visually rich section highlighting the most important services.

Example:

**Dry Cleaning**

"Give your favourite clothes the professional care they deserve."

Show:

* Before/after concept
* Garment imagery
* Cleaning process
* Benefits
* CTA

Create similar treatment for 2–4 major services.

---

# 10. How It Works

Create a simple 4-step process.

## "Clean Clothes, Zero Hassle"

### 01 — Book

Schedule your pickup through the website or WhatsApp.

### 02 — Pickup

Our team collects your clothes from your doorstep.

### 03 — Professional Cleaning

Your garments are cleaned, treated and finished using appropriate processes.

### 04 — Delivery

Fresh, clean and neatly finished clothes are delivered back to you.

Use an attractive timeline/stepper with icons.

---

# 11. Why Choose Fabric Club

Create a strong trust section.

Heading:

**"Why Customers Choose Fabric Club"**

Include cards for:

* Professional Fabric Care
* Experienced Team
* Convenient Doorstep Service
* Quality Cleaning
* Hygienic Processing
* On-Time Delivery
* Transparent Pricing
* Customer Satisfaction

Use numbers/statistics if appropriate, but **do not invent fake statistics**.

If actual statistics are not provided, use benefit-focused statements instead.

---

# 12. Garment Care Technology / Process

Create a premium section explaining how Fabric Club handles garments.

Example stages:

**Inspection → Sorting → Cleaning → Stain Treatment → Finishing → Quality Check → Packaging → Delivery**

Make this visually engaging.

Use subtle animations as the user scrolls through the process.

---

# 13. Special Care Section

Create a section for premium/delicate garments.

Examples:

* Suits
* Sarees
* Lehengas
* Sherwanis
* Wedding Dresses
* Silk
* Wool
* Designer Wear
* Jackets
* Blazers

Heading:

**"Because Every Fabric Deserves the Right Care."**

Explain that different fabrics require different cleaning and finishing methods.

---

# 14. Offers / Promotions

Create a visually attractive offers section.

Examples:

* First Order Offer
* Combo Packages
* Seasonal Cleaning
* Wedding/Winter Collection Care
* Bulk Laundry
* Membership/Loyalty Program

Do not make up specific discounts unless placeholders are clearly identified.

Use editable data so offers can easily be changed later.

---

# 15. Pricing Section

Create a clean pricing/service table.

Example categories:

| Service | Starting Price |
| ------- | -------------: |
| Shirt   |            ₹XX |
| T-Shirt |            ₹XX |
| Trouser |            ₹XX |
| Suit    |            ₹XX |
| Saree   |            ₹XX |
| Jacket  |            ₹XX |
| Blanket |            ₹XX |

Use placeholder pricing if actual pricing isn't available.

Include:

**"Prices may vary depending on fabric, size and treatment required."**

CTA:

**Get a Quote**

Make the pricing section easy to update.

---

# 16. Booking / Pickup Section

Create a strong conversion section.

Heading:

## "Need Your Clothes Cleaned? We'll Pick Them Up."

Create a booking form with:

* Name
* Phone Number
* WhatsApp Number
* Pickup Address
* Preferred Pickup Date
* Preferred Time
* Service Required
* Additional Notes

CTA:

**Schedule Pickup**

Also provide:

**Book via WhatsApp**

The form should have proper validation and user-friendly error messages.

If backend functionality isn't available, create the complete UI with a clear integration point for future backend/API implementation.

---

# 17. WhatsApp Booking

Create WhatsApp-focused CTAs throughout the website.

Examples:

**"Have a question? Chat with us on WhatsApp."**

**"Send your pickup request on WhatsApp."**

When clicked, open WhatsApp with a pre-filled message such as:

> Hi Fabric Club, I would like to book a pickup. Please share the details.

Keep the WhatsApp number configurable.

---

# 18. Service Area / Locations

Create a section:

## "Serving Your Neighbourhood"

Display serviceable areas.

Use editable location cards.

Example:

* Bareilly
* Civil Lines
* Rajendra Nagar
* Model Town
* Izatnagar
* [Other locations]

Do not claim locations are serviced unless provided. Use placeholder locations where necessary.

If there are multiple branches, design the section so branches can be added later.

---

# 19. Testimonials

Create a premium customer testimonial section.

Use cards containing:

* Customer name
* Rating
* Review
* Service used

Example:

⭐⭐⭐⭐⭐

"Excellent service and my clothes came back looking as good as new."

Do not fabricate real customer identities or claim fake reviews as real.

If actual testimonials aren't available, clearly use sample/demo testimonials that can later be replaced.

---

# 20. FAQ Section

Create an accordion FAQ section.

Include questions such as:

### What is dry cleaning?

### How long does dry cleaning take?

### Do you provide doorstep pickup and delivery?

### How should I book a pickup?

### Do you clean delicate fabrics?

### Can you remove difficult stains?

### Do you clean wedding dresses and sarees?

### How can I contact Fabric Club?

Make FAQ content editable.

---

# 21. About Fabric Club

Create an attractive About section.

Focus on:

* Professional garment care
* Customer-first service
* Quality
* Convenience
* Fabric expertise

Avoid inventing company history, founding dates, certifications, or achievements.

If information is unavailable, use editable placeholder content.

---

# 22. CTA Banner

Near the bottom of the page, add a large conversion-focused banner:

## "Fresh Clothes. Professional Care. Delivered to Your Door."

Buttons:

**Book a Pickup**

**WhatsApp Us**

Use a premium background image or subtle visual treatment.

---

# 23. Footer

Create a detailed footer containing:

### Fabric Club

Logo + short description.

### Quick Links

* Home
* About
* Services
* Pricing
* Contact

### Services

* Dry Cleaning
* Laundry
* Ironing
* Shoe Cleaning
* Carpet Cleaning
* Curtain Cleaning

### Contact

* Phone
* WhatsApp
* Email
* Address

### Business Hours

Display editable business hours.

### Social Media

Add icons for:

* Instagram
* Facebook
* Google Business Profile
* Other relevant platforms

Only show platforms for which links are available.

Include copyright information.

---

# 24. Animations

Use animations carefully.

The website should feel premium, not gimmicky.

Use:

* Fade-in on scroll
* Slight slide-up animations
* Card hover effects
* Button hover transitions
* Image zoom on hover
* Smooth scrolling
* Header transition
* Subtle hero animation
* Number/stat animations where appropriate

Avoid excessive animations that slow down the website.

Use CSS/Tailwind and lightweight animation libraries only where genuinely useful.

---

# 25. Responsive Design

The website must work perfectly on:

* Desktop
* Laptop
* Tablet
* Mobile

Pay special attention to mobile UX.

On mobile:

* Large readable typography
* Easy-to-tap buttons
* Sticky Call/WhatsApp controls
* Hamburger navigation
* Optimized images
* No horizontal scrolling
* Proper spacing
* Fast loading

The mobile website should feel like a first-class experience, not a compressed desktop version.

---

# 26. SEO

Implement proper SEO.

Include:

* Page title
* Meta description
* Open Graph metadata
* Proper heading hierarchy
* Semantic HTML
* Alt text for images
* Local business structured data/schema where appropriate
* Service-related keywords naturally

Potential keywords:

* Dry cleaning
* Laundry service
* Dry cleaner near me
* Doorstep dry cleaning
* Laundry pickup and delivery
* Clothes cleaning
* Premium dry cleaning
* Fabric care

Do not keyword-stuff.

---

# 27. Performance

Optimize for excellent performance.

Requirements:

* Use Next.js Image optimization
* Lazy load images where appropriate
* Avoid unnecessarily large images
* Minimize JavaScript
* Avoid heavy libraries unless necessary
* Optimize fonts
* Good Core Web Vitals
* Fast mobile loading

---

# 28. Accessibility

Implement:

* Proper semantic HTML
* Keyboard navigation
* Accessible buttons
* ARIA labels where necessary
* Sufficient contrast
* Visible focus states
* Meaningful alt text
* Accessible mobile menu
* Accessible FAQ accordion

The floating Phone and WhatsApp buttons must also have accessible labels.

---

# 29. Architecture

Create reusable components such as:

```text
Header
Hero
TrustBar
Services
ServiceCard
FeaturedService
HowItWorks
WhyChooseUs
GarmentCareProcess
SpecialCare
Offers
Pricing
BookingForm
WhatsAppCTA
Locations
Testimonials
FAQ
About
CTASection
Footer
FloatingContactButtons
```

Keep content/data separate from UI wherever practical.

For example:

```ts
services.ts
locations.ts
testimonials.ts
faqs.ts
pricing.ts
contact.ts
```

This will make the website easy to maintain later.

---

# 30. Contact Configuration

Create one centralized configuration for all contact details.

Example:

```ts
export const business = {
  name: "Fabric Club",
  phone: "YOUR_PHONE_NUMBER",
  whatsapp: "YOUR_WHATSAPP_NUMBER",
  email: "YOUR_EMAIL",
  address: "YOUR_ADDRESS",
};
```

All components should consume these values rather than duplicating phone numbers.

---

# 31. Important UX Requirement

Throughout the website, continuously encourage users toward one of three actions:

### Primary

**Book a Pickup**

### Secondary

**WhatsApp Fabric Club**

### Tertiary

**Call Fabric Club**

The user should never have to scroll back to the top just to contact the business.

The **floating Phone + WhatsApp controls are mandatory on every page and throughout scrolling.**

---

# 32. Visual Quality

The final website should look like a
