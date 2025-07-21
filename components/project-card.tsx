"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Eye, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  category: "freelance" | "personal" | "work" | "university";
  technologies: string[];
  timeline: string;
  status: "completed" | "in-progress" | "maintained";
  featured: boolean;
}

export const getCategoryColor = (category: string) => {
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

export const getStatusColor = (status: string) => {
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

interface ProjectCardProps {
  project: Project;
  index: number;
  onReadMore?: (project: Project) => void;
  onWatchDemo?: (url: string) => void;
}

export default function ProjectCard({
  project,
  index,
  onReadMore,
  onWatchDemo,
}: ProjectCardProps) {
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
