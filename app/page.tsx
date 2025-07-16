"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Calendar,
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

export default function JourneyPortfolio() {
  const [activeStep, setActiveStep] = useState(0);
  const [showFABs, setShowFABs] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      // FABs visibility
      setShowFABs(window.scrollY > window.innerHeight * 0.8);

      // Timeline step logic
      const sections = journeySteps.map((step) =>
        document.getElementById(step.id)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveStep(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Top Right FABs for Social Links */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 items-end">
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

        {/* Particle System */}
        <ParticleSystem
          particleCount={60}
          colors={["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"]}
          minSize={1}
          maxSize={4}
          speed={0.3}
        />

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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
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
          aria-label="Scroll to timeline"
          onClick={() => {
            const el = document.getElementById("timeline");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.button>
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

              // Responsive animation: pop from left on mobile, left/right on desktop
              const isMobile =
                typeof window !== "undefined" ? window.innerWidth < 768 : false;
              const initialAnim = isMobile
                ? { opacity: 0, x: -50 }
                : { opacity: 0, x: isLeft ? -50 : 50 };
              const whileInViewAnim = { opacity: 1, x: 0 };
              return (
                <motion.div
                  key={step.id}
                  id={step.id}
                  className={`relative flex flex-col md:flex-row items-center mb-20 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={initialAnim}
                  whileInView={whileInViewAnim}
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

      {/* Skills Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800">
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
