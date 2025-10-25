import { getAbsoluteURL } from "@/lib/utils";

export const siteConfig: SiteConfig = {
    name: "FractalHive Inc.",
    description:
        "Building AI-powered SaaS tools for the banking sector—focused on awareness, simplicity, and product-first R&D from Bengaluru, India",
    longDescription:
        "FractalHive is a Bengaluru-based AI and SaaS company building simple, scalable tools for the banking industry. With a strong focus on awareness-driven design and ethical innovation, it blends product-first R&D with deep fintech expertise.",
    keywords: [
        "FractalHive",
        "AI fintech company",
        "SaaS for banking",
        "AI tools for finance",
        "Bengaluru tech startup",
        "Conversational AI platform",
        "Awareness-driven software",
        "Product-first R&D",
        "Banking innovation India",
        "Ethical AI development",
        "AI-first SaaS company in India",
        "Banking SaaS platform",
        "Fintech product engineering",
        "Scalable banking solutions",
        "AI-powered financial tools",
        "Financial awareness technology",
        "Fintech R&D company Bengaluru",
        "Simple AI tools for banks",
        "Conversational insights for BFSI",
        "Startup building AI for banks",
    ],
    category: "AI and SaaS for Banking",
    developer: {
        name: "FractalHive",
        url: "https://fractalhive.com/",
    },
    og: {
        url: getAbsoluteURL("/og.webp"),
        width: 1200,
        height: 630,
    },
    menu: [
        {
            name: "Home",
            description: "Return to the homepage",
            href: "/",
            icon: "Home",
        },
        {
            name: "About",
            description: "Learn more about us",
            href: "/about",
            icon: "Info",
        },
        {
            name: "Industries",
            description: "Discover our industry focus",
            href: "/industries",
            icon: "Globe",
        },
        {
            name: "Products",
            description: "Explore our products",
            href: "/products",
            icon: "Box",
        },
        {
            name: "Services",
            description: "Learn more about our services",
            href: "/services",
            icon: "Briefcase",
        },
        {
            name: "Careers",
            description: "Join our team",
            href: "/careers",
            icon: "Users",
        },
        {
            name: "Contact",
            description: "Get in touch with us",
            href: "/contact",
            icon: "Mail",
        },
    ],
    links: {
        Linkedin: "#",
    },
    contact: {
        officeHours: "Monday - Friday, 9:00 AM - 5:00 PM",
        email: "contact@fractalhive.com",
        phone: "+91 (6366)-001-729",
        location: "Bengaluru, Karnataka, India",
    },
};
