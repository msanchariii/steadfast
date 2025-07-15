export type Member = {
    id: number;
    name: string;
    role: string;
    photo: string;
    quote?: string;
};

export const memberData: Member[] = [
    {
        id: 1,
        name: "Kankan Mondal",
        role: "Team Manager & Creative Director",
        photo: "/images/john.jpg",
        quote: "We're not a big agency — and that's the point. We care more about meaningful work, strong partnerships, and results than we do about noise.",
    },
    {
        id: 2,
        name: "Sanchari Mandal",
        role: "Backend & Database Engineer",
        photo: "/images/jane.jpg",
        quote: "From managing databases to architecting APIs, I focus on building stable systems that scale. Working with this team means no ego, just real collaboration and clean backend logic that delivers under pressure.",
    },
    {
        id: 3,
        name: "Subhradeep Sardar",
        role: "React & React Native Developer",
        photo: "/images/alice.jpg",
        quote: "From web to mobile, I bring interfaces to life with React and React Native. This team pushes for speed, clarity, and clean UI — and I love building things users can feel. Every project here is a chance to create something sharp and simple that works.",
    },
    {
        id: 4,
        name: "Subha Mistry",
        role: "UI/UX Developer",
        photo: "/images/bob.jpg",
        quote: "Designing user-first experiences isn’t just a job — it’s a mindset. Here, we care about how things feel as much as how they look. Being part of a lean, focused team gives me the space to go deep into details that matter to real users.",
    },
];
