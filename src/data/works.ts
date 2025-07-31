export type Work = {
    id: string;
    title: string;
    year: string;
    description: string;
    imageUrls: string[];
    liveUrl?: string;
    sampleUrl?: string; // if not hosted with a live URL, then a sample preview URL
};

export const workData: Work[] = [
    {
        id: "1",
        title: "The Grand Kalimpong",
        year: "2025",
        description:
            "The Grand Kalimpong is a multi-section hotel website built with Next.js. It features a gallery and contact form, providing a seamless user experience for potential guests.",
        imageUrls: [
            "/assets/projects/thegrandk1.png",
            "/assets/projects/thegrandk2.png",
        ],
        liveUrl: "https://thegrandk.vercel.app/",
    },
    {
        id: "2",
        title: "Rustic Charm Homestay",
        year: "2024",
        description:
            "Rustic Charm Homestay is a responsive single-page booking-focused website built using Next.js (or whichever tech you used). It features a gallery, pricing section, and contact form to provide a cozy, immersive user experience for potential guests.",
        imageUrls: [
            "/assets/projects/homestay1.webp",
            "/assets/projects/homestay2.webp",
        ],
        liveUrl: "https://msanchariii.github.io/rustic-charm/",
        // sampleUrl: "https://example.com/sample-alpha",
    },

    // {
    //     id: "2",
    //     title: "Music School Website",
    //     year: "2025",
    //     description:
    //         "A responsive, multi-section music school landing page designed to engage prospective students with clear navigation to “Home,” “Courses,” and “Contact Us.” The homepage promotes key offerings like Guitar Fundamentals, Advanced Vocal Techniques, and Music Production courses—encouraging exploration and enrollment.",
    //     imageUrls: [
    //         "/assets/projects/musico1.webp",
    //         "/assets/projects/musico2.webp",
    //     ],
    //     liveUrl: "https://music-school-website-zeta.vercel.app/",
    // },
];
