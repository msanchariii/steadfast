import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
    return (
        <div>
            <Hero />
            <Testimonial />
            <Showcase />
            <Services />
            <div className="h-dvh"></div>
            <Footer />
        </div>
    );
}
