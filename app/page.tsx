import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeroSection from "@/components/HeroSection";
import AnimatedBeam from "@/components/AnimatedBeam";
import Experience from "@/components/Experience/Experience";
import SkillsList from "@/components/Skills/Skills";
import ProjectSection from "@/components/Projects/ProjectSection";


export default function Home() {
  return (


    <div className="flex ">


      <Sidebar />


      <section className="flex-grow p-2 flex-1 ">
        {/* Main Content */}


        <HeroSection />

        {/* Experience */}

        <Experience />

        {/* Skills */}

        <SkillsList />

        {/* Projects */}

        <ProjectSection />

        {/* Contact */}

        {/* Footer */}


      </section>
    </div>
  );
}
