import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Showcase = () => {
    return (
        <div className="flex min-h-dvh w-full flex-col justify-center p-12">
            <h2 className="sr-only">Showcase</h2>
            <p className="mb-6 text-center text-4xl leading-16 font-bold tracking-tight capitalize">
                some of the <span className="text-rose-500">projects</span>{" "}
                <br />
                We have worked on
            </p>
            <div className="grid grid-cols-1 place-content-center items-center justify-center gap-12 p-12 md:grid-cols-2">
                <ProjectCard
                    title="Project One"
                    description="This is a brief description of Project One."
                    imageSrc="/sample.webp"
                />
                <ProjectCard
                    title="Project Two"
                    description="This is a brief description of Project Two."
                    imageSrc="/sample.webp"
                />
            </div>
            {/* <button className="text-black" id="btn">
                hello
            </button> */}
            <button className="mx-auto rounded-full bg-linear-to-br from-purple-600 to-sky-400 p-0.5 text-sm leading-6 font-semibold text-white no-underline transition-all duration-300 hover:from-sky-400 hover:to-purple-600">
                <div className="flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5">
                    <span>{`View All`}</span>
                    <ChevronRight className="h-4 w-4 text-white" />
                </div>
            </button>
        </div>
    );
};

const ProjectCard = ({
    title,
    description,
    imageSrc,
}: {
    title: string;
    description: string;
    imageSrc: string;
}) => {
    return (
        <div className="hover:ring-charcoal/10 mx-auto overflow-hidden rounded-lg bg-white p-6 transition-all duration-300 hover:ring-4 xl:w-3/4">
            <div className="relative mx-auto aspect-video">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="rounded-xl object-cover"
                />
            </div>
            <div className="mx-auto mt-6">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Showcase;
