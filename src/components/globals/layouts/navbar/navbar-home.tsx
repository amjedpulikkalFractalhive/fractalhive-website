"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useNavbarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavbarHome() {
    const [isMenuHidden, setIsMenuHidden] = useState(false);
    const pathname = usePathname();

    const isMenuOpen = useNavbarStore((state) => state.isOpen);
    const setIsMenuOpen = useNavbarStore((state) => state.setIsOpen);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (isMenuOpen) return;
        if (latest > previous && latest > 150) setIsMenuHidden(true);
        else setIsMenuHidden(false);
    });

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={isMenuHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sticky inset-x-0 top-0 z-50 flex h-auto w-full items-center justify-center border-b border-primary/10 bg-background/90 backdrop-blur-xl"
            data-menu-open={isMenuOpen}
        >
            {/* Animated background pattern */}
            <div className="neural-dots absolute inset-0 opacity-20" />
            <div className="absolute inset-0 " />

            <nav
                className={cn(
                    "relative z-10 flex w-full max-w-5xl items-center justify-between gap-5 p-4 md:px-8 xl:max-w-[100rem]",
                    isMenuOpen && "border-b border-primary/20"
                )}
            >
                <button
                    aria-label="Mobile Menu Toggle Button"
                    aria-pressed={isMenuOpen}
                    className="rounded-xl border border-primary/20 bg-primary/5 p-2 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Icons.Menu className="size-6 text-primary" />
                </button>

                <Link
                    href="/"
                    title="Home"
                    className="flex items-center gap-2 text-xl font-bold transition-all duration-300 hover:scale-105"
                >
                    <Image
                        src="/logos/fractalhive_logo.png"
                        alt="Fractal Hive Logo"
                        width={32}
                        height={32}
                    />
                    <div>
                        <span className="text-blue-900">FractalHive Inc.</span>
                    </div>
                </Link>

                <ul className="hidden items-center gap-10 sm:flex">
                    {siteConfig.menu.map((item, index) => {
                        const active = isActive(item.href);
                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    className={cn(
                                        "group relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300",
                                        item.isDisabled &&
                                            "cursor-not-allowed opacity-50"
                                    )}
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : "_self"}
                                    onClick={(e) =>
                                        item.isDisabled && e.preventDefault()
                                    }
                                >
                                    {/* Animated background */}
                                    {active && (
                                        <motion.span
                                            layoutId="navbar-active-bg"
                                            className="absolute inset-0 rounded-lg bg-primary/10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}

                                    {/* Text */}
                                    <span
                                        className={cn(
                                            "relative z-10 transition-colors duration-300",
                                            active
                                                ? "text-primary"
                                                : "text-blue-900 group-hover:text-primary"
                                        )}
                                    >
                                        {item.name}
                                    </span>

                                    {/* Underline indicator */}
                                    <motion.span
                                        className="absolute -bottom-1 left-3 h-0.5 bg-gradient-to-r from-primary to-accent"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: active ? "calc(100% - 1.5rem)" : 0,
                                        }}
                                        whileHover={{
                                            width: "calc(100% - 1.5rem)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </motion.header>
    );
}