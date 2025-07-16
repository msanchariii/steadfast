export const pricingPlans = [
    {
        id: 4,
        service: "Figma to Code",
        pricingRupees: 3500, // approx ₹125,000
        priceDollars: 1499,
    },
    {
        id: 1,
        service: "Landing Page",
        pricingRupees: 5000, // approx ₹166,000
        priceDollars: 1999,
    },
    {
        id: 2,
        service: "Full Website",
        pricingRupees: 8000, // approx ₹416,000
        priceDollars: 4999,
    },
    {
        id: 3,
        service: "CMS Integration",
        pricingRupees: 10000, // approx ₹250,000
        priceDollars: 2999,
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
            INR: 1000,
            USD: 15,
        },
    },
    design: {
        custom: {
            INR: 2500,
            USD: 40,
        },
        figma: {
            INR: 0,
            USD: 15,
        },
        template: {
            INR: 0,
            USD: 0,
        },
    },
    backendTech: {
        none: { INR: 0, USD: 0 },
        express: { INR: 5000, USD: 100 },
        nestjs: { INR: 7000, USD: 120 },
        nextjs: { INR: 5000, USD: 110 },
        cms: { INR: 5000, USD: 150 },
    },
    features: {
        auth: { INR: 3000, USD: 100 },
        dbIntegration: { INR: 2000, USD: 100 },
        docker: { INR: 2000, USD: 60 },
    },
    addons: {
        seo: { INR: 300, USD: 5 },
        chatbot: { INR: 2000, USD: 25 },
        animations: { INR: 2000, USD: 20 },
        dns: { INR: 0, USD: 0 },
        deployment: { INR: 2000, USD: 30 },
    },
};

export type TCurrency = "INR" | "USD";
export type TDesignType = "custom" | "figma" | "template";
export type TBackendTech = keyof typeof unitPricing.backendTech;
export type TFeature = keyof typeof unitPricing.features;
export type TAddon = keyof typeof unitPricing.addons;
// type TFeature = keyof typeof unitPricing.features;

export function calculateQuote({
    pages,
    design,
    backend,
    selectedAddons,
    currency,
    features,
}: {
    pages: number;
    design: TDesignType;
    backend: TBackendTech;
    selectedAddons: TAddon[];
    currency: TCurrency;
    features: TFeature[]; // 💡 Added this!
}): number {
    let total = 0;

    // 📄 Extra Pages
    const basePages = unitPricing.pages.base;
    const extraPages = Math.max(pages - basePages, 0);
    total += extraPages * unitPricing.pages.pricePerPage[currency];

    // 🎨 Design
    total += unitPricing.design[design][currency];

    // 🛠️ Backend
    total += unitPricing.backendTech[backend][currency];

    // ➕ Add-ons
    selectedAddons.forEach((addon) => {
        const addonPrice =
            unitPricing.addons[addon as keyof typeof unitPricing.addons][
                currency
            ];
        total += addonPrice;
    });

    // 🌟 Features
    features.forEach((feature) => {
        const featurePrice =
            unitPricing.features[feature as keyof typeof unitPricing.features][
                currency
            ];
        total += featurePrice;
    });

    // 💰 Return total quote
    return total;
}
