"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { GeneralShell } from "../globals/layouts";
import { Icons } from "../icons";
import { Button } from "../ui/button";

const carouselItems = [
    {
        title: "Work | Play | Learn",
        description:
            "We balance innovation with enjoyment, creating an environment where groundbreaking work meets creative exploration and continuous learning.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center",
        gradient: "from-cyan-500/20 to-blue-600/10",
        textColor: "text-cyan-500",
    },
    {
        title: "Diversity | Equality | Inclusion",
        description:
            "Committed to building an inclusive workplace where diverse perspectives drive innovation and everyone has the opportunity to thrive and contribute.",
        image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1920&h=1080&fit=crop&crop=center",
        gradient: "from-rose-500/20 to-pink-600/10",
        textColor: "text-rose-500",
    },
];

export function Culture({ className, ...props }: GenericProps) {
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

    return (
        <section
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-white via-slate-50/70 to-blue-50/80 py-10",
                className
            )}
            {...props}
        >
            <GeneralShell>
                <div className="relative space-y-12">
                    <div className="relative z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-2 text-center"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                                Our{" "}
                                <span className="bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                                    Culture
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
                                Discover what makes FractalHive a unique place
                                to work and grow
                            </p>
                        </motion.div>

                        {/* Carousel */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="glass-panel relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md"
                            >
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${activeCarouselIndex * 100}%)`,
                                    }}
                                >
                                    {carouselItems.map((item, index) => (
                                        <CarouselSlide
                                            key={index}
                                            item={item}
                                            index={index}
                                            isActive={
                                                index === activeCarouselIndex
                                            }
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Carousel Controls */}
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setActiveCarouselIndex(
                                            activeCarouselIndex === 0
                                                ? carouselItems.length - 1
                                                : activeCarouselIndex - 1
                                        )
                                    }
                                    className="glass-panel rounded-full border-white/30 bg-white/20 text-blue-900 backdrop-blur-sm transition-colors duration-300 hover:bg-white/30"
                                >
                                    <Icons.ChevronLeft className="h-4 w-4" />
                                </Button>

                                <div className="flex gap-2">
                                    {carouselItems.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setActiveCarouselIndex(index)
                                            }
                                            className={cn(
                                                "h-2 w-8 rounded-full transition-colors duration-300",
                                                index === activeCarouselIndex
                                                    ? "bg-gradient-to-r from-blue-900 to-purple-500 shadow-lg"
                                                    : "bg-slate-300/60 hover:bg-slate-400/60"
                                            )}
                                        />
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setActiveCarouselIndex(
                                            activeCarouselIndex ===
                                                carouselItems.length - 1
                                                ? 0
                                                : activeCarouselIndex + 1
                                        )
                                    }
                                    className="glass-panel rounded-full border-white/30 bg-white/20 text-slate-700 backdrop-blur-sm transition-colors duration-300 hover:bg-white/30"
                                >
                                    <Icons.ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralShell>
        </section>
    );
}

function CarouselSlide({
    item,
    isActive,
}: {
    item: (typeof carouselItems)[0];
    index: number;
    isActive: boolean;
}) {
    return (
        <div className="relative min-w-full">
            <div className="relative h-96 overflow-hidden md:h-[500px]">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                />

                {/* Enhanced overlay with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/60 to-slate-700/20" />

                {/* Neural pattern overlay */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-12 left-12 h-0.5 w-32 animate-pulse bg-gradient-to-r from-white/60 to-transparent" />
                    <div className="absolute right-16 bottom-24 h-0.5 w-24 animate-pulse bg-gradient-to-l from-white/40 to-transparent delay-700" />
                    <div className="absolute top-1/3 right-12 h-24 w-0.5 animate-pulse bg-gradient-to-b from-white/50 to-transparent delay-1000" />
                    <div className="absolute top-20 left-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-white/60 delay-300" />
                    <div className="absolute right-1/4 bottom-32 h-1 w-1 animate-pulse rounded-full bg-white/50 delay-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                    <div className="max-w-2xl space-y-4">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 30,
                            }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
                        >
                            {item.title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 30,
                            }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="leading-relaxed text-white/95 drop-shadow md:text-lg"
                        >
                            {item.description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
