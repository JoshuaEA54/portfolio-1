import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

// Navigation links
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

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/joshua-elizondo-abarca/",
  github: "https://github.com/JoshuaEA54",
  resume: "/resume_joshua_2025.pdf",
  email: "joshuaeelizondo@gmail.com",
  source_code: "https://github.com/JoshuaEA54/portfolio", // Enlace al código fuente
} as const;

// Data for work experience
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

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Mi Proyecto 1",
    description:
      "Describe aquí tu primer proyecto. Qué tecnologías usaste, qué problemas resuelve, etc.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/project-placeholder.png", // Placeholder temporal
    projectUrl: "#", // Placeholder - cambiar por tu URL real
  },
  {
    title: "Mi Proyecto 2", 
    description:
      "Describe aquí tu segundo proyecto. Incluye las características principales y el valor que aporta.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/project-placeholder.png", // Placeholder temporal
    projectUrl: "#", // Placeholder - cambiar por tu URL real
  },
  {
    title: "Mi Proyecto 3",
    description:
      "Describe aquí tu tercer proyecto. Menciona los desafíos que enfrentaste y cómo los resolviste.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    imageUrl: "/project-placeholder.png", // Placeholder temporal
    projectUrl: "#", // Placeholder - cambiar por tu URL real
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Shadcn UI",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Zustand",
  "Python",
  "C++",
  "Java",
] as const;

// Owner name
export const OWNER_NAME = "Joshua Elizondo Abarca";

// Original Author Credits (Required by MIT License)
export const ORIGINAL_AUTHOR_CREDITS = {
  name: "Sanidhya Kumar Verma",
  email: "sanidhya.verma12345@gmail.com",
  github: "https://github.com/sanidhyy",
  repository: "https://github.com/sanidhyy/portfolio",
  license: "MIT",
  message: "Portfolio template by Sanidhya Kumar Verma - MIT License"
} as const;
