import Link from "next/link";
import React from "react";
import Navlink from "./navbar/Navlink";

const Navbar = () => {
    return (
        <header
            className="flex justify-between items-center max-w-6xl mx-auto
        "
        >
            <h1 className="">Navbar</h1>
            <ul className="hidden xl:flex gap-x-8 2xl:gap-x-8 text-charcoal font-bold">
                <Navlink label="Our Works" href="/works" />
                <Navlink label="Pricing" href="/pricing" />
                <Navlink label="About" href="/about" />
            </ul>
            <button className="hidden xl:block">Chat with Us</button>
            <button className="block xl:hidden">Hamburger</button>
        </header>
    );
};

export default Navbar;
