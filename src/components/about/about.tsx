"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface PageProps extends GenericProps {
    title: string;
}

export function About({ className, title, ...props }: PageProps) {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

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
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px",
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="animate-float absolute top-20 left-10 h-20 w-20 rotate-45 rounded-lg border border-blue-200/30 bg-gradient-to-br from-blue-100/30 to-purple-100/30" />
                <div
                    className="animate-float absolute top-40 right-20 h-16 w-16 rotate-12 rounded-full border border-purple-200/30 bg-gradient-to-br from-purple-100/30 to-cyan-100/30"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="animate-float absolute bottom-32 left-1/4 h-12 w-12 border border-cyan-200/30 bg-gradient-to-br from-cyan-100/30 to-blue-100/30"
                    style={{ animationDelay: "2s" }}
                />

                {/* Glowing orbs */}
                <div className="animate-float absolute top-1/3 right-1/3 h-32 w-32 rounded-full bg-gradient-to-r from-blue-200/15 to-purple-200/15 blur-2xl" />
            </div>

            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-between gap-10 p-8 py-10 md:flex-row md:gap-20 xl:max-w-[100rem]">
                <div className="flex w-full basis-1/2 justify-center">
                    <div className="flex flex-col items-start gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm"
                        >
                            <div className="animate-pulse-glow h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium tracking-wider text-blue-900 uppercase">
                                {title}
                            </span>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg leading-relaxed text-balance text-gray-700"
                            >
                                FractalHive Inc. emerged from a simple yet
                                powerful vision: to transform business processes
                                using Artificial Intelligence.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-lg leading-relaxed text-balance text-gray-700"
                            >
                                Founded by a team of Technologists, AI
                                researchers, and Domain experts, we recognized
                                that modern organizations needed more than just
                                another software platform—they needed
                                intelligent systems that understand real-world
                                complexity and adapt to changing needs.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-lg leading-relaxed text-balance text-gray-700"
                            >
                                Today, we&apos;re proud to be at the forefront
                                of AI-driven innovation, helping teams across
                                industries unlock new levels of efficiency,
                                insight, and user satisfaction through
                                purposeful technology design.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-xl font-semibold text-transparent"
                            >
                                Building the future of intelligent systems, one
                                conversation at a time.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Button
                                size="lg"
                                variant={
                                    pathname === "/" ? "default" : "outline"
                                }
                                className={cn(
                                    "group bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:scale-100 hover:from-blue-500 hover:to-purple-500",
                                    pathname !== "/" &&
                                        "border-blue-300 bg-white/80 text-blue-900 backdrop-blur-sm hover:border-blue-400 hover:bg-blue-50"
                                )}
                                asChild
                            >
                                <Link href="/contact">
                                    <span>Learn More</span>
                                    <Icons.ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                <div className="group aspect-[4/3] size-full basis-1/2 overflow-hidden rounded-3xl border border-blue-200/30 bg-gradient-to-br from-white/60 via-blue-50/40 to-purple-50/60 p-1 shadow-2xl backdrop-blur-sm">
                    <motion.div
                        style={{ scale }}
                        className="relative size-full overflow-hidden rounded-3xl"
                    >
                        <Image
                            src="https://picsum.photos/seed/9/1000/1000"
                            alt={title}
                            width={1000}
                            height={1000}
                            className="size-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/10" />

                        {/* Floating decorative elements */}
                        <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/30 backdrop-blur-sm" />
                        <div className="absolute bottom-4 left-4 h-6 w-6 rounded bg-white/20 backdrop-blur-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
