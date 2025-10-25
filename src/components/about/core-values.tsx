"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const coreValues = [
    {
        title: "Be 10× Better",
        description:
            "We strive for transformative impact, not incremental change. Our solutions don't just improve existing processes—they reimagine what's possible using modern technologies.",
        icon: "Sparkles" as keyof typeof Icons,
        color: "blue",
    },
    {
        title: "Simplicity Over Extravagance",
        description:
            "We choose clarity and remove clutter. Every feature, every interface, every decision is filtered through the lens of simplicity without sacrificing the capability.",
        icon: "Gem" as keyof typeof Icons,
        color: "green",
    },
    {
        title: "Honesty Over Profitability",
        description:
            "We prioritize trust, transparency, and ethics in everything we do. Long-term relationships and ethical practices will always take precedence over short-term gains.",
        icon: "CheckSquare" as keyof typeof Icons,
        color: "purple",
    },
    {
        title: "Innovation Through Collaboration",
        description:
            "We believe the best solutions emerge from diverse perspectives working together. Our approach combines human insight with AI capabilities to create truly transformative outcomes.",
        icon: "Users" as keyof typeof Icons,
        color: "orange",
    },
];

const colorVariants = {
    blue: {
        gradient: "from-blue-900 to-cyan-500",
        border: "border-blue-200/50",
        bgGradient: "from-white/95 via-blue-50/90 to-white/80",
        innerBg: "from-white/80 via-white/70 to-white/60",
        text: "text-blue-900",
        iconBg: "from-blue-900 to-cyan-500",
        decorBorder: "border-blue-200/30",
        decorBg: "from-blue-100/40 to-cyan-100/40",
        glow: "from-blue-200/20 to-cyan-200/20",
    },
    green: {
        gradient: "from-green-500 to-emerald-500",
        border: "border-emerald-200/50",
        bgGradient: "from-white/95 via-emerald-50/90 to-white/80",
        innerBg: "from-white/80 via-white/70 to-white/60",
        text: "text-emerald-600",
        iconBg: "from-emerald-500 to-teal-500",
        decorBorder: "border-emerald-200/30",
        decorBg: "from-emerald-100/40 to-teal-100/40",
        glow: "from-emerald-200/20 to-teal-200/20",
    },
    purple: {
        gradient: "from-purple-500 to-pink-500",
        border: "border-purple-200/50",
        bgGradient: "from-white/95 via-purple-50/90 to-white/80",
        innerBg: "from-white/80 via-white/70 to-white/60",
        text: "text-purple-600",
        iconBg: "from-purple-500 to-pink-500",
        decorBorder: "border-purple-200/30",
        decorBg: "from-purple-100/40 to-pink-100/40",
        glow: "from-purple-200/20 to-pink-200/20",
    },
    orange: {
        gradient: "from-orange-500 to-yellow-500",
        border: "border-orange-200/50",
        bgGradient: "from-white/95 via-orange-50/90 to-white/80",
        innerBg: "from-white/80 via-white/70 to-white/60",
        text: "text-orange-600",
        iconBg: "from-orange-500 to-yellow-500",
        decorBorder: "border-orange-200/30",
        decorBg: "from-orange-100/40 to-yellow-100/40",
        glow: "from-orange-200/20 to-yellow-200/20",
    },
};

