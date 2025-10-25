"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

const jobPostings = [
    {
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Bengaluru, India",
        type: "Full-time",
        experience: "2-4 years",
        description:
            "Build beautiful, responsive web applications that make complex banking operations simple. Work with React, Node.js, and cloud technologies.",
        requirements: [
            "Proficiency in React, Node.js, TypeScript",
            "Experience with cloud platforms (AWS/Azure)",
            "Knowledge of modern development practices",
            "Passion for clean code and user experience",
        ],
        badge: "New",
        badgeColor: "bg-green-500",
        icon: "Building2",
        color: "green",
    },
    {
        title: "Backend Engineer - Platform",
        department: "Engineering",
        location: "Bengaluru, India",
        type: "Full-time",
        experience: "2-5 years",
        description:
            "Build robust, scalable backend systems that power our AI platforms. Focus on API design, microservices, and system integration.",
        requirements: [
            "Strong backend development skills (Node.js/Python/Java)",
            "Experience with microservices architecture",
            "Knowledge of databases and API design",
            "Understanding of distributed systems",
        ],
        badge: "",
        badgeColor: "",
        icon: "Activity",
        color: "slate",
    },
    {
        title: "Sales Executive - Enterprise Sales",
        department: "Sales",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "3-6 years",
        description:
            "Drive growth by selling our AI-powered banking solutions to enterprise clients. Build relationships with key decision makers and help financial institutions transform their operations.",
        requirements: [
            "Proven track record in B2B enterprise sales",
            "Experience selling to financial institutions",
            "Strong communication and presentation skills",
            "Understanding of banking technology landscape",
        ],
        badge: "Hiring",
        badgeColor: "bg-blue-500",
        icon: "TrendingUp",
        color: "blue",
    },
];

const colorVariants = {
    blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
    purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40",
    green: "from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40",
    cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40",
    orange: "from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40",
    emerald:
        "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-500/40",
    amber: "from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40",
    slate: "from-slate-500/10 to-slate-600/5 border-slate-500/20 hover:border-slate-500/40",
};

export function CareersPage({ className, ...props }: GenericProps) {
    return (
        <section className={cn("", className)} {...props}>
            <div className="space-y-16">
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full border px-6 py-2 text-sm font-medium tracking-wider text-muted-foreground uppercase"
                    >
                        Join Our Team
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold md:text-4xl lg:text-5xl"
                    >
                        Build the{" "}
                        <span className="text-accent">Future of Banking</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto max-w-3xl text-balance text-muted-foreground md:text-lg"
                    >
                        Join a team of passionate innovators building AI-powered
                        solutions that transform how financial institutions
                        serve their customers. Make an impact from day one.
                    </motion.p>
                </div>

                {/* Job Listings */}
                <div className="grid gap-6">
                    {jobPostings.map((job, index) => (
                        <JobCard key={index} job={job} index={index} />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="pt-8 text-center"
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 blur-xl" />
                        <div className="relative space-y-4 px-8 py-6">
                            <p className="text-lg font-medium text-foreground/80">
                                Don&apos;t see the perfect role? We&apos;re
                                always looking for exceptional talent.
                            </p>
                            <Button asChild className="font-semibold">
                                <Link href="/contact">
                                    Get in Touch
                                    <Icons.ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function JobCard({
    job,
    index,
}: {
    job: (typeof jobPostings)[0];
    index: number;
}) {
    const IconComponent = Icons[job.icon as keyof typeof Icons];
    const colorClasses = colorVariants[job.color as keyof typeof colorVariants];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className={cn(
                "group relative rounded-2xl border bg-gradient-to-br p-6 transition-colors duration-300 hover:shadow-xl",
                colorClasses
            )}
        >
            {/* Header */}
            <div className="mb-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110 sm:size-12">
                            <IconComponent className="size-5 text-accent sm:size-6" />
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex flex-wrap items-start gap-2 sm:gap-3">
                                <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                                    {job.title}
                                </h3>
                                {job.badge && (
                                    <span
                                        className={cn(
                                            "shrink-0 rounded-full px-2 py-1 text-xs font-medium text-white",
                                            job.badgeColor
                                        )}
                                    >
                                        {job.badge}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <Button
                        size="sm"
                        asChild
                        className="z-10 hidden shrink-0 sm:flex"
                    >
                        <Link
                            href={`mailto:vaghul.rajan@fractalhive.com?subject=Application for ${job.title}&body=Hi, I am interested in applying for the ${job.title} position.`}
                        >
                            Apply Now
                            <Icons.ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                    </Button>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:flex sm:items-center sm:gap-4">
                    <span className="flex items-center gap-1">
                        <Icons.Building2 className="size-3" />
                        <span className="truncate">{job.department}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <Icons.MapPin className="size-3" />
                        <span className="truncate">{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <Icons.Calendar className="size-3" />
                        <span className="truncate">{job.type}</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <Icons.User className="size-3" />
                        <span className="truncate">{job.experience}</span>
                    </span>
                </div>

                {/* Mobile Apply Button */}
                <Button asChild className="w-full sm:hidden">
                    <Link href="/contact">
                        Apply Now
                        <Icons.ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                </Button>
            </div>

            {/* Description */}
            <div className="mb-6 space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                    {job.description}
                </p>
            </div>

            {/* Requirements */}
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground/80">
                    Key Requirements:
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                    {job.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-start gap-2">
                            <Icons.Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">
                                {req}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
