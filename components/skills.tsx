"use client";

import { motion } from "framer-motion";
import React from "react";

import { SKILLS_DATA } from "@/constants";import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Componente para una tarjeta de skill individual
const SkillCard = ({ skill }: { skill: typeof SKILLS_DATA[0] }) => {
  return (
    <div 
      className="flex items-center gap-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg px-4 py-3 min-w-[160px] flex-shrink-0"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div 
        className="text-2xl flex-shrink-0"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-white/80">
        {skill.name}
      </span>
    </div>
  );
};

// Componente para una fila del carrusel
const SkillsRow = ({ 
  skills, 
  direction, 
  duration 
}: { 
  skills: typeof SKILLS_DATA; 
  direction: 'left' | 'right';
  duration: number;
}) => {
  // Duplicamos las skills para crear el efecto infinito
  const duplicatedSkills = [...skills, ...skills];
  
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  // Use the custom hook to determine when this section is in view
  const { ref } = useSectionInView("Skills");
  
  // Dividimos las skills en dos filas
  const midPoint = Math.ceil(SKILLS_DATA.length / 2);
  const firstRowSkills = SKILLS_DATA.slice(0, midPoint);
  const secondRowSkills = SKILLS_DATA.slice(midPoint);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-6xl mx-auto scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Primera fila - se mueve hacia la izquierda */}
        <SkillsRow 
          skills={firstRowSkills} 
          direction="left" 
          duration={25}
        />
        
        {/* Segunda fila - se mueve hacia la derecha */}
        <SkillsRow 
          skills={secondRowSkills} 
          direction="right" 
          duration={25}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