export function CoreValues({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative flex w-full justify-center overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px",
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="animate-float absolute top-32 left-16 h-20 w-20 rotate-45 rounded-lg border border-blue-200/30 bg-gradient-to-br from-blue-100/30 to-cyan-100/30" />
                <div
                    className="animate-float absolute top-16 right-32 h-16 w-16 rotate-12 rounded-full border border-emerald-200/30 bg-gradient-to-br from-emerald-100/30 to-teal-100/30"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="animate-float absolute right-16 bottom-32 h-24 w-24 border border-purple-200/30 bg-gradient-to-br from-purple-100/30 to-pink-100/30"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="animate-float absolute bottom-16 left-32 h-18 w-18 rotate-45 rounded-lg border border-orange-200/30 bg-gradient-to-br from-orange-100/30 to-yellow-100/30"
                    style={{ animationDelay: "0.5s" }}
                />

                {/* Glowing orbs */}
                <div className="animate-float absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-blue-200/15 to-purple-200/15 blur-3xl" />
                <div
                    className="animate-float absolute bottom-1/3 left-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-emerald-200/15 to-cyan-200/15 blur-2xl"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl space-y-16 p-8 py-10 xl:max-w-[100rem]">
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 rounded-full border border-emerald-200/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                    >
                        <div className="animate-pulse-glow h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-sm font-medium tracking-wider text-emerald-600 uppercase">
                            Core Values
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
                    >
                        What{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Drives Us
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto max-w-3xl leading-relaxed text-balance text-gray-600 md:text-lg"
                    >
                        The principles that guide our work, shape our culture,
                        and define our approach to building transformative
                        solutions.
                    </motion.p>
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative overflow-hidden rounded-full border border-emerald-200/50 bg-gradient-to-br from-white/95 via-emerald-50/90 to-white/80 p-1 shadow-2xl backdrop-blur-xl">
                            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                    <Icons.Zap className="h-10 w-10 animate-pulse text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <svg
                        className="absolute inset-0 h-full w-full"
                        style={{ zIndex: 1 }}
                    >
                        {coreValues.map((_, index) => {
                            const angle = (index * 90 - 45) * (Math.PI / 180);
                            const radius = 200;
                            const centerX = 50;
                            const centerY = 50;
                            const endX =
                                centerX + (radius / 8) * Math.cos(angle);
                            const endY =
                                centerY + (radius / 8) * Math.sin(angle);

                            return (
                                <motion.line
                                    key={index}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{
                                        pathLength: 1,
                                        opacity: 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: 1 + index * 0.2,
                                    }}
                                    x1={`${centerX}%`}
                                    y1={`${centerY}%`}
                                    x2={`${endX}%`}
                                    y2={`${endY}%`}
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                />
                            );
                        })}
                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#10b981"
                                    stopOpacity="0.3"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#06b6d4"
                                    stopOpacity="0.1"
                                />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                        {coreValues.map((value, index) => (
                            <ValueNode
                                key={index}
                                value={value}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="pt-8 text-center"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-200/20 via-blue-200/10 to-purple-200/20 blur-xl" />
                        <div className="relative rounded-2xl border border-gray-200/50 bg-white/80 px-8 py-6 shadow-lg backdrop-blur-sm">
                            <blockquote className="text-lg font-medium text-blue-900 md:text-xl">
                                &ldquo;Excellence is not a destination, but a
                                journey of continuous improvement.&rdquo;
                            </blockquote>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ValueNode({
    value,
    index,
}: {
    value: (typeof coreValues)[0];
    index: number;
}) {
    const colors = colorVariants[value.color as keyof typeof colorVariants];
    const IconComponent = Icons[value.icon];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl border p-1 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:scale-105",
                colors.border,
                `bg-gradient-to-br ${colors.bgGradient}`
            )}
        >
            <div
                className={cn(
                    "relative rounded-3xl p-8 backdrop-blur-sm",
                    `bg-gradient-to-br ${colors.innerBg}`
                )}
            >
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div
                        className={cn(
                            "animate-float absolute top-6 right-6 h-16 w-16 rotate-45 rounded-lg border",
                            colors.decorBorder,
                            `bg-gradient-to-br ${colors.decorBg}`
                        )}
                    />
                    <div
                        className={cn(
                            "animate-float absolute bottom-6 left-6 h-12 w-12 rounded-full blur-lg",
                            `bg-gradient-to-r ${colors.glow}`
                        )}
                    />
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="flex items-start gap-4">
                        <div
                            className={cn(
                                "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-colors duration-300 group-hover:scale-110",
                                `bg-gradient-to-br ${colors.iconBg}`
                            )}
                        >
                            <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3
                                className={cn(
                                    "text-xl font-bold transition-colors duration-300",
                                    colors.text
                                )}
                            >
                                {value.title}
                            </h3>
                            <div
                                className={cn(
                                    "mt-2 h-1 w-16 rounded-full",
                                    `bg-gradient-to-r ${colors.gradient}`
                                )}
                            />
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-700">
                        {value.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                        <div
                            className={cn(
                                "h-px flex-1 to-transparent",
                                `bg-gradient-to-r ${colors.gradient}`
                            )}
                        />
                        <div
                            className={cn(
                                "h-2 w-2 rounded-full",
                                `bg-gradient-to-r ${colors.gradient}`
                            )}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
