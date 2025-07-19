"use client";

import { sectionDescriptions } from "@/data/globals";
import { AboutUsHeadline } from "@/data/SectionHeadlines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
// import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
    // const isXLScreen = useMediaQuery({ query: "(min-width: 80rem)" });
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about-us-section",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        tl.from("#team-image", {
            scale: 0.9,
            opacity: 0,
            autoAlpha: 0,
            duration: 1.2,
            ease: "power2.out",
        });
        tl.from("#about-us-section h4", {
            y: 50,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.out",
        });
    });
    return (
        <section className="bg-black text-zinc-200" id="about-us-section">
            <AboutUsHeadline />
            <div
                className="relative mb-16 aspect-video w-full rounded-2xl bg-zinc-200"
                id="team-image"
            >
                <Image
                    src={"/assets/team.avif"}
                    alt="About Us"
                    fill
                    className="rounded-2xl object-cover grayscale-100"
                />
            </div>
            <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-8">
                <div className="xl:self-end">
                    <h4 className="mb-2 text-4xl font-semibold">100%</h4>
                    <h4 className="text-base font-medium">Happy Clients</h4>
                </div>
                <p className="w-full text-sm font-medium xl:max-w-md">
                    {sectionDescriptions.about}
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
