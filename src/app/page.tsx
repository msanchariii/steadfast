import Footer from "@/components/Footer";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
    return (
        <main className="xl:space-y-32 bg-zinc-200">
            <Hero />
            <Testimonial />
            <Showcase />
            <Services />
            <FAQ />
            {/* <div className="h-dvh"></div> */}
            <Footer />
        </main>
    );
}
