import { sectionDescriptions } from "@/data/globals";
import { AboutUsHeadline } from "@/data/SectionHeadlines";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-black text-zinc-200">
            <AboutUsHeadline />
            <div className="relative mb-16 aspect-video w-full rounded-2xl bg-zinc-200">
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
