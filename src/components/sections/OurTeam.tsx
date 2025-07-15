import { Member, memberData } from "@/data/team";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
    return (
        <section className="bg-black text-zinc-200">
            <h2 className="mb-6 font-semibold">[Our Team]</h2>
            <h1 className="mb-16 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:text-6xl xl:leading-16">
                Not just <span className="text-lavender-dark">services</span> -
                we deliver growth, clarity, and real impact.
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="col-span-full flex flex-col gap-8 rounded-md p-6 ring-1 ring-zinc-800 lg:flex-row">
                    <Image
                        src={"/assets/manager.jpg"}
                        alt="Team Manager"
                        width={1000}
                        height={1000}
                        className="aspect-[4/3] rounded-md object-cover brightness-110 contrast-100 lg:aspect-video lg:max-w-1/2"
                    />
                    <div className="flex h-full flex-col justify-between gap-2 lg:max-w-1/2 lg:py-8">
                        <div>
                            <h5 className="text-2xl font-bold text-zinc-200">
                                {memberData[0].name}{" "}
                            </h5>
                            <p className="text-xl font-bold text-zinc-600">
                                {memberData[0].role}
                            </p>
                        </div>
                        <p className="mt-6 text-xl font-medium text-zinc-600 italic">
                            {memberData[0].bio}
                        </p>
                    </div>
                </div>
                {/* <TeamMemberCard member={memberData[0]} /> */}
                <TeamMemberCard member={memberData[1]} />
                <TeamMemberCard member={memberData[2]} />
                <TeamMemberCard member={memberData[3]} />
            </div>
        </section>
    );
};

const TeamMemberCard = ({
    member,
    className = "",
}: {
    member: Member;
    className?: string;
}) => {
    return (
        <div
            className={`flex flex-col rounded-md p-6 ring-1 ring-zinc-800 ${className}`}
        >
            <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-zinc-200"></div>
                <div>
                    <h5 className="text-xl font-bold">{member.name}</h5>
                    <p className="text-base font-medium text-zinc-500">
                        {member.role}
                    </p>
                </div>
            </div>
            <p className="mt-12 text-lg text-zinc-500 italic">
                {'"' + member.bio + '"'}
            </p>
        </div>
    );
};

export default OurTeam;
