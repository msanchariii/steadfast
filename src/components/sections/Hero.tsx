"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import {
    SiExpress,
    SiFastapi,
    SiNextdotjs,
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
            <section className="container mx-auto flex min-h-[80dvh] w-full max-w-6xl flex-col justify-center">
                <h1
                    ref={titleRef}
                    className="text-charcoal text-7xl leading-16 font-bold tracking-tight md:text-9xl"
                >
                    SteadFast
                </h1>
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
                        <li className="stat-list">
                            <h4 className="text-3xl font-semibold text-black">
                                100%
                            </h4>
                            <h4 className="text-xs font-normal">
                                Happy Clients
                            </h4>
                        </li>
                    </ul>
                    <p
                        className="text-charcoal/70 max-w-xl text-xs font-medium tracking-wide"
                        id="hero-description"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint molestias consequuntur unde modi voluptatem
                        saepe accusantium Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </section>
            <div className="relative h-dvh w-full">
                <Image src={"/hero.webp"} alt="showcase" fill />
            </div>
            <div className="relative my-24 flex w-full items-center justify-around gap-4 px-12 text-2xl">
                {/* skills */}
                <SiTailwindcss size={48} className="text-sky-400" />
                <FaReact size={48} className="text-sky-600" />
                <SiNextdotjs size={48} />
                <FaNodeJs size={48} className="text-green-700" />
                <SiExpress size={48} className="text-green-600" />
                <SiFastapi size={48} className="text-teal-800" />
            </div>
        </>
        // <div
        //     className=" container mx-auto flex justify-center flex-col items-center text-center invisible gap-y-8"
        //     ref={containerRef}
        // >
        //     <div className="">
        //         <div
        //             className={cn(
        //                 "absolute inset-0",
        //                 "[background-size:20px_20px]",
        //                 "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        //                 "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        //             )}
        //         />
        //         <div className="pointer-events-none absolute inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        //         <div className="">
        //             <h1 className="h1 text-charcoal tracking-tight leading-16 font-bold text-5xl capitalize">
        //                 Level up your animations <br /> with the all-in
        //                 membership
        //             </h1>
        //             <p className="max-w-2xl font-semibold text-charcoal/70">
        //                 Lorem ipsum dolor sit amet consectetur, adipisicing
        //                 elit. Sint molestias consequuntur unde modi voluptatem
        //                 saepe accusantium ea quam maiores quidem!
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}
