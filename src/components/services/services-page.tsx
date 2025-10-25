"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
    {
        title: "AI-Augmented Development Services",
        subtitle: "Strategic Implementation of Transformative AI Solutions",
        description:
            "Accelerate your development lifecycle with AI-powered tools and methodologies. We integrate cutting-edge AI capabilities into your development workflow to enhance productivity, code quality, and innovation speed.",
        longDescription:
            "Our AI-augmented development approach combines human expertise with artificial intelligence to create more efficient, reliable, and innovative software solutions. We implement AI tools for code generation, testing, optimization, and continuous improvement.",
        icon: "Sparkles" as keyof typeof Icons,
        category: "Transformation",
        approach: "AI-first development",
        keyPoints: [
            "AI-powered code generation and optimization tools",
            "Intelligent testing and quality assurance automation",
            "Machine learning model integration and deployment",
            "AI-powered design thinking for smarter, scalable solutions",
        ],
        outcomes: [
            "50% faster development cycles",
            "80% reduction in bugs and technical debt",
            "3x increase in development team productivity",
        ],
        processSteps: [
            "AI Toolchain Assessment",
            "Development Workflow Integration",
            "Team Training & Adoption",
            "Continuous Optimization",
            "Performance Monitoring",
        ],
        gradient: "from-blue-500/10 via-cyan-400/5 to-indigo-500/10",
        accentColor: "text-blue-500",
        bgPattern: "bg-blue-500/5",
    },
    {
        title: "AI Strategy & Implementation Consulting",
        subtitle:
            "Transformative AI Strategy for Forward-Thinking Organizations",
        description:
            "Navigate the AI transformation landscape with expert guidance. We help organizations develop comprehensive AI strategies that align with business objectives and drive sustainable competitive advantage.",
        longDescription:
            "Our strategic consulting approach combines deep AI expertise with business acumen to create actionable roadmaps for AI adoption. We assess organizational readiness, identify high-impact use cases, and design implementation strategies that maximize ROI while minimizing risk.",
        icon: "Building2" as keyof typeof Icons,
        category: "Strategy",
        approach: "AI-first transformation",
        keyPoints: [
            "Comprehensive AI readiness assessment and gap analysis",
            "Strategic roadmap development and prioritization",
            "AI governance framework and ethical implementation",
            "Change management and organizational transformation",
        ],
        outcomes: [
            "Clear AI transformation roadmap with measurable goals",
            "Organization-wide AI literacy and adoption readiness",
            "Competitive advantage through strategic AI implementation",
        ],
        processSteps: [
            "AI Maturity Assessment",
            "Strategic Vision Development",
            "Implementation Roadmap",
            "Pilot Program Launch",
            "Scale & Optimization",
        ],
        gradient: "from-purple-500/10 via-pink-400/5 to-violet-500/10",
        accentColor: "text-purple-500",
        bgPattern: "bg-purple-500/5",
    },
    {
        title: "Training Organizations for AI Success",
        subtitle: "Empowering Teams with AI Skills and Knowledge",
        description:
            "Build organizational AI capabilities through comprehensive training programs. We design and deliver customized learning experiences that empower teams to leverage AI tools effectively and drive innovation across the organization.",
        longDescription:
            "Our training programs combine theoretical knowledge with hands-on practice to build lasting AI competencies. We create customized curricula based on organizational needs, covering everything from AI fundamentals to advanced implementation strategies for different roles and departments.",
        icon: "BarChart3" as keyof typeof Icons,
        category: "Education",
        approach: "Skills-based empowerment",
        keyPoints: [
            "Customized AI training curricula for different roles and departments",
            "Hands-on workshops with real-world AI tools and applications",
            "AI literacy certification programs and assessments",
            "Change management and AI adoption best practices",
        ],
        outcomes: [
            "Organization-wide AI competency and confidence",
            "Increased innovation and AI tool adoption rates",
            "Measurable improvement in AI-related productivity",
        ],
        processSteps: [
            "Skills Assessment",
            "Curriculum Design",
            "Training Delivery",
            "Competency Evaluation",
            "Ongoing Support",
        ],
        gradient: "from-emerald-500/10 via-green-400/5 to-teal-500/10",
        accentColor: "text-emerald-500",
        bgPattern: "bg-emerald-500/5",
    },
];

