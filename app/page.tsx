
import Sidebar from "@/components/Sidebar/Sidebar";
import HeroSection from "@/components/HeroSection";
import AnimatedBeam from "@/components/AnimatedBeam";
import Experience from "@/components/Experience/Experience";
import SkillsList from "@/components/Skills/Skills";
import ProjectSection from "@/components/Projects/ProjectSection";
import ContactSection from "@/components/contacts/ContactSection";


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

        <ContactSection />

        {/* Footer */}


      </section>
    </div>
  );
}
