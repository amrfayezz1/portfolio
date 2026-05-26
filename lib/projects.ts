import type { Project } from "@/components/project-card";

export const allProjects: Project[] = [
  {
    id: "real-estate-calculator",
    title: "Real Estate Payment & Cash Flow Calculator",
    description:
      "A financial planning tool for real estate buyers in Egypt to model payment schedules, track milestones, and project cash flow across custom installment plans.",
    longDescription:
      "A sophisticated real estate financial planning calculator built for the Egyptian property market.\n\n" +
      "**Key Features:**\n" +
      "- Interactive milestone-based payment schedule builder\n" +
      "- Cash flow projections with month-by-month breakdown\n" +
      "- Extra payment tracking and management\n" +
      "- Summary cards with running totals and financial metrics\n" +
      "- Import / export data via JSON for saving and sharing plans\n" +
      "- Persistent state via localStorage — picks up where you left off\n" +
      "- Fully responsive dark UI with a premium editorial aesthetic",
    image: "/imgs/PortfolioImgs/RealEstate.png",
    liveUrl: "https://real-estate-calculator-eg.vercel.app/",
    githubUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/RealEstate.mp4",
    category: "personal",
    technologies: ["React", "Vite", "Tailwind CSS", "localStorage API"],
    timeline: "2026",
    status: "maintained",
    featured: true,
  },
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
    githubUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/araneb-mobile.mp4",
    category: "freelance",
    technologies: [
      "Flutter",
      "SQLite",
      "Supabase",
      "Offline-First Architecture",
    ],
    timeline: "2025",
    status: "completed",
    featured: false,
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
    githubUrl: "https://github.com/amrfayezz1/SmartDoc",
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
    liveUrl: "https://chauffeurshub.uk/",
    githubUrl: undefined,
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
      "Built a custom WordPress theme to showcase Luscent's hand-poured candles:\n" +
      "- Intuitive product catalog with fragrance categories and search\n" +
      "- Customizable gift options, bulk-order forms, and subscription upsells\n" +
      "- Newsletter signup modal offering 10% off on first order\n" +
      "- Integrated blog for content marketing and SEO\n" +
      "- Payment gateway integration (Shop Pay, Apple Pay, Google Pay, PayPal)\n" +
      "- Social media integration (Instagram feed, sharing buttons)\n" +
      "- Google Analytics setup and on-page SEO optimization\n" +
      "- Fully responsive design for mobile and desktop experiences\n",
    image: "/imgs/PortfolioImgs/luscent.png",
    // liveUrl: "https://luscentcandle.com/",
    githubUrl: undefined,
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
    featured: false,
  },
  {
    id: "gr-prestige-chauffeur",
    title: "GR Prestige Chauffeur",
    description:
      "Luxury chauffeur service website with CMS and admin dashboard for premium transportation in London.",
    longDescription:
      "GR Prestige Chauffeur is a professional website for a London-based luxury chauffeur service with over 20 years of experience. The platform features:\n" +
      "- Comprehensive service pages for airport transfers, city-to-city transport, seaport services, and wedding transport\n" +
      "- Content Management System (CMS) with dynamic content editing capabilities\n" +
      "- Admin dashboard with authentication, user management, and site settings\n" +
      "- Fleet showcase with luxury vehicle gallery\n" +
      "- Responsive design with modern animations (AOS) and interactive elements\n" +
      "- SEO-optimized structure with proper routing and meta management\n" +
      "- Professional contact forms and booking inquiry system\n" +
      "Built with Laravel 12 backend, the site demonstrates enterprise-level architecture with proper MVC patterns, database migrations, and modular design.",
    image: "/imgs/PortfolioImgs/GRP.png",
    liveUrl: "https://www.grprestigechauffeur.com/",
    githubUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/GRP.mp4",
    category: "work",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Tailwind CSS",
      "AOS",
      "CMS",
    ],
    timeline: "2025",
    status: "completed",
    featured: false,
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
    githubUrl: "https://github.com/amrfayezz1/speech-to-text-notes",
    videoUrl: "/imgs/PortfolioImgs/stt.mp4",
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
    githubUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/marasem.mp4",
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
    videoUrl: "/imgs/PortfolioImgs/taximore.mp4",
    githubUrl: undefined,
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
    githubUrl: undefined,
    videoUrl: "/imgs/PortfolioImgs/EA.mp4",
    category: "work",
    technologies: ["WordPress", "jQuery", "PHP", "Hosting", "REST API"],
    timeline: "2023",
    status: "completed",
    featured: true,
  },
  {
    id: "tatweer-misr",
    title: "Tatweer Misr",
    description: "QR-code reservation system with dynamic dashboard.",
    longDescription:
      "Tatweer Misr is a QR-code based reservation system featuring a dynamic dashboard for real-time management and analytics. It streamlines reservations and enhances operational efficiency.",
    image: "/imgs/PortfolioImgs/tatweer.png",
    githubUrl: undefined,
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
    githubUrl: "https://github.com/amrfayezz1/DjangoHR",
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
    videoUrl: "/imgs/PortfolioImgs/cambridge.mp4",
    githubUrl: undefined,
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
    videoUrl: "/imgs/PortfolioImgs/phoenix.mp4",
    githubUrl: undefined,
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
    videoUrl: "/imgs/PortfolioImgs/TBB.mp4",
    githubUrl: undefined,
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
    githubUrl: undefined,
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
    videoUrl: "/imgs/PortfolioImgs/gallery.mp4",
    githubUrl: "https://github.com/amrfayezz1/scciGallery",
    category: "university",
    technologies: ["HTML", "Bootstrap", "jQuery"],
    timeline: "2021",
    status: "completed",
    featured: false,
  },
];

// Helper function to get the latest N projects (sorted by timeline in descending order)
export const getLatestProjects = (count: number): Project[] => {
  return allProjects
    .sort((a, b) => {
      // Sort by timeline year (descending) and then by project order for same year
      const yearA = parseInt(a.timeline);
      const yearB = parseInt(b.timeline);
      if (yearA !== yearB) {
        return yearB - yearA; // More recent years first
      }
      // For projects in the same year, maintain the original order (which represents recency)
      return allProjects.indexOf(a) - allProjects.indexOf(b);
    })
    .slice(0, count);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter((project) => project.featured);
};
