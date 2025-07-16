import { Work } from "@/data/works";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({
    work,
    variant = "light",
}: {
    work: Work;
    variant?: "light" | "dark";
}) => {
    return (
        <div className="flex flex-col flex-wrap py-4 text-left xl:flex-row">
            <div className="flex w-full flex-col xl:w-2/5">
                <h3 className="mb-6 w-full text-left text-2xl font-bold">
                    {work?.title},{" "}
                    <span className="text-base text-zinc-500">{work.year}</span>
                </h3>
                <p
                    className={`w-4/5 text-base font-medium ${variant === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
                >
                    {work.description}
                </p>
                <Link
                    href={work.liveUrl || work.sampleUrl || "#"}
                    className={`mt-12 w-fit rounded-md px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 ${variant === "dark" ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-900 hover:bg-slate-800"}`}
                >
                    {work?.liveUrl ? "View Live" : "View Sample"}
                </Link>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 xl:w-3/5">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-zinc-600 lg:aspect-video">
                    <Image
                        src={work.imageUrls[0]}
                        fill
                        alt={work.title + " image 1"}
                        className="cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-zinc-600">
                    <Image
                        src={work.imageUrls[1]}
                        fill
                        objectFit="cover"
                        alt={work.title + " image 2"}
                        className="cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
