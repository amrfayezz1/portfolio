"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import ProjectCard, {
  type Project,
  getCategoryColor,
  getStatusColor,
} from "@/components/project-card";
import { allProjects, getFeaturedProjects } from "@/lib/projects";

const categories = [
  { value: "all", label: "All Projects", icon: Code },
  { value: "freelance", label: "Freelance", icon: Briefcase },
  { value: "personal", label: "Personal", icon: User },
  { value: "work", label: "Work", icon: Briefcase },
  { value: "university", label: "University", icon: GraduationCap },
];

export default function ProjectsPage() {
  // Get URL parameters
  const searchParams = useSearchParams();

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Load project from URL parameter on mount
  useEffect(() => {
    const projectId = searchParams.get("id");
    if (projectId) {
      const project = allProjects.find((p) => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
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

  const featuredProjects = getFeaturedProjects();

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
                {allProjects.length}
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
                <div className="text-6xl mb-4">ðŸ”</div>
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
                  {selectedProject.githubUrl && (
                    <Button
                      size="lg"
                      className="flex-1"
                      asChild
                      variant={"secondary"}
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Repo
                      </a>
                    </Button>
                  )}
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
