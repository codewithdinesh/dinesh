"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Only handle scroll for background effect and active section highlight
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Find which section is in view
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section with proper offset to keep entire page visible
  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Calculate offset to position section in view with space above
      const navHeight = 80; // Approximate height of the nav + extra margin
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // Update active section
      setActiveSection(targetId);

      // Smooth scroll with window.scrollTo instead of scrollIntoView
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-5 py-3 rounded-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg"
          : "bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                )}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <MobileNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </motion.div>
  );
}

function MobileNavigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        className="flex items-center justify-center p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={cn(
            "transition-all duration-300",
            isOpen ? "rotate-90" : "rotate-0",
          )}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          ) : (
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          )}
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border border-border/50 rounded-lg overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    className={cn(
                      "block px-4 py-2 text-sm",
                      activeSection === link.href.replace("#", "")
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary",
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace("#", "");
                      const element = document.getElementById(targetId);

                      if (element) {
                        // Calculate offset to position section in view with space above
                        const navHeight = 80; // Approximate height of the nav + extra margin
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                        // Update active section and close mobile menu
                        setActiveSection(targetId);
                        setIsOpen(false);

                        // Smooth scroll with window.scrollTo
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
