"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { GeneralShell } from "../shells";

export function Footer({ className, ...props }: GenericProps) {
    return (
        <footer
            className={cn(
                "relative overflow-hidden border-t border-blue-200/30 bg-gradient-to-br from-white via-blue-50/70 to-purple-50/80",
                className
            )}
            {...props}
        >
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric grid pattern */}
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

                {/* Floating geometric shapes */}
                <div className="animate-float absolute top-10 left-10 h-24 w-24 rotate-45 rounded-lg border border-blue-200/30 bg-gradient-to-br from-blue-100/30 to-purple-100/30" />
                <div
                    className="animate-float absolute top-32 right-20 h-16 w-16 rotate-12 rounded-full border border-purple-200/30 bg-gradient-to-br from-purple-100/30 to-cyan-100/30"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="animate-float absolute bottom-20 left-32 h-20 w-20 rotate-45 border border-cyan-200/30 bg-gradient-to-br from-cyan-100/30 to-blue-100/30"
                    style={{ animationDelay: "2s" }}
                />

                {/* Glowing orbs */}
                <div className="animate-float absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-2xl" />
                <div
                    className="animate-float absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-gradient-to-r from-purple-200/20 to-cyan-200/20 blur-xl"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70 backdrop-blur-sm" />
            <GeneralShell
                classNames={{
                    innerWrapper: "py-4",
                }}
            >
                <div className="relative z-10">
                    {/* <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-20">
                        <div className="space-y-4">
                            <div>
                                <Link
                                    href="/"
                                    title="Home"
                                    className="flex items-center gap-1 text-xl font-bold transition-all duration-300 hover:scale-105"
                                >
                                    <div className="animate-pulse-glow h-2 w-2 rounded-full bg-blue-500" />
                                    <div>
                                        <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                                            Fractal
                                        </span>
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            Hive
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <p className="max-w-md leading-relaxed text-balance text-gray-600">
                                {siteConfig.longDescription}
                            </p>
                        </div>

                        <div className="grid gap-10 md:grid-cols-3 md:gap-20">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Pages
                                </h4>
                                <div className="flex flex-col gap-3">
                                    {siteConfig.menu.map(({ name, href }) => (
                                        <FooterLink key={name} href={href}>
                                            {name}
                                        </FooterLink>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Other Links
                                </h4>
                                <div className="flex flex-col gap-3">
                                    {siteConfig.links &&
                                        Object.entries(siteConfig.links).map(
                                            ([name, href]) => (
                                                <FooterLink
                                                    key={name}
                                                    href={href}
                                                >
                                                    {name}
                                                </FooterLink>
                                            )
                                        )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Legal
                                </h4>
                                <div className="flex flex-col gap-3">
                                    <FooterLink href="/privacy">
                                        Privacy Policy
                                    </FooterLink>
                                    <FooterLink href="/terms">
                                        Terms of Service
                                    </FooterLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="bg-gray-300/50" /> */}

                    <div className="flex justify-center items-center  gap-5 ">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-gray-500"
                        >
                            <span>&copy; 2025</span>
                            <samp className="text-blue-900 font-bold ml-1"> 

                                {siteConfig.developer.name}
                            </samp>
                          
                            . <span>All rights reserved.</span>
                        </motion.p>

                        {/* {siteConfig.links && (
                            <div className="flex gap-4">
                                {Object.entries(siteConfig.links).map(
                                    ([name, href]) => {
                                        const Icon =
                                            Icons[name as keyof typeof Icons];
                                        return (
                                            <Link
                                                key={name}
                                                href={href}
                                                className="rounded-full border border-gray-200/50 bg-white/60 p-2 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                <Icon className="size-5" />
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        )} */}
                    </div>
                </div>
            </GeneralShell>
        </footer>
    );
}
