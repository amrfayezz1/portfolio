"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Star,
  ExternalLink,
  Video,
  MessageCircle,
  Mail,
  GraduationCap,
  Briefcase,
  Code,
  Users,
  Award,
  Eye,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import ParticleSystem from "@/components/particle-system";
import Navbar from "@/components/navbar";
import Link from "next/link";

const journeySteps = [
  {
    id: "university",
    title: "Cairo University",
    subtitle: "Building the Foundation",
    period: "2021 - 2025",
    icon: GraduationCap,
    color: "bg-blue-500",
    description:
      "Where it all began - diving deep into computer science fundamentals and discovering my passion for software and AI.",
    details: [
      "Bachelor's in Computer Science",
      "GPA: 3.42",
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning, NLP",
    ],
    achievements: ["Top 50 of the Artificial Intelligence department"],
  },
  {
    id: "activities",
    title: "Student Activities",
    subtitle: "Leadership & Community",
    period: "2021 - 2023",
    icon: Users,
    color: "bg-green-500",
    description:
      "Developing leadership skills and building connections while contributing to the tech community.",
    details: [
      "IT Member at SCCI",
      "Frontend Member at GDSC",
      "Mentored 20+ junior students in web development",
    ],
    achievements: [
      "Best IT Member award in 2022",
      "Best Frontend Member award in 2023",
    ],
  },
  {
    id: "internships",
    title: "Internship Experiences",
    subtitle: "First Steps into Industry",
    period: "2023 - 2024",
    icon: Briefcase,
    color: "bg-purple-500",
    description:
      "Gaining real-world experience and applying theoretical knowledge to solve actual business problems.",
    details: [
      "Applications Intern at Tatweer Misr",
      "AI Using C++ training at Orange Digital Center",
      "Data Analytics Intern at CIB",
      "Software Engineering Intern at GetPayIn",
    ],
    achievements: [],
  },
  {
    id: "freelance",
    title: "Freelance Projects",
    subtitle: "Entrepreneurial Spirit",
    period: "2022 - Present",
    icon: Code,
    color: "bg-orange-500",
    description:
      "Building diverse projects for clients worldwide, honing my skills across different technologies and industries.",
    details: [
      "5+ successful projects delivered",
      "Specializing in Frontend, Backend, and Full Stack development",
    ],
    achievements: [],
  },
  {
    id: "work",
    title: "Professional Experience",
    subtitle: "Making an Impact",
    period: "2023 - Present",
    icon: Award,
    color: "bg-red-500",
    description:
      "Contributing to innovative products and leading development initiatives in fast-paced environments.",
    details: [
      "Full-Stack Developer at EuroAkademy",
      "Architected scalable web & mobile applications",
      "Published 3+ projects",
    ],
    achievements: [],
  },
];

const skills = [
  "Laravel",
  "Django",
  "Node.js",
  "React",
  "Next.js",
  "WordPress",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Hosting",
  "JavaScript",
  "Python",
  "C++",
  "PHP",
];

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl?: string;
  videoUrl?: string;
  category: "freelance" | "personal" | "work" | "university";
  technologies: string[];
  timeline: string;
  status: "completed" | "in-progress" | "maintained";
  featured: boolean;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "freelance":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "personal":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "work":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "university":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500";
    case "in-progress":
      return "bg-yellow-500";
    case "maintained":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

