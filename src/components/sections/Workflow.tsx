"use client";
import { WorkflowHeadline } from "@/data/SectionHeadlines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
// import { ScrollTrigger } from "gsap/all";
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
    const isXLScreen = useMediaQuery({ query: "(min-width: 80rem)" });

    useGSAP(() => {
        if (!isXLScreen) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#workflow-section",
                start: "top top",
                end: "+=1000",
                scrub: 1,
                pin: true,
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
        <section className="relative min-h-dvh">
            <WorkflowHeadline />
            <div
                className={
                    "relative container mx-auto mt-16 flex flex-col items-start justify-between rounded-lg pt-10 xl:flex-row"
                }
                id="workflow-section"
            >
                <div className="max-h-dvh xl:basis-1/2">
                    <p className="w-4/5 text-4xl font-bold">
                        No guesswork, just a{" "}
                        <span className="text-lavender-dark">clear path</span>{" "}
                        from
                        <span className="text-lavender-dark"> ideas</span>→{" "}
                        <span className="text-lavender-dark">results.</span>
                    </p>
                </div>
                <div
                    className="mt-12 w-full space-y-2 xl:relative xl:right-0 xl:left-0 xl:mt-0 xl:h-dvh xl:basis-1/2"
                    id="workflow-cards"
                >
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

const WorkflowCard = ({
    id = "01",
    title = "Title",
    desc = "Desc",
    ref,
}: WorkflowCardProps) => {
    return (
        <div
            ref={ref}
            className={`workflow-card relative container mx-auto grid w-full grid-cols-2 grid-rows-2 p-8 xl:grid-cols-3 ${
                id === "contact"
                    ? "items-center justify-center bg-black"
                    : "bg-white"
            } h-44 rounded-lg border border-zinc-100`}
        >
            {id === "contact" ? (
                <a
                    href="/contact"
                    className="col-span-full row-span-2 text-center text-3xl font-semibold text-white"
                >
                    {title}
                </a>
            ) : (
                <>
                    <p className="text-2xl font-bold text-zinc-600">{id}</p>
                    <h3 className="col-span-2 mb-4 w-full text-left text-xl font-bold tracking-tight xl:max-w-lg xl:text-2xl">
                        {title}
                    </h3>
                    {/* <p className="text-transparent">This is workflow card</p> */}
                    <p className="col-span-full mt-2 h-8 text-xs font-medium text-zinc-600 xl:max-w-md">
                        {desc}
                    </p>
                </>
            )}
        </div>
    );
};

export default Workflow;
