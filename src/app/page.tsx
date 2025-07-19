import AboutUs from "@/components/sections/AboutUs";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import OurTeam from "@/components/sections/OurTeam";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonial from "@/components/sections/Testimonial";
import Workflow from "@/components/sections/Workflow";
// import { GsapProvider } from "@/context/GsapProvider";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Showcase />
            <Workflow />
            <Testimonial />
            <OurTeam />
            <FAQ />
        </>
    );
}
