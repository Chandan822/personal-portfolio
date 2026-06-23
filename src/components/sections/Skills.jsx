import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Generative AI", "OpenAI Agents SDK", "Gemini API", "RAG Systems", "Prompt Engineering", "NLP", "LLM Evaluation"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets", "Python", "Java"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "FluxCD", "Jenkins", "CI/CD Pipelines", "GitOps"]
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Drizzle ORM", "Git", "Kafka", "Linux"]
    },
    {
      title: "Software Engineering",
      skills: ["Data Structures & Algorithms", "System Design", "Design Patterns", "SOLID Principles", "OOP", "API Design"]
    }
  ];

  return (
    <section className="py-24 relative bg-slate-900/50" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive toolkit spanning across the modern software engineering spectrum." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-border pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 bg-surface-hover border border-border rounded-md text-sm text-slate-300 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
