import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Testimonial from "@/components/sections/Testimonial";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero />
            <Testimonial />
            <Showcase />
            <div className="h-dvh"></div>
            <Footer />
        </div>
    );
}
