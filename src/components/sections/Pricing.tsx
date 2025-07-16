"use client";

import { pricingPlans, whatsIncluded } from "@/data/pricing";
import gsap from "gsap";
import { Check, CircleSmall } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => {
    const onMouseEnterGetAQuote = () => {
        gsap.to("#get-quote", {
            y: -50,
            ease: "ease.inOut",
            duration: 0.16,
        });
    };
    const onMouseLeaveGetAQuote = () => {
        gsap.to("#get-quote", {
            y: 0,
            ease: "ease.inOut",
            duration: 0.16,
        });
    };

    return (
        <div className="rounded-3xl bg-white p-8">
            <div className="space-y-6">
                <h3 className="mb-3 text-xl font-semibold">Per Project</h3>
                <p className="text-zinc-600">
                    Perfect for brands that need a full-service launch, a
                    one-off redesign, or a focused creative sprint.
                </p>
                <h2 className="mb-1 text-3xl font-bold">From $1,499</h2>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <div className="mt-8 w-full space-y-4 lg:w-1/2">
                    <h4 className="mb-8 w-fit rounded-full bg-zinc-200 px-4 py-2 font-medium text-zinc-700">
                        What&apos;s Included
                    </h4>

                    <ul className="space-y-3">
                        {whatsIncluded.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-lg text-zinc-600"
                            >
                                <Check className="h-6 w-6 text-zinc-800" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 w-full space-y-4 lg:w-1/2">
                    <h4 className="mb-8 w-fit rounded-full bg-zinc-200 px-4 py-2 font-medium text-zinc-700">
                        Popular Services
                    </h4>

                    <ul className="list-disc space-y-3">
                        {pricingPlans.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-row items-center justify-between gap-2 text-xl text-zinc-700"
                            >
                                <span className="flex items-center gap-2">
                                    <CircleSmall
                                        fill="black"
                                        stroke="white"
                                        size={16}
                                    />
                                    {item.service}
                                </span>
                                <span className="font-semibold text-zinc-500">
                                    from ₹{item.pricingRupees}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 text-lg md:flex-row md:items-center md:justify-between">
                <p className="py-2 text-zinc-600 md:order-2 md:w-fit">
                    We&apos;ll tailor the quote to your timeline, goals, and
                    budget.
                </p>
                <Link
                    href={"/contact"}
                    onMouseEnter={onMouseEnterGetAQuote}
                    onMouseLeave={onMouseLeaveGetAQuote}
                    className="flex h-16 w-full items-center justify-center gap-2 overflow-y-hidden rounded-full bg-black py-4 text-center text-white md:order-1 md:max-w-xs"
                >
                    <CircleSmall fill="white" stroke="white" size={16} />
                    <div
                        id="get-quote"
                        className="flex h-22 flex-col space-y-5.5 self-start"
                    >
                        <span>Get a Custom Quote</span>
                        <span>Get a Custom Quote</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;
