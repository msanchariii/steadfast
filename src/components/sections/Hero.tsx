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
        <section className="border-cambridge-blue/20 bg-beige/20 relative flex flex-col items-center justify-center overflow-hidden border-4">
            <div className="relative z-20 mx-auto flex h-full w-full flex-col lg:flex-row">
                <div className="order-1 flex basis-1/2 flex-col items-center justify-between gap-4 lg:order-none lg:items-start">
                    <h1 className="text-7xl">
                        SteadFast
                        <br />
                        <span className="text-5xl tracking-[10px]">
                            Web Studio
                        </span>
                    </h1>
                    <p className="max-w-lg">{sectionDescriptions.hero}</p>
                    <button className="text-cambridge-blue lg:bg-cambridge-blue/90 lg:hover:bg-cambridge-blue/80 rounded-full bg-white px-4 py-3 lg:text-white">
                        Contact Now
                    </button>
                    <div className="stat-list flex flex-wrap items-center gap-4">
                        <SiTailwindcss size={24} className="" />
                        <FaReact size={24} className="" />
                        <SiNextdotjs size={24} />
                        <FaNodeJs size={24} className="" />
                        <SiExpress size={24} className="" />
                        <SiFastapi size={24} className="" />
                        <SiStrapi size={24} className="" />
                        <SiSanity size={24} className="" />
                        <DiMongodb size={24} className="" />
                        <SiPostgresql size={24} className="" />
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image
                        src={"/hero.png"}
                        alt="hero image"
                        height={700}
                        width={700}
                        className="mx-auto my-4"
                    />
                </div>
            </div>
            <div className="bg-cambridge-blue absolute -top-[25%] -right-[25%] z-10 size-[900px] rounded-full"></div>
        </section>
    );
}
