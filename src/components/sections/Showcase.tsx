import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Showcase = () => {
    return (
        <div className="flex flex-col justify-center w-full h-dvh p-12">
            <h2 className="sr-only">Showcase</h2>
            <p className="text-center text-4xl font-bold mb-6 capitalize tracking-tight leading-16">
                some of the <span className="text-rose-500 ">projects</span>{" "}
                <br />
                We have worked on
            </p>
            <div className="grid grid-cols-1 justify-center items-center place-content-center md:grid-cols-2 gap-12 p-12">
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
            <button className="mx-auto bg-linear-to-br from-purple-600 hover:to-purple-600 to-sky-400 hover:from-sky-400 p-0.5 no-underline  relative  rounded-full text-xs font-semibold leading-6 text-white transition-all duration-300 ">
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
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
        <div className="xl:w-3/4 mx-auto bg-white rounded-lg overflow-hidden hover:ring-4 p-6 hover:ring-charcoal/10 transition-all duration-300">
            <div className="relative mx-auto aspect-video">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <div className="mt-6 mx-auto">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Showcase;