export function Services({ className, ...props }: GenericProps) {
    return (
        <section className={cn("space-y-24", className)} {...props}>
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto rounded-full border px-6 py-2 text-sm font-medium tracking-wider text-muted-foreground uppercase"
                >
                    Expert Services
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold md:text-5xl lg:text-6xl"
                >
                    Accelerating <span className="text-accent">Innovation</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mx-auto max-w-4xl text-lg text-balance text-muted-foreground md:text-xl"
                >
                    From strategic transformation to cutting-edge development,
                    our comprehensive services empower organizations to thrive
                    in an AI-driven world.
                </motion.p>
            </div>

            {/* Services Showcase */}
            <div className="space-y-20">
                {services.map((service, index) => (
                    <ServiceShowcase
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </div>

            {/* Methodology Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
            >
                <div className="relative z-10 p-6 py-4 text-center">
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
                            Our Proven{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Methodology
                            </span>
                        </h3>
                        <p className="mx-auto max-w-2xl text-gray-300 md:text-lg">
                            Every engagement follows our time-tested approach
                            that combines industry expertise with innovative
                            thinking. We don&apos;t just deliver solutions - we
                            build lasting partnerships.
                        </p>
                        <Button
                            size="lg"
                            className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                            asChild
                        >
                            <Link href="/contact">
                                Discuss Your Project
                                <Icons.ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Background Effects */}
                <div className="absolute -top-24 -left-24 size-48 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
                <div className="absolute -right-24 -bottom-24 size-48 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
            </motion.div>
        </section>
    );
}

function ServiceShowcase({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    const IconComponent = Icons[service.icon];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.3 }}
            className="relative"
        >
            {/* Service Number */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.3 }}
                className="absolute -top-6 left-8 z-20 flex size-12 items-center justify-center rounded-full border-2 border-accent bg-background text-lg font-bold text-accent"
            >
                {String(index + 1).padStart(2, "0")}
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.3 }}
                    className="lg:col-span-7"
                >
                    <div
                        className={cn(
                            "relative overflow-hidden rounded-3xl border p-8 transition-colors duration-500 hover:shadow-2xl lg:p-12",
                            service.gradient,
                            "border-border/20 bg-gradient-to-br hover:border-border/40"
                        )}
                    >
                        {/* Header */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className={cn(
                                        "flex size-16 items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110",
                                        service.bgPattern
                                    )}
                                >
                                    <IconComponent
                                        className={cn(
                                            "size-8",
                                            service.accentColor
                                        )}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className={cn(
                                                "rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase",
                                                service.accentColor,
                                                "bg-current/10"
                                            )}
                                        >
                                            {service.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {service.approach}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                    {service.title}
                                </h2>
                                <p
                                    className={cn(
                                        "text-lg font-medium",
                                        service.accentColor
                                    )}
                                >
                                    {service.subtitle}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground/80">
                                    {service.longDescription}
                                </p>
                            </div>
                        </div>

                        {/* Key Points */}
                        <div className="mt-8 space-y-4">
                            <h4 className="text-sm font-semibold tracking-wider text-foreground/70 uppercase">
                                What We Deliver
                            </h4>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {service.keyPoints.map((point, pointIndex) => (
                                    <motion.div
                                        key={pointIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay:
                                                0.8 +
                                                index * 0.3 +
                                                pointIndex * 0.1,
                                        }}
                                        className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/30 p-3 backdrop-blur-sm transition-colors duration-300 hover:border-border/60 hover:bg-background/50"
                                    >
                                        <Icons.ArrowRight
                                            className={cn(
                                                "mt-0.5 size-4 shrink-0",
                                                service.accentColor
                                            )}
                                        />
                                        <span className="text-sm text-foreground/90">
                                            {point}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 1.2 + index * 0.3,
                            }}
                            className="mt-8"
                        >
                            <Button size="lg" className="font-semibold" asChild>
                                <Link href="/contact">
                                    Explore This Service
                                    <Icons.ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
                    </div>
                </motion.div>

                {/* Side Panels */}
                <div className="space-y-6 lg:col-span-5">
                    {/* Process Steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                        className="rounded-2xl border border-border/20 bg-card/50 p-6 backdrop-blur-sm"
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-foreground">
                                Our Process
                            </h4>
                            <div className="space-y-3">
                                {service.processSteps.map((step, stepIndex) => (
                                    <motion.div
                                        key={stepIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay:
                                                1 +
                                                index * 0.3 +
                                                stepIndex * 0.1,
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className={cn(
                                                "flex size-6 items-center justify-center rounded-full text-xs font-bold text-white",
                                                service.accentColor.replace(
                                                    "text-",
                                                    "bg-"
                                                )
                                            )}
                                        >
                                            {stepIndex + 1}
                                        </div>
                                        <span className="text-sm font-medium text-foreground/90">
                                            {step}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Expected Outcomes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.3 }}
                        className={cn(
                            "rounded-2xl border p-6 transition-colors duration-300 hover:shadow-lg",
                            service.gradient,
                            "border-border/20 bg-gradient-to-br"
                        )}
                    >
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-foreground">
                                Expected Outcomes
                            </h4>
                            <div className="space-y-3">
                                {service.outcomes.map(
                                    (outcome, outcomeIndex) => (
                                        <motion.div
                                            key={outcomeIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay:
                                                    1.2 +
                                                    index * 0.3 +
                                                    outcomeIndex * 0.1,
                                            }}
                                            className="flex items-center gap-3 rounded-lg bg-background/50 p-3 backdrop-blur-sm"
                                        >
                                            <Icons.TrendingUp
                                                className={cn(
                                                    "size-4",
                                                    service.accentColor
                                                )}
                                            />
                                            <span className="text-sm font-medium text-foreground">
                                                {outcome}
                                            </span>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
