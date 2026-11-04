import heroImg from "@/assets/hero.jpg";
import aboutWorkspaceImg from "@/assets/about-workspace.jpg";
import workRedchamberImg from "@/assets/work-redchamber.jpg";
import workBestcityImg from "@/assets/work-bestcity.jpg";
import workCorporateImg from "@/assets/work-corporate.jpg";
import workEcommerceImg from "@/assets/work-ecommerce.jpg";
import workMigrationImg from "@/assets/work-migration.jpg";
import workPortfolioImg from "@/assets/work-portfolio.jpg";

export const images = {
  hero: heroImg,
  aboutWorkspace: aboutWorkspaceImg,
};

export const tools = [
  "WordPress",
  "React",
  "Cloudflare",
  "Hostinger",
  "Plesk",
  "Google Workspace",
  "Tailwind CSS",
  "Framer Motion",
];

export const services = [
  {
    number: "01",
    title: "Web Design & Development",
    blurb:
      "Bespoke digital experiences crafted with precision — from elegant landing pages to complex web applications, built for performance and designed for impact.",
    items: [
      {
        title: "Basic Website Build",
        desc: "A refined one-page site for startups, portfolios and personal brands — built to impress, optimised for performance.",
      },
      {
        title: "2–3 Page Website",
        desc: "A sleek, multi-section site that captures your brand story and converts visitors into clients.",
      },
      {
        title: "Custom Website (5+ Pages)",
        desc: "Full-scale custom site tailored to your goals — scalable, secure, and made to last.",
      },
      {
        title: "Feature Add-ons",
        desc: "Forms, galleries, booking tools and interactive touches designed for seamless interaction.",
      },
      {
        title: "Mock Web Design",
        desc: "Preview your website before launch with a detailed design mockup.",
      },
    ],
  },
  {
    number: "02",
    title: "Technical Setup",
    blurb:
      "Infrastructure configured with precision: domain management, SSL certificates, DNS optimisation — handled with expertise.",
    items: [
      { title: "Domain Registration", desc: "Secure your brand name with a professional domain setup." },
      { title: "Domain Transfer", desc: "Migrate your domain safely and efficiently." },
      { title: "DNS Setup & Configuration", desc: "Smooth website and email performance through precise DNS configuration." },
      { title: "SSL Installation", desc: "Protect your visitors with industry-standard encryption." },
      { title: "Backup Setup", desc: "Safeguard your data with automated backup systems." },
      { title: "Plugin & Theme Updates", desc: "Keep your website fast and secure with regular updates." },
      { title: "Website Migration", desc: "Move your entire website seamlessly with zero downtime." },
    ],
  },
  {
    number: "03",
    title: "Hosting & Maintenance",
    blurb:
      "Reliable hosting with proactive maintenance. Your website stays secure, fast and always online — so you can focus on growth.",
    items: [
      {
        title: "Email Setup",
        desc: "Professional domain-based emails (e.g. info@yourdomain.co.za) for a trusted business identity.",
      },
      {
        title: "Monthly Maintenance",
        desc: "Ongoing updates, monitoring and minor fixes to keep your website healthy.",
      },
    ],
  },
  {
    number: "04",
    title: "Consultation & Support",
    blurb:
      "Strategic guidance and technical expertise when you need it most — from initial planning to ongoing optimisation.",
    items: [
      { title: "Initial Consultation", desc: "A free introductory session to understand your goals and challenges." },
      { title: "30-Min Consultation", desc: "A focused session for website strategy or improvement plans." },
      { title: "60-Min Consultation", desc: "In-depth technical or strategy consultation — ideal for complex projects." },
      { title: "Ad Hoc Support", desc: "Troubleshooting and quick fixes for websites, servers or email systems." },
    ],
  },
];

export const packages = [
  {
    name: "Starter",
    tagline: "Perfect for launching your digital presence",
    price: "R3,500",
    suffix: "+",
    popular: false,
    features: [
      "Single-page website or landing page",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month of support",
      "Fast turnaround (5–7 days)",
    ],
  },
  {
    name: "Business",
    tagline: "Ideal for growing businesses",
    price: "R7,200",
    suffix: "++",
    popular: true,
    features: [
      "Multi-page website (up to 5 pages)",
      "Custom design & branding",
      "Advanced SEO optimisation",
      "Email setup & integration",
      "Content management system",
      "3 months of support",
      "Performance optimisation",
      "Analytics integration",
    ],
  },
  {
    name: "Premium",
    tagline: "Complete digital solution",
    price: "R13,000",
    suffix: "++",
    popular: false,
    features: [
      "Comprehensive website (unlimited pages)",
      "Custom functionality & features",
      "E-commerce capabilities",
      "Advanced integrations",
      "Priority support (6 months)",
      "Ongoing maintenance included",
      "Security & backup systems",
      "Dedicated project manager",
      "Training & documentation",
    ],
  },
];

