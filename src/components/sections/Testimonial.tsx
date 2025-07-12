"use client";
import {
    ArrowBigLeft,
    ArrowDownLeft,
    ArrowLeft,
    ArrowRight,
    ArrowRightCircle,
    ArrowRightFromLine,
} from "lucide-react";
import React, { useState } from "react";
const testimonialData = [
    {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        company: "Tech Solutions",
        testimonial:
            "This is the best service I have ever used. Highly recommend to everyone! The team is very professional and responsive. I am extremely satisfied with the results.",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        company: "Innovatech",
        testimonial:
            "Amazing experience! The quality of work exceeded my expectations. The team was very attentive to details and delivered on time.",
    },
    {
        id: 3,
        name: "Alice Johnson",
        position: "UX Designer",
        company: "Creative Minds",
        testimonial:
            "I loved working with this team! They understood my vision perfectly and brought it to life. The communication was smooth and the results were fantastic.",
    },
];
const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonialData.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonialData.length - 1 ? 0 : prev + 1
        );
    };

    const { name, position, company, testimonial } =
        testimonialData[currentTestimonial];

    return (
        <section
            className="relative container gap-6 text-center flex justify-center items-center flex-col mx-auto my-12 p-6 h-dvh bg-linear-to-br from-sky-50 via-white to-purple-50 rounded-lg shadow-md"
            // style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}
        >
            {/* <div className="absolute bg-red-200 size-12 "></div> */}
            <h2 className="sr-only">Testimonials</h2>
            <div className="size-16 bg-red-200 mx-auto rounded-full"></div>
            <div className="max-w-3/5 mx-auto">
                <p className="text-2xl md:text-3xl italic">
                    <span>"</span>
                    {testimonial}
                    <span>"</span>
                </p>
                <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
                    {name}
                </div>
                <div style={{ color: "#555" }}>
                    {position} @ {company}
                </div>
            </div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-x-6">
                <button onClick={handlePrev}>
                    <ArrowLeft
                        className="bg-black rounded-full text-white p-1 transform transition duration-200 ease-in-out hover:scale-110 hover:bg-gray-800"
                        size={32}
                    />
                </button>
                <button onClick={handleNext} className="cursor-pointer">
                    <ArrowRight
                        className="bg-black rounded-full text-white p-1 transform transition duration-200 ease-in-out hover:scale-110 hover:bg-gray-800"
                        size={32}
                    />
                </button>
            </div>
        </section>
    );
};

export default Testimonial;
