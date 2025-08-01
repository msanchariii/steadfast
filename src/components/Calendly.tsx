import React from "react";
import Link from "next/link";

const Calendly = () => {
    return (
        <Link
            href={"https://cal.com/steadfast"}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="bg-cambridge hover:bg-cambridge/90 rounded-lg px-3 py-3 font-medium text-white transition-colors duration-300"
        >
            Schedule A Meeting
        </Link>
    );
};

export default Calendly;
