import React from "react";

const SectionHeadlines = ({
    sectionName = "Section Name",
    children,
}: {
    sectionName?: string;
    children?: React.ReactNode;
}) => {
    return (
        <>
            <h2 className="section-headline mb-6 font-semibold">
                [{sectionName}]
            </h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                {children}
            </h1>
        </>
    );
};

export const AboutUsHeadline = () => {
    return (
        <SectionHeadlines sectionName="About Us">
            We’re a <span className="text-cambridge">small team</span>, driven
            by <span className="text-cambridge">big results</span>.
        </SectionHeadlines>
    );
};

export const ServicesHeadline = () => {
    return (
        <SectionHeadlines sectionName="Services">
            Not just services — we create{" "}
            <span className="text-cambridge">digital experiences</span> that
            convert
        </SectionHeadlines>
    );
};

export const FeaturedProjectsHeadline = () => {
    return (
        <SectionHeadlines sectionName="Featured Projects">
            Real <span className="text-cambridge">projects</span>, real{" "}
            <span className="text-cambridge">impact</span> — see what we&apos;ve
            built.
        </SectionHeadlines>
    );
};

export const WorkflowHeadline = () => {
    return (
        <SectionHeadlines sectionName="Workflow">
            No guesswork. Just a clear, proven{" "}
            <span className="text-cambridge">process</span> that works.
        </SectionHeadlines>
    );
};

export const TestimonialsHeadline = () => {
    return (
        <SectionHeadlines sectionName="Testimonials">
            Our clients talk results — here’s what they’re saying.
        </SectionHeadlines>
    );
};

export const OurTeamHeadline = () => {
    return (
        <SectionHeadlines sectionName="Our Team">
            Meet the <span className="text-cambridge">makers</span> behind the
            code, pixels, and ideas.
        </SectionHeadlines>
    );
};

export const FaqHeadline = () => {
    return (
        <SectionHeadlines sectionName="FAQ">
            Answers to real questions we get asked — no jargon.
        </SectionHeadlines>
    );
};

export default SectionHeadlines;
