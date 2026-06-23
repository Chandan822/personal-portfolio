import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Download, Terminal, BrainCircuit, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 rounded-full border-4 border-surface glass flex items-center justify-center overflow-hidden relative">
              <BrainCircuit className="w-16 h-16 text-primary absolute" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Chandan R</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <BrainCircuit size={16} className="text-primary" /> AI & ML Engineer
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Terminal size={16} className="text-fuchsia-400" /> Full Stack Developer
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Cloud size={16} className="text-blue-400" /> Cloud & DevOps Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
          >
            Building scalable software systems, autonomous AI agents, intelligent automation platforms, and modern web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button onClick={() => window.location.href = '#projects'}>
              View My Work
            </Button>
            <Button variant="outline" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download size={20} /> Download Resume
            </Button>
            <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
              <a href="https://github.com/Chandan822" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/chandan-r-566ab5347/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
