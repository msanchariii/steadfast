"use client";
import gsap from "gsap";
import React from "react";

const AnimatedButton = ({
    label1 = "Label 1",
    label2 = "Label 2",
}: {
    label1: string;
    label2: string;
}) => {
    const onMouseEnterGetAQuote = () => {
        gsap.to("#get-quote", {
            y: -50,
            ease: "ease.inOut",
            duration: 0.16,
        });
    };
    const onMouseLeaveGetAQuote = () => {
        gsap.to("#get-quote", {
            y: 0,
            ease: "ease.inOut",
            duration: 0.16,
        });
    };
    return (
        <button
            onMouseEnter={onMouseEnterGetAQuote}
            onMouseLeave={onMouseLeaveGetAQuote}
            className="flex h-9 items-center justify-center gap-2 overflow-y-hidden rounded-md bg-black px-3 py-2 text-center text-white hover:bg-zinc-800 md:order-1"
        >
            <div
                id="get-quote"
                className="flex h-20 flex-col space-y-5.5 self-start"
            >
                <span>{label1}</span>
                <span>{label2}</span>
            </div>
        </button>
    );
};

export default AnimatedButton;
