"use client";

import { useEffect } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience/Experience";
import SkillsList from "@/components/Skills/Skills";
import ProjectSection from "@/components/Projects/ProjectSection";
import ContactSection from "@/components/contacts/ContactSection";
import GallarySection from "@/components/gallary/GallarySection";
import { NavigationMenu } from "@/components/NavigationMenu";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  // Add scroll restoration when navigating
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    // Smooth scroll to the top on page load
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex">
      {/* Custom cursor for desktop */}
      <CustomCursor />

      {/* Fixed navigation */}
      <NavigationMenu />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <section className="p-2 flex-1 overflow-auto space-y-24">
        <HeroSection />
        <Experience />
        <SkillsList />
        <ProjectSection />
        <GallarySection />
        <ContactSection />
      </section>
    </div>
  );
}
