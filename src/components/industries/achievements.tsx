"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { GeneralShell } from "../globals/layouts";

const achievements = [
    {
        title: "10+ AI-Driven Pilots",
        subtitle: "Real-World Impact",
        description:
            "FractalHive has successfully delivered over 10 awareness-focused pilots across top-tier organizations in India, helping teams make smarter, faster decisions through conversational AI.",
        icon: "BarChart3" as keyof typeof Icons,
        gradient: "from-blue-900 to-cyan-400",
        number: "10+",
    },
    {
        title: "Paper to Prototype",
        subtitle: "2 Weeks to Reality",
        description:
            "We help organizations move from idea to functional prototype in under 2 weeks—enabling faster validation, and iteration.",
        icon: "Rocket" as keyof typeof Icons,
        gradient: "from-orange-400 to-yellow-400",
        number: "2",
    },
    {
        title: "3 Active SaaS Products",
        subtitle: "From R&D to Reality",
        description:
            "We've turned research into action—building and maintaining 3 independently deployable SaaS tools tailored for financial workflows, customer insights, and decision intelligence.",
        icon: "Building2" as keyof typeof Icons,
        gradient: "from-purple-400 to-pink-400",
        number: "3",
    },
];

export function Achievements({ className, ...props }: GenericProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-white via-slate-50/70 to-blue-50/80 py-10",
                className
            )}
            {...props}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px",
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="animate-float absolute top-20 left-20 h-32 w-32 rotate-45 rounded-lg border border-blue-200/30 bg-gradient-to-br from-blue-100/30 to-cyan-100/30" />
                <div
                    className="animate-float absolute top-32 right-32 h-24 w-24 rotate-12 rounded-full border border-green-200/30 bg-gradient-to-br from-green-100/30 to-emerald-100/30"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="animate-float absolute right-20 bottom-32 h-28 w-28 border border-purple-200/30 bg-gradient-to-br from-purple-100/30 to-pink-100/30"
                    style={{ animationDelay: "2s" }}
                />

                {/* Glowing orbs */}
                <div className="animate-float absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20 blur-3xl" />
                <div
                    className="animate-float absolute bottom-1/3 left-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-2xl"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <GeneralShell
                classNames={{
                    innerWrapper: "relative z-10 space-y-16",
                }}
            >
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                    >
                        <div className="animate-pulse-glow h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium tracking-wider text-blue-900 uppercase">
                            Our Achievements
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
                    >
                        Proven{" "}
                        <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                            Impact
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-3xl leading-relaxed text-balance text-gray-600 md:text-lg"
                    >
                        Real impact across organizations, with measurable
                        outcomes that reflect our commitment to transforming
                        business with purpose.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            index={index}
                            {...achievement}
                        />
                    ))}
                </div>
            </GeneralShell>
        </section>
    );
}

function AchievementCard({
    title,
    subtitle,
    description,
    icon,
    gradient,
    number,
    index,
}: {
    title: string;
    subtitle: string;
    description: string;
    icon: keyof typeof Icons;
    gradient: string;
    number: string;
} & { index: number }) {
    const IconComponent = Icons[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/80 p-1 shadow-2xl backdrop-blur-xl"
        >
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 p-8 backdrop-blur-sm">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div
                        className={cn(
                            "animate-float absolute top-4 right-4 h-16 w-16 rotate-45 rounded-lg border border-gray-200/30 opacity-30",
                            `bg-gradient-to-br ${gradient}`
                        )}
                    />
                    <div
                        className={cn(
                            "animate-float absolute bottom-4 left-4 h-12 w-12 rounded-full opacity-20 blur-lg",
                            `bg-gradient-to-r ${gradient}`
                        )}
                    />
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="flex items-start justify-between">
                        <div
                            className={cn(
                                "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110",
                                `bg-gradient-to-br ${gradient}`
                            )}
                        >
                            <IconComponent className="h-8 w-8 text-white" />
                        </div>

                        <div className="text-right">
                            <span
                                className={cn(
                                    "bg-gradient-to-br bg-clip-text text-3xl font-bold text-transparent md:text-4xl",
                                    gradient
                                )}
                            >
                                {number}
                            </span>
                            <div
                                className={cn(
                                    "mt-1 ml-auto h-1 w-8 rounded-full",
                                    `bg-gradient-to-r ${gradient}`
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div
                            className={cn(
                                "inline-block rounded-full px-3 py-1 text-xs font-medium text-white",
                                `bg-gradient-to-r ${gradient}`
                            )}
                        >
                            {subtitle}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl leading-tight font-bold text-gray-800">
                            {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                            {description}
                        </p>
                    </div>

                    <div className="flex gap-1 pt-2">
                        <div className="h-2 w-2 rounded-full bg-gray-300 transition-colors duration-300 group-hover:bg-gray-400" />
                        <div className="h-2 w-2 rounded-full bg-gray-200 transition-colors duration-300 group-hover:bg-gray-300" />
                        <div className="h-2 w-2 rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
