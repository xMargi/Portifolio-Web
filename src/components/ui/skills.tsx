"use client";

import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";



type SkillsGridProps = {
    children: React.ReactNode;
    columns?: number;
    className?: string;
    gap?: string;
};

type SkillSectionProps = {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    accent?: "lime" | "sky";
    tags?: string[];
    className?: string;
};

type SkillProgressProps = {
    title: string;
    percentage: number;
    icon?: string;
    accent?: "lime" | "sky";
    index?: number;
    className?: string;
};

type StatItem = {
    value: string;
    label: string;
};

type SkillsStatsRowProps = {
    stats: StatItem[];
    className?: string;
};



const accentClasses = {
    lime: {
        corner: "border-[#c8f53f]/60",
        glow: "bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(200,245,63,0.05)_0%,transparent_70%)]",
        pct: "text-[#c8f53f]",
        barFrom: "from-[#c8f53f]/40",
        barTo: "to-[#c8f53f]",
        dot: "bg-[#c8f53f] shadow-[0_0_8px_#c8f53f]",
    },
    sky: {
        corner: "border-[#7fd4f5]/60",
        glow: "bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(127,212,245,0.05)_0%,transparent_70%)]",
        pct: "text-[#7fd4f5]",
        barFrom: "from-[#7fd4f5]/30",
        barTo: "to-[#7fd4f5]",
        dot: "bg-[#7fd4f5] shadow-[0_0_8px_#7fd4f5]",
    },
};







export const SkillsStatsRow = ({
    stats,
    className = "",
}: SkillsStatsRowProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ gridColumn: "1 / -1" }}
            className={cn("bg-[#222224] mt-[2px]", className)}
        >
            <div
                className="grid divide-x divide-white/[0.06]"
                style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
            >
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center py-5 px-4">
                        <span className="font-['Bebas_Neue',sans-serif] text-[40px] leading-none tracking-wide bg-gradient-to-br from-white/90 to-white/40 bg-clip-text text-transparent">
                            {stat.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-white/30 mt-1">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

SkillsStatsRow.displayName = "SkillsStatsRow";



export const SkillsGrid = ({
    children,
    columns = 2,
    gap = "2px",
    className = "",
}: SkillsGridProps) => {
    const childArray = React.Children.toArray(children);


    const isStatsRow = (child: React.ReactNode): boolean => {
        return (
            React.isValidElement(child) &&
            (child.type === SkillsStatsRow ||
                (child.type as React.FC)?.displayName === "SkillsStatsRow")
        );
    };

    const sections = childArray.filter(
        (child) => React.isValidElement(child) && !isStatsRow(child)
    );
    const statsRows = childArray.filter((child) => isStatsRow(child));

    const isOdd = sections.length % columns !== 0;

    const wrappedSections = sections.map((child, index) => {
        const isLast = index === sections.length - 1;
        const isPenultimate = index === sections.length - 2;
        const applyEvenFix = !isOdd && isPenultimate;

        if ((isOdd && isLast) || applyEvenFix) {
            return (
                <div key={index} style={{ gridColumn: "1 / -1" }}>
                    {child}
                </div>
            );
        }
        return child;
    });

    return (
        <div
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }}
            className={cn("grid w-full text-white", className)}
        >
            {wrappedSections}
            {statsRows}
        </div>
    );
};



export const SkillSection = ({
    children,
    title,
    subtitle = "ferramentas",
    accent = "lime",
    tags = [],
    className = "",
}: SkillSectionProps) => {
    const colors = accentClasses[accent];
    const cornerPos =
        accent === "lime"
            ? "top-0 left-0 border-t border-l"
            : "top-0 right-0 border-t border-r";

    return (
        <div
            className={cn(
                "relative bg-[#222224] px-10 py-9 overflow-hidden",
                className
            )}
        >
            {/* ambient glow */}
            <div className={cn("pointer-events-none absolute inset-0", colors.glow)} />

            {/* decorative corner */}
            <div className={cn("absolute w-9 h-9", cornerPos, colors.corner)} />

            {/* header */}
            <p className="font-['Bebas_Neue',sans-serif] text-2xl tracking-widest text-white/90 mb-1">
                {title}
            </p>
            <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {subtitle}
                </span>
                <div className="flex-1 h-px bg-white/[0.07]" />
            </div>

            {/* skill rows */}
            <div className="flex flex-col gap-5">{children}</div>

            {/* tags footer */}
            {tags.length > 0 && (
                <div className="mt-7 pt-5 border-t border-white/[0.07] flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 mr-1">
                        Foco
                    </span>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] uppercase tracking-[0.12em] font-medium text-white/40
                         px-2.5 py-1 rounded-sm
                         bg-white/[0.04] border border-white/[0.09]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};



export const SkillProgress = ({
    percentage = 0,
    title,
    icon,
    accent = "lime",
    index = 0,
    className = "",
}: SkillProgressProps) => {
    const colors = accentClasses[accent];
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                width: `${percentage}%`,
                transition: {
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                },
            });
        }
    }, [isInView, controls, percentage, index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={cn("", className)}
        >
            {/* label row */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                    {icon && (
                        <span
                            className="w-[22px] h-[22px] rounded-[4px] flex items-center justify-center text-[12px]
                         bg-white/[0.05] border border-white/[0.08] flex-shrink-0"
                        >
                            {icon}
                        </span>
                    )}
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/85">
                        {title}
                    </span>
                </div>
                <span
                    className={cn(
                        "font-['Bebas_Neue',sans-serif] text-[19px] leading-none tracking-wide",
                        colors.pct
                    )}
                >
                    {percentage}%
                </span>
            </div>

            {/* bar */}
            <div className="relative h-[3px] rounded-full bg-white/[0.07] overflow-visible">
                <motion.div
                    initial={{ width: 0 }}
                    animate={controls}
                    className={cn(
                        "absolute h-full rounded-full bg-gradient-to-r",
                        colors.barFrom,
                        colors.barTo
                    )}
                >
                    {/* glow dot at tip */}
                    <span
                        className={cn(
                            "absolute -right-[3px] top-1/2 -translate-y-1/2",
                            "w-[7px] h-[7px] rounded-full",
                            colors.dot
                        )}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
