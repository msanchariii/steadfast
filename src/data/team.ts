export type Member = {
    id: number;
    name: string;
    role: string;
    photo: string;
    bio?: string;
};

export const memberData: Member[] = [
    {
        id: 1,
        name: "Kankan Mondal",
        role: "Team Manager & Creative Director",
        photo: "/images/john.jpg",
        bio: "We're not a big agency - and that's the point. We care more about meaningful work, strong partnerships, and results than we do about noise."
    },
    {
        id: 2,
        name: "Sanchari Mandal",
        role: "Backend & Database Engineer",
        photo: "/images/jane.jpg",
        bio: "Passionate about building scalable APIs and backend systems.",
    },
    {
        id: 3,
        name: "Subhradeep Sardar",
        role: "Frontend (React & React Native) Developer",
        photo: "/images/alice.jpg",
        bio: "Loves crafting beautiful user interfaces with React.",
    },
    {
        id: 4,
        name: "Subha Mistry",
        role: "UI/UX Developer",
        photo: "/images/bob.jpg",
        bio: "Focused on creating intuitive and engaging user experiences.",
    },
];

// export default MemberData;
