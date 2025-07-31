"use client";
import React from "react";
import { Icon as IconComponent } from "lucide-react";

const Icon = ({ icon, className }: { icon: any; className?: string }) => {
    // @ts-expect-error: Ignore icon prop type error
    return <IconComponent icon={icon} className={className} />;
};

export default Icon;
