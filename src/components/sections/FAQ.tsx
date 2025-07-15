"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FAQ = () => {
    useGSAP(() => {
        gsap.to("#faq-section", {
            scrollTrigger: {
                trigger: "#faq-section",
                start: "top bottom",
                end: "bottom center",
                scrub: 1,
                // markers: true,
            },
            y: -50,
            // duration: 0.5,
        });
    }, []);

    return (
        <section className="relative" id="faq-section">
            <h2 className="mb-6 font-semibold">[FAQ]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just services - we deliver growth, clarity, and real impact.
            </h1>

            <div className="mx-auto w-full">
                {faqs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        type="single"
                        collapsible
                        className="mb-4 rounded-lg bg-white p-4"
                    >
                        <AccordionItem value={`item-${faq.id}`}>
                            <AccordionTrigger className="text-lg font-semibold">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-medium text-zinc-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
