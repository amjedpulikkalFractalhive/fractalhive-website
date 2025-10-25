"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const heroData = {
    title: "AI-Powered Digital Transformation",
    description:
        "Transform your business with cutting-edge AI solution that understands, adapts, and evolves with your unique needs.",
    features: [
        "Agentic Workflows",
        "AI-Augmented Development",
        "Intelligent Automation",
    ],
};

const aiWords = [
    "AI",
    "Machine Learning",
    "Neural Networks",
    "Automation",
    "Intelligence",
    "Deep Learning",
    "NLP",
    "Vision",
    "Prediction",
    "Robotics",
    "Data",
    "Models",
    "Understanding",
    "Agents",
    "Generative",
    "Computing",
];

export function Landing({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative min-h-[calc(100vh-4rem)] overflow-hidden",
                className
            )}
            {...props}
        >
            {/* White gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Hero content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex max-w-3xl items-center gap-10"
                >
                    <InfiniteMovingCards
                        items={[
                            {
                                name: "Anthropic",
                                logoUrl: "/logos/anthropic-logo.png",
                            },
                            {
                                name: "Bolt",
                                logoUrl: "/logos/bolt-logo.png",
                            },
                            {
                                name: "Bubble",
                                logoUrl: "/logos/bubble-logo.png",
                            },
                            {
                                name: "Claude",
                                logoUrl: "/logos/claude-logo.png",
                            },
                            {
                                name: "Cursor",
                                logoUrl: "/logos/cursor-logo.png",
                            },
                            {
                                name: "GitHub Copilot",
                                logoUrl: "/logos/github-copilot-logo.png",
                            },
                            {
                                name: "Lovable",
                                logoUrl: "/logos/lovable-logo.png",
                            },
                            {
                                name: "OpenAI",
                                logoUrl: "/logos/openai-logo.png",
                            },
                            {
                                name: "v0",
                                logoUrl: "/logos/v0-logo.png",
                            },
                        ]}
                        direction="left"
                        speed="fast"
                    />
                </motion.div>

                {/* Animated Word Cloud */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    className="relative mb-6 max-w-xl"
                >
                    <div className="relative flex flex-wrap items-center justify-center gap-2 rounded-full px-6 py-3 md:gap-3">
                        {aiWords.map((word, index) => {
                            // Create a more thoughtful distribution of sizes and colors
                            const isImportant = [
                                "AI",
                                "Machine Learning",
                                "Intelligence",
                                "Neural Networks",
                            ].includes(word);
                            const isMedium = [
                                "Deep Learning",
                                "Automation",
                                "Generative",
                                "Computing",
                            ].includes(word);

                            const getWordStyle = () => {
                                if (isImportant) {
                                    return {
                                        size: "text-xs md:text-sm",
                                        color: "text-blue-700/80",
                                        weight: "font-bold",
                                    };
                                } else if (isMedium) {
                                    return {
                                        size: "text-xs",
                                        color: "text-purple-700/80",
                                        weight: "font-semibold",
                                    };
                                } else {
                                    return {
                                        size: "text-xs",
                                        color:
                                            index % 2 === 0
                                                ? "text-indigo-600/70"
                                                : "text-cyan-600/70",
                                        weight: "font-normal",
                                    };
                                }
                            };

                            const style = getWordStyle();

                            return (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2 + index * 0.08,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    className={` ${style.color} ${style.size} ${style.weight} cursor-default rounded-full border border-white/30 bg-white/40 px-2 py-1 shadow-md backdrop-blur-md transition-colors duration-300 select-none hover:scale-105 hover:border-blue-200/50 hover:bg-white/60 hover:font-bold hover:text-blue-800 hover:shadow-lg`}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -1,
                                        boxShadow:
                                            "0 4px 15px rgba(59, 130, 246, 0.2)",
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </div>

                    {/* Elliptical glow effect behind the word cloud */}
                    <div className="absolute inset-0 -z-10 scale-110 transform rounded-full bg-gradient-to-r from-blue-100/15 via-purple-100/15 to-cyan-100/15 blur-2xl" />
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-sm"
                >
                    <div className="animate-pulse-glow h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
                        {siteConfig.name} AI Platform
                    </span>
                </motion.div> */}
                <div className="flex flex-col items-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl bg-linear-to-tr animate-gradient-flow from-purple-900 via-purple-700 to-orange-500 bg-clip-text text-4xl font-bold text-balance text-transparent md:text-6xl md:leading-20 lg:text-7xl"
                    >
                        {heroData.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-3xl text-lg leading-relaxed text-balance text-blue-900 md:text-xl"
                    >
                        {heroData.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {heroData.features.map((feature, featureIndex) => (
                            <div
                                key={featureIndex}
                                className="rounded-full border border-blue-200/50 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm"
                            >
                                <Icons.Check className="mr-2 inline h-4 w-4" />
                                {feature}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="group relative overflow-hidden ta border-0 text-white shadow-xl 
             bg-linear-to-tr from-purple-900 via-purple-700 to-orange-500
              "
                            asChild
                        >
                            <Link href="/contact" className="flex items-center">
                                <Icons.Sparkles className="mr-2 h-5 w-5" />
                                <span>Start Your AI Journey</span>
                                <Icons.ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        {/* <Button
                        size="lg"
                        variant="outline"
                        className="group border-gray-300 bg-white/80 text-gray-700 backdrop-blur-sm hover:border-gray-400 hover:bg-white"
                        asChild
                    >
                        <Link href="/products">
                            <Icons.Video className="mr-2 h-5 w-5" />
                            <span>Explore Solutions</span>
                        </Link>
                    </Button> */}
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 text-purple-300/60">
                <Icons.Activity
                    className="h-8 w-8 animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

        </section>
    );
}
