import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
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
  SiFirebase
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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

// Data for skills with icons and colors
export const SKILLS_DATA = [
  {
    name: "React",
    icon: React.createElement(FaReact),
    color: "#61DAFB"
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#3178C6"
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
    color: "#F7DF1E"
  },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
    color: "#000000"
  },
  {
    name: "Tailwind CSS",
    icon: React.createElement(SiTailwindcss),
    color: "#06B6D4"
  },
  {
    name: "HTML",
    icon: React.createElement(SiHtml5),
    color: "#E34F26"
  },
  {
    name: "CSS",
    icon: React.createElement(SiCss3),
    color: "#1572B6"
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
    color: "#339933"
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt),
    color: "#F05032"
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
    color: "#336791"
  },
  {
    name: "MySQL",
    icon: React.createElement(SiMysql),
    color: "#4479A1"
  },
  {
    name: "Prisma",
    icon: React.createElement(SiPrisma),
    color: "#2D3748"
  },
  {
    name: "Python",
    icon: React.createElement(FaPython),
    color: "#3776AB"
  },
  {
    name: "Java",
    icon: React.createElement(FaJava),
    color: "#ED8B00"
  },
  {
    name: "C++",
    icon: React.createElement(SiCplusplus),
    color: "#00599C"
  },
  {
    name: "Supabase",
    icon: React.createElement(SiSupabase),
    color: "#3ECF8E"
  },
  {
    name: "Firebase",
    icon: React.createElement(SiFirebase),
    color: "#FFCA28"
  },
  {
    name: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
    color: "#0055FF"
  }
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
