import React from "react";
import ContactCardInServiceSection from "../ServiceCards";

const Services = () => {
    return (
        <section className="relative container mx-auto my-12 min-h-dvh px-12">
            <h2 className="sr-only">Services</h2>
            <h2 className="mb-6 font-semibold">[Services]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just services - we deliver growth, clarity, and real impact.
            </h1>
            <div>
                <ServiceCards
                    title={"Brand Strategy & Identity"}
                    desc={
                        "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
                    }
                />
                <ServiceCards
                    title={"Brand Strategy & Identity"}
                    desc={
                        "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
                    }
                />
                <ServiceCards
                    title={"Brand Strategy & Identity"}
                    desc={
                        "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
                    }
                />
                <ServiceCards
                    title={"Brand Strategy & Identity"}
                    desc={
                        "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
                    }
                />
                <ContactCardInServiceSection />
            </div>
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

const ServiceCards = ({ title = "Title", desc = "Desc" }) => {
    return (
        <div>
            <div className="relative container mx-auto my-4 flex flex-col items-center justify-between rounded-lg bg-white px-12 py-10 xl:flex-row">
                <h3 className="mb-4 w-full max-w-lg text-left text-2xl font-bold tracking-tight xl:order-2 xl:mb-0 xl:max-w-fit">
                    {title}
                </h3>
                <p className="max-w-md text-xs font-medium text-zinc-600">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Services;
