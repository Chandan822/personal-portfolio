import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export const Projects = () => {
  const projects = [
    {
      title: "AI Rewards Concierge",
      subtitle: "Autonomous Competitive Intelligence Agent",
      description: "Built an AI-powered research platform capable of analyzing loyalty programs and generating source-attributed competitive intelligence reports.",
      features: ["Multi-agent architecture", "Real-time web research", "Source verification engine", "Loyalty program comparison"],
      techStack: ["OpenAI Agents SDK", "Gemini", "Fastify", "Zod", "Node.js"]
    },
    {
      title: "WellNet",
      subtitle: "Healthcare Management Platform",
      description: "Comprehensive healthcare management system enabling doctors and patients to manage appointments, treatments, and medical records.",
      features: ["Appointment scheduling", "Disease outbreak monitoring", "Automated deployment pipeline", "86%+ test coverage"],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "GitHub Actions"]
    },
    {
      title: "Cloud Environment Provisioner",
      subtitle: "Infrastructure Automation Platform",
      description: "Infrastructure automation platform capable of provisioning cloud environments with a single configuration.",
      features: ["Automated infrastructure deployment", "Kubernetes cluster provisioning", "GitOps workflows", "Infrastructure as Code"],
      techStack: ["Terraform", "Kubernetes", "FluxCD", "Helm", "Jenkins", "AWS EKS"]
    },
    {
      title: "Code Coach AI",
      subtitle: "AI-powered coding assistant",
      description: "AI-powered coding assistant designed to provide personalized coding guidance and learning support.",
      features: ["AI chat interface", "Code snippet management", "Session tracking", "Learning progress monitoring"],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Watch Party",
      subtitle: "Desktop Application",
      description: "Desktop application allowing users to synchronize video streaming sessions with friends.",
      features: ["Real-time synchronized playback", "WebSocket communication", "Premium subscription model", "Chat functionality"],
      techStack: ["Java", "Spring Boot", "JavaFX", "PostgreSQL", "WebSockets"]
    },
    {
      title: "Social Feed System",
      subtitle: "Full-stack Social Media",
      description: "Full-stack social media platform with secure authentication and database automation.",
      features: ["JWT authentication", "Secure password encryption", "Database triggers and procedures", "Responsive UI"],
      techStack: ["React.js", "Express.js", "MySQL", "JWT", "Tailwind CSS"]
    }
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my recent work spanning AI agents, full-stack applications, and cloud infrastructure." 
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
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <GithubIcon size={20} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
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
