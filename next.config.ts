import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // output: "export",
    // basePath: "/studio",
    allowedDevOrigins: ["http://localhost:3000", "https://script.google.com"],
    async rewrites() {
        return [
            {
                // This is the path your React app will call (e.g., /api/submit-quote)
                source: "/api/submit-quote",
                // This is the target URL, your Google Apps Script Web App URL
                // Make sure this is the /exec URL, not the /dev URL
                destination:
                    "https://script.google.com/macros/s/AKfycbzMuUgSMyerPOKhQ-6mJ0Zi4IWh1O_RfZmleJaQBC3eN7_OMeED_VpAbPVgzGrh89tI7Q/exec",
            },
        ];
    },
};

export default nextConfig;
