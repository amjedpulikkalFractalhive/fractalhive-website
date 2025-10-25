"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { GeneralShell } from "../globals/layouts";

const values = [
    {
        title: "Innovation First",
        description:
            "We push boundaries and challenge conventional thinking in every solution we build.",
        icon: "Sparkles" as keyof typeof Icons,
        gradient: "from-blue-400 to-cyan-400",
    },
    {
        title: "Ethical AI",
        description:
            "Responsible development and deployment of AI technologies that benefit society.",
        icon: "CheckSquare" as keyof typeof Icons,
        gradient: "from-green-400 to-emerald-400",
    },
    {
        title: "Customer Centric",
        description:
            "Every decision is made with our clients' success and their customers' needs in mind.",
        icon: "Users" as keyof typeof Icons,
        gradient: "from-purple-400 to-pink-400",
    },
    {
        title: "Resilient Architecture",
        description:
            "Building robust, scalable systems that adapt and thrive under any conditions.",
        icon: "Shield" as keyof typeof Icons,
        gradient: "from-orange-400 to-yellow-400",
    },
];

export function Culture({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-gray-50 via-slate-100 to-blue-100 py-16",
                className
            )}
            {...props}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0">
                {/* Animated geometric background */}
                <div className="absolute inset-0">
                    {/* Large floating shapes */}
                    <div className="animate-float absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl" />
                    <div
                        className="animate-float absolute top-40 right-32 h-48 w-48 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-2xl"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="animate-float absolute bottom-32 left-32 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-3xl"
                        style={{ animationDelay: "2s" }}
                    />

                    {/* Modern geometric patterns */}
                    <div className="absolute top-32 right-20 h-24 w-24 rotate-45 border-2 border-blue-300/20 bg-gradient-to-br from-blue-100/40 to-purple-100/40" />
                    <div
                        className="absolute right-40 bottom-40 h-32 w-32 rotate-12 border-2 border-purple-300/20 bg-gradient-to-br from-purple-100/40 to-pink-100/40"
                        style={{ animationDelay: "0.5s" }}
                    />
                    <div
                        className="absolute top-1/2 left-16 h-20 w-20 rotate-45 border-2 border-cyan-300/20 bg-gradient-to-br from-cyan-100/40 to-blue-100/40"
                        style={{ animationDelay: "1.5s" }}
                    />
                </div>

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <GeneralShell
                classNames={{
                    innerWrapper: "relative space-y-20",
                }}
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 rounded-full border border-blue-300/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                    >
                        <div className="animate-pulse-glow h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium tracking-wider text-blue-700 uppercase">
                            Our Culture & Values
                        </span>
                    </motion.div> */}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
                    >
                        The Principles That Drive Us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-3xl text-lg leading-relaxed text-balance text-blue-900 md:text-xl"
                    >
                        We strive to create meaningful, scalable solutions that
                        drive real change for modern organizations.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <ValueCard key={index} index={index} {...value} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mx-auto mt-40 max-w-4xl"
                >
                    <div className="relative rounded-3xl border border-blue-200/50 bg-white/90 p-8 shadow-xl backdrop-blur-sm md:p-12">
                        {/* Subtle decorative pattern */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-[0.02]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: "20px 20px",
                            }}
                        />

                        <div className="relative text-center">
                            <h3 className="text-2xl font-bold text-blue-900 md:text-3xl">
                                Ready to Experience the Future?
                            </h3>
                            <p className="mt-4 text-blue-900">
                                Join leading organizations that trust
                                FractalHive to power their AI transformation.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <Icons.Sparkles className="mr-2 h-5 w-5" />
                                        Schedule a Demo
                                        <Icons.ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-300 bg-white/80 text-blue-900 hover:border-gray-400 hover:bg-white"
                                    asChild
                                >
                                    <Link href="/about">
                                        Learn More About Us
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </GeneralShell>
        </section>
    );
}

function ValueCard({
    title,
    description,
    icon,
    gradient,
    index,
}: {
    title: string;
    description: string;
    icon: keyof typeof Icons;
    gradient: string;
} & { index: number }) {
    const IconComponent = Icons[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="group relative"
        >
            <div className="relative h-full rounded-3xl border border-blue-200/50 bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-blue-400/60 hover:bg-white hover:shadow-xl">
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 rounded-3xl opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                    }}
                />

                <div className="relative space-y-6">
                    <div className="flex items-start justify-between">
                        <div
                            className={cn(
                                "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl",
                                gradient
                            )}
                        >
                            <IconComponent className="h-7 w-7 text-white" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-blue-900 transition-colors duration-300 group-hover:text-blue-600">
                            {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-blue-900">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                        gradient
                    )}
                />
            </div>

            {/* External glow effect on hover */}
            <div
                className={cn(
                    "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20",
                    gradient
                )}
                style={{ transform: "scale(1.1)" }}
            />
        </motion.div>
    );
}
