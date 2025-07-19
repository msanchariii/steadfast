"use client";
import React from "react";
import ContactCardInServiceSection from "../ServiceCards";
import { homePageServices } from "@/data/services";
import { ServicesHeadline } from "@/data/SectionHeadlines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
    return (
        <section className="relative" id="services">
            <ServicesHeadline />
            <div id="services-cards-container">
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
    const cardsRef = React.useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#services-cards-container",
                start: "top 80%",
                end: "bottom 10%",
                scrub: 1,
                toggleActions: "play none none reverse",
                // markers: true,
            },
        });
        tl.from(cardsRef.current, {
            y: 120,

            duration: 1.2,
            ease: "power2.out",
            stagger: {
                amount: 0.3,
            },
        });
    }, []);
    return (
        <div
            ref={cardsRef}
            className="service-card-animation relative container mx-auto my-4 flex flex-col items-center justify-between rounded-lg bg-white px-8 py-6 xl:flex-row xl:px-12 xl:py-10"
        >
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
