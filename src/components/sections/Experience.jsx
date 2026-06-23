import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-24 relative bg-slate-900/50" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          title="Education & Achievements" 
          subtitle="Academic background and recognition." 
        />
        
        <div className="space-y-8">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 bg-surface rounded-2xl flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
                <h4 className="text-primary font-medium mb-3">Computer Science & Engineering (AI & ML)</h4>
                <div className="text-slate-300 mb-4 flex items-center gap-2">
                  <span className="font-semibold text-white">PES University</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mx-2" />
                  <span className="text-fuchsia-400 font-mono font-bold">CGPA: 8.78</span>
                </div>
                
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <BookOpen size={16} /> Coursework Highlights
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Machine Learning", "Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming"].map((course, i) => (
                      <span key={i} className="text-sm px-3 py-1 bg-surface border border-border rounded-full text-slate-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-fuchsia-400" />
              <h3 className="text-xl font-bold text-white">Key Achievements</h3>
            </div>
            <ul className="space-y-4">
              {[
                "CNR Rao Scholarship Recipient",
                "DAC Scholarship Recipient",
                "Consistent Academic Excellence",
                "Strong Foundation in AI & Software Engineering"
              ].map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-400 flex-shrink-0" />
                  <span className="text-slate-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
