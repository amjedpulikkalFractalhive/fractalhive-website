"use client";

import { motion } from "motion/react";

interface PageProps {
    title: string;
    imageUrl?: string;
}

export function Header({ title }: PageProps) {
    return (
        <div className="relative h-[40vh] w-full overflow-hidden ">
            {/* Main gradient overlay with dynamic colors */}
            <div className="absolute inset-0" />

            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Enhanced geometric grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.1]"
                    
                />

                {/* Large decorative circles */}
                <div className="animate-float absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/10 blur-3xl" />
                <div
                    className="animate-float absolute -top-10 -right-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/10 blur-3xl"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="animate-float absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/15 to-cyan-400/10 blur-3xl"
                    style={{ animationDelay: "1s" }}
                />

                {/* Floating geometric shapes with enhanced styling */}
                <div className="animate-float absolute top-24 left-24 h-24 w-24 rotate-45 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-cyan-300/20 backdrop-blur-sm" />
                <div
                    className="animate-float absolute top-40 right-40 h-20 w-20 rotate-12 rounded-full border border-white/15 bg-gradient-to-br from-purple-300/20 to-pink-300/10 backdrop-blur-sm"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="animate-float absolute bottom-40 left-40 h-28 w-28 rotate-45 border border-white/20 bg-gradient-to-br from-cyan-300/20 to-blue-300/10 backdrop-blur-sm"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="animate-float absolute right-24 bottom-24 h-16 w-16 rotate-12 rounded-lg border border-white/15 bg-gradient-to-br from-emerald-300/20 to-teal-300/10 backdrop-blur-sm"
                    style={{ animationDelay: "0.5s" }}
                />

                {/* Neural network pattern */}
                <div className="absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full bg-cyan-400/60" />
                <div
                    className="absolute top-1/3 right-1/3 h-1 w-1 animate-pulse rounded-full bg-purple-400/60"
                    style={{ animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-1/3 left-1/3 h-2 w-2 animate-pulse rounded-full bg-blue-400/60"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute right-1/4 bottom-1/4 h-1 w-1 animate-pulse rounded-full bg-pink-400/60"
                    style={{ animationDelay: "1.5s" }}
                />

                {/* Connecting lines */}
                <svg className="absolute inset-0 h-full w-full opacity-20">
                    <line
                        x1="25%"
                        y1="25%"
                        x2="33%"
                        y2="33%"
                        stroke="url(#headerGradient)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                    />
                    <line
                        x1="67%"
                        y1="33%"
                        x2="75%"
                        y2="75%"
                        stroke="url(#headerGradient)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                    />
                    <line
                        x1="33%"
                        y1="67%"
                        x2="75%"
                        y2="25%"
                        stroke="url(#headerGradient)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                    />
                    <defs>
                        <linearGradient
                            id="headerGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#06b6d4"
                                stopOpacity="0.6"
                            />
                            <stop
                                offset="50%"
                                stopColor="#8b5cf6"
                                stopOpacity="0.4"
                            />
                            <stop
                                offset="100%"
                                stopColor="#06b6d4"
                                stopOpacity="0.6"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 " />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-5xl font-bold  drop-shadow-2xl md:text-6xl lg:text-8xl text-blue-900"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/40 to-transparent"
                />
            </div>
        </div>
    );
}
