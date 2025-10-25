"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
    {
        title: "AI-Powered Orchestration Platform",
        subtitle: "Advanced Analytics & Automation",
        description:
            "Transform your banking operations with our comprehensive AI platform that delivers streamlined operation, real-time insights & simplified product management. Built specifically for commercial banks to enhance operational efficiency and customer satisfaction through workflow automation.",
        longDescription:
            "Our flagship product combines machine learning algorithms with banking domain expertise to provide unprecedented visibility into your operations. From product management to deal closure, make data-driven decisions that drive growth and profitability.",
        status: "Available Now",
        statusColor: "bg-gradient-to-r from-green-500 to-emerald-600",
        icon: "BarChart3" as keyof typeof Icons,
        features: [
            "Automated deal management",
            "Embedded profitability engine",
            "Structured role-based workflows",
            "Auto-routed by role and products",
            "Optimize operations with actionable insights",
            "Seamless integration with core banking systems",
        ],
        benefits: [
            "Grow your books without adding headcount",
            "Improve deal turnaround times by 50%",
            "Streamline commercial banking operations",
        ],
        buttonText: "Explore Features",
        buttonVariant: "default" as const,
        gradient: "from-blue-500/10 to-indigo-600/5",
        borderColor: "border-blue-500/20 hover:border-blue-500/40",
        iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    },
    {
        title: "Intelligent Product Hub",
        subtitle: "Centralized Product Management with added Insights",
        description:
            "Streamline your banking product lifecycle with our intelligent hub that centralizes product configuration, pricing management, and deployment. Designed for commercial banks to efficiently manage diverse product portfolios while ensuring consistency and compliance across all channels.",
        longDescription:
            "Our comprehensive product management platform enables banks to create, configure, and deploy financial products with unprecedented speed and flexibility. From simple deposits to complex lending products, manage everything through a unified interface with built-in compliance checks and automated workflows.",
        status: "Beta Access",
        statusColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
        icon: "Sparkles" as keyof typeof Icons,
        features: [
            "Drag-and-drop product builder",
            "Modularized product architecture",
            "Multi-channel deployment",
            "Compliance rule automation",
            "Product performance analytics",
            "Version control and rollback",
        ],
        benefits: [
            "Launch new products 80% faster",
            "Reduce configuration errors by 90%",
            "Ensure consistent pricing across channels",
        ],
        buttonText: "Request Beta Access",
        buttonVariant: "outline" as const,
        gradient: "from-purple-500/10 to-pink-600/5",
        borderColor: "border-purple-500/20 hover:border-purple-500/40",
        iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    },
    {
        title: "QuoteSphere",
        subtitle: "Comprehensive Commercial Banking Platform",
        description:
            "QuoteSphere is an AI-powered deal lifecycle platform for commercial banks, enabling RMs, Credit, Legal, and Docs teams to collaborate seamlessly with workflows, SLAs, approvals, and profitability insights.",
        longDescription:
            "Powering end-to-end deal orchestration for banks—integrating workflows, SLAs, approvals, and profitability. Extend it with Customer 360°, Service Pod, Analytics HQ, Product Catalog, and Contract Vault to create a comprehensive commercial banking platform that enhances collaboration and accelerates deal closure.",
        status: "Coming Soon",
        statusColor: "bg-gradient-to-r from-orange-500 to-red-600",
        icon: "Building2" as keyof typeof Icons,
        features: [
            "AI-powered deal orchestration",
            "Approval routing automation",
            "Customer 360° view integration",
            "SLA management and tracking",
            "Contract Vault, Analytics HQ & Alert Central",
            "Inbuilt Product & Service Catalog",
        ],
        benefits: [
            "Accelerate deal closure by 60%",
            "Improve cross-team collaboration",
            "Streamline compliance workflows",
        ],
        buttonText: "Join Waitlist",
        buttonVariant: "secondary" as const,
        gradient: "from-orange-500/10 to-amber-600/5",
        borderColor: "border-orange-500/20 hover:border-orange-500/40",
        iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    },
];

