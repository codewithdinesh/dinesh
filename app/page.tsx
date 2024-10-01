"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience/Experience";
import SkillsList from "@/components/Skills/Skills";
import ProjectSection from "@/components/Projects/ProjectSection";
import ContactSection from "@/components/contacts/ContactSection";
import GallarySection from "@/components/gallary/GallarySection";

export default function Home() {


  return (
    <div className="flex ">
      <Sidebar />
      <section className="p-2 flex-1 overflow-auto">

        {/* Main Content */}
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
