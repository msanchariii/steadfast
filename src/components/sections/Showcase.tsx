import { WorkCard } from "@/app/works/page";
import { workData } from "@/data/works";
import React from "react";

const Showcase = () => {
    return (
        <section className="bg-black text-zinc-200">
            <h2 className="mb-6 font-semibold">[Featured Projects]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just <span className="text-lavender-dark">services</span> -
                we deliver growth, clarity, and real impact.
            </h1>
            <div className="mt-16 space-y-16 md:space-y-12 lg:mt-24">
                {workData.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </section>
    );
};

export default Showcase;
