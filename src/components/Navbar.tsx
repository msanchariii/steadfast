"use client";
import React, { useState, useRef, useEffect } from "react";
// import Navlink from "./navbar/Navlink";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navbarLinks } from "@/data/globals";
import Image from "next/image";

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
        <header className="mx-auto mt-4 flex h-16 max-w-6xl items-center justify-between">
            <Link href={"/"} className="flex items-center gap-x-4">
                <Image
                    src={"/assets/global/logo-light.svg"}
                    width={40}
                    height={40}
                    alt="SteadFast Studio Logo"
                />
                <span className="text-xl">SteadFast</span>
            </Link>
            {hasMounted && (
                <nav
                    className={`text-charcoal bg-cambridge-blue/10 px-8 py-4 font-bold ${
                        isXLScreen
                            ? "flex gap-x-12 rounded-xl xl:flex xl:flex-row xl:items-center xl:justify-around xl:gap-x-8"
                            : `absolute top-24 right-0 left-0 z-20 mx-auto max-w-6xl flex-col items-end text-2xl ${
                                  isOpen
                                      ? "flex min-h-[50dvh] justify-around"
                                      : "hidden"
                              } rounded-b-3xl bg-white p-8 text-black`
                    }`}
                >
                    {navbarLinks.map((link) => (
                        <Link
                            key={"navlink" + link.id}
                            // label={link.label}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
            <Link
                href={"/get-a-quote"}
                className="from-cambridge to-cambridge-lightest hidden rounded-lg bg-linear-to-br px-4 py-3 text-white xl:block"
            >
                Get a Quote
            </Link>
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
