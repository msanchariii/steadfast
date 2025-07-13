"use client";
import {
    ArrowBigLeft,
    ArrowDownLeft,
    ArrowLeft,
    ArrowRight,
    ArrowRightCircle,
    ArrowRightFromLine,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonialData } from "@/data/testimonial";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonialData.length - 1 : prev - 1
        );
        playPressAnimation(e.currentTarget);
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentTestimonial((prev) =>
            prev === testimonialData.length - 1 ? 0 : prev + 1
        );
        playPressAnimation(e.currentTarget);
    };

    useGSAP(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { autoAlpha: 0, x: 100 },
                { autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out" }
            );
        }
    }, [currentTestimonial]);

    useGSAP(() => {
        // button press animations
        gsap.fromTo(
            "button",
            {
                scale: 0.95,
                opacity: 0,
                y: 20,
            },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
            }
        );
    });

    const playPressAnimation = (target: HTMLButtonElement) => {
        const tl = gsap.timeline();

        tl.to(target, {
            scale: 0.8,
            duration: 0.2,
            ease: "power1.inOut",
        }).to(target, {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.4)",
        });
    };

    const { name, position, company, testimonial } =
        testimonialData[currentTestimonial];

    return (
        <section className="relative container gap-6 text-center flex justify-center items-center flex-col mx-auto my-12 p-6 h-dvh bg-gradient-to-br from-sky-50 via-white to-purple-50 rounded-lg shadow-md">
            <h2 className="sr-only">Testimonials</h2>
            <div className="size-16 bg-red-200 mx-auto rounded-full"></div>

            {/* Animated content */}
            <div className="max-w-3/5 mx-auto" ref={contentRef}>
                <p
                    className="text-2xl md:text-3xl italic"
                    id="testimonial-text"
                >
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
                <button
                    onClick={handleNext}
                    // onClick={(e) => playPressAnimation(e.currentTarget)}
                >
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
