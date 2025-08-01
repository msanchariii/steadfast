import { FeaturedProjectsHeadline } from "@/data/SectionHeadlines";
import { workData } from "@/data/works";
import React from "react";
import WorkCard from "../WorkCard";

const Showcase = () => {
    return (
        <section className="bg-black text-zinc-200">
            <FeaturedProjectsHeadline />
            <div className="mt-16 space-y-16 md:space-y-12 lg:mt-24 xl:space-y-24">
                {workData.map((work) => (
                    <WorkCard key={work.id} work={work} variant="dark" />
                ))}
            </div>
        </section>
    );
};

export default Showcase;
