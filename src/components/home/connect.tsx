"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

export function Connect({ className, ...props }: GenericProps) {
    return (
        <section className={cn("py-10", className)} {...props}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                {/* Main card with glassmorphism effect */}
                <div className="relative overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 p-1 shadow-2xl backdrop-blur-xl">
                    <div className="relative rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-white/60 p-12 text-center backdrop-blur-sm">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            {/* Floating geometric shapes */}
                            <div className="animate-float absolute top-10 left-10 h-24 w-24 rotate-45 border-2 border-blue-300/20 bg-gradient-to-br from-blue-100/50 to-purple-100/50" />
                            <div
                                className="animate-float absolute top-20 right-16 h-16 w-16 rotate-12 border-2 border-purple-300/20 bg-gradient-to-br from-purple-100/50 to-pink-100/50"
                                style={{ animationDelay: "1s" }}
                            />
                            <div
                                className="animate-float absolute bottom-16 left-20 h-20 w-20 rotate-45 border-2 border-cyan-300/20 bg-gradient-to-br from-cyan-100/50 to-blue-100/50"
                                style={{ animationDelay: "2s" }}
                            />
                            <div
                                className="animate-float absolute right-10 bottom-10 h-32 w-32 rotate-12 border-2 border-emerald-300/20 bg-gradient-to-br from-emerald-100/50 to-teal-100/50"
                                style={{ animationDelay: "0.5s" }}
                            />

                            {/* Glowing orbs */}
                            <div className="animate-float absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-2xl" />
                            <div
                                className="animate-float absolute right-1/3 bottom-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-xl"
                                style={{ animationDelay: "1.5s" }}
                            />

                            {/* Subtle grid pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.02]"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "30px 30px",
                                }}
                            />
                        </div>

                        <div className="relative z-10 space-y-8">
                            {/* Icon with enhanced styling */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-purple-600 shadow-xl"
                            >
                                <Icons.Sparkles className="h-10 w-10 animate-pulse text-white" />
                            </motion.div>

                            {/* Enhanced heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
                            >
                                Ready to Transform{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Your Future?
                                </span>
                            </motion.h2>

                            {/* Description with better contrast */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="mx-auto max-w-3xl text-lg leading-relaxed text-blue-900 md:text-xl"
                            >
                                Let&apos;s discuss how FractalHive&apos;s
                                AI-powered solutions can help your institution
                                achieve unprecedented efficiency, enhanced
                                customer experiences, and sustainable growth in
                                the digital era.
                            </motion.p>

                            {/* Enhanced buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="flex flex-col gap-6 sm:flex-row sm:justify-center"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="group bg-gradient-to-r from-blue-900 to-purple-600 px-6 text-white shadow-xl hover:from-blue-500 hover:to-purple-500 sm:px-8"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center"
                                    >
                                        <Icons.Sparkles className="mr-2 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                                        <span className="text-sm font-medium sm:text-base">
                                            Start Your AI Journey
                                        </span>
                                        <Icons.ArrowRight className="ml-2 hidden h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:block sm:h-5 sm:w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="group border-gray-300 bg-white/80 px-6 text-gray-700 backdrop-blur-sm hover:border-gray-400 hover:bg-white sm:px-8"
                                >
                                    <Link
                                        href="/products"
                                        className="flex items-center justify-center"
                                    >
                                        <Icons.Video className="mr-2 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                                        <span className="text-sm font-medium sm:text-base">
                                            Explore Solutions
                                        </span>
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* Enhanced feature highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="flex flex-wrap justify-center gap-6 pt-8"
                            >
                                <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur-sm">
                                    <Icons.Check className="h-4 w-4 text-blue-900" />
                                    <span>99.9% Uptime Guarantee</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur-sm">
                                    <Icons.Check className="h-4 w-4 text-blue-900" />
                                    <span>24/7 AI Monitoring</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur-sm">
                                    <Icons.Check className="h-4 w-4 text-blue-900" />
                                    <span>Enterprise Security</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Enhanced decorative corner elements */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="absolute top-8 right-8 text-blue-400/40"
                        >
                            <Icons.BarChart3 className="h-6 w-6" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, rotate: 180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="absolute bottom-8 left-8 text-purple-400/40"
                        >
                            <Icons.TrendingUp className="h-6 w-6" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="absolute top-1/4 left-12 text-blue-400/30"
                        >
                            <Icons.Building2 className="h-5 w-5" />
                        </motion.div>
                    </div>
                </div>

                {/* Enhanced outer glow effect */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-blue-200/20 blur-3xl" />
            </motion.div>
        </section>
    );
}
