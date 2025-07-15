export type TestimonialData = {
    id: number;
    name: string;
    position: string;
    company: string;
    testimonial: string;
    via?: string;
};

export const testimonialData: TestimonialData[] = [
    {
        id: 1,
        name: "Shubham Goswami",
        position: "Manager",
        company: "Rustic Charm Homestay",
        via: "Local Reference",
        testimonial:
            "From the first call to the final launch, the experience was smooth and professional. They perfectly captured the cozy, nature-first vibe of our homestay in the website design. Guests now find us more easily online and bookings have improved. Highly recommended for hospitality businesses!",
    },
    {
        id: 2,
        name: "Basanta Mondal",
        position: "Owner",
        company: "Mondal Furniture",
        via: "Local Reference",
        testimonial:
            "The team built us a clean, fast-loading website that made it easier for customers to discover our products online. They explained everything clearly and handled our needs patiently. Very happy with the results — our store finally has a digital presence we’re proud of.",
    },
];
