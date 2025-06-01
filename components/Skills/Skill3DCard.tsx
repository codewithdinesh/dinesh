"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Skill3DCardProps {
    skill: string;
    level: string;
    icon?: React.ReactNode;
    description?: string;
    index: number;
}

const levelColors = {
    Beginner:
        "bg-gradient-to-r from-slate-500/60 to-slate-600/60 border-slate-500/50",
    Intermediate:
        "bg-gradient-to-r from-blue-500/60 to-blue-600/60 border-blue-500/50",
    Advanced:
        "bg-gradient-to-r from-green-500/60 to-green-600/60 border-green-500/50",
    Expert:
        "bg-gradient-to-r from-purple-500/60 to-purple-700/60 border-purple-500/50",
};

const Skill3DCard = ({
    skill,
    level,
    icon,
    description,
    index,
}: Skill3DCardProps) => {
    const levelColor = levelColors[level as keyof typeof levelColors] || "";
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isHovered) return;

            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate rotation based on mouse position relative to card center
            // Limit rotation to a smaller range for subtlety
            const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 5;
            const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 5;

            setRotateX(-rotateXValue); // Invert X for natural tilt
            setRotateY(rotateYValue);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHovered]);

    const resetRotation = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                "relative p-6 rounded-xl backdrop-blur-lg border shadow-lg overflow-hidden",
                "transition-all duration-300",
                levelColor,
            )}
            initial={{ opacity: 0, y: 20 }}
            style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                   ${isHovered ? "scale3d(1.05, 1.05, 1.05)" : "scale3d(1, 1, 1)"}`,
                transition: "transform 0.2s ease-out",
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={resetRotation}
        >
            {/* Reflective shine effect */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: isHovered
                        ? `linear-gradient(
              ${135 + rotateX * 5}deg,
              rgba(255,255,255,0) 30%,
              rgba(255,255,255,0.4) 45%,
              rgba(255,255,255,0.7) 50%,
              rgba(255,255,255,0.4) 55%,
              rgba(255,255,255,0) 70%
            )`
                        : "none",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "center",
                    transition: "opacity 0.3s ease",
                }}
            />

            {/* Content container - which will also have 3D transforms */}
            <div
                className="relative z-10"
                style={{
                    transform: `translateZ(20px)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {icon && <div className="mb-3 text-3xl">{icon}</div>}

                <h3 className="text-white font-bold text-xl mb-2">{skill}</h3>

                {description && (
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-between mt-2">
                    <Badge
                        className={cn(
                            "font-medium border-white/30 text-white",
                            isHovered ? "bg-white/10" : "",
                        )}
                        variant="outline"
                    >
                        {level}
                    </Badge>

                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                            whileInView={{ width: getWidthByLevel(level) }}
                        />
                    </div>
                </div>
            </div>

            {/* 3D elements in background */}
            {isHovered && (
                <>
                    {/* Floating shapes for Advanced and Expert levels */}
                    {(level === "Advanced" || level === "Expert") && (
                        <>
                            <div
                                className="absolute w-8 h-8 bg-white/10 rounded-full blur-sm"
                                style={{
                                    transform:
                                        "translateZ(40px) translateX(-10px) translateY(-15px) rotate(30deg)",
                                }}
                            />
                            <div
                                className="absolute w-6 h-6 bg-white/10 rounded-sm blur-sm"
                                style={{
                                    transform:
                                        "translateZ(30px) translateX(10px) translateY(20px) rotate(-15deg)",
                                }}
                            />
                        </>
                    )}
                </>
            )}
        </motion.div>
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

export default Skill3DCard;
