import React from "react";

const WorkPage = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 py-8 bg-zinc-100 rounded-4xl">
            <div className="mx-auto flex flex-col md:flex-row justify-between gap-8 bg-zinc-100 md:items-end">
                <h2 className="font-bold text-5xl sm:text-7xl md:text-9xl">
                    Work
                </h2>
                <p className="max-w-md text-xs md:py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas consequuntur dicta deleniti nulla. Veritatis eveniet
                    quos qui dolorem ipsum itaque officiis soluta?
                </p>
            </div>
            <div className="mt-16  space-y-12 md:space-y-8">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    );
};

const WorkCard = ({
    title = "Rustic Charm",
    year = "2018",
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat hic repellendus natus facilis, dignissimos incidunt ducimus voluptatum soluta dolores quasi.",
}) => {
    return (
        <div className="flex flex-col lg:flex-row py-4 text-left">
            <div className="w-full lg:w-1/2 ">
                {" "}
                <h3 className="text-2xl font-bold text-left w-full mb-4">
                    Rustic Charm,{" "}
                    <span className="text-base text-zinc-500">2018</span>
                </h3>
                <p className="w-4/5 text-sm font-medium text-zinc-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat hic repellendus natus facilis, dignissimos incidunt
                    ducimus voluptatum soluta dolores quasi.
                </p>
                <button className="py-2 px-3 bg-slate-900 text-white rounded-md mt-12 hover:bg-slate-800 transition-colors duration-300 w-fit text-sm">
                    Sample Preview
                </button>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 mt-12">
                <div className="w-full aspect-video rounded-xl bg-zinc-900"></div>
                <div className="w-full aspect-video rounded-xl bg-zinc-900"></div>
            </div>
        </div>
    );
};

export default WorkPage;
