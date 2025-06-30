import React from "react";
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
    title: "Full-Stack Developer in Training",
    description:
      "Information Systems engineering student building production-grade apps. Created EduIA—an AI-powered learning platform featuring Google OAuth, JWT-secured APIs and real-time WebSocket sessions.",
    icon: React.createElement(SiNextdotjs),
    date: "2024 - Present",
  },
  {
    title: "Electric Guitarist - Universidad Nacional Ensemble",
    description:
      "Lead electric guitarist in the university ensemble, honing discipline and standout stage presence through weekly rehearsals and campus shows.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "Calculus Tutor, Universidad Nacional",
    description:
      "Provided comprehensive calculus instruction to first-year engineering students and mentored students in problem-solving techniques and mathematical reasoning.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const PROJECTS_DATA = [
  {
    title: "EduIA - AI-Powered Learning Platform",
    description:
      "Revolutionary educational platform reducing quiz creation time by 90%, and real-time student's feedback analysis by the AI.",
    tags: ["Next.js", "OpenAI", "WebSockets", "OAuth", "TypeScript", "Sanity"],
    imageUrl: "/eduIA.png",
    projectUrl: "https://eduia.up.railway.app/",
  },
  {
    title: "Universities Management API",
    description:
      "A comprehensive RESTful API designed to facilitate the management of educational activities within university environments.",
    tags: ["Java", "Spring", "JWT", "Swagger", "Docker", "Lombok"],
    imageUrl: "/UniversitiesManagementAPI.png",
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
