import React from "react";
import ContactCardInServiceSection from "../ServiceCards";
import { homePageServices } from "@/data/services";
import { ServicesHeadline } from "@/data/SectionHeadlines";

const Services = () => {
    return (
        <section className="relative" id="services">
            <ServicesHeadline />
            <div>
                <ServiceCards
                    title={"Brand Strategy & Identity"}
                    desc={
                        "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
                    }
                />
                {homePageServices.map((service) => (
                    <ServiceCards
                        key={service.id + service.title}
                        title={service.title}
                        desc={service.description}
                    />
                ))}
                <ContactCardInServiceSection />
            </div>
        </section>
    );
};

const ServiceCards = ({ title = "Title", desc = "Desc" }) => {
    return (
        <div className="relative container mx-auto my-4 flex flex-col items-center justify-between rounded-lg bg-white px-8 py-6 xl:flex-row xl:px-12 xl:py-10">
            <h3 className="mb-4 w-full items-start text-left text-2xl font-bold tracking-tight xl:order-2 xl:mb-0 xl:max-w-fit">
                {title}
            </h3>
            <p className="w-full text-xs font-medium text-zinc-600 xl:max-w-md">
                {desc}
            </p>
        </div>
    );
};

export default Services;
