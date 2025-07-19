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
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                            <svg
                                className="h-10 w-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-gray-900">
                                Email Us
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-gray-600">
                                Our support team is here to help.
                            </p>
                            <a
                                href="mailto:contact@example.com"
                                className="font-medium text-indigo-500 transition-colors duration-300 hover:text-indigo-700"
                            >
                                contact@example.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                            <svg
                                className="h-10 w-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-gray-900">
                                Call Us
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-gray-600">
                                Mon-Fri from 8am to 5pm.
                            </p>
                            <a
                                href="tel:+15551234567"
                                className="font-medium text-indigo-500 transition-colors duration-300 hover:text-indigo-700"
                            >
                                +1 (555) 123-4567
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                            <svg
                                className="h-10 w-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="title-font mb-3 text-xl font-semibold text-gray-900">
                                Visit Us
                            </h2>
                            <p className="mb-3 text-base leading-relaxed text-gray-600">
                                123 Main Street, Suite 400
                                <br />
                                Anytown, USA 12345
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+Anytown+USA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-indigo-500 transition-colors duration-300 hover:text-indigo-700"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
