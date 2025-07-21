"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Wrench,
  Mail,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: any;
  fallbackHref?: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
    fallbackHref: "/",
  },
  {
    name: "About",
    href: "#about",
    icon: User,
    fallbackHref: "/#about",
  },
  {
    name: "Journey",
    href: "#timeline",
    icon: GraduationCap,
    fallbackHref: "/#timeline",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Briefcase,
    fallbackHref: "/projects",
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Wrench,
    fallbackHref: "/#skills",
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    fallbackHref: "/#contact",
  },
];

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Navbar({
  activeSection = "home",
  onSectionChange,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  const handleNavClick = (item: NavItem) => {
    if (item.href.startsWith("#")) {
      // Hash link - scroll to section
      const element = document.getElementById(item.href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (onSectionChange) {
          onSectionChange(item.href.slice(1));
        }
      } else if (item.fallbackHref) {
        // If section doesn't exist and there's a fallback, navigate there
        window.location.href = item.fallbackHref;
      }
    }
    // For regular links (like /projects), Next.js Link will handle navigation
    setMobileMenuOpen(false);
  };

  const isActive = (item: NavItem) => {
    // Special handling for projects page
    if (item.name === "Projects") {
      // If we're on /projects page, Projects should be active
      if (pathname === "/projects") {
        return true;
      }
      // If we're on home page and in projects section, Projects should be active
      if (pathname === "/" && activeSection === "projects") {
        return true;
      }
      return false;
    }

    // For hash links, check if we're on home page and in the correct section
    if (item.href.startsWith("#")) {
      return pathname === "/" && activeSection === item.href.slice(1);
    }

    // For other direct links
    return pathname === item.href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <img
                src="/imgs/brandOG.png"
                alt="Brand Logo"
                className="w-10 h-10"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amr Fayez
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item)
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.fallbackHref || item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item)
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-700/50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name}>
                  {item.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item)
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.fallbackHref || item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item)
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
