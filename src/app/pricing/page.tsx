import Pricing from "@/components/sections/Pricing";
import { sectionDescriptions } from "@/data/globals";
import React from "react";

const PricingPage = () => {
    return (
        <section>
            <div className="mx-auto mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end xl:mb-24">
                <h2 className="text-5xl font-bold sm:text-7xl md:text-9xl">
                    Pricing
                </h2>
                <p className="max-w-md text-xs md:py-2">
                    {sectionDescriptions.pricing}
                </p>
            </div>
            <Pricing />
        </section>
    );
};

export default PricingPage;
