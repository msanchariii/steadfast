"use client";

import { cn } from "@/lib/utils";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import * as motion from "motion/react-client";

import {
    SiExpress,
    SiFastapi,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return;

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible";

            const { words } = splitText(
                containerRef.current.querySelector("h1")!
            );

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            );
        });
    }, []);

    return (
        <>
            <div className="relative flex min-h-[90dvh] w-full items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent text-center space-y-8">
                    <h1 className="h1 text-charcoal tracking-tight leading-16 font-bold text-5xl capitalize">
                        Level up your animations <br /> with the all-in
                        membership
                    </h1>
                    <p className="max-w-2xl font-semibold text-charcoal/70">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sint molestias consequuntur unde modi voluptatem
                        saepe accusantium ea quam maiores quidem!
                    </p>
                </div>
            </div>
            <div className="relative h-dvh w-full">
                <Image src={"/hero.webp"} alt="showcase" fill />
            </div>
            <motion.div className="relative w-full my-24 px-12 flex justify-around items-center gap-4 text-2xl">
                {/* skills */}
                <SiTailwindcss size={48} className="text-sky-400" />
                <FaReact size={48} className="text-sky-600" />
                <SiNextdotjs size={48} />
                <FaNodeJs size={48} className="text-green-700" />
                <SiExpress size={48} className="text-green-600" />
                <SiFastapi size={48} className="text-teal-800" />
            </motion.div>
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
