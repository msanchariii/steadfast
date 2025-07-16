import React from "react";
import Navlink from "./navbar/Navlink";
import { footerLinks, socialLinks } from "@/data/globals";

const Footer = () => (
    <footer className="min-h-[50dvh] rounded-t-2xl bg-black px-6 py-8 text-white md:mx-2 md:mb-2 md:rounded-2xl xl:px-12 2xl:px-16">
        <div className="flex justify-between text-xs font-medium text-zinc-200">
            <div className="flex flex-col items-start gap-6 text-zinc-400 lg:flex-row">
                {footerLinks.map((link) => (
                    <Navlink
                        key={link.id + "footerLink"}
                        label={link.label}
                        href={link.href}
                    />
                ))}
            </div>
            <div className="flex flex-col items-end gap-6 text-zinc-400 lg:flex-row">
                {socialLinks.map((social) => {
                    return (
                        <Navlink
                            key={social.id}
                            label={social.platform}
                            href={social.link}
                            // className="text-zinc-400"
                        />
                    );
                })}
            </div>
        </div>
        <div className="flex h-48 items-center justify-start lg:h-64 lg:justify-center">
            <p className="text-left text-3xl font-bold text-zinc-400 lg:text-4xl">
                Your brand deserves <br /> better.
                <span className="text-white"> Let&apos;s build it right.</span>
            </p>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="font-medium lg:order-2">
                <p className="text-zinc-400">Email</p>
                <p className="">steadfastwebstudios@gmail.com</p>
            </div>
            <div className="font-medium lg:order-3">
                <p className="text-zinc-400">Address</p>
                <p>Kolkata, India</p>
            </div>
            <div className="flex items-end justify-between lg:order-1 lg:gap-6">
                <div>
                    {/* logo */}
                    <div className="flex aspect-square h-16 gap-x-4 rounded-xl">
                        <img
                            src={"/assets/global/logo-dark.svg"}
                            // width={40}
                            // height={40}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-end lg:flex-row lg:gap-4">
                    <Navlink
                        label="Privacy Policy"
                        href="#"
                        className="text-xs text-zinc-400"
                    />
                    <Navlink
                        label="Terms of Service"
                        href="#"
                        className="text-xs text-zinc-400"
                    />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
