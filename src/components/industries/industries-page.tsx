"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Achievements } from "./achievements";

const industries = [
    {
        name: "Banking & Financial Services",
        shortName: "BFSI",
        description:
            "Transforming financial institutions with AI-powered solutions for enhanced customer experiences and operational efficiency.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
        gradient: "from-blue-500/20 to-indigo-600/10",
        textGradient: "from-blue-500 to-indigo-600",
        iconColor: "text-blue-500",
        bgPattern: "bg-blue-500/5",
        features: ["AI-powered Orchestration Platform", "Advanced Product Hub"],
    },
    {
        name: "Education Technology",
        shortName: "Education",
        description:
            "Revolutionizing education through intelligent solutions that personalize learning experiences and enhance educational outcomes.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=center",
        gradient: "from-purple-500/20 to-pink-600/10",
        textGradient: "from-purple-500 to-pink-600",
        iconColor: "text-purple-500",
        bgPattern: "bg-purple-500/5",
        features: ["Adaptive Practice Engine", "Lesson Planning Co-pilot"],
    },
    {
        name: "Healthcare Innovation",
        shortName: "Healthcare",
        description:
            "Advancing healthcare industry with AI solutions that improve patient care and streamline medical operations for service providers.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop&crop=center",
        gradient: "from-emerald-500/20 to-teal-600/10",
        textGradient: "from-emerald-500 to-teal-600",
        iconColor: "text-emerald-500",
        bgPattern: "bg-emerald-500/5",
        features: [
            "E-commerce for Prosthetics",
            "WhatsApp based Patient Engagement",
        ],
    },
];

