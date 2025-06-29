"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm a <b className="font-medium">5th-semester Information Systems Engineering</b> student at
        Universidad Nacional, Costa Rica (5/8 semesters completed successfully).
        I specialize in <b className="font-medium">modern web development</b> with technologies like
        <b className="font-medium"> Next.js, TypeScript, React, and real-time WebSockets</b>.
      </p>

      <p className="mb-3">
        This semester I've mastered <b className="font-medium">Database Systems (Oracle, Firebase), 
        Computer Networks, Operating Systems, and Advanced Web Programming</b>. I recently shipped 
        <b className="font-medium"> EduIA</b>, an AI-powered learning platform using OpenAI, Sanity, 
        and PWA technologies that transforms educational content creation.
      </p>

      <p className="mb-3">
        While I've explored <b className="font-medium">Java backend development</b> with REST APIs, 
        GraphQL, and Spring Boot, I'm deeply passionate about <b className="font-medium">full-stack 
        web development</b> and the endless possibilities it offers in today's tech landscape.
      </p>

      <p>
        I'm driven by <b className="font-medium">continuous learning, emerging technologies, 
        AI innovation, and creating solutions that genuinely help people</b>. My goal is to 
        connect with mentors and collaborators who can help me grow professionally while 
        building impactful applications.
      </p>
    </motion.section>
  );
};

export default About;
