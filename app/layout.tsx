import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { comfortaa, fontSans } from "@/config/fonts";
import Sidebar from "@/components/Sidebar/Sidebar";
import AnimatedBeam from "@/components/AnimatedBeam";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}; export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={comfortaa.variable}>
      <head />
      <body

        className={`${comfortaa.className}  min-h-screen bg-background antialiased",
          c`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AnimatedBeam>
            <div className="flex min-h-screen ">

              {children}

            </div>

            {/* Footer */}
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/codewithdinesh"
                title="Dinesh Rathod"
              >
                By @codewithdinesh
              </Link>
            </footer>

          </AnimatedBeam>
        </Providers>
      </body>
    </html>
  );
}
