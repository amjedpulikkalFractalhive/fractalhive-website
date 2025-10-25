"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Icons } from "../icons";

const whyUs = [
    {
        title: "AI-First Solutions",
        description:
            "We use cutting-edge AI to build solutions that go beyond automation—understanding and adapting to complex workflows to make operations intuitive.",
        icon: "Sparkles" as keyof typeof Icons,
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        glow: "blue-400",
        features: ["Neural Networks", "Machine Learning", "Predictive Models"],
    },
    {
        title: "Domain Expertise",
        description:
            "Our deep understanding of various industries comes from years of experience, ensuring our solutions address real challenges with practical, scalable approaches.",
        icon: "Building2" as keyof typeof Icons,
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        glow: "emerald-400",
        features: [
            "Strategic Consulting",
            "Domain-Driven Design",
            "Process Optimization",
        ],
    },
    {
        title: "Design Thinking",
        description:
            "We build with a design-first mindset—crafting seamless, user-focused solutions that deliver immediate value and scale with your organization's long-term goals.",
        icon: "Gem" as keyof typeof Icons,
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
        glow: "violet-400",
        features: [
            "User-Centric Design",
            "Scalable Architecture",
            "Rapid Prototyping",
        ],
    },
];

export function WhyUs({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative space-y-20  pb-8",
                className
            )}
            {...props}
        >
            {/* Subtle animated background */}
            <div className="bg-grid-pattern absolute inset-0 opacity-30" />
            <div className="bg-gradient-radial absolute inset-0 from-transparent via-primary/5 to-transparent" />

            {/* Floating geometric shapes */}
            <div className="animate-float absolute top-20 left-10 h-20 w-20 rotate-45 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10" />
            <div
                className="animate-float absolute top-40 right-20 h-16 w-16 rounded-full bg-gradient-to-r from-accent/10 to-primary/10"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="animate-float absolute bottom-32 left-1/4 h-12 w-12 rounded-lg bg-gradient-to-r from-primary/15 to-accent/15"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                >
                    <div className="animate-pulse-glow h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium tracking-wider text-primary uppercase">
                        Why {siteConfig.name}
                    </span>
                </motion.div> */}

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-slate-900 via-primary to-accent bg-clip-text text-4xl font-bold text-balance text-transparent md:text-5xl md:leading-[4.2rem] lg:text-6xl"
                >
                    Intelligent Solutions Made Simple
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-3xl text-lg leading-relaxed text-balance text-blue-900 md:text-xl"
                >
                    With deep domain insight and cutting-edge AI, we design
                    intelligent solutions that align with your goals and grow
                    with your organization.
                </motion.p>
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-3">
                {whyUs.map((item, index) => (
                    <WhyUsCard key={index} index={index} {...item} />
                ))}
            </div>

            {/* Stats Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative z-10 grid gap-8 md:grid-cols-3"
            >
                <div className="rounded-2xl border border-primary/10 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-colors duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        99.9%
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                        System Uptime
                    </div>
                </div>
                <div className="rounded-2xl border border-accent/10 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-colors duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-accent to-primary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        50M+
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                        Transactions Processed
                    </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-colors duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        24/7
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                        AI Monitoring
                    </div>
                </div>
            </motion.div> */}
        </section>
    );
}

function WhyUsCard({
    title,
    description,
    icon,
    gradient,
    features,
    className,
    index,
}: {
    title: string;
    description: string;
    icon: keyof typeof Icons;
    gradient: string;
    features: string[];
} & GenericProps & { index: number }) {
    const IconComponent = Icons[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            className={cn(
                "group hover-glow relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/30 hover:bg-card/80",
                className
            )}
        >
            {/* Animated Background Pattern */}
            <div className="neural-dots absolute inset-0 opacity-30" />
            <div className="circuit-lines absolute inset-0 opacity-20" />

            {/* Floating Elements */}
            <div
                className={cn(
                    "absolute top-4 right-4 h-16 w-16 rounded-full bg-gradient-to-r opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80",
                    gradient
                )}
            />

            <div className="relative space-y-6">
                {/* Icon */}
                <div
                    className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r shadow-lg transition-colors duration-500 group-hover:scale-110 group-hover:shadow-xl",
                        gradient
                    )}
                >
                    <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-900 transition-colors duration-300 group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-balance text-blue-900">
                        {description}
                    </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                    {features.map((feature, featureIndex) => (
                        <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                        >
                            <div
                                className={cn(
                                    "h-1.5 w-1.5 rounded-full bg-gradient-to-r",
                                    gradient
                                )}
                            />
                            <span className="text-xs text-blue-900">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div
                className={cn(
                    "absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                    gradient
                )}
            />
        </motion.div>
    );
}
