"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { Icons } from "../icons";

const CONTACT_METHODS = [
    {
        icon: "Mail",
        label: "Email",
        value: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        icon: "Phone",
        label: "Phone",
        value: siteConfig.contact.phone,
        href: null,
    },
] as const;

export function ContactInfo({ className, ...props }: GenericProps) {
    return (
        <div className={cn("basis-1/2 space-y-16", className)} {...props}>
            <div className="flex flex-col items-start gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Get in <span className="text-accent">Touch</span>
                </motion.h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {CONTACT_METHODS.map((method, index) => {
                        const Icon = Icons[method.icon];
                        return (
                            <motion.div
                                key={method.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4 + index * 0.2,
                                }}
                                className="group flex flex-col items-start gap-4 rounded-3xl bg-muted/50 p-6 transition-colors duration-300 hover:bg-accent/10"
                            >
                                <div className="rounded-full bg-accent/10 p-3 text-accent transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="size-6" />
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-medium uppercase">
                                        {method.label}
                                    </p>
                                    {method.href ? (
                                        <Link
                                            href={method.href}
                                            className="block text-lg text-muted-foreground transition-colors hover:text-accent"
                                        >
                                            {method.value}
                                        </Link>
                                    ) : (
                                        <p className="text-lg text-muted-foreground">
                                            {method.value}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="space-y-4">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-2xl font-semibold"
                >
                    Follow Us
                </motion.h3>

                {siteConfig.links && (
                    <div className="flex flex-wrap gap-4">
                        {Object.entries(siteConfig.links).map(
                            ([name, href], i) => {
                                const Icon = Icons[name as keyof typeof Icons];
                                return (
                                    <motion.div
                                        key={name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1 + i * 0.1,
                                        }}
                                    >
                                        <Link
                                            href={href}
                                            className="group flex size-12 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors duration-300 hover:bg-accent/10 hover:text-accent"
                                        >
                                            <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                                        </Link>
                                    </motion.div>
                                );
                            }
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
