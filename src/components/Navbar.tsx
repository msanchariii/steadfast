import React from "react";
import Navlink from "./navbar/Navlink";

const Navbar = () => {
    return (
        <header className="mx-auto flex max-w-6xl items-center justify-between">
            <h1 className="">Navbar</h1>
            <ul className="text-charcoal hidden gap-x-8 font-bold xl:flex 2xl:gap-x-8">
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
