import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about bridging the gap between intelligent systems and modern web architecture." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full border-primary/20 bg-gradient-to-br from-surface to-primary/5">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I am a Computer Science student specializing in Artificial Intelligence and Machine Learning at PES University, Bangalore (CGPA: 8.78). 
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                My strong foundation in Full Stack Development, Cloud Engineering, DevOps, and AI-powered applications allows me to build comprehensive, end-to-end solutions. I enjoy building scalable software systems, autonomous AI agents, and intelligent automation platforms.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My interests span across Generative AI, Agentic Systems, Backend Engineering, Cloud Infrastructure, and Software Architecture.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Degree', value: 'B.Tech CS (AI & ML)' },
              { label: 'University', value: 'PES University' },
              { label: 'CGPA', value: '8.78' },
              { label: 'Focus', value: 'Agentic AI Systems' }
            ].map((stat, index) => (
              <GlassCard key={index} className="text-center flex flex-col justify-center items-center py-8">
                <span className="text-primary font-bold text-xl mb-2">{stat.value}</span>
                <span className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</span>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
