"use client";
import gsap from "gsap";
import React, { useRef } from "react";

const ContactCardInServiceSection = () => {
    const titleRef = useRef(null);
    const listRef = useRef(null);

    const onMouseEnter = () => {
        gsap.to(titleRef.current, {
            x: -200,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.out",
        });
        gsap.to(listRef.current, {
            left: "-50%",
            duration: 0.4,
            ease: "power2.out",
            listStyleType: "none",
        });
    };

    const onMouseLeave = () => {
        gsap.to(titleRef.current, {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
        });
        gsap.to(listRef.current, {
            left: 0,
            duration: 0.4,
            ease: "power2.out",
            listStyleType: "disc",
        });
    };

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative container mx-auto my-4 flex cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-black px-12 py-10 text-2xl xl:flex-row"
        >
            <a className="absolute inset-0" href="/contact"></a>
            <h3
                ref={titleRef}
                className="max-w-md font-medium text-zinc-100"
                id="contact-card-in-service-section-title"
            >
                Ready To Start ?
            </h3>

            <ul
                ref={listRef}
                className="relative w-fit list-disc font-medium text-zinc-100"
                id="contact-card-in-service-section-list"
            >
                <li className="get-in-touch">Get in Touch</li>
            </ul>
        </div>
    );
};

export default ContactCardInServiceSection;