export function Industries({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn("flex w-full flex-col justify-center", className)}
            {...props}
        >
            <div className="relative w-full max-w-5xl space-y-16 p-8 py-10 xl:max-w-[100rem]">
                {/* Geometric Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />
                    <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl" />
                    <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/8 to-emerald-500/5 blur-3xl" />

                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 left-10 h-0.5 w-32 animate-pulse bg-gradient-to-r from-blue-500/40 to-transparent" />
                        <div className="absolute top-40 right-20 h-0.5 w-24 animate-pulse bg-gradient-to-l from-purple-500/40 to-transparent delay-700" />
                        <div className="absolute bottom-32 left-1/3 h-0.5 w-40 animate-pulse bg-gradient-to-r from-cyan-500/40 to-transparent delay-1000" />
                    </div>

                    {/* Neural dots */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-16 left-20 h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                        <div className="absolute top-60 right-32 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500 delay-500" />
                        <div className="absolute bottom-40 left-16 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500 delay-1000" />
                        <div className="absolute top-32 right-1/4 h-1 w-1 animate-pulse rounded-full bg-emerald-500 delay-300" />
                    </div>
                </div>
                {/* Industries Grid */}
                <div className="relative">
                    {/* Section Header */}
                    <div className="relative z-10 mb-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="glass-panel mx-auto w-fit rounded-full border border-slate-200/60 bg-white/80 px-6 py-2 shadow-lg backdrop-blur-sm">
                                <p className="text-sm font-medium tracking-wider text-blue-900 uppercase">
                                    Industry Solutions
                                </p>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                                Transforming{" "}
                                <span className="bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                                    Every Sector
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
                                Discover how our AI-powered solutions are
                                revolutionizing key industries
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative z-10">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {industries.map((industry, index) => (
                                <IndustryCard
                                    key={index}
                                    industry={industry}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Achievements />

            <div className="relative w-full max-w-5xl space-y-16 p-8 py-10 xl:max-w-[100rem]">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative mx-4 overflow-hidden rounded-3xl"
                >
                    {/* Dark geometric background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

                    {/* Neural network pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-8 left-12 h-0.5 w-64 animate-pulse bg-gradient-to-r from-blue-900/60 to-transparent" />
                        <div className="absolute right-20 bottom-16 h-0.5 w-48 animate-pulse bg-gradient-to-l from-purple-400/60 to-transparent delay-700" />
                        <div className="absolute top-1/3 right-12 h-40 w-0.5 animate-pulse bg-gradient-to-b from-cyan-400/60 to-transparent delay-1000" />
                        <div className="absolute bottom-1/3 left-20 h-32 w-0.5 animate-pulse bg-gradient-to-t from-emerald-400/60 to-transparent delay-300" />
                    </div>

                    {/* Neural dots */}
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-12 left-16 h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                        <div className="absolute right-24 bottom-20 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 delay-500" />
                        <div className="absolute top-1/2 left-1/3 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 delay-1000" />
                        <div className="absolute right-1/3 bottom-1/4 h-1 w-1 animate-pulse rounded-full bg-emerald-400 delay-700" />
                    </div>

                    <div className="relative z-10 p-12 text-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white md:text-3xl">
                                Ready to Transform Your{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    Industry?
                                </span>
                            </h3>
                            <p className="mx-auto max-w-3xl text-gray-300 md:text-lg">
                                Whether you&apos;re in BFSI, Ed-Tech,
                                Healthcare, or any other sector, our AI
                                solutions can help you stay ahead of the curve
                                and drive meaningful change.
                            </p>
                            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Button
                                    size="lg"
                                    className="border-0 bg-gradient-to-r from-blue-700 to-purple-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Discuss Your Industry Needs
                                        <Icons.ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Background Effects */}
                    <div className="absolute -top-24 -left-24 size-48 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl" />
                    <div className="absolute -right-24 -bottom-24 size-48 rounded-full bg-gradient-to-tr from-purple-500/15 to-transparent blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}

function IndustryCard({
    industry,
    index,
}: {
    industry: (typeof industries)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1],
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl"
        >
            {/* Glass effect overlay */}
            <div className="glass-panel absolute inset-0 rounded-3xl border border-slate-200/40 bg-white/60 backdrop-blur-sm transition-colors duration-500 group-hover:border-slate-300/60 group-hover:bg-white/80" />

            {/* Background Image with enhanced overlay */}
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
                <Image
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/70 to-slate-700/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle neural pattern */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30">
                    <div className="absolute top-6 left-6 h-0.5 w-16 animate-pulse bg-gradient-to-r from-white/60 to-transparent" />
                    <div className="absolute right-6 bottom-24 h-0.5 w-12 animate-pulse bg-gradient-to-l from-white/40 to-transparent delay-700" />
                    <div className="absolute top-16 right-8 h-1 w-1 animate-pulse rounded-full bg-white/60 delay-300" />
                </div>

                {/* Industry Name Overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                    <div className="space-y-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.15,
                            }}
                            className="space-y-1"
                        >
                            <h3 className="text-3xl font-bold text-white drop-shadow-2xl md:text-4xl">
                                {industry.shortName}
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="relative space-y-6 p-6"
            >
                <div className="relative z-10 space-y-6">
                    <p className="text-sm leading-relaxed font-medium text-slate-700">
                        {industry.description}
                    </p>

                    <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-600 uppercase">
                            <div
                                className={cn(
                                    "h-2 w-2 rounded-full",
                                    industry.iconColor.replace("text-", "bg-")
                                )}
                            />
                            Key Solutions
                        </h4>
                        <div className="grid gap-1">
                            {industry.features
                                .slice(0, 2)
                                .map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay:
                                                0.7 +
                                                index * 0.15 +
                                                featureIndex * 0.1,
                                        }}
                                        className="flex items-center gap-3 rounded-xl bg-white/80 p-2 backdrop-blur-sm"
                                    >
                                        <Icons.Check
                                            className={cn(
                                                "size-4 flex-shrink-0",
                                                industry.iconColor
                                            )}
                                        />
                                        <span className="text-xs font-medium text-slate-700">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="glass-panel w-full border-slate-200/60 bg-white/80 font-semibold text-slate-700 backdrop-blur-sm transition-colors duration-300 hover:border-slate-300/80 hover:bg-white/90"
                        asChild
                    >
                        <Link href="/products">
                            Explore Solutions
                            <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </motion.div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
    );
}
