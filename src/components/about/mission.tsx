"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Mission({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative flex w-full justify-center overflow-hidden py-10",
                className
            )}
            {...props}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "35px 35px",
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="animate-float absolute top-20 right-20 h-24 w-24 rotate-45 rounded-lg border border-purple-200/30 bg-gradient-to-br from-purple-100/30 to-pink-100/30" />
                <div
                    className="animate-float absolute bottom-20 left-20 h-20 w-20 rotate-12 rounded-full border border-cyan-200/30 bg-gradient-to-br from-cyan-100/30 to-blue-100/30"
                    style={{ animationDelay: "1s" }}
                />

                {/* Glowing orbs */}
                <div className="animate-float absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-200/15 to-purple-200/15 blur-2xl" />
            </div>

            <div className="relative z-10 w-full max-w-5xl space-y-16 p-8 py-10 xl:max-w-[100rem]">
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 rounded-full border border-purple-200/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                    >
                        <div className="animate-pulse-glow h-2 w-2 rounded-full bg-purple-500" />
                        <span className="text-sm font-medium tracking-wider text-blue-900 uppercase">
                            Mission & Vision
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
                    >
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                            Guiding Principles
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-3xl leading-relaxed text-balance text-gray-600 md:text-lg"
                    >
                        The principles that shape everything we build and every
                        decision we make.
                    </motion.p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <MissionCard />
                    <VisionCard />
                </div>
            </div>
        </section>
    );
}

function MissionCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-white/95 via-blue-50/90 to-white/80 p-1 shadow-2xl backdrop-blur-xl"
        >
            <div className="relative rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 p-8 backdrop-blur-sm">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="animate-float absolute top-6 right-6 h-16 w-16 rotate-45 rounded-lg border border-blue-200/30 bg-gradient-to-br from-blue-100/40 to-cyan-100/40" />
                    <div className="animate-float absolute bottom-6 left-6 h-12 w-12 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20 blur-lg" />
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-500 shadow-lg transition-all duration-300 group-hover:scale-110">
                            <Icons.Gem className="size-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-900">
                                Our Mission
                            </h3>
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-900 to-cyan-400" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-700">
                            We build{" "}
                            <span className="bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text font-semibold text-transparent">
                                intelligent yet simple tools
                            </span>{" "}
                            for modern businesses using next-generation
                            technologies—to eliminate complexity while enhancing
                            machine capability—making technology more
                            human-centered, and dependable.
                        </p>

                        <div className="space-y-3">
                            {[
                                "Ethical Intelligence",
                                "Simplified Systems",
                                "Human-Centricity",
                            ].map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.8 + index * 0.1,
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-pink-500 shadow-sm">
                                        <Icons.Check className="size-3 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-blue-900">
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function VisionCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group relative overflow-hidden rounded-3xl border border-purple-200/50 bg-gradient-to-br from-white/95 via-purple-50/90 to-white/80 p-1 shadow-2xl backdrop-blur-xl"
        >
            <div className="relative rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 p-8 backdrop-blur-sm">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="animate-float absolute top-6 right-6 h-16 w-16 rotate-45 rounded-lg border border-purple-200/30 bg-gradient-to-br from-purple-100/40 to-pink-100/40" />
                    <div className="animate-float absolute bottom-6 left-6 h-12 w-12 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-lg" />
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-purple-500 shadow-lg transition-all duration-300 group-hover:scale-110">
                            <Icons.Sparkles className="size-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-900">
                                Our Vision
                            </h3>
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-900 to-pink-400" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-700">
                            We envision a world where every organization can
                            harness the power of modern AI{" "}
                            <span className="bg-gradient-to-r from-blue-900 to-cyan-900 bg-clip-text font-semibold text-transparent">
                                affordably, responsibly, and with trust
                            </span>
                            —empowering people, not replacing them.
                        </p>

                        <div className="space-y-3">
                            {[
                                "Accessible Intelligence",
                                "Trusted Adoption",
                                "Empowered Workforce",
                            ].map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1 + index * 0.1,
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-pink-500 shadow-sm">
                                        <Icons.Check className="size-3 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-blue-900">
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
