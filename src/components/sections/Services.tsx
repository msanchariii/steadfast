import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { services } from "@/data/services";

const Services = () => {
    return (
        <section className="min-h-dvh relative container mx-auto my-12 p-6">
            <h2 className="sr-only">Services</h2>
            <p className="text-center text-4xl font-bold mb-6 capitalize tracking-tight leading-16">
                lorem ipsum
                <span className="text-rose-500 "> Services</span> <br />
                We provide
            </p>
            <div className="px-12">
                <HoverEffect items={services} />
            </div>
        </section>
    );
};

export default Services;