export function Products({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-32 py-10", className)} {...props}>
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Geometric Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />
                    <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl" />
                    <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/8 to-emerald-500/5 blur-3xl" />

                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 left-10 h-0.5 w-32 animate-pulse bg-gradient-to-r from-blue-500/40 to-transparent" />
                        <div className="absolute top-40 right-20 h-0.5 w-24 animate-pulse bg-gradient-to-l from-purple-500/40 to-transparent delay-700" />
                        <div className="absolute bottom-32 left-1/3 h-0.5 w-40 animate-pulse bg-gradient-to-r from-cyan-500/40 to-transparent delay-1000" />
                    </div>

                    {/* Neural dots */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-16 left-20 h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                        <div className="absolute top-60 right-32 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500 delay-500" />
                        <div className="absolute bottom-40 left-16 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500 delay-1000" />
                        <div className="absolute top-32 right-1/4 h-1 w-1 animate-pulse rounded-full bg-emerald-500 delay-300" />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="glass-panel rounded-full border border-white/20 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-sm">
                            <p className="text-sm font-medium tracking-wider text-blue-900 uppercase">
                                Our Product Suite
                            </p>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
                    >
                        Transforming Banking with{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            AI Innovation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto max-w-4xl text-lg text-balance text-slate-600 md:text-xl"
                    >
                        Our comprehensive AI-powered platform is designed
                        specifically for financial institutions, enabling
                        smarter decisions, enhanced customer experiences, and
                        operational excellence in the digital age.
                    </motion.p>
                </div>
            </div>

            {/* Products List */}
            <div className="space-y-16">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative mx-4 overflow-hidden rounded-3xl"
            >
                {/* Dark geometric background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

                {/* Neural network pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-8 left-12 h-0.5 w-64 animate-pulse bg-gradient-to-r from-blue-400/60 to-transparent" />
                    <div className="absolute right-20 bottom-16 h-0.5 w-48 animate-pulse bg-gradient-to-l from-purple-400/60 to-transparent delay-700" />
                    <div className="absolute top-1/3 right-12 h-40 w-0.5 animate-pulse bg-gradient-to-b from-cyan-400/60 to-transparent delay-1000" />
                    <div className="absolute bottom-1/3 left-20 h-32 w-0.5 animate-pulse bg-gradient-to-t from-emerald-400/60 to-transparent delay-300" />
                </div>

                {/* Neural dots */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-12 left-16 h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                    <div className="absolute right-24 bottom-20 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 delay-500" />
                    <div className="absolute top-1/2 left-1/3 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 delay-1000" />
                    <div className="absolute right-1/3 bottom-1/4 h-1 w-1 animate-pulse rounded-full bg-emerald-400 delay-700" />
                </div>

                <div className="relative z-10 space-y-6 p-12 text-center">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                        Ready to Transform Your{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Banking Operations?
                        </span>
                    </h3>
                    <p className="mx-auto max-w-2xl text-gray-300 md:text-lg">
                        Join leading financial institutions already using our AI
                        solutions to drive innovation and deliver exceptional
                        customer experiences.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                            asChild
                        >
                            <Link href="/contact">
                                Schedule a Demo
                                <Icons.Calendar className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Background Effects */}
                <div className="absolute -top-24 -left-24 size-48 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl" />
                <div className="absolute -right-24 -bottom-24 size-48 rounded-full bg-gradient-to-tr from-purple-500/15 to-transparent blur-3xl" />
            </motion.div>
        </section>
    );
}

function ProductCard({
    product,
    index,
}: {
    product: (typeof products)[0];
    index: number;
}) {
    const router = useRouter();

    const IconComponent = Icons[product.icon];
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="group relative overflow-hidden rounded-3xl"
        >
            {/* Alternating background sections */}
            {isEven ? (
                // Light glassmorphism section
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
            ) : (
                // Dark geometric section
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
            )}

            {/* Neural pattern overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 h-0.5 w-24 animate-pulse bg-gradient-to-r from-blue-400/60 to-transparent" />
                <div className="absolute right-8 bottom-12 h-0.5 w-20 animate-pulse bg-gradient-to-l from-purple-400/60 to-transparent delay-700" />
                <div className="absolute top-1/3 right-12 h-16 w-0.5 animate-pulse bg-gradient-to-b from-cyan-400/60 to-transparent delay-500" />
                {isEven ? (
                    <div className="absolute top-12 left-12 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500 delay-300" />
                ) : (
                    <div className="absolute top-12 left-12 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 delay-300" />
                )}
            </div>

            {/* Glass effect overlay */}
            <div
                className={cn(
                    "glass-panel absolute inset-0 rounded-3xl backdrop-blur-sm transition-colors duration-500",
                    isEven
                        ? "border border-slate-200/40 bg-white/60 group-hover:border-slate-300/60 group-hover:bg-white/80"
                        : "border border-white/20 bg-white/5 group-hover:border-white/30 group-hover:bg-white/10"
                )}
            />

            <div className="relative z-10 grid gap-8 p-8 md:p-12 lg:grid-cols-2">
                {/* Content */}
                <div className={cn("space-y-6", !isEven && "lg:order-2")}>
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + index * 0.2,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className={cn(
                                    "flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                                    isEven
                                        ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                                        : "bg-blue-400/20 group-hover:bg-blue-400/30"
                                )}
                            >
                                <IconComponent
                                    className={cn(
                                        "size-7",
                                        isEven
                                            ? "text-blue-600"
                                            : "text-blue-400"
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.2,
                                }}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-semibold text-white",
                                    product.statusColor
                                )}
                            >
                                {product.status}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4 + index * 0.2,
                            }}
                            className="space-y-2"
                        >
                            <h2
                                className={cn(
                                    "text-2xl font-bold transition-colors duration-300 md:text-3xl",
                                    isEven
                                        ? "text-slate-900 group-hover:text-blue-600"
                                        : "text-white group-hover:text-blue-400"
                                )}
                            >
                                {product.title}
                            </h2>
                            <p
                                className={cn(
                                    "text-lg font-medium",
                                    isEven ? "text-slate-600" : "text-gray-300"
                                )}
                            >
                                {product.subtitle}
                            </p>
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.2,
                        }}
                        className="space-y-4"
                    >
                        <p
                            className={cn(
                                "text-base leading-relaxed",
                                isEven ? "text-slate-700" : "text-gray-300"
                            )}
                        >
                            {product.description}
                        </p>
                        <p
                            className={cn(
                                "text-sm leading-relaxed",
                                isEven ? "text-slate-600" : "text-gray-400"
                            )}
                        >
                            {product.longDescription}
                        </p>
                    </motion.div>

                    {/* Key Benefits */}
                    <div className="space-y-3">
                        <h4
                            className={cn(
                                "text-sm font-semibold tracking-wider uppercase",
                                isEven ? "text-slate-600" : "text-gray-400"
                            )}
                        >
                            Key Benefits
                        </h4>
                        <div className="space-y-2">
                            {product.benefits.map((benefit, benefitIndex) => (
                                <motion.div
                                    key={benefitIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay:
                                            0.8 +
                                            index * 0.2 +
                                            benefitIndex * 0.1,
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className={cn(
                                            "flex size-6 items-center justify-center rounded-full",
                                            isEven
                                                ? "bg-blue-500/10"
                                                : "bg-blue-400/20"
                                        )}
                                    >
                                        <Icons.TrendingUp
                                            className={cn(
                                                "size-3",
                                                isEven
                                                    ? "text-blue-600"
                                                    : "text-blue-400"
                                            )}
                                        />
                                    </div>
                                    <span
                                        className={cn(
                                            "text-sm font-medium",
                                            isEven
                                                ? "text-slate-700"
                                                : "text-gray-300"
                                        )}
                                    >
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                        className="pt-4"
                    >
                        <Button
                            variant={product.buttonVariant}
                            size="lg"
                            className={cn(
                                "group/button font-semibold transition-all duration-300",
                                isEven
                                    ? "border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                                    : "glass-panel border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/20"
                            )}
                            onClick={() => router.push("/contact")}
                        >
                            {product.buttonText}
                            {!product.status.includes("Coming") && (
                                <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                            )}
                        </Button>
                    </motion.div>
                </div>

                {/* Features List */}
                <div className={cn("space-y-6", !isEven && "lg:order-1")}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.2,
                        }}
                        className="space-y-4"
                    >
                        <h4
                            className={cn(
                                "text-lg font-bold",
                                isEven ? "text-slate-900" : "text-white"
                            )}
                        >
                            Core Features
                        </h4>
                        <div className="grid gap-3">
                            {product.features.map((feature, featureIndex) => (
                                <motion.div
                                    key={featureIndex}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? 20 : -20,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay:
                                            1 +
                                            index * 0.2 +
                                            featureIndex * 0.1,
                                    }}
                                    className={cn(
                                        "group/feature flex items-start gap-3 rounded-xl p-4 transition-colors duration-300",
                                        isEven
                                            ? "border border-slate-200/60 bg-white/80 hover:border-slate-300/80 hover:bg-white/90"
                                            : "border border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/20"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex size-6 items-center justify-center rounded-full transition-colors duration-300",
                                            isEven
                                                ? "bg-blue-500/10 group-hover/feature:bg-blue-500/20"
                                                : "bg-blue-400/20 group-hover/feature:bg-blue-400/30"
                                        )}
                                    >
                                        <Icons.Check
                                            className={cn(
                                                "size-3",
                                                isEven
                                                    ? "text-blue-600"
                                                    : "text-blue-400"
                                            )}
                                        />
                                    </div>
                                    <span
                                        className={cn(
                                            "text-sm font-medium transition-colors duration-300",
                                            isEven
                                                ? "text-slate-700 group-hover/feature:text-slate-900"
                                                : "text-gray-300 group-hover/feature:text-white"
                                        )}
                                    >
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hover glow effect */}
            <div
                className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    isEven
                        ? "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"
                        : "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-cyan-400/10"
                )}
            />
        </motion.div>
    );
}
