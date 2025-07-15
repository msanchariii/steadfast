export const pricingPlans = [
    {
        id: 1,
        service: "Landing Page",
        pricingRupees: 166000, // approx ₹166,000
        priceDollars: 1999,
    },
    {
        id: 2,
        service: "Full Website",
        pricingRupees: 416000, // approx ₹416,000
        priceDollars: 4999,
    },
    {
        id: 3,
        service: "Branding Package",
        pricingRupees: 250000, // approx ₹250,000
        priceDollars: 2999,
    },
    {
        id: 4,
        service: "Packaging Design",
        pricingRupees: 125000, // approx ₹125,000
        priceDollars: 1499,
    },
];

export const whatsIncluded = [
    "Clear project timeline & defined deliverables",
    "Transparent pricing—no surprise fees",
    "Focus on a single core objective (e.g. scale, optimize)",
    "Expert-led execution with regular updates",
    "Collaborative checkpoints & feedback loops",
];

// pricingConfig.ts

export const unitPricing = {
    currency: {
        INR: "₹",
        USD: "$",
    },
    pages: {
        base: 3,
        // Most freelancers charge ~$100–200/page for static sites (or $1000–3000 total for basic sites)
        pricePerPage: {
            INR: 1000, // ~$36
            USD: 15,
        },
    },
    uiUxDesign: {
        // UI/UX design alone often goes $30–100/hr; for a project ~= 5–10 hrs/page
        INR: 2500, // ~$72
        USD: 40,
    },
    contactForm: {
        // Setup with validation typically $100–200 fixed
        INR: 300, // ~$10
        USD: 5,
    },
    animations: {
        // Basic animations or micro-interactions ~$200–500
        INR: 2000, // ~$48
        USD: 25,
    },
    seoSetup: {
        // Basic SEO including metadata, sitemap ~$100–300
        INR: 300, // ~$18
        USD: 5,
    },
    deployment: {
        // Hosting, SSL, deployment ~2–4 hrs
        INR: 3000, // ~$36
        USD: 40,
        note: "We will transfer the ownership to the client after completing the project .",
    },
    domainSetup: {
        INR: 0, // ~$10
        USD: 0,
        note: "We will only charge the price for buying the domain.",
    },
    cmsIntegration: {
        // Handled in 5–10 hrs depending CMS
        INR: 10000, // ~$120
        USD: 150,
    },
    backend: {
        basicAPI: {
            // CRUD API endpoints ~$200–500
            INR: 8000, // ~$96
            USD: 120,
        },
        authSystem: {
            INR: 6000, // ~$72
            USD: 100,
        },
        dbIntegration: {
            INR: 6000, // ~$72
            USD: 100,
        },
        fullStack: {
            // End‑to‑end backend + DB + API
            INR: 24000, // ~$288
            USD: 360,
        },
    },
    ongoingMaintenance: {
        // Freelancers often charge $200–500/mo for updates/support
        monthly: {
            INR: 16000, // ~$192
            USD: 240,
        },
        yearlyDiscount: {
            // ~2 months free if paid annually
            INR: 160000, // ~$1,920
            USD: 2400,
        },
    },
};

