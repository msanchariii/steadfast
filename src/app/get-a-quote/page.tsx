import { sectionDescriptions } from "@/data/globals";
import SectionHeadlines from "@/data/SectionHeadlines";
import QuoteForm from "@/components/QuoteForm";

const GetAQuotePage = () => {
    // const [estimatedCost, setEstimatedCost] = useState(0);
    return (
        <section>
            <div className="mx-auto mb-32 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <h2 className="text-4xl font-bold sm:text-6xl md:text-8xl">
                    Get a Quote
                </h2>
                <p className="max-w-md text-xs md:py-2">
                    {sectionDescriptions.contact}
                </p>
            </div>
            <SectionHeadlines sectionName="Confused about costs?">
                <p className="text-xl font-semibold">
                    Not sure how much a website might cost? Don&apos;t worry —
                    this form helps you get a rough estimate based on your
                    needs. It&apos;s not final, just a starting point
                </p>
            </SectionHeadlines>
            <QuoteForm />
        </section>
    );
};

export default GetAQuotePage;
