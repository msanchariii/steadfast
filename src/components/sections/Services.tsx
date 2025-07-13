import React from "react";
import ServiceCards from "../ServiceCards";
// import { HoverEffect } from "../ui/card-hover-effect";
// import { services } from "@/data/services";

const Services = () => {
    return (
        <section className="min-h-dvh relative container mx-auto my-12 px-12">
            <h2 className="sr-only">Services</h2>
            <h2 className="font-semibold mb-6">[Services]</h2>
            <h1 className="tracking-tight leading-16 text-6xl font-bold">Not just services - we deliver <br/> growth, clarity, and real impact.</h1>
            <ServiceCards title={"Brand Strategy & Identity"} desc={"Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."}/>
            {/* <p className="text-center text-4xl font-bold mb-6 capitalize tracking-tight leading-16">
                lorem ipsum
                <span className="text-rose-500 "> Services</span> <br />
                We provide
            </p> */}
            {/* <div className="px-12">
                <HoverEffect items={services} />
            </div> */}
        </section>
    );
};

export default Services;