// Featured projects data
const featuredProjects: Project[] = [
  {
    id: "araneb",
    title: "Araneb - Rabbit Farm Tracker",
    description: "A mobile rabbit farm tracker with offline-first data sync.",
    longDescription:
      "Araneb is a Flutter-powered mobile app for managing every aspect of a rabbit farm. It features:\n" +
      "- Offline-first local storage with SQLite and Supabase sync when online\n" +
      "- Role-based access for Admins and Workers (including warehouse supervisors)\n" +
      "- Detailed animal records: tag number, breed, status (in Arabic), birthdate, number of births/matings, last birth/mating dates\n" +
      "- Intuitive dashboards and PDF reports to monitor farm metrics\n",
    image: "/imgs/PortfolioImgs/araneb.jpg",
    liveUrl: undefined,
    videoUrl: undefined,
    category: "freelance",
    technologies: [
      "Flutter",
      "SQLite",
      "Supabase",
      "Offline-First Architecture",
    ],
    timeline: "2025",
    status: "in-progress",
    featured: true,
  },
  {
    id: "smartdoc",
    title: "SmartDoc - AI-Powered Medical Assistant",
    description:
      "A full-stack AI web app for medical diagnosis suggestions and patient consultations.",
    longDescription:
      "SmartDoc is an AI-powered web application designed to assist healthcare professionals with intelligent diagnosis suggestions and patient consultation tools. It features a secure authentication system, interactive chatbot (Microsoft Bot Framework), dashboard analytics, settings management, and a professional contact system. The platform is built as a unified Laravel 11 application with modern frontend technologies (Bootstrap, Tailwind CSS, jQuery, AOS) and provides seamless API documentation via Swagger/OpenAPI. SmartDoc streamlines medical workflows, helping doctors make informed decisions efficiently.",
    image: "/imgs/PortfolioImgs/smartdoc.png",
    liveUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/smartdoc.mp4",
    category: "university",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Microsoft Bot Framework",
      "Machine Learning",
      "REST API",
      "NLP",
    ],
    timeline: "2025",
    status: "completed",
    featured: true,
  },
  {
    id: "chauffeurs-hub",
    title: "Chauffeurs Hub",
    description:
      "A unified platform for drivers and operators to manage bookings, routes, and performance.",
    longDescription:
      "Chauffeurs Hub is a responsive web application designed to streamline chauffeur service operations. Built with a Laravel backend and a Next.js/TypeScript front end, it features real-time job listings, Google Maps integration for route planning, a driver ranking and analytics dashboard, and admin tools for operators to monitor and assign jobs efficiently.",
    image: "/imgs/PortfolioImgs/CH.png",
    liveUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/CH.mp4",
    category: "work",
    technologies: ["Laravel", "jQuery", "MySQL", "Bootstrap", "REST API"],
    timeline: "2025",
    status: "in-progress",
    featured: true,
  },
];

