import { Work } from "@/data/works";
import Link from "next/link";

const WorkCard = ({ work }: { work: Work }) => {
    return (
        <div className="flex flex-col flex-wrap py-4 text-left lg:flex-row">
            <div className="flex w-full flex-col lg:w-1/2">
                <h3 className="mb-4 w-full text-left text-2xl font-bold">
                    {work?.title},{" "}
                    <span className="text-base text-zinc-500">2018</span>
                </h3>
                <p className="w-4/5 text-sm font-medium text-zinc-600">
                    {work.description}
                </p>
                <Link href={work.liveUrl || work.sampleUrl || "#"}>
                    <button className="mt-12 w-fit rounded-md bg-slate-900 px-3 py-2 text-sm text-white transition-colors duration-300 hover:bg-slate-800">
                        {work?.liveUrl ? "View Live" : "View Sample"}
                    </button>
                </Link>
            </div>
            <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row lg:mt-0 lg:w-1/2">
                <div className="aspect-video w-full rounded-xl bg-zinc-900 lg:w-1/2"></div>
                <div className="aspect-video w-full rounded-xl bg-zinc-900 lg:w-1/2"></div>
            </div>
        </div>
    );
};

export default WorkCard;
