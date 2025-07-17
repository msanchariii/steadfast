import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    // 🧠 Page title - will show as "<page> | SteadFast Studio"
    title: {
        template: "%s | SteadFast Studio",
        default: "SteadFast Studio", // Default fallback title
    },

    // 📝 Description for search engines & social sharing
    description:
        "We craft fast, scalable websites and digital products that help startups, creators, and small teams grow, engage, and stand out online.",

    // ⚙ Shows which tool created the site
    generator: "Next.js",

    // 🧾 Sets the app name (used in PWA & some meta contexts)
    applicationName: "SteadFast Studio",

    // 🔐 Controls referrer behavior for privacy
    referrer: "origin-when-cross-origin",

    // 🔍 Keywords for SEO (less relevant today but still okay)
    keywords: [
        "Web Development",
        "Next.js",
        "React",
        "Freelance Studio",
        "SteadFast Studio",
    ],

    // ✍ Authors of the content (can appear in rich snippets)
    authors: [
        { name: "Sanchari Mandal", url: "https://msanchariii.vercel.app/" },
        { name: "Kankan Mondal", url: "https://kankanmondal22.github.io/" },
    ],

    // 👤 Who created this site
    creator: "Sanchari Mandal",

    // 🏢 Who published the content/site
    publisher: "SteadFast Web Studio",

    // 📵 Stops auto-linking email/phone/address in Safari
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // 🟦 Open Graph (for Facebook, LinkedIn, WhatsApp previews)
    openGraph: {
        title: "SteadFast Studio", // Title shown when shared
        description: "Your partner in digital excellence.",
        url: "https://steadfastweb.studio/", // Your live domain
        siteName: "SteadFast Studio", // Brand or site name
        // images: [
        //     {
        //         url: "https://steadfastweb.studio/og-image.png", // OG image path
        //         width: 1200,
        //         height: 630,
        //         alt: "SteadFast Studio - Digital solutions",
        //     },
        // ],
        locale: "en_IN", // Language/region
        type: "website", // Type of OG content
    },

    // 🐦 Twitter Card (controls how links appear on Twitter)
    twitter: {
        card: "summary_large_image", // Full-width preview
        title: "SteadFast Studio", // Title on Twitter
        description: "Your partner in digital excellence.",
        // images: ["https://steadfastweb.studio/og-image.png"],
        creator: "@steadfastss", // Your Twitter handle
    },

    // ✅ Optional: Canonical URL to avoid duplicate SEO issues
    metadataBase: new URL("https://steadfastweb.studio"),
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} bg-white antialiased`}>
                <Navbar />
                <main className="m-0 mx-auto w-full py-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
