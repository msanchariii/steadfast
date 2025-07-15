import WorkCard from "@/components/WorkCard";
import { sectionDescriptions } from "@/data/globals";
import { workData } from "@/data/works";

import React from "react";

const WorkPage = () => {
    return (
        <section>
            <div className="mx-auto flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <h2 className="text-5xl font-bold sm:text-7xl md:text-9xl">
                    Work
                </h2>
                <p className="max-w-md text-xs md:py-2">
                    {sectionDescriptions.ourWork}
                </p>
            </div>
            <div className="mt-16 space-y-16 md:space-y-12 lg:mt-24">
                {workData.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </section>
    );
};

export default WorkPage;
