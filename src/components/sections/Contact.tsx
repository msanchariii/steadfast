import { email, phone } from "@/data/globals";
import { MailIcon, MapIcon, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-12 text-zinc-200 md:py-24">
            <div className="mb-12 flex w-full flex-col text-center">
                <h1 className="title-font mb-4 text-4xl font-bold text-zinc-200 md:text-5xl">
                    Get in Touch
                </h1>
                <p className="mx-auto text-base leading-relaxed text-zinc-300 lg:w-2/3">
                    We&apos;re here to help and answer any question you might
                    have. We look forward to hearing from you.
                </p>
            </div>
            <div className="rounded-lg p-8 shadow-xl lg:p-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                            <MailIcon className="h-10 w-10" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-zinc-300">
                                Email Us
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-zinc-400">
                                Our support team is here to help.
                            </p>
                            <a
                                href={`mailto:${email}`}
                                className="font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-700"
                            >
                                {email}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                            <PhoneCall className="h-10 w-10" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-zinc-300">
                                Call Us
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-zinc-400">
                                Mon-Fri from 9am to 6pm.
                            </p>
                            <a
                                href={`tel:${phone}`}
                                className="font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-700"
                            >
                                {phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                            <MapIcon className="h-10 w-10" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-zinc-300">
                                Address
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-zinc-400">
                                Kolkata, West Bengal <br /> India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
