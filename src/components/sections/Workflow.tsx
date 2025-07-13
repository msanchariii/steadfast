"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const cards = [
    {
        id: "01",
        title: "Discovery & Research",
        desc: "We start with a deep dive into your brand, understanding your goals, audience, and market landscape to inform our strategy.",
    },
    {
        id: "02",
        title: "Strategy & Planning",
        desc: "Crafting a tailored strategy that aligns with your vision, ensuring every step is purposeful and impactful.",
    },
    {
        id: "03",
        title: "Execution & Delivery",
        desc: "We bring the plan to life with precision and creativity, ensuring timely delivery and measurable results.",
    },
    {
        id: "04",
        title: "Feedback & Iteration",
        desc: "Gathering insights and feedback to refine our approach, ensuring continuous improvement and alignment with your goals.",
    },
];
const Workflow = () => {
    const cardsRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#workflow-section",
                start: "top top",
                end: "+=1000", // adjust as needed
                scrub: true,
                pin: true,
                markers: true,
            },
        });

        cardsRef.current.forEach((card, index) => {
            tl.to(
                card,
                {
                    top: index * -85 + "px", // how much to stack upward
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    stagger: {
                        amount: 0.2, // stagger time
                        from: "start", // start from the first card
                    },
                },
                "<"
            );
        });
    }, []);

    return (
        <section className="min-h-dvh relative container mx-auto my-12 px-12">
            {/* <h2 className="sr-only">Workflow</h2> */}
            <h2 className="font-semibold mb-6">[Workflow]</h2>
            <h1 className="tracking-tight leading-12 xl:leading-16 text-wrap text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-4xl mb-16">
                Not just services - we deliver growth, clarity, and real impact.
            </h1>
            <div
                className="flex flex-col xl:flex-row justify-between items-center relative container mx-auto my-4 py-10 px-12 rounded-lg"
                id="workflow-section"
            >
                <div className="basis-1/2">s</div>
                <div className="basis-1/2 relative space-y-2 left-0 right-0">
                    {cards.map((card, i: number) => (
                        <WorkflowCard
                            key={i}
                            // index={i + 1}
                            ref={(el) => (cardsRef.current[i] = el)}
                            title={card.title}
                            desc={card.desc}
                            id={card.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const WorkflowCard = ({ id = "01", title = "Title", desc = "Desc", ref }) => {
    return (
        <div
            ref={ref}
            className="workflow-card grid grid-cols-3 relative container mx-auto p-8 bg-white h-44 rounded-lg border border-zinc-100"
        >
            <p className="font-bold text-2xl text-zinc-600">{id}</p>
            <h3 className="mb-4 w-full col-span-2 text-left tracking-tight max-w-lg font-bold text-2xl">
                {title}
            </h3>
            {/* <p className="text-transparent">This is workflow card</p> */}
            <p className="font-medium text-xs max-w-md text-zinc-600 col-span-full mt-2 bg-red-50 h-8">
                {desc}
            </p>
        </div>
    );
};

const WorkflowContactCard = ({ ref }) => {
    return (
        <div
            ref={ref}
            className="workflow-card grid grid-cols-3 relative container mx-auto p-8 bg-black text-white h-44 rounded-lg border border-zinc-100"
        >
            Contact Us
        </div>
    );
};

export default Workflow;