export const valuePacks = [
  {
    name: "Starter Website Bundle",
    price: "R4,200",
    once: "once-off",
    features: ["1-page site", "Professional email setup", "Domain + DNS + SSL", "1-month support"],
  },
  {
    name: "Business Launch Bundle",
    price: "R8,500",
    once: "once-off",
    features: [
      "Multi-page website (up to 3 pages)",
      "Domain + DNS + SSL",
      "3 business emails",
      "SEO setup",
      "1-month support",
    ],
  },
  {
    name: "Full Business Bundle",
    price: "R12,500",
    once: "once-off",
    features: [
      "Up to 5-page website",
      "Domain + DNS + SSL",
      "5 emails",
      "SEO + backups",
      "2 months support",
    ],
  },
];

export const comparison = {
  columns: ["Starter", "Business", "Premium"],
  rows: [
    { feature: "Pages", values: ["1", "Up to 5", "Unlimited"] },
    { feature: "SEO", values: ["Basic", "Advanced", "Advanced + Strategy"] },
    { feature: "Support", values: ["1 month", "3 months", "6 months"] },
    { feature: "Emails", values: ["0", "3", "5+"] },
    { feature: "CMS", values: ["✓", "✓", "✓"] },
    { feature: "Speed optimisation", values: ["—", "✓", "✓"] },
    { feature: "Priority support", values: ["—", "—", "✓"] },
  ],
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  overview: string;
  challenge: string;
  approach: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "redchamber",
    title: "Red Chamber",
    category: "WordPress Development",
    summary:
      "Elegant WordPress website for Johannesburg's premier Chinese dining destination, featuring signature recipes, reservations, and an immersive dining experience showcase.",
    tags: ["WordPress", "Custom Theme", "Responsive", "Reservation System"],
    image: workRedchamberImg,
    liveUrl: "https://redchamber.codelessstudio.co.za/",
    overview:
      "Red Chamber needed a web presence as refined as its dining room — a place where the menu, the atmosphere and the brand story work together to turn curious visitors into booked tables.",
    challenge:
      "Johannesburg's fine-dining audience researches restaurants on their phones, often late at night. The site had to feel luxurious on a small screen, load quickly despite rich imagery, and make reservations effortless.",
    approach:
      "We built a custom WordPress theme with an immersive dark visual language, editorial food photography, and a clear reservation path on every page. Menus are structured for readability, and the booking system is reachable within two taps from anywhere on the site.",
    result:
      "A fast, atmospheric website that mirrors the restaurant's interior design and gives guests a seamless path from first impression to confirmed reservation.",
  },
  {
    slug: "bestcity",
    title: "Best City Experiences",
    category: "WordPress Development",
    summary:
      "Premium tour booking website showcasing Cape Town's hidden gems, with private guided tours, a concierge-level booking system, and an immersive travel showcase.",
    tags: ["WordPress", "Custom Development", "Booking System", "Responsive"],
    image: workBestcityImg,
    liveUrl: "https://bestcity.codelessstudio.co.za/",
    overview:
      "Best City Experiences sells something you can't photograph easily — the feeling of discovering Cape Town with a guide who knows every corner. The website had to carry that promise.",
    challenge:
      "Tour operators live and die by bookings. The site needed to inspire with rich destination imagery while instantly answering the practical questions: what's included, when, and how do I secure a seat?",
    approach:
      "A custom build pairs full-bleed experience photography with a structured catalogue of tours, clear inclusions, and a concierge-style booking flow. Trust signals — reviews, guide profiles, response times — are woven through the journey.",
    result:
      "A booking-ready showcase that converts wanderlust into enquiries, with an experience catalogue the owner can grow without developer help.",
  },
  {
    slug: "corporate-landing",
    title: "Corporate Excellence",
    category: "Web Development",
    summary:
      "A sophisticated landing page for a finance brand, featuring smooth animations and a conversion-optimised design that builds trust from the first scroll.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: workCorporateImg,
    overview:
      "A leading financial services company needed a landing page that communicates stability and modernity in equal measure — no clutter, no clichés.",
    challenge:
      "Finance audiences are sceptical by default. Every design decision had to earn trust: typography, restraint, speed, and a single unmistakable call to action.",
    approach:
      "Built with React, Tailwind CSS and Framer Motion, the page uses disciplined sections, measured motion, and progressive disclosure — detail is available, but never demands attention before the primary message lands.",
    result:
      "A landing page that reads as quietly confident, loads almost instantly, and channels visitors towards a single conversion path.",
  },
  {
    slug: "ecommerce-boutique",
    title: "Boutique E-commerce",
    category: "Full-Stack Solution",
    summary:
      "Complete online store with a custom checkout flow, inventory management, and seamless payment integration.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: workEcommerceImg,
    overview:
      "A boutique brand outgrew its social-media storefront and needed a real shop: curated catalogue, effortless checkout, and stock the owner can trust.",
    challenge:
      "Small-batch retail has specific pains — limited stock, quick sell-outs, and the need for checkout that never loses a customer mid-purchase.",
    approach:
      "We designed a full-stack store with a tailored product experience, real-time inventory awareness, and a streamlined checkout with integrated payments. The admin side is simple enough to run from a phone.",
    result:
      "An online store that feels boutique rather than templated, with payments and stock management that just work.",
  },
  {
    slug: "tech-startup-migration",
    title: "Tech Startup Migration",
    category: "Technical Setup",
    summary:
      "Zero-downtime migration from legacy infrastructure to modern cloud-based hosting with enhanced security.",
    tags: ["DNS", "Cloud Hosting", "CI/CD", "Security"],
    image: workMigrationImg,
    overview:
      "A growing startup was paying for slow, fragile infrastructure and couldn't afford a single minute of customer-facing downtime.",
    challenge:
      "Emails, DNS records, staging environments and production traffic all had to move in the right order — with no data loss and no surprise outages.",
    approach:
      "We mapped every dependency, staged the new environment in parallel, cut over DNS with carefully chosen TTLs, and validated each service before retiring the old stack. Backups and monitoring were in place before launch.",
    result:
      "A faster, more secure platform migrated over a weekend — customers never noticed, and the team gained a deployment pipeline.",
  },
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    category: "Web Development",
    summary:
      "Minimalist portfolio showcasing photography and design work with immersive full-screen galleries.",
    tags: ["React", "GSAP", "WebGL"],
    image: workPortfolioImg,
    overview:
      "A multidisciplinary creative needed a portfolio where the work is the interface — nothing competing with the images themselves.",
    challenge:
      "Showcasing high-resolution visual work online means balancing immersion against performance. The gallery had to feel cinematic without punishing visitors on mobile data.",
    approach:
      "A minimal React build with GSAP-driven transitions and WebGL accents, adaptive image delivery, and navigation that stays out of the way until it's needed.",
    result:
      "A portfolio that feels like walking through a private gallery — fast, immersive, and unmistakably personal.",
  },
];

