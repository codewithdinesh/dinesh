import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { comfortaa, fontSans } from "@/config/fonts";
import Sidebar from "@/components/Sidebar/Sidebar";
import AnimatedBeam from "@/components/AnimatedBeam";

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: "Dinesh Rathod, Portfolio, Web Development, Next.js, React",
  authors: [{ name: "Dinesh Rathod", url: "https://github.com/codewithdinesh" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/android-chrome-512x512.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "codewithdinesh",
    images: [
      {
        url: `${siteConfig.siteUrl}/android-chrome-512x512.png`,
        alt: siteConfig.name,
      },
    ],

  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={comfortaa.variable}>
      <head />
      <body className={`${comfortaa.className} min-h-screen bg-background antialiased`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <AnimatedBeam>
            <div className="flex min-h-screen">
              {children}
            </div>

            {/* Footer */}
            <footer className="w-full flex items-center justify-center py-3 p-3 bg-slate-300 mt-3 bg-opacity-10">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/codewithdinesh"
                title="Dinesh Rathod"
              >
                <p className="text-xl mt-4">
                  Designed and developed with ❤️ by Dinesh Rathod
                </p>
              </Link>
            </footer>

          </AnimatedBeam>
        </Providers>
      </body>
    </html>
  );
}
