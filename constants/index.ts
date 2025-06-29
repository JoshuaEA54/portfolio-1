import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaBootstrap,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiSupabase,
  SiMongodb,
  SiOracle,
  SiGraphql,
  SiJest,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiSwagger,
  SiJsonwebtokens,
  SiZod,
  SiFirebase,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";


export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/joshua-elizondo-abarca/",
  github: "https://github.com/JoshuaEA54",
  resume: "/resume_joshua_2025.pdf",
  email: "joshuaeelizondo@gmail.com",
  source_code: "https://github.com/JoshuaEA54/portfolio",
} as const;


export const EXPERIENCES_DATA = [
  {
    title: "Advanced Web Development Student",
    description:
      "Currently mastering full-stack development through intensive coursework in Programming IV, Database Systems, Computer Networks, and Operating Systems. Built EduIA (AI-powered learning platform), implemented OAuth flows, JWT authentication, PWA features, and real-time WebSocket communication. Gained expertise in Next.js, TypeScript, Supabase, Sanity CMS, middleware implementation, and modern deployment strategies using Vercel and Railway.",
    icon: React.createElement(SiNextdotjs),
    date: "2024 - Present",
  },
  {
    title: "Universidad Nacional Guitar Ensemble Member",
    description:
      "Active member of the university's representative electric guitar ensemble, demonstrating discipline, teamwork, and creative expression. Balancing artistic pursuits with academic excellence while developing leadership and collaboration skills through regular performances and group coordination.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "Calculus Tutor, Universidad Nacional",
    description:
      "Provided comprehensive calculus instruction to first-year engineering and mathematics students. Developed personalized learning strategies that resulted in a 20% improvement in student grades. Created supplementary materials and practice problems, conducted group study sessions, and mentored students in problem-solving techniques and mathematical reasoning.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Technology Workshop Facilitator, US Embassy Access Program",
    description:
      "Led interactive technology workshops for local youth as part of the US Embassy's educational outreach program. Designed and delivered sessions on programming fundamentals, web development, and digital literacy. Collaborated with embassy staff and educators to create inclusive curriculum promoting STEM education and international cooperation.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;


export const PROJECTS_DATA = [
  {
    title: "EduIA – AI-Powered Learning Platform",
    description:
      "Revolutionary educational platform reducing quiz creation time by 90%. Features AI-generated content via OpenAI, real-time collaborative sessions with WebSockets, PWA capabilities for offline functionality, and comprehensive analytics. Implements OAuth authentication, JWT token management, and Sanity CMS for media handling. Deployed with Lighthouse performance scores of 95+.",
    tags: ["Next.js", "OpenAI", "WebSockets", "PWA", "OAuth", "TypeScript", "Sanity", "Vercel"],
    imageUrl: "/profile.png",
    projectUrl: "#",
  },
  {
    title: "UNAColabora – Internship Matching Portal",
    description:
      "Comprehensive platform connecting university students with internship opportunities. Features advanced matching algorithms, company profiles, application tracking, and real-time notifications. Built with modern full-stack architecture using Supabase for backend services, Prisma for database management, and responsive design with Tailwind CSS. Includes complete documentation and system architecture design.",
    tags: ["React", "Supabase", "Prisma", "TypeScript", "Tailwind", "Algorithms"],
    imageUrl: "/profile.png",
    projectUrl: "#",
  },
  {
    title: "Java / Spring Boot REST API Collection",
    description:
      "Small academic APIs (GraphQL & REST). Shows Java backend expertise.",
    tags: ["Java", "Spring Boot", "GraphQL", "REST API", "PostgreSQL"],
    imageUrl: "/profile.png",
    projectUrl: "#",
  },
] as const;


export const SKILLS_DATA = [
  
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "C++", icon: React.createElement(SiCplusplus) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "HTML5", icon: React.createElement(SiHtml5) },
  { name: "CSS3", icon: React.createElement(SiCss3) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "Bootstrap", icon: React.createElement(FaBootstrap) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "GraphQL", icon: React.createElement(SiGraphql) },
  { name: "Supabase", icon: React.createElement(SiSupabase) },
  { name: "Spring Boot", icon: React.createElement(BiLogoSpringBoot) },
  { name: "Git", icon: React.createElement(FaGitAlt) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  { name: "Swagger", icon: React.createElement(SiSwagger) },
  { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "JWT", icon: React.createElement(SiJsonwebtokens) },
  { name: "Vercel", icon: React.createElement(SiVercel) },
  { name: "Firebase", icon: React.createElement(SiFirebase) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "Oracle DB", icon: React.createElement(SiOracle) },
  { name: "Jest", icon: React.createElement(SiJest) },
  { name: "Figma", icon: React.createElement(FaFigma) },
  { name: "ESLint", icon: React.createElement(SiEslint) },
  { name: "Prettier", icon: React.createElement(SiPrettier) },
  { name: "Zod", icon: React.createElement(SiZod) },
] as const;

export const OWNER_NAME = "Joshua Elizondo Abarca";

export const ORIGINAL_AUTHOR_CREDITS = {
  name: "Sanidhya Kumar Verma",
  email: "sanidhya.verma12345@gmail.com",
  github: "https://github.com/sanidhyy",
  repository: "https://github.com/sanidhyy/portfolio",
  license: "MIT",
  message: "Portfolio template by Sanidhya Kumar Verma - MIT License",
} as const;
