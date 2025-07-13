"use client";
// useContext
import React, { createContext, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const GsapContext = createContext<{
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}>({
    gsap,
    ScrollTrigger,
});
export const GsapProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
            {children}
        </GsapContext.Provider>
    );
};
