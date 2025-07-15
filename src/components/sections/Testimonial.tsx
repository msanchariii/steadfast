"use client";
import { testimonialData, TestimonialData } from "@/data/testimonial";
import React from "react";

const Testimonial = () => {
    return (
        <section className="">
            <h2 className="mb-6 font-semibold">[Testimonials]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just services - we deliver growth, clarity, and real impact.
            </h1>
            <div className="mt-24 grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 lg:gap-16 xl:mt-32 xl:px-12">
                <TestimonialCard
                    testimonial={testimonialData[0]}
                    className="self-end"
                />
                <TestimonialCard testimonial={testimonialData[1]} />
                <TestimonialCard
                    testimonial={testimonialData[2]}
                    className="self-start"
                />
                <TestimonialCard testimonial={testimonialData[3]} />
            </div>
        </section>
    );
};

const TestimonialCard = ({
    testimonial,
    className = "",
}: {
    testimonial: TestimonialData;
    className?: string;
}) => {
    return (
        <div
            className={`before:border-b-lavender-dark ring-lavender relative h-fit w-full rounded-tr-2xl rounded-b-2xl bg-zinc-100 px-6 py-6 text-black ring-1 before:absolute before:top-[-24px] before:left-0 before:h-0 before:w-0 before:border-r-[20px] before:border-b-[20px] before:border-r-transparent before:content-[''] ${className}`}
        >
            <div className="flex h-full w-full flex-col gap-4">
                <div className="text-lavender-dark font-semibold">
                    {testimonial.name + ", " + testimonial.position}
                </div>
                <p className="font-bold italic">{testimonial.company}</p>
                <p className="text-sm italic">{testimonial.testimonial}</p>
                {testimonial.via && (
                    <p className="text-lavender-dark/90 text-xs font-medium">
                        via{" "}
                        <span className="font-semibold">{testimonial.via}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Testimonial;
