import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="">Navbar</h1>
            <ul className="hidden xl:flex gap-x-8 2xl:gap-x-8 text-charcoal font-bold">
                <Link href="/">Home</Link>
                <Link href="/works">Our Works</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/about">About</Link>
            </ul>
            <button className="hidden xl:block">Chat with Us</button>
            <button className="block xl:hidden">Hamburger</button>
        </header>
    );
};

export default Navbar;
