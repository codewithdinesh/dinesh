import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarResponsive from "@/components/Sidebar/SidebarResponsive";

export default function Home() {
  return (
    <section className="">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
    </section>
  );
}
