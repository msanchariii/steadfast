// import { title } from "process";
// "use client";
import {
    BadgeHelp,
    Bot,
    Check,
    Database,
    Hammer,
    Instagram,
    LayoutGrid,
    MonitorSmartphone,
    ShoppingCart,
} from "lucide-react";
import React from "react";

const websiteServices = [
    {
        title: "Website Design and Development",
        description:
            "Create a stunning and functional website that represents your brand and engages your audience.",
        listItems: [
            "Custom designs tailored to your brand",
            "Responsive and mobile-friendly layouts",
            "SEO-optimized for better visibility",
            "Fast loading times",
            "User-friendly interfaces",
        ],
        icon: MonitorSmartphone,
    },
    {
        title: "E-commerce Development",
        description:
            "Build a powerful online store that drives sales and enhances customer experience.",
        listItems: [
            "Custom e-commerce solutions",
            "Shopping cart integration",
            "Payment gateway setup",
            "Inventory management",
            "User-friendly product catalogs",
        ],
        icon: ShoppingCart,
    },
    {
        title: "CMS Integration",
        description:
            "Implement a CMS that allows you to easily manage and update your website content.",
        listItems: [
            "User-friendly interfaces for content updates",
            "Integration with popular CMS platforms",
            "Customizable templates",
            "SEO-friendly content management",
            "Scalable solution.",
        ],
        icon: Database,
    },
];

const automationServices = [
    {
        title: "Whatsapp Support Automation",
        description:
            "Integrate WhatsApp with your customer support system to automate responses.",
        listItems: [
            "24/7 customer support",
            "No more waiting in line",
            "No more missed messages",
            "No more answering the same questions over and over",
            "Automated ticketing systems",
        ],
        icon: BadgeHelp,
    },
    {
        title: "Social Media Post Automation",
        // post to all the social media platforms at once
        description: "Post to all your social media platforms at once.",
        listItems: [
            "Schedule posts in advance",
            "Manage multiple accounts",
            "Track engagement metrics",
            "Automate content sharing",
            "Integration with content calendars",
        ],
        icon: Instagram,
    },
    {
        title: "Chatbot Automation",
        description:
            "Integrate chatbots into your website or app to provide instant responses and support.",
        listItems: [
            "24/7 availability",
            "Instant responses to common queries",
            "Lead generation and qualification",
            "Integration with CRM systems",
            "Personalized user experiences",
        ],
        icon: Bot,
    },
];

const mobileAppServices = [
    {
        title: "Mobile App Development",
        description:
            "Create high-quality mobile applications for iOS and Android platforms.",
        listItems: [
            "Custom app designs",
            "Cross-platform compatibility",
            "User-friendly interfaces",
            "Integration with backend systems",
            "App store submission support",
        ],
        icon: LayoutGrid,
    },
    {
        title: "App Maintenance and Support",
        description:
            "Ensure your mobile app runs smoothly with ongoing maintenance and support services.",
        listItems: [
            "Regular updates and bug fixes",
            "Performance optimization",
            "User feedback integration",
            "Security enhancements",
            "24/7 technical support",
        ],
        icon: Hammer,
    },
];

const ServicesPage = () => {
    return (
        <section className="bg-beige/10">
            <div className="mb-32">
                <h1 className="mb-8 py-8 text-center text-4xl font-semibold text-shadow-sm">
                    Website Services
                </h1>
                <div className="mx-auto grid grid-cols-1 place-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {websiteServices.map((service, index) => (
                        <ServiceCard key={index} item={service} />
                    ))}
                </div>
            </div>
            <div className="mb-32">
                <h1 className="mb-8 py-8 text-center text-4xl font-semibold text-shadow-sm">
                    Mobile App Services
                </h1>
                <div className="mx-auto grid grid-cols-1 place-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {mobileAppServices.map((service, index) => (
                        <ServiceCard key={index} item={service} />
                    ))}
                </div>
            </div>

            <div className="mb-32">
                <h1 className="mb-8 py-8 text-center text-4xl font-semibold text-shadow-sm">
                    Automation Services
                </h1>
                <div className="mx-auto grid grid-cols-1 place-items-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {automationServices.map((service, index) => (
                        <ServiceCard key={index} item={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;

const ServiceCard = ({
    item,
    iconStyles,
}: {
    item: {
        title: string;
        description: string;
        listItems: string[];
        icon: React.ElementType;
    };
    iconStyles?: string;
}) => {
    const { icon: IconComponent } = item;
    return (
        <div className="mx-auto flex h-full w-full max-w-md flex-col rounded-lg bg-white p-8 shadow">
            <IconComponent
                className={`bg-cambridge mb-4 h-10 w-10 rounded-lg p-2 text-white ${iconStyles}`}
            />

            <h2 className="mb-4 text-lg font-semibold">{item.title}</h2>
            <p className="mb-4 text-sm font-medium text-black/60">
                {item.description}
            </p>
            <ul className="mt-2 list-none pl-1 text-sm font-medium">
                {item.listItems.map((listItem, index) => (
                    <li key={index} className="mb-2">
                        <Check className="inline text-green-500" /> {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
};
