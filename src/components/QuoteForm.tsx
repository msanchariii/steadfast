"use client";
import React, { useState } from "react";
import {
    TDesignType,
    TCurrency,
    TAddon,
    TBackendTech,
    TFeature,
} from "@/data/pricing";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { calculateQuote, unitPricing } from "@/data/pricing";

/*
Sample Response:
{
  "pages": "5-10",
  "design": "Custom UI/UX",
  "backend": "Node.js",
  "addons": "Payment Gateway, User Authentication",
  "features": "Product Catalog, Shopping Cart, Admin Dashboard",
  "currency": "USD",
  "budget": "10000-20000",
  "estimatedCost": "15000",
  "date": "2025-07-17"
}

*/

const CurrencySign = ({ currency }: { currency: TCurrency }) => {
    return <span>{currency === "INR" ? "₹" : "$"}</span>;
};

const QuoteForm = () => {
    const [pages, setPages] = useState(3);
    const [design, setDesign] = useState("template");
    const [backend, setBackend] = useState("none");
    const [addons, setAddons] = useState<string[]>([]);
    const [features, setFeatures] = useState<string[]>([]);
    const [currency, setCurrency] = useState("INR");

    const handleAddonToggle = (addon: string) => {
        setAddons((prev) =>
            prev.includes(addon)
                ? prev.filter((item) => item !== addon)
                : [...prev, addon],
        );
    };

    const estimatedCost = calculateQuote({
        pages: pages,
        design: design as TDesignType,
        backend: backend as TBackendTech,
        features: features as TFeature[],
        selectedAddons: addons as TAddon[],
        currency: currency as TCurrency,
    });

    function handleFeatureToggle(featureKey: string): void {
        setFeatures((prev) =>
            prev.includes(featureKey)
                ? prev.filter((item) => item !== featureKey)
                : [...prev, featureKey],
        );
    }

    return (
        <section className="mx-auto grid w-full grid-cols-1 gap-8 capitalize lg:grid-cols-2">
            <Label className="col-span-full">
                Currency
                <Select onValueChange={setCurrency} defaultValue={currency}>
                    <SelectTrigger>
                        <SelectValue placeholder="Choose Currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="INR">INR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                </Select>
            </Label>
            {/* Number of Pages */}
            <Label className="hover:bg-accent/50 grid grid-cols-1 items-start gap-3 rounded-lg border p-3">
                <p className="text-sm leading-none font-medium">
                    Number of Pages
                </p>
                <Input
                    type="number"
                    value={pages}
                    min={1}
                    onChange={(e) => setPages(parseInt(e.target.value))}
                />

                <p className="text-muted-foreground text-sm">
                    For every additional page more than {unitPricing.pages.base}
                    , we charge{" "}
                    {unitPricing.pages.pricePerPage[
                        currency as TCurrency
                    ].toLocaleString()}
                </p>
            </Label>
            {/* Design Type */}
            <Label className="hover:bg-accent/50 grid grid-cols-1 items-start gap-3 rounded-lg border p-3">
                <p className="text-sm leading-none font-medium">Design</p>
                <Select onValueChange={setDesign} defaultValue={design}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose Design" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="custom">Custom Design</SelectItem>
                        <SelectItem value="figma">Figma Files</SelectItem>
                        <SelectItem value="template">
                            Pre-built Template
                        </SelectItem>
                    </SelectContent>
                </Select>

                <p className="text-muted-foreground text-sm">
                    For custom designs, we charge{" "}
                    <CurrencySign currency={currency as TCurrency} />
                    {unitPricing.design.custom[currency as TCurrency]}.
                </p>
            </Label>
            {/* Backend Type and Currency */}
            <Label className="hover:bg-accent/50 col-span-full grid grid-cols-1 items-start gap-3 rounded-lg border p-3">
                <p className="text-sm leading-none font-medium">Backend Type</p>
                <Select onValueChange={setBackend}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose Backend" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(unitPricing.backendTech).map((tech) => (
                            <SelectItem
                                key={tech}
                                value={tech}
                                className="capitalize"
                            >
                                {tech.replace(/([A-Z])/g, " $1").trim()}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <p className="text-muted-foreground text-sm">
                    For {backend} backend, we charge{" "}
                    <CurrencySign currency={currency as TCurrency} />
                    {unitPricing.backendTech[backend as TBackendTech][
                        currency as TCurrency
                    ].toLocaleString()}
                    .
                </p>
            </Label>

            <div className="space-y-3">
                <p className="font-medium">Add-ons</p>
                {Object.keys(unitPricing.addons).map((addonKey) => (
                    <Label
                        key={addonKey}
                        className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3"
                    >
                        <Checkbox
                            checked={addons.includes(addonKey)}
                            onCheckedChange={() => handleAddonToggle(addonKey)}
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                {addonKey.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="text-muted-foreground text-sm">
                                <CurrencySign
                                    currency={currency as TCurrency}
                                />
                                {unitPricing.addons[addonKey as TAddon][
                                    currency as TCurrency
                                ].toLocaleString()}{" "}
                            </p>
                        </div>
                    </Label>
                ))}
            </div>

            <div className="space-y-3">
                <p className="font-medium">Features</p>
                {Object.keys(unitPricing.features).map((featureKey) => (
                    <Label
                        key={featureKey}
                        className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3"
                    >
                        <Checkbox
                            checked={features.includes(featureKey)}
                            onCheckedChange={() =>
                                handleFeatureToggle(featureKey)
                            }
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                {featureKey.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="text-muted-foreground text-sm">
                                <CurrencySign
                                    currency={currency as TCurrency}
                                />
                                {unitPricing.features[featureKey as TFeature][
                                    currency as TCurrency
                                ].toLocaleString()}{" "}
                            </p>
                        </div>
                    </Label>
                ))}
            </div>

            <div className="text-lg font-semibold">
                Estimated Cost: {unitPricing.currency[currency as TCurrency]}
                {estimatedCost.toLocaleString()}
            </div>
        </section>
    );
};

export default QuoteForm;