function ProjectCard({
  project,
  index,
  onReadMore,
  onWatchDemo,
}: {
  project: Project;
  index: number;
  onReadMore?: (project: Project) => void;
  onWatchDemo?: (url: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
      onClick={() => onReadMore && onReadMore(project)}
    >
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Indicator */}
          <div className="absolute top-4 left-4">
            <div
              className={`w-3 h-3 rounded-full ${getStatusColor(
                project.status
              )}`}
            />
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-yellow-900">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              className="bg-white/90 text-slate-900 hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onReadMore && onReadMore(project);
              }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Read More
            </Button>
          </div>
        </div>

        <CardHeader className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <Badge className={getCategoryColor(project.category)}>
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Badge>
            <div className="flex items-center text-sm text-slate-500">
              <Calendar className="w-3 h-3 mr-1" />
              {project.timeline}
            </div>
          </div>

          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            {project.description}
          </CardDescription>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onReadMore && onReadMore(project);
              }}
            >
              <Eye className="w-3 h-3 mr-2" />
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function JourneyPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [showFABs, setShowFABs] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      // FABs visibility
      setShowFABs(window.scrollY > window.innerHeight * 0.8);

      // Timeline step logic
      const stepSections = journeySteps.map((step) =>
        document.getElementById(step.id)
      );
      const stepScrollPosition = window.scrollY + window.innerHeight / 2;
      stepSections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            stepScrollPosition >= offsetTop &&
            stepScrollPosition < offsetTop + offsetHeight
          ) {
            setActiveStep(index);
          }
        }
      });
    };

    // Intersection Observer for navbar active section
    const observerOptions = {
      root: null,
      rootMargin: "0% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = [
      "home",
      "about",
      "timeline",
      "projects",
      "skills",
      "contact",
    ];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Initial call to set the correct section on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Top Right FABs for Social Links */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-3 items-end">
        <a
          href="https://github.com/amrfayezz1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white"
          >
            <Github className="w-6 h-6" />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/amrfayezz1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
        </a>
        <a
          href="https://www.youtube.com/@amrfayezz1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white"
          >
            <Youtube className="w-6 h-6" />
          </Button>
        </a>
      </div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

        {/* Particle System */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <ParticleSystem
            particleCount={60}
            colors={["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"]}
            minSize={1}
            maxSize={4}
            speed={0.3}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4 relative"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <img
            src="/imgs/brandOG.png"
            alt="Brand Logo"
            className="w-32 h-32 mx-auto mb-4"
          />
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My Journey
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From curious student to software developer - explore the path that
            shaped my career
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center mb-12 flex-wrap"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 underline"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 underline"
              asChild
            >
              <Link href="/projects">
                <Eye className="w-4 h-4 mr-2" />
                View Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 focus:outline-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          aria-label="Scroll to about section"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.button>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                  Hi, I'm Amr Fayez 👋
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  A passionate <strong>Full-Stack Developer</strong> and{" "}
                  <strong>AI Graduate</strong> at Cairo University. I specialize
                  in creating scalable web applications and have a deep interest
                  in artificial intelligence and machine learning.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  With experience in both frontend and backend technologies, I
                  enjoy building complete solutions that solve real-world
                  problems. From React and Next.js to Laravel and Django, I work
                  with modern technologies to deliver exceptional user
                  experiences.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Beyond coding, I'm passionate about continuous learning and
                  staying updated with emerging technologies. I love sharing
                  knowledge through mentorship and collaborative projects.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    2+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    20+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Students Mentored
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    4
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Internships
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Connect
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-70 h-80 lg:w-96 lg:h-96">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full"></div>

                {/* Main image container */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                  <img
                    src="/imgs/prof.jpg"
                    alt="Amr Fayez - Full Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-2 left-8 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  React
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-8 -right-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Laravel
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -bottom-2 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Node.js
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute bottom-8 -left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Python
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-20" id="timeline">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Journey Unfolds
          </motion.h2>

          {/* Timeline Path */}
          <div className="relative">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 md:w-2"
              style={{ top: 0 }}
            >
              <motion.path
                d="M 1 0 Q 1 50 1 100 T 1 200 T 1 300 T 1 400 T 1 500"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>

            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  id={step.id}
                  className={`relative flex flex-col md:flex-row items-center mb-20 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className="static mx-auto mb-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:mb-0 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={
                        activeStep === index ? { scale: 1.2 } : { scale: 1 }
                      }
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    } ${"mt-4 md:mt-0"}`}
                  >
                    <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="mb-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            {step.period}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {step.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {step.description}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Details:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                              {step.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                          </div>

                          {step.achievements &&
                            step.achievements.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Achievements:
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                  {step.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A showcase of my best work spanning freelance projects, university
            assignments, and professional development.
          </motion.p>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <AnimatePresence>
                {featuredProjects.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold mb-2">
                      No projects found
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Try adjusting your search terms or filters
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {featuredProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onReadMore={setSelectedProject}
                        onWatchDemo={setModalVideo}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6 rounded-t-lg">
                    <button
                      className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white text-2xl font-bold"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <div className="flex items-start gap-4">
                      <img
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                          <Badge
                            className={getCategoryColor(
                              selectedProject.category
                            )}
                          >
                            {selectedProject.category.charAt(0).toUpperCase() +
                              selectedProject.category.slice(1)}
                          </Badge>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {selectedProject.timeline}
                          </div>
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(
                                selectedProject.status
                              )}`}
                            />
                            {selectedProject.status.charAt(0).toUpperCase() +
                              selectedProject.status.slice(1)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                        About This Project
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Demo Video */}
                    {selectedProject.videoUrl && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                          Project Demo
                        </h3>
                        <video
                          src={selectedProject.videoUrl}
                          controls
                          className="w-full h-64 rounded-lg bg-black"
                          poster={selectedProject.image}
                        />
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {selectedProject.liveUrl && (
                        <Button size="lg" className="flex-1" asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Live Website
                          </a>
                        </Button>
                      )}
                      {selectedProject.videoUrl && (
                        <Button
                          size="lg"
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            setModalVideo(selectedProject.videoUrl!);
                            setSelectedProject(null);
                          }}
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Watch in Fullscreen
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal Video Player */}
          <AnimatePresence>
            {modalVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={() => setModalVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-slate-500 hover:text-slate-900 dark:hover:text-white text-2xl font-bold"
                    onClick={() => setModalVideo(null)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <video
                    src={modalVideo}
                    controls
                    autoPlay
                    className="w-full h-96 rounded-lg bg-black"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View All Projects Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/projects">
                <Briefcase className="w-4 h-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills Acquired Along the Way
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="text-lg py-2 px-4 bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready for the Next Chapter?
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's discuss how my journey can contribute to your next project.
            I'm always excited to take on new challenges and collaborate with
            amazing people.
          </motion.p>

          <ContactForm />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a
                href="mailto:amrfayez.247@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4 mr-2" />
                amrfayez.247@gmail.com
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a
                href="https://wa.me/+201099359799"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      {showFABs && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronDown className="w-6 h-6 rotate-180" />
          </Button>
          <Link href="/projects" passHref legacyBehavior>
            <Button
              size="icon"
              className="rounded-full shadow-lg bg-white dark:bg-slate-800 border border-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400"
              aria-label="View Projects"
            >
              <Eye className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
