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
        });
    };

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="overflow-hidden relative flex flex-col text-2xl xl:flex-row justify-between bg-black items-center container mx-auto my-4 py-10 px-12 rounded-lg cursor-pointer"
        >
            <h3
                ref={titleRef}
                className="font-medium max-w-md text-zinc-100"
                id="contact-card-in-service-section-title"
            >
                Ready To Start ?
            </h3>

            <ul
                ref={listRef}
                className="relative list-disc font-medium text-zinc-100 w-fit"
                id="contact-card-in-service-section-list"
            >
                <li className="get-in-touch">Get in Touch</li>
            </ul>
        </div>
    );
};

export default ContactCardInServiceSection;
