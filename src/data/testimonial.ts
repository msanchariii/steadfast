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
        name: "John Doe",
        position: "Software Engineer",
        company: "Tech Solutions",
        via: "LinkedIn",
        testimonial:
            "This is the best service I have ever used. Highly recommend to everyone! The team is very professional and responsive. I am extremely satisfied with the results. I will definitely use their services again in the future. The quality of work is outstanding and they delivered on time. ",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        company: "Innovatech",
        via: "Freelancer.in",
        testimonial:
            "Amazing experience! The quality of work exceeded my expectations. The team was very attentive to details and delivered on time. I will definitely work with them again. Highly recommended! Great job! Keep it up! I am very happy with the outcome. Thank you for your hard work! I appreciate the effort you put into this project. It was a pleasure working with you. I look forward to future collaborations.",
    },
    {
        id: 3,
        name: "Alice Johnson",
        position: "UX Designer",
        company: "Creative Minds",
        via: "Upwork",
        testimonial:
            "I loved working with this team! They understood my vision perfectly and brought it to life. The communication was smooth and the results were fantastic. I highly recommend their services to anyone looking for quality work. ",
    },
    {
        id: 4,
        name: "Bob Brown",
        position: "Marketing Specialist",
        company: "Market Leaders",
        testimonial:
            "A wonderful experience from start to finish. The team was very knowledgeable and provided great insights that helped improve our project significantly. I highly recommend their services to anyone looking for quality work and professionalism. I am very impressed with the level of service and expertise they provided. ",
    },
];
