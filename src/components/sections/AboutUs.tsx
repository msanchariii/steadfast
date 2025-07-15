import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-black text-zinc-200">
            <h2 className="mb-6 font-semibold">[About Us]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just <span className="text-lavender-dark">services</span> -
                we deliver growth, clarity, and real impact.
            </h1>
            <div className="mb-16 aspect-video w-full rounded-2xl bg-zinc-200"></div>
            <div className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-8">
                <div className="xl:self-end">
                    <h4 className="mb-2 text-4xl font-semibold">100%</h4>
                    <h4 className="text-base font-medium">Happy Clients</h4>
                </div>
                <p className="w-full text-sm font-medium xl:max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde exercitationem iste non, sequi recusandae quae
                    corrupti, dolorem, est ut velit quo vel quam distinctio
                    temporibus corporis facilis reiciendis debitis dolorum
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