export const testimonials = [
  {
    quote:
      "Codeless Studio transformed our digital presence — smooth process and exceptional quality.",
    name: "Sarah Mitchell",
    role: "Founder, Tech Startup",
  },
  {
    quote: "Reliable, detail-oriented, and always on time — couldn't ask for a better partner.",
    name: "David Chen",
    role: "Marketing Director",
  },
];

export const stats = [
  { value: "50+", label: "Projects completed" },
  { value: "99.9%", label: "Uptime across clients" },
  { value: "24/7", label: "Support available" },
];

export const values = [
  {
    title: "Precision",
    desc: "Every system configured right the first time.",
  },
  { title: "Security", desc: "Enterprise-grade setups for every client." },
  { title: "Consistency", desc: "Long-term support and maintenance options." },
  { title: "Transparency", desc: "Clear pricing, no surprises." },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We begin by understanding your vision, goals and challenges — mapping out requirements and defining success metrics.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Elegant, user-centred designs aligned with your brand, with mockups and prototypes to visualise the final product.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Your solution is built with clean code, optimised performance and scalability as priorities.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Meticulous deployment with comprehensive testing — everything works flawlessly before your audience arrives.",
  },
  {
    step: "05",
    title: "Support",
    desc: "The partnership continues beyond launch: maintenance, updates and support that keep your presence thriving.",
  },
];

export const contact = {
  email: "info@codelessstudio.com",
  whatsappUrl: "https://wa.me/1234567890",
  location: "South Africa",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const projectTypes = [
  "New website",
  "Website redesign",
  "E-commerce store",
  "Technical setup or migration",
  "Hosting & maintenance",
  "Something else",
];

export const featureOptions = [
  "Booking system",
  "Online payments",
  "Blog or CMS",
  "Business email setup",
  "Image gallery or portfolio",
  "Analytics & tracking",
  "SEO improvements",
  "Multilingual content",
];

export const budgetOptions = ["Under R5,000", "R5,000 – R10,000", "R10,000 – R20,000", "R20,000+"];
export const timelineOptions = ["As soon as possible", "Within a month", "1–3 months", "Flexible"];
