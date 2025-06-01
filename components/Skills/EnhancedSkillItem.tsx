"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import { RiTimeFill, RiCodeBoxFill, RiBookmarkFill } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { Skill } from "@/types/skills";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useHover } from "@/hooks/useHover";

interface EnhancedSkillItemProps {
    skill: Skill;
    index: number;
}

const levelColors = {
    Beginner: {
        bg: "bg-gradient-to-r from-slate-500/80 to-slate-600/80",
        text: "text-slate-300",
        border: "border-slate-500",
        glow: "shadow-slate-500/20",
        badge: "bg-slate-500 hover:bg-slate-600",
    },
    Intermediate: {
        bg: "bg-gradient-to-r from-blue-500/80 to-blue-600/80",
        text: "text-blue-300",
        border: "border-blue-500",
        glow: "shadow-blue-500/20",
        badge: "bg-blue-500 hover:bg-blue-600",
    },
    Advanced: {
        bg: "bg-gradient-to-r from-green-500/80 to-green-600/80",
        text: "text-green-300",
        border: "border-green-500",
        glow: "shadow-green-500/20",
        badge: "bg-green-500 hover:bg-green-600",
    },
    Expert: {
        bg: "bg-gradient-to-r from-purple-500/80 to-purple-600/80",
        text: "text-purple-300",
        border: "border-purple-500",
        glow: "shadow-purple-500/20",
        badge: "bg-purple-500 hover:bg-purple-600",
    },
};

const EnhancedSkillItem = ({ skill, index }: EnhancedSkillItemProps) => {
    const [ref, isHovered] = useHover<HTMLDivElement>();
    const [showDetails, setShowDetails] = useState(false);
    const levelColor = levelColors[skill.level];

    const levelEmoji = () => {
        switch (skill.level) {
            case "Beginner":
                return "🌱";
            case "Intermediate":
                return "⚙️";
            case "Advanced":
                return "🚀";
            case "Expert":
                return "🏆";
            default:
                return "⚙️";
        }
    };

    return (
        <>
            <motion.div
                ref={ref}
                className={cn(
                    "relative p-6 rounded-xl backdrop-blur-sm border shadow-lg overflow-hidden transition-all duration-300",
                    levelColor.border,
                    levelColor.bg,
                    levelColor.glow ? `shadow-lg ${levelColor.glow}` : "",
                )}
                initial={{ opacity: 0, y: 20 }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: `0 10px 30px -10px ${levelColor.glow.replace("/20", "/40")}`,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => setShowDetails(true)}
            >
                {/* Background dot pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -inset-1 bg-grid-white/10" />
                </div>

                {/* Animated particles for Expert and Advanced levels */}
                {(skill.level === "Expert" || skill.level === "Advanced") && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <AnimatePresence>
                            {isHovered && (
                                <>
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1, 0.5],
                                                x: `${50 + (Math.random() * 50 - 25)}%`,
                                                y: `${100 + Math.random() * -120}%`,
                                            }}
                                            className={cn(
                                                "absolute w-1 h-1 rounded-full",
                                                levelColor.text,
                                            )}
                                            initial={{ opacity: 0, scale: 0, x: "50%", y: "100%" }}
                                            transition={{
                                                duration: 2,
                                                delay: i * 0.2,
                                                repeat: Infinity,
                                                repeatDelay: Math.random() * 2,
                                            }}
                                        />
                                    ))}
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* Glow effect on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            animate={{ opacity: 0.8 }}
                            className="absolute inset-0 -z-10 blur-xl"
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            style={{
                                background: `radial-gradient(circle at center, ${levelColor.bg.replace("bg-gradient-to-r from-", "").replace("/80", "").replace(" to-", ", ").replace("/80", "")}, transparent 70%)`,
                                opacity: 0.4,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </AnimatePresence>

                <div className="relative z-10">
                    {skill.icon && <div className="mb-3 text-2xl">{skill.icon}</div>}

                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-xl">{skill.skill}</h3>
                        <span className="text-xl">{levelEmoji()}</span>
                    </div>

                    {skill.description && (
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">
                            {skill.description}
                        </p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                        <Badge
                            className={cn(
                                "font-medium text-white border-white/20",
                                levelColor.text,
                            )}
                            variant="outline"
                        >
                            {skill.level}
                        </Badge>

                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                                whileInView={{ width: getWidthByLevel(skill.level) }}
                            />
                        </div>
                    </div>

                    <motion.div
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="mt-4 flex justify-end"
                        initial={{ opacity: 0 }}
                    >
                        <div className="flex items-center text-white text-sm cursor-pointer">
                            <span className="mr-1">Details</span>
                            <BsArrowRightCircle />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Skill Details Dialog */}
            <Dialog open={showDetails} onOpenChange={setShowDetails}>
                <DialogContent
                    className={cn("max-w-2xl border-2 shadow-2xl", levelColor.border)}
                >
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center">
                            {skill.icon && <span className="mr-2">{skill.icon}</span>}
                            {skill.skill}
                            <Badge className={cn("ml-3", levelColor.badge)}>
                                {skill.level}
                            </Badge>
                        </DialogTitle>
                    </DialogHeader>

                    <div className="py-4">
                        {skill.description && (
                            <p className="text-muted-foreground mb-6">{skill.description}</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {skill.years && (
                                <div className="flex items-center p-3 border border-border rounded-lg bg-background/50">
                                    <RiTimeFill className="text-xl mr-2 text-primary" />
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            Experience
                                        </div>
                                        <div className="font-medium">
                                            {skill.years} {skill.years === 1 ? "year" : "years"}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {skill.projects && (
                                <div className="flex items-center p-3 border border-border rounded-lg bg-background/50">
                                    <RiCodeBoxFill className="text-xl mr-2 text-primary" />
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            Projects
                                        </div>
                                        <div className="font-medium">
                                            {skill.projects}{" "}
                                            {skill.projects === 1 ? "project" : "projects"}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-medium text-lg mb-2 flex items-center">
                                    <RiBookmarkFill className="mr-2" /> Related Projects
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skill.relatedProjects.map((project, i) => (
                                        <Badge key={i} variant="secondary">
                                            {project}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

function getWidthByLevel(level: string): string {
    switch (level) {
        case "Beginner":
            return "25%";
        case "Intermediate":
            return "50%";
        case "Advanced":
            return "75%";
        case "Expert":
            return "100%";
        default:
            return "50%";
    }
}

export default EnhancedSkillItem;
