"use client";
import { sectionDescriptions } from "@/data/globals";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import {
    SiExpress,
    SiFastapi,
    SiNextdotjs,
    SiPostgresql,
    SiSanity,
    SiStrapi,
    SiTailwindcss,
} from "react-icons/si";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const splitTitle = SplitText.create(titleRef.current, {
            type: "chars",
        });
        const splitDescription = SplitText.create("#hero-description", {
            type: "lines",
        });
        const tl = gsap.timeline();
        tl.from(splitTitle.chars, {
            duration: 0.7,
            delay: 0.2,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            stagger: {
                amount: 0.2,
                from: "start",
            },
        });
        tl.from(
            ".stat-list",
            {
                duration: 0.7,
                opacity: 0,
                y: 50,
                ease: "power2.out",
                stagger: {
                    amount: 0.2,
                    from: "start",
                },
            },
            "<0.2",
        );
        tl.from(
            splitDescription.lines,
            {
                delay: 0.2,
                duration: 1,
                opacity: 0,
                ease: "power2.out",
                stagger: {
                    amount: 0.6,
                    from: "start",
                },
            },
            "<0.2",
        );
    }, []);

    return (
        <>
            <section className="flex min-h-dvh flex-col justify-center">
                <Image
                    src={"/assets/global/logo-with-tagline.svg"}
                    height={300}
                    width={700}
                    alt="SteadFast Logo"
                    className="mt-16"
                />
                <div className="mt-16 flex flex-col gap-8 py-8 text-center md:flex-row md:justify-between">
                    <ul className="flex justify-between gap-8 text-left xl:gap-12">
                        <li className="stat-list">
                            <h4 className="text-3xl font-semibold text-black">
                                99+
                            </h4>
                            <h4 className="text-xs font-normal">
                                Completed Projects
                            </h4>
                        </li>
                        <li className="stat-list">
                            <h4 className="text-3xl font-semibold text-black">
                                2+
                            </h4>
                            <h4 className="text-xs font-normal">
                                Years of Experience
                            </h4>
                        </li>
                    </ul>
                    <p
                        className="text-charcoal/70 max-w-xl text-left text-xs font-medium tracking-wide md:text-center"
                        id="hero-description"
                    >
                        {sectionDescriptions.hero}
                    </p>
                </div>
                <div className="mt-24 hidden w-full px-4 text-zinc-700 lg:flex lg:items-center lg:justify-around lg:gap-4 lg:opacity-90">
                    {/* skills */}
                    <SiTailwindcss size={48} className="" />
                    <FaReact size={48} className="" />
                    <SiNextdotjs size={48} />
                    <FaNodeJs size={48} className="" />
                    <SiExpress size={48} className="" />
                    <SiFastapi size={48} className="" />
                    <SiStrapi size={48} className="" />
                    <SiSanity size={48} className="" />
                    <DiMongodb size={48} className="" />
                    <SiPostgresql size={48} className="" />
                </div>
            </section>
        </>
    );
}
