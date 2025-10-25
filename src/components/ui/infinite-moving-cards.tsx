"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface InfiniteMovingCardsProps {
    items: { logoUrl: string; name: string }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export function InfiniteMovingCards({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: InfiniteMovingCardsProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    };

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "20s"
                );
            } else if (speed === "normal") {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "40s"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-duration",
                    "80s"
                );
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, i) => (
                    <li
                        className="relative shrink-0 rounded-2xl p-4 px-8"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={i}
                    >
                        <blockquote className="flex items-center gap-4">
                            <div className="size-7 overflow-hidden">
                                <Image
                                    src={item.logoUrl}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="size-full object-cover"
                                />
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
}
