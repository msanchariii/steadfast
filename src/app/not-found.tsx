import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-white">
            {/* <Loader2 className="size-24 animate-spin text-gray-500" /> */}
            <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
            <Link href="/" className="mt-4 text-blue-500 hover:underline">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
