"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

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
    {
        id: "contact",
        title: "Contact Us",
        desc: "Ready to start? Get in touch with us to discuss your project and how we can help you achieve your goals.",
    },
];
const Workflow = () => {
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#workflow-section",
                start: "top top",
                end: "+=1000",
                scrub: 1,
                pin: true,
                // markers: true,
            },
        });

        cardsRef.current.forEach((card, index) => {
            tl.to(
                card,
                {
                    top: index * -85 + "px",
                    autoAlpha: 1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                index * 0.3, // ⏱ Delay per card scroll-wise
            );
        });
    }, []);

    return (
        <section className="relative container mx-auto my-12 min-h-dvh px-12">
            {/* <h2 className="sr-only">Workflow</h2> */}
            <h2 className="mb-6 font-semibold">[Workflow]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just services - we deliver growth, clarity, and real impact.
            </h1>
            <div
                className="relative container mx-auto my-4 flex flex-col items-center justify-between rounded-lg px-12 py-10 xl:flex-row"
                id="workflow-section"
            >
                <div className="h-full basis-1/2 p-2">
                    <p className="w-4/5 text-4xl font-bold">
                        No guesswork, just a{" "}
                        <span className="text-charcoal/50">clear path</span>{" "}
                        from
                        <span className="text-charcoal/50"> ideas</span>→{" "}
                        <span className="text-charcoal/50">results.</span>
                    </p>
                </div>
                <div className="relative right-0 left-0 basis-1/2 space-y-2 p-2">
                    {cards.map((card, i: number) => (
                        <WorkflowCard
                            key={i}
                            ref={(el: any) => (cardsRef.current[i] = el)}
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

type WorkflowCardProps = {
    id?: string;
    title?: string;
    desc?: string;
    ref?: React.Ref<HTMLDivElement>;
};

const WorkflowCard = ({ id = "01", title = "Title", desc = "Desc", ref }: WorkflowCardProps) => {

    return (
        <div
            ref={ref}
            className={`workflow-card relative container mx-auto grid grid-cols-3 grid-rows-2 p-8 ${id === "contact"
                ? "items-center justify-center bg-black"
                : "bg-white"
                } h-44 rounded-lg border border-zinc-100`}
        >
            {id === "contact" ? (
                <a
                    href="/brooooo"
                    className="col-span-full row-span-2 text-center text-3xl font-semibold text-white"
                >
                    {title}
                </a>
            ) : (
                <>
                    <p className="text-2xl font-bold text-zinc-600">{id}</p>
                    <h3 className="col-span-2 mb-4 w-full max-w-lg text-left text-2xl font-bold tracking-tight">
                        {title}
                    </h3>
                    {/* <p className="text-transparent">This is workflow card</p> */}
                    <p className="col-span-full mt-2 h-8 max-w-md text-xs font-medium text-zinc-600">
                        {desc}
                    </p>
                </>
            )}
        </div>
    );
}

export default Workflow;
