"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navlink = ({ label = "Home", href = "#" }) => {
    const labelRef = useRef(null);

    const onMouseEnter = () => {
        gsap.to(labelRef.current, {
            margin: "0 0.6rem",
            duration: 0.2,
        });
    };

    const onMouseLeave = () => {
        gsap.to(labelRef.current, {
            margin: "0 0.2rem",
            duration: 0.2,
        });
    };

    return (
        <Link
            href={href}
            className="nav-link w-32 text-center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            [
            <span ref={labelRef} className="nav-label">
                {label}
            </span>
            ]
        </Link>
    );
};

export default Navlink;
