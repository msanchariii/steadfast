import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

const FAQ = () => {
    return (
        <section className="min-h-dvh px-12 py-12 relative">
            <h1 className="text-3xl font-bold max-w-3xl mx-auto mb-4">FAQ</h1>
            <p className="text-base font-medium italic max-w-3xl mx-auto mb-4">
                Some common questions we get
            </p>

            <div className="w-full max-w-3xl mx-auto">
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
