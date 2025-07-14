"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Navlink = ({ label = "Home", href = "#", className = "" }) => {
    const labelRef = useRef(null);
    const isXLScreen = useMediaQuery({ query: "(min-width: 80rem)" });

    const onMouseEnter = () => {
        if (!isXLScreen) return; // Skip animation on smaller screens
        gsap.to(labelRef.current, {
            margin: "0 0.5rem",
            duration: 0.2,
        });
    };

    const onMouseLeave = () => {
        if (!isXLScreen) return; // Skip animation on smaller screens
        gsap.to(labelRef.current, {
            margin: "0 0.2rem",
            duration: 0.2,
        });
    };

    return (
        <Link
            href={href}
            className={`nav-link text-center ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            [
            <span ref={labelRef} className="nav-label mx-[0.2rem]">
                {label}
            </span>
            ]
        </Link>
    );
};

export default Navlink;
