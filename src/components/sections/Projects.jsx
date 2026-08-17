import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const Projects = () => {
  const projects = [
    {
      title: "Watch2Gether",
      subtitle: "Real-time Video Watch Party Platform",
      description: "Full-stack real-time synchronized video watch party platform allowing users to create virtual lounges, stream videos, and chat in real time.",
      features: ["Role-Based Access Control (RBAC)", "Real-time video sync & Socket.IO handshake", "Friend system & live status tracking", "Persistent chat, @mentions & emoji reactions"],
      techStack: ["React", "Node.js", "Express.js", "Socket.IO", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
      githubUrl: "https://github.com/Chandan822/Watch2gether",
      demoUrl: "https://watch2gether-brown.vercel.app/"
    },
    {
      title: "Nova Chat",
      subtitle: "AI-powered coding assistant",
      description: "AI-powered coding assistant designed to provide personalized coding guidance and learning support.",
      features: ["AI chat interface", "Code snippet management", "Session tracking", "Learning progress monitoring"],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/Chandan822/NovaChat",
      demoUrl: "https://novachat-chatbot.vercel.app/"
    },
    {
      title: "AI Rewards Concierge",
      subtitle: "Autonomous Competitive Intelligence Agent",
      description: "Built an AI-powered research platform capable of analyzing loyalty programs and generating source-attributed competitive intelligence reports.",
      features: ["Multi-agent architecture", "Real-time web research", "Source verification engine", "Loyalty program comparison"],
      techStack: ["OpenAI Agents SDK", "Gemini", "Fastify", "Zod", "Node.js"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      title: "AI Applicant Tracking System",
      subtitle: "Enterprise-grade AI Recruitment & ATS",
      description: "Enterprise-grade ATS automating resume parsing, semantic candidate ranking with pgvector, job posting bias detection, and interview tracking.",
      features: ["Google Gemini resume parsing & scoring", "pgvector 1536-D semantic vector matching", "Real-time DEI inclusivity & bias scanner", "Recruiter analytics & funnel dashboard"],
      techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "pgvector", "Prisma", "Google Gemini", "Tailwind CSS"],
      githubUrl: "https://github.com/Chandan822/ATS-Resume-screening-application",
      demoUrl: ""
    },
    {
      title: "WellNet",
      subtitle: "Healthcare Management Platform",
      description: "Comprehensive healthcare management system enabling doctors and patients to manage appointments, treatments, and medical records.",
      features: ["Appointment scheduling", "Disease outbreak monitoring", "Automated deployment pipeline", "86%+ test coverage"],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "GitHub Actions"],
      githubUrl: "",
      demoUrl: ""
    }
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my recent work spanning AI agents, full-stack applications, and software engineering." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex flex-col h-full group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Code2 size={20} />
                    <span className="text-sm font-semibold tracking-wider uppercase">{project.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">{project.title}</h3>
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Source Code">
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Live Site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-slate-400 bg-code-bg/50 px-2 py-1 rounded">
                    {tech}
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
