"use client";

import { motion } from "framer-motion";
import React from "react";

import { SKILLS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const SkillCard = ({ skill }: { skill: (typeof SKILLS_DATA)[number] }) => (
  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-black/5 dark:border-white/10 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-3xl">{skill.icon}</div>
    <span className="font-medium text-gray-800 dark:text-white/90">{skill.name}</span>
  </div>
);

const SkillsRow = ({ 
  skills, 
  direction,
  duration
}: { 
  skills: ReadonlyArray<(typeof SKILLS_DATA)[number]>; 
  direction: 'left' | 'right';
  duration: number;
}) => {
  const duplicatedSkills = React.useMemo(() => [...skills, ...skills], [skills]);

  return (
    <motion.div
      className="flex gap-5"
      initial={{ x: direction === "left" ? "0%" : "-120%" }}
      animate={{ x: direction === "left" ? "-120%" : "0%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      }}
    >
      {duplicatedSkills.map((skill, index) => (
        <SkillCard key={`${skill.name}-${index}`} skill={skill} />
      ))}
    </motion.div>
  );
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const midPoint = Math.ceil(SKILLS_DATA.length / 2);
  const firstRow = SKILLS_DATA.slice(0, midPoint);
  const secondRow = SKILLS_DATA.slice(midPoint);

  return (
    <section ref={ref} className="scroll-mt-14 text-center my-14" id="skills">
      <SectionHeading>My Skills</SectionHeading>
      
      <div className="w-screen xl:px-52 lg:px-40  md:px-28 sm:px-20 px-10">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="space-y-6">
            <SkillsRow skills={firstRow} direction="left" duration={50} />
            <SkillsRow skills={secondRow} direction="right" duration={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
