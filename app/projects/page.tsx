"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Briefcase,
  User,
  ArrowLeft,
  Eye,
  Star,
  GraduationCap,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ParticleSystem from "@/components/particle-system";
import Navbar from "@/components/navbar";

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

const projects: Project[] = [
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
  {
    id: "luscent-candle",
    title: "Luscent Candle",
    description:
      "Responsive WordPress e-commerce store for eco-friendly soy candles and gifting.",
    longDescription:
      "Built a custom WordPress theme to showcase Luscent’s hand-poured candles:\n" +
      "- Intuitive product catalog with fragrance categories and search\n" +
      "- Customizable gift options, bulk-order forms, and subscription upsells\n" +
      "- Newsletter signup modal offering 10% off on first order\n" +
      "- Integrated blog for content marketing and SEO\n" +
      "- Payment gateway integration (Shop Pay, Apple Pay, Google Pay, PayPal)\n" +
      "- Social media integration (Instagram feed, sharing buttons)\n" +
      "- Google Analytics setup and on-page SEO optimization\n" +
      "- Fully responsive design for mobile and desktop experiences\n",
    image: "/imgs/PortfolioImgs/luscent.png",
    liveUrl: "https://luscentcandle.com/",
    videoUrl: "/imgs/PortfolioImgs/luscent.mp4",
    category: "freelance",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "SEO",
      "Google Analytics",
    ],
    timeline: "2025",
    status: "completed",
    featured: true,
  },
  {
    id: "speech-to-text-notes",
    title: "Speech-to-Text Notes",
    description:
      "A Laravel web app for creating and organizing notes using real-time speech recognition.",
    longDescription:
      "Speech-to-Text Notes is a modern web application that simplifies note-taking by allowing users to speak their thoughts directly into the browser. Built with Laravel, it features real-time speech recognition (Web Speech API), user accounts, guest mode, rich text editing, responsive design, and secure database storage. Users can register, use guest mode, format notes, and manage them from any device.",
    image: "/imgs/PortfolioImgs/stt.png",
    liveUrl: undefined,
    videoUrl: undefined,
    category: "personal",
    technologies: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Web Speech API",
      "MySQL",
      "Bootstrap",
    ],
    timeline: "2025",
    status: "completed",
    featured: false,
  },
  {
    id: "marasem",
    title: "Marasem",
    description:
      "A full-featured art marketplace backend with social login and Paymob payment integration.",
    longDescription:
      "Marasem is a Laravel-based backend powering an art marketplace platform. It features:\n" +
      "- Social login (Google, Facebook, Behance) with secure token-based authentication\n" +
      "- Paymob payment gateway integration with HMAC validation and PDF invoice generation\n" +
      "- RESTful API with Swagger documentation\n" +
      "- Modular architecture for categories, collections, events, and more\n" +
      "- Robust seeding, migration, and admin notification system\n" +
      "The project is designed for scalability and secure e-commerce operations.",
    image: "/imgs/PortfolioImgs/marasem.png",
    videoUrl: undefined,
    category: "freelance",
    technologies: ["Laravel", "Dashboard", "MySQL", "REST API", "Bootstrap"],
    timeline: "2024",
    status: "completed",
    featured: false,
  },
  {
    id: "taxi-more",
    title: "Taxi More",
    description:
      "Elite transportation service connecting users with multiple providers.",
    longDescription:
      "Taxi More is an elite transportation platform that connects users with multiple service providers to accommodate various needs. Features include real-time booking, provider integration, and seamless user experience.",
    image: "/imgs/PortfolioImgs/taxiMore.png",
    liveUrl: "https://taximore.co.uk/",
    category: "work",
    technologies: ["Laravel", "jQuery", "Git", "Hosting", "REST API"],
    timeline: "2024",
    status: "completed",
    featured: true,
  },
  {
    id: "euro-akademy",
    title: "Euro Akademy",
    description:
      "Educational website making studying abroad easier for students.",
    longDescription:
      "Euro Akademy is an educational platform designed to simplify the process of studying abroad for students. It provides resources, application management, and guidance for international education.",
    image: "/imgs/PortfolioImgs/EA.png",
    liveUrl: "https://euroakademy.com/",
    category: "work",
    technologies: ["WordPress", "jQuery", "PHP", "Hosting", "REST API"],
    timeline: "2023",
    status: "completed",
    featured: false,
  },
  {
    id: "tatweer-misr",
    title: "Tatweer Misr",
    description: "QR-code reservation system with dynamic dashboard.",
    longDescription:
      "Tatweer Misr is a QR-code based reservation system featuring a dynamic dashboard for real-time management and analytics. It streamlines reservations and enhances operational efficiency.",
    image: "/imgs/PortfolioImgs/tatweer.png",
    videoUrl: "/imgs/PortfolioImgs/tatweerVideo.mp4",
    category: "work",
    technologies: ["React", "Laravel", "Dashboard"],
    timeline: "2023",
    status: "completed",
    featured: false,
  },
  {
    id: "hrproject",
    title: "Employee Management System",
    description:
      "A web-based HR management system for handling employees and vacation requests.",
    longDescription:
      "HRProject is a web application designed to streamline HR processes for small organizations. It allows administrators to manage employee records, handle vacation requests, and track attendance. The system features a user-friendly interface, secure login, CRUD operations for employees, and vacation management workflows. Built with vanilla JavaScript, HTML, and CSS, it demonstrates strong front-end fundamentals and practical HR automation.",
    image: "/imgs/PortfolioImgs/HR.png",
    videoUrl: "/imgs/PortfolioImgs/HRvideo.mp4",
    category: "university",
    technologies: [
      "Django",
      "SQLite",
      "Bootstrap",
      "JavaScript",
      "Python",
      "Local Storage",
    ],
    timeline: "2023",
    status: "completed",
    featured: false,
  },
  {
    id: "cambridge-college",
    title: "Cambridge College",
    description: "Accreditation business for educational institutions.",
    longDescription:
      "Cambridge College provides accreditation services for educational institutions, ensuring quality and compliance with international standards.",
    image: "/imgs/PortfolioImgs/cambridge.png",
    liveUrl: "https://www.cambridge-college.me.uk/",
    category: "freelance",
    technologies: ["PHP", "MySQL", "jQuery", "Hosting"],
    timeline: "2022",
    status: "completed",
    featured: false,
  },
  {
    id: "phoenix-academy",
    title: "Phoenix Academy",
    description: "Accreditation business for educational institutions.",
    longDescription:
      "Phoenix Academy offers accreditation and educational services, supporting institutions in achieving excellence and recognition.",
    image: "/imgs/PortfolioImgs/phoenix.png",
    liveUrl: "https://phoenixacademy.uk.com/",
    category: "freelance",
    technologies: ["PHP", "MySQL", "jQuery", "Hosting"],
    timeline: "2022",
    status: "completed",
    featured: false,
  },
  {
    id: "the-british-board",
    title: "The British Board",
    description: "Accreditation business for educational institutions.",
    longDescription:
      "The British Board specializes in accreditation for educational institutions, providing evaluation and certification services.",
    image: "/imgs/PortfolioImgs/british.png",
    liveUrl: "https://thebritishboard.com/",
    category: "freelance",
    technologies: ["PHP", "MySQL", "jQuery", "Hosting"],
    timeline: "2022",
    status: "completed",
    featured: false,
  },
  {
    id: "scci-conference",
    title: "SCCI Conference",
    description: "Conference system for submitting and rating tasks.",
    longDescription:
      "SCCI Conference is a system for managing conference submissions and ratings, streamlining the review process for academic and professional events.",
    image: "/imgs/PortfolioImgs/SCCIconference.png",
    videoUrl: "/imgs/PortfolioImgs/confVideo.mp4",
    category: "university",
    technologies: ["PHP", "jQuery", "MySQL"],
    timeline: "2022",
    status: "completed",
    featured: false,
  },
  {
    id: "scci-gallery",
    title: "SCCI Gallery",
    description: "Student Club gallery throughout the previous years.",
    longDescription:
      "SCCI Gallery showcases the history and achievements of the Student Club through a curated gallery of events and activities.",
    image: "/imgs/PortfolioImgs/SCCIgallery.png",
    liveUrl: "https://amrfayezz1.github.io/scciGallery/21/gallery21.html",
    category: "university",
    technologies: ["HTML", "Bootstrap", "jQuery"],
    timeline: "2021",
    status: "completed",
    featured: false,
  },
];

const categories = [
  { value: "all", label: "All Projects", icon: Code },
  { value: "freelance", label: "Freelance", icon: Briefcase },
  { value: "personal", label: "Personal", icon: User },
  { value: "work", label: "Work", icon: Briefcase },
  { value: "university", label: "University", icon: GraduationCap },
];

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

export default function ProjectsPage() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesFeatured = !showFeaturedOnly || project.featured;

      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [searchTerm, selectedCategory, showFeaturedOnly]);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <section className="relative min-h-[80vh] py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 overflow-hidden pt-28">
        {/* Added pt-28 for navbar spacing */}
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
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Journey
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore my portfolio of web applications, tools, and solutions.
              Each project represents a unique challenge solved with modern
              technologies and best practices.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {projects.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Total Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {featuredProjects.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Featured
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Users Served
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex items-center">
                          <Icon className="w-4 h-4 mr-2" />
                          {category.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant={showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className="flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Featured Only
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
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
                {filteredProjects.map((project, index) => (
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
                        className={getCategoryColor(selectedProject.category)}
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
                      <Badge key={tech} variant="outline" className="text-sm">
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
    </div>
  );
}

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
