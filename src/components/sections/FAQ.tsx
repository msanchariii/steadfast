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
            y: -350,
            // duration: 0.5,
        });
    }, []);

    return (
        <section className="relative min-h-dvh px-12 py-12" id="faq-section">
            <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-bold">FAQ</h1>
            <p className="mx-auto mb-4 max-w-3xl text-base font-medium italic">
                Some common questions we get
            </p>

            <div className="mx-auto w-full max-w-3xl">
                {faqs.map((faq) => (
                    <Accordion key={faq.id} type="single" collapsible>
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
