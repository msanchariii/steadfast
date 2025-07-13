import React from "react";
import ContactCardInServiceSection from "../ServiceCards";

const Services = () => {
    return (
        <section className="min-h-dvh relative container mx-auto my-12 px-12">
            <h2 className="sr-only">Services</h2>
            <h2 className="font-semibold mb-6">[Services]</h2>
            <h1 className="tracking-tight leading-12 xl:leading-16 text-wrap text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-4xl mb-16">
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
            <div className="flex flex-col xl:flex-row justify-between items-center relative container mx-auto my-4 py-10 px-12 bg-white rounded-lg ">
                <h3 className="mb-4 w-full xl:max-w-fit xl:mb-0 text-left tracking-tight max-w-lg font-bold text-2xl xl:order-2">
                    {title}
                </h3>
                <p className="font-medium text-xs max-w-md text-zinc-600">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Services;
