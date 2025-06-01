"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";

import { ScrollAnimation } from "../ScrollAnimation";

import EnhancedSkillItem from "./EnhancedSkillItem";
import SkillShowcase from "./SkillShowcase";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill, SkillCategory } from "@/types/skills";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EnhancedSkillsListProps {
    skillCategories: SkillCategory[];
}

type SortOption = "name" | "level";
type FilterLevel = "All" | "Beginner" | "Intermediate" | "Advanced" | "Expert";

const levelWeight = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
};

const EnhancedSkillsList: React.FC<EnhancedSkillsListProps> = ({
    skillCategories,
}) => {
    const [activeCategory, setActiveCategory] = useState(
        skillCategories[0].category,
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortOption>("name");
    const [filterLevel, setFilterLevel] = useState<FilterLevel>("All");
    const [showFilters, setShowFilters] = useState(false);
    const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
    const [tabIndicatorProps, setTabIndicatorProps] = useState({
        width: 0,
        x: 0,
    });

    // Get current category's skills
    const currentCategorySkills =
        skillCategories.find((cat) => cat.category === activeCategory)?.skills ||
        []; // Effect to update tab indicator position - client-side only

    useEffect(() => {
        // Update active tab indicator
        const updateIndicator = () => {
            const activeTab = document.querySelector(`[data-state="active"]`);
            const tabsList = document.querySelector(`.tabs-list`);

            if (activeTab && tabsList) {
                const width = activeTab.clientWidth;
                const x =
                    activeTab.getBoundingClientRect().left -
                    tabsList.getBoundingClientRect().left;

                setTabIndicatorProps({ width, x });
            }
        };

        // Only run in browser
        if (typeof window !== "undefined") {
            updateIndicator();
            window.addEventListener("resize", updateIndicator);

            return () => window.removeEventListener("resize", updateIndicator);
        }
    }, [activeCategory]);

    useEffect(() => {
        // Apply filters and sorting
        let filtered = [...currentCategorySkills];

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();

            filtered = filtered.filter(
                (skill) =>
                    skill.skill.toLowerCase().includes(query) ||
                    (skill.description &&
                        skill.description.toLowerCase().includes(query)),
            );
        }

        // Apply level filter
        if (filterLevel !== "All") {
            filtered = filtered.filter((skill) => skill.level === filterLevel);
        }

        // Apply sorting
        if (sortBy === "name") {
            filtered = [...filtered].sort((a, b) => a.skill.localeCompare(b.skill));
        } else if (sortBy === "level") {
            filtered = [...filtered].sort(
                (a, b) =>
                    levelWeight[b.level as keyof typeof levelWeight] -
                    levelWeight[a.level as keyof typeof levelWeight],
            );
        }

        setVisibleSkills(filtered);
    }, [currentCategorySkills, searchQuery, sortBy, filterLevel]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    // Get all skills for showcase
    const allSkills = skillCategories.flatMap((category) => category.skills);

    return (
        <section className="py-16 relative" id="skills">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden -z-10 opacity-20">
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/30 rounded-full filter blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px]" />
            </div>

            {/* Skill Cards Showcase */}
            <SkillShowcase skills={allSkills} />

            <ScrollAnimation delay={0.1} direction="up">
                <h2 className="text-4xl font-bold text-center mb-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                        Skills & Expertise
                    </span>
                </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2} direction="up">
                <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12 text-lg">
                    I&apos;ve developed a diverse skillset through years of building
                    different projects and working with various technologies.
                </p>
            </ScrollAnimation>

            <div className="w-full max-w-6xl mx-auto px-4">
                <Tabs
                    className="w-full"
                    defaultValue={skillCategories[0].category}
                    onValueChange={setActiveCategory}
                >
                    {/* Animated Category Tabs */}
                    <div className="relative">
                        <TabsList className="tabs-list flex flex-wrap justify-center mb-8 h-auto p-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full overflow-x-auto">
                            {skillCategories.map((category) => (
                                <TabsTrigger
                                    key={category.category}
                                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-4 rounded-full transition-all"
                                    value={category.category}
                                >
                                    <motion.span
                                        animate={{
                                            rotate:
                                                activeCategory === category.category
                                                    ? [0, -10, 10, -5, 5, 0]
                                                    : 0,
                                        }}
                                        className="mr-2"
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        {category.icon}
                                    </motion.span>
                                    {category.category}
                                </TabsTrigger>
                            ))}
                        </TabsList>{" "}
                        {/* Slider indicator - animated line under active tab */}
                        <AnimatePresence>
                            <motion.div
                                className="absolute bottom-0 h-1 bg-primary rounded-full"
                                layoutId="tabIndicator"
                                style={{
                                    width: tabIndicatorProps.width,
                                    transform: `translateX(${tabIndicatorProps.x}px)`,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            // Client-side only animation
                            />
                        </AnimatePresence>
                    </div>

                    {/* Search & Filters */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative flex-grow max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    className="pl-10"
                                    placeholder="Search skills..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-2 items-center">
                                <Button
                                    className={showFilters ? "bg-primary/10" : ""}
                                    size="icon"
                                    variant="outline"
                                    onClick={() => setShowFilters(!showFilters)}
                                >
                                    <Filter className="h-4 w-4" />
                                </Button>

                                <AnimatePresence>
                                    {showFilters && (
                                        <motion.div
                                            animate={{ opacity: 1, width: "auto" }}
                                            className="flex gap-2 overflow-hidden"
                                            exit={{ opacity: 0, width: 0 }}
                                            initial={{ opacity: 0, width: 0 }}
                                        >
                                            <Select
                                                value={sortBy}
                                                onValueChange={(value) =>
                                                    setSortBy(value as SortOption)
                                                }
                                            >
                                                <SelectTrigger className="w-32">
                                                    <SelectValue placeholder="Sort by" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="name">Name</SelectItem>
                                                    <SelectItem value="level">Level</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Select
                                                value={filterLevel}
                                                onValueChange={(value) =>
                                                    setFilterLevel(value as FilterLevel)
                                                }
                                            >
                                                <SelectTrigger className="w-40">
                                                    <SelectValue placeholder="Filter level" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="All">All Levels</SelectItem>
                                                    <SelectItem value="Beginner">Beginner</SelectItem>
                                                    <SelectItem value="Intermediate">
                                                        Intermediate
                                                    </SelectItem>
                                                    <SelectItem value="Advanced">Advanced</SelectItem>
                                                    <SelectItem value="Expert">Expert</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Tab Contents */}
                    {skillCategories.map((category) => (
                        <TabsContent
                            key={category.category}
                            className="focus-visible:outline-none focus-visible:ring-0"
                            value={category.category}
                        >
                            {category.description && (
                                <ScrollAnimation delay={0.1} direction="up">
                                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                                        {category.description}
                                    </p>
                                </ScrollAnimation>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${category.category}-${searchQuery}-${sortBy}-${filterLevel}`}
                                    animate="show"
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                    exit={{ opacity: 0 }}
                                    initial="hidden"
                                    variants={containerVariants}
                                >
                                    {visibleSkills.length > 0 ? (
                                        visibleSkills.map((skill, skillIndex) => (
                                            <EnhancedSkillItem
                                                key={skill.skill}
                                                index={skillIndex}
                                                skill={skill}
                                            />
                                        ))
                                    ) : (
                                        <div className="col-span-3 py-10 text-center text-muted-foreground">
                                            No skills match your filters. Try adjusting your search or
                                            filters.
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default EnhancedSkillsList;
