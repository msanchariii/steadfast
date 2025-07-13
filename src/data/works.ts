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
        title: "Project Alpha",
        year: "2020",
        description: "A comprehensive project that showcases our capabilities.",
        imageUrls: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
        ],
        liveUrl: "https://example.com/live-alpha",
        sampleUrl: "https://example.com/sample-alpha",
    },
    {
        id: "2",
        title: "Project Beta",
        year: "2021",
        description: "An innovative solution that addresses key challenges.",
        imageUrls: [
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg",
        ],
        liveUrl: "https://example.com/live-beta",
    },
];
