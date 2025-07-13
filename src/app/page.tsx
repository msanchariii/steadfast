import Footer from "@/components/Footer";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonial from "@/components/sections/Testimonial";
import Workflow from "@/components/sections/Workflow";
import { GsapProvider } from "@/context/GsapProvider";

export default function Home() {
    return (
        <main className="xl:space-y-32 bg-zinc-100">
            <GsapProvider>
                <Hero />
                <Testimonial />
                <Showcase />
                <Services />
                <Workflow />
                <FAQ />
            </GsapProvider>
        </main>
    );
}
