import { Loader2 } from "lucide-react";
import React from "react";

const LoadingPage = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
            <Loader2 className="size-24 animate-spin text-gray-500" />
        </div>
    );
};

export default LoadingPage;
