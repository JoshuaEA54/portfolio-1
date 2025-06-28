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
    title: "Passed High School",
    description:
      "Completed my high school curriculum, gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "React.js Bootcamp",
    description:
      "Successfully completed an intensive 1-month React.js Developer Bootcamp. Acquired expertise in React components, state management with Redux, and interacting with RESTful APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelancer React.js Developer",
    description:
      "Worked as a freelance React.js Developer, I have collaborated with various clients to create responsive and dynamic web applications.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Jaro Dev Studio",
    description:
      "Currently working as a Full-stack Next.js Developer, building responsive and dynamic web applications using Next.js, Tailwind CSS and OpenAI.",
    icon: React.createElement(SiNextdotjs),
    date: "2024 - present",
  },
] as const;


export const PROJECTS_DATA = [
  {
    title: "Mi Proyecto 1",
    description:
      "Describe aquí tu primer proyecto. Qué tecnologías usaste, qué problemas resuelve, etc.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/profile.png", // Usando imagen existente temporalmente
    projectUrl: "#", // Placeholder - cambiar por tu URL real
  },
  {
    title: "Mi Proyecto 2",
    description:
      "Describe aquí tu segundo proyecto. Incluye las características principales y el valor que aporta.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/profile.png", // Usando imagen existente temporalmente
    projectUrl: "#", // Placeholder - cambiar por tu URL real
  },
  {
    title: "Mi Proyecto 3",
    description:
      "Describe aquí tu tercer proyecto. Menciona los desafíos que enfrentaste y cómo los resolviste.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    imageUrl: "/profile.png", // Usando imagen existente temporalmente
    projectUrl: "#", // Placeholder - cambiar por tu URL real
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
