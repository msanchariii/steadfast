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
        pricePerPage: {
            INR: 1500,
            USD: 24,
        },
    },
    uiUxDesign: {
        INR: 1000,
        USD: 36,
    },
    contactForm: {
        INR: 1000,
        USD: 12,
    },
    animations: {
        INR: 2000,
        USD: 24,
    },
    seoSetup: {
        INR: 500,
        USD: 18,
    },
    deployment: {
        INR: 1000,
        USD: 12,
    },
    domainSetup: {
        INR: 500,
        USD: 6,
    },
    cmsIntegration: {
        INR: 2500,
        USD: 30,
    },
    backend: {
        basicAPI: {
            INR: 4000,
            USD: 48,
        },
        authSystem: {
            INR: 3000,
            USD: 36,
        },
        dbIntegration: {
            INR: 3000,
            USD: 36,
        },
        fullStack: {
            INR: 9000,
            USD: 108,
        },
    },
    ongoingMaintenance: {
        monthly: {
            INR: 2000,
            USD: 24,
        },
        yearlyDiscount: {
            INR: 20000,
            USD: 240,
        },
    },
};
