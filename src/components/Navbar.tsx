"use client";
import React, { useState, useRef, useEffect } from "react";
import Navlink from "./navbar/Navlink";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const isXLScreen = useMediaQuery({ query: "(min-width: 80rem)" });

    const menuRef = useRef(null);
    const closeRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    useGSAP(() => {
        const ref = isOpen ? closeRef.current : menuRef.current;
        if (ref) {
            gsap.fromTo(
                ref,
                { rotate: isOpen ? -90 : 90, scale: 0.6, opacity: 0 },
                {
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                },
            );
        }
    }, [isOpen]);

    return (
        <header className="mx-auto my-4 flex h-16 max-w-6xl items-center justify-between">
            <Link href={"/"} className="flex items-center gap-x-2">
                <img
                    src={"/assets/global/logo-light.svg"}
                    width={48}
                    height={48}
                />
                <img src="/assets/global/logo.svg" width={150} />
            </Link>
            {hasMounted && (
                <nav
                    className={`text-charcoal font-bold ${
                        isXLScreen
                            ? "flex gap-x-8 xl:flex xl:flex-row xl:items-center xl:gap-x-8"
                            : `absolute top-24 right-0 left-0 z-20 mx-auto max-w-6xl flex-col items-end text-2xl ${
                                  isOpen
                                      ? "flex min-h-[50dvh] justify-around"
                                      : "hidden"
                              } rounded-b-3xl bg-white p-8 text-black`
                    }`}
                >
                    <Navlink label="Our Works" href="/works" />
                    <Navlink label="Pricing" href="/pricing" />
                    <Navlink label="About" href="/about" />
                </nav>
            )}
            <AnimatedButton label1="Contact Us" label2="Get A Quote" />
            <button className="block xl:hidden" onClick={handleToggle}>
                <span
                    ref={menuRef}
                    className={`${isOpen ? "hidden" : "block"}`}
                >
                    <AlignJustify />
                </span>
                <span
                    ref={closeRef}
                    className={`${isOpen ? "block" : "hidden"}`}
                >
                    <X />
                </span>
            </button>
        </header>
    );
};

export default Navbar;
