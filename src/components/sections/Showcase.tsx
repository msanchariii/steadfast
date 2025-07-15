import { WorkCard } from "@/app/works/page";
import { FeaturedProjectsHeadline } from "@/data/SectionHeadlines";
import { workData } from "@/data/works";
import React from "react";

const Showcase = () => {
    return (
        <section className="bg-black text-zinc-200">
            <FeaturedProjectsHeadline />
            <div className="mt-16 space-y-16 md:space-y-12 lg:mt-24">
                {workData.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </section>
    );
};

export default Showcase;
